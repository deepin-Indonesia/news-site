---
title: "[DUMMY] Cara Install dan Konfigurasi Docker di deepin Linux"
date: 2025-08-10
tags: [tips-deepin]
author: deepin Indonesia
description: "Panduan lengkap install Docker Engine di deepin Linux — dari instalasi paket hingga menjalankan container pertama."
image: /images/bg-deepin.png
---

# Cara Install Docker di deepin Linux

## Install Docker Engine

```bash
sudo apt update
sudo apt install docker.io
sudo systemctl enable --now docker
```

## Tambahkan User ke Group Docker

```bash
sudo usermod -aG docker $USER
```

Logout dan login kembali agar perubahan berlaku.

## Verifikasi Instalasi

```bash
docker --version
docker run hello-world
```

## Install Docker Compose

```bash
sudo apt install docker-compose
```

## Contoh: Menjalankan Nginx

```bash
docker run -d -p 8080:80 nginx
```

Buka browser dan akses `http://localhost:8080`.

---

*[DUMMY] Artikel ini adalah konten dummy untuk pengujian tag filter.*
