/**
 * Core Visual Novel Engine for "Bình Minh Tháng Tám - Hà Nội 1945"
 */

class VNEngine {
    constructor() {
        this.scenario = window.SCENARIO_DATA;
        this.codexData = window.CODEX_DATA;
        this.sound = window.soundCtrl;

        // Trạng thái game hiện tại
        this.currentNode = null;
        this.stats = { ...this.scenario.initialStats };
        this.history = []; // Backlog
        this.unlockedCodex = this.loadUnlockedCodex();
        this.unlockedEndings = this.loadUnlockedEndings();

        // Typewriter state
        this.isTyping = false;
        this.typewriterTimeout = null;
        this.currentFullText = "";
        this.currentVisibleText = "";
        this.charIndex = 0;

        // Settings
        this.settings = {
            textSpeed: 28, // ms per char
            autoPlayDelay: 2200,
            bgmVolume: 0.5,
            sfxVolume: 0.7
        };

        // Engine flags
        this.isAutoPlay = false;
        this.autoPlayTimeout = null;
        this.isWaitingForChoice = false;

        // DOM Element cache
        this.dom = {};
    }

    init() {
        this.cacheDOM();
        this.bindEvents();
        this.updateStatsUI(false);
    }

    cacheDOM() {
        this.dom = {
            gameScreen: document.getElementById("game-screen"),
            titleScreen: document.getElementById("title-screen"),
            endingScreen: document.getElementById("ending-screen"),
            sceneBg: document.getElementById("scene-background"),
            chapterBadge: document.getElementById("chapter-badge"),
            locationBadge: document.getElementById("location-badge"),
            dateBadge: document.getElementById("date-badge"),
            characterStage: document.getElementById("character-stage"),
            characterAvatar: document.getElementById("character-avatar"),
            speakerBox: document.getElementById("speaker-box"),
            dialogueText: document.getElementById("dialogue-text"),
            choicesContainer: document.getElementById("choices-container"),
            advanceIndicator: document.getElementById("advance-indicator"),
            flashOverlay: document.getElementById("flash-overlay"),

            // Stats
            statMoraleBar: document.getElementById("stat-morale-bar"),
            statMoraleVal: document.getElementById("stat-morale-val"),
            statReadinessBar: document.getElementById("stat-readiness-bar"),
            statReadinessVal: document.getElementById("stat-readiness-val"),
            statGarrisonBar: document.getElementById("stat-garrison-bar"),
            statGarrisonVal: document.getElementById("stat-garrison-val"),
            statAlertBar: document.getElementById("stat-alert-bar"),
            statAlertVal: document.getElementById("stat-alert-val"),

            // Buttons
            btnAuto: document.getElementById("btn-auto"),
            btnBacklog: document.getElementById("btn-backlog"),
            btnSave: document.getElementById("btn-quick-save"),
            btnLoad: document.getElementById("btn-quick-load"),
            btnCodex: document.getElementById("btn-codex-open"),
            btnSettings: document.getElementById("btn-settings-open"),

            // Notification
            toastContainer: document.getElementById("toast-container")
        };
    }

    bindEvents() {
        // Bấm vào hộp thoại để hoàn thành gõ chữ hoặc chuyển câu tiếp
        const dialogueBox = document.getElementById("dialogue-box");
        if (dialogueBox) {
            dialogueBox.addEventListener("click", () => this.handleAdvance());
        }

        // Advance Indicator
        if (this.dom.advanceIndicator) {
            this.dom.advanceIndicator.addEventListener("click", (e) => {
                e.stopPropagation();
                this.handleAdvance();
            });
        }

        // Bàn phím điều khiển
        window.addEventListener("keydown", (e) => {
            if (this.dom.gameScreen.classList.contains("hidden")) return;
            // Tránh kích hoạt khi đang mở modal
            if (document.querySelector(".modal:not(.hidden)")) return;

            if (e.code === "Space" || e.code === "Enter") {
                e.preventDefault();
                this.handleAdvance();
            } else if (e.key >= "1" && e.key <= "3") {
                const choiceBtns = this.dom.choicesContainer.querySelectorAll(".choice-btn");
                const idx = parseInt(e.key) - 1;
                if (choiceBtns && choiceBtns[idx]) {
                    choiceBtns[idx].click();
                }
            } else if (e.code === "KeyA") {
                this.toggleAutoPlay();
            }
        });

        // Quick Controls
        if (this.dom.btnAuto) {
            this.dom.btnAuto.addEventListener("click", () => this.toggleAutoPlay());
        }
    }

    startNewGame() {
        this.stats = { ...this.scenario.initialStats };
        this.history = [];
        this.isAutoPlay = false;
        if (this.dom.btnAuto) this.dom.btnAuto.classList.remove("active");

        this.dom.titleScreen.classList.add("hidden");
        this.dom.endingScreen.classList.add("hidden");
        this.dom.gameScreen.classList.remove("hidden");

        this.sound.init();
        this.updateStatsUI(false);
        this.goToNode("start");
    }

    goToNode(nodeId) {
        const node = this.scenario.nodes[nodeId];
        if (!node) {
            console.error("Node not found:", nodeId);
            return;
        }

        this.currentNode = node;
        this.isWaitingForChoice = false;

        // Dọn dẹp hẹn giờ auto
        if (this.autoPlayTimeout) clearTimeout(this.autoPlayTimeout);

        // Cập nhật phông nền
        if (node.background) {
            this.dom.sceneBg.style.backgroundImage = `url('${node.background}')`;
        }

        // Cập nhật thông tin địa điểm / thời gian
        if (node.chapter) this.dom.chapterBadge.textContent = node.chapter;
        if (node.date) this.dom.dateBadge.textContent = node.date;
        if (node.location) this.dom.locationBadge.textContent = node.location;

        // Cập nhật BGM
        if (node.bgm) {
            this.sound.startAmbience(node.bgm);
        }

        // Hiệu ứng âm thanh node
        if (node.sfx === "tension") this.sound.playTension();
        else if (node.sfx === "fanfare") this.sound.playVictoryFanfare();
        else if (node.sfx === "unlock") this.sound.playUnlock();

        // Hiệu ứng rung lắc / chớp sáng
        if (node.shake) this.triggerScreenShake();
        if (node.flash) this.triggerScreenFlash();

        // Mở khóa Codex nếu có
        if (node.unlockCodex) {
            this.unlockCodexItem(node.unlockCodex);
        }

        // Cập nhật Nhân vật hiển thị
        this.updateCharacterStage(node);

        // Cập nhật người nói
        this.dom.speakerBox.textContent = node.speaker || "";
        if (!node.speaker || node.speaker === "Lời Dẫn") {
            this.dom.speakerBox.classList.add("narrator");
        } else {
            this.dom.speakerBox.classList.remove("narrator");
        }

        // Xóa lựa chọn cũ
        this.dom.choicesContainer.innerHTML = "";
        this.dom.advanceIndicator.classList.add("hidden");

        // Ghi vào Backlog
        this.history.push({
            chapter: node.chapter || (this.history.length ? this.history[this.history.length - 1].chapter : ""),
            speaker: node.speaker || "Lời Dẫn",
            text: node.text
        });

        // Bắt đầu gõ chữ Typewriter
        this.startTypewriter(node.text, () => {
            if (node.choices && node.choices.length > 0) {
                this.renderChoices(node.choices);
            } else {
                this.dom.advanceIndicator.classList.remove("hidden");
                if (this.isAutoPlay) {
                    this.autoPlayTimeout = setTimeout(() => {
                        this.handleAdvance();
                    }, this.settings.autoPlayDelay);
                }
            }
        });
    }

    startTypewriter(fullText, onComplete) {
        if (this.typewriterTimeout) clearTimeout(this.typewriterTimeout);
        this.isTyping = true;
        this.currentFullText = fullText;
        this.charIndex = 0;
        this.dom.dialogueText.innerHTML = "";

        const typeNextChar = () => {
            if (!this.isTyping) return;

            if (this.charIndex < this.currentFullText.length) {
                this.dom.dialogueText.textContent += this.currentFullText[this.charIndex];
                this.charIndex++;

                if (this.charIndex % 3 === 0) {
                    this.sound.playTypewriter();
                }

                this.typewriterTimeout = setTimeout(typeNextChar, this.settings.textSpeed);
            } else {
                this.isTyping = false;
                if (onComplete) onComplete();
            }
        };

        typeNextChar();
    }

    finishTypewriterInstantly() {
        if (this.typewriterTimeout) clearTimeout(this.typewriterTimeout);
        this.isTyping = false;
        this.dom.dialogueText.textContent = this.currentFullText;
    }

    handleAdvance() {
        if (this.isWaitingForChoice) return;

        // Nếu đang gõ chữ -> nhấp để hiện trọn vẹn văn bản ngay
        if (this.isTyping) {
            this.finishTypewriterInstantly();
            if (this.currentNode.choices && this.currentNode.choices.length > 0) {
                this.renderChoices(this.currentNode.choices);
            } else {
                this.dom.advanceIndicator.classList.remove("hidden");
            }
            return;
        }

        // Chuyển sang node tiếp theo
        if (this.currentNode && this.currentNode.next) {
            this.sound.playHover();
            this.goToNode(this.currentNode.next);
        } else if (this.currentNode && this.currentNode.evalEnding) {
            this.evaluateAndShowEnding();
        }
    }

    renderChoices(choices) {
        this.isWaitingForChoice = true;
        this.dom.advanceIndicator.classList.add("hidden");
        this.dom.choicesContainer.innerHTML = "";

        choices.forEach((choice, index) => {
            const btn = document.createElement("button");
            btn.className = "choice-btn";
            btn.innerHTML = `
                <span class="choice-num">${index + 1}</span>
                <span class="choice-text">${choice.text}</span>
            `;

            btn.addEventListener("mouseenter", () => this.sound.playHover());
            btn.addEventListener("click", () => {
                this.sound.playChoice();
                this.selectChoice(choice);
            });

            this.dom.choicesContainer.appendChild(btn);
        });
    }

    selectChoice(choice) {
        this.isWaitingForChoice = false;
        this.dom.choicesContainer.innerHTML = "";

        // Áp dụng thay đổi chỉ số
        if (choice.statChanges) {
            this.applyStatChanges(choice.statChanges);
        }

        // Mở khóa codex nếu có
        if (choice.unlockCodex) {
            this.unlockCodexItem(choice.unlockCodex);
        }

        // Hiệu ứng rung lắc / chớp sáng
        if (choice.shake) this.triggerScreenShake();
        if (choice.flash) this.triggerScreenFlash();

        // Hiển thị phản hồi chiến lược ngắn gọn (feedback toast)
        if (choice.feedback) {
            this.showToast(choice.feedback, "stat-notice");
        }

        // Đánh giá kết thúc nếu là chốt chặn cuối
        if (choice.evalEnding) {
            setTimeout(() => {
                this.evaluateAndShowEnding();
            }, 700);
            return;
        }

        // Đi tới node tiếp theo
        if (choice.next) {
            this.goToNode(choice.next);
        }
    }

    applyStatChanges(delta) {
        for (let key in delta) {
            if (this.stats[key] !== undefined) {
                const oldVal = this.stats[key];
                this.stats[key] = Math.max(0, Math.min(100, this.stats[key] + delta[key]));
                const diff = this.stats[key] - oldVal;

                if (diff !== 0) {
                    const sign = diff > 0 ? `+${diff}` : `${diff}`;
                    const label = this.getStatLabel(key);
                    this.showToast(`${label}: ${sign}`, diff > 0 ? "stat-up" : "stat-down");
                }
            }
        }
        this.updateStatsUI(true);
    }

    getStatLabel(key) {
        switch (key) {
            case "morale": return "Khí Thế Quần Chúng";
            case "readiness": return "Chuẩn Bị Lực Lượng";
            case "garrison": return "Thuyết Phục Bảo An";
            case "alert": return "Cảnh Giác Quân Nhật";
            default: return key;
        }
    }

    updateStatsUI(animate = true) {
        const updateBar = (bar, valEl, val) => {
            if (!bar || !valEl) return;
            bar.style.width = `${val}%`;
            valEl.textContent = `${val}%`;
            if (animate) {
                bar.classList.add("bar-pulse");
                setTimeout(() => bar.classList.remove("bar-pulse"), 600);
            }
        };

        updateBar(this.dom.statMoraleBar, this.dom.statMoraleVal, this.stats.morale);
        updateBar(this.dom.statReadinessBar, this.dom.statReadinessVal, this.stats.readiness);
        updateBar(this.dom.statGarrisonBar, this.dom.statGarrisonVal, this.stats.garrison);
        updateBar(this.dom.statAlertBar, this.dom.statAlertVal, this.stats.alert);
    }

    updateCharacterStage(node) {
        if (!this.dom.characterStage) return;

        if (node.avatar) {
            this.dom.characterAvatar.src = node.avatar;
            this.dom.characterStage.classList.remove("hidden");
            this.dom.characterStage.classList.add("char-appear");
            setTimeout(() => this.dom.characterStage.classList.remove("char-appear"), 500);
        } else {
            this.dom.characterStage.classList.add("hidden");
        }
    }

    triggerScreenShake() {
        this.dom.gameScreen.classList.add("screen-shake");
        setTimeout(() => this.dom.gameScreen.classList.remove("screen-shake"), 600);
    }

    triggerScreenFlash() {
        this.dom.flashOverlay.classList.remove("hidden");
        this.dom.flashOverlay.classList.add("screen-flash-anim");
        setTimeout(() => {
            this.dom.flashOverlay.classList.remove("screen-flash-anim");
            this.dom.flashOverlay.classList.add("hidden");
        }, 500);
    }

    showToast(message, type = "info") {
        if (!this.dom.toastContainer) return;

        const toast = document.createElement("div");
        toast.className = `toast-item toast-${type}`;
        toast.innerHTML = `<span class="toast-text">${message}</span>`;

        this.dom.toastContainer.appendChild(toast);
        setTimeout(() => {
            toast.classList.add("toast-fadeout");
            setTimeout(() => toast.remove(), 400);
        }, 3200);
    }

    unlockCodexItem(itemId) {
        if (!this.unlockedCodex.includes(itemId)) {
            this.unlockedCodex.push(itemId);
            this.saveUnlockedCodex();
            this.sound.playUnlock();

            // Tìm tên tư liệu
            let title = "Tư liệu lịch sử mới";
            for (let cat in this.codexData) {
                const found = this.codexData[cat].find(item => item.id === itemId);
                if (found) {
                    title = found.title || found.name;
                    break;
                }
            }

            this.showToast(`📜 Đã mở khóa Hồ sơ: ${title}`, "unlock");
        }
    }

    evaluateAndShowEnding() {
        let endingKey = "true_ending";

        // Logic đánh giá chỉ số rẽ nhánh kết thúc
        if (this.stats.morale >= 60 && this.stats.garrison >= 45 && this.stats.alert <= 40) {
            endingKey = "true_ending";
        } else if (this.stats.alert > 45 || this.stats.morale < 40) {
            endingKey = "costly_victory";
        } else if (this.stats.morale < 35 && this.stats.readiness < 30) {
            endingKey = "missed_opportunity";
        } else {
            endingKey = "true_ending";
        }

        const ending = this.scenario.endings[endingKey];
        if (!this.unlockedEndings.includes(endingKey)) {
            this.unlockedEndings.push(endingKey);
            this.saveUnlockedEndings();
        }

        this.showEndingScreen(ending);
    }

    showEndingScreen(ending) {
        this.dom.gameScreen.classList.add("hidden");
        this.dom.endingScreen.classList.remove("hidden");

        const endingTitle = document.getElementById("ending-title");
        const endingBadge = document.getElementById("ending-badge");
        const endingContent = document.getElementById("ending-content");
        const endingNote = document.getElementById("ending-note");
        const endingBg = document.getElementById("ending-bg");

        if (endingBg) endingBg.style.backgroundImage = `url('${ending.background}')`;
        if (endingTitle) endingTitle.textContent = ending.title;
        if (endingBadge) endingBadge.textContent = ending.badge;
        if (endingContent) endingContent.innerHTML = ending.text;
        if (endingNote) endingNote.textContent = ending.historicalNote;

        if (ending.sfx === "fanfare") {
            this.sound.playVictoryFanfare();
        }
        if (ending.bgm) {
            this.sound.startAmbience(ending.bgm);
        }
    }

    toggleAutoPlay() {
        this.isAutoPlay = !this.isAutoPlay;
        if (this.dom.btnAuto) {
            this.dom.btnAuto.classList.toggle("active", this.isAutoPlay);
        }

        if (this.isAutoPlay && !this.isTyping && !this.isWaitingForChoice) {
            this.handleAdvance();
        }
    }

    // Save & Load
    saveGame(slot = 1) {
        if (!this.currentNode) return;
        const saveData = {
            slot,
            date: new Date().toLocaleString("vi-VN"),
            nodeId: this.currentNode.id,
            stats: { ...this.stats },
            history: [...this.history],
            chapter: this.currentNode.chapter,
            location: this.currentNode.location
        };
        localStorage.setItem(`hanoi1945_save_slot_${slot}`, JSON.stringify(saveData));
        this.showToast(`💾 Đã lưu thành công vào Ô số ${slot}!`, "info");
    }

    loadGame(slot = 1) {
        const raw = localStorage.getItem(`hanoi1945_save_slot_${slot}`);
        if (!raw) {
            this.showToast(`Ô số ${slot} hiện đang trống!`, "warning");
            return false;
        }
        try {
            const data = JSON.parse(raw);
            this.stats = { ...data.stats };
            this.history = [...data.history];
            this.updateStatsUI(false);

            this.dom.titleScreen.classList.add("hidden");
            this.dom.endingScreen.classList.add("hidden");
            this.dom.gameScreen.classList.remove("hidden");

            this.sound.init();
            this.goToNode(data.nodeId);
            this.showToast(`📂 Đã tải thành công ván chơi Ô số ${slot}!`, "info");
            return true;
        } catch (e) {
            console.error(e);
            this.showToast("Dữ liệu lưu bị lỗi!", "warning");
            return false;
        }
    }

    loadUnlockedCodex() {
        const raw = localStorage.getItem("hanoi1945_codex");
        return raw ? JSON.parse(raw) : ["doc_quan_lenh_1"]; // Mở sẵn quân lệnh 1 làm dẫn nhập
    }

    saveUnlockedCodex() {
        localStorage.setItem("hanoi1945_codex", JSON.stringify(this.unlockedCodex));
    }

    loadUnlockedEndings() {
        const raw = localStorage.getItem("hanoi1945_endings");
        return raw ? JSON.parse(raw) : [];
    }

    saveUnlockedEndings() {
        localStorage.setItem("hanoi1945_endings", JSON.stringify(this.unlockedEndings));
    }
}

window.vnEngine = new VNEngine();
