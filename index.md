---
layout: default
title: News
description: Portal berita resmi deepin Indonesia — berita terbaru, tips & tutorial, release notes, dan update komunitas deepin Linux di Indonesia.
permalink: /
---

<!-- News Hero -->
<section class="news-hero">
  <div class="container">
    <img src="{{ '/assets/images/deepin-id.png' | relative_url }}" alt="deepin" class="news-hero-logo" width="112" height="112">
    <h1>News <strong>deepin</strong> Indonesia</h1>
  </div>
</section>

<!-- Tag Filter Bar -->
<section class="tag-filter">
  <div class="container">
    <div class="tag-filter__bar">
      <a href="{{ '/' | relative_url }}" class="tag-filter__item active">📰 Semua</a>
      <a href="{{ '/tag/release-notes/' | relative_url }}" class="tag-filter__item">📋 Release Notes</a>
      <a href="{{ '/tag/tips-deepin/' | relative_url }}" class="tag-filter__item">💡 Tips deepin</a>
      <a href="{{ '/tag/komunitas-update/' | relative_url }}" class="tag-filter__item">🤝 Komunitas Update</a>
      <a href="{{ '/tag/event/' | relative_url }}" class="tag-filter__item">📅 Event</a>
    </div>
  </div>
</section>

<!-- News Listing -->
<section class="news-listing">
  <div class="container">

    {% assign sorted_posts = site.posts | sort: 'date' | reverse %}

    {% if sorted_posts.size > 0 %}
      <div class="news-grid">
        {% for post in sorted_posts limit:9 %}

        {% if forloop.first %}
        <!-- Featured Article -->
        <article class="news-card news-card--featured">
          <div class="news-card__image">
            {% if post.image %}
            <img src="{{ post.image | relative_url }}" alt="{{ post.title }}" class="news-card__img" loading="lazy">
            {% else %}
            <div class="news-card__image-placeholder" style="background: linear-gradient(135deg, #1a6dd4, #0d9488);">
              <i class="fas fa-newspaper"></i>
            </div>
            {% endif %}
          </div>
          <div class="news-card__body">
            <div class="news-card__tags">
              {% for tag in post.tags %}
              <a href="{{ '/tag/' | append: tag | downcase | replace: ' ', '-' | relative_url }}" class="news-card__tag">{{ tag }}</a>
              {% endfor %}
            </div>
            <h2 class="news-card__title">
              <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            </h2>
            <p class="news-card__excerpt">{{ post.excerpt | strip_html | truncatewords: 40 }}</p>
            <div class="news-card__meta">
              <span class="news-card__date">
                <i class="far fa-calendar-alt"></i>
                {{ post.date | date: "%d %B %Y" }}
              </span>
              <span class="news-card__author">
                <i class="far fa-user"></i> {{ post.author | default: "deepin Indonesia" }}
              </span>
            </div>
            <a href="{{ post.url | relative_url }}" class="btn btn-primary btn-sm">
              Baca Selengkapnya <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </article>
        {% else %}
        <!-- Regular Article Card -->
        <article class="news-card">
          <div class="news-card__image">
            {% if post.image %}
            <img src="{{ post.image | relative_url }}" alt="{{ post.title }}" class="news-card__img" loading="lazy">
            {% else %}
            <div class="news-card__image-placeholder" style="background: linear-gradient(135deg, {% cycle '#1a6dd4', '#0d9488', '#7c3aed', '#059669', '#d97706', '#dc2626' %}, {% cycle '#1250a0', '#0f766e', '#6d28d9', '#047857', '#b45309', '#b91c1c' %});">
              <i class="fas {% cycle 'fa-code', 'fa-rocket', 'fa-shield-alt', 'fa-paint-brush', 'fa-cogs', 'fa-users' %}"></i>
            </div>
            {% endif %}
          </div>
          <div class="news-card__body">
            <div class="news-card__tags">
              {% for tag in post.tags limit:2 %}
              <a href="{{ '/tag/' | append: tag | downcase | replace: ' ', '-' | relative_url }}" class="news-card__tag">{{ tag }}</a>
              {% endfor %}
            </div>
            <h3 class="news-card__title">
              <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
            </h3>
            <p class="news-card__excerpt">{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
            <div class="news-card__meta">
              <span class="news-card__date">
                <i class="far fa-calendar-alt"></i>
                {{ post.date | date: "%d %b %Y" }}
              </span>
            </div>
          </div>
        </article>
        {% endif %}

        {% endfor %}
      </div>
    {% else %}
      <!-- Empty State -->
      <div class="news-empty">
        <div class="news-empty__icon">
          <i class="fas fa-newspaper"></i>
        </div>
        <h2>Belum ada berita</h2>
        <p>Konten berita sedang dalam proses. Kunjungi kembali nanti untuk membaca berita terbaru seputar deepin Linux!</p>
        <a href="https://deepin.id" class="btn btn-primary">
          <i class="fas fa-home"></i> Kembali ke deepin.id
        </a>
      </div>
    {% endif %}

  </div>
</section>

<!-- Newsletter CTA -->
<section class="news-cta">
  <div class="container">
    <div class="news-cta__card">
      <div class="news-cta__content">
        <h2><i class="fas fa-paper-plane"></i> Ikuti Update Terbaru</h2>
        <p>
          Gabung ke grup Telegram <strong>deepin Indonesia</strong> untuk mendapatkan update berita,
          tips, dan diskusi seputar deepin Linux langsung di chat kamu.
        </p>
        <a href="https://t.me/Linux_deepin_ID" target="_blank" rel="noopener" class="btn btn-telegram">
          <i class="fab fa-telegram-plane"></i> Gabung Komunitas Telegram
        </a>
      </div>
    </div>
  </div>
</section>
