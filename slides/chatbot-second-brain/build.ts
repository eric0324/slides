#!/usr/bin/env bun
// Compose the deck into a single static HTML + assets at ./out
// (Replaces ob-demo's runtime server.ts composition with a build-time one.)

import { readFile, writeFile, mkdir, rm, cp } from "node:fs/promises"
import { join } from "node:path"

const HERE = import.meta.dir
const OUT = join(HERE, "out")

await rm(OUT, { recursive: true, force: true })
await mkdir(OUT, { recursive: true })

const shell = await readFile(join(HERE, "index.html"), "utf-8")
const order = (await readFile(join(HERE, "slides/_order.txt"), "utf-8"))
  .split("\n")
  .map((s) => s.trim())
  .filter((s) => s && !s.startsWith("#"))

const fragments = await Promise.all(
  order.map((name) => readFile(join(HERE, "slides", name), "utf-8")),
)

const composed = shell.replace("<!--SLIDES-->", fragments.join("\n\n"))

await writeFile(join(OUT, "index.html"), composed)
await cp(join(HERE, "deck-stage.js"), join(OUT, "deck-stage.js"))
await cp(join(HERE, "styles.css"), join(OUT, "styles.css"))
await cp(join(HERE, "assets"), join(OUT, "assets"), { recursive: true })

console.log(`✓ composed ${order.length} slides → ${OUT}/`)
