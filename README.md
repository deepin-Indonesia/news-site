# news.deepin.id

Portal berita resmi **deepin Indonesia**.

## Branch

| Branch | Deploy | URL |
|---|---|---|
| `preview` | Netlify | [preview--news-deepin.netlify.app](https://preview--news-deepin.netlify.app) |
| `main` | GitHub Pages | [news.deepin.id](https://news.deepin.id) |

> ⚠️ **Jangan push langsung ke `main`.** Semua development dilakukan di branch `preview`.
> Production deployment ke `main` dilakukan via Pull Request dari `preview`.

## Development

```bash
git checkout preview
bundle install
bundle exec jekyll serve
```
