# News Site

Portal berita resmi deepin Indonesia — [news.deepin.id](https://news.deepin.id/)

Dibangun dengan [Jekyll](https://jekyllrb.com/), menggunakan tema bersama dari [deepin-theme-site](https://github.com/deepin-Indonesia/deepin-theme-site) sebagai Git submodule.

## Teknologi

| | |
|---|---|
| **Static site** | Jekyll 4.x |
| **Tema** | `_theme/` → submodule [deepin-theme-site](https://github.com/deepin-Indonesia/deepin-theme-site) |
| **Hosting** | GitHub Pages (`main`) + Netlify (`preview`) |
| **CSS** | `main.scss` (copy tema + news-specific di append) |
| **JS** | `main.js` (tema + scroll progress circle) |
| **Icons** | Font Awesome 6 (CDN) |

## Branch & Deployment

| Branch | Trigger | Deploy ke | URL |
|---|---|---|---|
| `preview` | Push | Netlify | `*.netlify.app` |
| `main` | Push | GitHub Pages | [news.deepin.id](https://news.deepin.id/) |

> ⚠️ **Jangan push langsung ke `main`.** Semua development di branch `preview`. Production via Pull Request `preview` → `main`.

## Local Development

```bash
git clone --recurse-submodules https://github.com/deepin-Indonesia/news-site.git
cd news-site
bundle install
bundle exec jekyll serve
```

Buka `http://localhost:4000`

## Struktur

```
news-site/
├── _theme/                    # Git submodule → deepin-theme-site
│   ├── _includes/             # header.html, footer.html
│   ├── _layouts/              # default.html (override dari tema)
│   ├── _data/                 # navigation.yml
│   ├── assets/
│   │   ├── css/main.scss      # Stylesheet tema
│   │   ├── js/main.js         # Navigasi, scroll, mobile menu
│   │   └── images/            # Logo, favicon
│   └── _config.yml
│
├── _layouts/
│   ├── default.html           # Override tema — custom OG meta + JSON-LD
│   ├── post.html              # Layout artikel (back btn, share, related)
│   └── tag.html               # Layout halaman tag filter
│
├── _posts/                    # Artikel Markdown
│   └── YYYY-MM-DD-slug.md
│
├── tag/                       # Halaman tag (Release Notes, Tips, dll)
│   ├── release-notes.md
│   ├── tips-deepin.md
│   ├── komunitas-update.md
│   └── event.md
│
├── index.md                   # Halaman utama — hero, tag filter, news grid
├── _config.yml                # Konfigurasi site (url: news.deepin.id)
├── 404.html
├── assets/
│   ├── css/main.scss          # Tema (copy) + news-specific styles
│   ├── js/main.js             # Mobile nav + scroll-to-top progress circle
│   └── images/                # deepin-id.png, gambar artikel
├── netlify.toml               # Netlify build config (DEPLOY_PRIME_URL)
├── .github/workflows/
│   └── pages.yml              # CI/CD GitHub Pages (main branch only)
├── Gemfile
├── .gitmodules
└── .gitignore
```

## Panduan Menulis Artikel

### 1. Buat file di `_posts/`

Gunakan format nama: `YYYY-MM-DD-slug-judul.md`

### 2. Frontmatter

```yaml
---
layout: post
title: "Judul Artikel — Subjudul SEO"
date: YYYY-MM-DD HH:MM:SS +0700
categories: tips
tags: [Tips deepin]
author: deepin Indonesia
description: >-
  Meta description 150-160 karakter untuk SEO.
image: /assets/images/nama-gambar.jpg
---
```

### 3. Gambar

- Simpan di `assets/images/`
- Kompres sebelum commit (target < 100KB)
- Alt text wajib untuk SEO: `![Deskripsi gambar](path)`
- Caption sumber (jika dari dokumen resmi): `*Sumber: Manual deepin*`

### 4. Video YouTube

```html
<div style="max-width:720px;margin:1.5rem auto">
<div style="position:relative;padding-bottom:56.25%;height:0;overflow:hidden;border-radius:12px">
<iframe src="https://www.youtube-nocookie.com/embed/VIDEO_ID?rel=0"
  style="position:absolute;inset:0;width:100%;height:100%"
  frameborder="0" allowfullscreen loading="lazy"></iframe>
</div>
</div>
```

### 5. FAQ Accordion

```html
<details open markdown="1">
<summary><strong>Pertanyaan di sini?</strong></summary>

Jawaban di sini dengan **Markdown** support.

</details>
```

Gunakan `open` hanya untuk pertanyaan pertama.

### 6. SEO Checklist

- [ ] Title 50-70 karakter, keyword utama di depan
- [ ] Meta description 150-160 karakter
- [ ] `tags:` wajib diisi (Tips deepin, Release Notes, dll)
- [ ] Heading terstruktur: H2 untuk section, H3 untuk sub
- [ ] Gambar punya alt text + caption (jika perlu)
- [ ] Internal link ke artikel lain atau Telegram
- [ ] FAQ section untuk long-tail keywords
- [ ] Tabel perbandingan (jika relevan)
- [ ] `image:` untuk thumbnail sosmed

## Tag yang Tersedia

| Tag | File | Deskripsi |
|---|---|---|
| Release Notes | `tag/release-notes.md` | Changelog & rilis resmi deepin |
| Tips deepin | `tag/tips-deepin.md` | Tutorial, tips & trik |
| Komunitas Update | `tag/komunitas-update.md` | Update komunitas Indonesia |
| Event | `tag/event.md` | Meetup, workshop, acara |

Untuk menambah tag baru: buat file di `tag/` + tambahkan ke `all_tags` di `_layouts/tag.html` dan `index.md`.

## Tema (Submodule)

```bash
# Cek update tema
cd _theme && git fetch origin && git status

# Update tema ke versi terbaru
cd _theme && git pull origin master
cd .. && git add _theme && git commit -m "Update theme submodule"
```

## CSS

`assets/css/main.scss` adalah **copy penuh** dari `_theme/assets/css/main.scss` + style news-specific di-append di akhir. Jika tema diupdate, CSS **harus di-sync ulang**:

```bash
# Backup style news-specific
# Copy tema terbaru
cp _theme/assets/css/main.scss assets/css/main.scss
# Append kembali style news-specific
```
