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
    const btnEndingsTitle = document.getElementById("btn-endings-title");
    const btnSettingsTitle = document.getElementById("btn-settings-title");

    // In-game top bar buttons
    const btnHome = document.getElementById("btn-home");
    const btnBacklog = document.getElementById("btn-backlog");
    const btnQuickSave = document.getElementById("btn-quick-save");
    const btnQuickLoad = document.getElementById("btn-quick-load");
    const btnCodexOpen = document.getElementById("btn-codex-open");
    const btnSettingsOpen = document.getElementById("btn-settings-open");
    const btnMute = document.getElementById("btn-mute");

    // Ending screen buttons
    const btnEndingReplay = document.getElementById("btn-ending-replay");
    const btnEndingCodex = document.getElementById("btn-ending-codex");
    const btnEndingHome = document.getElementById("btn-ending-home");

    // Modals
    const modalBacklog = document.getElementById("modal-backlog");
    const modalSaveLoad = document.getElementById("modal-saveload");
    const modalCodex = document.getElementById("modal-codex");
    const modalEndings = document.getElementById("modal-endings");
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

    if (btnEndingsTitle) {
        btnEndingsTitle.addEventListener("click", () => {
            window.soundCtrl.playHover();
            openEndingsModal();
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

    if (btnSettingsOpen) {
        btnSettingsOpen.addEventListener("click", () => {
            window.soundCtrl.playHover();
            openSettingsModal();
        });
    }

    if (btnMute) {
        btnMute.addEventListener("click", () => {
            const isMuted = window.soundCtrl.toggleMute();
            btnMute.textContent = isMuted ? "Âm thanh: Tắt" : "Âm thanh: Bật";
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
                window.soundCtrl.bgmVolume = engine.settings.bgmVolume;
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

        modalSettings.classList.remove("hidden");
    }
});
