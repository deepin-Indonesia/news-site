<div align="center">

# deepin Indonesia — News Site

**News, release notes, tips, and tutorials for deepin**

[news.deepin.id](https://news.deepin.id) · 🇬🇧 **English** · [🇮🇩 Bahasa Indonesia](README.md)

</div>

---

The official news & article portal of the deepin Indonesia community. Built with [Astro 7](https://astro.build) + [Tailwind CSS v4](https://tailwindcss.com) + Astro Content Collections, fully static.

## Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Writing Articles](#writing-articles)
- [Format & Conventions](#format--conventions)
- [Article SEO](#article-seo)
- [Deployment](#deployment)
- [AdSense & Privacy](#adsense--privacy)
- [Analytics](#analytics)
- [Contributing](#contributing)
- [License](#license)

## About

`news-site` is the deepin Indonesia community news portal at **https://news.deepin.id**. It covers:

- **Release notes** for every deepin version (rewritten in Indonesian).
- **deepin tips**, tutorials, and practical guides.
- **Community updates** and **events**.

Articles are written in Indonesian while technical terms stay in English to match deepin's official documentation.

### The deepin Indonesia ecosystem

| Subdomain | Repo | Purpose |
|---|---|---|
| [deepin.id](https://deepin.id) | `home-site` | Home page |
| [os.deepin.id](https://os.deepin.id) | `download-site` | deepin image downloads |
| [news.deepin.id](https://news.deepin.id) | `news-site` ← this repo | News & articles |
| [about.deepin.id](https://about.deepin.id) | `about-site` | Community & product planning |
| [donasi.deepin.id](https://donasi.deepin.id) | `donasi-site` | Community donations |

## Features

- **Tag filter** on the homepage (All, Release Notes, Tips, Community Update, Event).
- **Table of Contents sidebar** with Medium-style *scroll-spy*.
- **Related**, **random**, and **latest** posts at the end of each article.
- **Share buttons** (Telegram, WhatsApp, X, Facebook).
- **FAQ accordion** that automatically becomes a `FAQPage` schema.
- **Breadcrumb** + `BreadcrumbList` schema.
- **Automatic article image optimization** (width/height + lazy-load).
- **Complete SEO** and **Google AdSense**.

## Tech Stack

| Technology | Detail |
|---|---|
| **Framework** | [Astro 7](https://astro.build) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com) + `@tailwindcss/typography` |
| **Content** | Astro Content Collections (`glob` loader) |
| **Markdown** | `@astrojs/markdown-remark` + `rehype-external-links` |
| **Images** | `sharp` (custom rehype plugin for `width`/`height`) |
| **Icons** | [Font Awesome 6](https://fontawesome.com) (CDN) |
| **Sitemap** | `@astrojs/sitemap` |
| **Analytics** | Google Analytics 4 — `G-2J4TLB9W7H` |
| **Ads** | Google AdSense — `ca-pub-1345939033565649` |
| **Deploy** | [Cloudflare Pages](https://pages.cloudflare.com) |
| **Runtime** | Node.js 20+ |

## Project Structure

```
news-site/
├── src/
│   ├── components/
│   │   ├── Layout.astro      # <head>, SEO meta, schema, AdSense, GA
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   └── Analytics.astro
│   ├── content/
│   │   ├── config.ts         # Article frontmatter schema
│   │   └── posts/            # Markdown articles (*.md)
│   │       └── YYYY-MM-DD-slug.md
│   ├── data/
│   │   └── site.ts           # Site config & navigation
│   ├── pages/
│   │   ├── index.astro       # Homepage — hero, tag filter, article grid
│   │   ├── [slug].astro      # Article page — content, TOC, related posts
│   │   └── 404.astro         # 404 (noindex)
│   └── styles/
│       └── global.css        # Tailwind + typography + deepin palette
├── public/
│   ├── images/               # Article thumbnails & images
│   ├── _redirects            # Legacy redirects + /privacy/ → deepin.id
│   ├── ads.txt
│   ├── robots.txt
│   ├── llms.txt              # Site summary + article list for LLMs
│   └── site.webmanifest
├── astro.config.mjs          # image rehype plugin, sitemap, external links
├── tsconfig.json
└── package.json
```

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) 20+
- npm

### Install & develop

```bash
git clone https://github.com/deepin-Indonesia/news-site.git
cd news-site
npm install
npm run dev        # → http://localhost:4321 (or the next free port)
```

### Commands

| Command | Purpose |
|---|---|
| `npm run dev` | Dev server |
| `npm run build` | Production build to `dist/` |
| `npm run preview` | Preview the build |

## Writing Articles

### 1. Create a file in `src/content/posts/`

Filename format: **`YYYY-MM-DD-slug-title.md`** (the slug becomes the URL `/YYYY-MM-DD-slug-title/`).

### 2. Frontmatter

```yaml
---
title: "A clear article title — SEO subtitle"
date: 2026-11-11
tags: [release-notes]        # release-notes | tips-deepin | komunitas-update | event
author: deepin Indonesia
description: "Meta description, 150–160 chars, with the main keyword."
image: /images/folder/cover.jpg
---
```

> The schema is validated by `src/content/config.ts`. `tags` is required.

### 3. Headings & TOC

Use `## Heading` markdown **or** `<h2 id="slug">Heading</h2>`. Both appear in the TOC sidebar.

> 💡 **Keep the number of H2s reasonable** (~8). Too many makes the TOC overflow. Merge related topics into `###` sub-sections.

### 4. Images

Store them in `public/images/folder/` and reference with an absolute path:

```markdown
![Descriptive alt for SEO](/images/folder/image.webp)
```

- Compress images before committing (target < 200 KB; WebP recommended).
- The rehype plugin automatically adds `width`/`height` (prevents CLS) and `loading="lazy"` for images after the first.
- For social thumbnails, register dimensions in `IMAGE_DIMENSIONS` in `src/pages/[slug].astro` (so `og:image:width`/`height` are accurate).

### 5. FAQ accordion

```html
<details class="faq-item">
<summary><strong>Question here?</strong></summary>

Answer with **Markdown** support.

</details>
```

FAQs under an `<h2 id="faq">` heading automatically become a `FAQPage` schema.

### 6. External links

Automatically get `target="_blank"` + `rel="noopener noreferrer"` via `rehype-external-links` — no manual setup needed.

## Format & Conventions

- **Indonesian** narrative; **technical terms stay in English** (e.g. *Immutable System*, *kernel*, *snapshot*).
- One **H1** (from the `title` frontmatter), H2 for sections, H3 for sub-sections.
- Include **tables** and **blockquotes** when they help readability.
- Add **"Read also"** links to relevant internal articles.
- Point download/resource links to deepin Indonesia sites (`os.deepin.id`), not the global community site.
- Update `public/llms.txt` (article list) when adding a new article.

## Article SEO

- **`BlogPosting`** JSON-LD (headline, description, image + dimensions, dates, author, publisher, keywords).
- **`BreadcrumbList`** (Home → News → Article).
- **`FAQPage`** when the article has an FAQ.
- **Canonical** uses the pathname (`?tag=` URLs are not treated as duplicates).
- **Open Graph / Twitter Card** complete, including `og:image:type`, `width`, `height`, `alt`.
- **Automatic sitemap** + `robots.txt` + `llms.txt` (AI crawler friendly).
- **Performance**: article images get dimensions + lazy-load; Font Awesome is non-blocking; `preconnect` to cdnjs/GTM/AdSense.

## Deployment

Push to `main` → **Cloudflare Pages** builds and deploys automatically.

| Setting | Value |
|---|---|
| Build command | `npm run build` |
| Output directory | `dist` |
| Production branch | `main` |

## AdSense & Privacy

- **AdSense**: script + `google-adsense-account` in `<head>`, `public/ads.txt` with the client ID.
- **Privacy Policy** is centralized at **https://deepin.id/privacy/**; `public/_redirects` 301-redirects `/privacy/` on this site there.

## Analytics

One GA4 property (`G-2J4TLB9W7H`) for all subdomains; every event carries a `site` parameter. Key events: `scroll_depth`, `engaged_reader`, `share_click`, `faq_toggle`, `anchor_click` (TOC), and `outbound_click`.

## Contributing

1. Fork the repo, then branch from `preview`: `git checkout preview && git checkout -b feat/new-article`.
2. Write the article (see [Writing Articles](#writing-articles)), then commit with a clear message.
3. Push to your fork and open a **Pull Request** against `deepin-Indonesia/news-site` (target: **`preview`**).
4. After review, merge `preview` → `main`.

> ⚠️ Do not push directly to `main` — that branch goes live automatically.

## Troubleshooting & Contact

### Branch `main` vs `preview`

- **`main`** — production. Only pushes to `main` trigger **Cloudflare Pages**, which deploys automatically to the main domain.
- **`preview`** — staging for review. Pushing to `preview` does **not** trigger a deploy; changes are reviewed **locally** (`npm run dev`) before merging into `main`.

### Common issues

| Issue | Fix |
|---|---|
| Port `4321` already in use | Astro moves to the next port automatically, or run `npm run dev -- --port 4322`. |
| Build fails after updating dependencies | Delete `node_modules` and `package-lock.json`, then run `npm install` again. |
| 404 in dev | Make sure the route file exists in `src/pages/` and the filename is exact (case-sensitive on Linux). |
| Article not showing | Make sure the file is in `src/content/posts/` named `YYYY-MM-DD-slug.md` with valid frontmatter. |
| Changes not showing | Hard-refresh (`Ctrl+Shift+R`) or restart the dev server. |
| Node.js too old | Use Node.js 20+; check with `node -v`. |

### Reporting issues

- **Bugs / feature requests** → open an [Issue](https://github.com/deepin-Indonesia/news-site/issues).
- **Quick chat** → [deepin Indonesia Telegram group](https://t.me/Linux_deepin_ID).
- **Contact** → [deepin@siberin.id](mailto:deepin@siberin.id).

## License

Released under the [MIT License](LICENSE) © deepin Indonesia.

---

<div align="center">

Made with ❤️ by the [deepin Indonesia](https://deepin.id) community · [Telegram](https://t.me/Linux_deepin_ID) · [GitHub](https://github.com/deepin-Indonesia)

</div>
