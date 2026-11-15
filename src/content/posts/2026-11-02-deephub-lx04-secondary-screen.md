---
title: "DeepHub: Speaker Xiaomi LX04 Disulap Jadi Layar Kedua PC deepin"
date: 2026-11-02
tags: [komunitas-update]
author: deepin Indonesia
description: "DeepHub, proyek DIY komunitas deepin, mengubah speaker Xiaomi LX04 jadi layar kedua PC deepin: dashboard hardware, remote control, dan layar musik — semuanya via LAN lokal."
image: /images/deephub/deephub-cover.jpg
---

Punya perangkat elektronik menganggur di rumah? Daripada dibuang atau dijual, **@chnome** — salah satu kreator di komunitas deepin — memilih jalan lain: mengubah **speaker pintar Xiaomi Xiaoai Touch Screen Speaker LX04** yang sudah lama tidak dipakai menjadi **layar kedua (secondary screen)** untuk PC deepin.

Proyeknya bernama **DeepHub**. Seluruh sistem berjalan di **jaringan lokal (LAN)** tanpa mengunggah data ke cloud, sehingga privasi tetap terjaga dan perangkat lama kembali berguna.

> **Baca juga:** [deepin 25.3.0 Resmi Dirilis: Freeze Protection, UOS AI Agent, dan Kernel 6.6.159 & 6.18.56](/2026-11-11-deepin-25-3-release) — rilis terbaru deepin yang membawa banyak peningkatan.

![DeepHub: speaker Xiaomi LX04 di samping laptop yang menjalankan deepin](/images/deephub/deephub-cover.jpg)

## Ringkasan

- **Apa:** **DeepHub**, proyek DIY komunitas deepin.
- **Perangkat:** speaker **Xiaomi LX04** + PC **deepin 25**.
- **Tiga fitur utama:** dashboard hardware, remote control PC, dan layar musik.
- **Privasi:** **100% lokal LAN**, tanpa ketergantungan cloud.
- **Sifat:** DIY, bukan *plug and play* — butuh sedikit command dan speaker harus di-flash.

<h2 id="apa-itu-deephub">Apa Itu DeepHub?</h2>

**DeepHub** memanfaatkan speaker pintar **Xiaomi LX04** sebagai layar kecil yang menempel di samping monitor. PC deepin menjalankan layanan latar belakang yang mengumpulkan data hardware, lalu mengirimkannya lewat **LAN** ke aplikasi DeepHub di speaker untuk ditampilkan.

Semua data — status hardware, daftar aplikasi, cover lagu, lirik, hingga cuaca — **hanya berputar di jaringan lokal**. Tidak ada data yang diunggah ke server eksternal.

> **Catatan:** proyek ini cocok untuk yang suka eksperimen (*tinkering*). Speaker **harus** di-flash dengan third-party desktop terlebih dahulu sebelum aplikasi buatan sendiri bisa dipasang.

<h2 id="fitur-dashboard">1. Dashboard Hardware</h2>

Halaman utama speaker menampilkan status PC secara **real-time** — cukup melirik ke samping layar.

**Top bar — cuaca**
- Menampilkan lima elemen cuaca: ikon, kota, rentang suhu, kondisi, dan suhu real-time.
- Ikon digambar sendiri di aplikasi (bukan aset), dengan warna putih dan ukuran font yang seragam.
- PC mengambil lokasi lewat **ip-api.com**, lalu mengambil data cuaca dari **Open-Meteo** dengan **cache 10 menit**.
- Jika lokasi atau jaringan gagal, sistem mencoba ulang otomatis setiap **30 detik**; restart perangkat akan memulihkannya.

**Dashboard & bottom bar**
- Menampilkan **CPU**, **memori**, **kecepatan jaringan**, **suhu hardware**, **kecepatan fan**, **kesehatan baterai**, dan **quick launch**.
- Bagian bawah menampilkan **sisa ruang disk** dan **uptime PC**.
- Data diperbarui otomatis — cocok sebagai layar monitoring sederhana di samping monitor.

![Dashboard DeepHub: top bar cuaca, CPU, memori, network, baterai, fan, dan quick launch](/images/deephub/deephub-dashboard.webp)

<h2 id="fitur-remote">2. Speaker sebagai Remote Control PC</h2>

Geser ke kiri untuk membuka panel **quick launch**. DeepHub memanfaatkan **D-Bus** dan spesifikasi **XDG** deepin untuk memindai aplikasi di PC, lalu mengirim perintah lewat LAN untuk mengendalikan komputer.

![Panel quick launch penuh dengan grid aplikasi PC](/images/deephub/deephub-quick-launch.webp)

**Reverse control** — dari speaker, Anda bisa mengoperasikan PC:
- Klik **File Manager** → PC langsung membuka daftar disk.
- Klik **Multitask View** → efek **Kwin** muncul.
- Speaker pun berubah menjadi panel tombol pintas fisik untuk PC.

![PC: File Manager terbuka otomatis setelah ikon di speaker diklik](/images/deephub/deephub-remote-file-manager.webp)

Klik tombol **"+"** untuk membuka daftar aplikasi. PC memindai aplikasi sesuai **XDG**, mencakup direktori sistem, direktori pengguna, **Linyaps**, **APM**, dan **flatpak**. Aplikasi tersembunyi dan entri tidak valid (sisa uninstall) difilter otomatis, dengan **deduplikasi tiga lapis**; aplikasi yang baru dipasang langsung muncul tanpa perlu restart.

![Menambahkan program PC dari speaker](/images/deephub/deephub-add-program.webp)

Ikon aplikasi tersinkron otomatis, mendukung **drag & drop** untuk mengurutkan, menghapus, dan cukup ketuk ikon untuk membuka aplikasi atau memanggil fungsi sistem seperti **Show Desktop** — tanpa menyentuh keyboard maupun mouse.

![Menekan lama untuk menggeser urutan ikon (ikon yang digeser menyala)](/images/deephub/deephub-drag-sort.webp)

<h2 id="fitur-musik">3. Layar Musik Ambient</h2>

Geser ke kanan untuk masuk ke halaman musik. DeepHub terhubung lewat protokol **Linux MPRIS2** untuk menyinkronkan informasi pemutar musik, lalu mengambil audio sistem untuk dianalisis dengan **FFT** dan diubah menjadi efek dinamis.

- Menampilkan **cover lagu**, **lirik berjalan yang di-highlight**, dan kontrol **ganti lagu / pause** langsung dari speaker.
- Tersedia **8 skema warna lirik** dan **6 efek ritme audio** (spektrum, partikel, waveform, not, dan lainnya) — suasana mendengarkan musik jadi lebih hidup.

![Halaman musik: layar penuh landscape dengan top bar cuaca, cover, lirik berjalan, spektrum, dan efek](/images/deephub/deephub-music-lyrics.webp)

![Efek partikel pada halaman musik](/images/deephub/deephub-music-particles.webp)

<h2 id="auto-reconnect">Koneksi Putus? Auto-Reconnect</h2>

Seluruh sistem dilengkapi logika toleransi kesalahan: **UDP heartbeat** dipadukan dengan **systemd daemon** untuk mendeteksi dan menyambung ulang koneksi secara otomatis.

- Layanan berjalan otomatis di latar belakang saat PC menyala, dan restart sendiri jika terjadi error.
- Saat koneksi terputus, speaker otomatis mencari PC — **bahkan jika IP lokal PC berubah**.
- Mengatasi masalah **WiFi sleep** pada speaker, sehingga lirik dan cover tidak kosong saat berpindah lagu dengan cepat.

<h2 id="arsitektur">Arsitektur: 100% LAN, Tanpa Cloud</h2>

Sistem terbagi menjadi dua bagian: **PC** dan **speaker**. Semua data hanya mengalir di jaringan lokal.

| Aspek | PC deepin 25 | Speaker LX04 |
|---|---|---|
| Layanan | `pchub-server.py` v1.3.7 (paket deb, `sudo dpkg -i`) | Aplikasi **DeepHub** (APK) |
| Data status/apps/cover/lirik/cuaca | HTTP **:8787** | UI **117 KB** murni kode (tanpa XML, digambar sendiri) |
| Heartbeat | — | UDP **:8788** (per detik) |
| Pemutaran musik | **MPRIS2 / D-Bus** | Dashboard, lirik, 6 visualisasi, ikon cuaca digambar tangan |
| Audio | `parec` (PulseAudio) + **FFT** murni Python | — |
| Lokasi & cuaca | ip-api + Open-Meteo (cache 10 menit) | — |
| Persistensi | **systemd** (`User=` pengguna desktop), auto-start + crash guard | — |
| Build & instalasi | — | `ecj` + `d8` + `aapt2`, instal via `adb` |

<h2 id="sebelum-mencoba">Sebelum Mencoba: Catatan Penting</h2>

DeepHub adalah proyek **DIY**, bukan produk *plug and play*. Beberapa hal yang perlu diketahui:

- Speaker **harus di-flash** dengan third-party desktop — firmware bawaan tidak bisa dipakai.
- PC harus menjalankan **deepin**, dan perlu memasang **tool latar belakang** pendamping.
- Ada beberapa **command** yang harus dijalankan. Jika benar-benar pemula, sebaiknya pelajari dulu atau tunggu panduan yang lebih lengkap.

Selama proses, kreator juga mencatat beberapa kendala: keterbatasan firmware LX04, konfigurasi izin, pengenalan berbagai format aplikasi, WiFi sleep, hingga entri desktop tidak valid.

<h2 id="ekstensi">Bukan Cuma LX04</h2>

DeepHub tidak terbatas pada speaker LX04. **Perangkat Android lain** — termasuk **HP Android lama** — juga bisa memasang APK yang sama dan berubah menjadi layar kedua untuk PC Linux.

![HP Android (Sony) menjalankan DeepHub sebagai layar kedua PC deepin](/images/deephub/deephub-android-phone.jpg)

<h2 id="latar-belakang">Latar Belakang: Budaya DIY Komunitas deepin</h2>

deepin menyediakan antarmuka sistem seperti **D-Bus**, **MPRIS**, dan **XDG** yang terbuka, sehingga mendorong pengguna untuk bereksperimen dengan desktop mereka. Proyek ini adalah contoh nyata budaya *"tinkering"* komunitas: perangkat lama mendapat nilai baru, dan seluruh data tetap di jaringan lokal.

Di komunitas deepin, ekosistem tidak hanya dibangun oleh pengembangan resmi — praktik, catatan *pitfall*, dan berbagi solusi dari pengguna biasa juga memperkaya ekosistem dan menginspirasi lebih banyak orang.

Jika Anda tertarik dengan proyek DeepHub, silakan kunjungi **thread DeepHub di forum deepin** untuk berdiskusi langsung dengan developer dan mendapatkan informasi lebih detail.

---

Source: [Komunitas deepin] deepin（深度） 社区  - weixin.
