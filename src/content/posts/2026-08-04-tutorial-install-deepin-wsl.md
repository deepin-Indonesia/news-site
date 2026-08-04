---
title: "Tutorial Lengkap Install deepin 25 di Windows via WSL — Mudah, Offline, Tanpa Ribet!"
date: 2026-08-04
tags: [tutorial, wsl, deepin-25, tips-deepin, pemula]
author: deepin Indonesia
description: "Panduan langkah demi langkah install deepin 25 di Windows 10/11 menggunakan WSL (Windows Subsystem for Linux). Mulai dari enable WSL, download, install offline, manajemen subsystem, sampai integrasi dengan Windows. Cocok untuk developer, pelajar, dan pengguna awam yang ingin mencoba deepin tanpa dual-boot atau virtual machine."
image: /images/deepin-wsl-tutorial/deepin-wsl-cover.jpg
---

Apakah kamu ingin mencoba **deepin 25** — sistem operasi Linux modern dengan antarmuka tercantik — tapi tidak ingin repot dual-boot atau virtual machine? Kabar baik: deepin 25 kini tersedia dalam format **WSL (Windows Subsystem for Linux)**, dan proses instalasinya **sangat mudah, bahkan bisa dilakukan secara offline**!

> **Artikel ini adalah panduan paling lengkap** untuk install deepin 25 WSL di Windows. Kami akan memandumu dari nol — mulai dari pengertian WSL, persiapan sistem, langkah instalasi, manajemen subsystem, troubleshooting umum, sampai tips integrasi dengan Windows. Ikuti sampai akhir agar tidak ada yang terlewat.

## Daftar Isi

1. [Apa Itu WSL dan Kenapa Kamu Harus Pakai?](#apa-itu-wsl)
2. [Persiapan Sebelum Install](#persiapan)
3. [Langkah 1 — Enable WSL di Windows](#langkah-1)
4. [Langkah 2 — Download deepin 25 WSL](#langkah-2)
5. [Langkah 3 — Install deepin 25 WSL](#langkah-3)
6. [Langkah 4 — Setup Awal & Buat User](#langkah-4)
7. [Manajemen WSL Sehari-hari](#manajemen-wsl)
8. [Integrasi deepin WSL dengan Windows](#integrasi-windows)
9. [Troubleshooting & FAQ](#troubleshooting)
10. [Penutup](#penutup)

---

<h2 id="apa-itu-wsl">Apa Itu WSL dan Kenapa Kamu Harus Pakai?</h2>

**WSL (Windows Subsystem for Linux)** adalah fitur bawaan Microsoft yang memungkinkan kamu menjalankan lingkungan GNU/Linux secara native di dalam Windows — **tanpa virtual machine, tanpa dual-boot, tanpa overhead performa**.

### Keunggulan deepin via WSL:

| Fitur | Manfaat |
|-------|---------|
| 🚀 **Performa Native** | Akses langsung ke hardware — tidak ada overhead VM |
| 📦 **Instalasi Offline** | File `.wsl` bisa didownload sekali, diinstall berkali-kali tanpa internet |
| 🔄 **Multi-Versi** | Bisa install deepin 23 dan deepin 25 bersamaan tanpa konflik |
| 🖥️ **Integrasi Windows** | Edit file pakai VS Code Windows, akses localhost, copy-paste dua arah |
| 💾 **Ringan** | Hanya pakai resource saat dibutuhkan — tidak boros RAM seperti VM |
| 🎯 **Ideal untuk Developer** | Toolchain Linux lengkap: GCC, Python, Node.js, Docker, Git, dll |

### WSL vs Virtual Machine vs Dual-Boot

| Aspek | WSL | Virtual Machine | Dual-Boot |
|-------|-----|-----------------|-----------|
| **Performa** | ⭐⭐⭐⭐⭐ Near-native | ⭐⭐⭐ Ada overhead | ⭐⭐⭐⭐⭐ Native penuh |
| **Kemudahan Setup** | ⭐⭐⭐⭐⭐ Sangat mudah | ⭐⭐⭐ Perlu konfigurasi | ⭐⭐ Perlu partisi disk |
| **Akses File Windows** | ⭐⭐⭐⭐⭐ Otomatis | ⭐⭐ Perlu shared folder | ❌ Terpisah total |
| **RAM Usage** | ⭐⭐⭐⭐⭐ Ringan | ⭐⭐ Boros (reserved RAM) | ⭐⭐⭐⭐⭐ Efisien |
| **GUI Desktop** | ⭐⭐⭐ Bisa dengan trik | ⭐⭐⭐⭐⭐ Full desktop | ⭐⭐⭐⭐⭐ Full desktop |
| **Cocok Untuk** | Developer, belajar Linux, CLI tools | Testing OS, GUI apps | Pengganti OS utama |

> **Kesimpulan:** Jika tujuanmu adalah belajar Linux, development, atau menjalankan tools Linux di Windows — **WSL adalah pilihan terbaik**. Jika ingin pengalaman deepin desktop penuh, pertimbangkan [dual-boot atau install langsung](/2025-07-15-dummy-deepin-migration).

---

<h2 id="persiapan">Persiapan Sebelum Install</h2>

### Syarat Sistem Minimum

Sebelum memulai, pastikan sistem Windows kamu memenuhi syarat berikut:

| Komponen | Minimum | Rekomendasi |
|----------|---------|-------------|
| **Windows** | Windows 10 versi 2004+ (Build 19041+) | Windows 11 22H2+ |
| **Arsitektur** | x64 (AMD64) atau ARM64 | x64 (AMD64) |
| **RAM** | 4 GB | 8 GB+ |
| **Storage** | 5 GB free space | 15 GB+ untuk development |
| **Virtualization** | Harus di-enable di BIOS/UEFI | Harus di-enable di BIOS/UEFI |

> **⚠️ Syarat Mutlak WSL 2:** Karena WSL 2 menjalankan *kernel* Linux asli melalui **Virtual Machine Platform** (subset dari Hyper‑V), *hardware virtualization* — **Intel VT‑x** (prosesor Intel) atau **AMD‑V** (prosesor AMD) — wajib aktif di tingkat BIOS/UEFI. Tanpa ini, WSL 2 tidak akan berjalan.

### Cara Cek Versi Windows

Buka PowerShell atau CMD, lalu jalankan:

```powershell
winver
```

Atau via Settings → System → About → cek **Version** dan **OS Build**. Pastikan minimal Build **19041**.

![Jendela About Windows — tampilan winver yang menampilkan versi Windows dan OS Build](/images/deepin-wsl-tutorial/01-winver-about-windows.png)

### Cara Cek Virtualization Sudah Aktif

Buka **Task Manager** (Ctrl + Shift + Esc) → tab **Performance** → lihat bagian **Virtualization**:

```
Virtualization: Enabled ✅  ← harusnya seperti ini
```

Jika tertulis **Disabled**, kamu perlu enable **Intel VT-x** atau **AMD-V** di BIOS/UEFI. Caranya:
1. Restart komputer
2. Masuk BIOS/UEFI (biasanya tekan F2, Del, F10, atau Esc saat booting)
3. Cari menu **Advanced** → **Virtualization Technology**
4. Set ke **Enabled**
5. Save & Exit

![Task Manager tab Performance — status Virtualization: Enabled](/images/deepin-wsl-tutorial/02-task-manager-virtualization-enabled.png)

---

<h2 id="langkah-1">Langkah 1 — Enable WSL di Windows</h2>

Kita akan mengaktifkan WSL menggunakan **PowerShell dengan hak Administrator**. Ikuti langkah-langkah berikut:

### 1.1 Buka PowerShell sebagai Administrator

Klik kanan tombol **Start** (logo Windows) → pilih **Terminal (Admin)** atau **Windows PowerShell (Admin)**.

![Start Menu klik kanan — opsi Windows PowerShell (Admin) atau Terminal (Admin)](/images/deepin-wsl-tutorial/03-start-menu-powershell-admin.png)

### 1.2 Install WSL

Di jendela PowerShell, jalankan perintah berikut **satu per satu**:

```powershell
wsl --install
```

Tunggu proses selesai. Perintah ini akan:
- Mengaktifkan fitur **Windows Subsystem for Linux**
- Mengaktifkan **Virtual Machine Platform**
- Mendownload dan menginstall **WSL kernel terbaru**
- Secara default, juga akan mendownload Ubuntu (bisa kamu batalkan — lihat catatan di bawah)

> **💡 Tips:** Saat pertama kali menjalankan `wsl --install`, sistem akan otomatis mendownload Ubuntu. Jika kamu **hanya ingin deepin**, cukup tekan **Ctrl + C** saat muncul pesan "Installing: Ubuntu" atau "Uncompressing and storing...". Ini TIDAK akan membatalkan instalasi komponen WSL — hanya skip Ubuntu.

### 1.3 Update WSL ke Versi Terbaru

```powershell
wsl --update
```

Pastikan WSL versi terbaru untuk kompatibilitas optimal dengan deepin 25.

### 1.4 Restart Komputer

**Wajib restart!** Setelah restart, WSL sudah siap digunakan.

```powershell
# Opsional: cek apakah WSL sudah terinstall dengan benar
wsl --version
```

Output yang diharapkan (versi bisa berbeda):

```
WSL version: 2.x.x
Kernel version: 5.x.x
WSLg version: 1.x.x
MSRDC version: 1.x.x
Direct3D version: 1.x.x
DXCore version: 10.x.x
Windows version: 10.x.x
```

![PowerShell — output perintah wsl --version yang menampilkan komponen WSL](/images/deepin-wsl-tutorial/04-wsl-version-output.png)

---

<h2 id="langkah-2">Langkah 2 — Download deepin 25 WSL</h2>

Sekarang kita akan mendownload file installer deepin 25 WSL.

### 2.1 Download dari GitHub Release

Kunjungi halaman release resmi deepin WSL di GitHub:

👉 **[github.com/deepin-community/deepin-WSL/releases](https://github.com/deepin-community/deepin-WSL/releases/tag/v1.6.0)**

Pilih file `.wsl` sesuai arsitektur prosesormu — `amd64` untuk Intel/AMD, `arm64` untuk ARM.

![Halaman GitHub Release deepin WSL — pilih file sesuai arsitektur](/images/deepin-wsl-tutorial/05-halaman-download-deepin-wsl.png)

### 2.2 Alternatif: Google Drive

Tersedia juga mirror di Google Drive:

👉 **[Google Drive — deepin WSL](https://drive.google.com/drive/folders/1NL0JHAs9S834zL1_g1Zjr6qAjD3_iL9f?usp=sharing)**

### Pilih Arsitektur yang Tepat

| Arsitektur | Jenis Prosesor | Contoh Perangkat |
|------------|---------------|------------------|
| **AMD64** | Intel Core / AMD Ryzen | Mayoritas laptop & PC |
| **ARM64** | Snapdragon, Apple M-series via VM | Laptop ARM, Mac VM |

> 🔍 **Cara cek arsitektur prosesor:**
> Buka PowerShell → ketik `echo $env:PROCESSOR_ARCHITECTURE`
> - Output `AMD64` → download versi **amd64**
> - Output `ARM64` → download versi **arm64**

### 2.3 Download File .wsl

File berformat `.wsl` dengan ukuran sekitar **2-4 GB**. Setelah download selesai, lanjut ke langkah instalasi.

> **💡 Tips:** Gunakan **download manager** seperti IDM atau Free Download Manager untuk mempercepat download dan mencegah korupsi file jika koneksi terputus.

> **💡 Tips:** Gunakan **download manager** seperti IDM atau Free Download Manager untuk mempercepat download dan mencegah korupsi file jika koneksi terputus.

---

<h2 id="langkah-3">Langkah 3 — Install deepin 25 WSL</h2>

Ini bagian paling mudah! deepin 25 menggunakan format `.wsl` yang support **instalasi offline penuh**.

### 3.1 Double-Click File .wsl

Buka folder tempat kamu menyimpan file `.wsl`, lalu **double-click** file tersebut.

![Windows Explorer — file .wsl deepin 25 siap di-double-click](/images/deepin-wsl-tutorial/07-file-explorer-file-wsl.png)

### 3.2 Installation Wizard

Akan muncul jendela instalasi. Ikuti langkah-langkah wizard:

1. Klik **Next** pada layar selamat datang
2. Pilih **Install** untuk memulai proses
3. Tunggu proses ekstraksi dan instalasi selesai (biasanya 2-5 menit)

![WSL Installation Wizard — proses instalasi deepin 25 sedang berlangsung](/images/deepin-wsl-tutorial/08-wsl-installation-wizard.png)

### 3.3 Instalasi Selesai

Setelah selesai, kamu akan melihat notifikasi bahwa deepin 25 telah terinstall. Tidak perlu restart lagi!

---

<h2 id="langkah-4">Langkah 4 — Setup Awal &amp; Buat User</h2>

### 4.1 Launch deepin 25 WSL

Kamu bisa menjalankan deepin 25 WSL dengan beberapa cara:

**Cara A — Dari Start Menu:**
Klik Start → cari "deepin25" → klik ikonnya.

![Start Menu Windows — aplikasi deepin25 muncul di daftar](/images/deepin-wsl-tutorial/09-start-menu-deepin25.png)

**Cara B — Dari PowerShell / CMD:**
```powershell
wsl -d deepin25
```

**Cara C — Dari Windows Terminal:**
Buka Windows Terminal → klik dropdown (⌄) di tab bar → pilih **deepin25**.

![Windows Terminal — dropdown pilihan distro dengan deepin25](/images/deepin-wsl-tutorial/10-windows-terminal-deepin25.png)

### 4.2 Buat Username & Password

Saat pertama kali dijalankan, deepin 25 WSL akan meminta kamu membuat user:

```
Installing, this may take a few minutes...
Please create a default UNIX user account. The username does not need to match your Windows username.
For more information visit: https://aka.ms/wslusers

Enter new UNIX username: _
```

Masukkan **username** pilihanmu (contoh: `zaky`, `developer`, `deepin-user`) lalu tekan Enter. Kemudian masukkan **password** (dua kali untuk konfirmasi).

> **🔒 Tips Keamanan:**
> - Password tidak akan ditampilkan saat diketik (tidak ada asterisk) — ini normal!
> - Pilih password yang kuat meskipun ini lingkungan lokal
> - Password ini adalah password sudo Linux — kamu akan membutuhkannya untuk install software

```
Enter new UNIX username: zaky
New password:
Retype new password:
passwd: password updated successfully
```

### 4.3 Verifikasi Instalasi

Setelah login, cek apakah deepin 25 WSL berfungsi dengan benar:

```bash
# Cek versi deepin
cat /etc/deepin-version

# Cek kernel
uname -r

# Cek arsitektur
uname -m

# Update package list
sudo apt update && sudo apt upgrade -y
```

![Terminal deepin 25 WSL — login pertama dengan output cat /etc/deepin-version dan uname -r](/images/deepin-wsl-tutorial/11-terminal-deepin25-pertama-kali.png)

> **🎉 Selamat!** deepin 25 kini berjalan di Windows-mu! Lanjutkan membaca untuk tips manajemen dan integrasi.

---

<h2 id="manajemen-wsl">Manajemen WSL Sehari-hari</h2>

Berikut adalah perintah-perintah penting yang akan sering kamu gunakan:

### Perintah Dasar WSL

| Perintah | Fungsi |
|----------|--------|
| `wsl -d deepin25` | Jalankan deepin 25 |
| `wsl -l -v` | Lihat semua distro & statusnya |
| `wsl -t deepin25` | Shutdown / terminate deepin 25 |
| `wsl --shutdown` | Shutdown semua distro & WSL engine |
| `wsl --set-default deepin25` | Jadikan deepin 25 sebagai distro default |
| `wsl --set-version deepin25 2` | Pastikan deepin 25 pakai WSL 2 |

### Melihat Semua Distro Terinstall

```powershell
wsl -l -v
```

Output contoh:

```
  NAME        STATE           VERSION
* Ubuntu      Stopped         2
  deepin25    Running         2
```

Tanda `*` menunjukkan distro default.

### Shutdown deepin 25

Jika ingin membebaskan RAM yang digunakan WSL:

```bash
# Dari dalam deepin
exit
```

Lalu dari PowerShell:

```powershell
wsl -t deepin25
```

![PowerShell — output wsl -l -v menampilkan deepin25 dalam daftar distro](/images/deepin-wsl-tutorial/12-wsl-list-output.png)

### Uninstall deepin 25

> ⚠️ **Perhatian:** Perintah ini akan **menghapus semua data** di dalam subsystem deepin 25. Backup data penting terlebih dahulu!

```powershell
wsl --unregister deepin25
```

### Ekspor & Impor (Backup WSL)

Kamu bisa mem-backup deepin 25 WSL kamu ke file `.tar`:

```powershell
# Ekspor (backup)
wsl --export deepin25 D:\Backup\deepin25-backup.tar

# Impor (restore) ke lokasi baru
wsl --import deepin25-restore D:\WSL\deepin25-restore D:\Backup\deepin25-backup.tar
```

Ini sangat berguna untuk:
- Migrasi deepin 25 ke drive yang lebih besar
- Backup sebelum eksperimen besar
- Clone environment development

---

<h2 id="integrasi-windows">Integrasi deepin WSL dengan Windows</h2>

Salah satu keunggulan WSL adalah integrasi mendalam dengan Windows. Berikut tips-tips penting:

### 1. Akses File Windows dari deepin

Drive Windows otomatis ter-mount di `/mnt/`:

```bash
# Akses drive C:
cd /mnt/c/Users/

# Akses folder Documents
cd /mnt/c/Users/NAMAKAMU/Documents/

# Akses drive D:
cd /mnt/d/
```

### 2. Akses File deepin dari Windows

Buka File Explorer → ketik di address bar:

```
\\wsl$\deepin25\
```

Atau langsung:

```
\\wsl$\deepin25\home\NAMAUSER\
```

![File Explorer — akses \\wsl$\deepin25\home\ menampilkan folder home deepin](/images/deepin-wsl-tutorial/13-file-explorer-akses-wsl.png)

> **⚠️ Penting:** JANGAN mengedit file Linux dari Windows (`/mnt/c` → Linux = OK, `\\wsl$\deepin25` → edit dari Windows = **HINDARI**). Edit file WSL dari Windows bisa menyebabkan korupsi permission. Selalu edit file WSL dari dalam WSL atau gunakan VS Code Remote WSL.

### 3. Integrasi VS Code

Install **Remote - WSL** extension di VS Code:

1. Buka VS Code di Windows
2. Klik Extensions (Ctrl + Shift + X)
3. Cari **"Remote - WSL"** — install
4. Dari terminal deepin 25, jalankan:

```bash
code .
```

Ini akan membuka VS Code Windows yang terhubung langsung ke filesystem deepin 25 — dengan performa native!

![VS Code — indicator Remote WSL: deepin25 di pojok kiri bawah](/images/deepin-wsl-tutorial/14-vscode-remote-wsl-deepin25.png)

### 4. Jalankan Aplikasi GUI Linux

WSL 2 mendukung aplikasi GUI Linux secara native via **WSLg** (WSL GUI). Coba install aplikasi GUI:

```bash
# Install editor teks
sudo apt install gedit -y
gedit &

# Install file manager
sudo apt install nautilus -y
nautilus &

# Install browser
sudo apt install firefox-esr -y
firefox &
```

![Desktop Windows — aplikasi GUI Linux (Nautilus/Gedit) berjalan via WSLg](/images/deepin-wsl-tutorial/15-aplikasi-gui-linux-wslg.png)

### 5. Akses Localhost

Server yang berjalan di deepin 25 WSL otomatis bisa diakses dari browser Windows:

```bash
# Contoh: jalankan server Python
python3 -m http.server 8080
```

Lalu buka browser Windows → `http://localhost:8080` — langsung bisa!

---

<h2 id="troubleshooting">Troubleshooting &amp; FAQ</h2>

### ❌ "WSL is not recognized"

**Penyebab:** WSL belum di-enable atau belum diinstall.

**Solusi:**
```powershell
# Buka PowerShell Admin, lalu:
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
# Restart komputer
wsl --update
```

### ❌ "deepin25 tidak muncul di `wsl -l`"

**Penyebab:** File `.wsl` belum dijalankan atau instalasi gagal.

**Solusi:**
1. Pastikan file `.wsl` sudah di-double-click
2. Coba jalankan ulang file `.wsl` sebagai Administrator (klik kanan → Run as Administrator)
3. Jika masih gagal, coba download ulang file (mungkin corrupt)

### ❌ "deepin25 tidak muncul di `wsl --list --online`"

Ini **NORMAL**. deepin 25 WSL didistribusikan sebagai paket offline (`.wsl`) via GitHub Release dan Google Drive, tidak melalui Microsoft Store WSL repository. Lihat penjelasan Microsoft tentang [distribusi WSL kustom](https://learn.microsoft.com/en-us/windows/wsl/build-custom-distro).

### ❌ "Error: 0x80370102 — Virtualization not enabled"

**Penyebab:** Virtualization (Intel VT-x / AMD-V) belum di-enable di BIOS.

**Solusi:**
1. Restart komputer
2. Masuk BIOS (F2 / Del / F10 saat boot)
3. Enable **Intel VT-x** atau **AMD SVM Mode**
4. Save & Exit

### ❌ "Koneksi internet tidak berfungsi di WSL"

```bash
# Coba reset network WSL
sudo rm /etc/resolv.conf
sudo bash -c 'echo "nameserver 8.8.8.8" > /etc/resolv.conf'
sudo chattr +i /etc/resolv.conf
```

### ❌ "File .wsl tidak bisa di-double-click"

**Solusi:** Jalankan dari PowerShell:

```powershell
# Ganti path sesuai lokasi file kamu
wsl --install -d "D:\Downloads\deepin-wsl-25.2.0-amd64.wsl"
```

### ❌ "deepin 25 lambat atau high CPU usage"

**Solusi:**
1. Pastikan pakai **WSL 2** (bukan WSL 1):
   ```powershell
   wsl --set-version deepin25 2
   ```
2. Limit resource WSL dengan file `.wslconfig`:
   Buat file `C:\Users\NAMAKAMU\.wslconfig`:
   ```ini
   [wsl2]
   memory=4GB
   processors=2
   ```
3. Restart WSL: `wsl --shutdown`

---

<h2 id="penutup">Penutup</h2>

Selamat! Kamu sekarang sudah bisa menjalankan **deepin 25 di Windows via WSL** — dengan semua keunggulan toolchain Linux tanpa meninggalkan kenyamanan Windows.

### Langkah Selanjutnya

Setelah deepin 25 WSL terinstall, coba eksplorasi lebih jauh:

| Topik | Link |
|-------|------|
| 🎨 Kustomisasi tampilan terminal | `sudo apt install zsh` + Oh My Zsh |
| 🐳 Install Docker di deepin WSL | Baca tutorial Docker di deepin |
| 🐍 Setup Python development | `sudo apt install python3 python3-pip` |
| 📦 Manajemen paket APT | `sudo apt update && sudo apt search NAMA` |
| 🖥️ Pengenalan perintah Linux dasar | `ls`, `cd`, `cp`, `mv`, `rm`, `chmod` |
| 🤝 Gabung Komunitas deepin Indonesia | [t.me/Linux_deepin_ID](https://t.me/Linux_deepin_ID) |

### Referensi

- [Dokumentasi Resmi WSL Microsoft](https://learn.microsoft.com/en-us/windows/wsl/)
- [GitHub Release deepin WSL](https://github.com/deepin-community/deepin-WSL/releases/tag/v1.6.0)
- [Google Drive Mirror deepin WSL](https://drive.google.com/drive/folders/1NL0JHAs9S834zL1_g1Zjr6qAjD3_iL9f?usp=sharing)
- [Forum deepin Global](https://bbs.deepin.org/)
- [GitHub deepin Indonesia](https://github.com/deepin-Indonesia)

---

> **📢 Punya pertanyaan?** Gabung di **[Komunitas Telegram deepin Indonesia](https://t.me/Linux_deepin_ID)** — ada ribuan pengguna yang siap membantu troubleshooting dan sharing tips seputar deepin. Gratis, ramah, dan berbahasa Indonesia!

---

<details class="bg-deepin-50 p-6 rounded-xl my-8">
<summary class="cursor-pointer font-bold text-deepin-800 text-lg">📸 Daftar Screenshot yang Perlu Disiapkan</summary>
<div class="mt-4 space-y-3 text-sm text-gray-700">

1. **Screenshot 1** — Jendela `winver` (Windows version)
2. **Screenshot 2** — Task Manager → Performance → Virtualization: Enabled
3. **Screenshot 3** — Start Menu → Klik Kanan → PowerShell Admin
4. **Screenshot 4** — Output `wsl --version` di PowerShell
5. **Screenshot 5** — Halaman GitHub Release deepin WSL dengan daftar file `.wsl`
6. **Screenshot 6** — Halaman Google Drive mirror deepin WSL
7. **Screenshot 7** — File Explorer menampilkan file `.wsl` siap di-double-click
8. **Screenshot 8** — WSL Installation Wizard saat instalasi berlangsung
9. **Screenshot 9** — Start Menu yang menampilkan aplikasi deepin25
10. **Screenshot 10** — Windows Terminal dropdown distro dengan deepin25
11. **Screenshot 11** — Terminal deepin 25 WSL pertama kali (output `cat /etc/deepin-version`)
12. **Screenshot 12** — Output `wsl -l -v` di PowerShell
13. **Screenshot 13** — File Explorer membuka `\\wsl$\deepin25\home\`
14. **Screenshot 14** — VS Code dengan indicator WSL: deepin25
15. **Screenshot 15** — Aplikasi GUI Linux berjalan di Windows (contoh: Nautilus/Gedit)

</div>
</details>
