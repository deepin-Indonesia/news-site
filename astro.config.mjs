import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import rehypeExternalLinks from 'rehype-external-links';
import { existsSync } from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

/**
 * Rehype plugin: menambahkan `width`/`height` pada gambar artikel agar
 * aspect ratio sudah diketahui browser sebelum gambar selesai dimuat
 * (mencegah Cumulative Layout Shift / CLS). Gambar setelah yang pertama
 * diberi `loading="lazy"` agar tidak menghambat LCP.
 */
function rehypeImageDimensions() {
  return async (tree) => {
    const images = [];
    const walk = (node) => {
      if (node.type === 'element' && node.tagName === 'img') images.push(node);
      if (node.children) node.children.forEach(walk);
    };
    walk(tree);

    let index = 0;
    for (const node of images) {
      const src = node.properties?.src;
      if (typeof src !== 'string' || !src.startsWith('/')) {
        index++;
        continue;
      }
      const file = path.join(process.cwd(), 'public', src);
      if (!existsSync(file)) {
        index++;
        continue;
      }
      try {
        const meta = await sharp(file).metadata();
        if (meta.width && meta.height) {
          node.properties.width = meta.width;
          node.properties.height = meta.height;
        }
        node.properties.decoding = 'async';
        if (index > 0) node.properties.loading = 'lazy';
      } catch {
        /* lewati gambar yang tidak bisa dibaca */
      }
      index++;
    }
  };
}

export default defineConfig({
  site: 'https://news.deepin.id',
  vite: { plugins: [tailwindcss()] },
  integrations: [sitemap()],
  markdown: {
    rehypePlugins: [
      rehypeImageDimensions,
      [rehypeExternalLinks, { target: '_blank', rel: ['noopener', 'noreferrer'] }],
    ],
  },
});
