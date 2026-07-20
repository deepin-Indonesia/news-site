---
layout: default
title: Tag - Komunitas Update
description: Update terbaru dari komunitas deepin Indonesia — kegiatan, meetup, kontribusi, dan kabar dari anggota komunitas.
permalink: /tag/komunitas-update/
---

<section class="tag-page">
  <div class="container">
    <div class="tag-page__header">
      <span class="tag-page__icon">🤝</span>
      <h1>Komunitas Update</h1>
      <p class="tag-page__description">
        Update terbaru dari <strong>komunitas deepin Indonesia</strong>.
        Kegiatan, meetup, kontribusi, dan kabar dari anggota komunitas.
      </p>
    </div>

    <div class="tag-filter">
      <div class="tag-filter__bar">
        <a href="{{ '/' | relative_url }}" class="tag-filter__item">Semua</a>
        <a href="{{ '/tag/release-notes/' | relative_url }}" class="tag-filter__item">Release Notes</a>
        <a href="{{ '/tag/tips-deepin/' | relative_url }}" class="tag-filter__item">Tips deepin</a>
        <a href="{{ '/tag/komunitas-update/' | relative_url }}" class="tag-filter__item active">Komunitas Update</a>
        <a href="{{ '/tag/fitur-baru/' | relative_url }}" class="tag-filter__item">Fitur Baru</a>
        <a href="{{ '/tag/event/' | relative_url }}" class="tag-filter__item">Event</a>
      </div>
    </div>

    <div class="news-grid">
      {% assign filtered_posts = site.posts | where_exp: "post", "post.tags contains 'Komunitas Update'" | sort: 'date' | reverse %}
      {% for post in filtered_posts %}
      <article class="news-card">
        <div class="news-card__image">
          <div class="news-card__image-placeholder" style="background: linear-gradient(135deg, #7c3aed, #6d28d9);">
            <i class="fas fa-users"></i>
          </div>
        </div>
        <div class="news-card__body">
          <div class="news-card__tags">
            {% for tag in post.tags %}
            <a href="{{ '/tag/' | append: tag | slugify | relative_url }}" class="news-card__tag">{{ tag }}</a>
            {% endfor %}
          </div>
          <h3 class="news-card__title">
            <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
          </h3>
          <p class="news-card__excerpt">{{ post.excerpt | strip_html | truncatewords: 20 }}</p>
          <div class="news-card__meta">
            <span class="news-card__date">
              <i class="far fa-calendar-alt"></i> {{ post.date | date: "%d %b %Y" }}
            </span>
          </div>
        </div>
      </article>
      {% endfor %}
    </div>

    {% if filtered_posts.size == 0 %}
    <div class="news-empty">
      <div class="news-empty__icon"><i class="fas fa-inbox"></i></div>
      <h2>Belum ada update komunitas</h2>
      <p>Konten update komunitas sedang dipersiapkan. Kunjungi kembali nanti!</p>
    </div>
    {% endif %}
  </div>
</section>
