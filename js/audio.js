/**
 * Web Audio API Sound & Ambience Synthesizer for "Cách Mạng Tháng Tám 1945 - Sự Lãnh Đạo Của Đảng Tại Hà Nội"
 * Học phần: Lịch Sử Đảng Cộng Sản Việt Nam (Bậc Đại học)
 */

class SoundController {
    constructor() {
        this.ctx = null;
        this.isMuted = false;
        this.bgmVolume = 0.4;
        this.sfxVolume = 0.6;
        this.currentAmbientNode = null;
        this.bgmInterval = null;
        this.isInitialized = false;

        // Trình phát nhạc nền MP3 thật
        this.bgmAudio = new Audio();
        this.bgmAudio.loop = true;
        this.customAudioUrl = null;
        this.customAudioName = "";
        this.currentBgmKey = null;

        // Bảng ánh xạ các bản nhạc nền:
        // 1. title: Thịnh Vượng Việt Nam Sáng Ngời (vocal) - ngoài sảnh 100% âm lượng
        // 2. gameplay: Thịnh Vượng Việt Nam Sáng Ngời (karaoke instrumental) - khi chơi 50% âm lượng sảnh
        // 3. victory: Hào Khí Việt Nam (instrumental) - khi chiến thắng
        this.musicTracks = {
            title: ['assets/audio/bgm_title.m4a', 'assets/audio/bgm_title.mp3'],
            gameplay: ['assets/audio/bgm_gameplay.m4a', 'assets/audio/bgm_gameplay.mp3'],
            victory: ['assets/audio/bgm_victory.m4a', 'assets/audio/bgm_victory.mp3']
        };
    }

    init() {
        if (this.isInitialized) return;
        try {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioContext();
            this.isInitialized = true;
        } catch (e) {
            console.warn("Web Audio API not supported", e);
        }
    }

    resume() {
        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    // Tiếng gõ máy chữ / máy in rơm rốp nhẹ
    playTypewriter() {
        if (!this.ctx || this.isMuted) return;
        this.resume();

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const filter = this.ctx.createBiquadFilter();

        filter.type = 'bandpass';
        filter.frequency.value = 1800 + Math.random() * 800;
        filter.Q.value = 3;

        osc.type = 'triangle';
        osc.frequency.setValueAtTime(120 + Math.random() * 60, this.ctx.currentTime);

        const now = this.ctx.currentTime;
        gain.gain.setValueAtTime(this.sfxVolume * 0.08, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

        osc.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.05);
    }

    // Âm thanh tương tác / di chuột qua lựa chọn
    playHover() {
        if (!this.ctx || this.isMuted) return;
        this.resume();

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sine';
        osc.frequency.setValueAtTime(440, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.06);

        const now = this.ctx.currentTime;
        gain.gain.setValueAtTime(this.sfxVolume * 0.05, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.06);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.07);
    }

    // Âm thanh bấm nút / xác nhận quyết định
    playChoice() {
        if (!this.ctx || this.isMuted) return;
        this.resume();

        const now = this.ctx.currentTime;
        const chords = [523.25, 659.25, 783.99]; // Đô - Mi - Sol

        chords.forEach((freq, idx) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'triangle';
            osc.frequency.setValueAtTime(freq, now + idx * 0.04);

            gain.gain.setValueAtTime(this.sfxVolume * 0.15, now + idx * 0.04);
            gain.gain.exponentialRampToValueAtTime(0.001, now + idx * 0.04 + 0.35);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now + idx * 0.04);
            osc.stop(now + idx * 0.04 + 0.4);
        });
    }

    // Âm thanh cảnh báo / Căng thẳng (Trống dồn hoặc còi báo động xa xôi)
    playTension() {
        if (!this.ctx || this.isMuted) return;
        this.resume();

        const now = this.ctx.currentTime;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(110, now);
        osc.frequency.linearRampToValueAtTime(85, now + 0.8);

        gain.gain.setValueAtTime(this.sfxVolume * 0.2, now);
        gain.gain.exponentialRampToValueAtTime(0.001, now + 0.85);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(now);
        osc.stop(now + 0.9);
    }

    // Âm thanh mở khóa Tư liệu / Thành tựu
    playUnlock() {
        if (!this.ctx || this.isMuted) return;
        this.resume();

        const now = this.ctx.currentTime;
        const notes = [587.33, 739.99, 880, 1174.66]; // D5, F#5, A5, D6 (Âm vang hào hứng)

        notes.forEach((freq, i) => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, now + i * 0.08);

            gain.gain.setValueAtTime(this.sfxVolume * 0.14, now + i * 0.08);
            gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.5);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now + i * 0.08);
            osc.stop(now + i * 0.08 + 0.55);
        });
    }

    // Nhạc nền cách mạng hào sảng phong cách kèn đồng / chuông khải hoàn
    playVictoryFanfare() {
        if (!this.ctx || this.isMuted) return;
        this.resume();

        const now = this.ctx.currentTime;
        const melody = [
            { f: 392.00, d: 0.25, t: 0.0 },   // Sol
            { f: 523.25, d: 0.45, t: 0.28 },  // Đô
            { f: 587.33, d: 0.25, t: 0.75 },  // Rê
            { f: 659.25, d: 0.6,  t: 1.02 },  // Mi
            { f: 523.25, d: 0.3,  t: 1.65 },  // Đô
            { f: 783.99, d: 0.9,  t: 1.98 }   // Sol cao
        ];

        melody.forEach(note => {
            const osc = this.ctx.createOscillator();
            const gain = this.ctx.createGain();

            osc.type = 'triangle';
            osc.frequency.setValueAtTime(note.f, now + note.t);

            gain.gain.setValueAtTime(this.sfxVolume * 0.25, now + note.t);
            gain.gain.exponentialRampToValueAtTime(0.001, now + note.t + note.d);

            osc.connect(gain);
            gain.connect(this.ctx.destination);

            osc.start(now + note.t);
            osc.stop(now + note.t + note.d + 0.1);
        });
    }

    // BGM Ambient: Hỗ trợ cả file M4A/MP3 thật và Synthesizer dự phòng
    startAmbience(mode = 'gameplay') {
        // Nếu đang phát đúng bản nhạc này rồi thì không tải lại từ đầu, chỉ cập nhật âm lượng
        if (this.currentBgmKey === mode && this.bgmAudio && !this.bgmAudio.paused) {
            const volumeFactor = (mode === 'gameplay') ? 0.5 : 1.0;
            this.bgmAudio.volume = this.isMuted ? 0 : (this.bgmVolume * volumeFactor);
            return;
        }

        this.stopAmbience();
        this.currentBgmKey = mode;
        if (this.isMuted) return;

        // Ưu tiên 1: Nếu người dùng đã tải nhạc tùy chọn từ máy tính
        if (this.customAudioUrl) {
            this.playHtmlAudio(this.customAudioUrl, null, mode);
            return;
        }

        // Ưu tiên 2: Danh sách các định dạng bản nhạc (m4a, mp3)
        const trackCandidates = this.musicTracks[mode] || this.musicTracks.gameplay;
        if (trackCandidates) {
            const list = Array.isArray(trackCandidates) ? trackCandidates : [trackCandidates];
            let idx = 0;
            const tryNext = () => {
                if (this.currentBgmKey !== mode || this.isMuted) return;
                if (idx < list.length) {
                    const src = list[idx++];
                    this.playHtmlAudio(src, () => {
                        tryNext();
                    }, mode);
                } else {
                    // Tự động fallback sang Synthesizer nếu không file nào phát được
                    this.startSynthesizedAmbience(mode);
                }
            };
            tryNext();
        } else {
            this.startSynthesizedAmbience(mode);
        }
    }

    playHtmlAudio(src, onErrorFallback, mode = this.currentBgmKey) {
        if (!this.bgmAudio) return;
        this.bgmAudio.src = src;
        // Âm lượng khi chơi (gameplay) bằng 50% âm lượng ngoài sảnh (title)
        const volumeFactor = (mode === 'gameplay') ? 0.5 : 1.0;
        this.bgmAudio.volume = this.isMuted ? 0 : (this.bgmVolume * volumeFactor);
        this.bgmAudio.loop = true;

        const playPromise = this.bgmAudio.play();
        if (playPromise !== undefined) {
            playPromise.catch(err => {
                console.warn(`[Audio] Không thể phát ${src}:`, err.message || err);
                if (onErrorFallback) onErrorFallback();
            });
        }

        this.bgmAudio.onerror = (e) => {
            console.warn(`[Audio] Lỗi tải nguồn ${src}:`, e);
            if (onErrorFallback) onErrorFallback();
        };
    }

    startSynthesizedAmbience(mode = 'tense') {
        if (!this.ctx || this.isMuted) return;
        this.resume();

        if (mode === 'tense') {
            let beat = 0;
            this.bgmInterval = setInterval(() => {
                if (this.isMuted || !this.ctx) return;
                const now = this.ctx.currentTime;
                const osc = this.ctx.createOscillator();
                const gain = this.ctx.createGain();

                osc.type = 'sine';
                const freq = (beat % 2 === 0) ? 90 : 75;
                osc.frequency.setValueAtTime(freq, now);

                gain.gain.setValueAtTime(this.bgmVolume * 0.12, now);
                gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

                osc.connect(gain);
                gain.connect(this.ctx.destination);

                osc.start(now);
                osc.stop(now + 0.15);
                beat++;
            }, 800);
        } else if (mode === 'epic') {
            const baseFreqs = [130.81, 164.81, 196.00]; // C3 E3 G3
            this.bgmInterval = setInterval(() => {
                if (this.isMuted || !this.ctx) return;
                const now = this.ctx.currentTime;
                baseFreqs.forEach((freq) => {
                    const osc = this.ctx.createOscillator();
                    const gain = this.ctx.createGain();

                    osc.type = 'triangle';
                    osc.frequency.setValueAtTime(freq, now);

                    gain.gain.setValueAtTime(0.001, now);
                    gain.gain.linearRampToValueAtTime(this.bgmVolume * 0.06, now + 1.2);
                    gain.gain.exponentialRampToValueAtTime(0.001, now + 3.8);

                    osc.connect(gain);
                    gain.connect(this.ctx.destination);

                    osc.start(now);
                    osc.stop(now + 4.0);
                });
            }, 4000);
        }
    }

    stopAmbience() {
        if (this.bgmInterval) {
            clearInterval(this.bgmInterval);
            this.bgmInterval = null;
        }
        if (this.bgmAudio) {
            this.bgmAudio.pause();
        }
    }

    loadCustomAudioFile(file) {
        if (this.customAudioUrl) {
            URL.revokeObjectURL(this.customAudioUrl);
        }
        this.customAudioUrl = URL.createObjectURL(file);
        this.customAudioName = file.name;
        this.playHtmlAudio(this.customAudioUrl);
        return this.customAudioName;
    }

    resetCustomAudio() {
        if (this.customAudioUrl) {
            URL.revokeObjectURL(this.customAudioUrl);
            this.customAudioUrl = null;
            this.customAudioName = "";
        }
        if (this.currentBgmKey) {
            this.startAmbience(this.currentBgmKey);
        } else {
            this.stopAmbience();
        }
    }

    setBgmVolume(val) {
        this.bgmVolume = val;
        if (this.bgmAudio) {
            const volumeFactor = (this.currentBgmKey === 'gameplay') ? 0.5 : 1.0;
            this.bgmAudio.volume = this.isMuted ? 0 : (val * volumeFactor);
        }
    }

    toggleMute() {
        this.isMuted = !this.isMuted;
        if (this.isMuted) {
            this.stopAmbience();
        } else {
            if (this.currentBgmKey) {
                this.startAmbience(this.currentBgmKey);
            }
        }
        return this.isMuted;
    }
}

window.soundCtrl = new SoundController();
