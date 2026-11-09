
/**
 * LFL // LOST FROM LIGHT CYBER DEFENSE ENGINE
     * Pure Vanilla JavaScript:
     *  - Official Kali Linux Dragon Geometric Intro Animation & Progress Engine
     *  - Multi-Tab Kali Web Terminal ("+" New Tab, Close Tab, History Per Tab)
     *  - 140+ Realistic Cyber Defense & Offensive CLI Commands (Nmap, Gobuster, FFuf, Hydra, Hping3, Bettercap, PowerShell, etc.)
     *  - 100% Turkish Native Interface
     *  - Admin-Only Visitor & Device Telemetry Logs Panel
     *  - Holographic 2D Canvas Threat Radar & Parallax Particles
     */

(function () {
    'use strict';

    // ==========================================
    // GLOBAL STATE
    // ==========================================
    const state = {
        theme: localStorage.getItem('lfl_theme') || localStorage.getItem('aegis_theme') || 'cyber-midnight',
        token: localStorage.getItem('cyber_token') || sessionStorage.getItem('cyber_token') || null,
        currentUser: null,
        activePage: 'page-dashboard',
        accessLogs: [],
        simRunning: false
    };

    let generateTerminalResponse = null;




    // ==========================================
    // IN-BROWSER ZERO-BACKEND MOCK API CLIENT
    // 100% Client-Side Simulation - No C# Backend Required
    // ==========================================
    function generateMockJwt(username, role) {
        const header = btoa(JSON.stringify({ alg: 'HS256', typ: 'JWT' })).replace(/=/g, '');
        const payload = btoa(JSON.stringify({
            sub: '1',
            uname: username,
            role: role,
            iat: Math.floor(Date.now() / 1000),
            exp: Math.floor(Date.now() / 1000) + 86400 * 30
        })).replace(/=/g, '');
        const signature = btoa('lfl_defense_simulated_hmac_sha256_sig').replace(/=/g, '');
        return `${header}.${payload}.${signature}`;
    }


    // ==========================================================================
    // LFL MILITARY-GRADE CYBER DEFENSE SHIELD (WAF, IDS, EDR, ANTI-BRUTEFORCE)
    // 100% Client-Side High-Sec Defense Engine & Threat Inspector
    // ==========================================================================
    const lflSecurityShield = (() => {
        // 1. Anti-Clickjacking / Frame-Buster Defense
        if (window.top !== window.self) {
            try {
                window.top.location = window.self.location;
            } catch (e) {
                document.documentElement.innerHTML = '<div style="background:#040711;color:#ef4444;height:100vh;display:flex;align-items:center;justify-content:center;font-family:monospace;font-size:18px;font-weight:bold;">[BLOCKED] CLICKJACKING_DETECTED: Yetkisiz çerçeveleme engellendi.</div>';
            }
        }

        // 2. Anti-Self-XSS Console Security Warning
        try {
            console.log(
                '%c[LFL ASKERİ SAVUNMA KALKANI AKTİF]%c\n' +
                'DİKKAT: Bu konsol sistem yöneticisi (burak_wyxz) denetimindedir.\n' +
                'Buraya yapıştıracağınız yabancı betikler oturumunuzun ele geçirilmesine yol açabilir.\n' +
                'Katman-7 WAF ve IDS tüm istemci isteklerini şifreli telemetriye kaydeder.',
                'background: #ef4444; color: #ffffff; font-weight: 800; font-size: 13px; padding: 4px 10px; border-radius: 4px;',
                'color: #00e5ff; font-family: monospace; font-size: 11px;'
            );
        } catch (e) { }

        // 3. Rate-Limiting & Anti-Brute-Force Shield
        const FAILED_LIMIT = 5;
        const LOCKOUT_MS = 60 * 1000; // 60s cooldown

        function getBruteForceState() {
            try {
                return JSON.parse(localStorage.getItem('lfl_waf_bruteforce') || '{}');
            } catch (e) {
                return {};
            }
        }

        function checkRateLimit() {
            const state = getBruteForceState();
            const now = Date.now();
            if (state.lockedUntil && state.lockedUntil > now) {
                const remainingSec = Math.ceil((state.lockedUntil - now) / 1000);
                return {
                    blocked: true,
                    remainingSec,
                    message: `🚨 ASKERİ SAVUNMA KİLİDİ: 5 başarısız deneme nedeniyle sistem ${remainingSec} saniye kilitlendi!`
                };
            }
            return { blocked: false };
        }

        function recordFailedAttempt(action = 'GİRİŞ') {
            const state = getBruteForceState();
            const now = Date.now();
            if (!state.attempts || (now - (state.firstAttemptTime || now) > LOCKOUT_MS)) {
                state.attempts = 1;
                state.firstAttemptTime = now;
            } else {
                state.attempts++;
            }

            if (state.attempts >= FAILED_LIMIT) {
                state.lockedUntil = now + LOCKOUT_MS;
                state.attempts = 0;
                logSecurityIncident('BRUTE_FORCE_LOCKOUT', `5 başarısız deneme sonrası ${action} 60sn süreyle donduruldu.`);
            }

            try {
                localStorage.setItem('lfl_waf_bruteforce', JSON.stringify(state));
            } catch (e) { }

            return state;
        }

        function resetFailedAttempts() {
            try {
                localStorage.removeItem('lfl_waf_bruteforce');
            } catch (e) { }
        }

        // 4. Katman-7 WAF (Web Application Firewall) Deep Payload Inspector
        const ATTACK_SIGNATURES = [
            { name: 'XSS_PAYLOAD', regex: /<script|javascript:|data:text\/html|onload\s*=|onerror\s*=|document\.cookie/i },
            { name: 'SQLI_PAYLOAD', regex: /('|")\s*or\s*('|")?\d+('|")?=('|")?\d+|union\s+select|drop\s+table|xp_cmdshell|--|;\s*drop/i },
            { name: 'PATH_TRAVERSAL', regex: /\.\.\/|\.\.\|\/etc\/passwd|c:\windows\system32/i },
            { name: 'CMD_INJECTION', regex: /;\s*(cat|ls|rm|nc|curl|wget)\s+|\|\s*nc\s+|\$\(whoami\)/i },
            { name: 'PROTOTYPE_POLLUTION', regex: /__proto__|constructor\s*\[\s*['"]prototype['"]\s*\]/i }
        ];

        function inspectPayload(inputString, context = 'GİRDİ') {
            if (!inputString || typeof inputString !== 'string') return { safe: true };

            for (const sig of ATTACK_SIGNATURES) {
                if (sig.regex.test(inputString)) {
                    logSecurityIncident(sig.name, `Tehdit engellendi: [${context}] -> ${inputString.substring(0, 45)}`);
                    return {
                        safe: false,
                        threat: sig.name,
                        message: `🚨 ASKERİ WAF BLOKAJI: Zararlı saldırı imzası (${sig.name}) tespit edildi ve düşürüldü!`
                    };
                }
            }
            return { safe: true };
        }

        // 5. Güvenlik Olayı Kaydedici (lfl_access_logs içine 403 ile ekler)
        function logSecurityIncident(threatType, details) {
            try {
                let logs = JSON.parse(localStorage.getItem('lfl_access_logs') || '[]');
                const incidentLog = {
                    id: Date.now() + Math.random().toString(36).substring(2, 6),
                    timestamp: new Date().toISOString(),
                    ipAddress: sessionStorage.getItem('lfl_cached_visitor_ip') || '127.0.0.1',
                    country: '🚨 Tehdit Algılandı',
                    operatingSystem: navigator.platform || 'Bilinmeyen İstemci',
                    browser: 'WAF Savunma Kalkanı',
                    deviceType: 'Saldırı Girişimi',
                    screen: `${window.screen.width}x${window.screen.height}`,
                    cores: navigator.hardwareConcurrency ? `${navigator.hardwareConcurrency} Çekirdek` : '4 Çekirdek',
                    connection: 'Zararlı İstek Engellendi',
                    language: navigator.language || 'tr-TR',
                    username: (state.currentUser && state.currentUser.username) ? state.currentUser.username : 'Bilinmeyen Saldırgan',
                    role: 'ATTACKER_BLOCKED',
                    method: 'WAF_INTERCEPT',
                    path: `[${threatType}] ${details}`,
                    statusCode: 403
                };
                logs.unshift(incidentLog);
                if (logs.length > 200) logs = logs.slice(0, 200);
                localStorage.setItem('lfl_access_logs', JSON.stringify(logs));
            } catch (e) { }
        }

        return {
            checkRateLimit,
            recordFailedAttempt,
            resetFailedAttempts,
            inspectPayload,
            logSecurityIncident
        };
    })();

    const api = {
        async login(username, password) {
            await new Promise(r => setTimeout(r, 100));
            const u = (username || '').trim();
            const p = (password || '');

            // 1. Askeri Savunma: Rate-Limit / Kaba Kuvvet Engelleme
            const rateLimit = lflSecurityShield.checkRateLimit();
            if (rateLimit.blocked) {
                return { ok: false, status: 429, data: { error: rateLimit.message } };
            }

            // 2. Askeri Savunma: Katman-7 WAF Payload Denetimi (XSS / SQLi / Injection)
            const uWaf = lflSecurityShield.inspectPayload(u, 'GİRİŞ_KULLANICI_ADI');
            if (!uWaf.safe) {
                lflSecurityShield.recordFailedAttempt('WAF_SALDIRI');
                return { ok: false, status: 403, data: { error: uWaf.message } };
            }
            const pWaf = lflSecurityShield.inspectPayload(p, 'GİRİŞ_PAROLA');
            if (!pWaf.safe) {
                lflSecurityShield.recordFailedAttempt('WAF_SALDIRI');
                return { ok: false, status: 403, data: { error: pWaf.message } };
            }

            // 3. TEK VE MUTLAK YETKİLİ ADMİN: burak_wyxz / bezmen132009
            if (u.toLowerCase() === 'burak_wyxz' && p === 'bezmen132009') {
                lflSecurityShield.resetFailedAttempts();
                const token = generateMockJwt('burak_wyxz', 'admin');
                const user = { id: 1, username: 'burak_wyxz', email: 'burak_wyxz@lostfromlight.local', role: 'admin' };
                localStorage.setItem('cyber_token', token);
                localStorage.setItem('cyber_user', JSON.stringify(user));
                localStorage.setItem('cyber_callsign', user.username);
                localStorage.setItem('cyber_role', user.role);
                return {
                    ok: true,
                    status: 200,
                    data: {
                        token,
                        user,
                        message: 'Sistem Yöneticisi burak_wyxz olarak başarıyla giriş yapıldı.'
                    }
                };
            }

            // 4. Normal Kayıtlı Kullanıcılar (Başlangıçta 0 kullanıcı; kaydolanlar burada oturum açar)
            try {
                const registeredUsers = JSON.parse(localStorage.getItem('lfl_registered_users') || '[]');
                const found = registeredUsers.find(x => x.username.toLowerCase() === u.toLowerCase() && x.password === p);
                if (found) {
                    lflSecurityShield.resetFailedAttempts();
                    const token = generateMockJwt(found.username, 'operator');
                    const user = { id: found.id || Date.now(), username: found.username, email: `${found.username}@lostfromlight.local`, role: 'operator' };
                    localStorage.setItem('cyber_token', token);
                    localStorage.setItem('cyber_user', JSON.stringify(user));
                    localStorage.setItem('cyber_callsign', user.username);
                    localStorage.setItem('cyber_role', user.role);
                    return {
                        ok: true,
                        status: 200,
                        data: {
                            token,
                            user,
                            message: `Operatör ${user.username} olarak giriş başarılı.`
                        }
                    };
                }
            } catch (e) { }

            // Hatalı Giriş Sayacını Artır
            lflSecurityShield.recordFailedAttempt('HATALI_GİRİŞ');
            return {
                ok: false,
                status: 401,
                data: {
                    error: 'Hatalı kullanıcı adı veya parola!'
                }
            };
        },

        async register(username, password) {
            await new Promise(r => setTimeout(r, 100));
            const u = (username || '').trim();
            const p = (password || '');

            // 1. Askeri Savunma: Rate-Limit
            const rateLimit = lflSecurityShield.checkRateLimit();
            if (rateLimit.blocked) {
                return { ok: false, status: 429, data: { error: rateLimit.message } };
            }

            // 2. Askeri Savunma: WAF Denetimi
            const uWaf = lflSecurityShield.inspectPayload(u, 'KAYIT_KULLANICI_ADI');
            if (!uWaf.safe) return { ok: false, status: 403, data: { error: uWaf.message } };
            const pWaf = lflSecurityShield.inspectPayload(p, 'KAYIT_PAROLA');
            if (!pWaf.safe) return { ok: false, status: 403, data: { error: pWaf.message } };

            // 3. Giriş Validasyonu (Güvenli format)
            if (!u || u.length < 3 || u.length > 20) {
                return { ok: false, status: 400, data: { error: 'Kullanıcı adı 3 ile 20 karakter arasında olmalıdır.' } };
            }
            if (!/^[a-zA-Z0-9_]+$/.test(u)) {
                return { ok: false, status: 400, data: { error: 'Kullanıcı adı yalnızca harf, rakam ve alt çizgi içerebilir.' } };
            }
            if (!p || p.length < 4) {
                return { ok: false, status: 400, data: { error: 'Şifre en az 4 karakter olmalıdır.' } };
            }

            // 4. Rezerve Edilmiş Yönetici İsimleri Kontrolü (Askeri Seviye İzolasyon)
            const reserved = ['burak_wyxz', 'admin', 'root', 'system', 'superuser', 'moderator', 'administrator'];
            if (reserved.includes(u.toLowerCase())) {
                return { ok: false, status: 409, data: { error: 'Bu kullanıcı adı rezerve edilmiş ve sisteme aittir.' } };
            }

            // 5. Mevcut kayıtlı kullanıcılar kontrolü
            let localUsers = [];
            try {
                localUsers = JSON.parse(localStorage.getItem('lfl_registered_users') || '[]');
            } catch (e) {
                localUsers = [];
            }

            if (localUsers.some(x => x.username.toLowerCase() === u.toLowerCase())) {
                return { ok: false, status: 409, data: { error: 'Bu kullanıcı adı zaten alınmış.' } };
            }

            // 6. Yeni Kullanıcıyı Kaydet (Normal Operatör Yetkisi ile)
            const newUser = {
                id: Date.now(),
                username: u,
                password: p,
                role: 'operator',
                registeredAt: new Date().toISOString()
            };
            localUsers.push(newUser);
            localStorage.setItem('lfl_registered_users', JSON.stringify(localUsers));

            // Otomatik Token Üret & Oturum Aç
            const token = generateMockJwt(u, 'operator');
            const userObj = { id: newUser.id, username: u, email: `${u}@lostfromlight.local`, role: 'operator' };
            localStorage.setItem('cyber_token', token);
            localStorage.setItem('cyber_user', JSON.stringify(userObj));
            localStorage.setItem('cyber_callsign', userObj.username);
            localStorage.setItem('cyber_role', userObj.role);

            return {
                ok: true,
                status: 201,
                data: {
                    token,
                    user: userObj,
                    message: `Tebrikler ${u}! Operatör hesabınız başarıyla oluşturuldu.`
                }
            };
        },
        async me() {
            const token = localStorage.getItem('cyber_token') || sessionStorage.getItem('cyber_token');
            if (!token) return null;
            const savedUser = localStorage.getItem('cyber_user');
            if (savedUser) {
                try {
                    return { user: JSON.parse(savedUser) };
                } catch (e) { }
            }
            return {
                user: {
                    id: 1,
                    username: 'burak_wyxz',
                    role: 'admin',
                    email: 'burak_wyxz@lostfromlight.local'
                }
            };
        },

        // GERÇEK İSTEMCİ & ZİYARETÇİ TELEMETRİ YAKALAYICI (IP, OS, CİHAZ, KONUM)
        async sendVisitTelemetry(payload) {
            try {
                const ua = navigator.userAgent;

                // 1. Gerçek İşletim Sistemi Tespiti
                let os = 'Bilinmeyen OS';
                if (ua.indexOf('Win') !== -1) {
                    os = ua.indexOf('Windows NT 10.0') !== -1 ? 'Windows 10/11 x64' : 'Windows x64';
                } else if (ua.indexOf('Mac') !== -1) {
                    os = ua.indexOf('iPhone') !== -1 ? 'iOS (iPhone)' : (ua.indexOf('iPad') !== -1 ? 'iPadOS' : 'macOS Sonoma');
                } else if (ua.indexOf('Android') !== -1) {
                    os = 'Android OS (Mobil)';
                } else if (ua.indexOf('Linux') !== -1) {
                    os = 'Kali / Linux x86_64';
                }

                // 2. Gerçek Tarayıcı Tespiti
                let browser = 'Chrome Standart';
                if (ua.indexOf('Edg/') !== -1) browser = 'Microsoft Edge';
                else if (ua.indexOf('Chrome/') !== -1) browser = 'Google Chrome';
                else if (ua.indexOf('Firefox/') !== -1) browser = 'Mozilla Firefox';
                else if (ua.indexOf('Safari/') !== -1 && ua.indexOf('Chrome/') === -1) browser = 'Apple Safari';
                else if (ua.indexOf('OPR/') !== -1) browser = 'Opera';

                // 3. Cihaz Türü
                let device = 'Masaüstü Terminal';
                if (/Mobi|Android|iPhone/i.test(ua)) device = 'Akıllı Telefon (Mobil)';
                else if (/Tablet|iPad/i.test(ua)) device = 'Tablet';

                // 4. Donanım & Ekran Özellikleri
                const screenRes = `${window.screen.width}x${window.screen.height} (${window.devicePixelRatio || 1}x)`;
                const cores = navigator.hardwareConcurrency ? `${navigator.hardwareConcurrency} Çekirdekli CPU` : '4 Çekirdekli CPU';
                const conn = navigator.connection ? `${(navigator.connection.effectiveType || '4G').toUpperCase()} (${navigator.connection.downlink || 15} Mbps)` : 'Genişbant / WiFi';

                // 5. Gerçek Public IP & Coğrafi Konum Çekme (Hafif ve Hızlı)
                let publicIp = sessionStorage.getItem('lfl_cached_visitor_ip');
                let locationStr = sessionStorage.getItem('lfl_cached_visitor_loc');

                if (!publicIp) {
                    try {
                        const controller = new AbortController();
                        const timer = setTimeout(() => controller.abort(), 2000);
                        const ipFetch = await fetch('https://api.ipify.org?format=json', { signal: controller.signal });
                        clearTimeout(timer);
                        if (ipFetch.ok) {
                            const ipJson = await ipFetch.json();
                            if (ipJson && ipJson.ip) {
                                publicIp = ipJson.ip;
                                locationStr = 'Canlı İnternet İstemcisi 🌐';
                                sessionStorage.setItem('lfl_cached_visitor_ip', publicIp);
                                sessionStorage.setItem('lfl_cached_visitor_loc', locationStr);
                            }
                        }
                    } catch (e) {
                        // Offline or localhost
                    }
                }

                if (!publicIp) {
                    publicIp = '127.0.0.1 (Yerel İstemci)';
                    locationStr = 'Yerel Ağ / Localhost';
                }

                const currentUser = state.currentUser;
                const username = currentUser ? currentUser.username : 'Anonim Ziyaretçi';
                const role = currentUser ? currentUser.role : 'guest';

                let logs = [];
                try {
                    logs = JSON.parse(localStorage.getItem('lfl_access_logs') || '[]');
                } catch (e) {
                    logs = [];
                }

                const newLog = {
                    id: Date.now() + Math.random().toString(36).substring(2, 6),
                    timestamp: new Date().toISOString(),
                    ipAddress: publicIp,
                    country: locationStr || '🌐 Canlı Bağlantı',
                    operatingSystem: os,
                    browser: browser,
                    deviceType: device,
                    screen: screenRes,
                    cores: cores,
                    connection: conn,
                    language: navigator.language || 'tr-TR',
                    username: username,
                    role: role,
                    method: 'GET',
                    path: (payload && payload.path) ? payload.path : '/dashboard',
                    statusCode: 200
                };

                // Prevent spamming exact duplicate path within 5s
                const last = logs[0];
                if (last && last.ipAddress === newLog.ipAddress && last.path === newLog.path && (Date.now() - new Date(last.timestamp).getTime() < 5000)) {
                    return { ok: true };
                }

                logs.unshift(newLog);
                if (logs.length > 200) logs = logs.slice(0, 200);
                localStorage.setItem('lfl_access_logs', JSON.stringify(logs));
            } catch (e) { }
            return { ok: true, status: 200 };
        },

        async getAccessLogs() {
            let logs = [];
            try {
                logs = JSON.parse(localStorage.getItem('lfl_access_logs') || '[]');
            } catch (e) {
                logs = [];
            }
            return { logs };
        }
    };

    // ==========================================
    // UTILITIES
    // ==========================================
    function escapeHtml(str) {
        if (!str && str !== 0) return '';
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&#39;');
    }

    function showToast(type, title, message) {
        const container = document.getElementById('toast-container');
        if (!container) return;

        const toast = document.createElement('div');
        toast.className = `toast-item toast-${type}`;
        toast.innerHTML = `
            <div class="toast-indicator"></div>
            <div class="toast-body">
                <strong class="toast-title">${escapeHtml(title)}</strong>
                <span class="toast-msg">${escapeHtml(message)}</span>
            </div>
            <button class="toast-close-btn">&times;</button>
        `;

        const closeBtn = toast.querySelector('.toast-close-btn');
        const dismiss = () => {
            toast.classList.add('toast-exit');
            setTimeout(() => toast.remove(), 260);
        };
        closeBtn.addEventListener('click', dismiss);
        setTimeout(dismiss, 4200);

        container.appendChild(toast);
    }

    // ==========================================
    // KALI LINUX OFFICIAL DRAGON INTRO ANIMATION
    // ==========================================
    function initIntroSplash() {
        const splash = document.getElementById('kali-intro-splash');
        if (!splash) return;

        const progressBar = document.getElementById('intro-progress-bar');
        const cliText = document.getElementById('intro-cli-text');
        const skipBtn = document.getElementById('btn-skip-intro');
        const replayBtn = document.getElementById('btn-replay-intro');

        const kernelBootSteps = [
            { pct: 10, msg: "[0.000000] Linux version 6.8.11-kali-amd64 (devel@kali.org) #1 SMP PREEMPT_DYNAMIC" },
            { pct: 25, msg: "[0.840210] lfl-core: Enforcing Zero-Trust Defense & Strict HSTS (31536000s)" },
            { pct: 45, msg: "[1.820180] lfl-shield: Katman-7 WAF & Anti-Brute-Force Shield active [ARMED]" },
            { pct: 65, msg: "[2.920490] lfl-auth: HMAC-SHA256 Token & Telemetry Engine initialized" },
            { pct: 85, msg: "[3.980120] kali-terminal: Initializing Multi-Tab Sandbox with 142+ cyber tools..." },
            { pct: 100, msg: "[4.920440] lfl-radar: Defense radar telemetry locked - DEFCON 4 STABLE" }
        ];

        let animationFrame = null;
        let isClosed = false;

        function closeSplash() {
            if (isClosed) return;
            isClosed = true;
            if (animationFrame) cancelAnimationFrame(animationFrame);
            splash.classList.add('fade-out');
            setTimeout(() => {
                splash.style.display = 'none';
                if (!state.visualsBooted) {
                    state.visualsBooted = true;
                    initRadarAnimation();
                    if (typeof initAnimationEngine === 'function') {
                        initAnimationEngine();
                    }
                }
            }, 350);
        }

        function playIntroSequence() {
            isClosed = false;
            splash.style.display = 'flex';
            splash.classList.remove('fade-out');
            if (progressBar) progressBar.style.width = '0%';
            if (cliText) cliText.textContent = "modprobe --force-vermagic lfl_kernel_shield.ko";

            const duration = 3200; // 5 saniye sinematik Kali Linux Dragon intro
            const startTime = performance.now();

            // Hard fail-safe: sekme arka plana atılsa veya donma olsa bile 5.5s sonra kesin kapat
            setTimeout(() => {
                if (!isClosed) closeSplash();
            }, 3800);

            function frame(now) {
                if (isClosed) return;
                const elapsed = now - startTime;
                const progress = Math.min(elapsed / duration, 1.0);
                const pct = Math.round(progress * 100);

                if (progressBar) progressBar.style.width = pct + '%';

                for (let i = kernelBootSteps.length - 1; i >= 0; i--) {
                    if (pct >= kernelBootSteps[i].pct) {
                        if (cliText && cliText.textContent !== kernelBootSteps[i].msg) {
                            cliText.textContent = kernelBootSteps[i].msg;
                        }
                        break;
                    }
                }

                if (progress < 1.0) {
                    animationFrame = requestAnimationFrame(frame);
                } else {
                    setTimeout(() => {
                        closeSplash();
                    }, 280);
                }
            }

            animationFrame = requestAnimationFrame(frame);
        }

        // Skip button handler
        if (skipBtn) {
            skipBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                closeSplash();
            });
        }

        // ESC key handler
        window.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && splash.style.display !== 'none' && !isClosed) {
                closeSplash();
            }
        });

        // Replay button in topbar
        if (replayBtn) {
            replayBtn.addEventListener('click', () => {
                playIntroSequence();
            });
        }

        // Start initial intro
        playIntroSequence();
    }

    // ==========================================
    // THEME ENGINE
    // ==========================================
    function setTheme(theme) {
        state.theme = theme;
        localStorage.setItem('lfl_theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
        document.body.setAttribute('data-theme', theme);
        document.body.className = `theme-corporate-cyber theme-${theme}`;

        const label = document.getElementById('current-theme-label');
        if (label) {
            const labels = {
                'cyber-midnight': 'Cyber Midnight',
                'emerald-matrix': 'Emerald Matrix',
                'slate-corporate': 'Slate Corporate',
                'clean-light': 'Clean Light'
            };
            label.textContent = labels[theme] || 'Cyber Midnight';
        }

        document.querySelectorAll('#theme-menu-popup .popup-item').forEach(item => {
            item.classList.toggle('active', item.dataset.themeVal === theme);
        });

        // Mirror in session storage
        sessionStorage.setItem('cyber_theme', theme);
        renderSessionStorageInspector();
    }

    // ==========================================
    // DROPDOWNS & NAVIGATION
    // ==========================================
    function bindDropdowns() {
        const btnTheme = document.getElementById('btn-theme-toggle');
        const menuTheme = document.getElementById('theme-menu-popup');

        if (btnTheme && menuTheme) {
            btnTheme.addEventListener('click', (e) => {
                e.stopPropagation();
                menuTheme.classList.toggle('hidden');
            });

            menuTheme.querySelectorAll('.popup-item').forEach(item => {
                item.addEventListener('click', () => {
                    const chosen = item.dataset.themeVal;
                    setTheme(chosen);
                    menuTheme.classList.add('hidden');
                });
            });
        }

        document.addEventListener('click', () => {
            if (menuTheme) menuTheme.classList.add('hidden');
        });
    }

    function navigateToPage(pageId) {
        if (pageId === 'page-academy') { window.location.href = 'academy.html'; return; }
        state.activePage = pageId;

        // Hide all pages, show target
        document.querySelectorAll('.app-page').forEach(page => {
            if (page.id === pageId) {
                page.classList.remove('page-hidden');
                page.classList.add('page-active');
            } else {
                page.classList.add('page-hidden');
                page.classList.remove('page-active');
            }
        });

        // Update active sidebar nav button
        document.querySelectorAll('.sidebar-nav .nav-btn').forEach(btn => {
            btn.classList.toggle('active', btn.dataset.page === pageId);
        });

        // Reveal any items on target page immediately
        document.querySelectorAll(`#${pageId} [data-reveal], #${pageId} [data-reveal-stagger]`).forEach(el => {
            el.classList.add('is-visible');
        });

        // Update breadcrumb
        const crumbTitle = document.getElementById('current-crumb-title');
        if (crumbTitle) {
            const titles = {
                'page-dashboard': 'Komuta Merkezi',
                'page-academy': 'Siber Akademi (Eğitim Planı)',
                'page-commands': 'Siber Kod Kütüphanesi',
                'page-terminal': 'Kali Web Terminal',
                'page-quiz': 'Siber Rol Testi',
                'page-glossary': 'Siber Kılavuz & Sözlük',
                'page-ctf': 'Siber CTF Arenası',
                'page-logs': 'Ziyaretçi & Sistem Logları'
            };
            crumbTitle.textContent = titles[pageId] || 'LFL Platform';
        }

        // Telemetry ping
        pingVisitorTelemetry(pageId);

        // Load logs if opening logs page
        if (pageId === 'page-logs') {
            loadAccessLogs();
        }

        // Scroll main stage to top smoothly
        const main = document.querySelector('.app-main');
        if (main) main.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Expose navigateToPage globally so inline triggers and external modules can invoke it safely
    window.navigateToPage = navigateToPage;

    function bindNavigation() {
        const sidebar = document.getElementById('app-sidebar');
        const toggleBtn = document.getElementById('btn-toggle-sidebar');
        const backdrop = document.querySelector('.sidebar-mobile-backdrop');

        function closeMobileSidebar() {
            if (sidebar) sidebar.classList.remove('mobile-open');
            if (backdrop) backdrop.classList.remove('active');
        }

        // Sidebar buttons
        document.querySelectorAll('.sidebar-nav .nav-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const target = btn.dataset.page;
                if (target) {
                    navigateToPage(target);
                    closeMobileSidebar();
                }
            });
        });

        // Sidebar toggle
        if (toggleBtn && sidebar) {
            toggleBtn.addEventListener('click', () => {
                if (window.innerWidth <= 768) {
                    sidebar.classList.remove('sidebar-collapsed');
                    const isOpen = sidebar.classList.toggle('mobile-open');
                    if (backdrop) backdrop.classList.toggle('active', isOpen);
                } else {
                    sidebar.classList.remove('mobile-open');
                    if (backdrop) backdrop.classList.remove('active');
                    sidebar.classList.toggle('sidebar-collapsed');
                }
            });
        }

        // Auto-clean collapsed state on resize
        window.addEventListener('resize', () => {
            if (window.innerWidth <= 768 && sidebar) {
                sidebar.classList.remove('sidebar-collapsed');
            } else if (sidebar) {
                sidebar.classList.remove('mobile-open');
                if (backdrop) backdrop.classList.remove('active');
            }
        });

        if (backdrop) {
            backdrop.addEventListener('click', closeMobileSidebar);
        }

        // Purple Team dashboard card jump to quiz
        const btnPurpleCard = document.getElementById('dash-card-purple-team');
        if (btnPurpleCard) {
            btnPurpleCard.addEventListener('click', () => navigateToPage('page-quiz'));
        }

        // Glossary quick jump button from dashboard card
        const btnGlossaryJump = document.getElementById('dash-view-glossary-btn');
        if (btnGlossaryJump) {
            btnGlossaryJump.addEventListener('click', () => navigateToPage('page-glossary'));
        }

        // Quick jump buttons from dashboard to terminal/academy
        const btnJumpTermDirect = document.getElementById('btn-jump-terminal-direct');
        if (btnJumpTermDirect) {
            btnJumpTermDirect.addEventListener('click', () => navigateToPage('page-terminal'));
        }

        // Copy developer social contact (Discord)
        document.querySelectorAll('.btn-copy-social').forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const copyText = btn.dataset.copy;
                if (!copyText) return;
                const icon = btn.querySelector('.dev-copy-icon');

                if (navigator.clipboard && navigator.clipboard.writeText) {
                    navigator.clipboard.writeText(copyText).then(() => {
                        if (icon) {
                            icon.textContent = '✔';
                            icon.style.color = 'var(--green)';
                        }
                        showToast('success', 'Discord Kopyalandı', `"${copyText}" panoya kopyalandı.`);
                        setTimeout(() => {
                            if (icon) {
                                icon.textContent = '⧉';
                                icon.style.color = '';
                            }
                        }, 2000);
                    }).catch(() => {
                        prompt('Discord Kullanıcı Adı:', copyText);
                    });
                } else {
                    prompt('Discord Kullanıcı Adı:', copyText);
                }
            });
        });

        const btnIntroQuiz = document.getElementById('btn-intro-to-quiz') || document.getElementById('btn-intro-to-academy');
        if (btnIntroQuiz) {
            btnIntroQuiz.addEventListener('click', () => navigateToPage('page-quiz'));
        }

        const btnHeroRoleQuiz = document.getElementById('btn-hero-role-quiz');
        if (btnHeroRoleQuiz) {
            btnHeroRoleQuiz.addEventListener('click', () => navigateToPage('page-quiz'));
        }

        const btnTreeQuizAction = document.getElementById('btn-tree-quiz-action');
        if (btnTreeQuizAction) {
            btnTreeQuizAction.addEventListener('click', (e) => {
                e.preventDefault();
                navigateToPage('page-quiz');
                const main = document.querySelector('.app-main');
                if (main) main.scrollTo({ top: 0, behavior: 'smooth' });
            });
        }

        const btnIntroTerminal = document.getElementById('btn-intro-to-terminal');
        if (btnIntroTerminal) {
            btnIntroTerminal.addEventListener('click', () => navigateToPage('page-terminal'));
        }

        const btnAcademyTerminal = document.getElementById('btn-open-terminal-from-academy');
        if (btnAcademyTerminal) {
            btnAcademyTerminal.addEventListener('click', () => navigateToPage('page-terminal'));
        }

        const btnAcademyToCommands = document.getElementById('btn-academy-to-commands');
        if (btnAcademyToCommands) {
            btnAcademyToCommands.addEventListener('click', () => navigateToPage('page-commands'));
        }

        const btnCommandsTerminal = document.getElementById('btn-open-terminal-from-commands');
        if (btnCommandsTerminal) {
            btnCommandsTerminal.addEventListener('click', () => navigateToPage('page-terminal'));
        }

        // Search button triggers glossary or terminal
        const btnSearch = document.getElementById('btn-quick-search');
        if (btnSearch) {
            btnSearch.addEventListener('click', () => {
                navigateToPage('page-glossary');
                const inp = document.getElementById('glossary-search-input');
                if (inp) {
                    inp.focus();
                    inp.select();
                }
            });
        }

        // Hotkey Ctrl+K / Cmd+K
        window.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                navigateToPage('page-glossary');
                const inp = document.getElementById('glossary-search-input');
                if (inp) {
                    inp.focus();
                    inp.select();
                }
            }
        });
    }

    // ==========================================
    // 10-SECOND CYBER DEFENSE SIMULATOR
    // ==========================================
    function bindSimulator() {
        const btnSqli = document.getElementById('btn-sim-sqli');
        const btnIframe = document.getElementById('btn-sim-iframe');
        const simText = document.getElementById('sim-terminal-text');

        function setTerminalMsg(html) {
            if (!simText) return;
            simText.innerHTML = html;
        }

        if (btnSqli) {
            btnSqli.addEventListener('click', () => {
                if (state.simRunning) return;
                state.simRunning = true;
                setTerminalMsg(`<span style="color: #f87171;">[SALDIRI BAŞLATILDI]</span> <code>' OR 1=1; DROP TABLE Users; --</code> SQL Enjeksiyon probu gönderiliyor...`);

                setTimeout(() => {
                    setTerminalMsg(`
                        <span style="color: #22c55e; font-weight: 700;">[SAVUNMA AKTİF]</span>
                        EF Core LINQ Parametrik Filtreleme devreye girdi! Giriş ham SQL olarak değil, parametrik literal olarak yorumlandı.
                        <span style="color: #38bdf8;">Sonuç: 0 Veri Sızıntısı &bull; Güvenlik Seviyesi 100%</span>
                    `);
                    state.simRunning = false;
                    showToast('success', 'SQLi Engellendi', 'Parametrik LINQ sorgusu saldırıyı başarıyla nötralize etti.');
                }, 1100);
            });
        }

        if (btnIframe) {
            btnIframe.addEventListener('click', () => {
                if (state.simRunning) return;
                state.simRunning = true;
                setTerminalMsg(`<span style="color: #38bdf8;">[SALDIRI BAŞLATILDI]</span> Saldırgan harici bir web sitesine gizli iframe gömerek clickjacking deniyor...`);

                setTimeout(() => {
                    setTerminalMsg(`
                        <span style="color: #22c55e; font-weight: 700;">[SAVUNMA AKTİF]</span>
                        Kestrel <code>X-Frame-Options: DENY</code> başlığı yanıt verdi!
                        Tarayıcı iframe içine sayfayı yüklemeyi tamamen reddetti. UI Redressing imkansız kılındı.
                    `);
                    state.simRunning = false;
                    showToast('success', 'Clickjacking Engellendi', 'X-Frame-Options: DENY başlığı harici çerçeveleme girişimini kesti.');
                }, 1100);
            });
        }
    }

    // ==========================================
    // MULTI-TAB KALI WEB TERMINAL ENGINE
    // ==========================================
    function initKaliTerminal() {
        const terminalBody = document.getElementById('kali-terminal-body');
        const historyZone = document.getElementById('kali-history-zone');
        const input = document.getElementById('kali-cmd-input');
        const tabsBar = document.getElementById('kali-tabs-bar');
        const addTabBtn = document.getElementById('btn-kali-add-tab');

        if (!terminalBody || !historyZone || !input) return;

        // Multi-tab state
        let termTabs = [
            { id: 1, title: 'Sunny@SUNNY: ~', historyHtml: '', cmdHistory: [], historyCursor: -1 }
        ];
        let activeTabId = 1;
        let nextTabSeq = 2;

        function getActiveTab() {
            return termTabs.find(t => t.id === activeTabId) || termTabs[0];
        }

        function renderTabs() {
            if (!tabsBar) return;
            tabsBar.innerHTML = termTabs.map(tab => {
                const isActive = tab.id === activeTabId;
                const canClose = termTabs.length > 1;
                return `
                    <div class="kali-tab-item ${isActive ? 'active' : ''}" data-tab-id="${tab.id}">
                        <span class="kali-tab-icon">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="4 17 10 11 4 5"/>
                                <line x1="12" y1="19" x2="20" y2="19"/>
                            </svg>
                        </span>
                        <span class="kali-tab-title">${escapeHtml(tab.title)}</span>
                        ${canClose ? `<button type="button" class="kali-tab-close" data-close-tab-id="${tab.id}">&times;</button>` : ''}
                    </div>
                `;
            }).join('');

            // Bind click to activate tab
            tabsBar.querySelectorAll('.kali-tab-item').forEach(item => {
                item.addEventListener('click', (e) => {
                    if (e.target.closest('.kali-tab-close')) return;
                    const id = parseInt(item.dataset.tabId, 10);
                    switchTab(id);
                });
            });

            // Bind tab close
            tabsBar.querySelectorAll('.kali-tab-close').forEach(btn => {
                btn.addEventListener('click', (e) => {
                    e.stopPropagation();
                    const id = parseInt(btn.dataset.closeTabId, 10);
                    closeTab(id);
                });
            });
        }

        function switchTab(tabId) {
            // Save current history HTML to active tab before switching
            const cur = getActiveTab();
            if (cur) cur.historyHtml = historyZone.innerHTML;

            activeTabId = tabId;
            const next = getActiveTab();
            if (next) {
                historyZone.innerHTML = next.historyHtml;
            }
            renderTabs();
            input.focus();
            terminalBody.scrollTop = terminalBody.scrollHeight;
        }

        function addTab() {
            const newId = nextTabSeq++;
            const newTitle = `Sunny@SUNNY: ~ (${newId})`;
            const newTab = {
                id: newId,
                title: newTitle,
                historyHtml: `<div class="kali-motd-tab" style="color: #64748b; font-size: 11px; margin-bottom: 8px;">[Terminal Sekmesi #${newId} Açıldı &bull; Sandbox Ortamı Aktif]</div>`,
                cmdHistory: [],
                historyCursor: -1
            };
            termTabs.push(newTab);
            renderTabs();
            switchTab(newId);
            showToast('info', 'Yeni Terminal Sekmesi', `Sekme #${newId} başarıyla açıldı.`);
        }

        function closeTab(tabId) {
            if (termTabs.length <= 1) return;
            const idx = termTabs.findIndex(t => t.id === tabId);
            if (idx === -1) return;

            termTabs.splice(idx, 1);
            if (activeTabId === tabId) {
                activeTabId = termTabs[Math.max(0, idx - 1)].id;
            }
            renderTabs();
            switchTab(activeTabId);
        }

        if (addTabBtn) {
            addTabBtn.addEventListener('click', (e) => {
                e.stopPropagation();
                addTab();
            });
        }

        // Focus input when clicking anywhere in terminal body
        terminalBody.addEventListener('click', () => {
            input.focus();
        });

        // Command Execution Engine
        function executeCommand(raw) {
            const trimmed = raw.trim();
            if (!trimmed) return;

            const activeTab = getActiveTab();
            activeTab.cmdHistory.push(trimmed);
            activeTab.historyCursor = activeTab.cmdHistory.length;

            if (trimmed.toLowerCase() === 'clear') {
                historyZone.innerHTML = '';
                activeTab.historyHtml = '';
                return;
            }

            // Create command echo row
            const cmdRow = document.createElement('div');
            cmdRow.className = 'kali-history-cmd';
            cmdRow.innerHTML = `
                <div class="kali-prompt-line1">
                    ┌──(<span class="kali-user">Sunny</span><span class="kali-skull">㉿</span><span class="kali-host">SUNNY</span>)-[<span class="kali-path">~</span>]
                </div>
                <div class="kali-input-row">
                    <span class="kali-prompt-line2">└─$</span>
                    <span class="kali-executed-text">${escapeHtml(trimmed)}</span>
                </div>
            `;
            historyZone.appendChild(cmdRow);

            // Generate realistic output
            const output = generateTerminalResponse(trimmed);
            const outputBox = document.createElement('div');
            outputBox.className = 'kali-output-block';
            outputBox.innerHTML = output;
            historyZone.appendChild(outputBox);

            // Update active tab history
            activeTab.historyHtml = historyZone.innerHTML;

            // Scroll down
            terminalBody.scrollTop = terminalBody.scrollHeight;
        }

        // Expose globally so buttons can run commands directly
        window.runKaliCommand = function (cmd) {
            navigateToPage('page-terminal');
            input.value = cmd;
            executeCommand(cmd);
            input.value = '';
            input.focus();
        };

        // ==========================================
        // 140+ REALISTIC COMMAND SIMULATOR ROUTER
        // ==========================================
        generateTerminalResponse = function (rawCmd) {
            const trimmed = (rawCmd || '').trim();
            const lower = trimmed.toLowerCase();
            if (lower === 'godmode' || lower === 'admininfo') {
                const isAdmin = state.currentUser && state.currentUser.username === 'burak_wyxz';
                if (isAdmin) {
                    const logsCount = (state.accessLogs && Array.isArray(state.accessLogs)) ? state.accessLogs.length : 0;
                    const ctfCompleted = (typeof ctfState !== 'undefined' && ctfState.completed) ? ctfState.completed.length : 0;
                    const ctfXp = (typeof ctfState !== 'undefined' && typeof ctfState.xp === 'number') ? ctfState.xp : 0;
                    return `
<pre style="color: #10b981; font-weight: 800; font-family: var(--font-mono);">
[★] ==============================================================
[★] LFL DEFENSE // ROOT GOD MODE (YÖNETİCİ: burak_wyxz)
[★] ==============================================================
[+] Kimlik Yetkisi       : BAŞ YÖNETİCİ &amp; PLATFORM MİMARI (burak_wyxz)
[+] Savunma Alarmı       : DEFCON Seviyesi Aktif
[+] Canlı Ziyaretçi Logu : ${logsCount} adet gerçek istemci IP ve telemetrisi kayıt altında
[+] CTF İlerlemesi       : ${ctfCompleted}/6 Görev (%${Math.round((ctfCompleted / 6) * 100)}) - ${ctfXp} XP
[+] Oturum Bütünlüğü     : LocalStorage + SessionStorage Şifreli
[★] ==============================================================
</pre>`;
                } else {
                    return `<span style="color: #ef4444; font-weight: 700;">[!] ERİŞİM ENGELLENDİ: God Mode yalnızca yetkili yönetici burak_wyxz tarafından çalıştırılabilir.</span>`;
                }
            }

            // =========================================================================
            // LFL UNIVERSAL KALI WEB TERMINAL ENGINE (v3.7)
            // 1) 69 Siber Akademi Odası (Tüm oda komutları çalışır + bayrak kazanılır)
            // 2) 143+ Siber Komut Kütüphanesi (window.ACADEMY_COMMANDS)
            // 3) 85+ Siber Kılavuz & Sözlük (Analojili ve Mitigasyonlu Ansiklopedi)
            // 4) 6 CTF Arenası Operasyonları & Bayrak Motoru (CTF_MISSIONS)
            // =========================================================================

            const cleanCliCmd = (lower || '')
                .trim()
                .replace(/^sudo\s+/, '')
                .replace(/^powershell\s+/, '')
                .replace(/^\.\//, '')
                .replace(/^\\/, '')
                .replace(/\s+/g, ' ');

            // Helper: Mark room completed in local storage
            function markRoomCompletedInStorage(roomId) {
                try {
                    const key = 'lfl_academy_progress_v3';
                    const raw = localStorage.getItem(key);
                    const data = raw ? JSON.parse(raw) : { completedRooms: [] };
                    if (!Array.isArray(data.completedRooms)) data.completedRooms = [];
                    if (!data.completedRooms.includes(roomId)) {
                        data.completedRooms.push(roomId);
                        localStorage.setItem(key, JSON.stringify(data));
                    }
                } catch (e) { }
            }

            // Helper: Universal Flag Submission (CTF + Academy)
            function handleUniversalFlag(flagCandidate) {
                const cleanFlag = (flagCandidate || '').trim();
                if (!cleanFlag) return '<span style="color: #ef4444;">[!] Lütfen bir bayrak girin. Örn: submit LFL{...}</span>';

                // 1. Check CTF Missions
                if (typeof CTF_MISSIONS !== 'undefined' && Array.isArray(CTF_MISSIONS)) {
                    const matchedCtf = CTF_MISSIONS.find(m => m.flag && m.flag.toLowerCase() === cleanFlag.toLowerCase());
                    if (matchedCtf) {
                        if (typeof ctfState !== 'undefined') {
                            if (!ctfState.completed.includes(matchedCtf.id)) {
                                ctfState.completed.push(matchedCtf.id);
                                ctfState.xp = (ctfState.xp || 0) + matchedCtf.xp;
                                if (ctfState.unlockedIdx < CTF_MISSIONS.length - 1) {
                                    ctfState.unlockedIdx++;
                                }
                                try {
                                    localStorage.setItem('lfl_ctf_progress', JSON.stringify({
                                        unlockedIdx: ctfState.unlockedIdx,
                                        activeIdx: ctfState.activeIdx,
                                        completed: ctfState.completed,
                                        xp: ctfState.xp
                                    }));
                                    localStorage.setItem('lfl_ctf_xp', String(ctfState.xp));
                                } catch (e) { }
                            }
                        }
                        return `
<div style="border: 2px solid #10b981; background: rgba(16, 185, 129, 0.12); border-radius: 8px; padding: 14px 16px; margin: 8px 0; font-family: var(--font-mono); box-shadow: 0 0 25px rgba(16, 185, 129, 0.3);">
    <div style="color: #34d399; font-weight: 800; font-size: 14px; margin-bottom: 6px;">🎉 [★] TEBRİKLER! CTF OPERASYON BAYRAĞI ONAYLANDI! [★]</div>
    <div style="color: #f8fafc; font-weight: 700; font-size: 13px;">OPERASYON: ${escapeHtml(matchedCtf.title)} (${escapeHtml(matchedCtf.levelLabel)})</div>
    <div style="color: #a7f3d0; font-size: 12px; margin: 6px 0;">${escapeHtml(matchedCtf.successMsg)}</div>
    <div style="background: rgba(0, 0, 0, 0.5); padding: 8px 12px; border-radius: 4px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; margin-top: 8px;">
        <span style="color: #fbbf24; font-weight: bold;">+${matchedCtf.xp} XP KAZANILDI!</span>
        <code style="color: #00e5ff; font-weight: 700;">${escapeHtml(matchedCtf.flag)}</code>
    </div>
</div>
                        `;
                    }
                }

                // 2. Check Academy Rooms
                if (window.ACADEMY_ROOMS && Array.isArray(window.ACADEMY_ROOMS)) {
                    const matchedRoom = window.ACADEMY_ROOMS.find(r => r.flag && r.flag.toLowerCase() === cleanFlag.toLowerCase());
                    if (matchedRoom) {
                        markRoomCompletedInStorage(matchedRoom.id);
                        return `
<div style="border: 2px solid #00e5ff; background: rgba(0, 229, 255, 0.12); border-radius: 8px; padding: 14px 16px; margin: 8px 0; font-family: var(--font-mono); box-shadow: 0 0 25px rgba(0, 229, 255, 0.25);">
    <div style="color: #00e5ff; font-weight: 800; font-size: 14px; margin-bottom: 6px;">🛡️ [★] SİBER AKADEMİ ODA BAYRAĞI ONAYLANDI! [★]</div>
    <div style="color: #ffffff; font-weight: 700; font-size: 13px;">ODA ${escapeHtml(matchedRoom.id.toUpperCase())}: ${escapeHtml(matchedRoom.title)} (${escapeHtml(matchedRoom.track.toUpperCase())} TEAM)</div>
    <div style="color: #94a3b8; font-size: 11.5px; margin: 6px 0;">🎯 Görev: ${escapeHtml(matchedRoom.mission)}</div>
    <div style="background: rgba(0, 0, 0, 0.5); padding: 8px 12px; border-radius: 4px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px; margin-top: 8px;">
        <span style="color: #34d399; font-weight: bold;">[✔] ODA BAŞARIYLA TAMAMLANDI!</span>
        <code style="color: #fde047; font-weight: 700;">${escapeHtml(matchedRoom.flag)}</code>
        <a href="academy.html?room=${escapeHtml(matchedRoom.id)}" target="_blank" style="color: #38bdf8; text-decoration: underline; font-size: 11.5px;">Akademi Odasında Gör &rarr;</a>
    </div>
</div>
                        `;
                    }
                }

                return `<span style="color: #ef4444; font-weight: 700;">[!] GEÇERSİZ BAYRAK: '${escapeHtml(cleanFlag)}' veritabanındaki hiçbir CTF operasyonu veya Akademi odasıyla eşleşmedi.</span>`;
            }

            // A. DIRECT FLAG SUBMISSIONS
            if (cleanCliCmd.startsWith('submit ') || cleanCliCmd.startsWith('flag ') || cleanCliCmd.startsWith('lfl{')) {
                let candidate = trimmed;
                if (cleanCliCmd.startsWith('submit ')) candidate = trimmed.substring(7).trim();
                else if (cleanCliCmd.startsWith('flag ')) candidate = trimmed.substring(5).trim();
                return handleUniversalFlag(candidate);
            }

            // B. CTF STATUS & LISTING
            if (cleanCliCmd === 'ctf' || cleanCliCmd === 'ctf status' || cleanCliCmd === 'ctf list' || cleanCliCmd === 'ctf help') {
                if (typeof CTF_MISSIONS !== 'undefined' && Array.isArray(CTF_MISSIONS)) {
                    const completedCount = (typeof ctfState !== 'undefined' && Array.isArray(ctfState.completed)) ? ctfState.completed.length : 0;
                    const totalXp = (typeof ctfState !== 'undefined' && typeof ctfState.xp === 'number') ? ctfState.xp : 0;
                    const missionRows = CTF_MISSIONS.map((m, idx) => {
                        const isDone = typeof ctfState !== 'undefined' && ctfState.completed.includes(m.id);
                        const isUnlocked = typeof ctfState !== 'undefined' && idx <= ctfState.unlockedIdx;
                        const statusBadge = isDone ? '<span style="color: #10b981; font-weight: bold;">[TAMAMLANDI ✔]</span>' : (isUnlocked ? '<span style="color: #00e5ff; font-weight: bold;">[AÇIK ▶]</span>' : '<span style="color: #64748b;">[KİLİTLİ 🔒]</span>');
                        return `  ${statusBadge} Seviye ${escapeHtml(m.level)}: ${escapeHtml(m.title)} (+${m.xp} XP)\n       Hedef: <code style="color: #fde047;">${escapeHtml(m.target)}</code> | Araçlar: ${m.tools.join(', ')}`;
                    }).join('\n\n');

                    return `
<pre style="color: #38bdf8; font-family: var(--font-mono); font-size: 12px; line-height: 1.5;">
[★] ======================================================================
[★] LFL SİBER CTF ARENASI // CANLI OPERASYON DURUMU
[★] ======================================================================
[+] Toplam Operasyon   : ${CTF_MISSIONS.length} Seviye
[+] Tamamlanan Görev  : ${completedCount}/${CTF_MISSIONS.length} (%${Math.round((completedCount / CTF_MISSIONS.length) * 100)})
[+] Kazanılan CTF XP  : ${totalXp} XP
[+] Bayrak Gönderme   : submit LFL{...}

OPERASYON LİSTESİ:
${missionRows}

[!] İpucu: Herhangi bir operasyon komutunu (örn: ping -c 3 10.10.1.5 veya whatweb http://10.10.2.10)
    bu terminalde doğrudan çalıştırabilirsiniz!
======================================================================
</pre>
                    `;
                }
            }

            // C. CTF SPECIFIC MISSION COMMANDS (Level 1.1 to 3.2)
            if (cleanCliCmd.includes('10.10.1.5') && cleanCliCmd.startsWith('ping')) {
                return `
<pre style="color: #a7f3d0; font-family: var(--font-mono); font-size: 12px; line-height: 1.45;">
PING 10.10.1.5 (10.10.1.5) 56(84) bytes of data.
64 bytes from 10.10.1.5: icmp_seq=1 ttl=64 time=0.824 ms
64 bytes from 10.10.1.5: icmp_seq=2 ttl=64 time=0.612 ms
64 bytes from 10.10.1.5: icmp_seq=3 ttl=64 time=0.749 ms

--- 10.10.1.5 ping statistics ---
3 packets transmitted, 3 received, 0% packet loss, time 2003ms
rtt min/avg/max/mdev = 0.612/0.728/0.824/0.088 ms

<span style="color: #38bdf8; font-weight: bold;">[+] CTF [Seviye 1.1]: Hedef sunucu aktif ve yanıt veriyor.</span>
<span style="color: #94a3b8;">Servis portlarını taramak için: <code style="color: #22c55e;">nmap -sV 10.10.1.5</code></span>
</pre>
                `;
            }

            if (cleanCliCmd.includes('10.10.1.5') && cleanCliCmd.startsWith('nmap')) {
                return `
<pre style="color: #a7f3d0; font-family: var(--font-mono); font-size: 12px; line-height: 1.45;">
Starting Nmap 7.94 ( https://nmap.org ) at 2026-11-08 22:00 +03
Nmap scan report for 10.10.1.5
Host is up (0.00078s latency).
Not shown: 998 closed tcp ports (reset)
PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 8.9p1 Ubuntu 3ubuntu0.6 (protocol 2.0)
80/tcp open  http    Apache httpd 2.4.52 ((Ubuntu) OpenSSL/3.0.2)
|_http-server-header: Apache/2.4.52 (Ubuntu)

<span style="color: #38bdf8; font-weight: bold;">[+] CTF [Seviye 1.1]: Port 80 HTTP servisi açık!</span>
<span style="color: #94a3b8;">HTTP yanıt başlıklarını incelemek için: <code style="color: #22c55e;">curl -I http://10.10.1.5</code></span>
</pre>
                `;
            }

            if (cleanCliCmd.includes('10.10.1.5') && cleanCliCmd.startsWith('curl')) {
                return `
<pre style="color: #a7f3d0; font-family: var(--font-mono); font-size: 12px; line-height: 1.45;">
HTTP/1.1 200 OK
Date: Sun, 08 Nov 2026 22:00:15 GMT
Server: Apache/2.4.52 (Ubuntu)
<span style="color: #fbbf24; font-weight: bold;">X-Secret-Auth: TEZMe2xldmVsMV8xX2FnX2tlc2lmX2Jhc2FyYW5zfQ==</span>
X-Content-Type-Options: nosniff
Content-Type: text/html; charset=UTF-8

<span style="color: #38bdf8; font-weight: bold;">[★] CTF [Seviye 1.1]: HTTP Başlığında gizli Base64 tokenı bulundu!</span>
<span style="color: #94a3b8;">Tokenı deşifre etmek için: <code style="color: #22c55e;">echo "TEZMe2xldmVsMV8xX2FnX2tlc2lmX2Jhc2FyYW5zfQ==" | base64 -d</code></span>
</pre>
                `;
            }

            if (cleanCliCmd.includes('tezme2xldmvs') && cleanCliCmd.includes('base64')) {
                return `
<pre style="color: #34d399; font-family: var(--font-mono); font-size: 12px; line-height: 1.45;">
LFL{level1_1_ag_kesif_basarans}

<span style="color: #fbbf24; font-weight: bold;">[★] TEBRİKLER! Seviye 1.1 Bayrağı deşifre edildi!</span>
<span style="color: #ffffff;">Bayrağı doğrulamak ve +100 XP kazanmak için yazın: <code style="color: #00e5ff;">submit LFL{level1_1_ag_kesif_basarans}</code></span>
</pre>
                `;
            }

            if (cleanCliCmd.includes('/var/backups') && cleanCliCmd.startsWith('ls')) {
                return `
<pre style="color: #a7f3d0; font-family: var(--font-mono); font-size: 12px; line-height: 1.45;">
total 16
drwxr-xr-x  2 root     root     4096 Nov  8 14:00 .
drwxr-xr-x 14 root     root     4096 Nov  8 13:50 ..
-rw-r--r--  1 operator operator  142 Nov  8 14:15 operator_note.txt
-rw-r-----  1 root     shadow    820 Nov  8 14:05 shadow.bak

<span style="color: #38bdf8; font-weight: bold;">[+] CTF [Seviye 1.2]: Şüpheli not tespit edildi: operator_note.txt</span>
<span style="color: #94a3b8;">Notu okumak için: <code style="color: #22c55e;">cat /var/backups/operator_note.txt</code></span>
</pre>
                `;
            }

            if (cleanCliCmd.includes('operator_note.txt')) {
                return `
<pre style="color: #a7f3d0; font-family: var(--font-mono); font-size: 12px; line-height: 1.45;">
======================================================
[OPERATÖR GİZLİ NOTU - LFL SİBER DENETİM 2026]
Sistem denetimi için geçici bayrağı /var/log/syslog
içerisine 'LFL{' ön ekiyle bıraktım.
Filtrelemek için grep kullan: grep -i "LFL{" /var/log/syslog
======================================================
</pre>
                `;
            }

            if (cleanCliCmd.includes('/var/log/syslog') && cleanCliCmd.includes('grep')) {
                return `
<pre style="color: #34d399; font-family: var(--font-mono); font-size: 12px; line-height: 1.45;">
Nov  8 14:22:01 lfl-srv systemd[1]: AUDIT_KEY_VAULT: token_flag="LFL{level1_2_linux_dosya_adli_analiz}"

<span style="color: #fbbf24; font-weight: bold;">[★] TEBRİKLER! Seviye 1.2 Bayrağı loglardan ayıklandı!</span>
<span style="color: #ffffff;">Bayrağı teslim etmek için: <code style="color: #00e5ff;">submit LFL{level1_2_linux_dosya_adli_analiz}</code></span>
</pre>
                `;
            }

            if (cleanCliCmd.includes('10.10.2.10') && cleanCliCmd.startsWith('whatweb')) {
                return `
<pre style="color: #a7f3d0; font-family: var(--font-mono); font-size: 12px; line-height: 1.45;">
http://10.10.2.10 [200 OK] Apache[2.4.52], HTTPServer[Ubuntu Linux], IP[10.10.2.10], PHP[8.1.2], Title[Intranet Portal], X-Powered-By[PHP/8.1.2]
<span style="color: #38bdf8; font-weight: bold;">[+] CTF [Seviye 2.1]: Web portalı keşfedildi. Gizli dizinleri taramak için:</span>
<span style="color: #22c55e;">gobuster dir -u http://10.10.2.10 -w common.txt</span>
</pre>
                `;
            }

            if (cleanCliCmd.includes('10.10.2.10') && cleanCliCmd.startsWith('gobuster')) {
                return `
<pre style="color: #a7f3d0; font-family: var(--font-mono); font-size: 12px; line-height: 1.45;">
===============================================================
Gobuster v3.6 - Directory Brute-Force Mode
===============================================================
[+] Target URL:   http://10.10.2.10
[+] Wordlist:     common.txt
===============================================================
/admin_vault          (Status: 301) [Size: 178]
/index.php            (Status: 200) [Size: 4210]
/robots.txt           (Status: 200) [Size: 112]
===============================================================
<span style="color: #38bdf8; font-weight: bold;">[+] Kritik rota bulundu! İncelemek için: <code style="color: #22c55e;">curl http://10.10.2.10/robots.txt</code></span>
</pre>
                `;
            }

            if (cleanCliCmd.includes('10.10.2.10/robots.txt')) {
                return `
<pre style="color: #a7f3d0; font-family: var(--font-mono); font-size: 12px; line-height: 1.45;">
User-agent: *
Disallow: /admin_vault/confidential_token.json

<span style="color: #fbbf24; font-weight: bold;">[+] Gizli JSON anahtar yolu deşifre edildi!</span>
<span style="color: #ffffff;">Dosyayı okumak için: <code style="color: #00e5ff;">curl http://10.10.2.10/admin_vault/confidential_token.json</code></span>
</pre>
                `;
            }

            if (cleanCliCmd.includes('confidential_token.json')) {
                return `
<pre style="color: #34d399; font-family: var(--font-mono); font-size: 12px; line-height: 1.45;">
{
  "vault_id": "LFL-INTRA-8891",
  "status": "unlocked",
  "flag": "LFL{level2_1_web_dizin_firtinasi}"
}

<span style="color: #fbbf24; font-weight: bold;">[★] Seviye 2.1 Bayrağı ele geçirildi!</span>
<span style="color: #ffffff;">Bayrağı teslim etmek için: <code style="color: #00e5ff;">submit LFL{level2_1_web_dizin_firtinasi}</code></span>
</pre>
                `;
            }

            if (cleanCliCmd.includes('suspect_payload.bin') && cleanCliCmd.startsWith('file')) {
                return `
<pre style="color: #a7f3d0; font-family: var(--font-mono); font-size: 12px; line-height: 1.45;">
/evidence/suspect_payload.bin: ELF 64-bit LSB executable, x86-64, version 1 (SYSV), dynamically linked, stripped
<span style="color: #38bdf8; font-weight: bold;">[+] CTF [Seviye 2.2]: İkili dosyadaki gizli metinleri ayıklamak için:</span>
<span style="color: #22c55e;">strings /evidence/suspect_payload.bin | grep "LFL{"</span>
</pre>
                `;
            }

            if (cleanCliCmd.includes('suspect_payload.bin') && cleanCliCmd.includes('strings')) {
                return `
<pre style="color: #34d399; font-family: var(--font-mono); font-size: 12px; line-height: 1.45;">
OFFSET:0x0041a0  FLAG_TOKEN: LFL{level2_2_adli_bilisim_strings_ustasi}

<span style="color: #fbbf24; font-weight: bold;">[★] Adli analiz başarılı! Seviye 2.2 Bayrağı bulundu!</span>
<span style="color: #ffffff;">Bayrağı teslim etmek için: <code style="color: #00e5ff;">submit LFL{level2_2_adli_bilisim_strings_ustasi}</code></span>
</pre>
                `;
            }

            if (cleanCliCmd.includes('suspect_payload.bin') && cleanCliCmd.startsWith('md5sum')) {
                return `
<pre style="color: #a7f3d0; font-family: var(--font-mono); font-size: 12px; line-height: 1.45;">
e4d909c290d0fb1ca068ffaddf22cbd0  /evidence/suspect_payload.bin
<span style="color: #10b981;">[✔] Dosya MD5 özeti doğrulandı.</span>
</pre>
                `;
            }

            if (cleanCliCmd.includes('10.10.3.50') && cleanCliCmd.startsWith('hydra')) {
                return `
<pre style="color: #34d399; font-family: var(--font-mono); font-size: 12px; line-height: 1.45;">
Hydra v9.5 (c) 2023 by THC - SSH Protocol Brute-force
[ATTACK] targeting 10.10.3.50:22 (SSH)
[22][ssh] host: 10.10.3.50   login: operator   password: Summer2026!
1 of 1 target completed, 1 valid password found!

<span style="color: #fbbf24; font-weight: bold;">[+] SSH Parolası Kırıldı: operator / Summer2026!</span>
<span style="color: #ffffff;">Sunucuya bağlanmak için: <code style="color: #00e5ff;">ssh operator@10.10.3.50</code></span>
</pre>
                `;
            }

            if (cleanCliCmd.includes('operator@10.10.3.50')) {
                return `
<pre style="color: #a7f3d0; font-family: var(--font-mono); font-size: 12px; line-height: 1.45;">
operator@10.10.3.50's password: [Summer2026!]
Welcome to Fortress Linux Server (Ubuntu 22.04.3 LTS)
operator@fortress:~$ 

<span style="color: #38bdf8; font-weight: bold;">[+] CTF [Seviye 3.1]: Düşük yetkili SSH oturumu açıldı!</span>
<span style="color: #94a3b8;">Yetki yükseltmek için SUID dosyaları arayın: <code style="color: #22c55e;">find / -perm -4000 2>/dev/null</code></span>
</pre>
                `;
            }

            if (cleanCliCmd.includes('-perm -4000') || cleanCliCmd.includes('-perm -u=s')) {
                return `
<pre style="color: #a7f3d0; font-family: var(--font-mono); font-size: 12px; line-height: 1.45;">
/usr/lib/openssh/ssh-keysign
<span style="color: #ef4444; font-weight: bold;">/usr/bin/python3 (!!! SUID BİTİ AÇIK - ROOT YETKİSİYLE ÇALIŞIR !!!)</span>
/usr/bin/passwd
/usr/bin/su

<span style="color: #fbbf24; font-weight: bold;">[★] ZAFİYET KEŞFİ: /usr/bin/python3 SUID yetkisine sahip!</span>
<span style="color: #ffffff;">Root bayrağını okumak için: <code style="color: #00e5ff;">cat /root/flag.txt</code></span>
</pre>
                `;
            }

            if (cleanCliCmd === 'cat /root/flag.txt' || cleanCliCmd === 'sudo cat /root/flag.txt') {
                return `
<pre style="color: #34d399; font-family: var(--font-mono); font-size: 12px; line-height: 1.45;">
====================================================
ROOT PRIVILEGE ESCALATION SUCCESSFUL!
FLAG: LFL{level3_1_suid_privesc_root_fatihi}
====================================================

<span style="color: #fbbf24; font-weight: bold;">[★] TEBRİKLER! Seviye 3.1 Root Bayrağı ele geçirildi!</span>
<span style="color: #ffffff;">Bayrağı teslim etmek için: <code style="color: #00e5ff;">submit LFL{level3_1_suid_privesc_root_fatihi}</code></span>
</pre>
                `;
            }

            if (cleanCliCmd.includes('10.10.3.99') && cleanCliCmd.startsWith('curl')) {
                return `
<pre style="color: #a7f3d0; font-family: var(--font-mono); font-size: 12px; line-height: 1.45;">
HTTP/1.1 200 OK
Content-Type: application/json
{"query": "test", "results": [], "db_engine": "MySQL 8.0.35", "warning": "Unescaped parameter detected"}

<span style="color: #38bdf8; font-weight: bold;">[+] CTF Büyük Final [Seviye 3.2]: API SQL Injection açığı içeriyor!</span>
<span style="color: #94a3b8;">Veritabanlarını dökmek için: <code style="color: #22c55e;">sqlmap -u "http://10.10.3.99/api/search?q=test" --dbs</code></span>
</pre>
                `;
            }

            if (cleanCliCmd.includes('10.10.3.99') && cleanCliCmd.includes('--dbs')) {
                return `
<pre style="color: #a7f3d0; font-family: var(--font-mono); font-size: 12px; line-height: 1.45;">
[+] GET parameter 'q' is vulnerable to SQL injection (UNION query, error-based)
available databases [2]:
[*] information_schema
[*] <span style="color: #fbbf24; font-weight: bold;">lfl_master_vault</span>

<span style="color: #38bdf8; font-weight: bold;">[+] Tabloları listelemek için:</span>
<span style="color: #22c55e;">sqlmap -u "http://10.10.3.99/api/search?q=test" -D lfl_master_vault --tables</span>
</pre>
                `;
            }

            if (cleanCliCmd.includes('10.10.3.99') && cleanCliCmd.includes('--tables')) {
                return `
<pre style="color: #a7f3d0; font-family: var(--font-mono); font-size: 12px; line-height: 1.45;">
Database: lfl_master_vault
[1 table]
+--------------------------------+
| <span style="color: #fbbf24; font-weight: bold;">master_classified_flags</span>        |
+--------------------------------+

<span style="color: #38bdf8; font-weight: bold;">[+] Nihai bayrağı dökmek için:</span>
<span style="color: #22c55e;">sqlmap -u "http://10.10.3.99/api/search?q=test" -D lfl_master_vault -T master_classified_flags --dump</span>
</pre>
                `;
            }

            if (cleanCliCmd.includes('10.10.3.99') && cleanCliCmd.includes('--dump')) {
                return `
<pre style="color: #34d399; font-family: var(--font-mono); font-size: 12px; line-height: 1.45;">
Database: lfl_master_vault
Table: master_classified_flags
[1 entry]
+----+-------------------+---------------------------------------------------+
| id | mission_code      | flag_token                                        |
+----+-------------------+---------------------------------------------------+
| 1  | OP_GRAND_FINAL    | LFL{level3_2_sqli_grand_master_champion_2026}     |
+----+-------------------+---------------------------------------------------+

<span style="color: #fbbf24; font-weight: 800; font-size: 14px;">🏆 [★] BÜYÜK FİNAL ŞAMPİYONLUK BAYRAĞI ELE GEÇİRİLDİ! [★] 🏆</span>
<span style="color: #ffffff;">Şampiyonluğunuzu onaylamak ve +1000 XP almak için yazın:</span>
<code style="color: #00e5ff; font-size: 13px; font-weight: 800;">submit LFL{level3_2_sqli_grand_master_champion_2026}</code>
</pre>
                `;
            }

            // D. SİBER KILAVUZ & SÖZLÜK (85+ Terim Analojili Manpage)
            if (cleanCliCmd === 'sozluk' || cleanCliCmd === 'sozluk list' || cleanCliCmd === 'dict' || cleanCliCmd === 'dict list' || cleanCliCmd === 'kilavuz' || cleanCliCmd === 'kılavuz') {
                const gData = (typeof glossaryData !== 'undefined' && Array.isArray(glossaryData)) ? glossaryData : (window.glossaryData || []);
                const termPills = gData.map(item => `<code style="background: rgba(168, 85, 247, 0.15); color: #c084fc; padding: 2px 6px; border-radius: 4px; font-size: 11px; display: inline-block; margin: 2px;">${escapeHtml(item.tag)}</code>`).join(' ');
                return `
<div style="font-family: var(--font-mono); font-size: 12px; line-height: 1.5; border: 1px solid rgba(168, 85, 247, 0.35); background: rgba(15, 10, 30, 0.85); border-radius: 8px; padding: 14px; margin: 8px 0;">
    <div style="color: #c084fc; font-weight: 800; font-size: 13px; margin-bottom: 6px;">📖 SİBER KILAVUZ &amp; SÖZLÜK (TOPLAM ${gData.length}+ KAPSAMLI TERİM)</div>
    <div style="color: #94a3b8; font-size: 11.5px; margin-bottom: 10px;">Herhangi bir terimin analojili ve teknik detayını görmek için terminale <code style="color: #38bdf8;">sozluk &lt;terim&gt;</code> veya doğrudan terimin adını yazın (Örn: <code style="color: #22c55e;">sozluk waf</code>, <code style="color: #22c55e;">honeypot</code>, <code style="color: #22c55e;">siem</code>, <code style="color: #22c55e;">mitm</code>).</div>
    <div style="max-height: 240px; overflow-y: auto; padding-right: 6px; line-height: 1.8;">
        ${termPills}
    </div>
</div>
                `;
            }

            // Check if user is searching glossary via sozluk <query> or man <query> or direct tag
            let glossaryQuery = null;
            if (cleanCliCmd.startsWith('sozluk ') || cleanCliCmd.startsWith('dict ') || cleanCliCmd.startsWith('explain ') || cleanCliCmd.startsWith('kılavuz ') || cleanCliCmd.startsWith('kilavuz ') || cleanCliCmd.startsWith('man ') || cleanCliCmd.startsWith('whatis ')) {
                glossaryQuery = cleanCliCmd.split(' ').slice(1).join(' ').trim();
            } else {
                glossaryQuery = cleanCliCmd;
            }

            if (glossaryQuery) {
                const gData = (typeof glossaryData !== 'undefined' && Array.isArray(glossaryData)) ? glossaryData : (window.glossaryData || []);
                const qClean = glossaryQuery.toLowerCase().replace(/[^a-z0-9]/g, '');
                const foundTerm = gData.find(item => {
                    const tagClean = (item.tag || '').toLowerCase().replace(/[^a-z0-9]/g, '');
                    if (tagClean === qClean) return true;
                    if ((item.tag || '').toLowerCase() === glossaryQuery.toLowerCase()) return true;
                    if (qClean.length >= 3 && tagClean.includes(qClean)) return true;
                    return false;
                });

                if (foundTerm && (cleanCliCmd.startsWith('sozluk') || cleanCliCmd.startsWith('dict') || cleanCliCmd.startsWith('explain') || cleanCliCmd.startsWith('man') || cleanCliCmd.startsWith('whatis') || foundTerm.tag.toLowerCase().replace(/[^a-z0-9]/g, '') === qClean)) {
                    return `
<div class="kali-glossary-card" style="margin: 8px 0; font-family: var(--font-mono); font-size: 12px; line-height: 1.5; border: 1px solid rgba(168, 85, 247, 0.45); background: rgba(15, 10, 30, 0.9); border-radius: 8px; padding: 14px; box-shadow: 0 4px 20px rgba(168, 85, 247, 0.15);">
    <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(168, 85, 247, 0.25); padding-bottom: 6px; margin-bottom: 8px;">
        <span style="color: #c084fc; font-weight: 800; font-size: 12px;">📖 LFL SİBER KILAVUZ &amp; SÖZLÜK // TERİM DOSYASI</span>
        <span style="background: rgba(168, 85, 247, 0.2); color: #d8b4fe; font-weight: 700; font-size: 11px; padding: 2px 8px; border-radius: 4px; border: 1px solid rgba(168, 85, 247, 0.35);">[${escapeHtml(foundTerm.tag)}]</span>
    </div>
    <div style="color: #ffffff; font-weight: 700; font-size: 13.5px; margin-bottom: 8px;">▶ ${escapeHtml(foundTerm.title)}</div>
    
    <div style="background: rgba(0, 229, 255, 0.06); border-left: 3px solid #00e5ff; padding: 8px 12px; border-radius: 4px; margin: 8px 0; color: #e2e8f0;">
        <div style="color: #38bdf8; font-weight: bold; font-size: 11px; margin-bottom: 3px;">💡 GÜNLÜK HAYATTAN BENZETME (MALA ANLATIR GİBİ):</div>
        <div style="color: #cbd5e1; font-size: 12px;">${escapeHtml(foundTerm.analogy)}</div>
    </div>

    <div style="background: rgba(255, 255, 255, 0.03); border-left: 3px solid #a855f7; padding: 8px 12px; border-radius: 4px; margin: 8px 0; color: #e2e8f0;">
        <div style="color: #c084fc; font-weight: bold; font-size: 11px; margin-bottom: 3px;">🛡️ TEKNİK DERİNLİK &amp; MİMARİ:</div>
        <div style="color: #e2e8f0; font-size: 12px;">${escapeHtml(foundTerm.desc)}</div>
    </div>

    <div style="background: rgba(16, 185, 129, 0.06); border-left: 3px solid #10b981; padding: 8px 12px; border-radius: 4px; margin: 8px 0; color: #e2e8f0;">
        <div style="color: #34d399; font-weight: bold; font-size: 11px; margin-bottom: 3px;">🔒 SAVUNMA &amp; ENGELLEME (MİTİGASYON):</div>
        <div style="color: #a7f3d0; font-size: 12px;">${escapeHtml(foundTerm.mitigates || 'Güvenlik sertleştirmesi ve güncel yamalar.')}</div>
    </div>
</div>
                    `;
                }
            }

            // E. SİBER AKADEMİ ODALARI (69 Oda - Tümü Çalıştırılabilir)
            if (cleanCliCmd === 'rooms' || cleanCliCmd === 'rooms list' || cleanCliCmd === 'odalar' || cleanCliCmd === 'oda listesi') {
                if (window.ACADEMY_ROOMS && Array.isArray(window.ACADEMY_ROOMS)) {
                    const tracks = { starter: [], red: [], blue: [], purple: [] };
                    window.ACADEMY_ROOMS.forEach(r => {
                        if (tracks[r.track]) tracks[r.track].push(r);
                    });
                    return `
<pre style="color: #38bdf8; font-family: var(--font-mono); font-size: 12px; line-height: 1.5;">
[★] ======================================================================
[★] LFL SİBER AKADEMİ GÖREV ODALARI (TOPLAM ${window.ACADEMY_ROOMS.length} ODA)
[★] ======================================================================
🌱 STARTER TRACK (18 Oda)  : starter-01 ... starter-18
⚔️ RED TEAM (20 Oda)       : red-101 ... red-312
🛡️ BLUE TEAM (17 Oda)      : blue-101 ... blue-311
🔮 PURPLE TEAM (14 Oda)    : purple-101 ... purple-310

[!] KULLANIM İPUCU:
  1) Belirli bir odayı çalıştırmak için: <code style="color: #00e5ff;">room starter-01</code> veya <code style="color: #00e5ff;">room red-101</code>
  2) Odanın doğrudan kendi komutunu yazabilirsiniz (Örn: <code style="color: #22c55e;">ip a</code>, <code style="color: #22c55e;">mimikatz</code>, <code style="color: #22c55e;">tcpdump</code>)
  3) Odayı tamamladığınızda bayrak otomatik kazanılır ve ilerlemeniz kaydedilir!
======================================================================
</pre>
                    `;
                }
            }

            // Check if user types "room <id>" or "oda <id>"
            let targetRoomId = null;
            if (cleanCliCmd.startsWith('room ') || cleanCliCmd.startsWith('oda ') || cleanCliCmd.startsWith('run room-') || cleanCliCmd.startsWith('run starter-') || cleanCliCmd.startsWith('run red-') || cleanCliCmd.startsWith('run blue-') || cleanCliCmd.startsWith('run purple-')) {
                targetRoomId = cleanCliCmd.replace(/^(room|oda|run)\s+/, '').trim().toLowerCase();
            }

            if (window.ACADEMY_ROOMS && Array.isArray(window.ACADEMY_ROOMS)) {
                let matchedRoom = null;

                // 1. Matched by ID
                if (targetRoomId) {
                    matchedRoom = window.ACADEMY_ROOMS.find(r => r.id.toLowerCase() === targetRoomId);
                }

                // 2. Matched by acceptedCommands or expectedCommand
                if (!matchedRoom) {
                    matchedRoom = window.ACADEMY_ROOMS.find(r => {
                        if (r.expectedCommand && r.expectedCommand.toLowerCase().trim() === cleanCliCmd) return true;
                        if (Array.isArray(r.acceptedCommands)) {
                            return r.acceptedCommands.some(ac => {
                                const acClean = ac.toLowerCase().trim().replace(/^sudo\s+/, '').replace(/\s+/g, ' ');
                                return acClean === cleanCliCmd || ac.toLowerCase().trim() === lower;
                            });
                        }
                        return false;
                    });
                }

                if (matchedRoom) {
                    markRoomCompletedInStorage(matchedRoom.id);
                    return `
<div class="kali-room-exec-card" style="margin: 8px 0; font-family: var(--font-mono); font-size: 12px; line-height: 1.5; border: 1px solid rgba(0, 229, 255, 0.4); background: rgba(5, 15, 30, 0.85); border-radius: 8px; padding: 12px 14px; box-shadow: 0 4px 20px rgba(0, 229, 255, 0.12);">
    <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 1px solid rgba(0, 229, 255, 0.2); padding-bottom: 6px; margin-bottom: 8px;">
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="display: inline-block; width: 8px; height: 8px; border-radius: 50%; background: #10b981; box-shadow: 0 0 8px #10b981;"></span>
            <span style="color: #38bdf8; font-weight: 800; font-size: 12px;">🛡️ LFL SİBER AKADEMİ GÖREV SİMÜLASYONU</span>
        </div>
        <span style="background: rgba(16, 185, 129, 0.15); color: #34d399; font-weight: 700; font-size: 11px; padding: 2px 8px; border-radius: 4px; border: 1px solid rgba(16, 185, 129, 0.3);">${escapeHtml(matchedRoom.badge || matchedRoom.track.toUpperCase() + ' TEAM')}</span>
    </div>
    <div style="color: #ffffff; font-weight: 700; font-size: 13px; margin-bottom: 4px;">ODA ${escapeHtml(matchedRoom.id.toUpperCase())}: ${escapeHtml(matchedRoom.title)}</div>
    <div style="color: #94a3b8; font-size: 11.5px; margin-bottom: 8px;">🎯 <strong>Görev Yönergesi:</strong> ${escapeHtml(matchedRoom.mission)}</div>
    
    <div style="background: #020617; border: 1px solid rgba(255, 255, 255, 0.1); border-radius: 6px; padding: 10px 12px; color: #a7f3d0; font-size: 11.5px; white-space: pre-wrap; word-break: break-all; margin: 8px 0; line-height: 1.45;">${escapeHtml(matchedRoom.terminalSuccessOutput || matchedRoom.terminalOutput || '[✔] Görev komutu başarıyla icra edildi.')}</div>

    <div style="background: rgba(251, 191, 36, 0.08); border: 1px dashed rgba(251, 191, 36, 0.35); border-radius: 6px; padding: 8px 12px; margin-top: 8px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 8px;">
        <div>
            <span style="color: #fbbf24; font-weight: 800; font-size: 11.5px;">🚩 TEBRİKLER! ODA BAYRAĞI ELE GEÇİRİLDİ:</span>
            <code style="background: rgba(0, 0, 0, 0.5); color: #fde047; padding: 3px 8px; border-radius: 4px; font-weight: bold; margin-left: 6px; border: 1px solid rgba(251, 191, 36, 0.4);">${escapeHtml(matchedRoom.flag)}</code>
        </div>
        <a href="academy.html?room=${escapeHtml(matchedRoom.id)}" target="_blank" style="color: #38bdf8; font-size: 11.5px; text-decoration: underline; font-weight: 600;">Akademi Laboratuvarında Aç &rarr;</a>
    </div>
</div>
                    `;
                }
            }

            // F. 143+ SİBER KOMUT MOTORU (window.ACADEMY_COMMANDS)
            if (window.ACADEMY_COMMANDS && Array.isArray(window.ACADEMY_COMMANDS)) {
                const foundCmd = window.ACADEMY_COMMANDS.find(c => {
                    const cClean = c.cmd.toLowerCase().trim().replace(/^sudo\s+/, '').replace(/^powershell\s+/, '').replace(/^\.\//, '').replace(/^\\/, '').replace(/\s+/g, ' ');
                    if (cClean === cleanCliCmd || c.cmd.toLowerCase().trim() === lower) return true;
                    const cFirst = cClean.split(' ')[0] || '';
                    const uFirst = cleanCliCmd.split(' ')[0] || '';
                    if (uFirst && (uFirst === cFirst) && cleanCliCmd.length <= cClean.length + 5) return true;
                    return false;
                });

                if (foundCmd && !cleanCliCmd.startsWith('nmap') && !cleanCliCmd.startsWith('hydra') && !cleanCliCmd.startsWith('gobuster') && !cleanCliCmd.startsWith('sqlmap')) {
                    return `
<div style="font-family: var(--font-mono); font-size: 12px; line-height: 1.5; margin: 6px 0; border: 1px solid rgba(0, 229, 255, 0.3); background: rgba(5, 15, 30, 0.7); border-radius: 6px; padding: 10px 12px;">
    <div style="color: #38bdf8; font-weight: 700;">[⚙️] EXEC: <code style="color: #ffffff; font-weight: 800;">${escapeHtml(rawCmd)}</code></div>
    <div style="color: #64748b; font-size: 10.5px; margin-bottom: 6px;">Kategori: <span style="color: #a5f3fc;">${escapeHtml(foundCmd.categoryName)}</span> &bull; <span style="color: #22c55e;">[${escapeHtml(foundCmd.badge)}]</span> &bull; Durum: 200 OK &bull; PID: ${Math.floor(1000 + Math.random() * 9000)}</div>
    <div style="background: rgba(0, 0, 0, 0.45); border-left: 3px solid var(--cyan); padding: 8px 12px; border-radius: 4px; margin: 6px 0; color: #e2e8f0;">
        <div style="color: #38bdf8; font-weight: bold; margin-bottom: 4px;">▶ ${escapeHtml(foundCmd.title)}</div>
        <div style="color: #cbd5e1; font-size: 11.5px;">${escapeHtml(foundCmd.desc)}</div>
    </div>
    <div style="color: #10b981; font-size: 11px;">[✔] Komut simülasyonu başarıyla yürütüldü. (Siber Akademi modülünde daha fazla pratik yapabilirsiniz)</div>
</div>
                    `;
                }
            }



            // 1. HELP
            if (lower === 'help' || lower === '?') {
                return `
<span style="color: #38bdf8; font-weight: bold;">=== KALI LINUX &amp; LFL SİBER SAVUNMA KOMUT KÜTÜPHANESİ (140+ ARAÇ) ===</span>

<span style="color: #22c55e; font-weight: bold;">[AĞ &amp; PORT TARAMA - NMAP]:</span>
  nmap -p- 127.0.0.1           : Tüm 65,535 portu SYN stealth taramasıyla inceler
  nmap 8080/tcp                 : Belirli bir portun durumunu ve servisini kontrol eder
  nmap -F 192.168.1.1           : En yaygın 100 portu ultra hızlı tarar
  sudo nmap -sn 192.168.1.0/24  : Yerel ağdaki tüm aktif istemcileri ping taramasıyla listeler
  sudo nmap -O 192.168.1.17     : Hedef cihazın işletim sistemini (OS Fingerprinting) tahmin eder
  nmap -Pn 192.168.1.1          : Ping cevap vermeyen gizli sunucuları taramaya zorlar
  nmap -sV 127.0.0.1            : Çalışan servislerin adını ve tam versiyonunu deşifre eder
  sudo nmap -sV -p 5000,7000... : Birden fazla spesifik portun servis detaylarını çıkarır
  nmap -sS -T2 192.168.1.1      : IDS/IPS yakalamasını engellemek için sessiz ve yavaş tarama
  nmap --script vuln 192.168.1.1: NSE zafiyet veritabanı taraması
  nmap -sU -p 53,67,123...      : UDP servislerini denetler

<span style="color: #22c55e; font-weight: bold;">[WEB DİZİN &amp; FUZZING &amp; OSINT]:</span>
  whois lostfromlight.com                       : Alan adı sahiplik ve DNS kayıtlarını sorgular
  dig lostfromlight.com                         : DNS A ve NS kayıtlarını çözer
  gobuster dir -u http://127.0.0.1 -w common.txt: Web sitesindeki gizli dizinleri (/admin, /backup) bulur
  ffuf -u http://127.0.0.1/FUZZ -w common.txt   : Yüksek hızlı web fuzzer ile parametre ve rotaları ortaya çıkarır
  nikto -h 192.168.1.1                          : Web sunucusundaki zafiyetleri ve güvenlik başlıklarını tarar
  whatweb http://127.0.0.1                      : Web teknolojilerini (CMS, web server, kütüphaneler) listeler
  dirb http://127.0.0.1                         : Klasik içerik keşif aracı
  wfuzz -c -z file,common.txt --hc 404 ...      : Gelişmiş filtreli fuzzer
  sublist3r -d lfl.local                        : Alt alan adlarını (subdomain) keşfeder

<span style="color: #22c55e; font-weight: bold;">[PAKET ÜRETİMİ &amp; FIREWALL TESTİ]:</span>
  sudo hping3 -S -p 80 -c 1 192.168.1.1   : Manuel TCP SYN paketiyle açık port doğrulaması
  sudo hping3 -A -p 80 -c 1 192.168.1.1   : ACK bayrağıyla güvenlik duvarının (Firewall) tepkisini ölçer
  hping3 -S -p 22 127.0.0.1               : Belirli porta TCP SYN gönderir
  hping3 -1 127.0.0.1                     : Hedefe ICMP ping yollar
  sudo hping3 --udp --flood ...           : DoS / Flood dayanıklılık testi simülasyonu

<span style="color: #22c55e; font-weight: bold;">[ORTADAKİ ADAM (MITM) &amp; AĞ ANALİZİ]:</span>
  bettercap -iface lo                     : Dinleme ve paket analiz aracı
  tcpdump -i eth0 -nn -s0 -v              : Ham ağ paketlerini canlı yakalar
  tshark -i 1 -Y "http.request"           : Terminal tabanlı Wireshark filtreleyicisi
  arpspoof -i eth0 -t 192.168.1.17...     : ARP zehirleme simülasyonu
  responder -I eth0 -dwv                  : LLMNR/NBT-NS zehirleme analizörü

<span style="color: #22c55e; font-weight: bold;">[KİMLİK DOĞRULAMA &amp; ŞİFRE DENETİMİ]:</span>
  hydra -l admin -p Sebu132009 192.168.1.1 http-get / : HTTP GET form giriş şifresini test eder
  john --wordlist=rockyou.txt hash.txt                 : Parola özetlerini (hash) çözer
  hashcat -m 0 -a 0 hash.txt rockyou.txt              : GPU destekli hash kırıcı
  cewl https://127.0.0.1 -w wordlist.txt               : Siteden özel kelime listesi üretir

<span style="color: #22c55e; font-weight: bold;">[ZAFİYET &amp; EXPLOIT DENETİMİ]:</span>
  sqlmap -u http://127.0.0.1/api/search?q=test --dbs   : Otomatik SQL enjeksiyon testi
  searchsploit apache 2.4.49                           : Offline Exploit-DB arşivi
  nuclei -u http://127.0.0.1                           : Şablon tabanlı zafiyet tarayıcı
  msfconsole -q                                        : Metasploit Framework konsolu

<span style="color: #22c55e; font-weight: bold;">[TÜNEL &amp; PIVOTİNG]:</span>
  nc -lvnp 4444                                        : Netcat port dinleyicisi
  socat TCP-LISTEN:8080,fork TCP:127.0.0.1:80          : Çift yönlü soket köprüsü
  chisel server -p 8000 --reverse                      : TCP/UDP HTTP tüneli
  ssh -D 1080 -q -C -N user@127.0.0.1                  : SOCKS5 tüneli kurar

<span style="color: #22c55e; font-weight: bold;">[POWERSHELL &amp; DEFANS]:</span>
  powershell .\\Audit-Headers.ps1                      : Zorunlu web güvenlik başlıklarını doğrular
  powershell .\\Port-Scan.ps1                          : Çok kanallı runspace port taraması yapar
  powershell .\\Banner-Grab.ps1                        : Sunucu banner gizleme denetimi

<span style="color: #94a3b8;">Komut geçmişinde gezinmek için [YUKARI/AŞAĞI OK], otomatik tamamlamak için [TAB] tuşuna basın. Temizlemek için 'clear' yazın.</span>
                `;
            }

            // 2. POWERSHELL AUDIT HEADERS
            if (lower.includes('audit-headers') || lower.includes('strict-transport-security') || lower.includes('headers')) {
                return `
<span style="color: #00e5ff; font-weight: bold;">=== GÜVENLİK BAŞLIĞI DENETİM RAPORU (PowerShell Invoke-WebRequest) ===</span>
<span style="color: #94a3b8;">Hedef: https://localhost:5000</span>

<span style="color: #22c55e;">[✔] GÜVENLİ: 'Strict-Transport-Security' (HSTS) başlığı tanımlanmış.</span>
    <span style="color: #94a3b8;">Değer: max-age=31536000; includeSubDomains; preload</span>

<span style="color: #22c55e;">[✔] GÜVENLİ: 'Content-Security-Policy' (CSP) başlığı tanımlanmış.</span>
    <span style="color: #94a3b8;">Değer: default-src 'self'; script-src 'self' 'unsafe-inline'</span>

<span style="color: #22c55e;">[✔] GÜVENLİ: 'X-Frame-Options' başlığı tanımlanmış.</span>
    <span style="color: #94a3b8;">Değer: DENY (Clickjacking Korumalı)</span>

<span style="color: #22c55e;">[✔] GÜVENLİ: 'X-Content-Type-Options' başlığı tanımlanmış.</span>
    <span style="color: #94a3b8;">Değer: nosniff (MIME Confuse Saldırısı Engellendi)</span>

<span style="color: #22c55e;">[✔] GÜVENLİ: 'Referrer-Policy' başlığı tanımlanmış.</span>
    <span style="color: #94a3b8;">Değer: strict-origin-when-cross-origin</span>

<span style="color: #22c55e; font-weight: bold;">Sonuç: Sunucu %100 SOC2 ve ISO 27001 kurumsal standartlarına uygundur!</span>
                `;
            }

            // 3. POWERSHELL PORT SCAN
            if (lower.includes('port-scan') || lower.includes('runspace')) {
                return `
<span style="color: #c084fc; font-weight: bold;">=== MULTI-THREAD (RUNSPACE POOL) PORT TARAMA RAPORU ===</span>
<span style="color: #94a3b8;">Hedef Sistem: 127.0.0.1</span>
<span style="color: #94a3b8;">Eşzamanlı İş Parçacığı: 16 Core RunspacePool</span>

Port 21   (FTP)       : <span style="color: #64748b;">Kapalı</span>
Port 22   (SSH)       : <span style="color: #64748b;">Kapalı</span>
Port 25   (SMTP)      : <span style="color: #64748b;">Kapalı</span>
Port 53   (DNS)       : <span style="color: #64748b;">Kapalı</span>
Port 80   (HTTP)      : <span style="color: #22c55e; font-weight: bold;">AÇIK</span> [LFL Kestrel Proxy]
Port 443  (HTTPS)     : <span style="color: #22c55e; font-weight: bold;">AÇIK</span> [TLS 1.3 / Strict-Transport-Security]
Port 445  (SMB)       : <span style="color: #64748b;">Kapalı</span> (Fidye Yazılımı Kalkanı)
Port 3389 (RDP)       : <span style="color: #64748b;">Kapalı</span> (Uzaktan Masaüstü Kilitli)
Port 5000 (LFL-API)   : <span style="color: #22c55e; font-weight: bold;">AÇIK</span> [ASP.NET Core 8 Web API]
Port 8080 (Dev-Proxy) : <span style="color: #22c55e; font-weight: bold;">AÇIK</span> [Kısıtlı Geliştirici Tüneli]

<span style="color: #22c55e;">Tarama 0.38 saniyede tamamlandı. 16 Runspace başarıyla kapatıldı.</span>
<span style="color: #38bdf8;">[DEFENSIVE TAKEAWAY]: SMB (445) ve RDP (3389) tamamen kapalı tutulmalıdır.</span>
                `;
            }

            // 4. NMAP -P-
            if (lower.includes('nmap') && lower.includes('-p-')) {
                return `
Starting Nmap 7.94 ( https://nmap.org ) at 2026-11-08 00:00 UTC
Initiating SYN Stealth Scan at 00:00
Scanning localhost (127.0.0.1) [65535 ports]
Discovered open port 80/tcp on 127.0.0.1
Discovered open port 443/tcp on 127.0.0.1
Discovered open port 5000/tcp on 127.0.0.1
Discovered open port 8080/tcp on 127.0.0.1
Completed SYN Stealth Scan at 00:00, 3.82s elapsed (65535 total ports)
Nmap scan report for localhost (127.0.0.1)
Host is up (0.000082s latency).
Not shown: 65531 closed tcp ports (reset)

<span style="color: #38bdf8; font-weight: bold;">PORT     STATE SERVICE      REASON</span>
80/tcp   <span style="color: #22c55e;">open</span>  http         syn-ack ttl 64 (LFL Kestrel Proxy)
443/tcp  <span style="color: #22c55e;">open</span>  https        syn-ack ttl 64 (TLS 1.3 / HSTS Strict)
5000/tcp <span style="color: #22c55e;">open</span>  lfl-api      syn-ack ttl 64 (ASP.NET Core Web API)
8080/tcp <span style="color: #22c55e;">open</span>  http-proxy   syn-ack ttl 64 (Dev Gateway)

Nmap done: 1 IP address (1 host up) scanned in 3.89 seconds
<span style="color: #38bdf8;">[DEFENSIVE TAKEAWAY]: -p- bayrağı tüm 65,535 portu denetleyerek hiçbir gölge servisin (Shadow IT) unutulmamasını sağlar.</span>
                `;
            }

            // 5. NMAP 8080
            if (lower.includes('nmap') && lower.includes('8080')) {
                return `
Starting Nmap 7.94 ( https://nmap.org ) at 2026-11-08 00:01 UTC
Nmap scan report for 127.0.0.1
Host is up (0.000078s latency).

<span style="color: #38bdf8; font-weight: bold;">PORT     STATE SERVICE    VERSION</span>
8080/tcp <span style="color: #22c55e;">open</span>  http-proxy LFL Enterprise API (Zero-Trust Shield Enforced)

<span style="color: #38bdf8;">[DEFENSIVE TAKEAWAY]: 8080 alternatif web portudur. Üretim ortamında Kestrel güvenlik middleware'i ve JWT Bearer doğrulaması olmadan dış dünyaya açılmamalıdır.</span>
                `;
            }

            // 6. NMAP -F
            if (lower.includes('nmap') && lower.includes('-f') && !lower.includes('-p')) {
                return `
Starting Nmap 7.94 ( https://nmap.org ) at 2026-11-08 00:02 UTC
Nmap scan report for 192.168.1.1 (Gateway Router)
Host is up (0.0012s latency).
Not shown: 97 closed tcp ports (reset)

<span style="color: #38bdf8; font-weight: bold;">PORT    STATE SERVICE</span>
53/tcp  <span style="color: #22c55e;">open</span>  domain (DNS Resolver)
80/tcp  <span style="color: #22c55e;">open</span>  http (Web Management UI)
443/tcp <span style="color: #22c55e;">open</span>  https (TLS Management)

Nmap done: 1 IP address (1 host up) scanned in 0.28 seconds
<span style="color: #38bdf8;">[DEFENSIVE TAKEAWAY]: -F parametresi en yaygın 100 portu saniyeler içinde tarayarak hızlı ilk keşif yapılmasını sağlar.</span>
                `;
            }

            // 7. NMAP -SN
            if (lower.includes('nmap') && lower.includes('-sn')) {
                return `
Starting Nmap 7.94 ( https://nmap.org ) at 2026-11-08 00:03 UTC
Nmap scan report for 192.168.1.1 (Gateway / Modem)
Host is up (0.00084s latency). MAC Address: 00:1A:2B:3C:4D:5E (Cisco-Linksys)
Nmap scan report for 192.168.1.17 (Workstation)
Host is up (0.00021s latency). MAC Address: 34:97:F6:11:22:33 (Dell Inc.)
Nmap scan report for 192.168.1.22 (LFL Security Node)
Host is up (0.00009s latency). MAC Address: 52:54:00:12:34:56 (QEMU Virtual NIC)
Nmap scan report for 192.168.1.105 (Mobile Client)
Host is up (0.014s latency). MAC Address: 88:66:5A:99:88:77 (Apple Inc.)

Nmap done: 256 IP addresses (4 hosts up) scanned in 0.89 seconds
<span style="color: #38bdf8;">[DEFENSIVE TAKEAWAY]: Port taraması yapmadan yalnızca ICMP ping ile yerel alt ağdaki aktif cihazları haritalandırır.</span>
                `;
            }

            // 8. NMAP -O
            if (lower.includes('nmap') && lower.includes('-o')) {
                return `
Starting Nmap 7.94 ( https://nmap.org ) at 2026-11-08 00:04 UTC
Nmap scan report for 192.168.1.17
Host is up (0.00034s latency).
Device type: general purpose
Running: <span style="color: #22c55e; font-weight: bold;">Microsoft Windows 11 / Server 2022 (98%)</span>
OS CPE: cpe:/o:microsoft:windows_11 cpe:/o:microsoft:windows_10
OS details: Microsoft Windows 11 23H2 (Build 22631)
Network Distance: 1 hop
TCP Sequence Prediction: Difficulty=260 (Good luck!)

<span style="color: #38bdf8;">[DEFENSIVE TAKEAWAY]: İşletim sistemi parmak izi çıkarma, TCP/IP yığınındaki TTL ve Window Size tepkilerini inceler. Güvenlik duvarından rastgele TCP ISN üretimi zorunlu tutulmalıdır.</span>
                `;
            }

            // 9. NMAP -PN
            if (lower.includes('nmap') && lower.includes('-pn')) {
                return `
Starting Nmap 7.94 ( https://nmap.org ) at 2026-11-08 00:05 UTC
Host discovery disabled (-Pn). All addresses specified will be assumed to be up.
Nmap scan report for 192.168.1.1
Host is up.
<span style="color: #38bdf8; font-weight: bold;">PORT    STATE SERVICE</span>
80/tcp  <span style="color: #22c55e;">open</span>  http
443/tcp <span style="color: #22c55e;">open</span>  https

<span style="color: #38bdf8;">[DEFENSIVE TAKEAWAY]: Ping (ICMP Echo) yanıtlarını engelleyen güvenlik duvarlarının arkasındaki sunucuları taramak için -Pn kullanılır.</span>
                `;
            }

            // 10. NMAP -SV
            if (lower.includes('nmap') && lower.includes('-sv')) {
                return `
Starting Nmap 7.94 ( https://nmap.org ) at 2026-11-08 00:06 UTC
Nmap scan report for 192.168.1.17
<span style="color: #38bdf8; font-weight: bold;">PORT      STATE  SERVICE       VERSION</span>
5000/tcp  <span style="color: #22c55e;">open</span>   http          Kestrel (ASP.NET Core 8.0 - Hardened)
7000/tcp  closed afs3-fileserver
7100/tcp  closed font-service
49152/tcp <span style="color: #22c55e;">open</span>   upnp          Supermicro IPMI / MiniUPnPd 1.9
62078/tcp <span style="color: #22c55e;">open</span>   tcpwrapped    Encrypted Internal RPC

<span style="color: #38bdf8;">[DEFENSIVE TAKEAWAY]: Servis versiyon tespile güncel olmayan veya yama almamış kütüphaneler (CVE) hızla tespit edilir.</span>
                `;
            }

            // 11. GOBUSTER
            if (lower.includes('gobuster')) {
                return `
===============================================================
Gobuster v3.6
by OJ Reeves (@TheColonial) & Christian Mehlmauer (@firefart)
===============================================================
[+] Url:                     http://192.168.1.1
[+] Method:                  GET
[+] Threads:                 10
[+] Wordlist:                /usr/share/wordlists/dirb/common.txt
[+] Negative Status codes:   404
===============================================================
Starting gobuster in directory enumeration mode
===============================================================
<span style="color: #ef4444;">/admin                (Status: 403) [Size: 154]</span>
<span style="color: #22c55e;">/api                  (Status: 200) [Size: 1420]</span>
<span style="color: #22c55e;">/login                (Status: 200) [Size: 840]</span>
<span style="color: #22c55e;">/dashboard            (Status: 200) [Size: 3100]</span>
<span style="color: #38bdf8;">/robots.txt           (Status: 200) [Size: 64]</span>
===============================================================
Finished. 4,614 requests dispatched in 1.42s.
<span style="color: #38bdf8;">[DEFENSIVE TAKEAWAY]: /admin dizini 403 Forbidden ile kilitlenmiştir. Kurumsal yapılarda admin arayüzleri internete açık tutulmamalıdır.</span>
                `;
            }

            // 12. FFUF
            if (lower.includes('ffuf')) {
                return `
        /'___\\  /'___\\           /\\_ \\       
       /\\ \\__/ /\\ \\__/  __  __  \\//\\ \\      
       \\ \\ ,__\\\\ \\ ,__\\/\\ \\/\\ \\   \\ \\ \\     
        \\ \\ \\_/ \\ \\ \\_/\\ \\ \\_\\ \\   \\_\\ \\_   
         \\/_/    \\/_/   \\/_/____/  /\\____\\  
                                   \\/____/  
v2.1.0-dev
:: Method           : GET
:: URL              : http://127.0.0.1/FUZZ
:: Wordlist         : /usr/share/wordlists/dirb/common.txt
:: Threads          : 40
________________________________________________

[Status: <span style="color: #22c55e;">200</span>, Size: 1840, Words: 210] :: <span style="color: #38bdf8;">/api/blog</span>
[Status: <span style="color: #eab308;">301</span>, Size: 120, Words: 15]   :: <span style="color: #38bdf8;">/login</span> -&gt; /login/
[Status: <span style="color: #ef4444;">403</span>, Size: 245, Words: 28]   :: <span style="color: #38bdf8;">/admin</span>
[Status: <span style="color: #22c55e;">200</span>, Size: 84, Words: 6]     :: <span style="color: #38bdf8;">/robots.txt</span>

:: Progress: [4614/4614] :: 3845 req/sec :: Duration: [0:00:01] :: Errors: 0 ::
<span style="color: #38bdf8;">[DEFENSIVE TAKEAWAY]: FFuf 3800+ req/sec hızına ulaşır. Kurumsal sunucularda WAF hız sınırlama (Rate Limiting) devreye girerek tek IP'den gelen anormallikleri bloke eder.</span>
                `;
            }

            // 13. HPING3 SYN PROBE
            if (lower.includes('hping3') && lower.includes('-s')) {
                return `
HPING 192.168.1.1 (eth0 192.168.1.1): S set, 40 headers + 0 data bytes
len=46 ip=192.168.1.1 ttl=64 DF id=0 sport=80 <span style="color: #22c55e; font-weight: bold;">flags=SA</span> seq=0 win=65535 rtt=1.4 ms

--- 192.168.1.1 hping statistic ---
1 packets transmitted, 1 packets received, 0% packet loss
round-trip min/avg/max = 1.4/1.4/1.4 ms
<span style="color: #22c55e; font-weight: bold;">[SONUÇ]: flags=SA (SYN-ACK) bayrağı döndü! Port 80 açık ve TCP el sıkışmasına hazır.</span>
                `;
            }

            // 14. HPING3 ACK FIREWALL
            if (lower.includes('hping3') && lower.includes('-a')) {
                return `
HPING 192.168.1.1 (eth0 192.168.1.1): A set, 40 headers + 0 data bytes
len=46 ip=192.168.1.1 ttl=64 DF id=0 sport=80 <span style="color: #ef4444; font-weight: bold;">flags=R</span> seq=0 win=0 rtt=0.9 ms

--- 192.168.1.1 hping statistic ---
1 packets transmitted, 1 packets received, 0% packet loss
<span style="color: #38bdf8; font-weight: bold;">[SONUÇ]: flags=R (RST) bayrağı döndü! Güvenlik Duvarı durum takiplidir (Stateful). Önceden başlatılmamış sahte ACK paketi anında reddedildi.</span>
                `;
            }

            // 15. HPING3 FLOOD
            if (lower.includes('hping3') && lower.includes('flood')) {
                return `
<div style="background: rgba(239, 68, 68, 0.15); border-left: 3px solid #ef4444; padding: 8px 12px; margin-bottom: 8px;">
  <span style="color: #ef4444; font-weight: bold;">[EĞİTİMCİ SİMÜLASYON // TCK 244 UYARISI]</span>
  <div style="color: #f1f5f9; font-size: 12px; margin-top: 4px;">DDoS ve Flood saldırıları bilişim sistemlerini engelleme/bozma suçudur. Bu platformda yalnızca eğitim amaçlı simüle edilir.</div>
</div>
<span style="color: #94a3b8;">hping3 --udp --flood --rand-source -p 80 [HEDEF_IP]</span>
-------------------------------------------------------------
<span style="color: #22c55e; font-weight: bold;">[SAVUNMA ANALİZİ]: Kurumsal LFL Savunma Mimarisi bu saldırıyı şu şekilde engeller:</span>
  1. <span style="color: #38bdf8;">SYN Cookies:</span> Yarı açık TCP bağlantı tablolarının dolmasını önler.
  2. <span style="color: #38bdf8;">BGP Anycast:</span> Saldırı trafiğini dünya genelindeki 300+ veri merkezine dağıtıp eritir.
  3. <span style="color: #38bdf8;">Rate Limiting:</span> Sahte kaynaklı (spoofed) IP paketlerini ISP seviyesinde filtreler.
<span style="color: #22c55e;">Simülasyon güvenli sandbox ortamında tamamlandı. Hedef sistem %100 ayakta.</span>
                `;
            }

            // 16. BETTERCAP
            if (lower.includes('bettercap')) {
                return `
bettercap v2.32 (built for linux/amd64 with go1.21) [type 'help' for a list of commands]

[00:08:00] [sys.log] [inf] bettercap started on interface lo (127.0.0.1)
[00:08:01] [net.recon] [inf] endpoint discovery started.
[00:08:02] [net.recon] [inf] found 1 active gateway host 127.0.0.1
[00:08:03] [arp.spoof] [inf] ARP spoofing engine initialized (EDUCATIONAL SANDBOX MODE)
[00:08:04] [packet.proxy] [inf] TLS SNI inspection enabled for local development.

<span style="color: #38bdf8;">[DEFENSIVE TAKEAWAY]: Ortadaki Adam (MITM) ve ARP Zehirleme saldırıları, kurumsal ağ anahtarlarında "Dynamic ARP Inspection (DAI)" ve "DHCP Snooping" açılarak engellenir.</span>
                `;
            }

            // 17. HYDRA
            if (lower.includes('hydra')) {
                return `
Hydra v9.5 (c) 2023 by van Hauser / THC & David Maciejak - Please use responsibly
[DATA] max 16 tasks per 1 server, overall 16 tasks, 1 login try (l:1/p:1)
[DATA] attacking http-get://192.168.1.1:80/
[ATTEMPT] target: 192.168.1.1 - login: "admin" - pass: "Sebu132009" - child: 1/16
<span style="color: #ef4444;">[429] TOO MANY REQUESTS: IP 192.168.1.15 exceeded threshold (5 failed attempts).</span>
<span style="color: #22c55e;">[LFL SHIELD TRIGGERED]: Account locked for 15 minutes.</span>

1 of 1 target completed, 0 valid password found
<span style="color: #38bdf8;">[DEFENSIVE TAKEAWAY]: Kaba kuvvet (Brute-Force) saldırılarına karşı "Account Lockout" ve "Rate Limiting" kullanılır. 5 hatalı denemede IP askıya alınır.</span>
                `;
            }

            // 18. NIKTO
            if (lower.includes('nikto')) {
                return `
- Nikto v2.5.0
---------------------------------------------------------------------------
+ Target IP:          192.168.1.1
+ Target Hostname:    lfl.defense.local
+ Target Port:        443
---------------------------------------------------------------------------
+ <span style="color: #22c55e;">Server: [REDACTED BY LFL DEFENSE] (Information disclosure prevented)</span>
+ <span style="color: #22c55e;">The anti-clickjacking X-Frame-Options header is present: DENY</span>
+ <span style="color: #22c55e;">The X-Content-Type-Options header is present: nosniff</span>
+ <span style="color: #22c55e;">Strict-Transport-Security (HSTS) is configured with preload directive</span>
+ <span style="color: #22c55e;">Content-Security-Policy (CSP) is active: default-src 'self'</span>
+ No CGI Directories found (mount points checked: 118)
+ 7842 requests: 0 error(s) and 0 critical item(s) reported on remote host
---------------------------------------------------------------------------
<span style="color: #38bdf8;">[DEFENSIVE TAKEAWAY]: Nikto web sunucusundaki güvenlik başlıklarını doğrular. LFL tüm sunucu sürüm numaralarını gizlemiştir.</span>
                `;
            }

            // 19. SQLMAP
            if (lower.includes('sqlmap')) {
                return `
        ___
       __H__
 ___ ___[.]_____ ___ ___  {1.7.11#stable}
|_ -| . ["]     | .'| . |
|___|_  ["]_|_|_|__,|  _|
      |_|V...       |_|   https://sqlmap.org

[*] starting @ 00:10:15 /2026-11-08/
[00:10:15] [INFO] testing connection to the target URL
[00:10:15] [INFO] checking if the target is protected by some kind of WAF/IPS
[00:10:16] [INFO] testing if the target URL content is stable
[00:10:16] [INFO] target URL content is stable
[00:10:16] [INFO] testing if GET parameter 'q' is dynamic
[00:10:17] [INFO] heuristics detected that GET parameter 'q' might not be injectable
[00:10:18] [INFO] testing for SQL injection on GET parameter 'q'
[00:10:18] [INFO] testing 'AND boolean-based blind - WHERE or HAVING clause'
[00:10:19] [INFO] testing 'Generic UNION query (NULL) - 1 to 20 columns'
<span style="color: #22c55e; font-weight: bold;">[CRITICAL] all tested parameters do not appear to be injectable.</span>
[00:10:20] [WARNING] target utilizes Entity Framework Core LINQ Parameterized Queries.
<span style="color: #38bdf8;">[DEFENSIVE TAKEAWAY]: Parametrik sorgular SQL enjeksiyon açıklarını %100 kapatır.</span>
                `;
            }

            // 20. NUCLEI
            if (lower.includes('nuclei')) {
                return `
                     __     _
   ____  __  _______/ /__  (_)
  / __ \\/ / / / ___/ / _ \\/ /
 / / / / /_/ / /__/ /  __/ /
/_/ /_/\\__,_/\\___/_/\\___/_/   v3.2.0

[INF] Loading rules from /root/nuclei-templates... [8,421 templates]
[INF] Targets loaded: 1
[INF] Running scan against http://127.0.0.1 (all protocols)
[INF] [http-missing-security-headers] [http] [info] http://127.0.0.1 [0 missing headers - 100% HARDENED]
[INF] [waf-detect] [http] [info] http://127.0.0.1 [LFL Kestrel Custom Defense]
[INF] [ssl-dns-names] [ssl] [info] 127.0.0.1:443 [*.lfl.defense.local]
[INF] Scan completed in 2.14s. 0 vulnerabilities discovered.
                `;
            }

            // 21. JOHN THE RIPPER
            if (lower.includes('john')) {
                return `
Created directory: /root/.john
Loaded 1 password hash (raw-sha256, Generic SHA-256 [64/64])
Cost 1 (iteration count) is 1 for all loaded hashes
Will run 8 OpenMP threads
Press 'q' or Ctrl-C to abort, almost any other key for status
<span style="color: #22c55e;">lostfromlight    (admin_hash)</span>
1g 0:00:00:00 DONE (2026-11-08 00:11) 50.00g/s 452000p/s 452000c/s 452000C/s
Use the "--show" option to display all of the cracked passwords reliably
Session completed.
<span style="color: #38bdf8;">[DEFENSIVE TAKEAWAY]: Basit şifreler rockyou.txt gibi listelerle saniyeler içinde kırılır. Argon2id / bcrypt gibi tuzlanmış (salted) algoritmalar zorunludur.</span>
                `;
            }

            // 22. HASHCAT
            if (lower.includes('hashcat')) {
                return `
hashcat (v6.2.6) starting...

OpenCL API (OpenCL 3.0 CUDA 12.2.140) - Platform #1 [NVIDIA Corporation]
========================================================================
* Device #1: NVIDIA GeForce RTX 4090, 24150/24564 MB, 128MCU

Hash.Mode........: 1000 (NTLM)
Speed.#1.........: 98,420 MH/s (98.42 GH/s)
Status...........: Cracked
<span style="color: #22c55e;">e4f8c1... : P@ssw0rd2026!</span>
<span style="color: #38bdf8;">[DEFENSIVE TAKEAWAY]: Modern GPU'lar saniyede 100 milyar NTLM denemesi yapabilir. Bu nedenle minimum 14 karakterli karmaşık şifreler şarttır.</span>
                `;
            }

            // 23. SEARCHSPLOIT
            if (lower.includes('searchsploit')) {
                return `
-------------------------------------------------------------------------------------------------------- ---------------------------------
 Exploit Title                                                                                          |  Path
-------------------------------------------------------------------------------------------------------- ---------------------------------
 Apache 2.4.49 - Path Traversal & Remote Code Execution (RCE)                                            | multiple/remote/50383.sh
 Apache 2.4.49/2.4.50 - Remote Code Execution (RCE) (PoC)                                                | php/remote/50538.py
-------------------------------------------------------------------------------------------------------- ---------------------------------
Shellcodes: No Results
Papers: No Results
<span style="color: #38bdf8;">[DEFENSIVE TAKEAWAY]: Searchsploit yerel Exploit-DB veritabanında CVE araması yapar. Sistemleri her zaman en son güvenlik yamalarında tutun.</span>
                `;
            }

            // 24. MSFCONSOLE
            if (lower.includes('msfconsole')) {
                return `
<span style="color: #38bdf8;">
       =[ metasploit v6.3.42-dev                          ]
+ -- --=[ 2382 exploits - 1234 auxiliary - 418 post       ]
+ -- --=[ 1391 payloads - 46 encoders - 11 nops           ]
+ -- --=[ Free Metasploit Pro trial: http://r-f.lc/trymsp ]
</span>
msf6 &gt; <span style="color: #22c55e;">use exploit/multi/handler</span>
msf6 exploit(multi/handler) &gt; <span style="color: #94a3b8;">[EDUCATIONAL SANDBOX ACTIVE - SESSIONS CONFINED]</span>
                `;
            }

            // 25. NETCAT / NC
            if (lower.includes('nc ') || lower === 'nc') {
                return `
<span style="color: #22c55e;">listening on [any] 4444 ...</span>
connect to [127.0.0.1] from (UNKNOWN) [127.0.0.1] 51234
<span style="color: #38bdf8;">Linux lfl-core 6.8.11 #1 SMP PREEMPT x86_64</span>
<span style="color: #22c55e;">Sunny@SUNNY:~$ id</span>
uid=1000(Sunny) gid=1000(Sunny) groups=1000(Sunny),27(sudo)
                `;
            }

            // 26. TCPDUMP
            if (lower.includes('tcpdump')) {
                return `
tcpdump: verbose output suppressed, use -v[v]... for full protocol decode
listening on eth0, link-type EN10MB (Ethernet), snapshot length 262144 bytes
00:12:01.402 IP 192.168.1.17.51234 > 127.0.0.1.5000: Flags [S], seq 1849201, win 65535, options [mss 1460,nop,wscale 8]
00:12:01.402 IP 127.0.0.1.5000 > 192.168.1.17.51234: Flags [S.], seq 491204, ack 1849202, win 65535, options [mss 1460]
00:12:01.403 IP 192.168.1.17.51234 > 127.0.0.1.5000: Flags [.], ack 1, win 512
3 packets captured, 3 packets received by filter, 0 packets dropped by kernel
                `;
            }

            // 27. ARPSPOOF / RESPONDER
            if (lower.includes('arpspoof') || lower.includes('responder')) {
                return `
<span style="color: #eab308; font-weight: bold;">[+] [Poisoning LLMNR/NBT-NS/mDNS]</span>
[+] Responder v3.1.4.0 is listening for events on interface eth0
[+] Listening for NBT-NS, LLMNR, MDNS requests...
<span style="color: #22c55e;">[LLMNR] Poisoned answer sent to 192.168.1.17 for name FILESERVER</span>
<span style="color: #38bdf8;">[DEFENSIVE TAKEAWAY]: Ağınızda LLMNR ve NBT-NS protokollerini GPO (Group Policy) üzerinden tamamen kapatın!</span>
                `;
            }

            // 28. CHISEL / SOCAT
            if (lower.includes('chisel') || lower.includes('socat')) {
                return `
2026/11/08 00:13:00 server: Reverse tunnelling enabled
2026/11/08 00:13:00 server: Fingerprint 8a:12:bf:44:9c:...
2026/11/08 00:13:00 server: Listening on http://0.0.0.0:8000
2026/11/08 00:13:02 server: session#1: client (127.0.0.1:52134) connected
<span style="color: #22c55e;">2026/11/08 00:13:02 server: session#1: Reverse tunnel socks active on 1080</span>
                `;
            }

            // 29. WHOIS LOOKUP
            if (lower.startsWith('whois')) {
                const parts = rawCmd.trim().split(/\s+/);
                const targetDomain = parts.length > 1 ? parts[1].replace(/https?:\/\//i, '').split('/')[0] : 'lostfromlight.com';
                return `
<span style="color: #38bdf8; font-weight: bold;">[WHOIS QUERY // LFL INTELLIGENCE]</span>
Domain Name: ${escapeHtml(targetDomain.toUpperCase())}
Registry Domain ID: 2981048122_DOMAIN_COM-VRSN
Registrar WHOIS Server: whois.cloudflare.com
Registrar URL: https://www.cloudflare.com
Updated Date: 2026-11-01T04:12:00Z
Creation Date: 2024-05-18T10:20:00Z
Registry Expiry Date: 2028-05-18T10:20:00Z
Registrar: Cloudflare, Inc.
Registrar IANA ID: 1910
Reseller: LFL Cyber Defense Systems
Domain Status: clientTransferProhibited https://icann.org/epp#clientTransferProhibited
Name Server: NS1.LOSTFROMLIGHT.COM (192.168.1.10)
Name Server: NS2.LOSTFROMLIGHT.COM (192.168.1.11)
DNSSEC: signedDelegation
<span style="color: #22c55e;">[✔] WHOIS sorgusu tamamlandı. Alan adı Cloudflare ve LFL zırhı ile korunmaktadır.</span>
<span style="color: #38bdf8;">[DEFENSIVE TAKEAWAY]:</span> <span style="color: #cbd5e1;">Whois sorgusu hedefin DNS sunucularını ve servis sağlayıcısını açığa çıkarır. Kurumsal sistemlerde WHOIS Privacy aktif edilmelidir.</span>
                `;
            }

            // 30. DIG / NSLOOKUP
            if (lower.startsWith('dig') || lower.startsWith('nslookup')) {
                const parts = rawCmd.trim().split(/\s+/);
                const targetDomain = parts.length > 1 ? parts[1].replace(/https?:\/\//i, '').split('/')[0] : 'lostfromlight.com';
                return `
; &lt;&lt;&gt;&gt; DiG 9.18.28-1-Debian &lt;&lt;&gt;&gt; ${escapeHtml(targetDomain)}
;; global options: +cmd
;; Got answer:
;; -&gt;&gt;HEADER&lt;&lt;- opcode: QUERY, status: NOERROR, id: 48120
;; flags: qr rd ra; QUERY: 1, ANSWER: 2, AUTHORITY: 2, ADDITIONAL: 1

;; QUESTION SECTION:
;${escapeHtml(targetDomain)}.			IN	A

;; ANSWER SECTION:
${escapeHtml(targetDomain)}.		300	IN	A	104.21.44.18
${escapeHtml(targetDomain)}.		300	IN	A	172.67.182.91

;; AUTHORITY SECTION:
${escapeHtml(targetDomain)}.		172800	IN	NS	ns1.lostfromlight.com.
${escapeHtml(targetDomain)}.		172800	IN	NS	ns2.lostfromlight.com.

;; Query time: 12 msec
;; SERVER: 1.1.1.1#53(1.1.1.1) (UDP)
;; WHEN: Sun Nov 08 01:28:00 UTC 2026
;; MSG SIZE  rcvd: 124
<span style="color: #22c55e;">[✔] DNS çözümlemesi başarılı: Hedef A ve NS kayıtları listelendi.</span>
                `;
            }

            // 31. CURL
            if (lower.includes('curl')) {
                return `
* Connected to 127.0.0.1 (127.0.0.1) port 443 (#0)
* ALPN: offers h2,http/1.1
* TLSv1.3 (OUT), TLS handshake, Client hello (1):
* TLSv1.3 (IN), TLS handshake, Server hello (2):
* TLSv1.3 (IN), TLS handshake, [Certificate verification successful]
&gt; GET / HTTP/1.1
&gt; Host: lostfromlight.com
&gt; User-Agent: curl/8.5.0
&gt; Accept: */*
&lt; HTTP/1.1 200 OK
<span style="color: #22c55e;">&lt; Strict-Transport-Security: max-age=31536000; includeSubDomains; preload</span>
<span style="color: #22c55e;">&lt; X-Frame-Options: DENY</span>
<span style="color: #22c55e;">&lt; X-Content-Type-Options: nosniff</span>
<span style="color: #22c55e;">&lt; Content-Security-Policy: default-src 'self'</span>
<span style="color: #22c55e;">&lt; X-LFL-Shield: ACTIVE [Zero-Trust Defense]</span>
<span style="color: #94a3b8;">&lt; Server: [REDACTED BY LFL DEFENSE]</span>
                `;
            }

            // 30. WHOAMI / ID / UNAME / SYSADMIN
            if (lower === 'whoami') {
                return `<span style="color: #22c55e;">Sunny</span>`;
            }
            if (lower === 'id') {
                return `uid=1000(Sunny) gid=1000(Sunny) groups=1000(Sunny),4(adm),24(cdrom),27(sudo),30(dip),46(plugdev),122(kvm)`;
            }
            if (lower.startsWith('uname')) {
                return `Linux SUNNY 6.8.11-kali-amd64 #1 SMP PREEMPT_DYNAMIC Kali 6.8.11-1kali1 (2026-11-08) x86_64 GNU/Linux`;
            }
            if (lower === 'pwd') {
                return `/home/Sunny`;
            }
            if (lower.startsWith('ls')) {
                return `
<span style="color: #38bdf8;">Desktop</span>   <span style="color: #38bdf8;">Documents</span>   <span style="color: #38bdf8;">Downloads</span>   <span style="color: #38bdf8;">wordlists</span>
<span style="color: #22c55e;">Audit-Headers.ps1</span>   <span style="color: #22c55e;">Port-Scan.ps1</span>   <span style="color: #94a3b8;">common.txt</span>   <span style="color: #94a3b8;">targets.txt</span>
                `;
            }
            if (lower.includes('os-release')) {
                return `
PRETTY_NAME="Kali GNU/Linux Rolling"
NAME="Kali GNU/Linux"
VERSION_ID="2026.1"
VERSION="2026.1"
ID=kali
ID_LIKE=debian
HOME_URL="https://www.kali.org/"
SUPPORT_URL="https://forums.kali.org/"
BUG_REPORT_URL="https://bugs.kali.org/"
                `;
            }
            if (lower.includes('/etc/passwd')) {
                return `
root:x:0:0:root:/root:/bin/bash
daemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin
bin:x:2:2:bin:/bin:/usr/sbin/nologin
Sunny:x:1000:1000:Sunny,,,:/home/Sunny:/bin/bash
lostfromlight:x:1001:1001:Operator,,,:/home/lostfromlight:/bin/bash
                `;
            }
            if (lower.includes('/etc/shadow')) {
                return `<span style="color: #ef4444;">cat: /etc/shadow: İzin reddedildi (Permission denied). root yetkisi gereklidir.</span>`;
            }
            if (lower.includes('netstat') || lower.includes('ss -')) {
                return `
State      Recv-Q Send-Q Local Address:Port  Peer Address:PortProcess
LISTEN     0      511    0.0.0.0:80          0.0.0.0:*    users:(("kestrel",pid=1420,fd=7))
LISTEN     0      511    0.0.0.0:443         0.0.0.0:*    users:(("kestrel",pid=1420,fd=8))
LISTEN     0      128    127.0.0.1:5000      0.0.0.0:*    users:(("dotnet",pid=1502,fd=12))
LISTEN     0      128    127.0.0.1:8080      0.0.0.0:*    users:(("gateway",pid=1890,fd=4))
                `;
            }
            if (lower.includes('ip a') || lower.includes('ifconfig')) {
                return `
1: lo: &lt;LOOPBACK,UP,LOWER_UP&gt; mtu 65536 qdisc noqueue state UNKNOWN group default qlen 1000
    inet 127.0.0.1/8 scope host lo
2: eth0: &lt;BROADCAST,MULTICAST,UP,LOWER_UP&gt; mtu 1500 qdisc fq_codel state UP group default qlen 1000
    inet 192.168.1.22/24 brd 192.168.1.255 scope global dynamic eth0
    inet6 fe80::5054:ff:fe12:3456/64 scope link
                `;
            }
            if (lower.startsWith('ps')) {
                return `
USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND
root         1  0.0  0.1 168204 11204 ?        Ss   00:00   0:01 /sbin/init
Sunny     1420  0.2  1.8 842100 89204 ?        Sl   00:01   0:08 /usr/bin/dotnet CyberBlog.dll
Sunny     2401  0.0  0.3  24520  6820 pts/0    Ss   00:05   0:00 -bash
                `;
            }
            if (lower === 'date') {
                return new Date().toUTCString();
            }
            if (lower === 'uptime') {
                return ` 00:14:12 up 2 days, 14:02,  2 users,  load average: 0.12, 0.08, 0.05`;
            }

            // 1. Check Academy Rooms Expected Commands (Red, Blue, Purple)
            if (window.ACADEMY_ROOMS && Array.isArray(window.ACADEMY_ROOMS)) {
                const norm = (s) => (s || '').replace(/["']/g, "'").replace(/^sudo\s+/, '').replace(/^powershell\s+/, '').replace(/^\.\//, '').replace(/;+\s*$/, '').replace(/\s+/g, ' ').trim().toLowerCase();
                const enteredNorm = norm(rawCmd);
                const matchedRoom = window.ACADEMY_ROOMS.find(r => norm(r.expectedCommand) === enteredNorm);
                if (matchedRoom) {
                    return '<div style="font-family: var(--font-mono); font-size: 11.5px; line-height: 1.5; margin: 4px 0;">' +
                        '<div style="color: #10b981; font-weight: 800; margin-bottom: 6px;">[🎯 SİBER AKADEMİ GÖREVİ BAŞARILI // ODA: ' + escapeHtml(matchedRoom.id.toUpperCase()) + ' - ' + escapeHtml(matchedRoom.title) + ']</div>' +
                        '<pre style="background: rgba(0, 0, 0, 0.55); border-left: 3px solid #10b981; padding: 10px 14px; border-radius: 4px; color: #f1f5f9; white-space: pre-wrap; font-family: var(--font-mono);">' + escapeHtml(matchedRoom.terminalSuccessOutput) + '</pre>' +
                        '<div style="color: #38bdf8; font-size: 11px; margin-top: 6px;">[★ BAYRAK]: <code style="color: #facc15; font-weight: bold;">' + escapeHtml(matchedRoom.flag) + '</code></div>' +
                        '</div>';
                }
            }

            // 2. Extra Native Utilities
            if (lower.startsWith('ping ')) {
                const host = rawCmd.split(' ')[1] || '127.0.0.1';
                return 'PING ' + escapeHtml(host) + ' (' + escapeHtml(host) + ') 56(84) bytes of data.\n64 bytes from ' + escapeHtml(host) + ': icmp_seq=1 ttl=64 time=0.038 ms\n64 bytes from ' + escapeHtml(host) + ': icmp_seq=2 ttl=64 time=0.042 ms\n64 bytes from ' + escapeHtml(host) + ': icmp_seq=3 ttl=64 time=0.035 ms\n--- ' + escapeHtml(host) + ' ping statistics ---\n3 packets transmitted, 3 received, 0% packet loss, time 2048ms\nrtt min/avg/max/mdev = 0.035/0.038/0.042/0.003 ms';
            }
            if (lower.startsWith('curl ') || lower.startsWith('curl.exe ')) {
                return 'HTTP/1.1 200 OK\nDate: ' + new Date().toUTCString() + '\nServer: Kestrel (LFL-Secured)\nContent-Type: text/html; charset=utf-8\nStrict-Transport-Security: max-age=31536000; includeSubDomains\nX-Content-Type-Options: nosniff\nX-Frame-Options: DENY\nContent-Length: 10420';
            }
            if (lower.startsWith('echo ')) {
                return escapeHtml(rawCmd.substring(5));
            }
            if (lower === 'cat /etc/passwd') {
                return 'root:x:0:0:root:/root:/bin/bash\ndaemon:x:1:1:daemon:/usr/sbin:/usr/sbin/nologin\nkali:x:1000:1000:Kali Linux,,,:/home/kali:/bin/bash\nsshd:x:110:65534::/run/sshd:/usr/sbin/nologin\nwww-data:x:33:33:www-data:/var/www:/usr/sbin/nologin';
            }
            if (lower === 'cat /etc/os-release') {
                return 'PRETTY_NAME="Kali GNU/Linux Rolling"\nNAME="Kali GNU/Linux"\nVERSION_ID="2026.1"\nVERSION="2026.1"\nID=kali\nID_LIKE=debian';
            }
            if (lower === 'env') {
                return 'USER=kali\nHOME=/home/kali\nSHELL=/bin/bash\nTERM=xterm-256color\nPATH=/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin';
            }
            // Smart Academy 142+ Command Simulation Fallback
            if (window.ACADEMY_COMMANDS && Array.isArray(window.ACADEMY_COMMANDS)) {
                const cleanLower = lower.replace(/^sudo\s+/, '').replace(/^powershell\s+/, '').replace(/^\.\//, '').replace(/^\\/, '').trim();
                const userFirstWord = cleanLower.split(' ')[0] || '';

                const found = window.ACADEMY_COMMANDS.find(c => {
                    const cClean = c.cmd.toLowerCase().trim().replace(/^sudo\s+/, '').replace(/^powershell\s+/, '').replace(/^\.\//, '').replace(/^\\/, '').trim();
                    const cFirstWord = cClean.split(' ')[0] || '';

                    // 1. Exact match (with or without sudo/powershell)
                    if (cClean === cleanLower || c.cmd.toLowerCase().trim() === lower) return true;

                    // 2. Exact match of primary command binary
                    if (userFirstWord && (userFirstWord === cFirstWord)) return true;

                    // 3. Substring match
                    if (cleanLower.includes(cClean) || cClean.includes(cleanLower)) return true;

                    return false;
                });

                if (found) {
                    return `
<div style="font-family: var(--font-mono); font-size: 11.5px; line-height: 1.5; margin: 4px 0;">
    <div style="color: #38bdf8; font-weight: 700;">[+] EXEC: <code style="color: #ffffff; font-weight: 800;">${escapeHtml(rawCmd)}</code></div>
    <div style="color: #64748b; font-size: 10.5px; margin-bottom: 6px;">Kategori: <span style="color: #a5f3fc;">${escapeHtml(found.categoryName)}</span> &bull; <span style="color: #22c55e;">[${escapeHtml(found.badge)}]</span> &bull; Durum: 200 OK &bull; PID: ${Math.floor(1000 + Math.random() * 9000)}</div>
    <div style="background: rgba(0, 0, 0, 0.45); border-left: 3px solid var(--cyan); padding: 8px 12px; border-radius: 4px; margin: 6px 0; color: #e2e8f0;">
        <div style="color: #38bdf8; font-weight: bold; margin-bottom: 4px;">▶ ${escapeHtml(found.title)}</div>
        <div style="color: #cbd5e1; font-size: 11.5px;">${escapeHtml(found.desc)}</div>
    </div>
    <div style="color: #10b981; font-size: 11px;">[✔] Araç simülasyonu başarıyla tamamlandı. Detaylar ve kullanım parametreleri için Siber Akademi modülünü inceleyebilirsiniz.</div>
</div>
                    `;
                }
            }

            // Generic fallback
            return `
<span style="color: #fca5a5;">bash: ${escapeHtml(rawCmd)}: komut simülasyon labında bulunamadı.</span>
<span style="color: #94a3b8;">Kullanılabilir 140+ komutu görmek için <code style="color: #22c55e;">help</code> yazın veya Siber Akademi sayfasındaki komutlara tıklayın.</span>
            `;
        }

        function getTerminalAllCommands() {
            const defaults = [
                'help', 'clear', 'whoami', 'id', 'pwd', 'ls -la', 'uname -a', 'ip a', 'ps aux',
                'uptime', 'date', 'whois lostfromlight.com', 'dig lostfromlight.com', 'curl.exe -I https://lostfromlight.com'
            ];
            const academyList = (window.ACADEMY_COMMANDS || []).map(c => c.cmd);
            return Array.from(new Set([...defaults, ...academyList]));
        }

        let paletteCursor = -1;
        let tabMatchIndex = 0;
        let lastTabPrefix = null;

        // Keydown handling for input (Enter, Up, Down, Tab)
        input.addEventListener('keydown', (e) => {
            const activeTab = getActiveTab();
            const allCmds = getTerminalAllCommands();

            if (e.key === 'Enter') {
                e.preventDefault();
                const cmd = input.value;
                input.value = '';
                paletteCursor = -1;
                tabMatchIndex = 0;
                lastTabPrefix = null;
                executeCommand(cmd);
            } else if (e.key === 'ArrowUp') {
                e.preventDefault();
                tabMatchIndex = 0;
                lastTabPrefix = null;
                if (activeTab.cmdHistory && activeTab.cmdHistory.length > 0) {
                    if (activeTab.historyCursor > 0) activeTab.historyCursor--;
                    input.value = activeTab.cmdHistory[activeTab.historyCursor] || '';
                } else {
                    // History is empty: cycle through all 142+ academy commands!
                    if (paletteCursor > 0) {
                        paletteCursor--;
                    } else {
                        paletteCursor = allCmds.length - 1;
                    }
                    input.value = allCmds[paletteCursor] || '';
                }
            } else if (e.key === 'ArrowDown') {
                e.preventDefault();
                tabMatchIndex = 0;
                lastTabPrefix = null;
                if (activeTab.cmdHistory && activeTab.cmdHistory.length > 0) {
                    if (activeTab.historyCursor < activeTab.cmdHistory.length - 1) {
                        activeTab.historyCursor++;
                        input.value = activeTab.cmdHistory[activeTab.historyCursor] || '';
                    } else {
                        activeTab.historyCursor = activeTab.cmdHistory.length;
                        input.value = '';
                    }
                } else {
                    // History is empty: cycle through all 142+ academy commands!
                    if (paletteCursor < allCmds.length - 1) {
                        paletteCursor++;
                    } else {
                        paletteCursor = 0;
                    }
                    input.value = allCmds[paletteCursor] || '';
                }
            } else if (e.key === 'Tab') {
                e.preventDefault();
                const current = input.value.trim().toLowerCase();
                let matches = [];

                if (!current) {
                    matches = allCmds;
                } else {
                    const prefixMatches = allCmds.filter(c => c.toLowerCase().startsWith(current));
                    const containsMatches = allCmds.filter(c => !c.toLowerCase().startsWith(current) && c.toLowerCase().includes(current));
                    matches = [...prefixMatches, ...containsMatches];
                }

                if (matches.length > 0) {
                    if (lastTabPrefix === current) {
                        tabMatchIndex = (tabMatchIndex + 1) % matches.length;
                    } else {
                        tabMatchIndex = 0;
                        lastTabPrefix = current;
                    }
                    input.value = matches[tabMatchIndex];
                }
            } else {
                lastTabPrefix = null;
            }
        });

        // Initialize tabs UI
        renderTabs();
    }

    // ==========================================
    // SİBER AKADEMİ 15 BÖLÜM EĞİTİM PLANI ENGINE
    // ==========================================
    function bindAcademyCurriculum() {
        const tabsBar = document.getElementById('curriculum-tabs-bar');
        const container = document.getElementById('curriculum-chapters-container');
        if (!tabsBar || !container) return;

        window.activateAcademyTeamTab = function (team) {
            const tabs = tabsBar.querySelectorAll('.curriculum-team-btn');
            tabs.forEach(t => t.classList.remove('active'));

            const targetTab = tabsBar.querySelector(`[data-curriculum-team="${team}"]`) || tabsBar.querySelector('[data-curriculum-team="all"]');
            if (targetTab) targetTab.classList.add('active');

            const cards = container.querySelectorAll('.curriculum-chapter-card');
            cards.forEach(card => {
                const scope = card.dataset.teamScope;
                if (team === 'all' || scope === team) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        };

        // Tab click delegation
        tabsBar.addEventListener('click', (e) => {
            const btn = e.target.closest('.curriculum-team-btn');
            if (!btn) return;
            const team = btn.dataset.curriculumTeam || 'all';
            window.activateAcademyTeamTab(team);
        });

        // Jump buttons delegation inside curriculum cards
        container.addEventListener('click', (e) => {
            const btnJumpCat = e.target.closest('.btn-jump-commands-cat');
            if (btnJumpCat) {
                const cat = btnJumpCat.dataset.cat || 'all';
                navigateToPage('page-commands');
                const pill = document.querySelector(`#academy-category-pills [data-cat="${cat}"]`);
                if (pill) pill.click();
                return;
            }

            const btnJumpCmd = e.target.closest('.btn-jump-terminal-cmd');
            if (btnJumpCmd) {
                const cmd = btnJumpCmd.dataset.cmd || '';
                navigateToPage('page-terminal');
                if (cmd && typeof window.runKaliCommand === 'function') {
                    window.runKaliCommand(cmd);
                }
            }
        });

        // Initialize default tab: red team active
        window.activateAcademyTeamTab('red');
    }

    // ==========================================
    // SİBER AKADEMİ 140+ COMMANDS ENGINE & FILTER
    // ==========================================
    function bindAcademyCheatsheet() {
        const container = document.getElementById('academy-commands-container');
        const searchInput = document.getElementById('academy-cmd-search');
        const pillContainer = document.getElementById('academy-category-pills');
        const countBadge = document.getElementById('academy-count-badge');
        const btnOpenTerminal = document.getElementById('btn-open-terminal-from-academy');

        if (btnOpenTerminal) {
            btnOpenTerminal.addEventListener('click', () => navigateToPage('page-terminal'));
        }

        let activeCat = 'all';

        function renderAcademyCommands(category, query) {
            if (!container) return;
            const commands = window.ACADEMY_COMMANDS || [];
            const q = (query || '').toLowerCase().trim();

            const filtered = commands.filter(item => {
                const matchesCat = category === 'all' || item.category === category;
                const matchesQuery = !q ||
                    item.title.toLowerCase().includes(q) ||
                    item.desc.toLowerCase().includes(q) ||
                    item.cmd.toLowerCase().includes(q) ||
                    item.badge.toLowerCase().includes(q) ||
                    item.categoryName.toLowerCase().includes(q);
                return matchesCat && matchesQuery;
            });

            if (countBadge) {
                countBadge.textContent = `${filtered.length} / ${commands.length} KOMUT LİSTELENDİ`;
            }

            if (filtered.length === 0) {
                container.innerHTML = `
                    <div style="text-align: center; padding: 40px; background: var(--bg-card); border-radius: var(--radius-md); border: 1px dashed var(--border);">
                        <p style="color: var(--text-muted); font-size: 13.5px;">"${escapeHtml(query)}" aramasına uygun komut bulunamadı.</p>
                        <button class="btn-ghost-sm" id="btn-reset-academy-search" style="margin-top: 10px;">Filtreleri Temizle</button>
                    </div>
                `;
                const btnReset = document.getElementById('btn-reset-academy-search');
                if (btnReset) {
                    btnReset.addEventListener('click', () => {
                        if (searchInput) searchInput.value = '';
                        if (pillContainer) {
                            pillContainer.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
                            const allPill = pillContainer.querySelector('[data-cat="all"]');
                            if (allPill) allPill.classList.add('active');
                        }
                        activeCat = 'all';
                        renderAcademyCommands('all', '');
                    });
                }
                return;
            }

            container.innerHTML = filtered.map(item => `
                <div class="cheatsheet-card" data-cmd-id="${item.id}">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px; flex-wrap: wrap; gap: 8px;">
                        <strong style="color: #ffffff; font-size: 14px;">${item.id}. ${escapeHtml(item.title)}</strong>
                        <div style="display: flex; gap: 6px; align-items: center;">
                            <span class="badge-soft-cyan" style="font-size: 10px; font-weight: 700;">${escapeHtml(item.categoryName)}</span>
                            <span class="badge-tech">${escapeHtml(item.badge)}</span>
                        </div>
                    </div>
                    <p style="font-size: 12.5px; color: var(--text-secondary); margin-bottom: 8px; line-height: 1.5;">
                        ${escapeHtml(item.desc)}
                    </p>
                    <div class="cmd-code-line">
                        <code>${escapeHtml(item.cmd)}</code>
                        <div class="cmd-actions">
                            <button type="button" class="btn-cmd-copy" data-copy="${escapeHtml(item.cmd)}">📋 Kopyala</button>
                            <button type="button" class="btn-cmd-run" data-run="${escapeHtml(item.cmd)}">⚡ Kali'de Çalıştır</button>
                        </div>
                    </div>
                </div>
            `).join('');
        }

        // Search input event
        if (searchInput) {
            searchInput.addEventListener('input', () => {
                renderAcademyCommands(activeCat, searchInput.value);
            });
        }

        // Category pills click via delegation
        if (pillContainer) {
            pillContainer.addEventListener('click', (e) => {
                const pill = e.target.closest('.filter-pill');
                if (!pill) return;
                pillContainer.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                activeCat = pill.dataset.cat || 'all';
                renderAcademyCommands(activeCat, searchInput ? searchInput.value : '');
            });
        }

        // Delegated click handler on container for copy & run
        if (container) {
            container.addEventListener('click', (e) => {
                const copyBtn = e.target.closest('.btn-cmd-copy');
                if (copyBtn) {
                    e.stopPropagation();
                    const textToCopy = copyBtn.dataset.copy || '';
                    if (!textToCopy) return;

                    navigator.clipboard.writeText(textToCopy).then(() => {
                        const originalText = copyBtn.textContent;
                        copyBtn.textContent = '✔ Kopyalandı!';
                        copyBtn.style.borderColor = 'var(--green)';
                        copyBtn.style.color = 'var(--green)';
                        showToast('success', 'Komut Kopyalandı', `"${textToCopy}" panoya kopyalandı.`);
                        setTimeout(() => {
                            copyBtn.textContent = originalText;
                            copyBtn.style.borderColor = '';
                            copyBtn.style.color = '';
                        }, 1800);
                    }).catch(() => {
                        showToast('error', 'Kopyalama Hatası', 'Panoya kopyalama izni verilmedi.');
                    });
                    return;
                }

                const runBtn = e.target.closest('.btn-cmd-run');
                if (runBtn) {
                    e.stopPropagation();
                    const cmdToRun = runBtn.dataset.run || '';
                    if (!cmdToRun) return;

                    if (typeof window.runKaliCommand === 'function') {
                        window.runKaliCommand(cmdToRun);
                        showToast('info', 'Kali Terminali Devrede', `"${cmdToRun}" terminalde çalıştırıldı.`);
                    }
                }
            });
        }

        // Quick Command Chips Bar on Terminal Page
        document.querySelectorAll('.quick-cmd-btn').forEach(btn => {
            btn.addEventListener('click', () => {
                const cmd = btn.dataset.terminalCmd;
                if (cmd && typeof window.runKaliCommand === 'function') {
                    window.runKaliCommand(cmd);
                }
            });
        });

        // Initial render of all 142 commands
        renderAcademyCommands('all', '');
    }

    // ==========================================
    // AUTHENTICATION & SESSION STORAGE ENGINE
    // ==========================================
    async function restoreSession() {
        const token = localStorage.getItem('cyber_token') || sessionStorage.getItem('cyber_token');
        if (!token) {
            updateAuthUI(null);
            return;
        }

        state.token = token;
        try {
            const data = await api.me();
            if (data && data.user) {
                state.currentUser = data.user;
                updateAuthUI(data.user);
            } else {
                clearSession();
            }
        } catch {
            clearSession();
        }
    }

    function updateAuthUI(user) {
        const zone = document.getElementById('user-auth-zone');
        const adminSection = document.getElementById('nav-section-admin');
        const btnLogs = document.getElementById('nav-btn-logs');

        if (!zone) return;

        if (user) {
            const isAdmin = user.role === 'admin' || user.username.toLowerCase() === 'burak_wyxz';
            zone.innerHTML = `
                <div style="display: flex; align-items: center; gap: 8px;">
                    <div class="user-pill-badge">
                        <span class="pulsing-beacon" style="background: ${isAdmin ? 'var(--red)' : 'var(--green)'};"></span>
                        <span style="font-weight: 700; color: #ffffff;">${escapeHtml(user.username)}</span>
                        <span class="user-role-tag ${isAdmin ? 'admin' : ''}">${isAdmin ? 'YÖNETİCİ' : 'KULLANICI'}</span>
                    </div>
                    <button class="btn-ghost-sm" id="topbar-logout-btn" title="Oturumu Kapat">Çıkış</button>
                </div>
            `;

            const logoutBtn = document.getElementById('topbar-logout-btn');
            if (logoutBtn) logoutBtn.addEventListener('click', clearSession);

            // Show admin visitor logs & admin superpowers if burak_wyxz
            if (adminSection) adminSection.style.display = isAdmin ? 'block' : 'none';
            if (btnLogs) btnLogs.style.display = isAdmin ? 'flex' : 'none';
            const btnBypass = document.getElementById('btn-admin-bypass-ctf');
            if (btnBypass) btnBypass.classList.toggle('hidden', !isAdmin);
        } else {
            zone.innerHTML = `
                <button class="btn-glow-blue btn-sm" id="topbar-login-btn">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/>
                        <polyline points="10 17 15 12 10 7"/>
                        <line x1="15" y1="12" x2="3" y2="12"/>
                    </svg>
                    <span>Giriş</span>
                </button>
            `;

            const loginBtn = document.getElementById('topbar-login-btn');
            if (loginBtn) loginBtn.addEventListener('click', openAuthModal);

            if (adminSection) adminSection.style.display = 'none';
            if (btnLogs) btnLogs.style.display = 'none';
        }

        renderSessionStorageInspector();
    }

    function clearSession() {
        state.token = null;
        state.currentUser = null;
        sessionStorage.removeItem('cyber_token');
        sessionStorage.removeItem('cyber_callsign');
        sessionStorage.removeItem('cyber_role');
        sessionStorage.removeItem('cyber_status');
        sessionStorage.removeItem('cyber_auth_timestamp');
        localStorage.removeItem('cyber_token');
        localStorage.removeItem('cyber_user');
        localStorage.removeItem('cyber_callsign');
        localStorage.removeItem('cyber_role');

        updateAuthUI(null);
        showToast('info', 'Oturum Kapatıldı', 'Session Storage temizlendi.');
        if (state.activePage === 'page-logs') {
            navigateToPage('page-dashboard');
        }
    }

    function bindAuthModal() {
        const modal = document.getElementById('auth-modal');
        const closeBtn = document.getElementById('btn-close-auth-modal');
        const tabSignin = document.getElementById('modal-tab-signin');
        const tabSignup = document.getElementById('modal-tab-signup');
        const form = document.getElementById('auth-modal-form');
        const rowConfirm = document.getElementById('auth-row-confirm');
        const titleEl = document.getElementById('auth-main-title');
        const subEl = document.getElementById('auth-main-subtitle');
        const btnExec = document.getElementById('auth-btn-execute');
        const alertBox = document.getElementById('auth-modal-alert');
        const inpUser = document.getElementById('auth-input-username');
        const inpPass = document.getElementById('auth-input-password');
        const inpConf = document.getElementById('auth-input-confirm');

        let isSignup = false;

        function setMode(signup) {
            isSignup = signup;
            if (alertBox) alertBox.innerHTML = '';
            if (tabSignin) tabSignin.classList.toggle('active', !signup);
            if (tabSignup) tabSignup.classList.toggle('active', signup);
            if (rowConfirm) rowConfirm.classList.toggle('hidden', !signup);

            if (signup) {
                if (titleEl) titleEl.textContent = 'Yeni Operatör Kaydı';
                if (subEl) subEl.textContent = 'Yeni kullanıcı hesabı oluşturun ve Session Storage tokeni edinin';
                if (btnExec) btnExec.textContent = 'Kayıt Ol & Token Al →';
            } else {
                if (titleEl) titleEl.textContent = 'Operatör Kimlik Doğrulama';
                if (subEl) subEl.textContent = 'Güvenli Erişim Ağ Geçidi • JWT Bearer Token Yönetimi';
                if (btnExec) btnExec.textContent = 'Giriş Yap & Session Storage\'a Kaydet →';
            }
        }

        if (tabSignin) tabSignin.addEventListener('click', () => setMode(false));
        if (tabSignup) tabSignup.addEventListener('click', () => setMode(true));
        if (closeBtn && modal) closeBtn.addEventListener('click', () => modal.classList.add('hidden'));

        if (modal) {
            modal.addEventListener('click', (e) => {
                if (e.target === modal) modal.classList.add('hidden');
            });
        }

        if (form) {
            form.addEventListener('submit', async (e) => {
                e.preventDefault();
                const username = inpUser.value.trim();
                const password = inpPass.value;
                const confirm = inpConf ? inpConf.value : '';

                if (isSignup && password !== confirm) {
                    if (alertBox) {
                        alertBox.innerHTML = `<div class="alert-box-danger">Şifreler birbiriyle eşleşmiyor!</div>`;
                    }
                    return;
                }

                if (alertBox) {
                    alertBox.innerHTML = `<div class="alert-box-info">Doğrulanıyor, lütfen bekleyin...</div>`;
                }

                try {
                    const res = isSignup
                        ? await api.register(username, password)
                        : await api.login(username, password);

                    if (res.ok && res.data && res.data.token) {
                        state.token = res.data.token;
                        state.currentUser = res.data.user;

                        // Save directly into window.sessionStorage
                        sessionStorage.setItem('cyber_token', res.data.token);
                        sessionStorage.setItem('cyber_callsign', res.data.user.username);
                        sessionStorage.setItem('cyber_role', res.data.user.role);
                        sessionStorage.setItem('cyber_status', 'AUTHORIZED_BEARER');
                        sessionStorage.setItem('cyber_auth_timestamp', new Date().toISOString());

                        updateAuthUI(res.data.user);
                        modal.classList.add('hidden');
                        form.reset();

                        showToast('success', 'Giriş Başarılı', `Hoş geldiniz ${res.data.user.username}. JWT token Session Storage'a kaydedildi.`);

                        // Telemetry ping
                        pingVisitorTelemetry(state.activePage);
                    } else {
                        const errMsg = res.data?.error || 'Kullanıcı adı veya şifre hatalı.';
                        if (alertBox) {
                            alertBox.innerHTML = `<div class="alert-box-danger">${escapeHtml(errMsg)}</div>`;
                        }
                    }
                } catch (err) {
                    if (alertBox) {
                        alertBox.innerHTML = `<div class="alert-box-danger">Bağlantı hatası oluştu: ${escapeHtml(err.message)}</div>`;
                    }
                }
            });
        }
    }

    function openAuthModal() {
        const modal = document.getElementById('auth-modal');
        if (modal) modal.classList.remove('hidden');
    }

    // ==========================================
    // JWT LAB & SESSION STORAGE INSPECTOR
    // ==========================================
    function renderSessionStorageInspector() {
        const grid = document.getElementById('storage-keys-grid');
        const pill = document.getElementById('storage-status-pill');
        if (!grid) return;

        const keys = [
            'cyber_token',
            'cyber_callsign',
            'cyber_role',
            'cyber_status',
            'cyber_auth_timestamp',
            'cyber_theme'
        ];

        let activeCount = 0;
        grid.innerHTML = keys.map(k => {
            const val = sessionStorage.getItem(k);
            const hasVal = val !== null && val !== undefined && val !== '';
            if (hasVal) activeCount++;

            const displayVal = hasVal
                ? (k === 'cyber_token' ? `${val.substring(0, 32)}... (${val.length} chars)` : val)
                : '<span style="color: var(--text-muted);">(sessionStorage içinde yok)</span>';

            return `
                <div class="storage-key-card ${hasVal ? 'filled' : 'empty'}">
                    <div class="storage-key-name">sessionStorage['${k}']</div>
                    <div class="storage-key-value">${escapeHtml(displayVal)}</div>
                </div>
            `;
        }).join('');

        if (pill) {
            if (activeCount > 0) {
                pill.className = 'storage-status-pill active';
                pill.textContent = `● Session Storage: Aktif (${activeCount} Anahtar)`;
            } else {
                pill.className = 'storage-status-pill empty';
                pill.textContent = '● Session Storage: Boş';
            }
        }
    }

    // ==========================================
    // SİBER ROL & TAKIM TESTİ (RED vs BLUE vs PURPLE)
    // ==========================================
    function bindCyberRoleQuiz() {
        const container = document.getElementById('quiz-main-container');
        const btnRestart = document.getElementById('btn-restart-quiz');
        if (!container) return;

        const quizQuestions = [
            {
                q: "1. Bir otele gittiğinde oda kapısındaki elektronik kartlı kilidi görünce aklından ilk ne geçer?",
                options: [
                    { text: "Bu kart okuyucu acaba manyetik bir hileyle kandırılabilir mi veya kilitte gizli bir açık var mıdır?", team: "red", icon: "" },
                    { text: "Umarım kapı zorlandığında içerideki güvenlik paneline ve resepsiyona anında alarm gidiyordur.", team: "blue", icon: "" },
                    { text: "Otelin genel güvenlik planını merak ederim; yangın çıkarsa veya elektrik kesilirse kapılar ne yapıyor?", team: "purple", icon: "" }
                ]
            },
            {
                q: "2. Arkadaşlarınla kutu oyunu veya strateji oyunu oynarken hangi taktik seni daha çok eğlendirir?",
                options: [
                    { text: "Rakibin hiç beklemediği gizli yollardan arkasına dolanıp sürpriz hamleyle kaleyi düşürmek.", team: "red", icon: "" },
                    { text: "Kendi bölgemi aşılmaz bir kale haline getirip gelen tüm saldırıları tek tek püskürtmek.", team: "blue", icon: "" },
                    { text: "Kimin kime saldıracağını önceden tahmin edip masadaki dengeleri ve ortak kuralları yönetmek.", team: "purple", icon: "" }
                ]
            },
            {
                q: "3. Bir polisiye veya casusluk filminde hangi karakterin yerinde olmak isterdin?",
                options: [
                    { text: "En karmaşık şifreli kasaları çözen ve kimseye görünmeden içeri sızabilen dahi casus.", team: "red", icon: "" },
                    { text: "Olay yerindeki en ufak ayak izini veya parmak izini büyüteçle inceleyip suçluyu yakalayan adli tıp uzmanı.", team: "blue", icon: "" },
                    { text: "Hem suçlunun psikolojisini çözen hem de ekibin operasyonunu yöneten büyük resmi gören başkomiser.", team: "purple", icon: "" }
                ]
            },
            {
                q: "4. Telefonuna 'Tebrikler! 25.000 TL hediye kazandınız, hemen linke tıklayın' mesajı gelse ne yaparsın?",
                options: [
                    { text: "Bu sahte linkin arkasında kimin olduğunu ve insanları nasıl kandırdıklarını merak edip perde arkasını incelerim.", team: "red", icon: "" },
                    { text: "Numarayı anında engeller, mesajı siler ve ailemi bu tür tuzaklara düşmemeleri için hemen uyarırım.", team: "blue", icon: "" },
                    { text: "Bu tür dolandırıcılık yöntemlerini inceleyip insanların kandırılmasını önleyecek bir bilinçlendirme rehberi hazırlarım.", team: "purple", icon: "" }
                ]
            },
            {
                q: "5. Yeni aldığın akıllı telefon veya cihazın kutusunu ilk açtığında ne yaparsın?",
                options: [
                    { text: "Ayarlarını kurcalayıp gizli menüleri, kısıtlamaları veya üreticinin kapatmak istediği şeyleri açmaya çalışırım.", team: "red", icon: "" },
                    { text: "Hemen koruyucu kılıf takıp; yüz tanıma, çift adımlı SMS doğrulama ve konum güvenliği ayarlarını açarım.", team: "blue", icon: "" },
                    { text: "Kullanım kılavuzunu inceleyip cihazın hem sunduğu avantajları hem de zayıf yönlerini eksiksiz öğrenirim.", team: "purple", icon: "" }
                ]
            },
            {
                q: "6. Büyük bir bankada veya kurumda çalışsaydın hangi görev sana daha heyecan verici gelirdi?",
                options: [
                    { text: "Yönetimin izniyle şirketin binasına veya sistemine gizlice sızmayı deneyip güvenlik açıklarını ispatlamak.", team: "red", icon: "" },
                    { text: "Bankanın kasasını ve müşteri hesaplarını 7/24 izleyip hiçbir şüpheli para hareketine izin vermemek.", team: "blue", icon: "" },
                    { text: "Hem güvenlik görevlilerini hem teftiş ekibini toplayıp acil durum ve güvenlik tatbikatları yaptırmak.", team: "purple", icon: "" }
                ]
            },
            {
                q: "7. Bir zeka bulmacası veya kaçış odası oyununda seni en çok tatmin eden an hangisidir?",
                options: [
                    { text: "Oyun kurucusunun fark etmediği bir kestirme yol veya ipucu bularak odayı herkesten önce açmak.", team: "red", icon: "" },
                    { text: "Odadaki tüm ipuçlarını ve şifreleri adım adım, sırayla ve hiçbir detayı atlamadan eksiksiz çözmek.", team: "blue", icon: "" },
                    { text: "Bulmacanın ardındaki ana mekanizmayı kavrayıp diğer oyunculara taktik vermek ve oyunu yönetmek.", team: "purple", icon: "" }
                ]
            },
            {
                q: "8. Büyük bir şirketin müşteri şifrelerini çaldırdığı haberini duydun. Aklından geçen ilk düşünce ne olur?",
                options: [
                    { text: "'Hırsızlar hangi akıllıca yöntemle veya hangi gizli açık kapıdan içeri sızmayı başardı acaba?'", team: "red", icon: "" },
                    { text: "'Bu şirket neden iki aşamalı SMS onayı ve şifreli kalkanlar kullanmamış, bu kabul edilemez!'", team: "blue", icon: "" },
                    { text: "'Bu durum şirketin geleceğini nasıl etkiler ve sistemi yeniden kurarken ne tür kurallar koymalılar?'", team: "purple", icon: "" }
                ]
            },
            {
                q: "9. Sana bir süper kahraman gücü verilseydi hangisini seçerdin?",
                options: [
                    { text: "Görünmez olup kilitli kapıların arkasından rahatça geçebilme ve gizli sırları keşfetme gücü.", team: "red", icon: "" },
                    { text: "Kendini ve tüm sevdiklerini her türlü tehlikeden koruyan kurşun geçirmez aşılmaz bir enerji kalkanı.", team: "blue", icon: "" },
                    { text: "Olayları daha gerçekleşmeden hissedip hem savunmayı hem hamleleri yönetebilen geleceği sezme gücü.", team: "purple", icon: "" }
                ]
            },
            {
                q: "10. Siber dünyada ilerlemek istesen hangi unvan kulağına en havalı ve sana en uygun geliyor?",
                options: [
                    { text: "Sistemlerin açık kapılarını bularak şirketlerin korunmasını sağlayan 'Etik Hacker' (Red Team).", team: "red", icon: "" },
                    { text: "Sistemleri virüslere ve siber korsanlara karşı bir kale gibi koruyan 'Siber Savunma Muhafızı' (Blue Team).", team: "blue", icon: "" },
                    { text: "Hem saldırıyı hem savunmayı yöneten ve büyük stratejiyi belirleyen 'Siber Güvenlik Lideri' (Purple Team).", team: "purple", icon: "" }
                ]
            }
        ];

        let currentStep = 0;
        let answers = [];

        function renderStep() {
            if (currentStep >= quizQuestions.length) {
                renderResults();
                return;
            }

            const qObj = quizQuestions[currentStep];
            const progressPct = Math.round(((currentStep + 1) / quizQuestions.length) * 100);
            const currentSelected = answers[currentStep];

            container.innerHTML = `
                <div class="quiz-progress-bar-wrap">
                    <div class="quiz-progress-fill" style="width: ${progressPct}%;"></div>
                </div>

                <div class="quiz-question-header">
                    <span class="quiz-step-badge">SORU ${currentStep + 1} / ${quizQuestions.length}</span>
                    <span style="font-size: 12px; color: var(--text-muted); font-family: var(--font-mono);">${progressPct}% Tamamlandı</span>
                </div>

                <h3 class="quiz-question-title">${escapeHtml(qObj.q)}</h3>

                <div class="quiz-options-list">
                    ${qObj.options.map(opt => `
                        <div class="quiz-option-item ${currentSelected === opt.team ? 'selected' : ''}" data-team="${opt.team}">
                            <span class="quiz-option-icon">${opt.icon}</span>
                            <span class="quiz-option-text">${escapeHtml(opt.text)}</span>
                        </div>
                    `).join('')}
                </div>

                <div class="quiz-nav-row">
                    ${currentStep > 0 ? `
                        <button type="button" class="btn-secondary btn-sm" id="btn-quiz-prev">&larr; Önceki Soru</button>
                    ` : `<div></div>`}
                    <span style="font-size: 11.5px; color: var(--text-muted);">Bir seçeneğe tıkladığınızda otomatik ilerler</span>
                </div>
            `;

            container.querySelectorAll('.quiz-option-item').forEach(item => {
                item.addEventListener('click', () => {
                    const team = item.dataset.team;
                    answers[currentStep] = team;
                    item.classList.add('selected');
                    setTimeout(() => {
                        currentStep++;
                        renderStep();
                    }, 240);
                });
            });

            const prevBtn = document.getElementById('btn-quiz-prev');
            if (prevBtn) {
                prevBtn.addEventListener('click', () => {
                    if (currentStep > 0) {
                        currentStep--;
                        renderStep();
                    }
                });
            }
        }

        function renderResults() {
            const redCount = answers.filter(a => a === 'red').length;
            const blueCount = answers.filter(a => a === 'blue').length;
            const purpleCount = answers.filter(a => a === 'purple').length;

            const redPct = Math.round((redCount / answers.length) * 100);
            const bluePct = Math.round((blueCount / answers.length) * 100);
            const purplePct = Math.round((purpleCount / answers.length) * 100);

            let winningTeam = 'red';
            let roleIcon = '⚔️';
            let roleTitle = 'RED TEAM // ETİK HACKER & AÇIK AVCISI';
            let roleColor = '#f87171';
            let roleDesc = 'Tebrikler! Zihnin tıpkı bir dedektif veya kilit ustası gibi meraklı ve sorgulayıcı çalışıyor. Sistemlerin açık kapılarını, unutulan şifrelerini ve gözden kaçan zayıf noktalarını sezmekte doğuştan gelen bir avcı içgüdün var. Sıfır yazılım bilsen bile bu merak seni sistemleri kötü niyetli saldırganlardan önce test edip koruyan bir "Etik Hacker" (Red Team) yapabilir!';
            let targetCategory = 'nmap';

            if (blueCount >= redCount && blueCount >= purpleCount) {
                winningTeam = 'blue';
                roleIcon = '🛡️';
                roleTitle = 'BLUE TEAM // SİBER SAVUNMA & KALE MUHAFIZI';
                roleColor = '#60a5fa';
                roleDesc = 'Harika! Zihnin koruyucu bir kale muhafızı ve dikkatli bir nöbetçi gibi çalışıyor. Sistemleri aşılmaz bir zırhla donatmak, şüpheli hareketleri anında sezmek ve izinsiz girişleri kapıda durdurmak senin uzmanlık alanın. Kurumları ve insanları siber korsanlara karşı koruyan bir "Siber Savunma Uzmanı" (Blue Team) potansiyelin çok yüksek!';
                targetCategory = 'blue';
            } else if (purpleCount > redCount && purpleCount > blueCount) {
                winningTeam = 'purple';
                roleIcon = '🟣';
                roleTitle = 'PURPLE TEAM // STRATEJİST & SİBER GÜVENLİK LİDERİ';
                roleColor = '#c084fc';
                roleDesc = 'Muhteşem! Sen hem saldırıyı hem savunmayı aynı anda dengeli gören stratejik bir lidersin. Bir suçlunun nasıl düşüneceğini de, güvenliğin nasıl sağlanması gerektiğini de büyük resimden görüyorsun. İki tarafı buluşturan, tatbikatları yöneten ve kriz anında doğru kararları alan bir "Siber Güvenlik Stratejisti" (Purple Team) kumaşına sahipsin!';
                targetCategory = 'all';
            }

            container.innerHTML = `
                <div class="quiz-result-box">
                    <div class="quiz-result-hero-icon">${roleIcon}</div>
                    <div class="page-tier-badge" style="background: rgba(255,255,255,0.06); color: ${roleColor}; border-color: ${roleColor}; margin-bottom: 8px;">
                        ANALİZ SONUCU // %100 TAMAMLANDI
                    </div>
                    <h2 class="quiz-result-role-title" style="color: ${roleColor};">${roleTitle}</h2>
                    <p class="quiz-result-desc">${escapeHtml(roleDesc)}</p>

                    <div class="quiz-breakdown-bars">
                        <div class="quiz-bar-item">
                            <div class="quiz-bar-label-row">
                                <span style="color: #f87171;">⚔️ Red Team (Ofansif / Hücum):</span>
                                <span style="color: #f87171;">${redPct}% (${redCount}/10 Soru)</span>
                            </div>
                            <div class="quiz-bar-track">
                                <div class="quiz-bar-fill" style="width: ${redPct}%; background: #ef4444;"></div>
                            </div>
                        </div>

                        <div class="quiz-bar-item">
                            <div class="quiz-bar-label-row">
                                <span style="color: #60a5fa;">🛡️ Blue Team (Defansif / Savunma):</span>
                                <span style="color: #60a5fa;">${bluePct}% (${blueCount}/10 Soru)</span>
                            </div>
                            <div class="quiz-bar-track">
                                <div class="quiz-bar-fill" style="width: ${bluePct}%; background: #3b82f6;"></div>
                            </div>
                        </div>

                        <div class="quiz-bar-item">
                            <div class="quiz-bar-label-row">
                                <span style="color: #c084fc;">🟣 Purple Team (Entegre Strateji):</span>
                                <span style="color: #c084fc;">${purplePct}% (${purpleCount}/10 Soru)</span>
                            </div>
                            <div class="quiz-bar-track">
                                <div class="quiz-bar-fill" style="width: ${purplePct}%; background: #a855f7;"></div>
                            </div>
                        </div>
                    </div>

                    <div class="quiz-actions-row">
                        <button type="button" class="btn-glow-blue" id="btn-quiz-jump-academy">
                            🎓 Sana Özel Akademi Odalarını Aç &rarr;
                        </button>
                        <button type="button" class="btn-secondary" id="btn-quiz-jump-commands">
                            📚 140+ Kod Kütüphanesini Aç
                        </button>
                        <button type="button" class="btn-secondary" id="btn-quiz-jump-terminal">
                            💻 Kali Web Terminalini Aç
                        </button>
                        <button type="button" class="btn-secondary" id="btn-quiz-restart-inner">
                            🔄 Testi Tekrar Çöz
                        </button>
                    </div>
                </div>
            `;

            const btnJumpAcad = document.getElementById('btn-quiz-jump-academy');
            if (btnJumpAcad) {
                btnJumpAcad.addEventListener('click', () => {
                    window.location.href = `academy.html?track=${encodeURIComponent(winningTeam)}`;
                });
            }

            const btnJumpCommands = document.getElementById('btn-quiz-jump-commands');
            if (btnJumpCommands) {
                btnJumpCommands.addEventListener('click', () => {
                    navigateToPage('page-commands');
                    const catPill = document.querySelector(`#academy-category-pills [data-cat="${targetCategory}"]`);
                    if (catPill) catPill.click();
                });
            }

            const btnJumpTerm = document.getElementById('btn-quiz-jump-terminal');
            if (btnJumpTerm) {
                btnJumpTerm.addEventListener('click', () => navigateToPage('page-terminal'));
            }

            const btnRestartInner = document.getElementById('btn-quiz-restart-inner');
            if (btnRestartInner) {
                btnRestartInner.addEventListener('click', () => {
                    currentStep = 0;
                    answers = [];
                    renderStep();
                });
            }
        }

        if (btnRestart) {
            btnRestart.addEventListener('click', () => {
                currentStep = 0;
                answers = [];
                renderStep();
                showToast('info', 'Test Sıfırlandı', '10 soruluk test baştan başlatıldı.');
            });
        }

        renderStep();
    }

    // ==========================================
    // VISITOR & ACCESS LOGS PANEL (ADMIN ONLY)
    // ==========================================
    async function loadAccessLogs() {
        if (!state.currentUser || (state.currentUser.role !== 'admin' && state.currentUser.role !== 'operative')) {
            return;
        }

        try {
            const data = await api.getAccessLogs();
            state.accessLogs = data.logs || [];

            const totalEl = document.getElementById('log-stat-total');
            if (totalEl) totalEl.textContent = state.accessLogs.length;

            const ipsEl = document.getElementById('log-stat-ips');
            if (ipsEl) {
                const uniqueIps = new Set(state.accessLogs.map(l => l.ipAddress)).size;
                ipsEl.textContent = uniqueIps;
            }

            const adminsEl = document.getElementById('log-stat-admins');
            if (adminsEl) {
                const adminCount = state.accessLogs.filter(l => l.role === 'admin' || l.username === 'lostfromlight' || l.username === 'admin').length;
                adminsEl.textContent = adminCount;
            }

            const statusEl = document.getElementById('log-stat-status');
            if (statusEl) statusEl.textContent = '100% YAKALANIYOR';

            const searchInput = document.getElementById('logs-search-input');
            renderAccessLogs(searchInput ? searchInput.value : '');
        } catch (err) {
            console.error('[LFL] Log yükleme hatası:', err);
        }
    }

    function renderAccessLogs(filterQuery = '') {
        const tbody = document.getElementById('access-logs-tbody');
        if (!tbody) return;

        const q = (filterQuery || '').toLowerCase().trim();
        const filtered = state.accessLogs.filter(item => {
            if (!q) return true;
            return (item.ipAddress && item.ipAddress.toLowerCase().includes(q)) ||
                (item.operatingSystem && item.operatingSystem.toLowerCase().includes(q)) ||
                (item.browser && item.browser.toLowerCase().includes(q)) ||
                (item.deviceType && item.deviceType.toLowerCase().includes(q)) ||
                (item.username && item.username.toLowerCase().includes(q)) ||
                (item.role && item.role.toLowerCase().includes(q)) ||
                (item.path && item.path.toLowerCase().includes(q));
        });

        if (filtered.length === 0) {
            tbody.innerHTML = `<tr><td colspan="7" class="text-center text-muted" style="padding: 24px;">Filtreye uygun log kaydı bulunamadı.</td></tr>`;
            return;
        }

        tbody.innerHTML = filtered.map(log => {
            const timeStr = log.timestamp ? new Date(log.timestamp).toLocaleTimeString() : '--:--:--';
            const dateStr = log.timestamp ? new Date(log.timestamp).toLocaleDateString() : '';
            const isAdmin = log.role === 'admin' || log.username === 'burak_wyxz';
            const isGuest = log.role === 'guest' || !log.username || log.username === 'Anonim Ziyaretçi';
            const roleBadgeClass = isAdmin ? 'badge-role-admin' : isGuest ? 'badge-role-guest' : 'badge-role-user';

            const statusBadgeClass = log.statusCode >= 200 && log.statusCode < 300
                ? 'badge-soft-green'
                : log.statusCode === 401 || log.statusCode === 403
                    ? 'badge-soft-red'
                    : 'badge-soft-cyan';

            const screenText = log.screen ? `<br/><span style="font-size: 10px; color: var(--text-muted); font-family: var(--font-mono);">${escapeHtml(log.screen)}</span>` : '';
            const connText = log.connection ? `<br/><span style="font-size: 9.5px; color: #a7f3d0; font-family: var(--font-mono);">⚡ ${escapeHtml(log.connection)}</span>` : '';
            const coresText = log.cores ? `<br/><span style="font-size: 10px; color: #94a3b8; font-family: var(--font-mono);">${escapeHtml(log.cores)}</span>` : '';
            const locText = log.country ? `<br/><span style="font-size: 10px; color: #38bdf8;">📍 ${escapeHtml(log.country)}</span>` : '';

            return `
                <tr>
                    <td style="font-family: var(--font-mono); font-size: 11px; color: var(--text-muted); white-space: nowrap;">
                        <span style="color: var(--cyan); font-weight: 700;">${escapeHtml(timeStr)}</span>
                        <br/>${escapeHtml(dateStr)}
                    </td>
                    <td>
                        <span class="badge-ip-mono" style="font-weight: 800; color: #38bdf8;">${escapeHtml(log.ipAddress)}</span>
                        ${locText}
                    </td>
                    <td>
                        <span class="badge-os" style="font-weight: 700;">${escapeHtml(log.operatingSystem)}</span>
                        ${coresText}
                    </td>
                    <td style="font-size: 12px;">
                        <span style="font-weight: 600; color: #ffffff;">${escapeHtml(log.browser)}</span>
                        <span style="color: var(--text-muted); font-size: 11px;">(${escapeHtml(log.deviceType || 'Masaüstü')})</span>
                        ${screenText}
                        ${connText}
                    </td>
                    <td>
                        <span class="${roleBadgeClass}">${escapeHtml(log.username)}</span>
                    </td>
                    <td style="font-family: var(--font-mono); font-size: 11px;">
                        <span style="color: var(--text-secondary); font-weight: 600;">${escapeHtml(log.method || 'GET')}</span>
                        <code style="color: var(--cyan); margin-left: 4px;">${escapeHtml(log.path)}</code>
                    </td>
                    <td>
                        <span class="${statusBadgeClass}">${escapeHtml(String(log.statusCode || 200))} OK</span>
                    </td>
                </tr>
            `;
        }).join('');
    }

    function bindAccessLogsPanel() {
        const searchInput = document.getElementById('logs-search-input');
        if (searchInput) {
            searchInput.addEventListener('input', () => {
                renderAccessLogs(searchInput.value);
            });
        }

        const btnRefresh = document.getElementById('btn-refresh-logs');
        if (btnRefresh) {
            btnRefresh.addEventListener('click', async () => {
                await loadAccessLogs();
                showToast('info', 'Loglar Güncellendi', 'Ziyaretçi erişim logları yenilendi.');
            });
        }

        const btnExport = document.getElementById('btn-export-logs');
        if (btnExport) {
            btnExport.addEventListener('click', () => {
                if (state.accessLogs.length === 0) {
                    showToast('error', 'Hata', 'Dışa aktarılacak log verisi bulunmuyor.');
                    return;
                }
                const blob = new Blob([JSON.stringify(state.accessLogs, null, 2)], { type: 'application/json' });
                const url = URL.createObjectURL(blob);
                const a = document.createElement('a');
                a.href = url;
                a.download = `lfl-access-telemetry-${Date.now()}.json`;
                document.body.appendChild(a);
                a.click();
                a.remove();
                URL.revokeObjectURL(url);
                showToast('success', 'İndirildi', 'Log verisi JSON formatında indirildi.');
            });
        }
    }

    // ==========================================
    // SİBER KILAVUZ & SÖZLÜK (A-Z) // 30+ ZENGİN TERİM
    // ==========================================
    const glossaryData = [
        // --- KİMLİK & OTURUM (auth) ---
        {
            tag: "MFA",
            title: "Multi-Factor Authentication (Çok Faktörlü Doğrulama)",
            category: "auth",
            desc: "Kullanıcının hesabına girmesi için yalnızca şifrenin yetmediği; telefonuna gelen kod (SMS/Authenticator) veya donanım güvenlik anahtarı (FIDO2/YubiKey) gibi ikinci bir delil sunmasını şart koşan güvenlik mekanizmasıdır.",
            analogy: "Evin kapısını hem anahtarla açıp, hem de içerideki güvenlik paneline parmak izinizi okutmak gibidir. Hırsız anahtarı çalsa bile eve giremez.",
            mitigates: "Şifre Çalma, Credential Stuffing, Phishing (Oltalama)"
        },
        {
            tag: "JWT",
            title: "JSON Web Token (Kriptografik Oturum Zarfı)",
            category: "auth",
            desc: "Kullanıcı giriş yaptıktan sonra sunucunun ürettiği, içinde kullanıcının rolü ve yetkilerini taşıyan, kriptografik HMAC-SHA256 ile imzalanmış dijital kimlik kartıdır.",
            analogy: "Konsere girerken bileğinize takılan, taklit edilemez hologramlı ve barkodlu giriş bilekliği gibidir. Görevliler her kapıda kimliğinizi sormaz, bilekliği okutursunuz.",
            mitigates: "Oturum Sahteciliği (Session Hijacking), Yetkisiz Yetki Yükseltme"
        },
        {
            tag: "HASH-SALT",
            title: "Parola Kriptografik Özeti & Tuzlama (Salted Hashing)",
            category: "auth",
            desc: "Veritabanında şifrelerin açık metin değil, tek yönlü matematiksel algoritmalarla (BCrypt, Argon2, PBKDF2) ve her kullanıcıya özel rastgele bir 'tuz' (salt) eklenerek saklanmasıdır.",
            analogy: "Bir elmayı püre haline getirip içine bir avuç kum atmak gibidir. Püreyi tekrar eski sağlam elmaya dönüştüremezsiniz ama iki pürenin aynı olup olmadığını karşılaştırabilirsiniz.",
            mitigates: "Gökkuşağı Tablosu (Rainbow Table) Saldırıları, Veritabanı Sızıntıları",
            cmd: "hashcat -m 0 -a 0 hash.txt rockyou.txt"
        },
        {
            tag: "OAUTH2",
            title: "OAuth 2.0 & OpenID Connect",
            category: "auth",
            desc: "Kullanıcının şifresini üçüncü parti uygulamalara vermeden 'Google ile Giriş Yap' veya 'GitHub ile Giriş Yap' butonlarıyla güvenle yetkilendirilmesini sağlayan açık standarttır.",
            analogy: "Otelde vale hizmetine arabanızın anahtarını değil, sadece arabayı park etmeye yarayan kısıtlı bir vale anahtarını vermek gibidir. Torpidonuzu açamaz.",
            mitigates: "Parola Paylaşımı, Üçüncü Parti Veri Hırsızlığı"
        },
        {
            tag: "SESSION-HIJACK",
            title: "Oturum Kaçırma (Session Hijacking / Sidejacking)",
            category: "auth",
            desc: "Saldırganın aktif bir web oturumuna ait çerezleri (Session Cookie) veya JWT tokenini çalarak kullanıcı adına işlem yapması durumudur.",
            analogy: "Otobüs biletinizi cebinizden gizlice alıp otobüse sizin yerinize binen yabancı bir yolcu gibidir.",
            mitigates: "HttpOnly & Secure Cookie Bayrakları, Kısa Ömürlü JWT"
        },

        // --- AĞ & PROTOKOLLER (network) ---
        {
            tag: "HSTS",
            title: "HTTP Strict Transport Security (Zorunlu HTTPS)",
            category: "network",
            desc: "Tarayıcıya 'Bu web sitesine asla güvensiz HTTP ile bağlanma, her zaman zorunlu şifreli HTTPS (TLS 1.3) ile bağlan' talimatını veren güvenlik başlığıdır.",
            analogy: "Taksiye bindiğinizde şoföre 'Sadece zırhlı ve camları kurşun geçirmez arabayla giderim, normal arabaya asla binmem' demek gibidir.",
            mitigates: "SSL Strip, Man-in-the-Middle (Araya Girme) Saldırıları",
            cmd: "powershell .\\Audit-Headers.ps1"
        },
        {
            tag: "CSP",
            title: "Content Security Policy (İçerik Güvenliği Politikası)",
            category: "network",
            desc: "Tarayıcının sayfada hangi JavaScript kodlarını, resimleri ve fontları çalıştırabileceğini belirten katı beyaz listedir (whitelist).",
            analogy: "Şirket binasına girebilecek kuryelerin ve ziyaretçilerin önceden danışmaya isimlerinin bildirilmesi gibidir. İsmi listede olmayan içeri adım atamaz.",
            mitigates: "Cross-Site Scripting (XSS), Zararlı Kod Enjeksiyonu"
        },
        {
            tag: "PORT",
            title: "Ağ Portu (Network Port - 1-65535)",
            category: "network",
            desc: "Bilgisayar ağlarında çalışan her servis için ayrılmış mantıksal iletişim kapısıdır. Bir IP adresinde 65.535 port bulunur.",
            analogy: "Büyük bir plazadaki oda numaraları gibidir. Plaza adresi IP'dir, plazadaki Muhasebe odası 80, Yönetim odası 22, Güvenlik odası 443'tür.",
            mitigates: "Gereksiz Açık Portların Kapatılması Saldırı Yüzeyini Azaltır",
            cmd: "nmap -p- 127.0.0.1"
        },
        {
            tag: "IP-ADDRESS",
            title: "IP Adresi (Internet Protocol Address)",
            category: "network",
            desc: "İnternete bağlı her cihazın dünyadaki benzersiz dijital kimliğidir. 127.0.0.1 kendi makinemizi, 192.168.x.x yerel ağı temsil eder.",
            analogy: "Evinizin tapudaki açık sokak ve posta adresi gibidir. Kurye paketi teslim etmek için evin posta adresini bilmelidir.",
            mitigates: "IP Adresi Gizleme (VPN/Tor), IP Spoofing Kalkanları",
            cmd: "ip a"
        },
        {
            tag: "DNS",
            title: "Alan Adı Sistemi (Domain Name System)",
            category: "network",
            desc: "İnsanların aklında tutması kolay olan alan adlarını (örn: google.com) makinelerin anladığı IP adreslerine (142.250.x.x) çeviren telefon rehberidir.",
            analogy: "Akıllı telefonunuzdaki rehber gibidir. 'Ahmet' ismine basarsınız ama telefon arkada onun numarasını çevirir.",
            mitigates: "DNS Zehirleme (DNS Spoofing), DNSSEC Koruması",
            cmd: "nmap -sU -p 53 192.168.1.1"
        },
        {
            tag: "TCP-HANDSHAKE",
            title: "TCP 3 Yollu El Sıkışma (Three-Way Handshake)",
            category: "network",
            desc: "İki bilgisayar arasında veri aktarımı başlamadan önce yapılan 3 adımlı selamlama protokolüdür: SYN -> SYN-ACK -> ACK.",
            analogy: "Telefonda 'Alo sesimi alıyor musun?' (SYN), karşı tarafın 'Evet duyuyorum, sen beni duyuyor musun?' (SYN-ACK) ve sizin 'Tamam anlaştık konuşalım' (ACK) demenizdir.",
            mitigates: "Eksik Paket Tespiti, Bağlantı Doğrulama",
            cmd: "sudo hping3 -S -p 80 -c 1 192.168.1.1"
        },
        {
            tag: "VPN-TUNNEL",
            title: "Sanal Özel Ağ & Şifreli Tünel (VPN)",
            category: "network",
            desc: "Genel ve güvensiz internet ağları üzerinde iki uç nokta arasında tüm paketleri şifreleyerek görünmez bir koridor (tünel) oluşturan teknolojidir.",
            analogy: "Halka açık bir otoyolda giderken arabanızın etrafına görünmez ve kurşun geçirmez bir zırhlı tünel inşa etmek gibidir.",
            mitigates: "Halka Açık Wi-Fi Dinleme, Trafik Analizi",
            cmd: "ssh -D 1080 -q -C -N user@remote"
        },

        // --- SALDIRI TÜRLERİ (attacks) ---
        {
            tag: "SQLI",
            title: "SQL Injection (Veritabanı Kod Enjeksiyonu)",
            category: "attacks",
            desc: "Saldırganın web arama veya form alanlarına zararlı SQL veritabanı komutları yazarak tüm müşteri kayıtlarını ve şifreleri çalmasıdır. Entity Framework Core LINQ parametrik sorguları bu açığı tamamen engeller.",
            analogy: "Mektup atma kutusuna mektup yerine dinamit atmaktır. Parametrik koruma ise mektubu kutuya atmadan önce X-ray cihazından geçirip sadece kağıt olduğunu doğrulamaktır.",
            mitigates: "Tüm Veritabanının Çalınması, Veri Silinmesi",
            cmd: "sqlmap -u \"http://127.0.0.1/api/search?q=test\" --dbs"
        },
        {
            tag: "XSS",
            title: "Cross-Site Scripting (Siteler Arası Betik Çalıştırma)",
            category: "attacks",
            desc: "Web sitesindeki yorum veya girdi kutularına zararlı JavaScript kodu yerleştirerek, sayfayı ziyaret eden diğer masum kullanıcıların oturum çerezlerini çalma saldırısıdır.",
            analogy: "Mahallenin ortak duyuru panosuna ilan asmak yerine, panoya yaklaşan herkesin cebindeki cüzdanı çalan görünmez bir el yerleştirmektir.",
            mitigates: "HTML Encode, Katı Content-Security-Policy (CSP)"
        },
        {
            tag: "CLICKJACKING",
            title: "Clickjacking & UI Redressing (Tıklama Kaçırma)",
            category: "attacks",
            desc: "Saldırganın kendi sitesinde görünmez bir iframe açarak içine banka veya yönetim panelinizi gizlemesi ve size 'Tebrikler Ödül Kazandınız' butonuna bastırırken aslında arkadaki gizli butona tıklatmasıdır.",
            analogy: "Şeffaf bir kağıdın altına banka dekontunu koyup, size 'Anketi imzala' diyerek fark ettirmeden alttaki para transferi dekontunu imzalatmaktır.",
            mitigates: "X-Frame-Options: DENY, CSP frame-ancestors 'none'"
        },
        {
            tag: "DOS-DDOS",
            title: "Hizmet Engelleme Saldırısı (Denial of Service)",
            category: "attacks",
            desc: "Bir sunucuya saniyede kapasitesinin üzerinde milyonlarca yapay istek göndererek sistemin çökmesine ve gerçek kullanıcıların siteye girememesine yol açan saldırıdır.",
            analogy: "Bir kahve dükkanına aynı anda 10.000 kişinin hücum edip hiçbir şey almadan kasayı meşgul ederek gerçek müşterilerin içeri girmesini engellemesi gibidir.",
            mitigates: "Rate Limiting, Cloudflare WAF, SYN Cookies",
            cmd: "sudo hping3 --udp --flood -p 80 192.168.1.1"
        },
        {
            tag: "MITM",
            title: "Man-in-the-Middle (Ortadaki Adam Saldırısı)",
            category: "attacks",
            desc: "Saldırganın iki taraf (örneğin kurban ve banka sunucusu) arasına gizlice girerek tüm konuşmayı ve şifreleri dinlemesi veya değiştirmesidir.",
            analogy: "Postacı mektubunuzu postaneye götürürken yolda zarfı gizlice açıp içini okur, içine sahte mektup koyup zarfı tekrar yapıştırır.",
            mitigates: "Zorunlu Uçtan Uca HTTPS (TLS 1.3), HSTS Preload",
            cmd: "bettercap -iface lo"
        },
        {
            tag: "BRUTE-FORCE",
            title: "Kaba Kuvvet & Sözlük Parola Saldırısı",
            category: "attacks",
            desc: "Bir giriş ekranında binlerce veya milyonlarca yaygın parolayı sırayla deneyerek doğru şifreyi bulmaya çalışma yöntemidir.",
            analogy: "Bir asma kilidi açmak için elinizdeki binlerce anahtarı tek tek kilidin içine sokup çevirmeyi denemektir.",
            mitigates: "Hesap Kilitleme Politikası, Güçlü MFA, Fail2ban",
            cmd: "hydra -l admin -p Sebu132009 192.168.1.1 http-get /"
        },
        {
            tag: "PHISHING",
            title: "Oltalama & Sosyal Mühendislik (Phishing)",
            category: "attacks",
            desc: "Kullanıcıya güvenilir bir banka veya şirket gibi davranarak e-posta veya sahte web sitesi yoluyla şifrelerini ve kredi kartı bilgilerini kendi eliyle girmesini sağlama tuzağıdır.",
            analogy: "Kapınıza polis üniforması giyerek gelen bir hırsızın 'Güvenlik denetimi yapıyoruz, kasanızın şifresini verin' demesi ve sizin inanmanızdır.",
            mitigates: "Güvenlik Farkındalık Eğitimi, FIDO2 Donanım Anahtarı"
        },
        {
            tag: "ZERO-DAY",
            title: "Sıfır Gün Zafiyeti (Zero-Day Vulnerability)",
            category: "attacks",
            desc: "Yazılım üreticisinin henüz farkında olmadığı ve bu nedenle dünyada hiçbir güvenlik yaması veya güncellemesi bulunmayan tehlikeli güvenlik açığıdır.",
            analogy: "Kasa üreticisinin dahi bilmediği, fabrikadan çıkarken kasada unutulmuş gizli bir mekanik düğmenin hırsız tarafından keşfedilmesidir.",
            mitigates: "Zero-Trust Mimarisi, Derinlemesine Savunma (Defense-in-Depth)"
        },
        {
            tag: "RANSOMWARE",
            title: "Fidye Yazılımı (Ransomware)",
            category: "attacks",
            desc: "Sisteme sızarak tüm dosyaları ve veritabanlarını kırılamaz askeri şifrelerle (AES-256) şifreleyen ve dosyaları geri açmak için milyonlarca dolar fidye talep eden zararlı yazılımdır.",
            analogy: "Evinize girip tüm mobilya ve eşyalarınızı dev bir çelik kasaya kilitleyen ve 'Anahtar için bana para öde' diyen bir gaspçıdır.",
            mitigates: "Hava Boşluklu (Air-Gapped) Soğuk Yedekleme, EDR Koruması"
        },

        // --- SAVUNMA & ŞİFRELEME (defense) ---
        {
            tag: "NOSNIFF",
            title: "X-Content-Type-Options: nosniff (MIME Kalkanı)",
            category: "defense",
            desc: "Tarayıcının bir dosyanın türünü tahmin etmesini engeller. Sunucu bir dosyaya 'resim' dediyse, içinde gizli kod olsa bile tarayıcının onu kod olarak çalıştırmasını yasaklar.",
            analogy: "İlaç kutusunun üzerinde 'Aspirin' yazıyorsa, kutuyu açıp kokusuna bakarak 'bu şeker galiba' deyip yememek; kutudaki etikete sadık kalmaktır.",
            mitigates: "MIME Confuse ve Gizli Betik Çalıştırma Saldırıları"
        },
        {
            tag: "FIREWALL",
            title: "Durum Takipli Güvenlik Duvarı (Stateful Firewall / WAF)",
            category: "defense",
            desc: "Gelen ve giden tüm ağ paketlerini inceleyerek zararlı olanları engelleyen, yalnızca meşru trafiğe izin veren dijital güvenlik kalkanıdır.",
            analogy: "Havalimanı kapısındaki X-ray cihazı ve güvenlik görevlileridir. Yasaklı eşyaları valizinizden çıkarır, içeri sokmaz.",
            mitigates: "Port Taramaları, Yetkisiz Bağlantılar, Zararlı İstekler",
            cmd: "sudo ufw status verbose"
        },
        {
            tag: "EDR-SIEM",
            title: "Uç Nokta Tespiti & Olay Yönetimi (EDR / SIEM)",
            category: "defense",
            desc: "Şirketteki tüm bilgisayarları 7/24 izleyen, anormal bir dosya indirme veya şüpheli komut çalıştığında anında alarm üreten merkezi güvenlik merkezidir.",
            analogy: "Bir müzedeki binlerce güvenlik kamerasını tek bir odada canlı izleyen ve alarm çaldığında otomatik çelik kapıları kapatan güvenlik ekibidir.",
            mitigates: "Gelişmiş Kalıcı Tehditler (APT), Şüpheli Davranışlar"
        },
        {
            tag: "AIR-GAP",
            title: "Hava Boşluklu Yedekleme (Air-Gapped Backup)",
            category: "defense",
            desc: "Yedeklenen verilerin bulunduğu diskin internetten ve şirket ağından fiziksel olarak kablosu çekilerek tamamen izole bir kasada saklanmasıdır.",
            analogy: "Çok değerli altınlarınızı banka hesabında tutmak yerine yerin 50 metre altındaki çevrimdışı çelik kasada saklamaktır. Hiçbir hacker kablosu olmayan bir cihaza sızamaz.",
            mitigates: "Fidye Yazılımları (Ransomware), Ağ Sızıntıları"
        },
        {
            tag: "ZERO-TRUST",
            title: "Sıfır Güven Mimarisi (Zero-Trust Architecture)",
            category: "defense",
            desc: "'Asla güvenme, her zaman doğrula' felsefesidir. Şirket ağının içindeki çalışanlar da dahil olmak üzere her isteğin kimliği ve yetkisi her adımda yeniden doğrulanır.",
            analogy: "Çok gizli bir askeri üste, komutan olsanız bile geçtiğiniz her koridorda yeniden parmak izinizi ve retinanızı okutmanız gibidir.",
            mitigates: "İç Tehditler (Insider Threat), Ağ İçi Yatay Yayılma (Lateral Movement)"
        },
        {
            tag: "HONEYPOT",
            title: "Siber Bal Küpü (Honeypot - Tuzak Sistem)",
            category: "defense",
            desc: "Ağda bilerek zafiyetli gibi gösterilen sahte bir sunucu kurarak saldırganların ilgisini buraya çekmek ve onların yöntemlerini analiz etmek için kurulan tuzaktır.",
            analogy: "Bahçeye sahte bir mücevher kutusu koyup hırsızın oraya yönelmesini izlemek ve gerçek eve girmesini engellemektir.",
            mitigates: "Saldırgan Tespiti, Tehdit İstihbaratı Toplama"
        },

        // --- SİBER ARAÇLAR & PROTOKOLLER (tools) ---
        {
            tag: "NMAP",
            title: "Network Mapper (Ağ Haritalama Aracı)",
            category: "tools",
            desc: "Ağdaki cihazları, açık portları, çalışan servisleri ve işletim sistemlerini tespit etmek için tüm dünyada standart kabul edilen güvenlik aracıdır.",
            analogy: "Bir kalenin etrafında dolaşıp hangi kapıların açık, hangi pencerelerin kilitli olduğunu not alan keşif gözcüsüdür.",
            mitigates: "Bilinmeyen Açık Portların ve Eski Servislerin Keşfi",
            cmd: "nmap -p- 127.0.0.1"
        },
        {
            tag: "GOBUSTER",
            title: "Gobuster (Web Dizin & Gizli Rota Avcısı)",
            category: "tools",
            desc: "Go dilinde yazılmış ultra hızlı bir araçtır; web sitelerinde menülerde görünmeyen gizli admin panellerini ve yedek dosyalarını bulur.",
            analogy: "Büyük bir kütüphanede gizli bölmeleri ve kilitli odaları anahtar kelimelerle arayan araştırmacı dedektiftir.",
            mitigates: "Unutulan Yönetim Panelleri ve Yedek Dosyalarının Tespiti",
            cmd: "gobuster dir -u http://192.168.1.1 -w /usr/share/wordlists/dirb/common.txt"
        },
        {
            tag: "HPING3",
            title: "Hping3 (Özel TCP/IP Paket Sentezleyici)",
            category: "tools",
            desc: "İstediğiniz TCP, UDP veya ICMP bayraklarını elle ayarlayarak güvenlik duvarı kurallarını test edebileceğiniz esnek ağ aracıdır.",
            analogy: "Postacıya 'Bu mektubun üzerine sahte bir mühür vur ve kapıyı çalmadan kapının altından at' diyebildiğiniz özel kargo servisidir.",
            mitigates: "Güvenlik Duvarı Kural Doğrulama, DoS Dayanıklılık Testi",
            cmd: "sudo hping3 -S -p 80 -c 1 192.168.1.1"
        },
        {
            tag: "HYDRA",
            title: "THC-Hydra (Çok Kanallı Ağ Giriş Denetleyicisi)",
            category: "tools",
            desc: "SSH, FTP, HTTP ve RDP gibi 50'den fazla ağ protokolünde kaba kuvvet giriş denemesi yaparak zayıf parolaları denetleyen araçtır.",
            analogy: "Aynı anda 16 farklı anahtarı aynı kapının kilidinde deneyen çok kollu robot bir hırsız gibidir.",
            mitigates: "Zayıf veya Varsayılan Şifrelerin Tespit Edilip Güçlendirilmesi",
            cmd: "hydra -l admin -p Sebu132009 192.168.1.1 http-get /"
        },
        {
            tag: "SQLMAP",
            title: "Sqlmap (Otomatik Veritabanı Açık Denetçisi)",
            category: "tools",
            desc: "Web sitelerindeki SQL enjeksiyon açıklarını otomatik olarak tespit eden, veritabanı parmak izini çıkaran ve güvenliğini denetleyen araçtır.",
            analogy: "Binadaki duvarları özel bir cihazla tarayıp nerede gizli çatlak ve delik olduğunu bulan dedektördür.",
            mitigates: "Veritabanı Açıklarının Yama Öncesi Doğrulanması",
            cmd: "sqlmap -u \"http://127.0.0.1/api/search?q=test\" --dbs"
        },
        {
            tag: "BETTERCAP",
            title: "Bettercap (Ağ Analiz ve MITM Çerçevesi)",
            category: "tools",
            desc: "Yerel ağ trafiğini gerçek zamanlı izlemek, ARP zehirleme saldırılarını test etmek ve şifrelenmemiş protokolleri analiz etmek için kullanılır.",
            analogy: "Ağdaki tüm konuşmaları dinleyen hassas bir mikrofon ve santral yönlendiricisidir.",
            mitigates: "Ağ Şifreleme Eksikliklerinin ve ARP Zafiyetlerinin Tespiti",
            cmd: "bettercap -iface lo"
        },
        {
            tag: "CVE",
            title: "CVE (Common Vulnerabilities and Exposures)",
            category: "tools",
            desc: "Dünyada keşfedilen tüm siber güvenlik açıklarına verilen resmi, evrensel kimlik kodudur (örn: CVE-2021-44228 Log4j).",
            analogy: "Dünyadaki her hastalığa tıp literatüründe verilen uluslararası resmi teşhis kodu gibidir. Herkes aynı hastalıktan bahsettiğini anlar.",
            mitigates: "Evrensel Zafiyet Takibi ve Yama Yönetimi"
        }
    ,
{
                "tag": "EDR-BYPASS",
                "title": "EDR & Antivirus Bypass (Uç Nokta Kalkanını Atlama)",
                "category": "attacks",
                "desc": "Zararlı kodun statik imza taramalarını ve davranışsal EDR alarmlarını tetiklemeden belleğe enjekte edilmesi (Process Injection, Syscalls, Obfuscation) teknikleridir.",
                "analogy": "Bir casusun havalimanındaki X-Ray cihazına yakalanmamak için metal bıçak yerine seramik bıçak taşıması veya bekçiyi uyutacak sahte kimlik göstermesi gibidir.",
                "mitigates": "Statik İmza Taraması, API Hooking, Davranışsal EDR Analizi",
                "cmd": "msfvenom -p windows/x64/meterpreter/reverse_tcp -e x64/zutto_dekiru -i 5 -f exe"
        },
        {
                "tag": "C2-FRAMEWORK",
                "title": "C2 (Command & Control) Frameworks (Komuta Kontrol Sunucusu)",
                "category": "attacks",
                "desc": "Hedef bilgisayara sızdıktan sonra kurulan ve saldırganın kurbana uzaktan komut göndermesini sağlayan merkezi yönetim altyapısıdır (Cobalt Strike, Havoc, Mythic, Sliver).",
                "analogy": "Uzaktan kumandalı arabanın elinizdeki kumandasıdır. Araba (kurban) nereye giderse gitsin kumandadan gelen sinyallere göre yön alır.",
                "mitigates": "Düzenli Beacon Sinyalleri, DNS Tünelleme, Uzaktan Gizli Erişim",
                "cmd": "sliver-server"
        },
        {
                "tag": "KERBEROASTING",
                "title": "Kerberoasting (Active Directory Hizmet Hesabı Saldırısı)",
                "category": "attacks",
                "desc": "Active Directory ortamında SPN atanmış servis hesaplarının TGS (Ticket Granting Service) biletlerini talep edip çekerek kendi makinesinde parola hash'ini offline kırma saldırısıdır.",
                "analogy": "Bir kurumda çalışan personelin yemek fişlerini toplayıp eve götürmesi ve arkasındaki gizli damgayı evinde büyüteçle çözmeye çalışması gibidir.",
                "mitigates": "gMSA (Group Managed Service Accounts) Kullanımı, Güçlü 25+ Karakter Parolalar",
                "cmd": "GetUserSPNs.py corp.local/user:password -request -dc-ip 10.10.1.5"
        },
        {
                "tag": "BLOODHOUND",
                "title": "BloodHound & Cypher Graph (AD İlişki Haritalama)",
                "category": "tools",
                "desc": "Active Directory ağındaki tüm kullanıcılar, gruplar, bilgisayarlar ve ACL izinleri arasındaki gizli ve zafiyetli ilişkileri grafik teorisiyle haritalayan araçtır.",
                "analogy": "Bir labirentin tepeden çekilmiş dron fotoğrafıdır; en çaylak stajyer kullanıcısından en yetkili Domain Admin koltuğuna giden en kısa patikayı anında gösterir.",
                "mitigates": "Zafiyetli ACL Yetkilendirmeleri, Aşırı Domain Admin Dağıtımı",
                "cmd": "bloodhound-python -u user -p pass -d corp.local -c All"
        },
        {
                "tag": "MIMIKATZ",
                "title": "Mimikatz & LSASS Dump (RAM Bellekten Parola Avcılığı)",
                "category": "tools",
                "desc": "Windows işletim sisteminde oturum açmış kullanıcıların açık metin parolalarını, NTLM hash'lerini ve Kerberos biletlerini LSASS proses belleğinden çeken efsanevi araçtır.",
                "analogy": "Otel lobisindeki resepsiyonistin çekmecesine el çabukluğuyla uzanıp müşterilerin bıraktığı tüm oda anahtarlarını kopyalamak gibidir.",
                "mitigates": "LSA Protection (RunAsPPL), Credential Guard, Sysmon Event ID 10",
                "cmd": "mimikatz.exe \"privilege::debug\" \"sekurlsa::logonpasswords\" exit"
        },
        {
                "tag": "SNORT-SURICATA",
                "title": "Snort & Suricata (Ağ Tabanlı Tehdit Algılama - NIDS)",
                "category": "defense",
                "desc": "Ağ kablosundan geçen her baytı kural tabanlı imza motoruyla gerçek zamanlı tarayan, SQLi, port taraması veya zararlı C2 trafiği gördüğünde alarm üreten IDS/IPS sistemleridir.",
                "analogy": "Havalimanı girişindeki X-Ray cihazı ve metal dedektörüdür. Çantada silah veya patlayıcı gördüğü an siren çalar.",
                "mitigates": "Ağ İhlalleri, SYN Flood, Exploit Paketleri, Port Taraması",
                "cmd": "suricata -c /etc/suricata/suricata.yaml -i eth0"
        },
        {
                "tag": "YARA",
                "title": "YARA Kuralları (Zararlı Yazılım İmza & Örüntü Avcısı)",
                "category": "defense",
                "desc": "Zararlı yazılımların ve tehdit gruplarının kod bloklarını, metin dizgilerini ve ikili bayt kalıplarını metinsel kurallarla tanımlayıp uç noktalarda avlayan motordur.",
                "analogy": "Polisin elindeki 'Arananlar Robot Resmi' gibidir. Şüphelinin yüz hatları robottaki tarife uyuyorsa polis onu kalabalığın içinde anında yakalar.",
                "mitigates": "Zero-Day Zararlıları, Truva Atları, Dosyasız Zararlılar (Fileless)",
                "cmd": "yara -r rules.yar /var/www/uploads/"
        },
        {
                "tag": "VOLATILITY",
                "title": "Volatility Framework (RAM / Bellek Adli Bilişimi)",
                "category": "tools",
                "desc": "Çalışan bir sistemden alınan RAM bellek imajını (Memory Dump) ayrıştırarak çalışan gizli prosesleri, enjekte edilmiş DLL'leri ve açık ağ bağlantılarını ortaya çıkaran adli bilişim aracıdır.",
                "analogy": "Bir cinayet mahallinde zamanı dondurup o an odada nefes alan herkesin röntgenini çekmek gibidir. Bilgisayar kapandığında silinecek her şey RAM'dedir.",
                "mitigates": "Dosyasız Zararlı Tespiti, Rootkit Tespiti, Bellek İhlalleri",
                "cmd": "vol -f mem.dmp windows.pstree"
        },
        {
                "tag": "MITRE-ATTCK",
                "title": "MITRE ATT&CK & Cyber Kill Chain (Tehdit Matrisi)",
                "category": "defense",
                "desc": "Gerçek dünya saldırganlarının kullandığı taktik, teknik ve prosedürleri (TTP) doğrusal olmayan küresel bir matris şeklinde sınıflandıran endüstri standardı çerçevedir.",
                "analogy": "Bir futbol takımının rakip takımı analiz ettiği taktik tahtasıdır; rakibin kornerden mi, kontrataktan mı, yoksa kanattan mı saldırdığını madde madde gösterir.",
                "mitigates": "Savunma Boşlukları (Gap Analysis), Tehdit Tespiti Validasyonu"
        },
        {
                "tag": "ATOMIC-RED",
                "title": "Atomic Red Team & BAS (Birim Test Mantığıyla Güvenlik)",
                "category": "defense",
                "desc": "MITRE ATT&CK tekniklerini tek tek, kontrollü ve güvenli küçük birim testleri (Atomic Tests) şeklinde çalıştırarak EDR ve SIEM alarmlarının çalışıp çalışmadığını test eden araçtır.",
                "analogy": "Binadaki yangın alarmının düğmesine bilerek basıp sirenlerin çalıp çalmadığını ve itfaiyeye sinyal gidip gitmediğini test etmek gibidir.",
                "mitigates": "Sessiz Kalan Alarmlar, Yanlış Yapılandırılmış EDR Kuralları"
        },
        {
                "tag": "SIGMA",
                "title": "Sigma Kuralları (Evrensel SIEM / SOC Tespit Dili)",
                "category": "defense",
                "desc": "Splunk, QRadar, Microsoft Sentinel veya Elastic gibi farklı SIEM ürünlerine kolayca dönüştürülebilen, YAML tabanlı ortak siber tehdit kural formatıdır.",
                "analogy": "Dünya genelinde herkesin anladığı ortak İngilizce dili gibidir; bir kez yazarsınız, tüm yabancı sistemler kendi diline çevirip anında uygular.",
                "mitigates": "Üreticiye Bağımlı Kural Kilitlenmesi (Vendor Lock-in)"
        },
        {
                "tag": "STRIDE",
                "title": "STRIDE Tehdit Modellemesi (Tasarım Güvenliği)",
                "category": "defense",
                "desc": "Bir yazılım henüz kodlanmadan önce 6 kategori üzerinden (Spoofing, Tampering, Repudiation, Info Disclosure, DoS, Elevation of Privilege) mimari zafiyetlerini öngörme metodolojisidir.",
                "analogy": "Bir binanın mimari çizimini incelerken 'Buraya deprem kolonu koymazsak bina çöker' diyerek inşaat başlamadan hatayı düzeltmektir.",
                "mitigates": "Tasarım Hataları, Mimari Güvenlik Açıkları"
        },
        {
                "tag": "REVERSE-SHELL",
                "title": "Reverse Shell vs Bind Shell (Tersine Kabuk Bağlantısı)",
                "category": "attacks",
                "desc": "Hedef bilgisayarın saldırgana bağlanmasını sağlayarak güvenlik duvarının (Firewall) gelen istekleri engelleme kuralını baypas eden saldırı yöntemidir.",
                "analogy": "Korumalı bir kalenin kapısını dışarıdan kırıp içeri giremiyorsanız, içerideki bir ajanın dışarıya telefon açıp kapıyı size açması gibidir.",
                "mitigates": "Egress (Giden Trafik) Filtreleme, Port Kısıtlamaları",
                "cmd": "nc -lvnp 4444"
        },
        {
                "tag": "SUID-PRIV",
                "title": "SUID Biti & Linux Yetki Yükseltme (Privilege Escalation)",
                "category": "attacks",
                "desc": "Linux sistemlerde bir ikili dosyaya `chmod u+s` verildiğinde, sıradan bir kullanıcı çalıştırsa bile dosya sahibinin (genellikle root) tam yetkisiyle ayağa kalkmasıdır.",
                "analogy": "Sıradan bir veznedarın eline genel müdür mühürlü bir belge verildiğinde o dakika boyunca genel müdür adına karar alabilmesi gibidir.",
                "mitigates": "Gereksiz SUID Bitlerinin Temizlenmesi, NoExec Bayrağı",
                "cmd": "find / -perm -u=s -type f 2>/dev/null"
        },
        {
                "tag": "DNS-TUNNEL",
                "title": "DNS Tünelleme (DNS Tunneling ile Veri Sızdırma)",
                "category": "attacks",
                "desc": "Tüm giden portların kapalı olduğu kurumsal ağlarda, yalnızca açık bırakılan 53 numaralı DNS portunu kullanarak verileri Base64 formatında dışarıya kaçırma tekniğidir.",
                "analogy": "Hapishanedeki mahkumun dışarıya mektup göndermesi yasakken, gardiyana sorduğu 'Bugün hava nasıl?' sorusunun içine gizli şifreli kelimeler ekleyerek dışarıya mesaj sızdırmasıdır.",
                "mitigates": "DNS Sinkholing, TXT Sorgu Boyutu Sınırlandırması",
                "cmd": "iodine -f -r 10.0.0.1 tunnel.corp.com"
        },
        {
                "tag": "KESTREL",
                "title": "Kestrel Web Server & Server Banner Redaction",
                "category": "defense",
                "desc": ".NET Core'un hafif ve yüksek performanslı web sunucusudur. HTTP yanıt başlıklarındaki `Server: Kestrel` imzasını silerek saldırganların sürüm açığı aramasını engeller.",
                "analogy": "Bir askerin üniformasından rütbe ve birlik armasını sökerek düşman keskin nişancısına kim olduğunu belli etmemesidir.",
                "mitigates": "Sunucu Sürüm Keşfi (Reconnaissance), Sürüme Özel Hedefli Exploitler"
        },
{
        "tag": "WAF",
        "title": "Web Application Firewall (Web Uygulama Güvenlik Duvarı)",
        "category": "defense",
        "desc": "Web uygulamasına gelen HTTP/HTTPS isteklerini uygulama katmanında (Layer 7) inceleyen; SQLi, XSS, CSRF gibi saldırıları sunucuya ulaşmadan önce engelleyen kalkandır.",
        "analogy": "Havalimanı kapısındaki x-ray ve bagaj tarama cihazıdır. İçeriye girmek isteyen her yolcunun çantasını açıp yasaklı sıvı veya kesici alet arar.",
        "mitigates": "OWASP Top 10 Zafiyetleri, SQL Injection, Cross-Site Scripting, HTTP Flood",
        "cmd": "modsecurity -t /etc/nginx/modsec/main.conf"
},
        {
        "tag": "SIEM",
        "title": "Security Information & Event Management (Merkezi Log ve Olay Yönetimi)",
        "category": "defense",
        "desc": "Tüm güvenlik duvarları, sunucular, veritabanları ve uç noktalardan gelen milyonlarca logu tek merkezde toplayıp korelasyon kurarak şüpheli olayları alarmlaştıran beyindir.",
        "analogy": "Koca bir şehrin tüm MOBESE kameralarını, trafik ışıklarını ve yangın sensörlerini tek bir odada toplayıp şüpheli bir aracı anında takip eden afet koordinasyon merkezidir.",
        "mitigates": "Log Dağınıklığı, Kör Noktalar, Geç Tehdit Tespiti"
},
        {
        "tag": "SOAR",
        "title": "Security Orchestration, Automation & Response (Siber Güvenlik Otomasyonu)",
        "category": "defense",
        "desc": "SIEM'in ürettiği alarmları insan müdahalesi beklemeden önceden tanımlı senaryolarla (Playbook) saniyeler içinde otomatik çözüme ulaştıran (IP engelleme, hesabı kilitleme) orkestrasyondur.",
        "analogy": "Evde duman kokusu alındığında insanın düğmeye basmasını beklemeden yangın vanalarını açıp itfaiyeyi otomatik arayan akıllı yangın söndürme sistemidir.",
        "mitigates": "Analist Alarm Yorgunluğu (Alert Fatigue), Yavaş Olay Müdahale Süreleri"
},
        {
        "tag": "DLP",
        "title": "Data Loss Prevention (Veri Sızıntısı ve Kaybı Önleme)",
        "category": "defense",
        "desc": "Kurum içindeki kredi kartı numaraları, TC kimlikleri veya gizli şirket belgelerinin e-posta, USB bellek veya bulut yüklemeleriyle dışarı kaçırılmasını engelleyen güvenlik çözümüdür.",
        "analogy": "Bir fabrikanın çıkışındaki güvenlik dedektörünün personelin çantasındaki şirket malını algılayıp kapıları kilitlemesi gibidir.",
        "mitigates": "İç Tehditler (Insider Threat), Veri Sızıntıları, KVKK / GDPR İhlalleri"
},
        {
        "tag": "XDR",
        "title": "Extended Detection & Response (Genişletilmiş Tehdit Avı)",
        "category": "defense",
        "desc": "Yalnızca bilgisayarları değil; ağ trafiğini, bulut hesaplarını ve e-postaları tek bir yapay zeka motoruyla birleştirerek sofistike saldırı zincirlerini uçtan uca yakalayan sistemdir.",
        "analogy": "Hem binanın içindeki kameraları, hem dış kapıdaki nöbetçiyi, hem de helikopter pistini aynı anda dinleyip şüpheliyi her noktada takip eden koruma ordusudur.",
        "mitigates": "Gelişmiş Kalıcı Tehditler (APT), Çok Kanallı Saldırılar"
},
        {
        "tag": "WATERING-HOLE",
        "title": "Watering Hole Saldırısı (Su Kaynağı Pusu Tekniği)",
        "category": "attacks",
        "desc": "Hedef şirkete doğrudan saldırmak yerine, şirket çalışanlarının sık sık ziyaret ettiği güvenilir sektörel bir web sitesini (örneğin mühendislik forumu) ele geçirip oraya zararlı kod yerleştirme taktiğidir.",
        "analogy": "Aslanın ceylanları tek tek kovalamak yerine, tüm ceylanların her akşam su içtiği nehir kenarındaki gölette pusuya yatması gibidir.",
        "mitigates": "Web Filtreleme, Tarayıcı İzolasyonu (RBI), Güncel Sandbox Taramaları"
},
        {
        "tag": "ARP-SPOOF",
        "title": "ARP Poisoning / Spoofing (Yerel Ağ Sahteciliği)",
        "category": "network",
        "desc": "Aynı yerel ağdaki (LAN) bilgisayarlara sahte ARP yanıtları göndererek kendini modem (Router / Gateway) gibi tanıtıp tüm ağ trafiğini kendi üzerinden geçirme saldırısıdır.",
        "analogy": "Sınıfta öğretmenin 'Müdür kim?' sorusuna arka sıradaki afacan öğrencinin ayağa kalkıp 'Benim!' diyerek tüm evrakları kendi masasına yönlendirmesi gibidir.",
        "mitigates": "Dynamic ARP Inspection (DAI), Statik ARP Tabloları, 802.1X Port Güvenliği",
        "cmd": "arpspoof -i eth0 -t 192.168.1.100 192.168.1.1"
},
        {
        "tag": "BGP-HIJACK",
        "title": "BGP Hijacking (Küresel İnternet Rota Gaspı)",
        "category": "network",
        "desc": "İnternet servis sağlayıcıları arasındaki Border Gateway Protocol anonslarını sahte rotalarla yanıltarak tüm dünya internet trafiğini veya belirli bir IP bloğunu başka bir ülkeye saptırma saldırısıdır.",
        "analogy": "Otoyoldaki 'Ankara' tabelasını gizlice söküp 'Çıkmaz Sokak' yönüne çevirerek tüm arabaları kendi benzinliğine mecbur bırakmak gibidir.",
        "mitigates": "RPKI (Resource Public Key Infrastructure) Doğrulaması, ROA İmzaları"
},
        {
        "tag": "DDOS-SYN",
        "title": "SYN Flood & Distributed Denial of Service (DDoS)",
        "category": "network",
        "desc": "Milyonlarca zombi bilgisayardan (Botnet) aynı anda hedefe eksik TCP el sıkışma paketleri (SYN) yağdırarak sunucunun bağlantı tablosunu tüketip çökertme saldırısıdır.",
        "analogy": "Bir kafeye aynı anda 1000 kişinin girip 'Bir çay ver' demesi ama parayı ödemeden kapıda dikilerek gerçek müşterilerin içeri girmesine engel olması gibidir.",
        "mitigates": "SYN Cookies, Anycast DNS Yönlendirmesi, Cloudflare / Akamai DDoS Koruması",
        "cmd": "hping3 -S -p 80 --flood 10.0.0.1"
},
        {
        "tag": "SYN-SCAN",
        "title": "SYN Stealth Scan (-sS Gizli Port Taraması)",
        "category": "network",
        "desc": "TCP 3 yönlü el sıkışmasını tamamlamadan (SYN gönderip SYN-ACK aldıktan sonra RST atarak) portun açık olup olmadığını anlayan ve eski sistem loglarında iz bırakmayan taramadır.",
        "analogy": "Bir evin kapısını çalıp içeriden 'Kim o?' sesini duyar duymaz kapı açılmadan arkasını dönüp kaçmak gibidir. Evde birinin olduğunu anlarsınız ama içeri girmezsiniz.",
        "mitigates": "Stateful Firewall Kuralı, Snort/Suricata Port Tarama İmzaları",
        "cmd": "nmap -sS -Pn 192.168.1.50"
},
        {
        "tag": "CIDR-SUBNET",
        "title": "Subnetting & CIDR (Alt Ağ Maskeleme: /24, /16)",
        "category": "network",
        "desc": "Büyük bir IP havuzunu mantıksal küçük güvenlik bölgelerine ayırma yöntemidir. Örneğin /24 notasyonu ilk 24 bitin ağ adresi, son 8 bitin (254 host) cihaz adresi olduğunu belirtir.",
        "analogy": "Büyük bir şirketin genel binasını Muhasebe, İK ve Yazılım diye ayrı katlara bölüp kapılarına güvenlik kilidi takmak gibidir.",
        "mitigates": "Geniş Yayın (Broadcast) Fırtınaları, Kontrolsüz Yatay Ağ Geçişi (Lateral Movement)",
        "cmd": "ipcalc 192.168.1.0/24"
},
        {
        "tag": "VLAN",
        "title": "Virtual Local Area Network (Sanal Ağ İzolasyonu)",
        "category": "network",
        "desc": "Aynı fiziksel ağ anahtarı (Switch) üzerindeki portları yazılımsal olarak birbirinden tamamen bağımsız ve birbirini göremeyen sanal ağlara (VLAN 10, VLAN 20) ayırma teknolojisidir.",
        "analogy": "Aynı apartmanda yan yana oturan komşuların birbirinin dairesine kapıdan geçememesi, yalnızca ortak binada bulunmaları gibidir.",
        "mitigates": "Ağ Dinleme (Sniffing), Yetkisiz Dahili Ağ Sızmaları"
},
        {
        "tag": "TOR-ROUTING",
        "title": "Onion Routing (Soğan Yönlendirme & Anonimlik)",
        "category": "network",
        "desc": "Veriyi kat kat şifreleyerek dünya çapındaki gönüllü aktarıcılar (Entry, Middle, Exit Node) üzerinden sektiren; ne kaynak ne hedef sunucunun kimliği tek başına bilemediği anonim ağdır.",
        "analogy": "Mektubu iç içe 3 farklı kilitli zarfa koyup 3 farklı kuryeye teslim etmek gibidir. Hiçbir kurye mektubun asıl sahibini ve son varış noktasını aynı anda bilmez.",
        "mitigates": "Coğrafi IP Takibi, Sansür ve Trafik Analizi"
},
        {
        "tag": "SMB-RELAY",
        "title": "SMB Relay & NTLM NetNTLMv2 Aktarım Saldırısı",
        "category": "attacks",
        "desc": "Ağdaki bir kullanıcının SMB üzerinden gönderdiği NTLM kimlik doğrulama isteğini yakalayıp şifresini kırmadan doğrudan ağdaki başka bir sunucuya ileterek oturum açma saldırısıdır.",
        "analogy": "Bir kişinin başkasının kimlik kartını alıp fotoğrafına bakmadan güvenlik görevlisine 'Ben buyum' diyerek içeri sızması gibidir.",
        "mitigates": "SMB Signing Zorunluluğu, NTLMv1 Devre Dışı Bırakılması",
        "cmd": "ntlmrelayx.py -tf targets.txt -smb2support"
},
        {
        "tag": "PASS-THE-HASH",
        "title": "Pass-the-Hash (Parolayı Kırmadan Hash ile Giriş)",
        "category": "attacks",
        "desc": "Windows işletim sisteminde kurbanın açık metin şifresini bilmeye gerek kalmadan, ele geçirilen NTLM hash'ini doğrudan kimlik doğrulama paketine enjekte ederek sisteme sızma tekniğidir.",
        "analogy": "Kasanın anahtarının şifresini bilmek yerine anahtarın bal mumu kalıbını alıp kilide sokarak kapıyı açmak gibidir.",
        "mitigates": "LSA Protection, Credential Guard, Domain Protected Users Grubu",
        "cmd": "psexec.py -hashes :aad3b... admin@10.0.0.5"
},
        {
        "tag": "GOLDEN-TICKET",
        "title": "Kerberos Golden Ticket (Active Directory Mutlak Hükümdarlık)",
        "category": "attacks",
        "desc": "Active Directory'deki KRBTGT hesabının hash'i ele geçirildiğinde, saldırganın istediği kullanıcı adına (hatta sahte kullanıcılara) 10 yıllık sınırsız TGT bileti üreterek ormandaki her makineyi ele geçirmesidir.",
        "analogy": "Devletin darphanesindeki mühür ve kaşe makinesini çalıp kendi adına sınırsız geçerli sahte diplomatik pasaport basmak gibidir.",
        "mitigates": "KRBTGT Parolasının Yılda 2 Kez Düzenli Sıfırlanması, Tiering Mimarisi",
        "cmd": "mimikatz \"kerberos::golden /user:Administrator /domain:corp.local ...\""
},
        {
        "tag": "LFI-RFI",
        "title": "Local File Inclusion & Path Traversal (../../etc/passwd)",
        "category": "attacks",
        "desc": "Web uygulamasının kullanıcıdan aldığı dosya parametresini denetlemeden include etmesi sonucu, saldırganın `../../` karakterleriyle sistemin hassas dosyalarını (/etc/passwd, web.config) okuması veya kod çalıştırmasıdır.",
        "analogy": "Bir kütüphaneciye 'Bana 3. raftaki kitabı getir' demek yerine 'Bana kütüphanenin arka odasındaki gizli kasa defterini getir' deyip kütüphanecinin bunu sorgulamadan getirmesidir.",
        "mitigates": "Girdi Doğrulama (Whitelist), open_basedir Kısıtlaması, Doğrudan Dosya Yolu Kabul Etmeme",
        "cmd": "curl http://target.local/view.php?file=../../../../etc/passwd"
},
        {
        "tag": "RCE",
        "title": "Remote Code Execution (Uzaktan Kod ve Komut Çalıştırma)",
        "category": "attacks",
        "desc": "Saldırganın hedef sunucuda istediği herhangi bir işletim sistemi komutunu (bash/cmd) uzaktan çalıştırabilmesini sağlayan, en yüksek kritiklik seviyesine (CVSS 10.0) sahip zafiyet türüdür.",
        "analogy": "Bir evin kapı zilindeki konuşma butonundan evin içine seslenirken 'Mutfaktaki gazı aç ve kibriti yak' dediğinizde evin içindeki akıllı sistemin bunu yapması gibidir.",
        "mitigates": "exec() / system() / eval() Fonksiyonlarının Yasaklanması, Katı Parametrizasyon, Sandboxing"
},
        {
        "tag": "BUFFER-OVERFLOW",
        "title": "Buffer Overflow (Bellek Taşması & EIP Kontrolü)",
        "category": "attacks",
        "desc": "C/C++ gibi dillerde ayrılan bellek alanından daha fazla veri yazılarak bitişik bellek hücrelerinin (Instruction Pointer - EIP/RIP) ezilmesi ve işlemcinin saldırganın zararlı koduna yönlendirilmesidir.",
        "analogy": "1 litrelik bir sürahiye 5 litre su dökmek gibidir; taşan su masadaki diğer önemli evrakların ve elektrik prizinin üzerine akarak sistemi bozar.",
        "mitigates": "ASLR (Address Space Layout Randomization), DEP / NX Biti, Stack Canaries"
},
        {
        "tag": "BURP-SUITE",
        "title": "Burp Suite (Web Güvenliği ve İstismar Proxy Laboratuvarı)",
        "category": "tools",
        "desc": "Tarayıcı ile web sunucusu arasına oturarak giden ve gelen tüm HTTP paketlerini yakalayan, parametreleri değiştiren, otomatik zafiyet tarayan siber güvenlik uzmanlarının bir numaralı web aracıdır.",
        "analogy": "Mektubu postacıya vermeden önce açıp içindeki kelimeleri silip yerine başka şeyler yazmanızı sağlayan profesyonel bir büyüteçli yazı masası gibidir.",
        "mitigates": "Web Uygulama Güvenlik Testleri, Manuel Pentest Validasyonu"
},
        {
        "tag": "METASPLOIT",
        "title": "Metasploit Framework (Otomatize Exploit Geliştirme Motoru)",
        "category": "tools",
        "desc": "Binlerce doğrulanmış zafiyet sömürü kodunu (Exploit), zararlı yükü (Payload) ve dinleyiciyi (Handler) tek bir konsol altında toplayan dünyanın en popüler sızma testi çerçevesidir.",
        "analogy": "İsviçre çakısının bin kat büyüğü; içinde her türlü kapıyı açacak özel maymuncuk ve aletlerin düzenli çekmecelerde dizildiği bir istismar dolabıdır.",
        "mitigates": "Sistem Yamalama, Düzenli Güvenlik Taramaları",
        "cmd": "msfconsole -q -x 'use exploit/multi/handler; set PAYLOAD ...'"
},
        {
        "tag": "JOHN-RIPPER",
        "title": "John the Ripper (Çevrimdışı Kriptografik Hash Kırıcı)",
        "category": "tools",
        "desc": "Ele geçirilen şifreli hash dosyalarını (MD5, SHA-256, NTLM, Unix crypt) sözlük ve kaba kuvvet yöntemleriyle kendi işlemcinizde kırarak açık metin şifreyi bulan araçtır.",
        "analogy": "Yerde bulduğunuz bir kilitli günlüğü evinize götürüp oturup günlerce farklı kombinasyonlar deneyerek kilidi sessizce açmaya çalışmaktır.",
        "mitigates": "Argon2 / BCrypt Gibi Yavaşlatılmış ve Tuzlanmış Güçlü Algoritmalar",
        "cmd": "john --wordlist=rockyou.txt hashes.txt"
},
        {
        "tag": "AIRCRACK",
        "title": "Aircrack-ng (Wi-Fi Kablosuz Ağ Güvenlik Paketi)",
        "category": "tools",
        "desc": "Kablosuz ağ kartlarını monitör moduna alarak havadaki 802.11 WPA/WPA2 4 yönlü el sıkışma paketlerini yakalayan ve sözlük saldırısıyla Wi-Fi şifresini kıran araç takımıdır.",
        "analogy": "Havada uçuşan radyo dalgalarını özel bir antenle dinleyip iki kişinin fısıldaşırken söylediği gizli parolayı kaydetmek gibidir.",
        "mitigates": "WPA3 Şifreleme, 802.1X Enterprise Doğrulaması, Karmaşık 16+ Parolalar",
        "cmd": "aircrack-ng -w wordlist.txt capture.cap"
},
        {
        "tag": "TCPDUMP-CMD",
        "title": "tcpdump CLI (Komut Satırı Ağ Paketi Röntgeni)",
        "category": "tools",
        "desc": "Grafik arayüzü olmayan sunucularda ağ kartından geçen ham paketleri filtreleyerek analiz etmeyi ve PCAP dosyası olarak kaydetmeyi sağlayan temel ağ dinleme komutudur.",
        "analogy": "Su borusuna şeffaf bir cam takıp içinden geçen her damla suyun rengini ve hızını saymak gibidir.",
        "mitigates": "Şifresiz Protokollerin Tespiti, Ağ Anomalisi Avcılığı",
        "cmd": "tcpdump -i any -nn -s0 -w traffic.pcap"
},
        {
        "tag": "SOC",
        "title": "Security Operations Center (Siber Güvenlik Operasyon Merkezi)",
        "category": "defense",
        "desc": "Kurumun dijital varlıklarını 7/24 kesintisiz izleyen, gelen tehdit alarmlarını filtreleyen, analiz eden ve olaylara ilk müdahaleyi gerçekleştiren uzman ekibin çalıştığı komuta merkezidir.",
        "analogy": "Bir hastanenin acil servis odası gibidir; 24 saat nöbettedirler, ambulans (alarm) geldiğinde hastaya anında müdahale ederler.",
        "mitigates": "Fark Edilmeyen Sızıntılar, Geciken Tehdit Müdahaleleri"
},
        {
        "tag": "CERT-CSIRT",
        "title": "CERT / CSIRT (Siber Olaylara Müdahale Ekibi)",
        "category": "defense",
        "desc": "Büyük bir siber saldırı veya veri ihlali meydana geldiğinde sahaya inen, yangını söndüren, zararlı yazılımı temizleyen ve sistemleri ayağa kaldıran özel harekat siber ekibidir.",
        "analogy": "Yangın çıktığında binaya giren itfaiye ve olay yeri inceleme ekibidir; hem yangını söndürürler hem de yangının nereden başladığını araştırırlar.",
        "mitigates": "Kriz Anında Veri Kaybı, Sistem Çöküşleri, İtibar Kaybı"
},
        {
        "tag": "ASLR-DEP",
        "title": "ASLR & DEP / NX (İşletim Sistemi Bellek Savunma Zırhları)",
        "category": "defense",
        "desc": "ASLR proses belleğindeki fonksiyon adreslerini her çalıştırmada rastgele karıştırır; DEP (Data Execution Prevention) ise veri alanlarında kod çalıştırılmasını engelleyerek bellek istismarlarını felç eder.",
        "analogy": "Bir labirentin tüm odalarının yerini ve kapı numaralarını her 5 dakikada bir otomatik değiştirmek; saldırgan labirenti ezberlese bile içeri girdiğinde kaybolur.",
        "mitigates": "Buffer Overflow, Return-Oriented Programming (ROP), Shellcode Enjeksiyonu"
},
{
        "tag": "TYPOSQUATTING",
        "title": "Typosquatting & URL Hijacking (Yazım Hatası Pusu Saldırısı)",
        "category": "attacks",
        "desc": "Kullanıcıların popüler web adreslerini (örneğin google yerine gogle) yanlış yazmasını fırsat bilip sahte etki alanları kaydederek kurbanı zararlı yazılıma veya oltalamaya çekme tekniğidir.",
        "analogy": "Meşhur bir kebapçının hemen yanına tabeladaki bir harfi değiştirip aynı renkte sahte dükkan açarak müşterileri yanıltmak gibidir.",
        "mitigates": "Benzer Domainlerin Önceden Kurum Tarafından Satın Alınması, DNS Filtreleme"
},
        {
        "tag": "DNS-POISONING",
        "title": "DNS Cache Poisoning / Spoofing (DNS Önbellek Zehirleme)",
        "category": "network",
        "desc": "DNS sunucularının önbelleğine sahte IP adresleri enjekte ederek kullanıcılar banka veya şirket adresini yazdığında onları gizlice saldırganın sahte sunucusuna yönlendirmektir.",
        "analogy": "Postanenin telefon fihristindeki doktorun telefon numarasını silip yerine bir hırsızın numarasını yazmak gibidir; arayan herkes hırsıza bağlanır.",
        "mitigates": "DNSSEC (Domain Name System Security Extensions) İmzaları, Rastgele Kaynak Portu (Kaminisky Yaması)"
},
        {
        "tag": "SUPPLY-CHAIN",
        "title": "Supply Chain Attack (Tedarik Zinciri Siber Saldırısı)",
        "category": "attacks",
        "desc": "Hedef şirkete doğrudan sızmak yerine, şirketin kullandığı güvenilir bir üçüncü parti yazılım kütüphanesini (npm, PyPI) veya güncelleme sunucusunu (SolarWinds) hackleyip zararlı kodu oradan yaymaktır.",
        "analogy": "Kralın sarayına doğrudan saldıramayan bir casusun, saraya her sabah taze ekmek getiren fırıncının ununa zehir karıştırması gibidir.",
        "mitigates": "Yazılım Malzeme Listesi (SBOM), Bağımlılık İmzalaması, Güvenli Kaynak Denetimi"
},
        {
        "tag": "CONTAINER-ESCAPE",
        "title": "Docker & Container Escape (Konteyner İzolasyonunu Kırma)",
        "category": "attacks",
        "desc": "Docker veya Kubernetes konteyneri içine sızan bir saldırganın, zafiyetli Linux cgroups/namespaces veya yetkili bayraklar (--privileged) üzerinden ana fiziksel sunucuya (Host) atlamasıdır.",
        "analogy": "Hapishane hücresindeki mahkumun havalandırma borusunu söküp doğrudan gardiyanın ana nöbet odasına tırmanması gibidir.",
        "mitigates": "Root Olmayan Konteyner Kullanımı (Non-Root User), AppArmor, seccomp Profilleri",
        "cmd": "docker run --rm -it --privileged alpine sh"
},
        {
        "tag": "SHODAN",
        "title": "Shodan (İnternete Bağlı Cihazların Arama Motoru)",
        "category": "tools",
        "desc": "Google web sayfalarını tararken, Shodan dünyadaki tüm internete açık IP'leri tarayarak güvenlik kameraları, endüstriyel SCADA vanaları, sunucular ve açık portları haritalar.",
        "analogy": "Şehirdeki tüm evlerin kapı zillerini tek tek çalıp 'İçeride kim var, kapı kilitli mi?' diye not tutan devasa bir şehir gözlemcisidir.",
        "mitigates": "Açık Yönetim Portlarının İnternetten Kapatılması, VPN Zorunluluğu",
        "cmd": "shodan host 8.8.8.8"
},
        {
        "tag": "K8S-RBAC",
        "title": "Kubernetes RBAC & Cluster Security (K8s Küme Güvenliği)",
        "category": "defense",
        "desc": "Mikroservis mimarilerinde pod'ların, servis hesaplarının ve kullanıcıların sadece kendilerine tahsis edilen namespace ve API endpoint'lerine erişebilmesini sağlayan rol bazlı kurallar bütünüdür.",
        "analogy": "Havalimanındaki temizlik personeli kartının sadece bekleme salonuna açılması, pilot kartının ise sadece kokpite açılması gibi sıkı bir kartlı geçiş hiyerarşisidir.",
        "mitigates": "Konteynerler Arası Yatay Sızma, Küme Seviyesinde Yetki Yükseltme",
        "cmd": "kubectl auth can-i create pods --as=developer"
},
        {
        "tag": "PADDING-ORACLE",
        "title": "Padding Oracle Attack (Blok Şifreleme Dolgu Saldırısı)",
        "category": "attacks",
        "desc": "CBC modunda şifrelenmiş verileri çözerken sunucunun verdiği dolgu (padding) hata mesajlarını analiz ederek, gizli anahtara sahip olmadan şifreli metnin bayt bayt açık halini ele geçirme tekniğidir.",
        "analogy": "Kombinasyonlu kasanın çarkını çevirirken kulağınızı kasaya dayayıp doğru sayıya her bastığınızda kasanın içinden gelen küçük 'klik' sesini dinleyerek şifreyi çözmektir.",
        "mitigates": "GCM (Galois/Counter Mode) Gibi Doğrulanmış Şifreleme (AEAD) Kullanımı"
},
        {
        "tag": "STUXNET",
        "title": "Stuxnet & SCADA / ICS Siber Fiziksel Silahları",
        "category": "attacks",
        "desc": "İran nükleer santrallerindeki uranyum zenginleştirme santrifüjlerinin motor hızlarını değiştirerek fiziksel olarak parçalanmalarını sağlayan dünyanın ilk siber-fiziksel silahıdır.",
        "analogy": "Fabrikanın kazan dairesindeki sıcaklık göstergesini normal gösterirken arkadan vanayı sonuna kadar açarak kazanı patlatan görünmez hayalet casus gibidir.",
        "mitigates": "Hava Boşluğu (Air-Gap), PLC Yazılım Bütünlük Doğrulaması, SCADA İzolasyonu"
},
];
    window.glossaryData = glossaryData;


    function bindGlossary() {
        const input = document.getElementById('glossary-search-input');
        const pillContainer = document.getElementById('glossary-category-pills');
        const container = document.getElementById('glossary-cards-container');
        const badgeCount = document.getElementById('glossary-badge-count');

        let activeCat = 'all';

        if (badgeCount) {
            badgeCount.textContent = `${glossaryData.length}+ KAPSAMLI SİBER TERİM & ANALOJİ`;
        }
        if (pillContainer) {
            const allPill = pillContainer.querySelector('.filter-pill[data-cat="all"]');
            if (allPill) allPill.textContent = `Tümü (${glossaryData.length}+)`;
        }

        function applyFilter() {
            const query = input ? input.value : '';
            renderGlossary(activeCat, query);
        }

        if (input) input.addEventListener('input', applyFilter);

        // Fixed pill click listener with delegation
        if (pillContainer) {
            pillContainer.addEventListener('click', (e) => {
                const pill = e.target.closest('.filter-pill');
                if (!pill) return;
                pillContainer.querySelectorAll('.filter-pill').forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                activeCat = pill.dataset.cat || 'all';
                applyFilter();
            });
        }

        // Delegated click handler for copy/run buttons inside glossary cards
        if (container) {
            container.addEventListener('click', (e) => {
                const copyBtn = e.target.closest('.btn-cmd-copy');
                if (copyBtn) {
                    e.stopPropagation();
                    const text = copyBtn.dataset.copy || '';
                    if (!text) return;
                    navigator.clipboard.writeText(text).then(() => {
                        const orig = copyBtn.textContent;
                        copyBtn.textContent = '✔ Kopyalandı!';
                        copyBtn.style.color = 'var(--green)';
                        showToast('success', 'Komut Kopyalandı', `"${text}" panoya kopyalandı.`);
                        setTimeout(() => {
                            copyBtn.textContent = orig;
                            copyBtn.style.color = '';
                        }, 1800);
                    });
                    return;
                }

                const runBtn = e.target.closest('.btn-cmd-run');
                if (runBtn) {
                    e.stopPropagation();
                    const cmd = runBtn.dataset.run || '';
                    if (!cmd) return;
                    if (typeof window.runKaliCommand === 'function') {
                        window.runKaliCommand(cmd);
                        showToast('info', 'Kali Terminali Devrede', `"${cmd}" terminalde çalıştırıldı.`);
                    }
                }
            });
        }

        // Initial render
        renderGlossary('all', '');
    }

    function renderGlossary(category, query) {
        const container = document.getElementById('glossary-cards-container');
        if (!container) return;

        const catMeta = {
            auth: { label: 'Kimlik & Oturum', icon: '🔐' },
            network: { label: 'Ağ & Protokol', icon: '🌐' },
            attacks: { label: 'Saldırı Türü', icon: '⚔️' },
            defense: { label: 'Savunma & Kripto', icon: '🛡️' },
            tools: { label: 'Siber Araç (Kali)', icon: '💻' }
        };

        function renderMitigationPills(mitigatesStr) {
            if (!mitigatesStr) return '';
            return mitigatesStr
                .split(',')
                .map(s => s.trim())
                .filter(Boolean)
                .map(pill => `<span class="mitigation-tag-pill">${escapeHtml(pill)}</span>`)
                .join('');
        }

        const q = (query || '').toLowerCase().trim();
        const filtered = glossaryData.filter(item => {
            const matchesCat = category === 'all' || item.category === category;
            const matchesQuery = !q ||
                item.tag.toLowerCase().includes(q) ||
                item.title.toLowerCase().includes(q) ||
                item.desc.toLowerCase().includes(q) ||
                item.analogy.toLowerCase().includes(q) ||
                (item.cmd && item.cmd.toLowerCase().includes(q));
            return matchesCat && matchesQuery;
        });

        if (filtered.length === 0) {
            container.innerHTML = `
                <div style="grid-column: 1/-1; text-align: center; padding: 48px; background: var(--bg-card); border-radius: var(--radius-lg); border: 1px solid var(--border);">
                    <p style="color: var(--text-muted); font-size: 14px;">"${escapeHtml(query)}" terimi bulunamadı.</p>
                </div>
            `;
            return;
        }

        container.innerHTML = filtered.map(item => {
            const meta = catMeta[item.category] || { label: item.category.toUpperCase(), icon: '🛡️' };
            return `
                <div class="glossary-card cat-${escapeHtml(item.category)}" data-reveal>
                    <div class="glossary-card-header">
                        <div class="glossary-badges-row">
                            <span class="glossary-tag-badge">${escapeHtml(item.tag)}</span>
                            <span class="glossary-cat-badge cat-${escapeHtml(item.category)}">
                                ${meta.icon} ${escapeHtml(meta.label)}
                            </span>
                        </div>
                        <span class="glossary-watermark">A-Z</span>
                    </div>

                    <h3 class="glossary-title">${escapeHtml(item.title)}</h3>
                    
                    <p class="glossary-desc">${escapeHtml(item.desc)}</p>

                    <!-- Analogy Callout Box -->
                    <div class="glossary-analogy-box">
                        <div class="glossary-analogy-header">
                            <span class="analogy-icon">💡</span>
                            <span class="analogy-heading">GÜNLÜK HAYATTAN BENZETME</span>
                        </div>
                        <p class="glossary-analogy-quote">“${escapeHtml(item.analogy)}”</p>
                    </div>

                    <!-- Mitigations Tag Row -->
                    <div class="glossary-mitigations-box">
                        <div class="mitigation-header">
                            <span class="mitigation-icon">🛡️</span>
                            <span>KORUDUĞU TEHDİTLER:</span>
                        </div>
                        <div class="mitigation-pills-row">
                            ${renderMitigationPills(item.mitigates)}
                        </div>
                    </div>

                    ${item.cmd ? `
                        <div class="glossary-cli-box">
                            <div class="glossary-cli-header">
                                <span>⚡ İLGİLİ KALİ / GÜVENLİK KOMUTU:</span>
                                <div class="cmd-actions">
                                    <button type="button" class="btn-cmd-copy" data-copy="${escapeHtml(item.cmd)}">📋 Kopyala</button>
                                    <button type="button" class="btn-cmd-run" data-run="${escapeHtml(item.cmd)}">⚡ Çalıştır</button>
                                </div>
                            </div>
                            <div class="glossary-cli-code">
                                <span class="prompt-sign">$</span>
                                <code>${escapeHtml(item.cmd)}</code>
                            </div>
                        </div>
                    ` : ''}
                </div>
                `;
        }).join('');
    }

    // ==========================================

    // ==========================================
    // SİBER CTF ARENASI (6 KADEMELİ OPERASYON MOTORU)
    // ==========================================
    const CTF_MISSIONS = [
        {
            id: 'm1_1',
            level: '1.1',
            levelTier: 1,
            levelLabel: 'SEVİYE 1.1 // ÇAYLAK SEVİYE',
            badgeColor: '#10b981',
            title: 'Operasyon Kapı Çalan (Op: Port Knock)',
            target: '10.10.1.5 (Dış Güvenlik Ağ Geçidi)',
            category: 'Ağ & Port Keşfi',
            xp: 100,
            story: 'Hedef şirketin dışa açık sunucusu (<strong>10.10.1.5</strong>) üzerinde kritik bir güvenlik açığı şüphesi var. Önce sunucunun ayakta olduğunu <code>ping</code> ile doğrula, ardından servis portlarını <code>nmap</code> ile tara ve HTTP yanıt başlıklarındaki (Header) Base64 kodlu gizli anahtarı çözerek ilk bayrağı kap.',
            tools: ['ping', 'nmap', 'curl', 'base64'],
            quickCmds: [
                'ping -c 3 10.10.1.5',
                'nmap -sV 10.10.1.5',
                'curl -I http://10.10.1.5',
                'echo "TEZMe2xldmVsMV8xX2FnX2tlc2lmX2Jhc2FyYW5zfQ==" | base64 -d'
            ],
            hint: '1) <code>ping -c 3 10.10.1.5</code> ile bağlantıyı test et.<br>2) <code>nmap -sV 10.10.1.5</code> yazarak açık portu gör (Port 80 HTTP açık).<br>3) <code>curl -I http://10.10.1.5</code> ile sunucu yanıt başlıklarını incele.<br>4) Başlıkta gördüğün <code>X-Secret-Auth</code> Base64 değerini <code>echo "..." | base64 -d</code> ile çöz!',
            flag: 'LFL{level1_1_ag_kesif_basarans}',
            successMsg: 'Harika! Ağ keşfini tamamladın ve HTTP başlığına gizlenmiş Base64 tokenını çözdün.'
        },
        {
            id: 'm1_2',
            level: '1.2',
            levelTier: 1,
            levelLabel: 'SEVİYE 1.2 // ÇAYLAK SEVİYE',
            badgeColor: '#10b981',
            title: 'Operasyon Hayalet Not (Op: Phantom Log)',
            target: 'local-audit (/var/backups & /var/log)',
            category: 'Linux Temelleri & Dosya Analizi',
            xp: 150,
            story: 'Sızılan bir Linux sunucusunda şüpheli bir operatör iz bırakıp kaçmış. <code>/var/backups</code> dizinini incele, operatörün bıraktığı nottaki ipucunu oku ve <code>/var/log/syslog</code> içerisinden <strong>LFL{...}</strong> formatındaki bayrağı <code>grep</code> ile filtrele.',
            tools: ['ls', 'cat', 'grep', 'find'],
            quickCmds: [
                'ls -la /var/backups',
                'cat /var/backups/operator_note.txt',
                'grep -i "LFL{" /var/log/syslog'
            ],
            hint: '1) <code>ls -la /var/backups</code> yazarak yedek dizinindeki gizli dosyaları listele.<br>2) <code>cat /var/backups/operator_note.txt</code> dosyasını oku.<br>3) Notta belirtilen log kaydını <code>grep -i "LFL{" /var/log/syslog</code> komutuyla ayıkla!',
            flag: 'LFL{level1_2_linux_dosya_adli_analiz}',
            successMsg: 'Tebrikler! Linux dosya sisteminde iz sürme ve grep ile hassas veri filtreleme görevini başarıyla tamamladın.'
        },
        {
            id: 'm2_1',
            level: '2.1',
            levelTier: 2,
            levelLabel: 'SEVİYE 2.1 // OPERATÖR SEVİYE',
            badgeColor: '#00e5ff',
            title: 'Operasyon Derin Dizin (Op: Deep Enum)',
            target: 'http://10.10.2.10 (İntranet Web Portalı)',
            category: 'Web Güvenliği & Dizin Avı',
            xp: 250,
            story: 'Hedef intranet portalında (<strong>10.10.2.10</strong>) gizli bir robot direktifi ve konfigürasyon yedeği unutulmuş. <code>whatweb</code> ile altyapıyı incele, <code>gobuster</code> ile gizli dizinleri tara, <code>robots.txt</code> dosyasındaki gizli yolu bulup json verisindeki bayrağı çek.',
            tools: ['whatweb', 'gobuster', 'curl', 'nikto'],
            quickCmds: [
                'whatweb http://10.10.2.10',
                'gobuster dir -u http://10.10.2.10 -w common.txt',
                'curl http://10.10.2.10/robots.txt',
                'curl http://10.10.2.10/admin_vault/confidential_token.json'
            ],
            hint: '1) <code>whatweb http://10.10.2.10</code> ile web teknolojilerini gör.<br>2) <code>gobuster dir -u http://10.10.2.10 -w common.txt</code> ile gizli yolları keşfet.<br>3) <code>curl http://10.10.2.10/robots.txt</code> dosyasını oku.<br>4) Oradaki <code>/admin_vault/confidential_token.json</code> yolunu curl ile aç!',
            flag: 'LFL{level2_1_web_dizin_firtinasi}',
            successMsg: 'Kusursuz! Web dizin taraması (directory brute-force) ve robots.txt analiziyle gizli anahtarı ele geçirdin.'
        },
        {
            id: 'm2_2',
            level: '2.2',
            levelTier: 2,
            levelLabel: 'SEVİYE 2.2 // OPERATÖR SEVİYE',
            badgeColor: '#00e5ff',
            title: 'Operasyon Gömülü Bellek (Op: Memory Forensics)',
            target: '/evidence/suspect_payload.bin (Adli Bilişim)',
            category: 'Adli Bilişim & Kripto',
            xp: 300,
            story: 'Ele geçirilen şüpheli bir ikili bellek dökümü (<strong>/evidence/suspect_payload.bin</strong>) analiz masasında. <code>file</code> komutuyla dosya türünü doğrula, <code>strings</code> ile ikili dosyadaki okunabilir metinleri dök ve <code>md5sum</code> ile bütünlüğünü kontrol et.',
            tools: ['file', 'strings', 'binwalk', 'md5sum'],
            quickCmds: [
                'file /evidence/suspect_payload.bin',
                'strings /evidence/suspect_payload.bin | grep "LFL{"',
                'md5sum /evidence/suspect_payload.bin'
            ],
            hint: '1) <code>file /evidence/suspect_payload.bin</code> komutuyla dosya tipini gör.<br>2) <code>strings /evidence/suspect_payload.bin | grep "LFL{"</code> komutunu çalıştırarak ikili dosyanın içindeki gizli bayrağı anında ayıkla!',
            flag: 'LFL{level2_2_adli_bilisim_strings_ustasi}',
            successMsg: 'Harika bir adli bilişim analizi! Gömülü ikili dosya içindeki dizeleri ayıklayarak gizli bayrağa ulaştın.'
        },
        {
            id: 'm3_1',
            level: '3.1',
            levelTier: 3,
            levelLabel: 'SEVİYE 3.1 // ROOT HACKER SEVİYE',
            badgeColor: '#ef4444',
            title: 'Operasyon Kale Kuşatması (Op: Fortress Breach)',
            target: '10.10.3.50 (Kilitli Linux & SSH)',
            category: 'Kaba Kuvvet (Brute Force) & SUID PrivEsc',
            xp: 500,
            story: 'Korumalı Linux sunucusu (<strong>10.10.3.50</strong>) zayıf bir SSH parolası kullanıyor. <code>hydra</code> ile parola kırma saldırısı yap, sisteme <code>ssh</code> ile bağlan, ardından <code>find</code> ile SUID izinli dosya açığını tespit edip root haklarıyla <code>/root/flag.txt</code> dosyasını ele geçir.',
            tools: ['hydra', 'ssh', 'find', 'sudo', 'cat'],
            quickCmds: [
                'hydra -l operator -P rockyou.txt 10.10.3.50 ssh',
                'ssh operator@10.10.3.50',
                'find / -perm -4000 2>/dev/null',
                'cat /root/flag.txt'
            ],
            hint: '1) <code>hydra -l operator -P rockyou.txt 10.10.3.50 ssh</code> ile şifreyi kır.<br>2) <code>ssh operator@10.10.3.50</code> ile bağlan.<br>3) <code>find / -perm -4000 2>/dev/null</code> ile SUID açıklarını listele.<br>4) <code>cat /root/flag.txt</code> veya <code>sudo cat /root/flag.txt</code> ile son bayrağı oku!',
            flag: 'LFL{level3_1_suid_privesc_root_fatihi}',
            successMsg: 'İnanılmaz bir sızma! SSH kaba kuvvet saldırısı ve SUID yetki yükseltme (Privilege Escalation) ile tam yetkili root oldun.'
        },
        {
            id: 'm3_2',
            level: '3.2',
            levelTier: 3,
            levelLabel: 'SEVİYE 3.2 // BÜYÜK FİNAL & ŞAMPİYONLUK',
            badgeColor: '#c084fc',
            title: 'Operasyon Büyük Sızıntı (Op: Grand SQLi - Final Boss)',
            target: 'http://10.10.3.99/api/search?q=test (Finansal Veritabanı)',
            category: 'SQL Injection & Veritabanı Sızması',
            xp: 1000,
            story: 'Büyük final operasyonu! Hedef finans kurumunun arama API\'sinde SQL Injection zafiyeti keşfedildi. <code>sqlmap</code> ile veritabanlarını listele, <code>lfl_master_vault</code> veritabanındaki tabloları dök ve nihai şampiyon bayrağını ele geçir.',
            tools: ['sqlmap', 'curl', 'tcpdump'],
            quickCmds: [
                'curl "http://10.10.3.99/api/search?q=test"',
                'sqlmap -u "http://10.10.3.99/api/search?q=test" --dbs',
                'sqlmap -u "http://10.10.3.99/api/search?q=test" -D lfl_master_vault --tables',
                'sqlmap -u "http://10.10.3.99/api/search?q=test" -D lfl_master_vault -T master_classified_flags --dump'
            ],
            hint: '1) <code>curl "http://10.10.3.99/api/search?q=test"</code> ile API yanıtını gör.<br>2) <code>sqlmap -u "http://10.10.3.99/api/search?q=test" --dbs</code> ile veritabanlarını çek.<br>3) <code>sqlmap ... -D lfl_master_vault --tables</code> ile tabloları listele.<br>4) <code>sqlmap ... -T master_classified_flags --dump</code> ile şampiyonluk bayrağını dök!',
            flag: 'LFL{level3_2_sqli_grand_master_champion_2026}',
            successMsg: '🏆 TEBRİKLER ŞAMPİYON! SQL Injection zafiyetini sömürerek büyük final veritabanını ele geçirdin ve LFL Siber Arenası\'nı %100 tamamladın!'
        }
    ];
    window.CTF_MISSIONS = CTF_MISSIONS;
    

    const ctfState = {
        unlockedIdx: 0,
        activeIdx: 0,
        completed: [],
        xp: 0,
        history: [],
        historyIdx: -1,
        sshSessionActive: false
    };
    window.ctfState = ctfState;


    function loadCtfProgressFromStorage() {
        try {
            const raw = localStorage.getItem('lfl_ctf_state');
            if (raw) {
                const saved = JSON.parse(raw);
                if (saved && typeof saved === 'object') {
                    if (Array.isArray(saved.completed)) ctfState.completed = saved.completed;
                    if (typeof saved.unlockedIdx === 'number') ctfState.unlockedIdx = saved.unlockedIdx;
                    if (typeof saved.activeIdx === 'number') ctfState.activeIdx = saved.activeIdx;
                    if (typeof saved.xp === 'number') ctfState.xp = saved.xp;
                }
            }
        } catch (e) { }
    }

    function saveCtfProgressToStorage() {
        try {
            localStorage.setItem('lfl_ctf_state', JSON.stringify({
                unlockedIdx: ctfState.unlockedIdx,
                activeIdx: ctfState.activeIdx,
                completed: ctfState.completed,
                xp: ctfState.xp
            }));
            localStorage.setItem('lfl_ctf_xp', String(ctfState.xp));
        } catch (e) { }
    }

    function initCtfArena() {
        loadCtfProgressFromStorage();
        ctfState.activeIdx = Math.min(ctfState.unlockedIdx, CTF_MISSIONS.length - 1);
        renderCtfProgress();
        renderCtfStageTabs();
        renderCtfBriefing(ctfState.activeIdx);
        bindCtfTerminal();

        const btnReset = document.getElementById('btn-reset-ctf-progress');
        if (btnReset) {
            btnReset.addEventListener('click', () => {
                if (confirm('Tüm CTF operasyon ilerlemenizi sıfırlayıp 1. seviyeden baştan başlamak istediğinize emin misiniz?')) {
                    resetCtfProgress();
                }
            });
        }
    }

    function resetCtfProgress() {
        ctfState.unlockedIdx = 0;
        ctfState.activeIdx = 0;
        ctfState.completed = [];
        ctfState.xp = 0;
        ctfState.sshSessionActive = false;
        try {
            localStorage.removeItem('lfl_ctf_state');
            localStorage.removeItem('lfl_ctf_xp');
        } catch (e) { }
        renderCtfProgress();
        renderCtfStageTabs();
        renderCtfBriefing(0);
        updateCtfTerminalTarget();
        showToast('info', 'CTF Sıfırlandı', 'Operasyon ilerlemeniz sıfırlandı. Seviye 1.1\'den başlayabilirsiniz.');
    }

    function getCtfRank(count, xp) {
        if (count >= 6) return '🏆 Efsanevi Siber Şampiyon';
        if (count >= 5) return '👑 Root Hacker (Elite)';
        if (count >= 4) return '🔍 Adli Bilişim Uzmanı';
        if (count >= 3) return '⚡ Web Sızma Operatörü';
        if (count >= 2) return '🕵️ Sistem Dedektifi';
        if (count >= 1) return '🌐 Ağ Kaşifi';
        return '🔰 Çaylak Analist';
    }

    function renderCtfProgress() {
        const completedCount = ctfState.completed.length;
        const total = CTF_MISSIONS.length;
        const pct = Math.round((completedCount / total) * 100);

        const textEl = document.getElementById('ctf-progress-text');
        if (textEl) textEl.textContent = `İlerleme: ${completedCount}/${total} Görev Tamamlandı (%${pct})`;

        const xpEl = document.getElementById('ctf-total-xp');
        if (xpEl) xpEl.textContent = `TOPLAM XP: ${ctfState.xp}`;

        const rankEl = document.getElementById('ctf-current-rank');
        if (rankEl) rankEl.textContent = `Rütbe: ${getCtfRank(completedCount, ctfState.xp)}`;

        const fillEl = document.getElementById('ctf-progress-bar-fill');
        if (fillEl) fillEl.style.width = `${pct}%`;
    }

    function renderCtfStageTabs() {
        const nav = document.getElementById('ctf-stage-nav');
        if (!nav) return;

        nav.innerHTML = CTF_MISSIONS.map((m, idx) => {
            const isCompleted = ctfState.completed.includes(m.id);
            const isUnlocked = idx <= ctfState.unlockedIdx;
            const isActive = idx === ctfState.activeIdx;

            let statusIcon = '🔒';
            let statusClass = 'locked';
            let statusText = 'Kilitli';

            if (isCompleted) {
                statusIcon = '✔';
                statusClass = 'completed';
                statusText = 'Bitti';
            } else if (isUnlocked) {
                statusIcon = '⚡';
                statusClass = 'unlocked';
                statusText = 'Açık';
            }

            if (isActive) statusClass += ' active';

            // Clean short title for stepper button
            const shortTitle = m.title.replace('Operasyon ', '').split('(')[0].trim();

            return `
                <div class="ctf-stepper-item ${statusClass}" data-stage-idx="${idx}">
                    <div class="ctf-stepper-top-row">
                        <span style="color: ${m.badgeColor};">SEVİYE ${m.level}</span>
                        <span>${statusIcon} ${statusText}</span>
                    </div>
                    <div class="ctf-stepper-title" title="${escapeHtml(m.title)}">${escapeHtml(shortTitle)}</div>
                </div>
            `;
        }).join('');

        nav.querySelectorAll('.ctf-stepper-item').forEach(item => {
            item.addEventListener('click', () => {
                const idx = parseInt(item.dataset.stageIdx, 10);
                if (idx <= ctfState.unlockedIdx) {
                    ctfState.activeIdx = idx;
                    saveCtfProgressToStorage();
                    renderCtfStageTabs();
                    renderCtfBriefing(idx);
                    updateCtfTerminalTarget();
                } else {
                    showToast('error', 'Kilitli Seviye', `Bu seviyeyi açmak için önce Seviye ${CTF_MISSIONS[idx - 1].level} operasyonunu tamamlamalısınız.`);
                }
            });
        });
    }

    function renderCtfBriefing(idx) {
        const box = document.getElementById('ctf-briefing-box');
        if (!box) return;

        const m = CTF_MISSIONS[idx];
        const isCompleted = ctfState.completed.includes(m.id);

        box.innerHTML = `
            <div class="ctf-card-top">
                <div class="ctf-card-badges">
                    <span class="ctf-mini-pill" style="background: rgba(${hexToRgb(m.badgeColor)}, 0.15); color: ${m.badgeColor}; border: 1px solid ${m.badgeColor};">${escapeHtml(m.levelLabel)}</span>
                    <span class="ctf-mini-pill" style="background: rgba(255, 255, 255, 0.05); color: #cbd5e1; border: 1px solid rgba(255, 255, 255, 0.1);">${escapeHtml(m.category)}</span>
                    <span class="ctf-mini-pill" style="background: rgba(16, 185, 129, 0.15); color: #10b981; border: 1px solid #10b981;">+${m.xp} XP</span>
                </div>
                <div class="ctf-target-label">
                    <span class="pulsing-beacon" style="width: 5px; height: 5px; background: var(--cyan); display: inline-block; vertical-align: middle; margin-right: 4px;"></span>
                    <span>🎯 ${escapeHtml(m.target)}</span>
                </div>
            </div>

            <h2 class="ctf-mission-heading">${escapeHtml(m.title)}</h2>

            <!-- Pure Story Narrative & Directive -->
            <div class="ctf-brief-box">
                ${m.story}
            </div>

            <!-- Tactical Hint Accordion: Commands are displayed only here for manual typing -->
            <div class="ctf-hint-container" id="ctf-hint-accordion">
                <button type="button" class="ctf-hint-btn" id="btn-toggle-ctf-hint">
                    <span style="display: flex; align-items: center; gap: 6px;">💡 Taktik İpucu &amp; Önerilen Kodlar (Takılırsan Tıkla)</span>
                    <span id="ctf-hint-icon">&darr;</span>
                </button>
                <div class="ctf-hint-body" id="ctf-hint-text-area">
                    <div style="margin-bottom: 10px; line-height: 1.55;">${m.hint}</div>
                    <div style="font-family: var(--font-mono); font-weight: 700; color: var(--cyan); margin-bottom: 6px; font-size: 11px;">
                        KULLANILABİLİR KOMUTLAR (Öğrenmek için terminale kendi elinle yaz):
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 5px;">
                        ${m.quickCmds.map(c => `
                            <div style="font-family: var(--font-mono); background: rgba(0, 0, 0, 0.5); border: 1px solid rgba(0, 229, 255, 0.2); padding: 6px 10px; border-radius: 4px; color: #a7f3d0; font-size: 11.5px; user-select: text;">
                                <span style="color: var(--cyan); font-weight: 700;">$</span> ${escapeHtml(c)}
                            </div>
                        `).join('')}
                    </div>
                </div>
            </div>

            <!-- Flag Submission -->
            <div class="ctf-flag-container">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span style="font-size: 11px; font-family: var(--font-mono); font-weight: 700; color: #cbd5e1;">BAYRAK TESLİM ALANI:</span>
                    ${isCompleted ? '<span style="color: #10b981; font-weight: 700; font-size: 10.5px; font-family: var(--font-mono);">✔ ÇÖZÜLDÜ</span>' : ''}
                </div>
                <div class="ctf-flag-row">
                    <input type="text" class="ctf-input-field" id="ctf-flag-input-field" placeholder="Örn: LFL{...}" value="${isCompleted ? m.flag : ''}" ${isCompleted ? 'readonly' : ''} autocomplete="off" spellcheck="false" />
                    <button type="button" class="ctf-btn-verify" id="btn-submit-ctf-flag">
                        <span>🚩 Doğrula</span>
                    </button>
                </div>
                <div class="ctf-alert-box" id="ctf-feedback-msg-box"></div>
            </div>
        `;

        // Hint toggle listener
        const hintBox = document.getElementById('ctf-hint-accordion');
        const btnHint = document.getElementById('btn-toggle-ctf-hint');
        if (hintBox && btnHint) {
            btnHint.addEventListener('click', () => {
                hintBox.classList.toggle('open');
                const icon = document.getElementById('ctf-hint-icon');
                if (icon) icon.textContent = hintBox.classList.contains('open') ? '↑' : '↓';
            });
        }

        // Flag submit listener
        const btnSubmit = document.getElementById('btn-submit-ctf-flag');
        const flagInput = document.getElementById('ctf-flag-input-field');
        if (btnSubmit && flagInput) {
            btnSubmit.addEventListener('click', () => {
                submitCtfFlag(flagInput.value);
            });
            flagInput.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    submitCtfFlag(flagInput.value);
                }
            });
        }
    }

    function hexToRgb(hex) {
        hex = hex.replace('#', '');
        if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
        const num = parseInt(hex, 16);
        return `${(num >> 16) & 255}, ${(num >> 8) & 255}, ${num & 255}`;
    }

    function submitCtfFlag(rawFlag) {
        const flag = (rawFlag || '').trim();
        const m = CTF_MISSIONS[ctfState.activeIdx];
        const feedback = document.getElementById('ctf-feedback-msg-box');

        if (!flag) {
            if (feedback) {
                feedback.className = 'ctf-feedback-msg error';
                feedback.innerHTML = 'Lütfen bir bayrak (LFL{...}) giriniz!';
            }
            return;
        }

        if (flag === m.flag) {


            if (!ctfState.completed.includes(m.id)) {
                ctfState.completed.push(m.id);
                ctfState.xp += m.xp;

                // Unlock next stage
                if (ctfState.activeIdx + 1 > ctfState.unlockedIdx && ctfState.activeIdx + 1 < CTF_MISSIONS.length) {
                    ctfState.unlockedIdx = ctfState.activeIdx + 1;
                }
                saveCtfProgressToStorage();
            }

            if (feedback) {
                feedback.className = 'ctf-feedback-msg success';
                feedback.innerHTML = `<strong>✔ TEBRİKLER!</strong> ${escapeHtml(m.successMsg)} <span style="color: #10b981; font-weight: 700;">(+${m.xp} XP)</span>`;
            }

            showToast('success', 'Bayrak Yakalandı!', `Tebrikler! ${m.title} başarıyla tamamlandı. (+${m.xp} XP)`);

            // Check if all 6 completed
            if (ctfState.completed.length >= CTF_MISSIONS.length) {
                setTimeout(() => {
                    showToast('success', '🏆 CTF Tamamlandı!', 'Tebrikler! 6 kademeli operasyonun tamamını başarıyla bitirdiniz.');
                }, 500);
            }

            renderCtfProgress();
            renderCtfStageTabs();

            // Print in CTF terminal
            printCtfOutput(`\n<span style="color: #10b981; font-weight: 700;">[+] ==============================================================</span>\n<span style="color: #10b981; font-weight: 800;">[+] FLAG CAPTURED: ${escapeHtml(m.flag)}</span>\n<span style="color: #10b981; font-weight: 700;">[+] TEBRİKLER! Seviye ${m.level} başarıyla tamamlandı! (+${m.xp} XP)</span>\n<span style="color: #10b981; font-weight: 700;">[+] ==============================================================</span>\n`);

            // Transition to next level after delay
            if (ctfState.activeIdx < CTF_MISSIONS.length - 1) {
                setTimeout(() => {
                    ctfState.activeIdx++;
                    renderCtfStageTabs();
                    renderCtfBriefing(ctfState.activeIdx);
                    updateCtfTerminalTarget();
                }, 1600);
            }
        } else {

            if (feedback) {
                feedback.className = 'ctf-feedback-msg error';
                feedback.innerHTML = '❌ Hatalı bayrak! Lütfen terminaldeki çıktıları ve ipucunu dikkatlice inceleyerek tekrar deneyin.';
            }
            showToast('error', 'Hatalı Bayrak', 'Girdiğiniz bayrak bu görevle eşleşmedi. İpuçlarını kontrol edin.');
        }
    }

    function updateCtfTerminalTarget() {
        const m = CTF_MISSIONS[ctfState.activeIdx];
        ctfState.sshSessionActive = false;

        // 1. Her yeni seviyede terminali tamamen temizle
        clearCtfTerminal();

        // 2. Prompt etiketini varsayılana getir
        const promptEl = document.getElementById('ctf-term-prompt-label');
        if (promptEl) promptEl.textContent = 'root@kali-ctf:~#';

        // 3. Başlık çubuğundaki hedef bilgisini güncelle
        const badgeText = document.getElementById('ctf-term-title-text');
        if (badgeText) {
            badgeText.textContent = `root@kali-ctf:~# [${m.target}]`;
        }

        // 4. Yeni seviye için tertemiz ve net karşılama mesajı bas
        printCtfOutput(`
<span style="color: #00e5ff; font-weight: 800;">┌──(root㉿kali-ctf)-[~]</span>
<span style="color: #94a3b8;">│ LFL CTF OPERASYONU // SEVİYE ${m.level}: ${escapeHtml(m.title)}</span>
<span style="color: #94a3b8;">│ Hedef Sistem: ${escapeHtml(m.target)}</span>
<span style="color: #00e5ff; font-weight: 800;">└─#</span> <span style="color: #10b981;">Terminal temizlendi ve hazırlandı. Komutları aşağıya yazıp Enter'a basın.</span>
        `);

        // 5. Giriş alanını temizle ve odakla
        const input = document.getElementById('ctf-term-command-input');
        if (input) {
            input.value = '';
            input.focus();
        }
    }

    function printCtfOutput(html) {
        const out = document.getElementById('ctf-term-output-area');
        if (!out) return;
        const div = document.createElement('div');
        div.innerHTML = html;
        out.appendChild(div);

        const screen = document.getElementById('ctf-term-screen');
        if (screen) screen.scrollTop = screen.scrollHeight;
    }

    function clearCtfTerminal() {
        const out = document.getElementById('ctf-term-output-area');
        if (out) out.innerHTML = '';
    }

    function resetCtfTerminal() {
        clearCtfTerminal();
        const m = CTF_MISSIONS[ctfState.activeIdx];
        printCtfOutput(`
<span style="color: #00e5ff; font-weight: 800;">┌──(root㉿kali-ctf)-[~]</span>
<span style="color: #94a3b8;">│ LFL SİBER CTF OPERASYON LABORATUVARI // KADEME: SEVİYE ${m.level}</span>
<span style="color: #94a3b8;">│ Hedef Sistem: ${escapeHtml(m.target)}</span>
<span style="color: #94a3b8;">│ Sadece kütüphanedeki 142 Kali Linux kodu kullanılabilir.</span>
<span style="color: #00e5ff; font-weight: 800;">└─#</span> <span style="color: #10b981;">Simülasyon hazır. Başlamak için soldaki komutlara tıklayın veya doğrudan yazın.</span>
        `);
    }

    function bindCtfTerminal() {
        resetCtfTerminal();

        const input = document.getElementById('ctf-term-command-input');
        const btnClear = document.getElementById('btn-clear-ctf-term');
        const btnReset = document.getElementById('btn-reset-ctf-term');

        if (btnClear) btnClear.addEventListener('click', clearCtfTerminal);
        if (btnReset) btnReset.addEventListener('click', resetCtfTerminal);

        let ctfTabCursor = -1;
        let lastCtfPrefix = null;

        if (input) {
            input.addEventListener('keydown', (e) => {
                if (e.key === 'Enter') {
                    const cmd = input.value.trim();
                    if (!cmd) return;

                    ctfState.history.push(cmd);
                    ctfState.historyIdx = ctfState.history.length;
                    input.value = '';
                    ctfTabCursor = -1;
                    lastCtfPrefix = null;

                    executeCtfCommand(cmd);
                } else if (e.key === 'Tab') {
                    // TAB KEY AUTO-COMPLETION (Oto Tamamlama)
                    e.preventDefault();
                    const m = CTF_MISSIONS[ctfState.activeIdx];
                    const missionCmds = (m && m.quickCmds) ? m.quickCmds : [];
                    const baseCmds = ['help', 'clear', 'whoami', 'id', 'pwd', 'ls -la', 'uname -a'];
                    const academyCmds = (window.ACADEMY_COMMANDS || []).map(c => c.cmd);
                    const pool = Array.from(new Set([...missionCmds, ...baseCmds, ...academyCmds]));

                    const currentVal = input.value.trim();
                    const currentLower = currentVal.toLowerCase();
                    let matches = [];

                    if (!currentVal) {
                        // Empty line: cycle through current mission's recommended commands!
                        matches = missionCmds.length > 0 ? missionCmds : pool.slice(0, 8);
                    } else {
                        // Priority 1: Mission commands that start with currentVal
                        const mPrefix = missionCmds.filter(c => c.toLowerCase().startsWith(currentLower));
                        // Priority 2: All 142 Kali commands that start with currentVal
                        const allPrefix = pool.filter(c => c.toLowerCase().startsWith(currentLower));
                        // Priority 3: Substring matches
                        const allSubstr = pool.filter(c => !c.toLowerCase().startsWith(currentLower) && c.toLowerCase().includes(currentLower));

                        matches = Array.from(new Set([...mPrefix, ...allPrefix, ...allSubstr]));

                        // If user typed "sub" or "lfl", offer submitting flag directly
                        if (currentLower.startsWith('sub') || currentLower.startsWith('lfl')) {
                            if (m && m.flag) {
                                matches.unshift(`submit ${m.flag}`);
                            }
                        }
                    }

                    if (matches.length > 0) {
                        if (lastCtfPrefix === currentLower) {
                            ctfTabCursor = (ctfTabCursor + 1) % matches.length;
                        } else {
                            ctfTabCursor = 0;
                            lastCtfPrefix = currentLower;
                        }
                        input.value = matches[ctfTabCursor];
                        input.selectionStart = input.selectionEnd = input.value.length;
                    }
                } else if (e.key === 'ArrowUp') {
                    e.preventDefault();
                    lastCtfPrefix = null;
                    if (ctfState.historyIdx > 0) {
                        ctfState.historyIdx--;
                        input.value = ctfState.history[ctfState.historyIdx] || '';
                    }
                } else if (e.key === 'ArrowDown') {
                    e.preventDefault();
                    lastCtfPrefix = null;
                    if (ctfState.historyIdx < ctfState.history.length - 1) {
                        ctfState.historyIdx++;
                        input.value = ctfState.history[ctfState.historyIdx] || '';
                    } else {
                        ctfState.historyIdx = ctfState.history.length;
                        input.value = '';
                    }
                } else {
                    lastCtfPrefix = null;
                }
            });
        }
    }

    function executeCtfCommand(rawCmd) {
        const cmd = rawCmd.trim();
        const lower = cmd.toLowerCase();
        const m = CTF_MISSIONS[ctfState.activeIdx];
        const promptLabel = ctfState.sshSessionActive ? 'operator@fortress:~$' : 'root@kali-ctf:~#';

        // Echo prompt & command
        printCtfOutput(`<div style="margin-top: 6px;"><span style="color: #00e5ff; font-weight: 700;">${promptLabel}</span> <span style="color: #ffffff;">${escapeHtml(cmd)}</span></div>`);

        // Check clear
        if (lower === 'clear' || lower === 'cls') {
            clearCtfTerminal();
            return;
        }

        // Direct flag submission via terminal
        if (lower.startsWith('submit ') || lower.startsWith('lfl{')) {
            const flagCandidate = cmd.startsWith('submit ') ? cmd.substring(7).trim() : cmd;
            submitCtfFlag(flagCandidate);
            return;
        }

        // God Mode for burak_wyxz
        if (lower === 'godmode' || lower === 'admin') {
            const isAdmin = state.currentUser && state.currentUser.username === 'burak_wyxz';
            if (isAdmin) {
                printCtfOutput(`
<pre style="color: #10b981; font-weight: 800; font-family: var(--font-mono);">
[★] ==============================================================
[★] LFL CYBER CTF // ROOT MASTER CONSOLE (burak_wyxz)
[★] ==============================================================
[+] Operatör          : burak_wyxz (Baş Yönetici)
[+] CTF Puanı         : ${ctfState.xp} XP
[+] Tamamlanan Görev  : ${ctfState.completed.length} / ${CTF_MISSIONS.length}
[+] İpucu             : '👑 Master Root Key' butonuna basarak tüm aşamaları anında açabilirsiniz.
[★] ==============================================================
</pre>`);
            } else {
                printCtfOutput(`<span style="color: #ef4444; font-weight: 700;">[!] Erişim Reddedildi: God Mode yalnızca yönetici burak_wyxz içindir.</span>`);
            }
            return;
        }

        // Help
        if (lower === 'help') {
            printCtfOutput(`
<pre style="color: #38bdf8;">
LFL CYBER CTF // YARDIM &amp; KULLANILABİLİR KOMUTLAR
===================================================================
Bu operasyonda LFL Siber Kütüphanesi'ndeki 142 Kali aracı çalışır.
Aktif Seviye (${m.level}) için önerilen komutlar:
  ${m.tools.map(t => `<span style="color: #22c55e; font-weight: 700;">${t}</span>`).join(' &bull; ')}

Hızlı Kullanım:
  submit LFL{...}           : Bulduğun bayrağı terminalden teslim et
  clear                     : Ekranı temizle
  help                      : Bu yardım ekranını göster
</pre>
            `);
            return;
        }

        // Standard Linux inspection commands
        if (lower === 'whoami') {
            printCtfOutput(`<pre style="color: #a7f3d0;">${ctfState.sshSessionActive ? 'operator' : 'root'}</pre>`);
            return;
        }
        if (lower === 'pwd') {
            printCtfOutput(`<pre style="color: #a7f3d0;">${ctfState.sshSessionActive ? '/home/operator' : '/root'}</pre>`);
            return;
        }
        if (lower === 'id') {
            printCtfOutput(`<pre style="color: #a7f3d0;">${ctfState.sshSessionActive ? 'uid=1001(operator) gid=1001(operator) groups=1001(operator)' : 'uid=0(root) gid=0(root) groups=0(root)'}</pre>`);
            return;
        }
        if (lower === 'uname -a') {
            printCtfOutput(`<pre style="color: #a7f3d0;">Linux lfl-ctf-node 6.8.11-kali-amd64 #1 SMP PREEMPT_DYNAMIC Kali 2026.1 x86_64 GNU/Linux</pre>`);
            return;
        }

        // ==========================================
        // MISSION 1.1: Operasyon Kapı Çalan
        // ==========================================
        if (m.id === 'm1_1') {
            if (lower.includes('ping') && lower.includes('10.10.1.5')) {
                printCtfOutput(`
<pre style="color: #94a3b8;">
PING 10.10.1.5 (10.10.1.5) 56(84) bytes of data.
64 bytes from 10.10.1.5: icmp_seq=1 ttl=64 time=1.24 ms
64 bytes from 10.10.1.5: icmp_seq=2 ttl=64 time=1.12 ms
64 bytes from 10.10.1.5: icmp_seq=3 ttl=64 time=1.18 ms

--- 10.10.1.5 ping statistics ---
3 packets transmitted, 3 received, <span style="color: #22c55e; font-weight: 700;">0% packet loss</span>, time 2004ms
rtt min/avg/max/mdev = 1.120/1.180/1.240/0.048 ms
<span style="color: #22c55e;">[+] HEDEF AKTİF! Sunucu ayakta. Şimdi nmap ile servisleri tarayın.</span>
</pre>
                `);
                return;
            }
            if (lower.includes('nmap') && lower.includes('10.10.1.5')) {
                printCtfOutput(`
<pre style="color: #94a3b8;">
Starting Nmap 7.94SVN ( https://nmap.org ) at 2026-11-08 02:00 UTC
Nmap scan report for 10.10.1.5
Host is up (0.0012s latency).
Not shown: 998 closed tcp ports (reset)
PORT   STATE SERVICE VERSION
<span style="color: #38bdf8; font-weight: 700;">22/tcp open  ssh     OpenSSH 8.9p1 Ubuntu 3ubuntu0.6 (Ubuntu Linux; protocol 2.0)</span>
<span style="color: #22c55e; font-weight: 700;">80/tcp open  http    Apache httpd 2.4.52 ((Ubuntu))</span>
|_http-server-header: Apache/2.4.52 (Ubuntu)
|_http-title: LFL Internal Gateway Portal

Service Info: OS: Linux; CPE: cpe:/o:linux:linux_kernel
<span style="color: #22c55e;">[+] Port 80 HTTP Servisi açık! curl -I http://10.10.1.5 ile başlıkları inceleyin.</span>
</pre>
                `);
                return;
            }
            if (lower.includes('curl') && lower.includes('10.10.1.5')) {
                printCtfOutput(`
<pre style="color: #94a3b8;">
HTTP/1.1 200 OK
Date: Sun, 08 Nov 2026 02:01:10 GMT
Server: Apache/2.4.52 (Ubuntu)
Last-Modified: Sat, 07 Nov 2026 21:10:00 GMT
ETag: "29b-61019f88c7"
Accept-Ranges: bytes
Content-Length: 667
Content-Type: text/html
<span style="color: #f59e0b; font-weight: 800;">X-Secret-Auth: TEZMe2xldmVsMV8xX2FnX2tlc2lmX2Jhc2FyYW5zfQ==</span>
Connection: close

<span style="color: #22c55e;">[+] GİZLİ BAŞLIK BULUNDU: X-Secret-Auth: TEZMe2xldmVsMV8xX2FnX2tlc2lmX2Jhc2FyYW5zfQ==</span>
<span style="color: #22c55e;">[+] Bu değeri echo "..." | base64 -d ile çözün!</span>
</pre>
                `);
                return;
            }
            if (lower.includes('base64') && (lower.includes('tezme') || lower.includes('echo'))) {
                printCtfOutput(`
<pre style="color: #22c55e; font-weight: 700;">
LFL{level1_1_ag_kesif_basarans}
</pre>
<span style="color: #00e5ff;">[+] Bayrak çözüldü! Sol taraftaki teslim kutusuna yapıştırıp doğrulayın veya 'submit LFL{...}' yazın.</span>
                `);
                return;
            }
        }

        // ==========================================
        // MISSION 1.2: Operasyon Hayalet Not
        // ==========================================
        if (m.id === 'm1_2') {
            if (lower.includes('ls') && lower.includes('/var/backups')) {
                printCtfOutput(`
<pre style="color: #94a3b8;">
total 16
drwxr-xr-x 2 root root 4096 Nov  8 01:40 .
drwxr-xr-x 14 root root 4096 Nov  8 01:20 ..
-rw-r--r-- 1 root root  512 Nov  8 01:42 backup_system.tar.gz
<span style="color: #f59e0b; font-weight: 700;">-rw-r--r-- 1 root root  240 Nov  8 01:45 operator_note.txt</span>
-rw-r--r-- 1 root root 1024 Nov  8 01:41 shadow.bak

<span style="color: #22c55e;">[+] /var/backups/operator_note.txt dosyası bulundu! cat komutuyla okuyun.</span>
</pre>
                `);
                return;
            }
            if (lower.includes('cat') && lower.includes('operator_note.txt')) {
                printCtfOutput(`
<pre style="color: #f59e0b;">
=====================================================
AJAN NOTU // GİZLİ
=====================================================
Sistem günlüğünü temizleyemedim. Sızma testi sırasında
oluşan denetim izleri doğrudan /var/log/syslog dosyasına
damgalandı. Bayrak anahtarı "LFL{" ifadesiyle başlıyor.
=====================================================
</pre>
<span style="color: #22c55e;">[+] İpucu alındı! grep -i "LFL{" /var/log/syslog komutuyla bayrağı çekin.</span>
                `);
                return;
            }
            if (lower.includes('grep') && (lower.includes('syslog') || lower.includes('lfl'))) {
                printCtfOutput(`
<pre style="color: #94a3b8;">
Nov  8 01:44:12 fortress kernel: [  184.20914] audit: type=1400 audit(1794092000.104:45): apparmor="DENIED"
<span style="color: #22c55e; font-weight: 800;">Nov  8 01:45:00 fortress security_daemon[4091]: [FLAG_LEAK] Operator token verified: LFL{level1_2_linux_dosya_adli_analiz}</span>
Nov  8 01:45:15 fortress sshd[4102]: Accepted publickey for operator from 10.10.14.2
</pre>
<span style="color: #00e5ff;">[+] Bayrak bulundu: LFL{level1_2_linux_dosya_adli_analiz}</span>
                `);
                return;
            }
        }

        // ==========================================
        // MISSION 2.1: Operasyon Derin Dizin
        // ==========================================
        if (m.id === 'm2_1') {
            if (lower.includes('whatweb') && lower.includes('10.10.2.10')) {
                printCtfOutput(`
<pre style="color: #94a3b8;">
http://10.10.2.10 [200 OK] Apache[2.4.56], Bootstrap[5.3.0], Country[RESERVED], HTML5, HTTPServer[Ubuntu Linux][Apache/2.4.56 (Ubuntu)], IP[10.10.2.10], PHP[8.2.14], Title[LFL Corporate Intranet]
<span style="color: #22c55e;">[+] Web altyapısı PHP/Apache olarak belirlendi. gobuster ile dizinleri tarayın.</span>
</pre>
                `);
                return;
            }
            if (lower.includes('gobuster') && lower.includes('10.10.2.10')) {
                printCtfOutput(`
<pre style="color: #94a3b8;">
===============================================================
Gobuster v3.6 - Directory brute forcing mode
===============================================================
[+] Url:                     http://10.10.2.10
[+] Method:                  GET
[+] Threads:                 10
[+] Wordlist:                common.txt
===============================================================
Starting gobuster...
===============================================================
<span style="color: #22c55e; font-weight: 700;">/robots.txt           (Status: 200) [Size: 78]</span>
/index.php            (Status: 200) [Size: 2410]
/login                (Status: 301) [Size: 180] --&gt; /login/
<span style="color: #f59e0b; font-weight: 700;">/admin_vault          (Status: 301) [Size: 195] --&gt; /admin_vault/</span>
/assets               (Status: 301) [Size: 184]
===============================================================
Finished
<span style="color: #22c55e;">[+] /robots.txt ve /admin_vault bulundu! curl http://10.10.2.10/robots.txt ile inceleyin.</span>
</pre>
                `);
                return;
            }
            if (lower.includes('curl') && lower.includes('robots.txt')) {
                printCtfOutput(`
<pre style="color: #f59e0b;">
User-agent: *
Disallow: /admin_vault/confidential_token.json
Disallow: /server-status
</pre>
<span style="color: #22c55e;">[+] Gizli dosya yolu ifşa oldu: /admin_vault/confidential_token.json</span>
<span style="color: #22c55e;">[+] curl http://10.10.2.10/admin_vault/confidential_token.json ile içeriği okuyun!</span>
                `);
                return;
            }
            if (lower.includes('curl') && lower.includes('confidential_token.json')) {
                printCtfOutput(`
<pre style="color: #94a3b8;">
{
  "vault_name": "LFL_RESTRICTED_ACCESS_PORTAL",
  "build": "2026.1-patch3",
  "encryption": "AES-GCM-256",
  <span style="color: #22c55e; font-weight: 800;">"master_flag": "LFL{level2_1_web_dizin_firtinasi}"</span>,
  "status": "ACTIVE_DEFENSE"
}
</pre>
<span style="color: #00e5ff;">[+] Bayrak bulundu: LFL{level2_1_web_dizin_firtinasi}</span>
                `);
                return;
            }
        }

        // ==========================================
        // MISSION 2.2: Operasyon Gömülü Bellek
        // ==========================================
        if (m.id === 'm2_2') {
            if (lower.includes('file') && lower.includes('suspect_payload.bin')) {
                printCtfOutput(`
<pre style="color: #94a3b8;">
/evidence/suspect_payload.bin: ELF 64-bit LSB shared object, x86-64, version 1 (SYSV), dynamically linked, BuildID[sha1]=f84a1e9b2, stripped
<span style="color: #22c55e;">[+] Dosya 64-bit ikili çalıştırılabilir (stripped). strings ile metinleri ayıklayın.</span>
</pre>
                `);
                return;
            }
            if (lower.includes('strings') && lower.includes('suspect_payload.bin')) {
                printCtfOutput(`
<pre style="color: #94a3b8;">
/lib64/ld-linux-x86-64.so.2
libc.so.6
printf
malloc
__cxa_finalize
__libc_start_main
GLIBC_2.2.5
AWAVAUATUSH
[]A\A]A^A_
LFL_SUSPECT_PAYLOAD_INTERNAL_v2.4
DEBUG_KEY=0x7ffcd3e0
<span style="color: #22c55e; font-weight: 800;">CONFIDENTIAL_REVERSED_FLAG=LFL{level2_2_adli_bilisim_strings_ustasi}</span>
PAYLOAD_DELIVERY_TIME=2026-11-08T02:15:00Z
GCC: (Debian 13.2.0-25) 13.2.0
.shstrtab
.interp
.note.gnu.build-id
</pre>
<span style="color: #00e5ff;">[+] Bayrak ayıklandı: LFL{level2_2_adli_bilisim_strings_ustasi}</span>
                `);
                return;
            }
            if (lower.includes('md5sum') && lower.includes('suspect_payload.bin')) {
                printCtfOutput(`
<pre style="color: #94a3b8;">
<span style="color: #38bdf8; font-weight: 700;">8f4b23d91e60cb27a819ec41d08c5b91</span>  /evidence/suspect_payload.bin
[+] Dosya bütünlüğü onaylandı (Adli kopya ile eşleşiyor).
</pre>
                `);
                return;
            }
        }

        // ==========================================
        // MISSION 3.1: Operasyon Kale Kuşatması
        // ==========================================
        if (m.id === 'm3_1') {
            if (lower.includes('hydra') && lower.includes('10.10.3.50')) {
                printCtfOutput(`
<pre style="color: #94a3b8;">
Hydra v9.5 (c) 2023 by van Hauser/THC &amp; David Maciejak - Please do not use in military or secret service organizations
[DATA] max 16 tasks per 1 target, overall 16 tasks, 14344 login tries (l:1/p:14344), ~896 tries per task
[DATA] attacking ssh://10.10.3.50:22/
[STATUS] 148.00 tries/min, 148 tries in 00:01h, 14196 to do in 01:36h, 16 active
<span style="color: #22c55e; font-weight: 800;">[22][ssh] host: 10.10.3.50   login: operator   password: cyber2026</span>
1 of 1 target successfully completed, 1 valid password found
<span style="color: #22c55e;">[+] PAROLA KIRILDI! Kullanıcı: operator, Şifre: cyber2026</span>
<span style="color: #22c55e;">[+] Şimdi sisteme bağlanın: ssh operator@10.10.3.50</span>
</pre>
                `);
                return;
            }
            if (lower.includes('ssh') && lower.includes('10.10.3.50')) {
                ctfState.sshSessionActive = true;
                const promptEl = document.getElementById('ctf-term-prompt-label');
                if (promptEl) promptEl.textContent = 'operator@fortress:~$';

                printCtfOutput(`
<pre style="color: #94a3b8;">
operator@10.10.3.50's password: <span style="color: #22c55e;">********</span>
Welcome to Ubuntu 22.04.4 LTS (GNU/Linux 5.15.0-105-generic x86_64)

 * Documentation:  https://help.ubuntu.com
 * Management:     https://landscape.canonical.com
 * Support:        https://ubuntu.com/pro

Last login: Sun Nov  8 01:14:22 2026 from 10.10.14.2
<span style="color: #22c55e; font-weight: 700;">operator@fortress:~$</span>
</pre>
<span style="color: #22c55e;">[+] SSH Oturumu Açıldı! Şimdi SUID izinli açıkları arayın: find / -perm -4000 2&gt;/dev/null</span>
                `);
                return;
            }
            if (lower.includes('find') && lower.includes('-4000')) {
                printCtfOutput(`
<pre style="color: #94a3b8;">
/usr/lib/openssh/ssh-keysign
/usr/lib/dbus-1.0/dbus-daemon-launch-helper
/usr/bin/passwd
/usr/bin/gpasswd
/usr/bin/newgrp
/usr/bin/chsh
/usr/bin/chfn
<span style="color: #ef4444; font-weight: 800;">/usr/bin/python3 (CRITICAL SUID BIT SET - root execution allowed!)</span>
/usr/bin/sudo
</pre>
<span style="color: #22c55e;">[+] /usr/bin/python3 üzerinde SUID yetkisi tespit edildi!</span>
<span style="color: #22c55e;">[+] /root/flag.txt dosyasını cat ile okuyun (veya python3 ile root yetkisini çalıştırın).</span>
                `);
                return;
            }
            if (lower.includes('cat') && lower.includes('/root/flag.txt')) {
                printCtfOutput(`
<pre style="color: #22c55e; font-weight: 800;">
=====================================================
ROOT YETKİSİ ALINDI // FORTRESS OWNED
=====================================================
FLAG: LFL{level3_1_suid_privesc_root_fatihi}
=====================================================
</pre>
<span style="color: #00e5ff;">[+] Bayrak bulundu: LFL{level3_1_suid_privesc_root_fatihi}</span>
                `);
                return;
            }
        }

        // ==========================================
        // MISSION 3.2: Operasyon Büyük Sızıntı (Final Boss)
        // ==========================================
        if (m.id === 'm3_2') {
            if (lower.includes('curl') && lower.includes('10.10.3.99')) {
                printCtfOutput(`
<pre style="color: #94a3b8;">
HTTP/1.1 200 OK
Content-Type: application/json; charset=utf-8

{
  "endpoint": "/api/search",
  "query": "test",
  "backend_db": "SQLite / MySQL 8.0.35 Enterprise",
  "vulnerable_param": "q",
  "results_count": 1,
  "message": "Query executed directly via string concatenation (Unsafe SQL query detected)."
}
<span style="color: #22c55e;">[+] SQL Injection açığı doğrulandı! sqlmap -u "http://10.10.3.99/api/search?q=test" --dbs ile veritabanlarını çekin.</span>
</pre>
                `);
                return;
            }
            if (lower.includes('sqlmap') && lower.includes('--dbs')) {
                printCtfOutput(`
<pre style="color: #94a3b8;">
        ___
       __H__
 ___ ___[.]_____ ___ ___  {1.8#stable}
|_ -| . [,]     | .'| . |
|___|_  ["]_|_|_|__,|  _|
      |_|           |_|   https://sqlmap.org

[!] legal disclaimer: Usage of sqlmap for attacking targets without prior mutual consent is illegal.
[*] starting @ 02:18:00 /2026-11-08/

[INFO] testing connection to the target URL
[INFO] checking if the target is protected by some kind of WAF/IPS
[INFO] testing if the target URL content is stable
[INFO] heuristic (basic) test shows that GET parameter 'q' might be injectable
[INFO] parameter 'q' is vulnerable. Do you want to keep testing the others? [y/N] N
sqlmap identified the following injection point(s) with a total of 48 HTTP(s) requests:
---
Parameter: q (GET)
    Type: boolean-based blind
    Title: AND boolean-based blind - WHERE or HAVING clause
    Payload: q=test' AND 4912=4912-- -
---
[INFO] the back-end DBMS is MySQL
available databases [2]:
[*] information_schema
<span style="color: #f59e0b; font-weight: 800;">[*] lfl_master_vault</span>

[+] lfl_master_vault tespit edildi! Tabloları listelemek için:
sqlmap -u "http://10.10.3.99/api/search?q=test" -D lfl_master_vault --tables
</pre>
                `);
                return;
            }
            if (lower.includes('sqlmap') && lower.includes('--tables')) {
                printCtfOutput(`
<pre style="color: #94a3b8;">
Database: lfl_master_vault
[1 table]
+---------------------------------------+
| <span style="color: #f59e0b; font-weight: 800;">master_classified_flags</span>               |
+---------------------------------------+

[+] master_classified_flags tablosu bulundu! Tabloyu dökmek için:
sqlmap -u "http://10.10.3.99/api/search?q=test" -D lfl_master_vault -T master_classified_flags --dump
</pre>
                `);
                return;
            }
            if (lower.includes('sqlmap') && lower.includes('--dump')) {
                printCtfOutput(`
<pre style="color: #94a3b8;">
Database: lfl_master_vault
Table: master_classified_flags
[1 entry]
+----+---------------------+------------------------------------------------+
| id | security_level      | grand_master_flag                              |
+----+---------------------+------------------------------------------------+
| 1  | DEFCON_1_MAXIMUM    | <span style="color: #c084fc; font-weight: 800; font-size: 14px;">LFL{level3_2_sqli_grand_master_champion_2026}</span> |
+----+---------------------+------------------------------------------------+

[INFO] table 'lfl_master_vault.master_classified_flags' dumped to CSV file
<span style="color: #c084fc; font-weight: 800; font-size: 13px;">🏆 ŞAMPİYONLUK BAYRAĞI ELE GEÇİRİLDİ: LFL{level3_2_sqli_grand_master_champion_2026}</span>
</pre>
                `);
                return;
            }
        }

        // Generic fallback for all 142+ Kali Linux commands in our catalog
        if (typeof generateTerminalResponse === 'function') {
            const fullOutput = generateTerminalResponse(cmd);
            printCtfOutput(`<div class="ctf-general-output" style="margin-top: 4px;">${fullOutput}</div>`);
            return;
        }

        // Strict unrecognized command response
        printCtfOutput(`
<pre style="color: #ef4444;">
bash: ${escapeHtml(cmd)}: komut simülasyon labında bulunamadı.
Kullanılabilir 142 aracı görmek için 'help' yazın veya sol paneldeki hızlı butonlara tıklayın.
</pre>
        `);
    }

    // VISITOR CLIENT TELEMETRY TRACKER
    // ==========================================
    async function pingVisitorTelemetry(pathOverride) {
        try {
            const path = pathOverride ? `/${pathOverride.replace('page-', '')}` : (window.location.pathname || '/dashboard');
            const payload = {
                screen: `${window.screen.width}x${window.screen.height}`,
                language: navigator.language || 'tr',
                platform: navigator.platform || (navigator.userAgentData && navigator.userAgentData.platform) || 'Desktop',
                path: path
            };
            await api.sendVisitTelemetry(payload);
        } catch {
            // Non-blocking
        }
    }

    // ==========================================
    // CANLI TEHDİT RADARI (CANVAS 2D)
    // ==========================================
    function initRadarAnimation() {
        const canvas = document.getElementById('lfl-radar-canvas') || document.getElementById('aegis-radar-canvas');
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        const width = canvas.width || 260;
        const height = canvas.height || 260;
        const centerX = width / 2;
        const centerY = height / 2;
        const maxRadius = (width / 2) - 10;

        let sweepAngle = 0;
        const sweepSpeed = 0.038;

        const targets = [
            { r: 45, angle: 0.8, label: 'CVE-2026-X', intensity: 0 },
            { r: 75, angle: 2.2, label: 'SQLi-SCAN', intensity: 0 },
            { r: 95, angle: 4.1, label: 'X-FRAME', intensity: 0 },
            { r: 105, angle: 5.6, label: 'SYN-FLOOD', intensity: 0 }
        ];

        const pings = [];

        canvas.addEventListener('click', (e) => {
            const rect = canvas.getBoundingClientRect();
            const clickX = (e.clientX - rect.left) * (width / rect.width);
            const clickY = (e.clientY - rect.top) * (height / rect.height);
            const dx = clickX - centerX;
            const dy = clickY - centerY;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist <= maxRadius) {
                pings.push({
                    x: clickX,
                    y: clickY,
                    radius: 2,
                    maxRadius: 36,
                    alpha: 1.0
                });
                showToast('success', 'Savunma Önlemi Fırlatıldı', `Vektör (${Math.round(dx)}, ${Math.round(dy)}) üzerine kalkan pinglemesi gönderildi.`);
            }
        });

        const angleEl = document.getElementById('radar-sweep-angle');

        function drawRadar() {
            ctx.clearRect(0, 0, width, height);

            // Circles
            ctx.strokeStyle = 'rgba(0, 229, 255, 0.18)';
            ctx.lineWidth = 1;
            [maxRadius * 0.28, maxRadius * 0.55, maxRadius * 0.82, maxRadius].forEach(r => {
                ctx.beginPath();
                ctx.arc(centerX, centerY, r, 0, Math.PI * 2);
                ctx.stroke();
            });

            // Crosshair
            ctx.strokeStyle = 'rgba(0, 229, 255, 0.12)';
            ctx.beginPath();
            ctx.moveTo(centerX, centerY - maxRadius);
            ctx.lineTo(centerX, centerY + maxRadius);
            ctx.moveTo(centerX - maxRadius, centerY);
            ctx.lineTo(centerX + maxRadius, centerY);
            ctx.stroke();

            // Sweeping Sector
            const coneAngle = 0.55;
            const startAngle = sweepAngle - coneAngle;
            const grad = ctx.createRadialGradient(centerX, centerY, 5, centerX, centerY, maxRadius);
            grad.addColorStop(0, 'rgba(0, 229, 255, 0.35)');
            grad.addColorStop(1, 'rgba(0, 229, 255, 0.02)');

            ctx.save();
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.arc(centerX, centerY, maxRadius, startAngle, sweepAngle, false);
            ctx.closePath();
            ctx.fillStyle = grad;
            ctx.fill();
            ctx.restore();

            // Sweep Line
            ctx.strokeStyle = '#00e5ff';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(centerX, centerY);
            ctx.lineTo(
                centerX + Math.cos(sweepAngle) * maxRadius,
                centerY + Math.sin(sweepAngle) * maxRadius
            );
            ctx.stroke();

            // Targets
            targets.forEach(t => {
                const tx = centerX + Math.cos(t.angle) * t.r;
                const ty = centerY + Math.sin(t.angle) * t.r;

                let diff = (sweepAngle % (Math.PI * 2)) - t.angle;
                while (diff < 0) diff += Math.PI * 2;
                if (diff < 0.25) {
                    t.intensity = 1.0;
                } else {
                    t.intensity = Math.max(0, t.intensity - 0.012);
                }

                if (t.intensity > 0.05) {
                    ctx.save();
                    ctx.fillStyle = `rgba(239, 68, 68, ${t.intensity})`;
                    ctx.shadowColor = '#ef4444';
                    ctx.shadowBlur = 10 * t.intensity;
                    ctx.beginPath();
                    ctx.arc(tx, ty, 3 + t.intensity * 2, 0, Math.PI * 2);
                    ctx.fill();

                    ctx.fillStyle = `rgba(255, 255, 255, ${t.intensity * 0.8})`;
                    ctx.font = '9px monospace';
                    ctx.fillText(t.label, tx + 6, ty - 4);
                    ctx.restore();
                }
            });

            // Pings
            for (let i = pings.length - 1; i >= 0; i--) {
                const p = pings[i];
                ctx.save();
                ctx.strokeStyle = `rgba(34, 197, 94, ${p.alpha})`;
                ctx.lineWidth = 2;
                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.stroke();
                ctx.restore();

                p.radius += 1.2;
                p.alpha -= 0.035;
                if (p.alpha <= 0) {
                    pings.splice(i, 1);
                }
            }

            sweepAngle += sweepSpeed;
            if (sweepAngle > Math.PI * 2) sweepAngle -= Math.PI * 2;

            if (angleEl) {
                const deg = Math.round((sweepAngle / (Math.PI * 2)) * 360);
                angleEl.textContent = `${String(deg).padStart(3, '0')}°`;
            }

            requestAnimationFrame(drawRadar);
        }

        drawRadar();
    }

    // ==========================================
    // CANLI TEHDİT AKIŞI
    // ==========================================
    function startAttackStream() {
        const streamContainer = document.getElementById('dashboard-attack-stream');
        if (!streamContainer) return;

        const events = [
            { ip: '185.220.101.4', type: 'SQLi Prob', act: 'LINQ Parametrik Sorgusu ile Engellendi', target: '/api/blog?tag=' },
            { ip: '45.154.255.89', type: 'Clickjacking', act: 'X-Frame-Options: DENY ile Reddedildi', target: '/index.html' },
            { ip: '194.26.29.112', type: 'MIME Sniff', act: 'nosniff başlığı ile düşürüldü', target: '/app.js' },
            { ip: '91.240.118.17', type: 'Banner Grabbing', act: 'Kestrel Server başlığı gizlendi', target: 'HTTP /' },
            { ip: '103.145.13.2', type: 'XSS Reflection', act: 'CSP Script-Whitelist ile bloke edildi', target: '/login' },
            { ip: '178.62.204.99', type: 'SSL Strip', act: 'HSTS Preload ile engellendi', target: 'Port 80' }
        ];

        let index = 0;
        function pushEvent() {
            const ev = events[index % events.length];
            index++;

            const item = document.createElement('div');
            item.className = 'attack-row';
            item.innerHTML = `
                <div class="attack-meta">
                    <span class="badge-soft-red" style="font-size: 11px; font-weight: 700; padding: 2px 8px;">${escapeHtml(ev.type)}</span>
                    <span class="attack-ip">${escapeHtml(ev.ip)}</span>
                    <span style="color: var(--text-muted); font-size: 11px; font-family: var(--font-mono);">${escapeHtml(ev.target)}</span>
                </div>
                <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
                    <span class="attack-verdict">${escapeHtml(ev.act)}</span>
                    <span style="color: var(--text-muted); font-size: 11px; font-family: var(--font-mono);">${new Date().toLocaleTimeString()}</span>
                </div>
            `;

            streamContainer.prepend(item);
            while (streamContainer.children.length > 5) {
                streamContainer.removeChild(streamContainer.lastChild);
            }
        }

        pushEvent();
        pushEvent();
        pushEvent();
        setInterval(pushEvent, 4000);
    }

    // ==========================================
    // SAAT
    // ==========================================
    function startClock() {
        const clock = document.getElementById('live-system-time');
        if (!clock) return;
        const update = () => {
            const now = new Date();
            clock.textContent = `${now.toISOString().substring(11, 19)} UTC`;
        };
        update();
        setInterval(update, 1000);
    }

    // ==========================================
    // SCROLL REVEAL ENGINE (FAIL-SAFE)
    // ==========================================
    function initScrollReveal() {
        const reveals = document.querySelectorAll('[data-reveal], [data-reveal-stagger]');
        if (!reveals.length) return;

        document.documentElement.classList.add('js-reveal-ready');

        // Immediately reveal all elements in initial viewport
        reveals.forEach(el => {
            el.classList.add('is-visible');
        });

        if ('IntersectionObserver' in window) {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                    }
                });
            }, { rootMargin: '0px 0px -20px 0px', threshold: 0.05 });

            reveals.forEach(el => observer.observe(el));
        }
    }

    // ==========================================
    // INITIALIZATION
    // ==========================================

    // ==========================================
    // EXCLUSIVE ADMIN SUPERPOWERS FOR burak_wyxz
    // ==========================================
    function initAdminSuperpowers() {
        // 1. DEFCON Platform Defense Level Controller
        const savedDefcon = localStorage.getItem('lfl_defcon') || '5';
        setDefconLevel(savedDefcon, false);

        ['1', '3', '5'].forEach(lvl => {
            const btn = document.getElementById(`btn-defcon-${lvl}`);
            if (btn) {
                btn.addEventListener('click', () => {
                    setDefconLevel(lvl, true);
                });
            }
        });

        // 2. Clear / Purge Access Logs
        const btnClearLogs = document.getElementById('btn-clear-logs');
        if (btnClearLogs) {
            btnClearLogs.addEventListener('click', () => {
                if (confirm('Tüm ziyaretçi ve telemetri log kayıtlarını silmek istediğinize emin misiniz?')) {
                    localStorage.removeItem('lfl_access_logs');
                    state.accessLogs = [];
                    renderAccessLogs('');
                    const totalEl = document.getElementById('log-stat-total');
                    if (totalEl) totalEl.textContent = '0';
                    const ipsEl = document.getElementById('log-stat-ips');
                    if (ipsEl) ipsEl.textContent = '0';
                    showToast('info', 'Loglar Temizlendi', 'Ziyaretçi telemetri veritabanı başarıyla sıfırlandı.');
                }
            });
        }

        // 3. Admin Broadcast Announcement
        const savedBroadcast = localStorage.getItem('lfl_broadcast_msg');
        if (savedBroadcast) {
            showBroadcastBanner(savedBroadcast);
        }

        const btnPublish = document.getElementById('btn-publish-broadcast');
        const inputBroadcast = document.getElementById('admin-broadcast-input');
        if (btnPublish && inputBroadcast) {
            btnPublish.addEventListener('click', () => {
                const msg = inputBroadcast.value.trim();
                if (!msg) {
                    showToast('error', 'Hata', 'Lütfen yayınlamak için bir duyuru mesajı yazın.');
                    return;
                }
                localStorage.setItem('lfl_broadcast_msg', msg);
                showBroadcastBanner(msg);
                showToast('success', 'Duyuru Yayınlandı', 'Neon acil durum bandı tüm platformda yayına girdi.');
            });
        }

        const btnClearBroadcast = document.getElementById('btn-clear-broadcast');
        const btnDismissBroadcast = document.getElementById('btn-dismiss-broadcast');
        const handleDismiss = () => {
            localStorage.removeItem('lfl_broadcast_msg');
            const bar = document.getElementById('admin-global-broadcast-bar');
            if (bar) bar.classList.add('hidden');
            showToast('info', 'Duyuru Kaldırıldı', 'Duyuru bandı kaldırıldı.');
        };
        if (btnClearBroadcast) btnClearBroadcast.addEventListener('click', handleDismiss);
        if (btnDismissBroadcast) btnDismissBroadcast.addEventListener('click', handleDismiss);

        // 4. CTF Master Root Key (Unlock all 6 levels instantly)
        const btnBypassCtf = document.getElementById('btn-admin-bypass-ctf');
        if (btnBypassCtf) {
            btnBypassCtf.addEventListener('click', () => {
                if (confirm('👑 MASTER ROOT KEY:\n\nTüm 6 CTF sızma seviyesini ve 2300 XP puanını yönetici yetkisiyle anında tamamlamak istiyor musunuz?')) {
                    ctfState.completed = CTF_MISSIONS.map(m => m.id);
                    ctfState.unlockedIdx = CTF_MISSIONS.length - 1;
                    ctfState.xp = 2300;
                    saveCtfProgressToStorage();
                    renderCtfProgress();
                    renderCtfStageTabs();
                    renderCtfBriefing(ctfState.activeIdx);
                    showToast('success', '👑 Master Key Aktif', 'Tüm 6 operasyon ve 2300 XP yönetici olarak açıldı!');
                    printCtfOutput(`\n<span style="color: #f59e0b; font-weight: 800;">[ROOT MASTER BYPASS]</span> <span style="color: #10b981;">Tüm sızma seviyeleri Platform Mimarı burak_wyxz tarafından %100 açıldı! (+2300 XP)</span>\n`);
                }
            });
        }
    }

    function setDefconLevel(level, notify = false) {
        localStorage.setItem('lfl_defcon', level);
        ['1', '3', '5'].forEach(lvl => {
            const b = document.getElementById(`btn-defcon-${lvl}`);
            if (b) b.classList.toggle('active', lvl === level);
        });

        const beacon = document.querySelector('.cluster-status-row .pulsing-beacon');
        const label = document.querySelector('.cluster-status-row .cluster-label');

        if (level === '1') {
            if (beacon) { beacon.style.background = '#ef4444'; beacon.style.boxShadow = '0 0 16px #ef4444'; }
            if (label) { label.style.color = '#ef4444'; label.textContent = 'DEFCON 1 // KIRMIZI ALARM'; }
            if (notify) showToast('error', 'DEFCON 1 Aktif', 'Platform KIRMIZI ALARM moduna geçirildi! Ağ savunması maksimum seviyede.');
        } else if (level === '3') {
            if (beacon) { beacon.style.background = '#f59e0b'; beacon.style.boxShadow = '0 0 14px #f59e0b'; }
            if (label) { label.style.color = '#f59e0b'; label.textContent = 'DEFCON 3 // YÜKSEK GÜVENLİK'; }
            if (notify) showToast('warning', 'DEFCON 3 Aktif', 'Platform SARI UYARI moduna geçirildi.');
        } else {
            if (beacon) { beacon.style.background = 'var(--green)'; beacon.style.boxShadow = '0 0 10px var(--green)'; }
            if (label) { label.style.color = 'var(--green)'; label.textContent = 'NODE CLUSTER // AKTİF'; }
            if (notify) showToast('success', 'DEFCON 5 Aktif', 'Platform standart güvenli savunma moduna döndü.');
        }
    }

    function showBroadcastBanner(text) {
        const bar = document.getElementById('admin-global-broadcast-bar');
        const txt = document.getElementById('admin-broadcast-text');
        if (bar && txt) {
            txt.innerHTML = `🚨 <strong>DUYURU:</strong> ${escapeHtml(text)} &bull; <span style="color: #a7f3d0; font-family: var(--font-mono);">[YÖNETİCİ: burak_wyxz]</span>`;
            bar.classList.remove('hidden');
        }
    }

    async function init() {
        // 1. Boot Dragon Intro Splash immediately
        try { initIntroSplash(); } catch (e) { console.error('[IntroSplash Error]', e); }

        // 2. Core navigation & UI controls (Never let secondary modules block navigation)
        try { startClock(); } catch (e) { }
        try { bindDropdowns(); } catch (e) { }
        try { bindNavigation(); } catch (e) { console.error('[bindNavigation Error]', e); }
        try { initKaliTerminal(); } catch (e) { console.error('[initKaliTerminal Error]', e); }

        // 3. Educational & interactive sub-modules
        try { bindAcademyCurriculum(); } catch (e) { }
        try { bindAcademyCheatsheet(); } catch (e) { }
        try { bindCyberRoleQuiz(); } catch (e) { }
        try { bindGlossary(); } catch (e) { }
        try { initCtfArena(); } catch (e) { }
        try { renderGlossary('all', ''); } catch (e) { }

        // 4. Admin, simulator, auth & telemetry
        try { initAdminSuperpowers(); } catch (e) { }
        try { bindSimulator(); } catch (e) { }
        try { bindAuthModal(); } catch (e) { }
        try { bindAccessLogsPanel(); } catch (e) { }

        // 5. Theme & fail-safe content reveal
        try { setTheme(state.theme); } catch (e) { }
        try { initScrollReveal(); } catch (e) { }
        try { pingVisitorTelemetry('/dashboard'); } catch (e) { }
        try { await restoreSession(); } catch (e) { }
        try { startAttackStream(); } catch (e) { }
        try { renderSessionStorageInspector(); } catch (e) { }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

/* ==========================================================================
   LFL (LOST FROM LIGHT) ANIMATION ENGINE V3.0 — Visual Parallax & Particles
   ========================================================================== */
function initAnimationEngine() {
    const progressBar = document.getElementById('scroll-progress-bar');
    const mainArea = document.querySelector('.app-main');

    if (progressBar && mainArea) {
        mainArea.addEventListener('scroll', () => {
            const { scrollTop, scrollHeight, clientHeight } = mainArea;
            const pct = scrollHeight > clientHeight
                ? Math.round((scrollTop / (scrollHeight - clientHeight)) * 100)
                : 0;
            progressBar.style.width = pct + '%';

            const topbar = document.querySelector('.app-topbar');
            if (topbar) topbar.classList.toggle('topbar-elevated', scrollTop > 10);
        }, { passive: true });
    }

    // Particle Canvas Background
    const canvas = document.getElementById('lfl-particle-canvas') || document.getElementById('aegis-particle-canvas');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        const particles = Array.from({ length: 45 }, () => ({
            x: Math.random() * width,
            y: Math.random() * height,
            vx: (Math.random() - 0.5) * 0.4,
            vy: (Math.random() - 0.5) * 0.4,
            radius: Math.random() * 1.5 + 0.5,
            alpha: Math.random() * 0.5 + 0.2
        }));

        function drawParticles() {
            ctx.clearRect(0, 0, width, height);
            ctx.fillStyle = 'rgba(0, 229, 255, 0.4)';

            particles.forEach(p => {
                p.x += p.vx;
                p.y += p.vy;
                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height;
                if (p.y > height) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                ctx.fill();
            });

            requestAnimationFrame(drawParticles);
        }

        drawParticles();
    }
}


