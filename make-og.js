const sharp = require('sharp');
const path = require('path');

const src = 'C:\\Users\\KillerGrowth\\.openclaw\\workspace-brickley-jr\\media\\inbound\\openclaw-staged-7a7209f2-7c03-4dd0-83ba-30390df7072a\\Dons_2026_logo---3abcc45c-7397-4d08-b637-5ba26e546527.png';
const imgDir = 'C:\\Users\\KillerGrowth\\.openclaw\\workspace\\sites\\dons-heating\\dist\\assets\\images';

// Blue gradient background, logo centered and filling most of the space
const svgBg = Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#0a1628"/>
      <stop offset="100%" stop-color="#1a3a5c"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#g)"/>
</svg>`);

// Resize logo to 560px tall (nearly fills 630px height with padding)
sharp(src)
  .resize(null, 560, { fit: 'inside', withoutEnlargement: true })
  .toBuffer()
  .then(logoBuffer => {
    const meta = sharp(logoBuffer);
    return meta.metadata().then(info => {
      const left = Math.round((1200 - info.width) / 2);
      const top = Math.round((630 - info.height) / 2);
      return sharp(svgBg)
        .composite([{ input: logoBuffer, top, left }])
        .jpeg({ quality: 92 })
        .toFile(path.join(imgDir, 'og-image.jpg'));
    });
  })
  .then(info => console.log('Done: ' + info.width + 'x' + info.height + ' ' + Math.round(info.size / 1024) + 'KB'))
  .catch(e => console.error('Error:', e.message));
