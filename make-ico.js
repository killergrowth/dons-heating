const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const src = 'C:\\Users\\KillerGrowth\\.openclaw\\workspace-brickley-jr\\media\\inbound\\openclaw-staged-7a7209f2-7c03-4dd0-83ba-30390df7072a\\Dons_2026_logo---3abcc45c-7397-4d08-b637-5ba26e546527.png';
const imgDir = 'C:\\Users\\KillerGrowth\\.openclaw\\workspace\\sites\\dons-heating\\dist\\assets\\images';

// ICO format: simple 32x32 PNG wrapped in .ico container
// We'll write a proper multi-size ICO using raw buffers
async function makeIco() {
  const sizes = [16, 32, 48];
  const pngBuffers = await Promise.all(
    sizes.map(s => sharp(src).resize(s, s, { fit: 'cover' }).png().toBuffer())
  );

  // Build ICO file manually
  const numImages = sizes.length;
  const headerSize = 6;
  const dirEntrySize = 16;
  const dataOffset = headerSize + dirEntrySize * numImages;

  const header = Buffer.alloc(headerSize);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type: ICO
  header.writeUInt16LE(numImages, 4);

  const dirEntries = [];
  let offset = dataOffset;
  for (let i = 0; i < numImages; i++) {
    const entry = Buffer.alloc(dirEntrySize);
    const size = sizes[i];
    entry.writeUInt8(size === 256 ? 0 : size, 0); // width
    entry.writeUInt8(size === 256 ? 0 : size, 1); // height
    entry.writeUInt8(0, 2); // color count
    entry.writeUInt8(0, 3); // reserved
    entry.writeUInt16LE(1, 4); // color planes
    entry.writeUInt16LE(32, 6); // bits per pixel
    entry.writeUInt32LE(pngBuffers[i].length, 8); // size of image
    entry.writeUInt32LE(offset, 12); // offset
    offset += pngBuffers[i].length;
    dirEntries.push(entry);
  }

  const ico = Buffer.concat([header, ...dirEntries, ...pngBuffers]);
  const outPath = path.join(imgDir, 'favicon.ico');
  fs.writeFileSync(outPath, ico);
  console.log('favicon.ico written: ' + ico.length + ' bytes');
}

makeIco().catch(e => console.error(e));
