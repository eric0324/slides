#!/usr/bin/env bun
import { rm, mkdir, writeFile, access } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import { spawn } from 'node:child_process'
import { buildManifest } from './build-manifest'
import { renderIndex } from './build-index'

const DIST = 'dist'

async function exists(path: string): Promise<boolean> {
  try {
    await access(path)
    return true
  } catch {
    return false
  }
}

function run(cmd: string, args: string[], cwd?: string): Promise<void> {
  return new Promise((res, rej) => {
    const child = spawn(cmd, args, { cwd, stdio: 'inherit' })
    child.on('close', (code) => {
      if (code === 0) res()
      else rej(new Error(`${cmd} ${args.join(' ')} (cwd=${cwd ?? '.'}) exited with ${code}`))
    })
  })
}

// Every deck is a Slidev deck (slides/<slug>/slides.md), built as an SPA
// under the sub-path /<slug>/.
function buildDeck(slug: string): Promise<void> {
  return run('bunx', [
    'slidev',
    'build',
    join('slides', slug, 'slides.md'),
    '--base',
    `/${slug}/`,
    '--out',
    resolve(DIST, slug),
  ])
}

async function main() {
  console.log('1/4 cleaning dist/...')
  await rm(DIST, { recursive: true, force: true })
  await mkdir(DIST, { recursive: true })

  console.log('2/4 reading decks...')
  const manifest = await buildManifest('slides')
  const listed = manifest.filter((t) => !t.unlisted)
  const hidden = manifest.length - listed.length
  console.log(`     ✓ ${listed.length} listed` + (hidden ? ` + ${hidden} unlisted` : ''))

  console.log('3/4 generating homepage...')
  await writeFile(join(DIST, 'index.html'), renderIndex(listed))
  if (await exists('CNAME')) {
    await writeFile(join(DIST, 'CNAME'), (await Bun.file('CNAME').text()).trim() + '\n')
  }
  await writeFile(join(DIST, '.nojekyll'), '')

  console.log('4/4 building decks (parallel)...')
  const results = await Promise.all(
    manifest.map((t) => buildDeck(t.slug).then(() => t.slug)),
  )
  console.log(`     ✓ ${results.join(', ')}`)

  console.log('✓ build complete → dist/')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
