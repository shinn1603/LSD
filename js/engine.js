/**
 * Core Visual Novel Engine for "Cách Mạng Tháng Tám 1945 - Sự Lãnh Đạo Của Đảng Tại Hà Nội"
 * Học phần: Lịch Sử Đảng Cộng Sản Việt Nam (Bậc Đại học)
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
        this.isCutsceneActive = false;
        this.cutsceneCallback = null;
        this.cutsceneData = null;
        this.cutsceneFrames = [];
        this.cutsceneFrameIndex = 0;
        this.cutsceneActiveLayer = 1;
        this.preloadedImages = new Set();
        this.isCutsceneTyping = false;
        this.cutsceneTypewriterTimeout = null;
        this.currentCutsceneFullText = "";

        // DOM Element cache
        this.dom = {};
    }

    preloadImage(src) {
        if (!src || typeof src !== "string" || this.preloadedImages.has(src)) return;
        this.preloadedImages.add(src);
        const img = new Image();
        img.src = src;
        if (img.decode) {
            img.decode().catch(() => {});
        }
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

            // Cutscene Elements - Hỗ trợ phông nền 2 lớp luân phiên (Dual-layer 60fps)
            cutsceneScreen: document.getElementById("cutscene-screen"),
            cutsceneBg1: document.getElementById("cutscene-bg-1"),
            cutsceneBg2: document.getElementById("cutscene-bg-2"),
            cutsceneBg: document.getElementById("cutscene-bg-1") || document.getElementById("cutscene-bg"),
            cutsceneTag: document.getElementById("cutscene-tag"),
            cutsceneTitle: document.getElementById("cutscene-title"),
            cutsceneStepCounter: document.getElementById("cutscene-step-counter"),
            cutsceneSpeaker: document.getElementById("cutscene-speaker"),
            cutsceneNarration: document.getElementById("cutscene-narration"),
            btnCutsceneContinue: document.getElementById("btn-cutscene-continue"),

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

        // Tương tác trên màn hình Cutscene
        if (this.dom.btnCutsceneContinue) {
            this.dom.btnCutsceneContinue.addEventListener("click", (e) => {
                e.stopPropagation();
                this.advanceCutscene();
            });
        }
        if (this.dom.cutsceneScreen) {
            this.dom.cutsceneScreen.addEventListener("click", () => {
                this.advanceCutscene();
            });
        }

        // Bàn phím điều khiển
        window.addEventListener("keydown", (e) => {
            // Khi đang ở Cutscene
            if (this.isCutsceneActive) {
                if (e.code === "Space" || e.code === "Enter") {
                    e.preventDefault();
                    this.advanceCutscene();
                }
                return;
            }

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
        this.isCutsceneActive = false;
        if (this.dom.btnAuto) this.dom.btnAuto.classList.remove("active");
        if (this.dom.cutsceneScreen) {
            this.dom.cutsceneScreen.classList.add("hidden");
            this.dom.cutsceneScreen.classList.remove("cutscene-exit");
        }

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

        // Nếu node hiện tại có gắn Cutscene sau khi nhân vật đã nói xong:
        if (this.currentNode && this.currentNode.pendingCutscene) {
            const cutsceneData = this.currentNode.pendingCutscene;
            this.currentNode.pendingCutscene = null;
            const nextTarget = this.currentNode.next;
            const evalEnding = this.currentNode.evalEnding;

            this.showCutscene(cutsceneData, () => {
                if (evalEnding) {
                    this.evaluateAndShowEnding();
                } else if (nextTarget) {
                    this.goToNode(nextTarget);
                }
            });
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
            // Tiền tải trước (Preload & Decode) hình ảnh của cutscene và node tiếp theo vào bộ nhớ GPU
            if (choice.cutscene) {
                if (choice.cutscene.image) this.preloadImage(choice.cutscene.image);
                if (Array.isArray(choice.cutscene.frames)) {
                    choice.cutscene.frames.forEach(f => {
                        if (f && f.image) this.preloadImage(f.image);
                    });
                }
            }
            if (choice.next && this.scenario && this.scenario.nodes && this.scenario.nodes[choice.next]) {
                const nextNode = this.scenario.nodes[choice.next];
                if (nextNode.background) this.preloadImage(nextNode.background);
                if (nextNode.avatar) this.preloadImage(nextNode.avatar);
                if (nextNode.pendingCutscene) {
                    if (nextNode.pendingCutscene.image) this.preloadImage(nextNode.pendingCutscene.image);
                    if (Array.isArray(nextNode.pendingCutscene.frames)) {
                        nextNode.pendingCutscene.frames.forEach(f => f && f.image && this.preloadImage(f.image));
                    }
                }
            }

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

        // Nếu lựa chọn dẫn đến một lời thoại phản hồi (choice.next):
        // Cho người chơi đọc trọn vẹn lời thoại nhân vật trước!
        // Khi người chơi bấm tiếp tục từ lời thoại đó, Cutscene mới chính thức bắt đầu!
        if (choice.next) {
            const nextNode = this.scenario.nodes[choice.next];
            if (choice.cutscene && nextNode) {
                nextNode.pendingCutscene = choice.cutscene;
            }
            this.goToNode(choice.next);
        } else if (choice.cutscene) {
            this.showCutscene(choice.cutscene, () => {
                if (choice.evalEnding) {
                    this.evaluateAndShowEnding();
                }
            });
        } else if (choice.evalEnding) {
            this.evaluateAndShowEnding();
        }
    }

    showCutscene(cutsceneData, onComplete) {
        if (!cutsceneData || !this.dom.cutsceneScreen) {
            if (onComplete) onComplete();
            return;
        }

        this.isCutsceneActive = true;
        this.cutsceneCallback = onComplete;
        this.cutsceneData = cutsceneData;

        // Chuẩn hóa danh sách các phân cảnh (frames)
        if (cutsceneData.frames && Array.isArray(cutsceneData.frames) && cutsceneData.frames.length > 0) {
            this.cutsceneFrames = cutsceneData.frames;
        } else {
            this.cutsceneFrames = [{
                image: cutsceneData.image,
                title: cutsceneData.title,
                speaker: cutsceneData.speaker || "Lời Dẫn",
                text: cutsceneData.narration || cutsceneData.text || "",
                sfx: cutsceneData.sfx,
                shake: cutsceneData.shake,
                flash: cutsceneData.flash
            }];
        }

        // Tiền giải mã bất đồng bộ (Async Image Decode) toàn bộ khung hình vào GPU ngay lập tức
        this.cutsceneFrames.forEach(f => {
            if (f && f.image) this.preloadImage(f.image);
        });

        this.cutsceneFrameIndex = 0;
        this.cutsceneActiveLayer = 1;

        // Đặt lại các layer phông nền trước khi hiện
        if (this.dom.cutsceneBg1) {
            this.dom.cutsceneBg1.classList.remove("active");
            this.dom.cutsceneBg1.style.backgroundImage = "";
        }
        if (this.dom.cutsceneBg2) {
            this.dom.cutsceneBg2.classList.remove("active");
            this.dom.cutsceneBg2.style.backgroundImage = "";
        }

        // Hiển thị màn hình Cutscene
        this.dom.cutsceneScreen.classList.remove("cutscene-exit");
        this.dom.cutsceneScreen.classList.remove("hidden");

        this.renderCutsceneFrame(this.cutsceneFrameIndex);
    }

    renderCutsceneFrame(index) {
        if (!this.cutsceneFrames || index >= this.cutsceneFrames.length) {
            this.closeCutscene();
            return;
        }

        const frame = this.cutsceneFrames[index];
        const total = this.cutsceneFrames.length;

        // Tải đón đầu khung hình kế tiếp (nếu có)
        if (index + 1 < total && this.cutsceneFrames[index + 1] && this.cutsceneFrames[index + 1].image) {
            this.preloadImage(this.cutsceneFrames[index + 1].image);
        }

        // Cập nhật tiêu đề & tiến trình trên thanh trên
        if (this.dom.cutsceneTag) {
            this.dom.cutsceneTag.textContent = this.cutsceneData.tag || "HÀNH ĐỘNG KHẨN CẤP";
        }
        if (this.dom.cutsceneTitle) {
            this.dom.cutsceneTitle.textContent = frame.title || this.cutsceneData.title || "DIỄN BIẾN LỊCH SỬ";
        }
        if (this.dom.cutsceneStepCounter) {
            this.dom.cutsceneStepCounter.textContent = `Phân cảnh ${index + 1} / ${total}`;
        }

        // Chuyển hình ảnh nền Ken Burns mượt mà qua 2 lớp phông luân phiên (Dual-layer Crossfade)
        if (frame.image) {
            const layer1 = this.dom.cutsceneBg1;
            const layer2 = this.dom.cutsceneBg2;

            if (layer1 && layer2) {
                if (index === 0) {
                    // Khung hình đầu tiên: kích hoạt layer 1 ngay lập tức
                    layer1.style.backgroundImage = `url('${frame.image}')`;
                    layer1.classList.add("active");
                    layer2.classList.remove("active");
                    layer2.style.backgroundImage = "";
                    this.cutsceneActiveLayer = 1;
                } else {
                    // Khung hình kế tiếp: luân chuyển layer hòa tan không gây khựng reflow
                    const currentLayer = this.cutsceneActiveLayer === 1 ? layer1 : layer2;
                    const nextLayer = this.cutsceneActiveLayer === 1 ? layer2 : layer1;

                    nextLayer.style.backgroundImage = `url('${frame.image}')`;
                    nextLayer.classList.add("active");
                    currentLayer.classList.remove("active");
                    this.cutsceneActiveLayer = this.cutsceneActiveLayer === 1 ? 2 : 1;
                }
            } else if (this.dom.cutsceneBg) {
                // Fallback nếu chỉ có 1 layer
                this.dom.cutsceneBg.style.backgroundImage = `url('${frame.image}')`;
                this.dom.cutsceneBg.classList.add("active");
            }
        }

        // Tên người dẫn trong cutscene: luôn là Lời Dẫn theo đúng chuẩn lịch sử
        if (this.dom.cutsceneSpeaker) {
            this.dom.cutsceneSpeaker.textContent = "Lời Dẫn";
        }

        // Nút bấm
        if (this.dom.btnCutsceneContinue) {
            if (index === total - 1) {
                this.dom.btnCutsceneContinue.innerHTML = "TIẾP TỤC DIỄN BIẾN &rarr;";
            } else {
                this.dom.btnCutsceneContinue.innerHTML = "PHÂN CẢNH TIẾP &rarr;";
            }
        }

        // Hiệu ứng âm thanh & màn hình
        if (frame.sfx === "fanfare") this.sound.playVictoryFanfare();
        else if (frame.sfx === "tension") this.sound.playTension();
        else if (frame.sfx === "unlock") this.sound.playUnlock();
        else if (frame.sfx === "typewriter") this.sound.playTypewriter();
        else if (frame.sfx === "choice") this.sound.playChoice();

        if (frame.shake) this.triggerScreenShake();
        if (frame.flash) this.triggerScreenFlash();

        // Gõ chữ lời thoại / thuyết minh
        this.typeCutsceneNarration(frame.text || frame.narration || "");
    }

    typeCutsceneNarration(fullText) {
        if (this.cutsceneTypewriterTimeout) clearTimeout(this.cutsceneTypewriterTimeout);
        this.isCutsceneTyping = true;
        this.currentCutsceneFullText = fullText;
        let charIdx = 0;
        if (this.dom.cutsceneNarration) this.dom.cutsceneNarration.textContent = "";

        const typeNext = () => {
            if (!this.isCutsceneTyping) return;
            if (charIdx < this.currentCutsceneFullText.length) {
                if (this.dom.cutsceneNarration) {
                    this.dom.cutsceneNarration.textContent += this.currentCutsceneFullText[charIdx];
                }
                charIdx++;
                if (charIdx % 3 === 0) {
                    this.sound.playTypewriter();
                }
                this.cutsceneTypewriterTimeout = setTimeout(typeNext, this.settings.textSpeed);
            } else {
                this.isCutsceneTyping = false;
            }
        };
        typeNext();
    }

    finishCutsceneTypingInstantly() {
        if (this.cutsceneTypewriterTimeout) clearTimeout(this.cutsceneTypewriterTimeout);
        this.isCutsceneTyping = false;
        if (this.dom.cutsceneNarration) {
            this.dom.cutsceneNarration.textContent = this.currentCutsceneFullText;
        }
    }

    advanceCutscene() {
        if (!this.isCutsceneActive) return;

        // Nếu chữ đang gõ, bấm một cái sẽ hiện trọn vẹn văn bản ngay
        if (this.isCutsceneTyping) {
            this.finishCutsceneTypingInstantly();
            return;
        }

        // Chuyển sang ảnh / phân cảnh tiếp theo trong chuỗi
        if (this.cutsceneFrameIndex + 1 < this.cutsceneFrames.length) {
            this.sound.playHover();
            this.cutsceneFrameIndex++;
            this.renderCutsceneFrame(this.cutsceneFrameIndex);
        } else {
            // Đã hết chuỗi ảnh, đóng cutscene và tiếp tục cốt truyện
            this.closeCutscene();
        }
    }

    closeCutscene() {
        if (!this.isCutsceneActive) return;
        this.sound.playChoice();

        if (this.cutsceneTypewriterTimeout) clearTimeout(this.cutsceneTypewriterTimeout);
        this.isCutsceneTyping = false;

        if (this.dom.cutsceneScreen) {
            this.dom.cutsceneScreen.classList.add("cutscene-exit");
            setTimeout(() => {
                this.dom.cutsceneScreen.classList.add("hidden");
                this.dom.cutsceneScreen.classList.remove("cutscene-exit");
                if (this.dom.cutsceneBg1) {
                    this.dom.cutsceneBg1.classList.remove("active");
                    this.dom.cutsceneBg1.style.backgroundImage = "";
                }
                if (this.dom.cutsceneBg2) {
                    this.dom.cutsceneBg2.classList.remove("active");
                    this.dom.cutsceneBg2.style.backgroundImage = "";
                }
                this.isCutsceneActive = false;

                const cb = this.cutsceneCallback;
                this.cutsceneCallback = null;
                if (cb) cb();
            }, 350);
        } else {
            this.isCutsceneActive = false;
            const cb = this.cutsceneCallback;
            this.cutsceneCallback = null;
            if (cb) cb();
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
        const endingBg = document.getElementById("ending-bg");

        if (endingBg) endingBg.style.backgroundImage = `url('${ending.background}')`;
        if (endingTitle) endingTitle.textContent = ending.title;
        if (endingBadge) endingBadge.textContent = ending.badge;
        if (endingContent) endingContent.innerHTML = ending.text;

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

    activateCheatCode(code) {
        if (!code || typeof code !== "string") return false;
        const normalized = code.trim().toLowerCase();
        if (normalized === "yain") {
            // 1. Mở khóa 100% tất cả các mục Hồ Sơ Tư Liệu Lịch Sử (Codex)
            const allCodexIds = [];
            for (let cat in this.codexData) {
                if (Array.isArray(this.codexData[cat])) {
                    this.codexData[cat].forEach(item => {
                        if (item && item.id) allCodexIds.push(item.id);
                    });
                }
            }
            this.unlockedCodex = allCodexIds;
            this.saveUnlockedCodex();

            // 2. Mở khóa 100% tất cả các Kết Thúc (Endings)
            const allEndingKeys = Object.keys(this.scenario.endings);
            this.unlockedEndings = allEndingKeys;
            this.saveUnlockedEndings();

            // 3. Hiệu ứng âm thanh thắng lợi & chớp màn hình
            this.sound.playVictoryFanfare();
            this.triggerScreenFlash();

            // 4. Thông báo Toast nổi bật
            this.showToast("ĐÃ KÍCH HOẠT CHEATCODE: Mở khóa 100% Tư liệu & Tất cả Kết thúc");
            return true;
        }
        return false;
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
