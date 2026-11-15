---
title: "deepin Skills Resmi Masuk deepin Store, UOS AI Bisa Langsung Memanggilnya"
date: 2026-11-06
tags: [komunitas-update]
author: deepin Indonesia
description: "deepin Skills resmi hadir di deepin Store: 6 skill untuk deepin 25/UOS V25, dari dtk-development hingga deepin-desktop-environment. UOS AI bisa langsung memanggilnya."
image: /images/deepin-skills-store/deepin-skills-store.jpg
---

**deepin Skills** kini resmi tersedia di **deepin Store**. Bagi pengguna **UOS AI (小U同学)**, ini berarti Anda bisa mengunduh paket skill resmi langsung dari store, lalu meminta UOS AI mengembangkan aplikasi, memperluas desktop, atau menulis modul pengaturan sistem — cukup dengan **natural language**.

Bagi pengguna alat AI coding lain, deepin Skills juga dapat diunduh dan dipasang lewat repositori resminya, sehingga kemampuan native deepin bisa dihubungkan ke **Agent** milik Anda sendiri.

> **Baca juga:** [UOS AI deepin Raih 'AI + Software' Peak Practice Award di OSCAR 2026](/2026-11-10-oscar-2026-uos-ai) — pengakuan industri atas integrasi AI dan software deepin.

![deepin Skills resmi hadir di deepin Store](/images/deepin-skills-store/deepin-skills-store.jpg)

## Ringkasan

- **Apa:** deepin Skills — paket skill native deepin — resmi masuk **deepin Store**.
- **Jumlah skill:** **6 skill** (naik dari 4), mencakup pengembangan aplikasi hingga pengelolaan desktop.
- **Kompatibilitas:** **deepin 25 / UOS V25**.
- **Akses:** satu klik di deepin Store untuk pengguna UOS AI; atau instal via repositori untuk Agent lain.
- **Open source:** [linuxdeepin/deepin-skills](https://github.com/linuxdeepin/deepin-skills).

<h2 id="apa-itu-deepin-skills">Apa Itu deepin Skills?</h2>

**deepin Skills** mengorganisasi pengetahuan framework, antarmuka plugin, praktik engineering, studi kasus evaluasi, dan kemampuan operasi sistem yang telah lama divalidasi di ekosistem deepin menjadi **dokumen skill** dan **kemampuan yang dapat dipanggil**, lalu dimuat sesuai kebutuhan.

Sederhananya, ini adalah **paket skill native deepin berbasis skenario** yang:

- Memuat panduan otoritatif untuk pengembangan, sehingga dapat menyelesaikan berbagai masalah pengembangan.
- Dapat **mengoperasikan aplikasi native** melalui **public interface**.
- Dapat **mengkueri dan mengonfigurasi** desktop DDE serta status sistem.

Dengan kata lain, AI tidak hanya membantu menulis kode, tetapi juga dapat memanggil kemampuan sistem, mengecek status, dan melakukan verifikasi sesuai dokumentasi.

<h2 id="enam-skill">6 Skill yang Didukung</h2>

deepin Skills telah berevolusi dari **4 skill pengembangan inti** menjadi **6 skill**, mencakup berbagai skenario dan kebutuhan personal. Cakupannya membentang dari "menulis aplikasi" hingga "mengelola desktop", dan kompatibel dengan **deepin 25 / UOS V25**.

| Skill | Kegunaan |
|---|---|
| `dtk-development` | Mengembangkan & memelihara aplikasi desktop native berbasis **DTK** |
| `dde-shell-development` | Memperluas **DDE Shell** |
| `dde-control-center-development` | Mengembangkan modul & plugin pengaturan **Control Center** |
| `dde-tray-development` | Mengembangkan plugin **tray** taskbar & kontrol quick panel |
| `deepin-desktop-apps` | Mengoperasikan aplikasi native melalui **public interface** |
| `deepin-desktop-environment` | Mengkueri & mengonfigurasi desktop **DDE** dan status sistem |

Empat skill pertama berfokus pada **"membuat aplikasi & plugin"**, sedangkan dua terakhir pada **"menggunakan antarmuka & mengelola desktop"**. AI pun bukan hanya menulis kode, tetapi juga dapat memanggil kemampuan sistem, mengecek status, dan melakukan verifikasi berdasarkan dokumentasi.

![Menu Skills di UOS AI](/images/deepin-skills-store/deepin-skills-menu.webp)

<h2 id="cara-menggunakan">Cara Menggunakan deepin Skills</h2>

### Pengguna UOS AI: langsung siap pakai

- Pasang dengan **satu klik** dari deepin Store — integrasi mulus, pengalaman langsung meningkat.
- Jika setelah instalasi skill belum muncul di UOS AI, buka **"Skill Management → My Skills"**, klik **refresh**, lalu aktifkan skill yang ingin digunakan.

Panduan singkat:

- **Pengguna umum** — cukup aktifkan `deepin-desktop-apps` dan `deepin-desktop-environment`.
- **Developer deepin** — aktifkan skill yang mengandung **"development"** untuk membantu mengembangkan plugin atau aplikasi deepin.

### Kompatibel dengan alat AI mainstream

Unduh dan pasang paket skill dari repositori deepin Skills. Semua **Agent** yang dapat membaca `SKILL.md` bisa menggunakannya:

```bash
bash <(curl -fsSL https://raw.githubusercontent.com/linuxdeepin/deepin-skills/master/scripts/install.sh)
```

![Halaman My Skills untuk mengaktifkan skill deepin](/images/deepin-skills-store/deepin-skills-my-skills.webp)

<h2 id="open-source">Open Source & Kontribusi</h2>

deepin Skills sepenuhnya **open source**. Repositori resminya: [linuxdeepin/deepin-skills](https://github.com/linuxdeepin/deepin-skills).

Jika Anda memiliki standar pengembangan, pengalaman menghindari jebakan (pitfall), atau workflow khusus, Anda dapat mengemasnya menjadi **Skill** sesuai panduan kontribusi dan mengirim **Pull Request**. Dengan begitu, kemampuan tersebut terbuka untuk semua developer deepin dan AI mereka.

> Yang Anda buat bukan sekadar dokumentasi, melainkan keyakinan bahwa developer lain bisa menjalankan tugas hanya dengan satu kalimat kepada UOS AI.

---

Coba langsung: cari **deepin Skills** di **deepin Store** dan buka cara baru pengembangan cerdas bersama deepin.

Source: [Komunitas deepin] deepin（深度） 社区  - weixin.
