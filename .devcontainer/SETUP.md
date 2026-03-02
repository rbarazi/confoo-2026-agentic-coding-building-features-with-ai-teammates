# Devcontainer Setup for Slidev PDF Export

Minimal devcontainer configuration for running a [Slidev](https://sli.dev) presentation and exporting it to PDF, using Playwright's headless Chromium.

## Architecture

```
node:22-slim          ← smallest official Node.js image (~200 MB)
  + Playwright libs   ← system dependencies for headless Chromium
  + npm install       ← Slidev + themes + playwright-chromium
```

No devcontainer base image or Node feature is needed — `node:22-slim` already includes Node 22 on Debian Bookworm.

## Files

### `Dockerfile`

Uses `node:22-slim` as the base and installs only the system libraries Playwright's Chromium requires. These must be installed at the OS level because Chromium dynamically links against them.

### `devcontainer.json`

- **`containerEnv.PLAYWRIGHT_DOWNLOAD_CONNECTION_TIMEOUT`** — Set to `300000` (5 min). The default 30 s timeout is too short for the ~180 MB Chromium download on slower networks or Docker-in-Mac setups.
- **`postCreateCommand`** — Runs `npm install` (installs Slidev and dependencies) then `npx playwright install chromium` (downloads the Chromium binary).
- **`forwardPorts: [3030]`** — Slidev's default dev server port.

## Common Commands

```bash
# Live dev server
npm run dev

# Export to PDF (dark mode)
npm run export

# Export to PNG
npm run export:png
```

## Gotchas

| Issue | Fix |
|---|---|
| `libnssutil3` not found on arm64 Bookworm | Remove it — it's bundled inside `libnss3` on this platform. |
| Playwright Chromium download times out | Increase `PLAYWRIGHT_DOWNLOAD_CONNECTION_TIMEOUT` (default 30 s is not enough for ~180 MB over Docker networking). |
| `devcontainers/base:bookworm` is huge | Use `node:22-slim` instead — it's ~700 MB smaller and already has Node.js. |

## Reproducing from Scratch

1. Add `playwright-chromium` to `package.json` dependencies.
2. Copy `.devcontainer/Dockerfile` and `.devcontainer/devcontainer.json` from this repo.
3. Open in VS Code / Cursor → "Reopen in Container", or run:
   ```bash
   devcontainer up --workspace-folder .
   devcontainer exec --workspace-folder . npm run export
   ```
