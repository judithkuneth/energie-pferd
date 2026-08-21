import { stat } from 'node:fs/promises'
import { basename, extname, resolve } from 'node:path'
import sharp from 'sharp'

const sourceArgument = process.argv[2]

if (!sourceArgument) {
  throw new Error('Please provide the source image path as the first argument.')
}

const source = resolve(sourceArgument)
const requestedName = process.argv[3]
const outputName = requestedName || basename(source, extname(source))
const imageDirectory = resolve('public/optimized')
const metadata = await sharp(source).metadata()
const sourceWidth = metadata.width

if (!sourceWidth) {
  throw new Error(`Could not determine the width of ${source}.`)
}

const widths = [...new Set([960, 1440, Math.min(1920, sourceWidth)])]
  .filter((width) => width <= sourceWidth)
  .sort((a, b) => a - b)

for (const width of widths) {
  const jpgTarget = resolve(imageDirectory, `${outputName}-${width}.jpg`)
  const webpTarget = resolve(imageDirectory, `${outputName}-${width}.webp`)
  const avifTarget = resolve(imageDirectory, `${outputName}-${width}.avif`)
  const image = sharp(source).rotate().resize({ width, withoutEnlargement: true })

  await image.clone().jpeg({ quality: 88, mozjpeg: true }).toFile(jpgTarget)
  await image.clone().webp({ quality: 82, effort: 6, smartSubsample: true }).toFile(webpTarget)
  await image.clone().avif({ quality: 58, effort: 6 }).toFile(avifTarget)

  const jpgSize = (await stat(jpgTarget)).size
  const webpSize = (await stat(webpTarget)).size
  const avifSize = (await stat(avifTarget)).size

  console.log(
    `${width}px: JPG ${Math.round(jpgSize / 1024)} KB, WebP ${Math.round(webpSize / 1024)} KB, AVIF ${Math.round(avifSize / 1024)} KB`,
  )
}
