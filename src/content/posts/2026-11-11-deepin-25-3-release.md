---
title: "deepin 25.3.0 Resmi Dirilis: Freeze Protection, UOS AI Agent, dan Kernel 6.6.159"
date: 2026-11-11
tags: [release-notes]
author: deepin Indonesia
description: "deepin 25.3.0 resmi rilis! Freeze protection, UOS AI Agent dengan whole-disk knowledge base, PC Manager bawaan, snapshot ke USB, dan kernel 6.6.159. Cek semua fitur barunya."
image: /images/deepin-25-3-release/deepin-25-3-0-released.jpg
---

Rilis besar kembali hadir! **deepin 25.3.0** resmi dirilis dengan pembaruan menyeluruh di tiga area inti: **stabilitas dan performa sistem**, **pengalaman dan kecerdasan (UOS AI)**, serta **ekosistem dan kompatibilitas hardware**. Mulai dari **freeze protection** yang menjaga taskbar dan Launcher tetap responsif saat sistem macet, startup aplikasi yang jauh lebih cepat, **UOS AI** yang kini menjelma menjadi *Agent OS* dengan **whole-disk knowledge base**, hingga **PC Manager** yang ikut terpasang secara default — semuanya dirancang agar deepin 25.3.0 semakin nyaman dipakai sehari-hari.

Kami mengundang seluruh anggota komunitas deepin dan penggiat open source untuk mencoba versi terbaru ini, lalu membagikan pengalaman, temuan bug, dan saran Anda melalui komunitas. Setiap masukan membantu deepin menjadi lebih baik.

> **Baca juga:** [deepin 25.2.1 Resmi Dirilis: Intelligent Search & Patch Keamanan](/2026-08-04-deepin-25-2-1-update) — update minor sebelumnya yang membawa intelligent semantic search dan perbaikan Immutable System.

> **Baca juga:** [deepin 25.2.0 Resmi Dirilis: Treeland Stabil, AI Image Search, dan Ratusan Bug Fix](/2026-07-08-deepin-25-2-release) — pondasi Treeland, AI image search, dan taskbar split mode.

> **Baca juga:** [Panduan Install deepin 25 di WSL: Linux di Windows Tanpa Dual Boot](/2026-08-04-tutorial-install-deepin-wsl) — cara paling praktis mencoba deepin 25.3.0 tanpa menyentuh partisi Anda.

![deepin 25.3.0 resmi dirilis — lebih stabil, startup lebih cepat, dan UOS AI yang lebih cerdas](/images/deepin-25-3-release/deepin-25-3-0-released.jpg)

<h2 id="ringkasan">Sorotan Utama deepin 25.3.0</h2>

Berikut gambaran cepat lima area terpenting pada rilis deepin 25.3.0:

| Area | Yang Berubah |
| --- | --- |
| **UOS AI (Agent OS)** | Whole-disk knowledge base, unified entry untuk MCP/Skills/agent, natural language task, conversation memory |
| **Stabilitas & Performa** | Freeze protection, Control Center lebih cepat, startup aplikasi lebih cepat, system log dibatasi 5 GB |
| **Immutable System** | Snapshot dan restore ke local disk, USB drive, atau portable hard drive |
| **Maintenance & Data** | **PC Manager** terpasang default, alur backup/rollback sebelum upgrade lebih efisien |
| **Kernel & Hardware** | Kernel default **6.6.159**, higher kernel **6.18.56**, GPU acceleration untuk **Linyaps** |

### Apa yang Berubah Dibanding deepin 25.2.x?

| Aspek | deepin 25.2.x | deepin 25.3.0 |
| --- | --- | --- |
| **UOS AI** | Asisten dengan pencarian dan percakapan | **Agent OS** + whole-disk knowledge base + MCP/Skills unified entry |
| **Freeze protection** | ❌ Belum ada | ✅ Taskbar, Launcher, dan System Monitor tetap bisa dibuka |
| **PC Manager** | Perlu dipasang manual | ✅ Terpasang default dalam image |
| **Snapshot** | Terbatas di local disk | ✅ Local disk, USB drive, dan portable hard drive |
| **Kernel default** | 6.6 versi sebelumnya | **6.6.159** |
| **Hardware acceleration** | GPU acceleration terbatas | ✅ Linyaps + nvidia-container-toolkit |
| **Document Viewer** | Mode baca dasar | ✅ Posisi baca tersimpan + 3 eye-care mode |
| **Text Editor** | Plain text | ✅ **Markdown rendering** |

<h2 id="uos-ai">UOS AI: Dari Asisten Sistem Menjadi Agent OS</h2>

Sorotan terbesar deepin 25.3.0 ada di sisi kecerdasan buatan. **UOS AI** kini naik level menjadi *system-level intelligence* untuk **Agent OS** — pendekatan di mana AI tidak hanya menjawab pertanyaan, tetapi benar-benar mengeksekusi tugas di dalam sistem operasi.

![UOS AI di deepin 25.3.0 — asisten sistem dengan whole-disk knowledge base dan unified entry untuk MCP, Skills, dan agent](/images/deepin-25-3-release/uos-ai.webp)

### Whole-Disk Knowledge Base: Satu Kalimat, Semua Dokumen Jadi Pengetahuan

Fitur paling menonjol adalah **whole-disk knowledge base**. Dengan satu kalimat permintaan, UOS AI dapat menelusuri dan mengambil informasi dari **seluruh file lokal yang Anda izinkan** — dokumen, catatan, laporan, dan lainnya. Semua dokumen di komputer Anda pada dasarnya berubah menjadi pengetahuan yang bisa dipanggil kapan saja, tanpa perlu mengingat nama file atau folder.

### Unified Entry untuk MCP, Skills, dan Dedicated Agent

Kemampuan **MCP (Model Context Protocol)**, **Skills**, dan dedicated agent kini memiliki **satu pintu masuk terpadu**. UOS AI otomatis menentukan dan mendispatch kemampuan apa pun yang dibutuhkan sebuah tugas. Anda tidak perlu lagi memilih tool secara manual — sistem yang mengambil inisiatif, sehingga pekerjaan berjalan lebih cepat.

### Task Natural Language, Memory, dan Permission Mode

Sejumlah peningkatan lain membuat UOS AI terasa seperti rekan kerja sungguhan:

- **Reminder, scheduled task, dan recurring task** bisa dibuat dengan bahasa natural, sehingga pekerjaan berulang berjalan otomatis
- **Conversation memory** dan **automatic context summarization** yang lebih baik, plus **task queuing** serta riwayat yang diorganisasi per workspace
- **Permission mode per conversation** dengan kontrol izin penyimpanan file yang aman, sehingga mengurangi approval berulang

<h2 id="stabilitas-performa">Stabilitas, Performa, dan Kernel</h2>

deepin 25.3.0 membawa peningkatan performa yang langsung terasa, terutama saat sistem sedang dibebani banyak aplikasi. Fondasi kernel dan dukungan hardware juga ikut diperkuat di rilis ini.

### Freeze Protection: Tetap Bisa Menyelamatkan Diri Saat Sistem Macet

Fitur baru **freeze protection** dirancang untuk skenario terburuk. Ketika sistem mengalami *stalled* parah, **taskbar**, **Launcher**, dan **System Monitor** tetap bisa dibuka — sehingga Anda dapat dengan cepat menutup aplikasi yang menyebabkan freeze tanpa harus mematikan paksa perangkat.

### Startup dan Loading yang Lebih Cepat

- **Control Center home page** kini dimuat jauh lebih cepat
- **Aplikasi office** yang sering dipakai memiliki startup lebih cepat dan tetap responsif meski di bawah beban berat
- Sistem tetap terasa mulus untuk pemakaian jangka panjang

### System Log Lebih Terkendali

Log sistem kini dibatasi **maksimal 5 GB secara default**, terlepas dari pengaturan debug mode. Log otomatis berhenti bertambah ketika ruang disk tersisa di bawah **5%**, sehingga log tidak lagi menghabiskan ruang penyimpanan secara berlebihan.

### Kernel 6.6.159 dan Kompatibilitas Hardware

Fondasi sistem diperkuat melalui pembaruan kernel yang signifikan:

| Kernel | Versi | Catatan |
| --- | --- | --- |
| **Default kernel** | **6.6.159** | Memperbaiki celah keamanan di x86, arm64, dan loong64, serta mengatasi masalah boot pada perangkat tertentu |
| **Higher-version kernel** | **6.18.56** | Dapat dipasang melalui **Kernel Manager** untuk dukungan hardware platform terbaru |

Selain itu, opsi **NVIDIA driver** saat instalasi kini **otomatis mencocokkan GPU** yang terpasang, sehingga Anda tidak perlu menebak versi driver yang tepat.

### GPU Acceleration untuk Linyaps dan Driver NVIDIA

Ekosistem hardware deepin 25.3.0 juga tumbuh, khususnya untuk pengguna yang menjalankan aplikasi dalam format **Linyaps**:

- **GPU acceleration untuk container Linyaps** didukung penuh, dengan **nvidia-container-toolkit** yang sudah terpasang sebelumnya
- Aplikasi Linyaps kini dapat memanfaatkan akselerasi GPU untuk **pemutaran video** dan **rendering grafis** yang lebih mulus
- **GPU driver** mendapat dukungan **CDI** baru dan pembaruan **integrated GPU driver**, memperkuat dukungan grafis lintas platform hardware

<h2 id="system-maintenance">Perawatan Sistem dan Perlindungan Data</h2>

Selain performa, deepin 25.3.0 memudahkan Anda menjaga sistem tetap sehat dan data tetap aman melalui penyempurnaan **Immutable System** dan kehadiran **PC Manager** bawaan.

### Immutable System: Snapshot dan Restore yang Lebih Fleksibel

**Immutable System** deepin mendapat penyempurnaan pada alur **snapshot dan restore**:

- Snapshot dapat disimpan ke **local disk**, **USB drive**, atau **portable hard drive**
- Restore dapat dimulai langsung dari lokasi yang Anda pilih
- Strategi **backup dan rollback sebelum upgrade** disempurnakan untuk menekan penggunaan disk ekstra selama proses upgrade

Dengan perubahan ini, menjaga titik pemulihan sistem menjadi lebih praktis — termasuk ketika Anda ingin menyimpan snapshot ke media eksternal sebelum melakukan eksperimen atau upgrade besar.

### PC Manager Bawaan: Cek Kesehatan Sistem dalam Satu Klik

**PC Manager** kini disertakan langsung di dalam image deepin 25.3.0. Aplikasi ini menggabungkan deteksi, pembersihan, dan perbaikan dalam satu tempat, menjadikan perawatan sistem semudah melakukan *health check*:

- **Pemeriksaan sistem, hardware, dan jaringan** secara terintegrasi
- **Disk cleanup**, termasuk pembersihan **large-file** dan **duplicate-file**
- **Manajemen startup application**
- **Tool troubleshooting** umum untuk masalah sehari-hari

<h2 id="desktop-aplikasi">Desktop dan Aplikasi Bawaan yang Semakin Nyaman</h2>

Pengalaman desktop sehari-hari ikut dipoles di rilis ini, mulai dari taskbar hingga aplikasi bawaan.

![Desktop deepin 25.3.0 dengan DDE (Deepin Desktop Environment) — taskbar, Launcher, dan Control Center yang lebih responsif](/images/deepin-25-3-release/dde-desktop.webp)

### Taskbar dan Shutdown

- **Hover** pada perangkat yang terhubung untuk memutus **Wi-Fi** atau **Bluetooth** dengan cepat langsung dari taskbar
- **Animasi shutdown** kini ditampilkan sepanjang proses mematikan sistem, sehingga layar hitam singkat tidak lagi disalahartikan sebagai kegagalan shutdown

### Image Viewer: Edit Gambar Tanpa Aplikasi Lain

**Image Viewer** kini memiliki kemampuan **image editing**:

- **Crop** dan **rotate**
- Alat markup: **brush**, **line**, **arrow**, **rectangle**, dan **circle**
- **Text**, **mosaic**, dan **blur**

Anda dapat langsung mengedit gambar tepat setelah melihatnya, tanpa membuka tool tambahan.

### Text Editor: Markdown Rendering

**Text Editor** kini mendukung **Markdown rendering** dan pengalaman pencarian yang lebih baik. Cocok untuk menulis catatan, dokumentasi, atau README langsung di deepin.

![Text Editor deepin 25.3.0 dengan Markdown rendering — menulis catatan dan dokumentasi jadi lebih nyaman](/images/deepin-25-3-release/deepin-editor.webp)

### Document Viewer, App Store, Calendar, dan File Manager

- **Document Viewer**: mengingat kembali posisi baca, tampilan, dan layout terakhir, serta menambahkan **tiga mode eye-care** — **Classic**, **Green**, dan **Night**
- **App Store**: pengaturan **network proxy** baru; jika instalasi aplikasi gagal, detail error dapat dilihat di **Notification Center** dan langsung membuka panduan bantuan
- **Calendar**: mendukung penambahan **third-party schedule**
- **File Manager**: **tree-style directory view** di sidebar, yang bisa diatur expand atau collapse secara default melalui antarmuka grafis
- **Installer**: animasi loading dan ikon yang lebih jelas sebagai umpan balik progres instalasi

### Treeland: Fondasi Wayland yang Semakin Matang

**Treeland**, Wayland compositor deepin, terus dimatangkan:

- **Penyesuaian dan perbaikan protokol** yang ekstensif; protokol baru direncanakan menjadi versi stabil dengan kompatibilitas yang terjaga
- **Visual login screen** diperbaiki, dengan kontrol tetap jelas terbaca di atas wallpaper terang

<h2 id="bug-fix">Bug Fixes, Security, dan Stabilitas</h2>

Selain fitur baru, deepin 25.3.0 membawa daftar perbaikan bug yang panjang. Berikut ringkasan yang paling berdampak.

<details class="faq-item">
<summary><strong>1. Desktop dan System Settings</strong></summary>

#### Desktop dan System Settings

- Memperbaiki **taskbar tray context menu** yang tampil kosong
- Memperbaiki lambatnya loading ikon taskbar setelah logout dan login kembali
- Memperbaiki perilaku **smart hide** taskbar yang abnormal setelah berpindah workspace atau meminimalkan window
- Memperbaiki **interface stuttering** di Launcher saat membaca status autostart dari context menu
- Memperbaiki beberapa opsi **screen saver** di Control Center yang tidak bisa dipilih
- Memperbaiki entri **face recognition** yang masih tampil pada perangkat tanpa kamera
- Memperbaiki prompt password tambahan setelah bangun dari **hibernation**
- Memperbaiki kecerahan layar yang tidak langsung berubah setelah berganti **power mode**, serta volume taskbar yang tidak merespons real-time
- Memperbaiki gestur **tap** dan **long-press** yang abnormal pada layar sentuh
- Memperbaiki posisi klik mouse yang bergeser setelah merotasi sebagian display
- Memperbaiki kegagalan transfer nama file panjang berisi karakter Mandarin dan Inggris melalui **Bluetooth**
- Memperbaiki Control Center yang tidak menampilkan audio device setelah HDMI monitor dengan audio jack terhubung atau terputus
- Memperbaiki tombol yang tidak merespons saat diklik di dalam **Notification Center**
- Memperbaiki OSD yang menampilkan teks Inggris saat membuka window effects mode lewat shortcut di lingkungan Traditional Chinese

</details>

<details class="faq-item">
<summary><strong>2. System Update, Immutable System, dan File Management</strong></summary>

#### System Update dan Immutable System

- Memperbaiki **smart mirror source** yang gagal beralih ke source tersedia sehingga system update gagal
- Memperbaiki nama update source yang masih tampil dalam bahasa Mandarin di lingkungan non-Mandarin
- Memperbaiki **"Restart Now"** dari taskbar atau Control Center yang tidak merespons
- Memperbaiki upgrade sistem yang gagal akibat **local package** rusak
- Memperbaiki hilangnya informasi **repository** dan **network configuration** setelah rollback upgrade Immutable System
- Memperbaiki uninstall **deepin-home** yang ikut menghapus default settings package
- Memperbaiki konfigurasi keamanan sebagian **system service** yang belum lengkap
- Memperbaiki entri **VPN DNS mode** yang hilang akibat **systemd-resolved** belum terpasang
- Memperbaiki kegagalan instalasi package ketika path mengandung **colon**
- Memperbaiki **package installation queue** yang macet pada sebagian skenario
- Memperbaiki inkompatibilitas deployment **shared /opt** dengan **initrd** saat update initramfs gagal
- Memperbaiki tombol **"View Image"** pada halaman hasil full-system backup yang tidak merespons
- Memperbaiki pesan peringatan yang tidak segera hilang setelah path backup diubah ke direktori valid
- Memperbaiki halaman backup dan restore yang tetap tampil tetapi tidak bisa dipakai setelah otorisasi dibatalkan
- Memperbaiki kegagalan full-system backup saat sistem dipasang dengan **manual partitioning** dan **external portable hard drive** terhubung
- Memperbaiki halaman log backup dan restore yang tidak berada di tengah jendela aplikasi
- Memperbaiki tombol **"Select Existing Backup"** yang hilang setelah berpindah modul backup dan restore

#### File Management

- Memperbaiki tampilan **file creation** dan **modification time** yang abnormal
- Memperbaiki **USB drive file badge** yang masih tampil setelah fitur dinonaktifkan
- Memperbaiki ketidakmampuan melanjutkan operasi setelah restart tak terduga saat **partition encryption**, serta state context menu yang abnormal pada system disk
- Memperbaiki tampilan nama file panjang di **Trash**
- Memperbaiki ikon di **desktop organizer collection** yang tidak center-aligned
- Memperbaiki divider antar tab window yang terlalu tebal dan tab default yang memakan terlalu banyak ruang
- Memperbaiki pesan yang tidak tepat saat **Global Search index update** gagal
- Memperbaiki notifikasi **index update** yang abnormal saat berjalan dengan baterai
- Memperbaiki opsi list di antarmuka **"Open With"** yang tidak center-aligned

</details>

<details class="faq-item">
<summary><strong>3. Treeland, Aplikasi, dan Multimedia</strong></summary>

#### Treeland

- Memperbaiki **input method pre-edit** yang ikut ter-paste ke kolom input
- Memperbaiki berbagai masalah **Xwayland**, membuat aplikasi X11 berjalan lebih andal
- Memperbaiki tampilan abnormal pada maximize, fullscreen, restore window, dan **window preview**
- Memperbaiki sejumlah masalah lainnya

#### Image Viewer, Album, Documents, dan Multimedia

- Memperbaiki state abnormal setelah **crop** di Image Viewer, serta ketidakmampuan menghapus markup di luar area crop
- Memperbaiki **screen flickering** saat proses **blur** di Image Viewer dan shortcut **Redo** yang tidak berfungsi
- Memperbaiki tampilan **long image** yang blur saat diperbesar, serta lambatnya membuka gambar besar
- Memperbaiki tampilan tidak lengkap setelah **rotate** gambar di Album
- Memperbaiki tampilan **bookmark** dan **annotation** di Document Viewer pada dark theme
- Memperbaiki annotation yang hilang pada dokumen bernama sama dengan format berbeda, serta tampilan gambar abnormal di night mode
- Memperbaiki Music yang gagal mengimpor file audio **AC3** dan **AMR**
- Memperbaiki state progress bar abnormal setelah berpindah track di Music
- Memperbaiki ketidakmampuan memilih hasil pencarian dengan tombol panah dan area pencarian yang tidak sejajar di Music
- Memperbaiki layar hitam saat memutar video di Movie dan **hardware decoding** abnormal di sebagian lingkungan GPU
- Memperbaiki video **WMV** yang tidak memakai hardware decoding dengan baik di sebagian lingkungan GPU
- Memperbaiki kegagalan ekspor crash log dari log collection tool

</details>

<details class="faq-item">
<summary><strong>4. Security, Installer, dan Application Compatibility</strong></summary>

#### Security dan System Components

- Memperbaiki masalah keamanan di **System Update** dan **Log Viewer**, termasuk validasi izin, command injection, dan information disclosure
- Menambal kerentanan pada banyak komponen sistem, termasuk **Qt**, **curl**, **FFmpeg**, **VLC**, **Poppler**, **glibc**, **BIND9**, **Unbound**, **OpenVPN**, **BlueZ**, **Xorg**, **nginx**, **Wireshark**, **PHP**, **Expat**, **dnspython**, **python-git**, **SQLite**, **libgphoto2**, **tor**, dan **node-shell-quote**
- Memperbaiki **out-of-bounds access**, buffer overflow, dan penanganan input malformed yang tidak semestinya di banyak komponen network protocol, media parsing, dan file processing
- Memperbaiki isolasi temporary directory, perlindungan user directory, dan validasi izin pada sebagian system service
- Memperbarui data **Intel microcode**, memulihkan mitigasi keamanan **Meteor Lake** dan memperbaiki masalah fatal **MCE**

#### Installer dan Application Compatibility

- Memperbaiki ketidakmampuan boot masuk sistem setelah instalasi **full-disk Ghost** berhasil
- Memperbaiki antarmuka installer yang tampil dalam bahasa Inggris pada lingkungan Hong Kong Traditional Chinese
- Memperbaiki font terpotong di dialog error installer
- Memperbaiki tampilan **architecture indicator carousel** dan area back pada sebagian halaman installer
- Memperbaiki **GNURadio** yang gagal diinstal akibat dependency hilang
- Memperbaiki window misalignment pada antarmuka Mandarin **Minicom**
- Memperbaiki **App Store** yang muncul dua kali dalam daftar default **"Open With"**
- Memperbaiki respons lambat pada halaman **print preview**
- Memperbaiki package sistem bawaan yang ikut terhapus saat menginstal **qemu-user**
- Memperbaiki **qbittorrent** yang gagal diinstal akibat dependency hilang
- Memperbaiki pointer auxiliary component yang tidak di-reset setelah berpindah protokol di **Remmina**
- Memperbaiki Archive Manager yang menyatakan arsip **tar.bz2** tidak didukung
- Memperbaiki penghapusan atau penambahan komentar di **Archive Manager** yang tidak berefek
- Memperbaiki modification time yang salah pada daftar file arsip **7z**

</details>

<h2 id="cara-upgrade">Cara Upgrade dan Catatan Penting</h2>

deepin 25.3.0 adalah rilis **feature-enhancement dan bug-fix**, jadi beberapa pengguna sebaiknya memasang dari awal, sementara sisanya cukup upgrade.

### Siapa yang Perlu Install deepin 25.3.0?

Instalasi bersih (fresh install) sangat disarankan untuk:

1. **Perangkat baru** yang baru pertama kali memasang deepin 25, agar langsung mendapatkan fitur dan patch terbaru
2. Pengguna **rilis deepin 25 lama** yang sudah lama tidak memperbarui, dan ingin pindah ke versi terbaru sekaligus tanpa upgrade panjang

> **Catatan penting:** Jika sistem Anda saat ini berjalan normal dan rutin diperbarui (versi terakhir: **25.2.2**), Anda dapat **langsung upgrade ke deepin 25.3.0** melalui **Control Center → System Update**, atau dengan perintah terminal `sudo apt update && sudo apt dist-upgrade` — tanpa perlu instalasi ulang.

### Cara Upgrade ke deepin 25.3.0

Bagi pengguna yang sudah menjalankan deepin 25, proses upgrade cukup sederhana:

1. Buka **Control Center** lalu masuk ke **System Update**
2. Klik **Check for Updates** untuk memuat daftar pembaruan terbaru
3. Pilih **Update Now** dan tunggu proses unduh serta pemasangan selesai
4. **Restart** perangkat untuk menerapkan seluruh perubahan

Atau melalui terminal:

```bash
sudo apt update && sudo apt dist-upgrade
```

Bagi yang ingin memasang dari awal, image ISO deepin 25.3.0 dapat diunduh melalui halaman download resmi komunitas deepin Indonesia di **[os.deepin.id](https://os.deepin.id)**.

### Known Issues pada deepin 25.3.0

Beberapa masalah minor yang tidak mengganggu penggunaan normal masih ada dan sedang diperbaiki:

- Pada **group folder di Launcher**, gaya tampilan nama folder dan aplikasi belum tepat
- Pada **Image Viewer**, penggunaan memori bertambah saat menyesuaikan level zoom dengan scroll wheel setelah membuka gambar
- Ketika **Multitasking View** dibuka setelah Launcher, window Launcher ikut tampil di Multitasking View

<h2 id="faq">Pertanyaan yang Sering Muncul</h2>

<details class="faq-item">
<summary><strong>Apakah deepin 25.3.0 sudah stabil untuk daily driver?</strong></summary>

Ya. deepin 25.3.0 membawa **freeze protection**, mempercepat startup aplikasi, dan menyertakan **PC Manager** bawaan. Ditambah ratusan perbaikan bug dan patch keamanan, rilis ini sangat direkomendasikan untuk penggunaan sehari-hari.

</details>

<details class="faq-item">
<summary><strong>Apa itu freeze protection di deepin 25.3.0?</strong></summary>

Freeze protection adalah fitur baru yang menjaga **taskbar**, **Launcher**, dan **System Monitor** tetap bisa dibuka meskipun sistem mengalami macet parah. Tujuannya agar Anda dapat menutup aplikasi penyebab freeze tanpa harus mematikan paksa perangkat.

</details>

<details class="faq-item">
<summary><strong>Apa keunggulan UOS AI di versi ini?</strong></summary>

UOS AI kini berperan sebagai **Agent OS**: mendukung **whole-disk knowledge base** (mencari isi file lokal yang diizinkan dengan satu kalimat), **unified entry** untuk MCP, Skills, dan dedicated agent, pembuatan **reminder dan scheduled task** dengan bahasa natural, **conversation memory**, hingga **permission mode per conversation** yang lebih aman.

</details>

<details class="faq-item">
<summary><strong>Berapa versi kernel di deepin 25.3.0?</strong></summary>

Kernel default adalah **6.6.159** yang memperbaiki celah keamanan di x86, arm64, dan loong64 serta masalah boot pada perangkat tertentu. Tersedia juga higher-version kernel **6.18.56** yang dapat dipasang melalui **Kernel Manager** untuk dukungan hardware terbaru.

</details>

<details class="faq-item">
<summary><strong>Apakah PC Manager harus diinstal terpisah?</strong></summary>

Tidak. **PC Manager** sudah disertakan secara default di dalam image deepin 25.3.0, sehingga Anda bisa langsung melakukan pemeriksaan sistem, hardware, dan jaringan, menjalankan disk cleanup, mengelola startup application, dan memakai tool troubleshooting.

</details>

<details class="faq-item">
<summary><strong>Bagaimana cara upgrade ke deepin 25.3.0 tanpa instal ulang?</strong></summary>

Buka **Control Center → System Update → Check for Updates → Update Now**, lalu restart. Alternatifnya, jalankan `sudo apt update && sudo apt dist-upgrade` di terminal. Instalasi ulang hanya disarankan untuk perangkat baru atau pengguna versi deepin 25 lama yang sudah lama tidak diperbarui.

</details>

<details class="faq-item">
<summary><strong>Di mana saya bisa download deepin 25.3.0?</strong></summary>

Image deepin 25.3.0 tersedia di halaman download resmi komunitas Indonesia **[os.deepin.id](https://os.deepin.id)**. Di sana tersedia mirror untuk AMD64, ARM64, Loong64, RISC-V, dan WSL.

</details>

---

deepin 25.3.0 adalah rilis yang padat dan berdampak nyata: **freeze protection** dan startup yang lebih cepat membuat sistem lebih tahan beban, **UOS AI** naik kelas menjadi **Agent OS** dengan whole-disk knowledge base, sementara **PC Manager**, **Immutable System**, kernel baru, serta dukungan GPU untuk **Linyaps** memperkuat fondasi deepin untuk penggunaan harian, produktivitas, dan kompatibilitas hardware.

Silakan upgrade dan coba versi terbaru ini. Jika menemukan masalah atau punya saran, sampaikan melalui komunitas — setiap masukan berarti bagi perkembangan deepin. Terima kasih kepada seluruh pengguna dan mitra komunitas atas kepercayaan serta dukungannya.

Punya pertanyaan atau pengalaman seputar deepin 25.3.0? Yuk diskusi di [grup Telegram deepin Indonesia](https://t.me/Linux_deepin_ID) — gratis, ramah, dan berbahasa Indonesia!
