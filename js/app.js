/**
 * Main Application Controller for "Bình Minh Tháng Tám - Hà Nội 1945"
 * Quản lý Modals, Menu, Lưu/Tải, Codex Lịch Sử và Thư Viện Kết Thúc
 * Giao diện tinh gọn, lịch thiệp, không dùng emoji/token rườm rà
 */

document.addEventListener("DOMContentLoaded", () => {
    const engine = window.vnEngine;
    engine.init();

    // DOM References
    const titleScreen = document.getElementById("title-screen");
    const gameScreen = document.getElementById("game-screen");
    const endingScreen = document.getElementById("ending-screen");

    // Title buttons
    const btnStart = document.getElementById("btn-start");
    const btnLoadTitle = document.getElementById("btn-load-title");
    const btnCodexTitle = document.getElementById("btn-codex-title");
    const btnQuizTitle = document.getElementById("btn-quiz-title");
    const btnEndingsTitle = document.getElementById("btn-endings-title");
    const btnInfoTitle = document.getElementById("btn-info-title");
    const btnSettingsTitle = document.getElementById("btn-settings-title");
    const btnTitleMute = document.getElementById("btn-title-mute");
    const titleMuteIcon = document.getElementById("title-mute-icon");
    const titleMuteText = document.getElementById("title-mute-text");

    // In-game top bar buttons
    const btnHome = document.getElementById("btn-home");
    const btnBacklog = document.getElementById("btn-backlog");
    const btnQuickSave = document.getElementById("btn-quick-save");
    const btnQuickLoad = document.getElementById("btn-quick-load");
    const btnCodexOpen = document.getElementById("btn-codex-open");
    const btnQuizOpen = document.getElementById("btn-quiz-open");
    const btnSettingsOpen = document.getElementById("btn-settings-open");
    const btnMute = document.getElementById("btn-mute");

    // Ending screen buttons
    const btnEndingReplay = document.getElementById("btn-ending-replay");
    const btnEndingCodex = document.getElementById("btn-ending-codex");
    const btnEndingQuiz = document.getElementById("btn-ending-quiz");
    const btnEndingHome = document.getElementById("btn-ending-home");

    // Modals
    const modalBacklog = document.getElementById("modal-backlog");
    const modalSaveLoad = document.getElementById("modal-saveload");
    const modalCodex = document.getElementById("modal-codex");
    const modalEndings = document.getElementById("modal-endings");
    const modalQuiz = document.getElementById("modal-quiz");
    const modalProjectInfo = document.getElementById("modal-project-info");
    const modalSettings = document.getElementById("modal-settings");
    const closeButtons = document.querySelectorAll(".modal-close-btn, .modal-backdrop");

    // ==========================================
    // TITLE SCREEN ACTIONS
    // ==========================================
    if (btnStart) {
        btnStart.addEventListener("click", () => {
            window.soundCtrl.playChoice();
            engine.startNewGame();
        });
    }

    if (btnLoadTitle) {
        btnLoadTitle.addEventListener("click", () => {
            window.soundCtrl.playHover();
            openSaveLoadModal("load");
        });
    }

    if (btnCodexTitle) {
        btnCodexTitle.addEventListener("click", () => {
            window.soundCtrl.playHover();
            openCodexModal();
        });
    }

    if (btnQuizTitle) {
        btnQuizTitle.addEventListener("click", () => {
            window.soundCtrl.playHover();
            openQuizModal();
        });
    }

    if (btnEndingsTitle) {
        btnEndingsTitle.addEventListener("click", () => {
            window.soundCtrl.playHover();
            openEndingsModal();
        });
    }

    if (btnInfoTitle) {
        btnInfoTitle.addEventListener("click", () => {
            window.soundCtrl.playHover();
            openProjectInfoModal();
        });
    }

    if (btnSettingsTitle) {
        btnSettingsTitle.addEventListener("click", () => {
            window.soundCtrl.playHover();
            openSettingsModal();
        });
    }

    // ==========================================
    // IN-GAME ACTIONS
    // ==========================================
    if (btnHome) {
        btnHome.addEventListener("click", () => {
            if (confirm("Bạn có muốn quay về Màn hình chính?")) {
                window.soundCtrl.stopAmbience();
                gameScreen.classList.add("hidden");
                endingScreen.classList.add("hidden");
                titleScreen.classList.remove("hidden");
            }
        });
    }

    if (btnBacklog) {
        btnBacklog.addEventListener("click", () => {
            window.soundCtrl.playHover();
            openBacklogModal();
        });
    }

    if (btnQuickSave) {
        btnQuickSave.addEventListener("click", () => {
            window.soundCtrl.playHover();
            openSaveLoadModal("save");
        });
    }

    if (btnQuickLoad) {
        btnQuickLoad.addEventListener("click", () => {
            window.soundCtrl.playHover();
            openSaveLoadModal("load");
        });
    }

    if (btnCodexOpen) {
        btnCodexOpen.addEventListener("click", () => {
            window.soundCtrl.playHover();
            openCodexModal();
        });
    }

    if (btnQuizOpen) {
        btnQuizOpen.addEventListener("click", () => {
            window.soundCtrl.playHover();
            openQuizModal();
        });
    }

    if (btnSettingsOpen) {
        btnSettingsOpen.addEventListener("click", () => {
            window.soundCtrl.playHover();
            openSettingsModal();
        });
    }

    function updateMuteButtons(isMuted) {
        if (btnMute) btnMute.textContent = isMuted ? "🔇 Tắt" : "🔊 Nhạc";
        if (titleMuteIcon) titleMuteIcon.textContent = isMuted ? "🔇" : "🔊";
        if (titleMuteText) titleMuteText.textContent = isMuted ? "Âm thanh: Tắt" : "Âm thanh: Bật";
    }

    if (btnTitleMute) {
        btnTitleMute.addEventListener("click", () => {
            const isMuted = window.soundCtrl.toggleMute();
            updateMuteButtons(isMuted);
        });
    }

    if (btnMute) {
        btnMute.addEventListener("click", () => {
            const isMuted = window.soundCtrl.toggleMute();
            updateMuteButtons(isMuted);
        });
    }

    // ==========================================
    // ENDING SCREEN ACTIONS
    // ==========================================
    if (btnEndingReplay) {
        btnEndingReplay.addEventListener("click", () => {
            window.soundCtrl.playChoice();
            engine.startNewGame();
        });
    }

    if (btnEndingCodex) {
        btnEndingCodex.addEventListener("click", () => {
            window.soundCtrl.playHover();
            openCodexModal();
        });
    }

    if (btnEndingQuiz) {
        btnEndingQuiz.addEventListener("click", () => {
            window.soundCtrl.playHover();
            openQuizModal();
        });
    }

    if (btnEndingHome) {
        btnEndingHome.addEventListener("click", () => {
            window.soundCtrl.stopAmbience();
            endingScreen.classList.add("hidden");
            titleScreen.classList.remove("hidden");
        });
    }

    // ==========================================
    // MODAL HANDLERS
    // ==========================================
    closeButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".modal").forEach(m => m.classList.add("hidden"));
        });
    });

    // BACKLOG MODAL
    function openBacklogModal() {
        const list = document.getElementById("backlog-list");
        list.innerHTML = "";

        if (!engine.history.length) {
            list.innerHTML = `<div class="backlog-empty">Chưa có đoạn hội thoại nào.</div>`;
        } else {
            engine.history.forEach(item => {
                const entry = document.createElement("div");
                entry.className = "backlog-item";
                entry.innerHTML = `
                    <div class="backlog-speaker">${item.speaker}</div>
                    <div class="backlog-text">${item.text}</div>
                `;
                list.appendChild(entry);
            });
            setTimeout(() => { list.scrollTop = list.scrollHeight; }, 50);
        }

        modalBacklog.classList.remove("hidden");
    }

    // SAVE / LOAD MODAL
    let currentSaveLoadMode = "save";
    function openSaveLoadModal(mode = "save") {
        currentSaveLoadMode = mode;
        const title = document.getElementById("saveload-title");
        title.textContent = mode === "save" ? "Lưu Ván Chơi" : "Tải Ván Chơi";

        renderSaveSlots();
        modalSaveLoad.classList.remove("hidden");
    }

    function renderSaveSlots() {
        const container = document.getElementById("save-slots-container");
        container.innerHTML = "";

        for (let i = 1; i <= 3; i++) {
            const raw = localStorage.getItem(`hanoi1945_save_slot_${i}`);
            const slotCard = document.createElement("div");
            slotCard.className = "slot-card";

            if (raw) {
                const data = JSON.parse(raw);
                slotCard.innerHTML = `
                    <div class="slot-num">Ô Số ${i}</div>
                    <div class="slot-info">
                        <div class="slot-chapter">${data.chapter || "Chưa rõ hồi"}</div>
                        <div class="slot-location">Địa điểm: ${data.location || "Hà Nội"}</div>
                        <div class="slot-date">Thời gian: ${data.date}</div>
                    </div>
                    <button class="btn-slot-action">${currentSaveLoadMode === "save" ? "Ghi Đè" : "Tải Game"}</button>
                `;
            } else {
                slotCard.innerHTML = `
                    <div class="slot-num">Ô Số ${i}</div>
                    <div class="slot-info">
                        <div class="slot-empty">Dữ liệu trống</div>
                    </div>
                    <button class="btn-slot-action" ${currentSaveLoadMode === "load" ? "disabled" : ""}>
                        ${currentSaveLoadMode === "save" ? "Lưu Vào Đây" : "Trống"}
                    </button>
                `;
            }

            const actionBtn = slotCard.querySelector(".btn-slot-action");
            actionBtn.addEventListener("click", () => {
                if (currentSaveLoadMode === "save") {
                    engine.saveGame(i);
                    renderSaveSlots();
                } else {
                    const loaded = engine.loadGame(i);
                    if (loaded) {
                        modalSaveLoad.classList.add("hidden");
                    }
                }
            });

            container.appendChild(slotCard);
        }
    }

    // HISTORICAL CODEX MODAL
    function openCodexModal() {
        renderCodexCategory("documents");
        modalCodex.classList.remove("hidden");
    }

    const codexTabBtns = document.querySelectorAll(".codex-tab-btn");
    codexTabBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            codexTabBtns.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            renderCodexCategory(btn.dataset.tab);
        });
    });

    function renderCodexCategory(catKey) {
        const listContainer = document.getElementById("codex-items-list");
        const detailContainer = document.getElementById("codex-detail-view");
        listContainer.innerHTML = "";
        detailContainer.innerHTML = `<div class="codex-placeholder">Chọn một hồ sơ tư liệu bên trái để xem nội dung chi tiết.</div>`;

        const items = window.CODEX_DATA[catKey] || [];
        const unlockedList = engine.unlockedCodex;

        items.forEach((item, index) => {
            const isUnlocked = unlockedList.includes(item.id);
            const card = document.createElement("div");
            card.className = `codex-card ${isUnlocked ? "unlocked" : "locked"} ${index === 0 && isUnlocked ? "selected" : ""}`;

            card.innerHTML = `
                <div class="codex-card-title">${isUnlocked ? (item.title || item.name) : "Hồ sơ chưa mở khóa"}</div>
                <div class="codex-card-tag">${isUnlocked ? (item.tag || item.role || item.category) : "Tiếp tục chơi để mở khóa"}</div>
            `;

            if (isUnlocked) {
                card.addEventListener("click", () => {
                    document.querySelectorAll(".codex-card").forEach(c => c.classList.remove("selected"));
                    card.classList.add("selected");
                    renderCodexDetail(item);
                });

                if (index === 0) {
                    renderCodexDetail(item);
                }
            }

            listContainer.appendChild(card);
        });
    }

    function renderCodexDetail(item) {
        const detailContainer = document.getElementById("codex-detail-view");
        detailContainer.innerHTML = `
            <div class="codex-detail-header">
                <span class="codex-badge">${item.category || item.role || "Tư liệu"}</span>
                <h3 class="codex-detail-title">${item.title || item.name}</h3>
                ${item.date ? `<div class="codex-detail-date">Thời gian: ${item.date}</div>` : ""}
            </div>
            <div class="codex-detail-body">
                ${item.content || item.bio || item.summary}
                ${item.source ? `
                    <div class="codex-detail-source">
                        <strong>Nguồn tư liệu:</strong> <em>${item.source}</em>
                    </div>
                ` : ""}
            </div>
        `;
    }

    // ENDINGS GALLERY MODAL
    function openEndingsModal() {
        const container = document.getElementById("endings-gallery-container");
        container.innerHTML = "";

        const allEndings = window.SCENARIO_DATA.endings;
        const unlocked = engine.unlockedEndings;

        for (let key in allEndings) {
            const ending = allEndings[key];
            const isUnlocked = unlocked.includes(key);
            const card = document.createElement("div");
            card.className = `ending-card ${isUnlocked ? "unlocked" : "locked"}`;

            card.innerHTML = `
                <div class="ending-card-status">${isUnlocked ? "Đã Mở Khóa" : "Chưa Mở Khóa"}</div>
                <h4 class="ending-card-title">${isUnlocked ? ending.title : "Cột Mốc Chưa Sáng Tỏ"}</h4>
                <div class="ending-card-badge">${isUnlocked ? ending.badge : "Tham gia khởi nghĩa để trải nghiệm nhánh này"}</div>
                ${isUnlocked ? `<div class="ending-card-desc">${ending.historicalNote}</div>` : ""}
            `;

            container.appendChild(card);
        }

        modalEndings.classList.remove("hidden");
    }

    // SETTINGS MODAL
    function openSettingsModal() {
        const rangeTextSpeed = document.getElementById("range-text-speed");
        const rangeBgm = document.getElementById("range-bgm");
        const rangeSfx = document.getElementById("range-sfx");

        if (rangeTextSpeed) {
            rangeTextSpeed.value = 60 - engine.settings.textSpeed;
            rangeTextSpeed.oninput = (e) => {
                engine.settings.textSpeed = Math.max(5, 60 - parseInt(e.target.value));
            };
        }

        if (rangeBgm) {
            rangeBgm.value = engine.settings.bgmVolume * 100;
            rangeBgm.oninput = (e) => {
                engine.settings.bgmVolume = e.target.value / 100;
                window.soundCtrl.setBgmVolume(engine.settings.bgmVolume);
            };
        }

        if (rangeSfx) {
            rangeSfx.value = engine.settings.sfxVolume * 100;
            rangeSfx.oninput = (e) => {
                engine.settings.sfxVolume = e.target.value / 100;
                window.soundCtrl.sfxVolume = engine.settings.sfxVolume;
                window.soundCtrl.playHover();
            };
        }

        // Tải nhạc tùy chọn từ máy tính
        const inputCustomBgm = document.getElementById("input-custom-bgm");
        const customBgmStatus = document.getElementById("custom-bgm-status");
        const customBgmName = document.getElementById("custom-bgm-name");
        const btnResetBgm = document.getElementById("btn-reset-bgm");

        if (inputCustomBgm) {
            inputCustomBgm.onchange = (e) => {
                const file = e.target.files[0];
                if (file) {
                    const trackName = window.soundCtrl.loadCustomAudioFile(file);
                    if (customBgmStatus && customBgmName) {
                        customBgmName.textContent = trackName;
                        customBgmStatus.classList.remove("hidden");
                    }
                }
            };
        }

        if (btnResetBgm) {
            btnResetBgm.onclick = () => {
                window.soundCtrl.resetCustomAudio();
                if (customBgmStatus) customBgmStatus.classList.add("hidden");
                if (inputCustomBgm) inputCustomBgm.value = "";
            };
        }

        if (window.soundCtrl.customAudioName && customBgmStatus && customBgmName) {
            customBgmName.textContent = window.soundCtrl.customAudioName;
            customBgmStatus.classList.remove("hidden");
        }

        modalSettings.classList.remove("hidden");
    }

    // ==========================================
    // MINI-QUIZ (TRẮC NGHIỆM ÔN TẬP LỊCH SỬ)
    // ==========================================
    let currentQuizIndex = 0;
    let quizScore = 0;
    let quizAnswered = false;

    function openQuizModal() {
        currentQuizIndex = 0;
        quizScore = 0;
        quizAnswered = false;
        renderCurrentQuestion();
        document.getElementById("quiz-active-view").classList.remove("hidden");
        document.getElementById("quiz-result-view").classList.add("hidden");
        modalQuiz.classList.remove("hidden");
    }

    function renderCurrentQuestion() {
        const questions = window.QUIZ_DATA || [];
        if (!questions.length) return;

        const q = questions[currentQuizIndex];
        quizAnswered = false;

        document.getElementById("quiz-progress").textContent = `Câu ${currentQuizIndex + 1} / ${questions.length}`;
        document.getElementById("quiz-score-tracker").textContent = `Điểm: ${Math.round((quizScore / questions.length) * 100)}`;
        document.getElementById("quiz-question-text").textContent = q.question;

        const optionsContainer = document.getElementById("quiz-options-container");
        optionsContainer.innerHTML = "";
        document.getElementById("quiz-explanation-container").classList.add("hidden");

        const keys = ["A", "B", "C", "D"];
        q.options.forEach((optText, idx) => {
            const btn = document.createElement("button");
            btn.className = "quiz-option-btn";
            btn.innerHTML = `
                <span class="quiz-option-key">${keys[idx]}</span>
                <span class="quiz-option-text">${optText}</span>
            `;

            btn.addEventListener("click", () => {
                if (quizAnswered) return;
                handleAnswerSelection(idx, q);
            });

            optionsContainer.appendChild(btn);
        });
    }

    function handleAnswerSelection(selectedIndex, q) {
        quizAnswered = true;
        const optionButtons = document.querySelectorAll(".quiz-option-btn");
        optionButtons.forEach(b => b.disabled = true);

        const isCorrect = selectedIndex === q.correctIndex;
        if (isCorrect) {
            quizScore++;
            window.soundCtrl.playUnlock();
            optionButtons[selectedIndex].classList.add("correct");
        } else {
            window.soundCtrl.playTension();
            optionButtons[selectedIndex].classList.add("wrong");
            optionButtons[q.correctIndex].classList.add("correct");
        }

        const questions = window.QUIZ_DATA || [];
        document.getElementById("quiz-score-tracker").textContent = `Điểm: ${Math.round((quizScore / questions.length) * 100)}`;

        // Hiển thị hộp giải thích
        const verdictEl = document.getElementById("quiz-verdict");
        verdictEl.className = `quiz-verdict ${isCorrect ? "correct" : "wrong"}`;
        verdictEl.innerHTML = isCorrect ? "&#10004; CHÍNH XÁC!" : "&#10008; CHƯA CHÍNH XÁC!";

        document.getElementById("quiz-explanation-text").textContent = q.explanation;
        document.getElementById("quiz-source-tag").innerHTML = `<strong>Tài liệu tham khảo:</strong> ${q.source}`;
        document.getElementById("quiz-explanation-container").classList.remove("hidden");
    }

    const btnQuizNext = document.getElementById("btn-quiz-next");
    if (btnQuizNext) {
        btnQuizNext.addEventListener("click", () => {
            window.soundCtrl.playChoice();
            const questions = window.QUIZ_DATA || [];
            if (currentQuizIndex + 1 < questions.length) {
                currentQuizIndex++;
                renderCurrentQuestion();
            } else {
                showQuizResults();
            }
        });
    }

    function showQuizResults() {
        const questions = window.QUIZ_DATA || [];
        const total = questions.length;
        const finalScore = Math.round((quizScore / total) * 100);

        document.getElementById("quiz-active-view").classList.add("hidden");
        const resultView = document.getElementById("quiz-result-view");
        resultView.classList.remove("hidden");

        const scoreEl = document.getElementById("quiz-result-score");
        const titleEl = document.getElementById("quiz-result-title");
        const descEl = document.getElementById("quiz-result-desc");

        scoreEl.textContent = `${finalScore} / 100 Điểm`;

        if (finalScore === 100) {
            window.soundCtrl.playFanfare();
            titleEl.textContent = "Xuất Sắc! Nắm Vững Lịch Sử Thủ Đô!";
            descEl.textContent = `Bạn đã trả lời đúng toàn bộ ${quizScore}/${total} câu hỏi. Toàn bộ các mốc thời cơ lịch sử, quyết định tại Vạn Phúc, sự kiện Nhà hát Lớn và ngày Tổng khởi nghĩa 19/8/1945 đã được bạn nắm bắt rất sâu sắc!`;
        } else if (finalScore >= 70) {
            window.soundCtrl.playUnlock();
            titleEl.textContent = "Rất Tốt! Nắm Chắc Kiến Thức Trọng Tâm!";
            descEl.textContent = `Bạn đã đạt ${quizScore}/${total} câu đúng (${finalScore} điểm). Hãy tiếp tục khám phá thêm các văn kiện trong Hồ sơ tư liệu để hiểu sâu hơn về nghệ thuật khởi nghĩa nhé!`;
        } else {
            window.soundCtrl.playTension();
            titleEl.textContent = "Hãy Tiếp Tục Cố Gắng!";
            descEl.textContent = `Bạn đạt ${quizScore}/${total} câu đúng (${finalScore} điểm). Bạn có thể tra cứu thêm các văn kiện và sự kiện trong Hồ sơ tư liệu (Codex) rồi thử lại bài ôn tập nhé!`;
        }
    }

    const btnQuizRestart = document.getElementById("btn-quiz-restart");
    if (btnQuizRestart) {
        btnQuizRestart.addEventListener("click", () => {
            window.soundCtrl.playHover();
            openQuizModal();
        });
    }

    const btnQuizViewCodex = document.getElementById("btn-quiz-view-codex");
    if (btnQuizViewCodex) {
        btnQuizViewCodex.addEventListener("click", () => {
            modalQuiz.classList.add("hidden");
            openCodexModal();
        });
    }

    // ==========================================
    // PROJECT INFO MODAL
    // ==========================================
    function openProjectInfoModal() {
        modalProjectInfo.classList.remove("hidden");
    }
});
