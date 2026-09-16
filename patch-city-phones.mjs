import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const filePath = path.join(__dirname, 'build.js');
let content = fs.readFileSync(filePath, 'utf8');

// ── buildCityHub: add cityPhone/cityPhoneTel vars at top of function ─────────
// Insert after "const d = CITY_DATA[city.slug];"
const cityHubInsert = `  const cityPhone    = city.phone    || CLIENT.phone;
  const cityPhoneTel = city.phoneTel || CLIENT.phoneTel;
  const cityAddress  = city.address  || CLIENT.address;
  const cityZip      = city.zip      || CLIENT.zip;
  const cityMapsUrl  = city.mapsUrl  || 'https://maps.google.com/?q=' + encodeURIComponent((city.address || CLIENT.address) + ' ' + (city.city || CLIENT.city) + ' KS');
`;

if (!content.includes('const cityPhone')) {
  content = content.replace(
    "  const d = CITY_DATA[city.slug];\n  if (!d) { console.warn('No city data for', city.slug); return; }",
    "  const d = CITY_DATA[city.slug];\n  if (!d) { console.warn('No city data for', city.slug); return; }\n" + cityHubInsert
  );
  console.log('✓ cityPhone vars injected into buildCityHub');
} else {
  console.log('⚠ cityPhone already exists, skipping inject');
}

// ── buildServiceCity: add cityPhone vars too ─────────────────────────────────
// Find buildServiceCity function start
const svcCityFn = 'function buildServiceCity(service, city)';
const svcCityInsert = `  const cityPhone    = city.phone    || CLIENT.phone;
  const cityPhoneTel = city.phoneTel || CLIENT.phoneTel;
  const cityAddress  = city.address  || CLIENT.address;
  const cityZip      = city.zip      || CLIENT.zip;
`;
const svcIdx = content.indexOf(svcCityFn);
if (svcIdx !== -1) {
  // Find the first const cd = after the function start
  const afterFn = content.indexOf("  const cd = CITY_DATA[city.slug];", svcIdx);
  if (afterFn !== -1 && !content.slice(svcIdx, svcIdx+500).includes('const cityPhone')) {
    const insertPoint = afterFn + "  const cd = CITY_DATA[city.slug];".length;
    content = content.slice(0, insertPoint) + '\n' + svcCityInsert + content.slice(insertPoint);
    console.log('✓ cityPhone vars injected into buildServiceCity');
  } else {
    console.log('⚠ buildServiceCity already patched or cd not found');
  }
} else {
  console.log('⚠ buildServiceCity function not found');
}

// ── Replace CLIENT.phone/phoneTel in city hub section (lines ~930-1230) ──────
// Schema telephone in buildCityHub
content = content.replace(
  /('telephone': CLIENT\.phone,\s*\n\s*'email': CLIENT\.email,\s*\n\s*'url': `https:\/\/donsheatingandair\.com\/areas-served\/\$\{city\.slug\}\/`)/,
  "'telephone': cityPhone,\n      'email': CLIENT.email,\n      'url': `https://donsheatingandair.com/areas-served/${city.slug}/`"
);
console.log('✓ schema telephone patched in buildCityHub');

// Phone links in city hub CTA box
content = content.replace(
  /href="tel:\$\{CLIENT\.phoneTel\}" style="color:#3A5DAE;font-weight:700;">\$\{CLIENT\.phone\}<\/a> or use the form/,
  'href="tel:${cityPhoneTel}" style="color:#3A5DAE;font-weight:700;">${cityPhone}</a> or use the form'
);
content = content.replace(
  /href="tel:\$\{CLIENT\.phoneTel\}" style="font-weight:700;font-size:18px;color:#1B2A4A;">\$\{CLIENT\.phone\}<\/a><\/li>\s*\n\s*<li><i class="fa-solid fa-envelope[^"]*"[^>]*><\/i><a href="mailto:\$\{CLIENT\.email\}"[^<]*<\/a><\/li>\s*\n\s*<li><a href="https:\/\/maps\.google\.com\/\?q=306/,
  'href="tel:${cityPhoneTel}" style="font-weight:700;font-size:18px;color:#1B2A4A;">${cityPhone}</a></li>\n            <li><i class="fa-solid fa-envelope" style="color:#3A5DAE;margin-right:8px;"></i><a href="mailto:${CLIENT.email}" style="color:#5a5650;">${CLIENT.email}</a></li>\n            <li><a href="${cityMapsUrl}" target="_blank" rel="noopener noreferrer" style="color:inherit;text-decoration:none;"><i class="fa-solid fa-location-dot" style="color:#3A5DAE;margin-right:8px;"></i><span style="color:#5a5650;">${cityAddress}, ${city.city || city.label}, KS ${cityZip}</span></a></li>\n            SPLITMARKER<li><a href="https://maps.google.com/?q=306`
);

// That regex got messy - let's do simpler targeted string replacements
// Reset and do direct string finds

// Re-read fresh after the above
fs.writeFileSync(filePath, content, 'utf8');
content = fs.readFileSync(filePath, 'utf8');

// Targeted replacements in city hub (around line 989-1000 area)
// CTA paragraph phone
content = content.replace(
  'Call or text <a href="tel:${CLIENT.phoneTel}" style="color:#3A5DAE;font-weight:700;">${CLIENT.phone}</a> or use the form\n        below. We respond same-day and always provide free on-site quotes.',
  'Call or text <a href="tel:${cityPhoneTel}" style="color:#3A5DAE;font-weight:700;">${cityPhone}</a> or use the form\n        below. We respond same-day and always provide free on-site quotes.'
);

// Sidebar phone in city hub
content = content.replace(
  '<li><i class="fa-solid fa-phone" style="color:#3A5DAE;margin-right:8px;"></i><a href="tel:${CLIENT.phoneTel}" style="font-weight:700;font-size:18px;color:#1B2A4A;">${CLIENT.phone}</a></li>\n            <li><i class="fa-solid fa-envelope" style="color:#3A5DAE;margin-right:8px;"></i><a href="mailto:${CLIENT.email}" style="color:#5a5650;">${CLIENT.email}</a></li>\n            <li><a href="https://maps.google.com/?q=306+S.+Main+St.,+El+Dorado,+KS+67042"',
  '<li><i class="fa-solid fa-phone" style="color:#3A5DAE;margin-right:8px;"></i><a href="tel:${cityPhoneTel}" style="font-weight:700;font-size:18px;color:#1B2A4A;">${cityPhone}</a></li>\n            <li><i class="fa-solid fa-envelope" style="color:#3A5DAE;margin-right:8px;"></i><a href="mailto:${CLIENT.email}" style="color:#5a5650;">${CLIENT.email}</a></li>\n            <li><a href="${cityMapsUrl}"'
);

// Address text in sidebar
content = content.replace(
  '<span style="color:#5a5650;">Based in ${CLIENT.city}, ${CLIENT.state}</span></a></li>',
  '<span style="color:#5a5650;">${cityAddress}, ${city.city || city.label}, KS</span></a></li>'
);

// ── buildServiceCity phone replacements ───────────────────────────────────────
// metaDesc
content = content.replace(
  '`Professional ${service.label.toLowerCase()} in ${cd.label}, KS. Licensed & insured. $1M liability. Free on-site quote. Call ${CLIENT.phone}.`.slice(0, 160)',
  '`Professional ${service.label.toLowerCase()} in ${cd.label}, KS. Licensed & insured. $1M liability. Free on-site quote. Call ${cityPhone}.`.slice(0, 160)'
);

// schema telephone in buildServiceCity
content = content.replace(
  "telephone: CLIENT.phone,\n      email: CLIENT.email,\n      url: `https://donsheatingandair.com/${service.slug}-${city.slug}/`",
  "telephone: cityPhone,\n      email: CLIENT.email,\n      url: `https://donsheatingandair.com/${service.slug}-${city.slug}/`"
);

// CTA in buildServiceCity
content = content.replace(
  'Call or text <a href="tel:${CLIENT.phoneTel}" style="color:#3A5DAE;font-weight:700;">${CLIENT.phone}</a> or fill out the\n          form below. We respond same-day and provide free on-site assessments.',
  'Call or text <a href="tel:${cityPhoneTel}" style="color:#3A5DAE;font-weight:700;">${cityPhone}</a> or fill out the\n          form below. We respond same-day and provide free on-site assessments.'
);

// Sidebar phone in buildServiceCity
content = content.replace(
  '<li><i class="fa-solid fa-phone" style="color:#3A5DAE;margin-right:8px;"></i><a href="tel:${CLIENT.phoneTel}" style="font-weight:700;font-size:18px;color:#1B2A4A;">${CLIENT.phone}</a></li>',
  '<li><i class="fa-solid fa-phone" style="color:#3A5DAE;margin-right:8px;"></i><a href="tel:${cityPhoneTel}" style="font-weight:700;font-size:18px;color:#1B2A4A;">${cityPhone}</a></li>'
);

fs.writeFileSync(filePath, content, 'utf8');
console.log('✓ All phone replacements written');
