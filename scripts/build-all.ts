#!/usr/bin/env bun
import { rm, mkdir, readdir, writeFile, cp, access } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import { spawn } from 'node:child_process'
import { buildManifest } from './build-manifest'

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
  return new Promise((resolve, reject) => {
    const child = spawn(cmd, args, { cwd, stdio: 'inherit' })
    child.on('close', (code) => {
      if (code === 0) resolve()
      else reject(new Error(`${cmd} ${args.join(' ')} exited with ${code}`))
    })
  })
}

async function main() {
  console.log('1/6 cleaning dist/...')
  await rm(DIST, { recursive: true, force: true })
  await mkdir(DIST, { recursive: true })

  console.log('2/6 building manifest...')
  const manifest = await buildManifest('slides')
  manifest.sort((a, b) => b.date.localeCompare(a.date))
  await mkdir('web/data', { recursive: true })
  await writeFile('web/data/talks.json', JSON.stringify(manifest, null, 2) + '\n')
  console.log(`     ✓ ${manifest.length} talk(s)`)

  console.log('3/6 building Nuxt...')
  await run('bunx', ['nuxi', 'generate', 'web'])

  console.log('4/6 copying Nuxt output to dist/...')
  await cp('web/.output/public', DIST, { recursive: true })

  console.log('5/6 building Slidev decks (parallel)...')
  const slugs = manifest.map((t) => t.slug)
  await Promise.all(
    slugs.map((slug) =>
      run('bunx', [
        'slidev',
        'build',
        join('slides', slug, 'slides.md'),
        '--base',
        `/talks/${slug}/`,
        '--out',
        resolve(DIST, 'talks', slug),
      ])
    )
  )
  console.log(`     ✓ ${slugs.length} deck(s)`)

  console.log('6/6 writing .nojekyll...')
  await writeFile(join(DIST, '.nojekyll'), '')

  console.log('✓ build complete → dist/')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
