# deepin Indonesia — News Site

Portal artikel & berita resmi komunitas deepin Indonesia: **[news.deepin.id](https://news.deepin.id)**

Fitur: blog dengan tag filter, TOC sidebar ala Medium dengan Intersection Observer scroll spy, artikel terkait/random/terbaru, share buttons, dan SEO metadata lengkap.

---

## Tech Stack

| | |
|---|---|
| **Framework** | [Astro 7](https://astro.build) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com) + `@tailwindcss/typography` |
| **Content** | Astro Content Collections (glob loader) |
| **Markdown** | `@astrojs/markdown-remark` + `rehype-external-links` |
| **Icons** | [Font Awesome 6](https://fontawesome.com) (CDN) |
| **Sitemap** | `@astrojs/sitemap` |
| **Deploy** | [Cloudflare Pages](https://pages.cloudflare.com) |
| **Analytics** | Google Analytics 4 (`G-2J4TLB9W7H`) |
| **Runtime** | Node.js 24 |

## Project Structure

```
news-site/
├── src/
│   ├── components/
│   │   ├── Layout.astro      # Base layout (HTML head, GA4, SEO meta, JSON-LD)
│   │   ├── Header.astro      # Sticky header + nav + mobile menu
│   │   └── Footer.astro      # Footer dengan social links
│   ├── content/
│   │   └── posts/             # Artikel Markdown (*.md)
│   │       └── YYYY-MM-DD-slug.md
│   ├── data/
│   │   └── site.ts           # Site config, MAIN_NAV, ABOUT_NAV, social
│   ├── pages/
│   │   ├── index.astro       # Homepage — hero, tag filter, post grid
│   │   ├── [slug].astro      # Post detail — article, TOC sidebar, related posts
│   │   └── 404.astro         # Custom 404
│   └── styles/
│       └── global.css        # Tailwind import + @theme colors
├── public/
│   ├── images/               # Logo, favicon, artikel images
│   └── robots.txt            # Crawler rules + Sitemap directive
├── astro.config.mjs          # site: https://news.deepin.id, rehype-external-links
├── package.json
└── tsconfig.json
```

## Getting Started

```bash
git clone https://github.com/deepin-Indonesia/news-site.git
cd news-site
npm install
npm run dev        # → http://localhost:4324
npm run build      # Production build → dist/
```

## Deployment

Push ke branch `main` → Cloudflare Pages auto-deploy.

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Output directory | `dist` |
| Branch | `main` |

## Contributing

Semua orang bisa berkontribusi — tidak perlu jadi anggota organisasi.

### Untuk kontributor luar (via Fork)

1. **Fork** repo ini (klik tombol Fork di GitHub)
2. Clone fork kamu: `git clone https://github.com/USERNAME/news-site.git`
3. `git checkout preview && git checkout -b feat/deskripsi`
4. Edit, commit, push ke fork kamu
5. Buka **Pull Request** ke `deepin-Indonesia/news-site` → target: `preview`

### Untuk anggota organisasi (push langsung)

1. `git checkout preview && git checkout -b feat/deskripsi`
2. Commit & push
3. Buat PR ke `preview`
4. Setelah review, merge `preview` → `main`

> ⚠️ Jangan push langsung ke `main` — harus lewat PR.

## Menulis Artikel

### 1. Buat file di `src/content/posts/`

Format nama: `YYYY-MM-DD-slug-judul.md`

### 2. Frontmatter

```yaml
---
title: "Judul Artikel — Subjudul SEO"
date: YYYY-MM-DD
tags: [tips-deepin]       # Hanya: release-notes, tips-deepin, komunitas-update, event
author: deepin Indonesia
description: "Meta description 150-160 karakter untuk SEO."
image: /images/nama-folder/cover.jpg
---
```

### 3. Heading untuk TOC

Gunakan `## Heading` markdown atau `<h2 id="slug">Heading</h2>` — otomatis muncul di TOC sidebar.

### 4. Gambar

Simpan di `public/images/nama-folder/`, referensikan dengan path absolut:
```markdown
![Alt text deskriptif](/images/nama-folder/gambar.png)
```

### 5. Link eksternal

Otomatis `target="_blank"` via `rehype-external-links` — tidak perlu atur manual.

## Tag Filter

Tag yang tersedia (didefinisikan di `src/pages/index.astro`):

| Tag | Slug |
|---|---|
| 📋 Release Notes | `release-notes` |
| 💡 Tips deepin | `tips-deepin` |
| 🤝 Komunitas Update | `komunitas-update` |
| 📅 Event | `event` |
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
