---
layout: post
title: "deepin 25.2.0 Resmi Dirilis — Treeland Makin Stabil, Pencarian Gambar Pakai AI, dan Ratusan Perbaikan Bug"
date: 2026-07-08 10:00:00 +0700
categories: release
tags: [Release Notes]
author: deepin Indonesia
description: >-
  deepin 25.2.0 resmi rilis dengan peningkatan besar di Treeland, pencarian gambar berbasis AI,
  taskbar split mode, kernel terbaru, dan ratusan bug fix. Simak changelog lengkapnya di sini.
image: /assets/images/deepin-25-2-release.jpg
---

Komunitas deepin resmi merilis **deepin 25.2.0**! Update ini membawa peningkatan signifikan pada stabilitas dan usability **Treeland** (Wayland compositor deepin), kemampuan pencarian file dan gambar yang lebih cerdas, penyempurnaan interaksi **DDE (Deepin Desktop Environment)**, serta pembaruan kernel dan patch keamanan. Total ada ratusan perbaikan bug yang membuat deepin 25 semakin solid untuk penggunaan sehari-hari.

![deepin 25.2.0 — Treeland, AI image search, dan DDE enhancements]({{ '/assets/images/deepin-25-2-release.jpg' | relative_url }})

## Sorotan deepin 25.2.0

<div style="max-width:720px;margin:1.5rem auto">
<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:12px">
<iframe src="https://www.youtube-nocookie.com/embed/dzOo36Qpae8?rel=0" style="position:absolute;inset:0;width:100%;height:100%" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen loading="lazy"></iframe>
</div>
<p style="text-align:center;font-size:.85rem;color:var(--color-gray-400);margin-top:.5rem">Video rilis deepin 25.2.0 — lihat fitur baru dalam aksi</p>
</div>

### Treeland Desktop Environment — Upgrade Besar

**Treeland**, Wayland compositor andalan deepin, mendapat peningkatan stabilitas dan usability yang sangat signifikan di versi ini:

- **20+ perbaikan stabilitas** — fokus pada perilaku abnormal saat login, logout, multitasking view, window management, dan focus switching
- **Integrasi berkelanjutan** versi baru Treeland untuk window management, taskbar coordination, dan desktop session yang lebih stabil
- **Adaptasi penuh dengan DDE core capabilities** — termasuk input devices, display settings, personalization, power management, dan fitur desktop esensial lainnya
- **Multi-screen setup** kini mendukung cloning, extending, perbedaan resolusi dan scaling per layar
- **Dynamic wallpapers**, scheduled standby, suspend, dan display turn-off kini berfungsi normal

### File Management & Search — Pencarian Gambar Pakai AI

Salah satu fitur paling menarik di deepin 25.2.0 adalah kemampuan **image content search**:

- **File indexing configuration** — pengguna bisa enable, disable, dan update indexing di file manager advanced settings. Fitur ini mempercepat filename search sekaligus bisa dinonaktifkan untuk mengurangi resource usage
- **Image content search** — cari gambar lokal berdasarkan **teks yang terkandung di dalamnya**. Sangat berguna untuk mencari screenshot, scanned documents, foto poster, dan lainnya. (Perlu di-enable manual di file manager settings)
- **Text match snippets** dari gambar ditampilkan di File Manager dan Global Search dengan highlight keyword — hasil pencarian jadi lebih intuitif
- **Document content retrieval** di Global Search — mencari file berdasarkan isi dokumen, bukan hanya nama file
- **Samba sharing** dan **USB/external storage** handling dioptimalkan, termasuk keamanan mount/unmount path

### DDE Desktop Experience — Taskbar Split Mode

Interaksi desktop sehari-hari semakin nyaman dengan berbagai penyempurnaan:

- **Taskbar icon split mode** kini menampilkan ikon per window. Contoh: WeChat main window, mini-program window, dan file window masing-masing punya ikon berbeda — identifikasi window di skenario multi-window jadi jauh lebih jelas
- **Cross-screen splicing mode** di display settings — menggabungkan beberapa monitor fisik menjadi satu area tampilan logis, mendukung horizontal, vertikal, dan matrix arrangement. Cocok untuk presentasi layar besar, command dispatch, dan data dashboard
- **Intelligent mirror source selection** di update settings — sistem otomatis mencocokkan mirror source, atau pengguna bisa switch manual setelah speed test
- Optimasi interaksi untuk **launcher, taskbar, touchscreen, tray pop-ups, window focus, dan window switching**
- Network detection dan switching logic dioptimalkan untuk skenario **multi-NIC**

### Kernel & Security — Kernel 6.6 dan 6.18

- Update **community kernel 6.6 dan 6.18 branches** — mencakup AMD64, ARM64, dan Loong64
- Perbaikan system updates, mirror source configuration, temporary file handling
- Fix **automatic rollback** setelah reboot yang terjadi di beberapa model saat control center upgrade
- Update **Qt6, initramfs, ALSA, PipeWire, libvirt**, dan komponen dasar lainnya
- Sinkronisasi update **OpenSSL, OpenSSH, curl, poppler, xorg-server, xwayland, ffmpeg** — termasuk multiple CVE security fixes

### Aplikasi Bawaan — Penyempurnaan Menyeluruh

- **Terminal**: command execution dan theme application dioptimalkan
- **Archive Manager**: perbaikan archive processing, password dialog, dan long filename extraction
- **Mail**: optimasi account data migration — mengurangi risiko re-login setelah upgrade
- **Image Viewer, Album, Music, Movie**: fix display, interaction, dan stability
- **Document Viewer**: kini mendukung **arrow keys (up/down)** untuk scroll baris per baris
- **Input Method Configuration, Voice Notepad, Log Viewer, System Monitor** — update komponen

## Ratusan Bug Fix yang Paling Berdampak

### Treeland Fixes
- ✅ Fix crash saat logout dengan Text Editor yang punya unsaved content
- ✅ Fix system crash setelah reboot ke desktop
- ✅ Fix freeze saat menutup window thumbnails di multitasking view
- ✅ Fix tombol Esc tidak bisa membatalkan window resizing
- ✅ Fix desktop dan taskbar hilang setelah cepat memasukkan password
- ✅ Fix launcher full-screen — karakter yang diketik tidak masuk search box

### DDE & Desktop Interaction Fixes
- ✅ Fix taskbar icon display, tray pop-up position, touchscreen long-press
- ✅ Fix Dock theme tidak mengikuti system dark/light mode di Treeland
- ✅ Fix crash di Dock task manager saat menutup window
- ✅ Fix network detection failures di skenario multi-NIC

### File Manager & Search Fixes
- ✅ Fix crash di Samba sharing scenarios
- ✅ Optimasi file search result display, content snippets, dan index update
- ✅ Fix keamanan mount/unmount paths

## Mengapa deepin 25.2.0 Wajib Di-upgrade?

| Aspek | Sebelum (25.1) | Sesudah (25.2.0) |
|---|---|---|
| **Stabilitas Treeland** | ⚠️ Masih ada bug login/logout | ✅ 20+ fix, jauh lebih stabil |
| **Pencarian gambar** | ❌ Hanya berdasarkan nama file | ✅ AI image content search |
| **Multi-monitor** | ⚠️ Terbatas | ✅ Cross-screen splicing + per-screen scaling |
| **Taskbar** | ⚠️ Satu ikon per aplikasi | ✅ Split mode — ikon per window |
| **Kernel** | 6.6/6.18 awal | ✅ 6.6/6.18 terbaru + security patches |
| **Aplikasi bawaan** | ⚠️ Beberapa bug | ✅ Puluhan fix di 15+ aplikasi |

## Cara Upgrade ke deepin 25.2.0

Buka **Control Center** → **Update** → klik **Check for Updates**. Atau via terminal:

```bash
sudo apt update && sudo apt upgrade
```

Bagi yang ingin install ulang, ISO terbaru bisa di-download di **[os.deepin.id](https://os.deepin.id)**.

---

## Pertanyaan yang Sering Muncul

<details markdown="1">
<summary><strong>Apakah deepin 25.2.0 sudah stabil untuk daily driver?</strong></summary>

Ya. Dengan 20+ fix di Treeland dan ratusan perbaikan lainnya, deepin 25.2.0 sangat direkomendasikan untuk penggunaan sehari-hari.

</details>

<details markdown="1">
<summary><strong>Apa itu Treeland dan kenapa penting?</strong></summary>

Treeland adalah Wayland compositor modern buatan deepin yang menggantikan X11. Di versi 25.2.0, Treeland sudah cukup matang dengan dukungan penuh multi-monitor, dynamic wallpaper, dan integrasi DDE.

</details>

<details markdown="1">
<summary><strong>Apakah fitur AI image search tersedia default?</strong></summary>

Fitur ini perlu di-enable manual di File Manager → Settings → Image Text Content Search Indexing. Setelah diaktifkan, deepin akan meng-index teks dalam gambar untuk pencarian cepat.

</details>

<details markdown="1">
<summary><strong>Berapa lama proses upgrade dari 25.1 ke 25.2.0?</strong></summary>

Tergantung kecepatan internet dan spesifikasi laptop. Rata-rata 15-30 menit melalui Control Center.

</details>

---

Sudah upgrade ke deepin 25.2.0? Bagikan pengalamanmu dan fitur favorit di [grup Telegram deepin Indonesia](https://t.me/Linux_deepin_ID){:target="_blank" rel="noopener"}! 🚀✨
