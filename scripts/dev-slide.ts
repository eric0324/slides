#!/usr/bin/env bun
import { spawn } from 'node:child_process'
import { join } from 'node:path'

const slug = process.argv[2]
if (!slug) {
  console.error('Usage: bun dev:slide <slug>')
  process.exit(1)
}

const slidesPath = join('slides', slug, 'slides.md')

const child = spawn('bunx', ['slidev', slidesPath], { stdio: 'inherit' })
child.on('close', (code) => process.exit(code ?? 0))
