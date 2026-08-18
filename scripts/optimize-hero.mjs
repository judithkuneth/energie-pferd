import { stat } from 'node:fs/promises'
import { resolve } from 'node:path'
import sharp from 'sharp'

const imageDirectory = resolve('public/optimized')
const widths = [960, 1440, 1920]

for (const width of widths) {
  const source = resolve(imageDirectory, `hero-20260726-${width}.jpg`)
  const webpTarget = resolve(imageDirectory, `hero-20260726-${width}.webp`)
  const avifTarget = resolve(imageDirectory, `hero-20260726-${width}.avif`)

  await sharp(source).webp({ quality: 82, effort: 6, smartSubsample: true }).toFile(webpTarget)
  await sharp(source).avif({ quality: 58, effort: 6 }).toFile(avifTarget)

  const sourceSize = (await stat(source)).size
  const webpSize = (await stat(webpTarget)).size
  const avifSize = (await stat(avifTarget)).size
  const webpSaving = Math.round((1 - webpSize / sourceSize) * 100)
  const avifSaving = Math.round((1 - avifSize / sourceSize) * 100)

  console.log(
    `${width}px: WebP ${Math.round(webpSize / 1024)} KB (${webpSaving}% smaller), AVIF ${Math.round(avifSize / 1024)} KB (${avifSaving}% smaller)`,
  )
}
