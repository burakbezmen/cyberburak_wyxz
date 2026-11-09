🛡️ Lost From Light (LFL) // Cyber Defense & CTF Academy

100% İstemci Taraflı (Zero-Backend) Siber Savunma, Terminal Simülasyonu ve İnteraktif CTF Platformu

GitHub Pages üzerinde sıfır sunucu maliyeti ve tam gizlilik odaklı çalışacak şekilde optimize edilmiştir.

⚡ Canlı Erişim & Demo

🔗 Canlı Proje: burakbezmen.github.io/cyberburak_wyxz

Bu proje saf HTML5, CSS3 ve Modern Vanilla JavaScript ile inşa edilmiştir. Harici bir backend servisi, Node.js veya veritabanı gerektirmez; tüm simülasyon ve oturum yönetimi kullanıcının tarayıcısında (Client-Side) gerçekleşir.

🚀 Nasıl Çalıştırılır?

GitHub Pages ile: Depo ayarlarından Settings -> Pages -> Branch: main / (root) seçeneğini aktif etmeniz yeterlidir.

Yerel Olarak (Local): index.html dosyasına çift tıklayarak doğrudan dilediğiniz tarayıcıda (Chrome, Edge, Firefox, Brave) açabilirsiniz.

VS Code / Live Server ile: Proje klasörünü VS Code'da açıp index.html'e sağ tıklayarak "Open with Live Server" diyebilirsiniz.

🎯 Temel Özellikler & Modüller

1. 🐉 Kali Linux Çoklu Sekmeli Web Terminali (Multi-Tab CLI)

Bağımsız sekme mimarisi (+ yeni sekme, sekme kapatma ve sekme bazlı komut geçmişi).

142 Kali Linux komutunu (Nmap, Gobuster, SQLMap, Volatility, Wireshark, Metasploit, Sysmon vb.) simüle eden yerleşik kütüphane.

Tab Tuşu ile Otomatik Tamamlama (Auto-Complete): Hızlı komut girişi ve pratik öğrenme deneyimi.

Komut geçmişinde gezinme (↑ / ↓ tuşları) ve clear desteği.

2. 🌲 69 Odalı Kademeli Beceri Ağacı (Skill Tree & Patikalar)

Platform, sıfırdan ileri seviyeye uzanan 4 ana koldan oluşur:

🌱 Starter Track // Seviye 0 (18 Temel Eğitim Odası): Ağ temelleri (IP/MAC, Port, DNS, TCP/UDP), Linux dosya mimarisi, CLI, chmod, ps/kill, log analizi (grep/pipe), dinleyen portlar (ss/netstat), tcpdump, Cookie/Session, SSH anahtarları ve UFW güvenlik duvarı.

⚔️ Red Team (20 Görev Odası): Web zafiyetleri (SQLi, XSS, IDOR), Metasploit zincirleri, yetki yükseltme (SUID), Active Directory & Kerberoasting, EDR atlatma ve C2 (Cobalt Strike, Sliver) operasyonları.

🛡️ Blue Team (17 Görev Odası): PCAP analizi, Snort & Suricata NIDS kuralları, Sysmon & Windows Event ID avı, Volatility ile RAM analizi, Sigma kuralları ve Olay Müdahale (Incident Response).

🔮 Purple Team (14 Görev Odası): MITRE ATT&CK & Kill Chain eşleme, BAS (Breach and Attack Simulation), Atomic Red Team, STRIDE tehdit modellemesi ve savunma validasyonu.

3. 🚩 Oyunlaştırılmış Görev & Boss Sınav Mekaniği

Özel Oda Terminalleri: Her odada edinilen teorik bilgi, odaya özel terminalde doğru komutun/çıktının üretilmesiyle test edilir.

Kilit ve İlerleme Sistemi: Kullanıcı bayrağı (flag) doğruladıkça bir sonraki odanın kilidi açılır; ilerleme tarayıcı önbelleğinde (localStorage) güvenli bir şekilde saklanır.

Kör Operasyon (Boss Odası / Sınav): Patika sonlarında yardım ve ipucu sekmelerinin kapandığı, kullanıcıyı tek bir vaka senaryosuyla baş başa bırakan nihai yeterlilik sınavları.

4. 🎨 Modern SOC Arayüzü & %100 Duyarlı (Responsive) Tasarım

Dinamik tema değiştirici (Cyber Midnight, Emerald Matrix vb.) ve Defcon durum göstergeleri.

Masaüstü, tablet ve mobil uyumlu esnek grid mimarisi ve off-canvas çekmece navigasyonu.

📂 Dosya Mimarisi

├── index.html         # Ana arayüz, tek sayfa uygulama (SPA) ve dashboard
├── style.css          # Siber tema, neon efektler, grid/flex ve responsive medya sorguları
├── animations.css     # Geometrik introlar, geçiş efektleri ve animasyonlar
├── app.js             # Terminal motoru, oda kilit mantığı, filtreler ve LocalStorage yönetimi
├── academy-data.js    # 69 odanın eğitim senaryoları, 142 Kali komut rehberi ve görev veritabanı
└── kali_dragon.svg    # Vektörel grafik ve marka bileşenleri


👨‍💻 Geliştirici & İletişim

Geliştirici: burak_wyxz

Proje: LOST FROM LIGHT (LFL) DEFENSE LAB

GitHub: @burakbezmen