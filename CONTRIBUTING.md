# Contributing to Media Downloader

Thanks for taking the time to contribute! 💜

## Getting set up
1. Fork the repo and clone your fork.
2. Install [Node.js 18+](https://nodejs.org), [`yt-dlp`](https://github.com/yt-dlp/yt-dlp) and [`ffmpeg`](https://ffmpeg.org).
3. `npm install` then `npm start` → <http://localhost:3000>

## Workflow
- Create a branch: `git checkout -b feat/short-description`
- Keep changes focused — one feature or fix per pull request.
- Use [Conventional Commits](https://www.conventionalcommits.org): `feat:`, `fix:`, `docs:`, `chore:`…
- Run `node --check server.js` before pushing.
- Open a PR and fill in the template.

## Ground rules
- Don't add features whose main purpose is bypassing DRM or paywalls.
- Keep the frontend dependency-free (Tailwind via CDN, vanilla JS).
- Be kind — see the [Code of Conduct](CODE_OF_CONDUCT.md).

---
<sub>Developed by Syed Muhammad Tayyab</sub>
