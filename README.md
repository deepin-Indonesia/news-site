<div align="center">

# deepin Indonesia — News Site

**Portal berita, release notes, tips, dan tutorial deepin**

[news.deepin.id](https://news.deepin.id) · 🇮🇩 **Bahasa Indonesia** · [🇬🇧 English](README.en.md)

</div>

---

Portal artikel & berita resmi komunitas deepin Indonesia. Dibangun dengan [Astro 7](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com) + Astro Content Collections, sepenuhnya statis.

## Daftar Isi

- [Tentang Proyek](#tentang-proyek)
- [Fitur](#fitur)
- [Tech Stack](#tech-stack)
- [Struktur Proyek](#struktur-proyek)
- [Memulai](#memulai)
- [Menulis Artikel](#menulis-artikel)
- [Format & Konvensi Artikel](#format--konvensi-artikel)
- [SEO Artikel](#seo-artikel)
- [Deployment](#deployment)
- [AdSense & Privasi](#adsense--privasi)
- [Analitik](#analitik)
- [Berkontribusi](#berkontribusi)
- [Lisensi](#lisensi)

## Tentang Proyek

`news-site` adalah portal berita komunitas deepin Indonesia di **https://news.deepin.id**. Isinya mencakup:

- **Release notes** setiap versi deepin (ditulis ulang dalam Bahasa Indonesia).
- **Tips deepin**, tutorial, dan panduan praktis.
- **Kabar komunitas** dan **event**.

Artikel ditulis dalam Bahasa Indonesia dengan istilah teknis tetap dalam Bahasa Inggris agar konsisten dengan dokumentasi resmi deepin.

### Ekosistem deepin Indonesia

| Subdomain | Repo | Fungsi |
|---|---|---|
| [deepin.id](https://deepin.id) | `home-site` | Halaman utama |
| [os.deepin.id](https://os.deepin.id) | `download-site` | Download image deepin |
| [news.deepin.id](https://news.deepin.id) | `news-site` ← repo ini | Berita & artikel |
| [about.deepin.id](https://about.deepin.id) | `about-site` | Tentang & product planning |
| [donasi.deepin.id](https://donasi.deepin.id) | `donasi-site` | Donasi komunitas |

## Fitur

- **Tag filter** di beranda (Semua, Release Notes, Tips deepin, Komunitas Update, Event).
- **Sidebar Daftar Isi (TOC)** dengan *scroll-spy* ala Medium.
- **Artikel terkait**, **artikel random**, dan **artikel terbaru** di akhir setiap artikel.
- **Tombol bagikan** (Telegram, WhatsApp, X, Facebook).
- **FAQ accordion** yang otomatis menjadi schema `FAQPage`.
- **Breadcrumb** + schema `BreadcrumbList`.
- **Optimasi gambar artikel** otomatis (lebar/tinggi + lazy-load).
- **SEO lengkap** dan **Google AdSense**.

## Tech Stack

| Teknologi | Detail |
|---|---|
| **Framework** | [Astro 7](https://astro.build) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com) + `@tailwindcss/typography` |
| **Konten** | Astro Content Collections (`glob` loader) |
| **Markdown** | `@astrojs/markdown-remark` + `rehype-external-links` |
| **Gambar** | `sharp` (plugin rehype khusus untuk `width`/`height`) |
| **Ikon** | [Font Awesome 6](https://fontawesome.com) (CDN) |
| **Sitemap** | `@astrojs/sitemap` |
| **Analitik** | Google Analytics 4 — `G-2J4TLB9W7H` |
| **Iklan** | Google AdSense — `ca-pub-1345939033565649` |
| **Deploy** | [Cloudflare Pages](https://pages.cloudflare.com) |
| **Runtime** | Node.js 20+ |

## Struktur Proyek

```
news-site/
├── src/
│   ├── components/
│   │   ├── Layout.astro      # <head>, meta SEO, schema, AdSense, GA
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── Analytics.astro
│   ├── content/
│   │   ├── config.ts         # Schema frontmatter artikel
│   │   └── posts/            # Artikel Markdown (*.md)
│   │       └── YYYY-MM-DD-slug.md
│   ├── data/
│   │   └── site.ts           # Konfigurasi situs & navigasi
│   ├── pages/
│   │   ├── index.astro       # Beranda — hero, tag filter, grid artikel
│   │   ├── [slug].astro      # Halaman artikel — konten, TOC, artikel terkait
│   │   └── 404.astro         # 404 (noindex)
│   └── styles/
│       └── global.css        # Tailwind + typography + palet deepin
├── public/
│   ├── images/               # Thumbnail & gambar artikel
│   ├── _redirects            # Redirect URL lama + /privacy/ → deepin.id
│   ├── ads.txt
│   ├── robots.txt
│   ├── llms.txt              # Ringkasan situs + daftar artikel untuk LLM
│   └── site.webmanifest
├── astro.config.mjs          # rehype plugin gambar, sitemap, external links
├── tsconfig.json
└── package.json
```

## Memulai

### Prasyarat

- [Node.js](https://nodejs.org) 20+
- npm

### Instalasi & pengembangan

```bash
git clone https://github.com/deepin-Indonesia/news-site.git
cd news-site
npm install
npm run dev        # → http://localhost:4321 (atau port berikutnya)
```

### Perintah

| Perintah | Kegunaan |
|---|---|
| `npm run dev` | Server pengembangan |
| `npm run build` | Build produksi ke `dist/` |
| `npm run preview` | Preview hasil build |

## Menulis Artikel

### 1. Buat file di `src/content/posts/`

Format nama: **`YYYY-MM-DD-slug-judul.md`** (slug inilah yang menjadi URL `/YYYY-MM-DD-slug-judul/`).

### 2. Frontmatter

```yaml
---
title: "Judul Artikel yang Jelas — Subjudul SEO"
date: 2026-11-11
tags: [release-notes]        # release-notes | tips-deepin | komunitas-update | event
author: deepin Indonesia
description: "Meta description 150–160 karakter, memuat keyword utama."
image: /images/nama-folder/cover.jpg
---
```

> Skema divalidasi oleh `src/content/config.ts`. `tags` wajib diisi.

### 3. Heading & TOC

Gunakan `## Heading` markdown **atau** `<h2 id="slug">Heading</h2>`. Keduanya otomatis muncul di sidebar TOC.

> 💡 **Jaga jumlah H2 tetap wajar** (±8). Jika terlalu banyak, TOC akan memanjang. Gabungkan topik terkait menjadi sub-bagian `###`.

### 4. Gambar

Simpan di `public/images/nama-folder/` dan referensikan dengan path absolut:

```markdown
![Alt deskriptif untuk SEO](/images/nama-folder/gambar.webp)
```

- Kompres gambar sebelum commit (target < 200 KB; WebP sangat disarankan).
- Plugin rehype otomatis menambahkan `width`/`height` (mencegah CLS) dan `loading="lazy"` untuk gambar setelah yang pertama.
- Untuk thumbnail sosmed, daftarkan dimensinya di `IMAGE_DIMENSIONS` pada `src/pages/[slug].astro` (agar `og:image:width`/`height` akurat).

### 5. FAQ accordion

```html
<details class="faq-item">
<summary><strong>Pertanyaan di sini?</strong></summary>

Jawaban dengan **Markdown** didukung.

</details>
```

FAQ di bawah heading `<h2 id="faq">` otomatis menjadi schema `FAQPage`.

### 6. Link eksternal

Otomatis mendapat `target="_blank"` + `rel="noopener noreferrer"` lewat `rehype-external-links` — tidak perlu diatur manual.

## Format & Konvensi Artikel

- **Bahasa Indonesia** untuk narasi; **istilah teknis tetap Bahasa Inggris** (mis. *Immutable System*, *kernel*, *snapshot*).
- Satu **H1** (dari frontmatter `title`), H2 untuk bagian, H3 untuk sub-bagian.
- Sertakan **tabel** dan **blockquote** bila membantu keterbacaan.
- Tambahkan **"Baca juga"** ke artikel internal yang relevan.
- Arahkan tautan download/resource ke situs deepin Indonesia (`os.deepin.id`), bukan ke situs komunitas global.
- Perbarui `public/llms.txt` (daftar artikel) saat menambah artikel baru.

## SEO Artikel

- **`BlogPosting`** JSON-LD (headline, deskripsi, gambar + dimensi, tanggal, author, publisher, keywords).
- **`BreadcrumbList`** (Home → News → Artikel).
- **`FAQPage`** bila artikel punya FAQ.
- **Canonical** memakai pathname (URL `?tag=` tidak dianggap duplikat).
- **Open Graph / Twitter Card** lengkap, termasuk `og:image:type`, `width`, `height`, `alt`.
- **Sitemap** otomatis + `robots.txt` + `llms.txt` (khusus crawler AI).
- **Performa**: gambar artikel diberi dimensi + lazy-load; Font Awesome non-blocking; `preconnect` ke cdnjs/GTM/AdSense.

## Deployment

Push ke `main` → **Cloudflare Pages** otomatis build & deploy.

| Setting | Nilai |
|---|---|
| Build command | `npm run build` |
| Output directory | `dist` |
| Production branch | `main` |

## AdSense & Privasi

- **AdSense**: script + `google-adsense-account` di `<head>`, `public/ads.txt` berisi client ID.
- **Kebijakan Privasi** dipusatkan di **https://deepin.id/privacy/**; `public/_redirects` mengarahkan `/privacy/` di situs ini ke sana dengan **301**.

## Analitik

Satu property GA4 (`G-2J4TLB9W7H`) untuk semua subdomain; setiap event membawa parameter `site`. Event penting: `scroll_depth`, `engaged_reader`, `share_click`, `faq_toggle`, `anchor_click` (TOC), dan `outbound_click`.

## Berkontribusi

1. Fork repo, lalu buat branch dari `preview`: `git checkout preview && git checkout -b feat/artikel-baru`.
2. Tulis artikel (lihat [Menulis Artikel](#menulis-artikel)), lalu commit dengan pesan jelas.
3. Push ke fork dan buka **Pull Request** ke `deepin-Indonesia/news-site` (target: **`preview`**).
4. Setelah review, merge `preview` → `main`.

> ⚠️ Jangan push langsung ke `main` — branch itu otomatis tayang.

## Pemecahan Masalah & Kontak

### Branch `main` vs `preview`

- **`main`** — produksi. Hanya push ke `main` yang memicu **Cloudflare Pages**, dan hasilnya otomatis tayang di domain utama.
- **`preview`** — staging untuk review. Push ke `preview` **tidak** memicu deploy; perubahan dicek secara **lokal** (`npm run dev`) sebelum di-merge ke `main`.

### Masalah umum

| Masalah | Solusi |
|---|---|
| Port `4321` sudah dipakai | Astro otomatis pindah ke port berikutnya, atau jalankan `npm run dev -- --port 4322`. |
| Build gagal setelah update dependensi | Hapus `node_modules` dan `package-lock.json`, lalu `npm install` ulang. |
| Halaman 404 saat dev | Pastikan file route ada di `src/pages/` dan nama file benar (huruf besar/kecil berpengaruh di Linux). |
| Artikel tidak muncul | Pastikan file ada di `src/content/posts/` dengan format `YYYY-MM-DD-slug.md` dan frontmatter valid. |
| Perubahan tidak muncul | Hard refresh (`Ctrl+Shift+R`) atau restart dev server. |
| Node.js terlalu lama | Gunakan Node.js 20+; cek dengan `node -v`. |

### Melaporkan masalah

- **Bug / usulan fitur** → buka [Issue](https://github.com/deepin-Indonesia/news-site/issues).
- **Diskusi cepat** → [grup Telegram deepin Indonesia](https://t.me/Linux_deepin_ID).
- **Kontak** → [deepin@siberin.id](mailto:deepin@siberin.id).

## Lisensi

Dirilis di bawah [MIT License](LICENSE) © deepin Indonesia.

---

<div align="center">

Dibuat dengan ❤️ oleh komunitas [deepin Indonesia](https://deepin.id) · [Telegram](https://t.me/Linux_deepin_ID) · [GitHub](https://github.com/deepin-Indonesia)

</div>
