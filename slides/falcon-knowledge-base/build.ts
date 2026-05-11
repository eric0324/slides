#!/usr/bin/env bun
import { spawn } from "node:child_process";

const HERE = import.meta.dir;

function run(cmd: string, args: string[]): Promise<void> {
  return new Promise((res, rej) => {
    const child = spawn(cmd, args, { cwd: HERE, stdio: "inherit" });
    child.on("close", (code) =>
      code === 0 ? res() : rej(new Error(`${cmd} ${args.join(" ")} exited with ${code}`)),
    );
  });
}

await run("bun", ["install"]);
await run("bunx", ["next", "build"]);
