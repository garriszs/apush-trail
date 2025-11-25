class SoundManager {
    constructor() {
        this.ctx = null;
        this.isMuted = false;
        this.bgmOscillators = [];
        this.bgmGain = null;
        this.isPlayingBGM = false;
        this.tempo = 120; // BPM
        this.noteLength = 0.2; // Seconds
    }

    init() {
        if (!this.ctx) {
            const AudioContext = window.AudioContext || window.webkitAudioContext;
            this.ctx = new AudioContext();
        }
        if (this.ctx.state === 'suspended') {
            this.ctx.resume();
        }
    }

    toggleMute() {
        this.init(); // Ensure init is called
        this.isMuted = !this.isMuted;
        if (this.isMuted) {
            this.stopBGM();
            if (this.ctx && this.ctx.state === 'running') this.ctx.suspend();
        } else {
            if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume();
            this.startBGM();
        }
        return this.isMuted;
    }

    // --- Sound Effects ---

    playTone(freq, type, duration, startTime = 0, volume = 0.1) {
        if (this.isMuted || !this.ctx) return;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime + startTime);

        gain.gain.setValueAtTime(volume, this.ctx.currentTime + startTime);
        gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + startTime + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(this.ctx.currentTime + startTime);
        osc.stop(this.ctx.currentTime + startTime + duration);
    }

    playCorrect() {
        // High ascending chime
        this.playTone(440, 'square', 0.1, 0); // A4
        this.playTone(554, 'square', 0.1, 0.1); // C#5
        this.playTone(659, 'square', 0.2, 0.2); // E5
    }

    playWrong() {
        // Low descending buzz
        this.playTone(150, 'sawtooth', 0.1, 0);
        this.playTone(100, 'sawtooth', 0.3, 0.1);
    }

    playBossStart() {
        // Ominous deep alert
        this.playTone(110, 'sawtooth', 0.5, 0, 0.2);
        this.playTone(103, 'sawtooth', 0.5, 0.4, 0.2);
        this.playTone(97, 'sawtooth', 1.0, 0.8, 0.2);
    }

    playWin() {
        // Victory fanfare - Energetic Arpeggio
        const now = this.ctx.currentTime;
        const root = 523.25; // C5

        // Rapid Arpeggio
        this.playTone(root, 'square', 0.1, now);
        this.playTone(root * 1.25, 'square', 0.1, now + 0.1); // E5
        this.playTone(root * 1.5, 'square', 0.1, now + 0.2); // G5
        this.playTone(root * 2, 'square', 0.1, now + 0.3); // C6

        this.playTone(root * 1.25, 'square', 0.1, now + 0.4); // E5
        this.playTone(root * 1.5, 'square', 0.1, now + 0.5); // G5
        this.playTone(root * 2, 'square', 0.1, now + 0.6); // C6
        this.playTone(root * 2.5, 'square', 0.4, now + 0.7); // E6

        // Final Chord (simulated by playing multiple tones at once)
        const end = now + 0.8;
        this.playTone(root, 'sawtooth', 0.8, end, 0.1); // C5
        this.playTone(root * 1.5, 'sawtooth', 0.8, end, 0.1); // G5
        this.playTone(root * 2, 'sawtooth', 0.8, end, 0.1); // C6
    }

    playGameOver() {
        // Power down effect
        if (this.isMuted || !this.ctx) return;
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(440, this.ctx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(10, this.ctx.currentTime + 1);

        gain.gain.setValueAtTime(0.2, this.ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0, this.ctx.currentTime + 1);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + 1);
    }

    // --- Background Music (Procedural Loop) ---

    startBGM() {
        if (this.isMuted) return;
        this.init();

        if (this.isPlayingBGM) return;

        if (this.ctx && this.ctx.state === 'suspended') {
            this.ctx.resume();
        }

        this.isPlayingBGM = true;
        console.log("BGM Started");
        this.scheduleNote();
    }

    stopBGM() {
        this.isPlayingBGM = false;
        if (this.bgmTimeout) clearTimeout(this.bgmTimeout);
    }

    scheduleNote() {
        if (!this.isPlayingBGM) return;

        // Simple arpeggio pattern: Root, 3rd, 5th, Octave
        // Key: C Minor (C, Eb, G, C) -> Retro/Serious vibe
        const notes = [261.63, 311.13, 392.00, 523.25];
        const randomNote = notes[Math.floor(Math.random() * notes.length)];

        // Occasional bass note
        const bass = Math.random() > 0.7 ? 130.81 : 0; // C3

        this.playTone(randomNote, 'triangle', 0.1, 0, 0.05); // Melody
        if (bass) this.playTone(bass, 'square', 0.1, 0, 0.05); // Bass

        // Schedule next note
        // Randomize timing slightly for "human" feel or keep strict for "robot" feel
        // Let's go for a steady pulse
        const nextTime = (60 / this.tempo) * 1000;
        this.bgmTimeout = setTimeout(() => this.scheduleNote(), nextTime);
    }
}

const soundManager = new SoundManager();
