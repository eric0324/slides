#!/usr/bin/env bun
import { rm, mkdir, writeFile, cp, access, readFile } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import { spawn } from 'node:child_process'
import yaml from 'js-yaml'
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
  return new Promise((res, rej) => {
    const child = spawn(cmd, args, { cwd, stdio: 'inherit' })
    child.on('close', (code) => {
      if (code === 0) res()
      else rej(new Error(`${cmd} ${args.join(' ')} (cwd=${cwd ?? '.'}) exited with ${code}`))
    })
  })
}

async function buildSlidevDeck(slug: string) {
  await run('bunx', [
    'slidev',
    'build',
    join('slides', slug, 'slides.md'),
    '--base',
    `/${slug}/`,
    '--out',
    resolve(DIST, slug),
  ])
}

async function buildCustomDeck(slug: string) {
  const deckDir = join('slides', slug)
  const dest = resolve(DIST, slug)

  const talkYml = yaml.safeLoad(
    await readFile(join(deckDir, 'talk.yml'), 'utf-8'),
    { schema: yaml.JSON_SCHEMA },
  ) as { build?: { command: string; out: string } }

  if (talkYml.build) {
    // Run deck-specific build command, then copy its output dir to dist
    const [cmd, ...args] = talkYml.build.command.split(/\s+/)
    await run(cmd, args, deckDir)
    await cp(resolve(deckDir, talkYml.build.out), dest, { recursive: true })
  } else {
    // No build step → copy deck dir as-is, excluding the talk.yml itself
    await cp(deckDir, dest, {
      recursive: true,
      filter: (src) => !src.endsWith('/talk.yml') && !src.endsWith('\\talk.yml'),
    })
  }
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

  console.log('5/6 building decks (parallel)...')
  const builds = manifest.map(async (t) => {
    const isSlidev = await exists(join('slides', t.slug, 'slides.md'))
    if (isSlidev) {
      await buildSlidevDeck(t.slug)
      return `slidev:${t.slug}`
    } else {
      await buildCustomDeck(t.slug)
      return `custom:${t.slug}`
    }
  })
  const results = await Promise.all(builds)
  console.log(`     ✓ ${results.join(', ')}`)

  console.log('6/6 writing .nojekyll...')
  await writeFile(join(DIST, '.nojekyll'), '')

  console.log('✓ build complete → dist/')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
