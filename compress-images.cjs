const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const root = 'd:/GitHub/deepin-Indonesia';

const targets = [
  // [path, maxWidth, quality]
  { file: 'news-site/public/images/bg-deepin.png',            maxWidth: 1600, quality: 85 },
  { file: 'home-site/assets/images/bg-deepin.png',             maxWidth: 1600, quality: 85 },
  { file: 'download-site/assets/images/bg-deepin.png',        maxWidth: 1600, quality: 85 },
  { file: 'donasi-site/public/images/bg-deepin.png',          maxWidth: 1600, quality: 85 },
  { file: 'news-site/public/images/deepin25/desktop.png',      maxWidth: 1600, quality: 85 },
  { file: 'home-site/public/images/deepin25/desktop.png',      maxWidth: 1600, quality: 85 },
  { file: 'download-site/public/images/deepin25/desktop.png',  maxWidth: 1600, quality: 85 },
  { file: 'donasi-site/public/images/deepin25/desktop.png',    maxWidth: 1600, quality: 85 },
  { file: 'news-site/public/images/deepin-skills-open-source/deepin-Skills.png', maxWidth: 1200, quality: 85 },
  { file: 'news-site/public/images/deepin-25-2-release/deepin-25-2-release.jpg', maxWidth: 1200, quality: 80 },
];

async function compress(filePath, maxWidth, quality) {
  const fullPath = path.join(root, filePath);
  const dir = path.dirname(fullPath);
  const ext = path.extname(fullPath).toLowerCase();
  const tmpPath = path.join(dir, `_tmp_${path.basename(fullPath)}`);
  
  const inputSize = (fs.statSync(fullPath).size / 1024).toFixed(1);
  
  const meta = await sharp(fullPath).metadata();
  let pipeline = sharp(fullPath);
  
  if (maxWidth && meta.width > maxWidth) {
    pipeline = pipeline.resize(maxWidth);
  }
  
  if (ext === '.jpg' || ext === '.jpeg') {
    pipeline = pipeline.jpeg({ quality, mozjpeg: true });
  } else if (ext === '.png') {
    pipeline = pipeline.png({ quality, compressionLevel: 9, palette: true });
  }
  
  // Write to temp, then replace
  await pipeline.toFile(tmpPath);
  fs.unlinkSync(fullPath);
  fs.renameSync(tmpPath, fullPath);
  
  const outSize = (fs.statSync(fullPath).size / 1024).toFixed(1);
  const pct = ((1 - fs.statSync(fullPath).size / (parseFloat(inputSize) * 1024)) * 100).toFixed(0);
  console.log(`${path.basename(dir)}/${path.basename(fullPath)}: ${inputSize}KB → ${outSize}KB (-${pct}%)`);
}

(async () => {
  console.log('Compressing images...\n');
  for (const t of targets) {
    try {
      if (fs.existsSync(path.join(root, t.file))) {
        await compress(t.file, t.maxWidth, t.quality);
      } else {
        console.log(`SKIP (not found): ${t.file}`);
      }
    } catch (e) {
      console.error(`ERROR: ${t.file} — ${e.message}`);
    }
  }
  console.log('\nDone!');
})();
