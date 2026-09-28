import fs from 'node:fs'
import path from 'node:path'

const root = process.cwd()
const dataPath = path.join(root, 'src/data/projects.ts')
const source = fs.readFileSync(dataPath, 'utf8')
const errors = []
const warnings = []

const projectBlocks = [...source.matchAll(/\{\s*slug:\s*'([^']+)'([\s\S]*?)(?=\n\s*\{\s*slug:|\n\s*\]\s*$)/g)]
if (!projectBlocks.length) errors.push('No portfolio projects found in src/data/projects.ts')

const slugs = projectBlocks.map((m) => m[1])
for (const slug of new Set(slugs)) {
  if (slugs.filter((s) => s === slug).length > 1) errors.push(`Duplicate project slug: ${slug}`)
}

const publicRef = /['"]((?:\/projects\/)[^'"]+)['"]/g
for (const match of source.matchAll(publicRef)) {
  const rel = match[1].replace(/^\//, '')
  const file = path.join(root, 'public', rel)
  if (!fs.existsSync(file)) {
    const encoded = file + '.b64'
    if (!fs.existsSync(encoded)) errors.push(`Missing referenced asset: ${match[1]}`)
    else if (!fs.statSync(encoded).size) errors.push(`Empty encoded source asset: ${match[1]}.b64`)
  } else if (!fs.statSync(file).size) errors.push(`Empty referenced asset: ${match[1]}`)
}

function pngSize(buf) {
  if (buf.length >= 24 && buf.toString('ascii', 1, 4) === 'PNG') return [buf.readUInt32BE(16), buf.readUInt32BE(20)]
}
function jpegSize(buf) {
  if (buf.length < 4 || buf[0] !== 0xff || buf[1] !== 0xd8) return null
  let i = 2
  while (i + 9 < buf.length) {
    if (buf[i] !== 0xff) { i++; continue }
    const marker = buf[i + 1]
    if (marker === 0xd8 || marker === 0xd9) { i += 2; continue }
    const len = buf.readUInt16BE(i + 2)
    if (len < 2) break
    if ([0xc0,0xc1,0xc2,0xc3,0xc5,0xc6,0xc7,0xc9,0xca,0xcb,0xcd,0xce,0xcf].includes(marker)) {
      return [buf.readUInt16BE(i + 7), buf.readUInt16BE(i + 5)]
    }
    i += 2 + len
  }
  return null
}
function rasterSize(file) {
  const ext = path.extname(file).toLowerCase()
  if (!['.png','.jpg','.jpeg'].includes(ext)) return null
  const buf = fs.readFileSync(file)
  return ext === '.png' ? pngSize(buf) : jpegSize(buf)
}

for (const [, slug, body] of projectBlocks) {
  const framePaths = [...body.matchAll(/storyboardFrames:[\s\S]*?\[(.*?)\]/g)]
    .flatMap((m) => [...m[1].matchAll(/image:\s*'([^']+)'/g)].map((x) => x[1]))
  if (new Set(framePaths).size !== framePaths.length) errors.push(`${slug}: duplicate storyboard frame paths`)

  const motion = body.match(/motionBanner:\s*\{([\s\S]*?)\n\s*\}/)
  if (motion) {
    const src = motion[1].match(/source:\s*'([^']+)'/)?.[1]
    const poster = motion[1].match(/poster:\s*'([^']+)'/)?.[1]
    if (!src) errors.push(`${slug}: motionBanner has no source`)
    if (!poster) errors.push(`${slug}: motionBanner has no poster`)
  }

  const master = body.match(/master:\s*'([^']+)'/)?.[1]
  const declared = master?.match(/(\d+)\s*[×xX]\s*(\d+)/)
  if (declared) {
    const expected = [Number(declared[1]), Number(declared[2])]
    const candidateRefs = [...body.matchAll(/(?:poster|storyboard|image):\s*'([^']+)'/g)].map((m) => m[1])
    const checked = []
    for (const ref of candidateRefs) {
      const file = path.join(root, 'public', ref.replace(/^\//, ''))
      if (!fs.existsSync(file)) continue
      const actual = rasterSize(file)
      if (actual) checked.push({ref, actual})
    }
    const exact = checked.some(({actual}) => actual[0] === expected[0] && actual[1] === expected[1])
    if (checked.length && !exact) warnings.push(`${slug}: master declares ${expected[0]}x${expected[1]}, but no inspected JPG/PNG candidate has that exact size`)
  }
}

if (warnings.length) {
  console.warn('\nCase check warnings:')
  for (const warning of warnings) console.warn(`- ${warning}`)
}
if (errors.length) {
  console.error('\nCase check failed:')
  for (const error of errors) console.error(`- ${error}`)
  process.exit(1)
}
console.log(`Case check passed: ${slugs.length} projects, ${[...source.matchAll(publicRef)].length} local asset references validated.`)
