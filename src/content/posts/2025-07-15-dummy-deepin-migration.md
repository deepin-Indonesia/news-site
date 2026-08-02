---
title: "[DUMMY] deepin 23 → 25 Migration Guide — Upgrade Tanpa Kehilangan Data"
date: 2025-07-15
tags: [release-notes]
author: deepin Indonesia
description: "Panduan lengkap upgrade dari deepin 23 ke 25 — backup, proses instalasi, dan tips troubleshooting."
image: /images/bg-deepin.png
---

# deepin 23 ke 25 Migration Guide

## Persiapan

1. Backup data penting ke external drive
2. Catat daftar aplikasi terinstal: `dpkg --get-selections > apps.txt`
3. Pastikan koneksi internet stabil

## Proses Upgrade

```bash
sudo apt update && sudo apt full-upgrade
```

## Troubleshooting

- Jika Treeland blank screen, switch ke X11 dulu via login screen
- Jika audio hilang, reinstall `pipewire-pulse`

---

*[DUMMY] Artikel ini adalah konten dummy untuk pengujian tag filter.*
