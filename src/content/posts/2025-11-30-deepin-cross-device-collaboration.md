---
title: "Panduan Cross-Device Collaboration deepin: Transfer File, Sharing Keyboard, dan Mirror HP"
date: 2025-11-30
tags: [tips-deepin]
author: deepin Indonesia
description: "Panduan lengkap Cross-Device Collaboration deepin: transfer file antar PC, sharing keyboard & mouse, clipboard, hingga mirror layar HP ke desktop. Semua via WiFi tanpa kabel."
image: /images/deepin-cross-device-collaboration/cooperation-screencast-2.jpg
---

Salah satu fitur yang bikin **deepin** dan **UOS** makin powerful adalah **Cross-Device Collaboration** — tools bawaan yang memungkinkan kamu menghubungkan beberapa perangkat sekaligus untuk transfer file, berbagi keyboard dan mouse, berbagi clipboard, bahkan mirroring layar HP ke PC dan mengontrolnya langsung dari desktop. Semua berjalan dalam satu jaringan lokal tanpa perlu kabel tambahan.

Di artikel ini, kita akan bahas tuntas cara menggunakannya — dari koneksi antar komputer, transfer file, keyboard/mouse sharing, hingga mobile screen mirroring.

> **Baca juga:** [deepin 25.2.0 Resmi Dirilis: Treeland Stabil, AI Image Search, dan Ratusan Bug Fix](/2026-07-08-deepin-25-2-release) — versi terbaru deepin dengan penyempurnaan fitur kolaborasi.

## Apa Itu Cross-Device Collaboration?

Cross-Device Collaboration (sebelumnya dikenal sebagai **Cross-Device Assistant**) adalah aplikasi bawaan deepin dan UOS yang memungkinkan kolaborasi antar perangkat secara seamless:

- **Komputer ke komputer**: Transfer file, sharing keyboard/mouse, sharing clipboard antara deepin/UOS dan Windows
- **Mobile ke komputer**: Screen mirroring layar HP ke deepin/UOS, plus kontrol langsung HP dari PC

Untuk pengguna deepin/UOS, aplikasi ini bisa diunduh langsung dari **App Store** dengan nama "Cross-Device Collaboration". Untuk Windows dan perangkat mobile (mendukung semua Android), kunjungi **[chinauos.com/resource/assistant](https://www.chinauos.com/resource/assistant)** untuk mengunduh aplikasinya.

## Kolaborasi Antar Komputer

### 1. Menghubungkan Perangkat

Saat aplikasi Cross-Device Collaboration dibuka, aplikasi akan otomatis memindai perangkat lain yang berada di **segmen jaringan yang sama**. Perangkat yang terdeteksi akan muncul di device list aplikasi.

<figure>
<img src="/images/deepin-cross-device-collaboration/cooperation-devices.png" alt="Device list Cross-Device Collaboration — menampilkan perangkat yang terdeteksi di jaringan lokal" loading="lazy">
<figcaption>Sumber gambar: Manual deepin</figcaption>
</figure>

Ada dua cara untuk menghubungkan perangkat:

**Metode 1 — Pilih dari device list**<br>
Cari perangkat target (diidentifikasi berdasarkan computer name atau IP address), klik tombol **Connect**, dan koneksi antar dua perangkat akan terbentuk.

**Metode 2 — Cari berdasarkan IP address**<br>
Masukkan IP address perangkat target di kolom pencarian, klik Connect, dan koneksi akan terbentuk. Metode ini berguna jika device list tidak otomatis mendeteksi perangkat yang kamu tuju.

### 2. Transfer File

Setelah dua perangkat terhubung, kamu bisa mengirim file dengan dua cara:

**Via tombol File Transfer di device list**<br>
Klik ikon kirim (<i class="fas fa-paper-plane"></i>) di tampilan device list. Pilih file yang ingin dikirim di jendela file selection, klik OK, dan transfer akan dimulai.

**Via right-click menu (context menu)**<br>
Klik kanan file yang ingin dikirim, pilih **Send to → File Transfer**, lalu pilih perangkat target dari daftar. Kalau mengirim ke perangkat Windows, pastikan aplikasi Cross-Device Collaboration di Windows tetap terbuka.

### 3. Keyboard & Mouse Sharing

Ini fitur yang sangat berguna untuk setup multi-device. Ketika perangkat A dan B terhubung, dan opsi **keyboard/mouse sharing** diaktifkan di pengaturan perangkat B:

- Kamu bisa menggunakan mouse dan keyboard perangkat A untuk **langsung mengontrol perangkat B**
- Mouse bisa bergerak **antar layar kedua perangkat** sesuai pengaturan screen alignment
- Tidak perlu KVM switch fisik — semuanya lewat software

![Menghubungkan perangkat mobile ke deepin via QR code](/images/deepin-cross-device-collaboration/cooperation-connect.jpg)

### 4. Clipboard Sharing

Ketika perangkat A dan B terhubung dengan opsi **Clipboard Sharing** diaktifkan di pengaturan perangkat pemulai (initiating device), kedua perangkat akan berbagi clipboard yang sama. Kamu bisa:

- **Copy** teks di perangkat A
- **Paste** langsung di perangkat B

Sangat memudahkan untuk workflow yang melibatkan banyak perangkat.

## Kolaborasi Mobile — Screen Mirroring & Kontrol HP dari PC

### Menghubungkan Perangkat Mobile

1. Buka aplikasi Cross-Device Collaboration di deepin/UOS
2. Pindah ke tab **Mobile Collaboration** di navigation bar atas
3. Akan muncul **QR code** koneksi
4. Download aplikasi **UOS Assistant** di HP kamu
5. Scan QR code untuk membuat koneksi

### Screen Mirroring & Remote Control

Setelah terhubung, di perangkat mobile:

1. Klik tombol **Screen Mirroring**
2. Berikan izin screen privacy permissions
3. Aktifkan **Accessibility Services** untuk UOS Assistant di pengaturan HP

Setelah itu, layar HP akan tampil di perangkat deepin/UOS dan kamu bisa **mengontrol HP langsung dari desktop** dengan mengklik layar yang di-mirror.

![Screen mirroring HP ke deepin — kontrol langsung dari desktop](/images/deepin-cross-device-collaboration/cooperation-screencast-1.jpg)

![Screen mirroring HP ke deepin — kontrol langsung dari desktop](/images/deepin-cross-device-collaboration/cooperation-screencast-2.jpg)

## Pengaturan Cross-Device Collaboration

Klik ikon title bar dan pilih **Settings** untuk mengakses konfigurasi lengkap:

| Pengaturan | Fungsi |
|---|---|
| **Discoverable** | Kontrol apakah perangkat bisa dideteksi otomatis oleh perangkat lain di LAN yang sama. Opsi: Everyone, Not Allowed |
| **Device Nickname** | Nama yang membantu perangkat lain mengidentifikasi kamu. Default: computer name |
| **Peripheral Sharing** | Jika diaktifkan, keyboard, mouse, atau touchpad perangkat yang terhubung bisa mengontrol perangkat ini |
| **Connection Direction** | Mengatur screen alignment relationship dengan perangkat yang terhubung |
| **Allow File Transfers From** | Kontrol siapa yang bisa mengirim file ke kamu. Opsi: Everyone, Connected Devices, Not Allowed |
| **File Save Location** | Path penyimpanan file yang diterima. Default: folder dengan nama device nickname pengirim di Downloads |
| **Clipboard Sharing** | Kontrol apakah clipboard dibagikan dengan perangkat terhubung |

## Pertanyaan yang Sering Muncul

<details>
<summary><strong>Kenapa perangkat saya tidak muncul di device list?</strong></summary>

Beberapa kemungkinan penyebabnya:

- Kedua perangkat harus menjalankan aplikasi Cross-Device Collaboration agar bisa discoverable
- Perangkat tidak berada di LAN yang sama, atau berada di LAN yang sama tapi beda network segment. Pastikan keduanya di LAN yang sama dan coba cari IP perangkat target secara manual
- Cek **Settings → Discoverable → "Everyone"** agar perangkat bisa ditemukan

</details>

<details>
<summary><strong>Bagaimana cara cek apakah dua perangkat ada di network segment yang sama?</strong></summary>

Bandingkan **tiga bagian pertama IP address** kedua perangkat. Kalau sama, perangkat berada di segment yang sama.

Contoh: `192.168.1.10` dan `192.168.1.25` → segment sama. `192.168.1.10` dan `192.168.2.10` → segment berbeda.

</details>

<details>
<summary><strong>Apakah transfer data di Cross-Device Collaboration aman?</strong></summary>

Ya, data di-serialisasi menggunakan **protobuf** dan dienkripsi dengan **SSL/TLS 1.3** — standar keamanan yang sama dengan yang digunakan perbankan online. Transfer file dan sharing clipboard semuanya terenkripsi end-to-end dalam jaringan lokal.

</details>

<details>
<summary><strong>Kenapa HP Android saya tidak bisa terkoneksi ke komputer?</strong></summary>

Cross-Device Collaboration kini sudah mendukung **semua perangkat Android**. Pastikan HP dan komputer berada di jaringan Wi-Fi yang sama, dan aplikasi sudah terinstal di kedua perangkat.

</details>

<details>
<summary><strong>Bagaimana cara mengontrol HP dari komputer setelah screen mirroring?</strong></summary>

Setelah screen mirroring aktif, buka **Settings HP → Accessibility → Installed Services**, cari **UOS Assistant**, dan aktifkan. Langkah pastinya tergantung model HP. Contoh untuk Huawei nova 9 Pro (HarmonyOS 4.2.0): Settings → Accessibility → Installed Services → UOS Assistant → Enable.

</details>

---

Fitur Cross-Device Collaboration ini adalah salah satu alasan kenapa deepin dan UOS unggul dalam ekosistem produktivitas. Dengan satu aplikasi, kamu bisa menghubungkan PC, laptop, dan HP dalam satu workflow mulus — tanpa kabel, tanpa aplikasi pihak ketiga.

> **Baca juga:** [NVIDIA Optimus di deepin: HDMI Tetap Jalan, Baterai Tetap Hemat](/2025-11-12-deepin-nvidia-optimus-hdmi) — bagaimana deepin menangani dual GPU lebih baik dari Ubuntu.



Sudah coba fitur Cross-Device Collaboration? Punya tips atau pengalaman menarik? Yuk diskusi di [grup Telegram deepin Indonesia](https://t.me/Linux_deepin_ID)! 🔗✨
