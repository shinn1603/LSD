/**
 * Core Visual Novel Engine for "Bình Minh Tháng Tám - Hà Nội 1945"
 * Tinh gọn, thuần túy cốt truyện, loại bỏ thanh token/chỉ số rườm rà
 */

class VNEngine {
    constructor() {
        this.scenario = window.SCENARIO_DATA;
        this.codexData = window.CODEX_DATA;
        this.sound = window.soundCtrl;

        // Trạng thái kịch bản hiện tại
        this.currentNode = null;
        this.stats = { ...this.scenario.initialStats };
        this.history = []; // Backlog
        this.unlockedCodex = this.loadUnlockedCodex();
        this.unlockedEndings = this.loadUnlockedEndings();

        // Typewriter state
        this.isTyping = false;
        this.typewriterTimeout = null;
        this.currentFullText = "";
        this.charIndex = 0;

        // Settings
        this.settings = {
            textSpeed: 28, // ms per char
            autoPlayDelay: 2200,
            bgmVolume: 0.4,
            sfxVolume: 0.65
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

            // Buttons
            btnAuto: document.getElementById("btn-auto"),
            btnBacklog: document.getElementById("btn-backlog"),
            btnSave: document.getElementById("btn-quick-save"),
            btnLoad: document.getElementById("btn-quick-load"),
            btnCodex: document.getElementById("btn-codex-open"),
            btnSettings: document.getElementById("btn-settings-open"),

            // Toast
            toastContainer: document.getElementById("toast-container")
        };
    }

    bindEvents() {
        // Bấm vào hộp thoại để hoàn thành gõ chữ hoặc chuyển câu tiếp
        const dialogueBox = document.getElementById("dialogue-box");
        if (dialogueBox) {
            dialogueBox.addEventListener("click", () => this.handleAdvance());
        }

        // Bàn phím điều khiển
        window.addEventListener("keydown", (e) => {
            if (this.dom.gameScreen && this.dom.gameScreen.classList.contains("hidden")) return;
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

        // Tự động chạy thoại
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
        this.goToNode("start");
    }

    goToNode(nodeId) {
        const node = this.scenario.nodes[nodeId];
        if (!node) {
            console.error("Không tìm thấy node:", nodeId);
            return;
        }

        this.currentNode = node;
        this.isWaitingForChoice = false;

        if (this.autoPlayTimeout) clearTimeout(this.autoPlayTimeout);

        // Đổi phông nền
        if (node.background) {
            this.dom.sceneBg.style.backgroundImage = `url('${node.background}')`;
        }

        // Thông tin địa điểm / thời gian
        if (node.chapter && this.dom.chapterBadge) this.dom.chapterBadge.textContent = node.chapter;
        if (node.date && this.dom.dateBadge) this.dom.dateBadge.textContent = node.date;
        if (node.location && this.dom.locationBadge) this.dom.locationBadge.textContent = node.location;

        // BGM & SFX
        if (node.bgm) this.sound.startAmbience(node.bgm);
        if (node.sfx === "tension") this.sound.playTension();
        else if (node.sfx === "fanfare") this.sound.playVictoryFanfare();
        else if (node.sfx === "unlock") this.sound.playUnlock();

        if (node.shake) this.triggerScreenShake();
        if (node.flash) this.triggerScreenFlash();

        // Mở khóa tư liệu nếu có
        if (node.unlockCodex) {
            this.unlockCodexItem(node.unlockCodex);
        }

        // Nhân vật
        this.updateCharacterStage(node);

        // Người nói
        if (this.dom.speakerBox) {
            this.dom.speakerBox.textContent = node.speaker || "Lời Dẫn";
            if (!node.speaker || node.speaker === "Lời Dẫn") {
                this.dom.speakerBox.classList.add("narrator");
            } else {
                this.dom.speakerBox.classList.remove("narrator");
            }
        }

        // Dọn lựa chọn cũ
        this.dom.choicesContainer.innerHTML = "";
        if (this.dom.advanceIndicator) this.dom.advanceIndicator.classList.add("hidden");

        // Ghi vào Backlog
        this.history.push({
            chapter: node.chapter || (this.history.length ? this.history[this.history.length - 1].chapter : ""),
            speaker: node.speaker || "Lời Dẫn",
            text: node.text
        });

        // Bắt đầu hiệu ứng gõ chữ
        this.startTypewriter(node.text, () => {
            if (node.choices && node.choices.length > 0) {
                this.renderChoices(node.choices);
            } else {
                if (this.dom.advanceIndicator) this.dom.advanceIndicator.classList.remove("hidden");
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
        this.dom.dialogueText.textContent = "";

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

        if (this.isTyping) {
            this.finishTypewriterInstantly();
            if (this.currentNode.choices && this.currentNode.choices.length > 0) {
                this.renderChoices(this.currentNode.choices);
            } else {
                if (this.dom.advanceIndicator) this.dom.advanceIndicator.classList.remove("hidden");
            }
            return;
        }

        if (this.currentNode && this.currentNode.next) {
            this.sound.playHover();
            this.goToNode(this.currentNode.next);
        } else if (this.currentNode && this.currentNode.evalEnding) {
            this.evaluateAndShowEnding();
        }
    }

    renderChoices(choices) {
        this.isWaitingForChoice = true;
        if (this.dom.advanceIndicator) this.dom.advanceIndicator.classList.add("hidden");
        this.dom.choicesContainer.innerHTML = "";

        choices.forEach((choice, index) => {
            const btn = document.createElement("button");
            btn.className = "choice-btn";
            btn.innerHTML = `
                <span class="choice-bullet">&bull;</span>
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

        // Cập nhật ngầm trạng thái rẽ nhánh (không hiển thị token game)
        if (choice.statChanges) {
            for (let key in choice.statChanges) {
                if (this.stats[key] !== undefined) {
                    this.stats[key] = Math.max(0, Math.min(100, this.stats[key] + choice.statChanges[key]));
                }
            }
        }

        if (choice.unlockCodex) {
            this.unlockCodexItem(choice.unlockCodex);
        }

        if (choice.shake) this.triggerScreenShake();
        if (choice.flash) this.triggerScreenFlash();

        if (choice.evalEnding) {
            setTimeout(() => {
                this.evaluateAndShowEnding();
            }, 600);
            return;
        }

        if (choice.next) {
            this.goToNode(choice.next);
        }
    }

    updateCharacterStage(node) {
        if (!this.dom.characterStage) return;

        if (node.avatar) {
            this.dom.characterAvatar.src = node.avatar;
            this.dom.characterStage.classList.remove("hidden");
            this.dom.characterStage.classList.add("char-appear");
            setTimeout(() => this.dom.characterStage.classList.remove("char-appear"), 400);
        } else {
            this.dom.characterStage.classList.add("hidden");
        }
    }

    triggerScreenShake() {
        this.dom.gameScreen.classList.add("screen-shake");
        setTimeout(() => this.dom.gameScreen.classList.remove("screen-shake"), 500);
    }

    triggerScreenFlash() {
        this.dom.flashOverlay.classList.remove("hidden");
        this.dom.flashOverlay.classList.add("screen-flash-anim");
        setTimeout(() => {
            this.dom.flashOverlay.classList.remove("screen-flash-anim");
            this.dom.flashOverlay.classList.add("hidden");
        }, 500);
    }

    showToast(message) {
        if (!this.dom.toastContainer) return;

        const toast = document.createElement("div");
        toast.className = "toast-item";
        toast.textContent = message;

        this.dom.toastContainer.appendChild(toast);
        setTimeout(() => {
            toast.classList.add("toast-fadeout");
            setTimeout(() => toast.remove(), 350);
        }, 3000);
    }

    unlockCodexItem(itemId) {
        if (!this.unlockedCodex.includes(itemId)) {
            this.unlockedCodex.push(itemId);
            this.saveUnlockedCodex();
            this.sound.playUnlock();

            let title = "Tư liệu lịch sử mới";
            for (let cat in this.codexData) {
                const found = this.codexData[cat].find(item => item.id === itemId);
                if (found) {
                    title = found.title || found.name;
                    break;
                }
            }

            this.showToast(`Đã mở khóa tư liệu: ${title}`);
        }
    }

    evaluateAndShowEnding() {
        let endingKey = "true_ending";

        if (this.stats.morale >= 55 && this.stats.garrison >= 40 && this.stats.alert <= 45) {
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

        if (ending.sfx === "fanfare") this.sound.playVictoryFanfare();
        if (ending.bgm) this.sound.startAmbience(ending.bgm);
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
        this.showToast(`Đã lưu thành công vào Ô số ${slot}`);
    }

    loadGame(slot = 1) {
        const raw = localStorage.getItem(`hanoi1945_save_slot_${slot}`);
        if (!raw) {
            this.showToast(`Ô số ${slot} hiện đang trống`);
            return false;
        }
        try {
            const data = JSON.parse(raw);
            this.stats = { ...data.stats };
            this.history = [...data.history];

            this.dom.titleScreen.classList.add("hidden");
            this.dom.endingScreen.classList.add("hidden");
            this.dom.gameScreen.classList.remove("hidden");

            this.sound.init();
            this.goToNode(data.nodeId);
            this.showToast(`Đã tải ván chơi Ô số ${slot}`);
            return true;
        } catch (e) {
            console.error(e);
            this.showToast("Dữ liệu lưu bị lỗi");
            return false;
        }
    }

    loadUnlockedCodex() {
        const raw = localStorage.getItem("hanoi1945_codex");
        return raw ? JSON.parse(raw) : ["doc_quan_lenh_1"];
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
