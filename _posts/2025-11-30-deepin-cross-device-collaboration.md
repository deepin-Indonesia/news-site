---
layout: post
title: "Panduan Lengkap Cross-Device Collaboration deepin — Transfer File, Sharing Keyboard Mouse, dan Screen Mirroring Beda Perangkat"
date: 2025-11-30 09:00:00 +0700
categories: tips
tags: [Tips deepin]
author: deepin Indonesia
description: >-
  Pelajari cara menggunakan Cross-Device Collaboration di deepin untuk transfer file, sharing keyboard
  dan mouse, clipboard sharing, serta screen mirroring dari HP ke PC. Panduan lengkap dengan gambar.
image: /assets/images/cooperation-screencast.jpg
---

Salah satu fitur yang bikin **deepin** dan **UOS** makin powerful adalah **Cross-Device Collaboration** — tools bawaan yang memungkinkan kamu menghubungkan beberapa perangkat sekaligus untuk transfer file, berbagi keyboard dan mouse, berbagi clipboard, bahkan mirroring layar HP ke PC dan mengontrolnya langsung dari desktop. Semua berjalan dalam satu jaringan lokal tanpa perlu kabel tambahan.

Di artikel ini, kita akan bahas tuntas cara menggunakannya — dari koneksi antar komputer, transfer file, keyboard/mouse sharing, hingga mobile screen mirroring.

## Apa Itu Cross-Device Collaboration?

Cross-Device Collaboration (sebelumnya dikenal sebagai **Cross-Device Assistant**) adalah aplikasi bawaan deepin dan UOS yang memungkinkan kolaborasi antar perangkat secara seamless:

- **Komputer ke komputer**: Transfer file, sharing keyboard/mouse, sharing clipboard antara deepin/UOS dan Windows
- **Mobile ke komputer**: Screen mirroring layar HP ke deepin/UOS, plus kontrol langsung HP dari PC

Untuk pengguna deepin/UOS, aplikasi ini bisa diunduh langsung dari **App Store** dengan nama "Cross-Device Collaboration". Untuk Windows dan perangkat mobile (saat ini mendukung model Android tertentu), kunjungi **[chinauos.com/resource/assistant](https://www.chinauos.com/resource/assistant)** untuk mengunduh aplikasinya.

## Kolaborasi Antar Komputer

### 1. Menghubungkan Perangkat

Saat aplikasi Cross-Device Collaboration dibuka, aplikasi akan otomatis memindai perangkat lain yang berada di **segmen jaringan yang sama**. Perangkat yang terdeteksi akan muncul di device list aplikasi.

![Device list Cross-Device Collaboration — menampilkan perangkat yang terdeteksi di jaringan lokal]({{ '/assets/images/cooperation-devices.png' | relative_url }})

*Sumber gambar: Manual deepin*

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

![Menghubungkan perangkat mobile ke deepin via QR code]({{ '/assets/images/cooperation-connect.jpg' | relative_url }})

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

![Screen mirroring HP ke deepin — kontrol langsung dari desktop]({{ '/assets/images/cooperation-screencast.jpg' | relative_url }})

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

<details open markdown="1">
<summary><strong>Kenapa perangkat saya tidak muncul di device list?</strong></summary>

Beberapa kemungkinan penyebabnya:

- Kedua perangkat harus menjalankan aplikasi Cross-Device Collaboration agar bisa discoverable
- Perangkat tidak berada di LAN yang sama, atau berada di LAN yang sama tapi beda network segment. Pastikan keduanya di LAN yang sama dan coba cari IP perangkat target secara manual
- Cek **Settings → Discoverable → "Everyone"** agar perangkat bisa ditemukan

</details>

<details markdown="1">
<summary><strong>Bagaimana cara cek apakah dua perangkat ada di network segment yang sama?</strong></summary>

Bandingkan **tiga bagian pertama IP address** kedua perangkat. Kalau sama, perangkat berada di segment yang sama.

Contoh: `192.168.1.10` dan `192.168.1.25` → segment sama. `192.168.1.10` dan `192.168.2.10` → segment berbeda.

</details>

<details markdown="1">
<summary><strong>Apakah transfer data di Cross-Device Collaboration aman?</strong></summary>

Ya, data di-serialisasi menggunakan **protobuf** dan dienkripsi dengan **SSL/TLS 1.3** — standar keamanan yang sama dengan yang digunakan perbankan online. Transfer file dan sharing clipboard semuanya terenkripsi end-to-end dalam jaringan lokal.

</details>

<details markdown="1">
<summary><strong>Kenapa HP Android saya tidak bisa terkoneksi ke komputer?</strong></summary>

Saat ini Cross-Device Collaboration untuk mobile hanya mendukung **model Android tertentu**. Daftar model yang didukung akan bertambah di update mendatang. Pastikan juga HP dan komputer berada di jaringan Wi-Fi yang sama.

</details>

<details markdown="1">
<summary><strong>Bagaimana cara mengontrol HP dari komputer setelah screen mirroring?</strong></summary>

Setelah screen mirroring aktif, buka **Settings HP → Accessibility → Installed Services**, cari **UOS Assistant**, dan aktifkan. Langkah pastinya tergantung model HP. Contoh untuk Huawei nova 9 Pro (HarmonyOS 4.2.0): Settings → Accessibility → Installed Services → UOS Assistant → Enable.

</details>

---

Fitur Cross-Device Collaboration ini adalah salah satu alasan kenapa deepin dan UOS unggul dalam ekosistem produktivitas. Dengan satu aplikasi, kamu bisa menghubungkan PC, laptop, dan HP dalam satu workflow mulus — tanpa kabel, tanpa aplikasi pihak ketiga.

---

*Artikel ini disusun berdasarkan Manual deepin dan dokumentasi resmi UOS, dengan penyesuaian dan tambahan penjelasan untuk konteks pengguna di Indonesia.*

---

Sudah coba fitur Cross-Device Collaboration? Punya tips atau pengalaman menarik? Yuk diskusi di [grup Telegram deepin Indonesia](https://t.me/Linux_deepin_ID){:target="_blank" rel="noopener"}! 🔗✨
