---
title: "deepin 25.1.0 Resmi Dirilis: Kernel 6.18 & UOS AI Claw Mode"
date: 2026-04-10
tags: [release-notes]
author: deepin Indonesia
description: "deepin 25.1.0 resmi rilis! Kernel naik ke 6.18 dengan BORE scheduler, UOS AI Claw Mode, AI Writing Agent, Skills Center, dan ratusan perbaikan bug."
image: /images/deepin-25-1-release/deepin-25-1-release.jpg
---

Sebagai sistem operasi open source yang bersinar di peringkat global [DistroWatch](https://distrowatch.com/table.php?distribution=deepin) dan diakui luas oleh pengguna di seluruh dunia, deepin terus mendengarkan masukan Anda sejak rilis **deepin 25**. Kami menyempurnakan detail, memperbaiki masalah, dan menghadirkan inovasi baru. Hari ini, kami dengan bangga mengumumkan bahwa **image deepin 25.1.0 resmi dirilis!**

> **Baca juga:** [deepin 25.2.0 Resmi Dirilis: Treeland Stabil, AI Image Search, dan Ratusan Bug Fix](/2026-07-08-deepin-25-2-release) — kelanjutan langsung dari fondasi yang dibangun di 25.1.0.

> **Baca juga:** [deepin 25.2.1 Resmi Dirilis: Intelligent Search & Patch Keamanan](/2026-08-04-deepin-25-2-1-update) — update terkini dengan intelligent semantic search.

![deepin 25.1.0 Resmi Dirilis — kernel 6.18, UOS AI Claw Mode, dan Skills Center](/images/deepin-25-1-release/deepin-25-1-release.jpg)

## Sorotan Utama deepin 25.1.0

Dua perubahan besar mendominasi rilis ini:

| Area | Yang Berubah |
| --- | --- |
| **UOS AI** | Rekonstruksi tingkat sistem: **Claw Mode** native, **AI Writing Agent** baru, dan **Skills Center** |
| **Kernel** | Naik dari **6.12** ke **6.18** — menggabungkan fitur utama dari 6 versi |
| **Manajemen Memori** | Mekanisme alokasi **Slub** baru dan infrastruktur **Swap Table** |
| **Scheduler** | **BORE scheduler** dari CachyOS resmi diadopsi |
| **Hardware** | Dukungan **Intel APX** dan patch driver vendor terbaru |

## Evolusi UOS AI

Update ini memberdayakan produktivitas secara mendalam, membawa rekonstruksi tingkat sistem dan perluasan ekosistem bagi **UOS AI**.

### System-level Claw Mode

**Claw Mode** native tingkat sistem yang baru diluncurkan terintegrasi penuh dengan antarmuka aplikasi IM mainstream seperti **Lark**, **DingTalk**, dan **QQ**. Pengguna dapat menggunakan perintah bahasa natural untuk membiarkan AI mengendalikan komputer secara otomatis menyelesaikan tugas sistem yang kompleks.

### Rekonstruksi AI Writing Agent

Empat peningkatan besar pada asisten penulisan:

- **Deep Feeding dan Outline First** — Mendukung unggah langsung materi referensi lokal dan outline dokumen. AI akan menampilkan outline logis sebelum menghasilkan teks utama, memungkinkan pengguna menyesuaikan struktur bab secara manual dan memegang kendali penuh atas proses kreatif.
- **Analisis Mendalam dan Traceability** — AI melakukan analisis logis mendalam dan **Web Search** di latar belakang. Semua argumen inti dan data mendukung penelusuran sumber dengan satu klik, memastikan keaslian dan otoritas konten.
- **Built-in Editor** — Editor bawaan baru yang mendukung pengubahan format teks secara online dan ekspor satu klik ke format **PDF**, **Word**, dan **Markdown**.
- **Intelligent Model Scheduling** — Model default ditingkatkan ke mode "Intelligent Scheduling", yang secara dinamis mencocokkan model **DeepSeek-v3.2** dan **GLM-4.7** berdasarkan tingkat kesulitan tugas. Juga mendukung pembuatan model on-device dan yang di-deploy secara privat, menjamin privasi dan keamanan maksimal saat Web Search dimatikan.

### Ekosistem Skills Terbuka

Ditambahkan **Skills Center**, dengan fungsi bawaan untuk membuat dan menemukan skill. Juga mendukung impor skill tambahan satu klik melalui arsip berformat `.zip` atau `.skill`.

## Kernel Naik ke Versi 6.18

deepin 25.1 menyambut upgrade kernel besar, dengan kernel versi tinggi sistem melompat dari **6.12** ke **6.18**, mengintegrasikan penuh fitur fungsional utama dari 6 versi mayor.

- **Rekonstruksi Manajemen Memori** — Memperkenalkan mekanisme alokasi memori **Slub** baru dan infrastruktur **Swap Table**, secara signifikan mengurangi overhead dan latensi alokasi serta pelepasan memori kernel, sekaligus meningkatkan performa ekstrem.
- **Akselerasi File System** — Optimasi lapisan bawah yang mendalam untuk file system **Ext4** dan **XFS**, secara signifikan meningkatkan kecepatan baca/tulis dan pemuatan file sistem.
- **Performa dan Kelancaran Meningkat** — Resmi menambahkan **BORE scheduler** dari CachyOS, yang secara menyeluruh meningkatkan kelancaran interaksi desktop dan multitasking.
- **Kompatibilitas Hardware Diperluas** — Menambahkan dukungan fitur hardware baru seperti **Intel APX**, terus mengintegrasikan patch driver vendor hardware terbaru, dan mendorong migrasi mulus antara perangkat baru dan lama.

## Fitur Baru dan Optimasi

- **File Manager**
  - Mendukung klik kanan untuk **pin top tab**, menjaga jalur direktori penting tetap persisten, dan mendukung **drag-and-drop antar window**.
  - Saat mempratinjau gambar, sidebar mendukung pratinjau **drag-to-zoom**.
  - Optimasi efek visual **file grouping** agar penelusuran lebih jelas dan nyaman.
- **Screen Capture dan Recording** — Mengintegrasikan fitur AI, mendukung pemrosesan AI terhadap teks pada screenshot, seperti penjelasan dan terjemahan.
- **Taskbar** — Mendukung tampilan ikon terpisah (split icon) saat aplikasi membuka beberapa window (perlu diatur di Control Center).
- **Control Center** — Menambahkan pengaturan ukuran pointer mouse (perlu logout atau reboot agar berlaku di sebagian aplikasi).
- **Mail** — Menambahkan fungsionalitas cetak email.
- **AI Companion** — Penyesuaian visual kecil, membuat ikon lebih halus dan operasi lebih mulus.
- **Linyaps Environment**
  - Meningkatkan driver grafis closed-source **Linyaps NVIDIA** secara sinkron ke versi **580.119.02**, memperbaiki masalah driver NVIDIA Linyaps yang menyebabkan aplikasi seperti Cinema/Mail tampil transparan.
  - Untuk pengguna yang upgrade dari **25.0.10**, jika driver NVIDIA lingkungan Linyaps tidak diperbarui secara sinkron, akan muncul pengingat update saat menggunakan Linyaps untuk mendorong pengguna meningkatkan driver grafis lingkungan Linyaps.

## Perbaikan Bug dan Peningkatan Stabilitas

Berikut daftar lengkap perbaikan pada deepin 25.1.0 untuk Anda yang ingin menelusuri detail teknisnya.

<details class="faq-item">
<summary><strong>Sistem dan Keamanan</strong></summary>

- Memperbaiki masalah lambatnya pemeriksaan update dan performa upgrade di Control Center setelah memasang image.
- Memperbaiki masalah partisi BOOT yang penuh menyebabkan kegagalan konfigurasi akhir, yang berujung pada kegagalan upgrade.
- Optimasi logika prompt abnormal untuk update saat mati listrik pada **Solid Immutable System**.
- Memperbaiki beberapa kerentanan keamanan kernel di deepin 25.
- Mengintegrasikan update keamanan kumulatif terkini, berfokus pada perbaikan kerentanan **CVE** untuk komponen sistem dan aplikasi tertentu.
- Memperbaiki masalah log abnormal sistem yang terjadi pada skenario standby wake-up, hibernasi, dan stress testing restart.

</details>

<details class="faq-item">
<summary><strong>DDE (Desktop Environment)</strong></summary>

- Memperbaiki anomali dan crash **Window Manager** (X11/Treeland) pada skenario multi-screen switching, lock screen, taskbar auto-hide, dan Alt+Tab switching.
- Memperbaiki masalah pengaturan "Multi-display" di Control Center yang tidak hilang tepat waktu setelah mencabut layar eksternal dalam mode multi-screen extended.
- Memperbaiki masalah pada mode dual-screen extended di mana wallpaper layar sekunder tidak tampil dan lock screen tidak dapat dimasuki.
- Memperbaiki masalah batas yang tidak jelas pada wallpaper gelap di dark mode.
- Memperbaiki masalah pada modul Control Center - Shortcuts di mana kategori window dan workspace hilang, serta beberapa shortcut window manager hilang dari kategori sistem.
- Memperbaiki masalah kegagalan system update yang dipicu Control Center dan pop-up rollback yang abnormal.

</details>

<details class="faq-item">
<summary><strong>Perbaikan Aplikasi</strong></summary>

- **File Manager** — Memperbaiki masalah seperti tidak adanya peringatan ruang penyimpanan tidak mencukupi dan menu konteks SMB/FTP yang abnormal.
- **Terminal** — Memperbaiki masalah pencetakan log yang abnormal, gaya drag-and-drop tab yang abnormal pada skenario DTK scaling, serta animasi yang tersendat saat menutup window dengan banyak window terbuka.
- **App Store** — Memperbaiki masalah kegagalan pemuatan pada skenario IPv6 dan kegagalan instalasi untuk aplikasi tertentu.
- **Multimedia**
  - Memperbaiki masalah stuttering, noise, dan penggunaan CPU tinggi saat memutar di aplikasi Cinema dan Music pada skenario headset Bluetooth (A2DP).
  - Memperbaiki masalah di mana mengklik modul kontrol volume menyebabkan volume menurun tak terduga, serta masalah perangkat output suara yang otomatis berpindah ke HDMI setelah logout.
- **UOS AI** — Memperbaiki masalah seperti pemuatan antarmuka utama yang abnormal, Q&A knowledge base yang tidak efektif, input NLP yang abnormal, dan tidak tersedianya sebagian fungsi arsitektur.

</details>

## Cara Mendapatkan deepin 25.1.0

Bagi pengguna baru, image ISO deepin 25.1.0 dapat diunduh di [os.deepin.id](https://os.deepin.id). Jika Anda sudah menjalankan deepin 25, pembaruan tersedia melalui **Control Center → System Update**.

Untuk mengikuti perkembangan deepin, pantau juga halaman [Product Planning deepin](https://about.deepin.id/product-planning/) yang memuat jadwal rilis dan rencana fitur versi berikutnya.

## Penutup

deepin 25.1.0 adalah rilis yang padat: **kernel 6.18** dengan **BORE scheduler** menghadirkan pengalaman desktop yang lebih mulus, sementara **UOS AI** bertransformasi menjadi asisten yang benar-benar terintegrasi dengan alur kerja harian melalui **Claw Mode**, **AI Writing Agent**, dan **Skills Center**.

Terima kasih kepada seluruh pengguna yang telah mengirimkan masukan sejak deepin 25. Setiap laporan bug dan saran Anda menjadi bagian dari rilis ini. Punya pertanyaan atau pengalaman seputar update ini? Yuk diskusi di [grup Telegram deepin Indonesia](https://t.me/Linux_deepin_ID) — gratis, ramah, dan berbahasa Indonesia!
