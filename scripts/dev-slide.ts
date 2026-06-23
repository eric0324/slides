#!/usr/bin/env bun
import { spawn } from 'node:child_process'
import { access } from 'node:fs/promises'
import { join } from 'node:path'

// Live Slidev dev server (HMR) for ONE deck. Pass the deck's folder path under slides/.
//   bun run dev 2026/moe-camp/wordpress-workshop/day1
const slug = process.argv[2]
if (!slug) {
  console.error('用法：bun run dev <slug>')
  console.error('例：  bun run dev 2026/moe-camp/wordpress-workshop/day1')
  process.exit(1)
}

const slidesPath = join('slides', slug, 'slides.md')
try {
  await access(slidesPath)
} catch {
  console.error(`找不到 ${slidesPath}`)
  process.exit(1)
}

const child = spawn('bunx', ['slidev', slidesPath, '--open'], { stdio: 'inherit' })
child.on('close', (code) => process.exit(code ?? 0))
