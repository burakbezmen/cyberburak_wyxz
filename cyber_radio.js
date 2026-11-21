/**
 * LFL // CYBER RADIO ENGINE (v1.0)
 * Standalone, Multi-Page Ambient Synthwave & Lo-Fi Audio Player
 * Synchronized across index.html, academy.html, and all rooms via localStorage.
 */
(function (window, document) {
    'use strict';

    let isPlaying = false;
    let currentStationIndex = 0;
    let volume = 0.35;
    let animFrame = null;
    let audioCtx = null;
    let masterGain = null;
    let proceduralNodes = [];

    const stations = [
        {
            name: "I Really Want to Stay at Your House",
            desc: "Rosa Walton & Hallie Coggins (Cyberpunk 2077)",
            freq: "98.4 NIGHT CITY FM",
            srcs: [
                "audio/stay_at_your_house.mp3",
                "CYBERPUNK 2077 SOUNDTRACK - I REALLY WANT TO STAY AT YOUR HOUSE by Rosa Walton & Hallie Coggins.mp3"
            ],
            type: "rain_pad"
        },
        {
            name: "Resonance",
            desc: "HOME (Synthwave / Chillwave)",
            freq: "102.7 RETRO DRIVE FM",
            srcs: [
                "audio/resonance.mp3",
                "Resonance - Home.mp3"
            ],
            type: "synth_80s"
        },
        {
            name: "Last Christmas",
            desc: "Wham! (Holiday Cyber Mix)",
            freq: "107.1 WHAM FM",
            srcs: [
                "audio/last_christmas.mp3",
                "Wham! - Last Christmas.mp3"
            ],
            type: "trauma_dispatch"
        }
    ];

    // Load saved settings from localStorage
    try {
        const savedStation = localStorage.getItem('lfl_radio_station');
        if (savedStation !== null) {
            const idx = parseInt(savedStation, 10);
            if (!isNaN(idx) && idx >= 0 && idx < stations.length) {
                currentStationIndex = idx;
            }
        }
        const savedVol = localStorage.getItem('lfl_radio_volume');
        if (savedVol !== null) {
            const v = parseFloat(savedVol);
            if (!isNaN(v) && v >= 0 && v <= 1) {
                volume = v;
            }
        }
    } catch (e) {
        // localStorage blocked or restricted
    }

    function getAudioEl() {
        return document.getElementById('cyber-radio-audio');
    }

    function initAudioContext() {
        if (!audioCtx) {
            const AudioContextClass = window.AudioContext || window.webkitAudioContext;
            if (!AudioContextClass) return null;
            audioCtx = new AudioContextClass();
            masterGain = audioCtx.createGain();
            masterGain.gain.setValueAtTime(volume, audioCtx.currentTime);
            masterGain.connect(audioCtx.destination);
        }
        if (audioCtx.state === 'suspended') {
            audioCtx.resume();
        }
        return audioCtx;
    }

    function stopProcedural() {
        proceduralNodes.forEach(node => {
            try {
                if (typeof node.stop === 'function') node.stop();
                if (typeof node.disconnect === 'function') node.disconnect();
            } catch (e) {}
        });
        proceduralNodes = [];
    }

    function startProceduralSynth(type) {
        stopProcedural();
        const ctx = initAudioContext();
        if (!ctx) return;

        if (type === 'rain_pad') {
            const chordNotes = [130.81, 164.81, 196.00, 246.94];
            chordNotes.forEach(freq => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sawtooth';
                osc.frequency.setValueAtTime(freq, ctx.currentTime);

                const filter = ctx.createBiquadFilter();
                filter.type = 'lowpass';
                filter.frequency.setValueAtTime(380, ctx.currentTime);

                gain.gain.setValueAtTime(0.04, ctx.currentTime);
                osc.connect(filter);
                filter.connect(gain);
                gain.connect(masterGain);
                osc.start();
                proceduralNodes.push(osc, gain, filter);
            });
        } else if (type === 'synth_80s') {
            const bassNotes = [110.00, 146.83];
            bassNotes.forEach(freq => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, ctx.currentTime);
                gain.gain.setValueAtTime(0.06, ctx.currentTime);
                osc.connect(gain);
                gain.connect(masterGain);
                osc.start();
                proceduralNodes.push(osc, gain);
            });
        }
    }

    function playStationAudio(station) {
        const audio = getAudioEl();
        if (!audio) return;

        audio.volume = volume;
        let tryIndex = 0;

        function tryNextSrc() {
            if (tryIndex >= station.srcs.length) {
                console.log('[LFL Cyber Radio] Local MP3 not loaded, switching to Procedural Synth.');
                startProceduralSynth(station.type);
                return;
            }
            const src = station.srcs[tryIndex];
            audio.src = src;
            audio.loop = true;

            // Restore playback time if same station
            try {
                const savedTime = parseFloat(localStorage.getItem('lfl_radio_time') || '0');
                if (savedTime && !isNaN(savedTime) && savedTime > 0) {
                    audio.currentTime = savedTime;
                }
            } catch (e) {}

            const playPromise = audio.play();
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    stopProcedural();
                    isPlaying = true;
                    saveState();
                    updateUI();
                }).catch(err => {
                    console.warn(`[LFL Cyber Radio] Playback error on ${src}:`, err.message);
                    tryIndex++;
                    tryNextSrc();
                });
            }
        }

        tryNextSrc();
    }

    function saveState() {
        try {
            localStorage.setItem('lfl_radio_playing', isPlaying ? 'true' : 'false');
            localStorage.setItem('lfl_radio_station', String(currentStationIndex));
            localStorage.setItem('lfl_radio_volume', String(volume));
            const audio = getAudioEl();
            if (audio && !isNaN(audio.currentTime) && audio.currentTime > 0) {
                localStorage.setItem('lfl_radio_time', String(Math.floor(audio.currentTime)));
            }
        } catch (e) {}
    }

    function updateUI() {
        const widget = document.getElementById('cyber-radio-widget');
        const pillText = document.getElementById('radio-pill-text');
        const pillPlayBtn = document.getElementById('radio-pill-play-btn');
        const cardFreq = document.getElementById('radio-card-freq');
        const trackTitle = document.getElementById('radio-track-title');
        const trackDesc = document.getElementById('radio-track-desc');
        const cardPlayBtn = document.getElementById('radio-btn-play');
        const volSlider = document.getElementById('radio-vol-slider');

        if (!widget) return;

        const station = stations[currentStationIndex] || stations[0];

        if (pillText) pillText.textContent = station.freq;
        if (cardFreq) cardFreq.textContent = station.freq;
        if (trackTitle) trackTitle.textContent = station.name;
        if (trackDesc) trackDesc.textContent = station.desc;

        if (pillPlayBtn) pillPlayBtn.innerHTML = isPlaying ? '&#10074;&#10074;' : '&#9654;';
        if (cardPlayBtn) cardPlayBtn.innerHTML = isPlaying ? '&#10074;&#10074;' : '&#9654;';

        if (isPlaying) {
            widget.classList.add('is-playing');
            startVisualizer();
        } else {
            widget.classList.remove('is-playing');
            stopVisualizer();
        }

        if (volSlider) {
            volSlider.value = Math.round(volume * 100);
        }

        // Preset chips
        document.querySelectorAll('.radio-preset-chip').forEach((chip, idx) => {
            chip.classList.toggle('active', idx === currentStationIndex);
        });
    }

    function startVisualizer() {
        if (animFrame) return;
        const bars = document.querySelectorAll('.cyber-radio-widget .eq-bar');
        if (!bars || bars.length === 0) return;

        function animate() {
            if (!isPlaying) return;
            const t = Date.now() / 150;
            bars.forEach((bar, i) => {
                const h = 4 + Math.sin(t + i * 1.3) * 5 + Math.cos(t * 1.5 + i) * 4;
                bar.style.height = Math.max(3, Math.min(14, Math.round(h))) + 'px';
            });
            animFrame = requestAnimationFrame(animate);
        }
        animFrame = requestAnimationFrame(animate);
    }

    function stopVisualizer() {
        if (animFrame) {
            cancelAnimationFrame(animFrame);
            animFrame = null;
        }
        const bars = document.querySelectorAll('.cyber-radio-widget .eq-bar');
        bars.forEach(b => { b.style.height = '3px'; });
    }

    function play() {
        initAudioContext();
        isPlaying = true;
        playStationAudio(stations[currentStationIndex]);
        updateUI();
        saveState();
    }

    function pause() {
        isPlaying = false;
        const audio = getAudioEl();
        if (audio) {
            try { audio.pause(); } catch (e) {}
        }
        stopProcedural();
        updateUI();
        saveState();
    }

    function togglePlay() {
        if (isPlaying) {
            pause();
        } else {
            play();
        }
    }

    function nextStation() {
        currentStationIndex = (currentStationIndex + 1) % stations.length;
        saveState();
        if (isPlaying) {
            play();
        } else {
            updateUI();
        }
    }

    function prevStation() {
        currentStationIndex = (currentStationIndex - 1 + stations.length) % stations.length;
        saveState();
        if (isPlaying) {
            play();
        } else {
            updateUI();
        }
    }

    function setStation(index) {
        if (index >= 0 && index < stations.length) {
            currentStationIndex = index;
            saveState();
            if (isPlaying) {
                play();
            } else {
                updateUI();
            }
        }
    }

    function setVolume(val) {
        volume = Math.max(0, Math.min(1, val));
        const audio = getAudioEl();
        if (audio) audio.volume = volume;
        if (masterGain && audioCtx) {
            masterGain.gain.setValueAtTime(volume, audioCtx.currentTime);
        }
        saveState();
    }

    function bindEvents() {
        const widget = document.getElementById('cyber-radio-widget');
        const pill = document.getElementById('radio-pill');
        const pillPlayBtn = document.getElementById('radio-pill-play-btn');
        const cardMinimize = document.getElementById('radio-card-minimize');
        const btnPlay = document.getElementById('radio-btn-play');
        const btnNext = document.getElementById('radio-btn-next');
        const btnPrev = document.getElementById('radio-btn-prev');
        const volSlider = document.getElementById('radio-vol-slider');

        if (!widget) return;

        // Click pill expands card (unless play button clicked)
        if (pill) {
            pill.addEventListener('click', (e) => {
                if (e.target && e.target.closest('#radio-pill-play-btn')) return;
                widget.classList.add('is-expanded');
            });
        }

        if (cardMinimize) {
            cardMinimize.addEventListener('click', () => {
                widget.classList.remove('is-expanded');
            });
        }

        if (pillPlayBtn) {
            pillPlayBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                togglePlay();
            });
        }

        if (btnPlay) {
            btnPlay.addEventListener('click', togglePlay);
        }

        if (btnNext) {
            btnNext.addEventListener('click', nextStation);
        }

        if (btnPrev) {
            btnPrev.addEventListener('click', prevStation);
        }

        if (volSlider) {
            volSlider.addEventListener('input', (e) => {
                setVolume(parseFloat(e.target.value) / 100);
            });
        }

        // Preset chips
        document.querySelectorAll('.radio-preset-chip').forEach(chip => {
            chip.addEventListener('click', (e) => {
                const st = parseInt(e.currentTarget.getAttribute('data-station'), 10);
                if (!isNaN(st)) setStation(st);
            });
        });

        // Periodic time save
        const audio = getAudioEl();
        if (audio) {
            audio.addEventListener('timeupdate', () => {
                if (isPlaying && Math.floor(audio.currentTime) % 3 === 0) {
                    try {
                        localStorage.setItem('lfl_radio_time', String(Math.floor(audio.currentTime)));
                    } catch (e) {}
                }
            });
        }

        // Auto-resume if it was playing in previous page or tab
        try {
            const wasPlaying = localStorage.getItem('lfl_radio_playing') === 'true';
            if (wasPlaying) {
                // Try resuming; if blocked by browser autoplay policy, resume on first user interaction
                const resumePlayback = () => {
                    play();
                    document.removeEventListener('click', resumePlayback);
                    document.removeEventListener('keydown', resumePlayback);
                    document.removeEventListener('touchstart', resumePlayback);
                };

                // Attempt play immediately
                play();

                // Fallback on first gesture if browser blocked
                document.addEventListener('click', resumePlayback, { once: true });
                document.addEventListener('touchstart', resumePlayback, { once: true });
            }
        } catch (e) {}

        updateUI();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', bindEvents);
    } else {
        setTimeout(bindEvents, 60);
    }

    // Expose API
    window.CyberRadio = {
        play,
        pause,
        togglePlay,
        nextStation,
        prevStation,
        setStation,
        setVolume,
        isPlaying: () => isPlaying,
        getStations: () => stations
    };

})(window, document);
