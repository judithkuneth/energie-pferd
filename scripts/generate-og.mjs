import { resolve } from 'node:path'
import sharp from 'sharp'

const width = 1200
const height = 630
const source = resolve('public/optimized/hero-pasture-20260821-1535.jpg')
const logo = resolve('src/assets/brand/energie-pferd-mark-transparent.png')
const target = resolve('public/og.jpg')

const overlay = Buffer.from(`
  <svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="shade" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0%" stop-color="#4a3425" stop-opacity="0.84" />
        <stop offset="52%" stop-color="#432f22" stop-opacity="0.67" />
        <stop offset="82%" stop-color="#6b4a25" stop-opacity="0.24" />
        <stop offset="100%" stop-color="#6b4a25" stop-opacity="0.03" />
      </linearGradient>
    </defs>
    <rect width="${width}" height="${height}" fill="url(#shade)" />
    <text
      x="210"
      y="129"
      fill="#f7efe2"
      font-family="Georgia, 'Times New Roman', serif"
      font-size="30"
      font-weight="400"
      letter-spacing="8"
    >ENERGIE PFERD</text>
    <text
      x="68"
      y="298"
      fill="#fdfcf9"
      font-family="Arial, sans-serif"
      font-size="64"
      font-weight="400"
      letter-spacing="0.5"
    >
      <tspan x="68" dy="0">Begegne dir selbst</tspan>
      <tspan x="68" dy="80">im Raum der Pferde</tspan>
    </text>
  </svg>
`)

const resizedLogo = await sharp(logo).resize(126, 126).png().toBuffer()

await sharp(source)
  .rotate()
  .resize(width, height, { fit: 'cover', position: 'centre' })
  .modulate({ brightness: 0.92, saturation: 0.92 })
  .composite([
    { input: overlay, top: 0, left: 0 },
    { input: resizedLogo, top: 47, left: 67 },
  ])
  .jpeg({ quality: 88, mozjpeg: true, progressive: true })
  .toFile(target)

console.log(`Generated ${target} (${width}x${height})`)
