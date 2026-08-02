---
title: "deepin-skills Resmi Open Source: Panduan Lengkap Developer deepin & UOS"
date: 2026-07-31
tags: [tips-deepin]
author: deepin Indonesia
description: "deepin-skills resmi open source! Panduan lengkap 4 skill inti untuk developer: DTK, DDE Shell, Control Center, dan Tray. Instal sekali, langsung mulai coding aplikasi deepin."
image: /images/deepin-skills-open-source/deepin-Skills.png
---

Komunitas deepin resmi merilis **deepin-skills** sebagai proyek open source — sebuah repositori **skill library** untuk pengembangan aplikasi native dan plugin desktop di ekosistem **deepin** dan **UOS**. Baik kamu developer pemula yang baru mengenal ekosistem deepin, maupun developer senior, deepin-skills akan membantu kamu membangun aplikasi deepin dengan lebih cepat dan tepat.

🔗 **GitHub**: [github.com/linuxdeepin/deepin-skills](https://github.com/linuxdeepin/deepin-skills)

![Banner resmi deepin-skills — skill library untuk developer deepin kini open source](/images/deepin-skills-open-source/deepin-Skills.png)

## Apa Itu deepin-skills?

**deepin-skills** adalah kumpulan pengetahuan teknis terstruktur yang mengorganisir framework, antarmuka plugin, praktik rekayasa, dan kasus evaluasi dari ekosistem deepin ke dalam **dokumen skill** yang bisa dimuat sesuai kebutuhan (on-demand). Cocok untuk developer yang ingin membangun aplikasi di **deepin 25** atau **UOS V25**.

Setiap skill dalam deepin-skills memiliki struktur direktori standar:

| Direktori | Fungsi |
|-----------|--------|
| `SKILL.md` | Deskripsi trigger dan routing tugas development |
| `agents/openai.yaml` | Daftar skill dan prompt default untuk AI agent |
| `references/` | Materi teknis detail yang dimuat sesuai permintaan |
| `evals/` | Test case validasi untuk memverifikasi hasil development |

Singkatnya, deepin-skills adalah **panduan skenario** terlengkap untuk pengembangan native deepin — setiap kendala teknis yang kamu temui saat coding, solusinya sudah tersedia di sini.

> **Baca juga:** [Panduan Lengkap Cross-Device Collaboration deepin — Transfer File, Sharing Keyboard Mouse, dan Screen Mirroring](/2025-11-30-deepin-cross-device-collaboration)

---

## 4 Skill Inti deepin-skills

Saat ini deepin-skills memiliki **empat skill inti** yang siap membantu berbagai skenario pengembangan aplikasi deepin:

### 1. DTK Development — Membangun Aplikasi Desktop Native

**Cocok untuk:** Developer yang ingin membuat aplikasi desktop deepin/UOS berbasis DTK (Deepin Tool Kit)

**Yang akan kamu pelajari:**
- Memahami arsitektur DTK, pembagian modul, dan tanggung jawab tiap komponen
- Memilih dan mengimplementasikan stack **QWidget** atau **QML** untuk membangun antarmuka
- Menerapkan tema, ikon, dan konfigurasi **DConfig** sesuai standar deepin
- Integrasi layanan sistem: **D-Bus**, notifikasi desktop, single instance
- Konfigurasi **CMake**, efek window, adaptasi **X11 & Wayland**, serta debugging DTK

![Dokumentasi DTK Development — panduan membangun aplikasi desktop native deepin dengan DTK](/images/deepin-skills-open-source/deepin-skills-dtk.jpg)

### 2. DDE Shell Development — Membangun Plugin Desktop

**Cocok untuk:** Developer yang ingin memperluas DDE Shell — Dock, panel atas, panel samping

**Yang akan kamu pelajari:**
- Memilih dan mengimplementasikan plugin **Applet**, **Containment**, atau **Panel** (model plugin tiga lapis)
- Integrasi **QML & C++** untuk plugin yang powerful
- Memahami siklus hidup plugin dan mekanisme loading di DDE Shell
- Membangun window **LayerShell** Wayland yang menempel presisi di tepi layar

![Dokumentasi DDE Shell Development — panduan membuat plugin desktop deepin](/images/deepin-skills-open-source/deepin-skills-dde-shell.jpg)

### 3. Control Center Development — Membangun Halaman Pengaturan

**Cocok untuk:** Developer yang ingin menambah modul di DDE Control Center (System Settings)

**Yang akan kamu pelajari:**
- Memahami module tree, navigasi, dan mekanisme pencarian di Control Center
- Menggunakan **C++ API** atau **QML components** untuk membangun halaman pengaturan
- Menangani interaksi data via **D-Bus**
- Build, terjemahan, packaging, instalasi, dan debugging plugin secara end-to-end

![Dokumentasi DDE Control Center Development — panduan plugin pengaturan sistem deepin](/images/deepin-skills-open-source/deepin-skills-control-center.jpg)

### 4. Tray Development — Membangun Plugin System Tray

**Cocok untuk:** Developer yang ingin membuat plugin taskbar tray dan quick panel

**Yang akan kamu pelajari:**
- Mengimplementasikan tray plugin via interface **PluginsItemInterfaceV2**
- Menangani status plugin, protokol pesan, dan context menu (klik kanan)
- Membangun quick panel detail dan beradaptasi dengan perubahan posisi taskbar
- Menghasilkan plugin taskbar yang stabil dan sesuai standar deepin

![Dokumentasi DDE Tray Development — panduan plugin system tray deepin](/images/deepin-skills-open-source/deepin-skills-dde-tray.jpg)

---

## Cara Instal deepin-skills

Instalasi deepin-skills sangat sederhana — cukup **satu perintah** di terminal. Semua skill akan terinstal ke `${SKILL_HOME:-~/.agents}/skills`:

**Instalasi online (direkomendasikan):**
```bash
bash <(curl -fsSL https://raw.githubusercontent.com/linuxdeepin/deepin-skills/master/scripts/install.sh)
```

**Instalasi dari file lokal:**
```bash
./scripts/install.sh
```

**Force overwrite — online:**
```bash
bash <(curl -fsSL https://raw.githubusercontent.com/linuxdeepin/deepin-skills/master/scripts/install.sh) --force
```

**Force overwrite — lokal:**
```bash
./scripts/install.sh --force
```

---

## Cara Menggunakan deepin-skills untuk Development

Setelah terinstal, buka project kamu di **AI Coding Agent** yang mendukung Skill (seperti 小U同学 atau Copilot). Cukup deskripsikan tugas development yang ingin kamu selesaikan dalam **bahasa natural** — AI agent akan otomatis mendeteksi skill yang relevan dan memuat dokumen referensi yang dibutuhkan.

### Contoh Prompt untuk Memulai

**🎨 UI/UX Designer:**
> Desain jendela pengaturan untuk aplikasi desktop deepin, mencakup halaman Akun, Notifikasi, dan Tampilan. Implementasikan UI dan interaksi sesuai standar DTK.

**📋 Project Manager:**
> Kembangkan plugin status jaringan untuk taskbar — klik menampilkan quick panel, mendukung pengecekan status koneksi dan shortcut ke pengaturan sistem.

**💻 Software Developer:**
> Tambahkan modul pengaturan sistem baru di DDE Control Center, mencakup navigasi halaman, penyimpanan konfigurasi, dan interaksi data via D-Bus.

AI akan mengenali skill yang relevan, memuat dokumen arsitektur, penjelasan API, contoh kode, hingga test case validasi — seperti memiliki **mentor teknis** yang menguasai development deepin 24/7.

---

## Pertanyaan Seputar deepin-skills

<details>
<summary><strong>Apakah deepin-skills gratis?</strong></summary>

Ya, deepin-skills **sepenuhnya gratis dan open source** di bawah lisensi open source. Kamu bisa menggunakan, memodifikasi, dan berkontribusi ke proyek ini tanpa biaya apapun.
</details>

<details>
<summary><strong>Apakah deepin-skills hanya untuk developer deepin?</strong></summary>

Skill ini dioptimalkan untuk ekosistem **deepin 25** dan **UOS V25**, tapi pengetahuan DTK dan Qt di dalamnya juga relevan untuk pengembangan aplikasi Linux desktop secara umum.
</details>

<details>
<summary><strong>AI agent apa saja yang didukung?</strong></summary>

deepin-skills menggunakan format standar yang kompatibel dengan berbagai AI coding agent yang mendukung sistem Skill, termasuk **小U同学** (deepin native), GitHub Copilot, dan Claude Code.
</details>

<details>
<summary><strong>Bagaimana cara berkontribusi ke deepin-skills?</strong></summary>

Kamu bisa berkontribusi lewat GitHub: buat issue untuk melaporkan bug, submit pull request untuk menambahkan skill baru atau memperbaiki dokumentasi, dan ikut serta dalam diskusi komunitas di halaman proyek.
</details>

---

## Mulai Bangun Aplikasi deepin

Proyek deepin-skills sudah **sepenuhnya open source** dan siap digunakan oleh developer Indonesia. Kunjungi repositori GitHub untuk mulai:

🔗 [github.com/linuxdeepin/deepin-skills](https://github.com/linuxdeepin/deepin-skills)

Baik kamu ingin berkontribusi ke ekosistem deepin, membangun aplikasi Linux pertama kamu, atau meningkatkan skill development desktop — **deepin-skills** adalah teman coding yang kamu butuhkan. Mari bersama membangun ekosistem open source Indonesia yang lebih kuat! 🚀

> **Baca juga:** [deepin 25.2.0 Resmi Dirilis — Treeland Makin Stabil, Pencarian Gambar Pakai AI, dan Ratusan Perbaikan Bug](/2026-07-08-deepin-25-2-release)

---

*Source: [Komunitas deepin] deepin（深度）社区 — weixin*
