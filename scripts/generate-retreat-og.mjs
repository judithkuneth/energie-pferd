import sharp from 'sharp'

const overlay = Buffer.from(`
<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <defs><linearGradient id="shade"><stop stop-color="#1c1a18" stop-opacity=".9"/><stop offset=".62" stop-color="#1c1a18" stop-opacity=".6"/><stop offset="1" stop-color="#1c1a18" stop-opacity=".12"/></linearGradient></defs>
  <rect width="1200" height="630" fill="url(#shade)"/>
  <g fill="#fdfcf9">
    <text x="60" y="75" font-family="Georgia, serif" font-size="25" letter-spacing="5">ENERGIE PFERD</text>
    <text x="60" y="169" font-family="Arial, sans-serif" font-size="18" letter-spacing="3">GRUPPENRETREAT · PFERDEMAGIE</text>
    <text x="56" y="269" font-family="Georgia, serif" font-size="70">Ein Tag für dich.</text>
    <text x="56" y="351" font-family="Georgia, serif" font-size="66" fill="#e0e6c9">Lass dich berühren.</text>
    <rect x="60" y="411" width="64" height="2" fill="#e0e6c9"/>
    <text x="60" y="467" font-family="Arial, sans-serif" font-size="26">11. Oktober 2026 · 10–17 Uhr</text>
    <text x="60" y="514" font-family="Arial, sans-serif" font-size="23">Blåsehof · Maria Saal, Kärnten</text>
    <text x="60" y="582" font-family="Arial, sans-serif" font-size="16" letter-spacing="1">energie-pferd.at/retreat</text>
    <text x="1180" y="612" text-anchor="end" font-family="Arial, sans-serif" font-size="11">Foto: Christina Passegger</text>
  </g>
</svg>`)

await sharp('public/retreat/hero-sabine-1800.webp')
  .resize(1200, 630, { fit: 'cover', position: 'centre' })
  .composite([{ input: overlay }])
  .jpeg({ quality: 88, mozjpeg: true, progressive: true })
  .toFile('public/retreat/og.jpg')
console.log('Generated public/retreat/og.jpg (1200 × 630)')
