<div align="center">

![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=typescript&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=node.js&logoColor=white)
![npm](https://img.shields.io/npm/v/%40kud%2Fmacos-media-keys-cli?style=flat-square&color=CB3837)
![MIT](https://img.shields.io/badge/licence-MIT-22C55E?style=flat-square)
![macOS](https://img.shields.io/badge/macOS-only-000000?style=flat-square&logo=apple&logoColor=white)

**CLI to send macOS system media keys — play/pause, next, previous, fast-forward, rewind**

<a href="https://kud.io/projects/macos-media-keys-cli">Website</a> · <a href="https://kud.io/projects/macos-media-keys-cli/docs">Documentation</a>

</div>

## Features

- **System-level media keys** — sends real macOS media key events, not app-specific API calls.
- **App-agnostic** — targets whichever app is currently responding to media keys: Music, Qobuz, Spotify, and others.
- **Five commands** — `play`, `next`, `previous`, `forward`, and `rewind` cover the full range of playback control.
- **Zero config** — no setup beyond granting Accessibility permission once; install and run.
- **Thin surface** — a minimal CLI wrapper over [`@kud/macos-media-keys`](https://www.npmjs.com/package/@kud/macos-media-keys), keeping each layer focused.

## Install

```sh
npm install -g @kud/macos-media-keys-cli
```

macOS only. Node.js 20 or later required.

> **Accessibility permission** — your terminal must have Accessibility access (System Settings → Privacy & Security → Accessibility). If it is not granted, the command exits with a clear message instructing you to enable it.

## Usage

```console
$ media-keys play       # play/pause toggle
$ media-keys next
$ media-keys previous
$ media-keys forward    # fast-forward within the track
$ media-keys rewind
```

## Development

```sh
git clone https://github.com/kud/macos-media-keys-cli.git
cd macos-media-keys-cli
npm install
npm run dev
```

| Script              | What it does                            |
| ------------------- | --------------------------------------- |
| `npm run build`     | Compile TypeScript to `dist/` via tsup  |
| `npm run dev`       | Run from source via tsx (no build step) |
| `npm run typecheck` | Type-check without emitting             |

📚 **Full documentation → [macos-media-keys-cli/docs](https://kud.io/projects/macos-media-keys-cli/docs)**
