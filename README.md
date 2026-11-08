<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=6D5DFC&height=190&section=header&text=Media%20Downloader&fontSize=52&fontColor=ffffff&animation=fadeIn&fontAlignY=36&desc=Developed%20by%20Syed%20Muhammad%20Tayyab&descSize=20&descAlignY=58" width="100%" alt="header wave" />

<img src="docs/assets/banner.svg" width="100%" alt="Media Downloader — Developed by Syed Muhammad Tayyab" />

<br/>

<a href="https://github.com/Syed-Muhammad-Tayyab/yt-downloader">
  <img src="https://readme-typing-svg.demolab.com?font=JetBrains+Mono&weight=600&size=20&duration=3200&pause=900&color=6D5DFC&center=true&vCenter=true&width=760&lines=Paste+a+YouTube+or+Instagram+link;See+title%2C+thumbnail+%26+duration+instantly;Download+as+MP4+(360p%E2%80%931080p)+or+MP3+(128%2F320kbps);Powered+by+yt-dlp+%2B+ffmpeg+on+Node.js+%2B+Express;Docker-ready+%E2%80%94+deploy+in+minutes" alt="Typing SVG" />
</a>

<br/><br/>

![Node.js](https://img.shields.io/badge/Node.js-%E2%89%A518-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.x-000000?style=for-the-badge&logo=express&logoColor=white)
![yt-dlp](https://img.shields.io/badge/yt--dlp-powered-FF0000?style=for-the-badge&logo=youtube&logoColor=white)
![FFmpeg](https://img.shields.io/badge/FFmpeg-merge%20%26%20MP3-007808?style=for-the-badge&logo=ffmpeg&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-ready-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-CDN-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)

[![License: MIT](https://img.shields.io/badge/License-MIT-6D5DFC?style=flat-square)](LICENSE)
[![CI](https://img.shields.io/github/actions/workflow/status/Syed-Muhammad-Tayyab/yt-downloader/ci.yml?branch=main&style=flat-square&label=CI&color=22D3B8)](https://github.com/Syed-Muhammad-Tayyab/yt-downloader/actions)
[![Stars](https://img.shields.io/github/stars/Syed-Muhammad-Tayyab/yt-downloader?style=flat-square&color=6D5DFC)](https://github.com/Syed-Muhammad-Tayyab/yt-downloader/stargazers)
[![Forks](https://img.shields.io/github/forks/Syed-Muhammad-Tayyab/yt-downloader?style=flat-square&color=22D3B8)](https://github.com/Syed-Muhammad-Tayyab/yt-downloader/network/members)
[![Issues](https://img.shields.io/github/issues/Syed-Muhammad-Tayyab/yt-downloader?style=flat-square&color=6D5DFC)](https://github.com/Syed-Muhammad-Tayyab/yt-downloader/issues)
[![Last commit](https://img.shields.io/github/last-commit/Syed-Muhammad-Tayyab/yt-downloader?style=flat-square&color=22D3B8)](https://github.com/Syed-Muhammad-Tayyab/yt-downloader/commits/main)
[![PRs welcome](https://img.shields.io/badge/PRs-welcome-6D5DFC?style=flat-square)](CONTRIBUTING.md)

<br/>

**[✨ Features](#-features)** &nbsp;•&nbsp;
**[🖼️ Preview](#️-preview)** &nbsp;•&nbsp;
**[🧱 Tech Stack](#-tech-stack)** &nbsp;•&nbsp;
**[⚙️ How It Works](#️-how-it-works)** &nbsp;•&nbsp;
**[🔌 API](#-api-reference)** &nbsp;•&nbsp;
**[🚀 Getting Started](#-getting-started)** &nbsp;•&nbsp;
**[☁️ Deployment](#️-deployment)** &nbsp;•&nbsp;
**[🗺️ Roadmap](#️-roadmap)**

</div>

<img src="docs/assets/divider.svg" width="100%" alt="divider" />

<details>
<summary><b>📑 Table of Contents</b> (click to expand)</summary>

<br/>

1. [About the Project](#-about-the-project)
2. [Features](#-features)
3. [Preview](#️-preview)
4. [Tech Stack](#-tech-stack)
5. [How It Works](#️-how-it-works)
6. [API Reference](#-api-reference)
7. [Quality Map](#-quality-map)
8. [Project Structure](#-project-structure)
9. [Getting Started](#-getting-started)
10. [Configuration](#️-configuration)
11. [Deployment](#️-deployment)
12. [Design System](#-design-system)
13. [Security & Privacy](#-security--privacy)
14. [Roadmap](#️-roadmap)
15. [FAQ](#-faq)
16. [Contributing](#-contributing)
17. [Legal Notice](#️-legal-notice)
18. [License & Credits](#-license--credits)
19. [Developer](#-developer)

</details>

<img src="docs/assets/divider.svg" width="100%" alt="divider" />

## 🎯 About the Project

**Media Downloader** is a clean, single-page web app that turns a pasted **YouTube** or **Instagram** link into a downloadable file. You paste a link, the app reads the **title, thumbnail and duration**, and you choose to save it as **MP4 video (360p – 1080p)** or **MP3 audio (128 / 320 kbps)**.

Under the hood, a small **Node.js + Express** server shells out to **[`yt-dlp`](https://github.com/yt-dlp/yt-dlp)** and **[`ffmpeg`](https://ffmpeg.org)**, downloads the requested format to a temporary folder, streams the file to the browser, and then deletes it. The frontend is a single static HTML file styled with **Tailwind CSS (CDN)** — no build step, no bundler, no framework.

> 💡 **Why it's nice to work with:** one dependency (`express`), one server file, one HTML page, one Dockerfile. You can read the whole codebase in ten minutes.

<img src="docs/assets/pipeline.svg" width="100%" alt="Pipeline: paste link → analyze → pick format → download" />

<img src="docs/assets/divider.svg" width="100%" alt="divider" />

## ✨ Features

| | Feature | Details |
|:-:|---|---|
| 🔗 | **Paste & analyze** | Paste a YouTube or Instagram link (a one-click **Paste** button reads your clipboard) and instantly see title, thumbnail, duration and source |
| 🎬 | **MP4 video** | Choose **360p · 480p · 720p · 1080p** — the quality is applied as a height ceiling via `yt-dlp` format selectors |
| 🎧 | **MP3 audio** | Extract audio at **128 kbps** or **320 kbps** using `ffmpeg` |
| 🌗 | **Light / dark theme** | One-click theme toggle with a violet → teal aurora background |
| 📱 | **Responsive UI** | Mobile-first layout, keyboard-focus outlines, `prefers-reduced-motion` support |
| 🧹 | **Auto cleanup** | Every download lives in a throw-away temp directory that is removed as soon as the response finishes |
| 🚫 | **No playlists** | `--no-playlist` keeps each request to a single item |
| ⚠️ | **Friendly errors** | Clear messages for invalid links, private/deleted media and failed downloads |
| 🐳 | **Docker-ready** | The included `Dockerfile` installs Node, Python, ffmpeg and yt-dlp for you |
| ❤️ | **Support card** | A built-in "Support This Project" QR card (swap `public/qr.jpg` with your own) |

<img src="docs/assets/divider.svg" width="100%" alt="divider" />

## 🖼️ Preview

<div align="center">

<table>
<tr>
<td align="center"><b>🌙 Dark theme</b></td>
<td align="center"><b>☀️ Light theme</b></td>
</tr>
<tr>
<td><img src="docs/assets/preview-dark.svg" width="100%" alt="Dark theme preview" /></td>
<td><img src="docs/assets/preview-light.svg" width="100%" alt="Light theme preview" /></td>
</tr>
</table>

<sub>Illustrative mockups of the interface. Replace them with real screenshots in <code>docs/assets/</code> whenever you like.</sub>

<br/><br/>

**❤️ Support card shipped with the app**

<img src="public/qr.jpg" width="180" alt="Support QR code" />

</div>

<img src="docs/assets/divider.svg" width="100%" alt="divider" />

## 🧱 Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| 🖥️ **Runtime** | ![Node](https://img.shields.io/badge/Node.js-339933?style=flat-square&logo=nodedotjs&logoColor=white) | Runs the server (`engines.node >= 18`, Docker image uses Node 20) |
| 🛣️ **Server** | ![Express](https://img.shields.io/badge/Express-000000?style=flat-square&logo=express&logoColor=white) | JSON API + static file hosting |
| 📥 **Downloader** | ![yt-dlp](https://img.shields.io/badge/yt--dlp-FF0000?style=flat-square&logo=youtube&logoColor=white) | Reads metadata and fetches media |
| 🎞️ **Media tools** | ![FFmpeg](https://img.shields.io/badge/FFmpeg-007808?style=flat-square&logo=ffmpeg&logoColor=white) | Merges streams and converts to MP3 |
| 🎨 **Styling** | ![Tailwind](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white) | Utility-first CSS via CDN |
| ✍️ **Frontend** | ![JS](https://img.shields.io/badge/Vanilla_JS-F7DF1E?style=flat-square&logo=javascript&logoColor=black) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white) | Single static page, `fetch()` to the API |
| 🔤 **Fonts** | Inter · JetBrains Mono | Google Fonts |
| 🐳 **Packaging** | ![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat-square&logo=docker&logoColor=white) | One-file deployment image |
| 🤖 **CI** | ![Actions](https://img.shields.io/badge/GitHub_Actions-2088FF?style=flat-square&logo=githubactions&logoColor=white) | Syntax check on Node 18/20/22 + Docker build |

<img src="docs/assets/divider.svg" width="100%" alt="divider" />

## ⚙️ How It Works

### 🧭 System overview

```mermaid
flowchart LR
    U([👤 User]) -->|pastes link| FE[🌐 public/index.html<br/>Tailwind + Vanilla JS]
    FE -->|POST /api/analyze| API{{🛣️ Express server.js}}
    FE -->|POST /api/download| API
    API -->|execFile| YT[📥 yt-dlp]
    YT -->|merge / convert| FF[🎞️ ffmpeg]
    YT -->|metadata JSON| API
    FF -->|file in OS temp dir| API
    API -->|res.download + cleanup| FE
    FE -->|saves file| U
```

### 🔁 Request sequence

```mermaid
sequenceDiagram
    autonumber
    actor User
    participant UI as Browser UI
    participant S as Express server
    participant Y as yt-dlp / ffmpeg
    User->>UI: Paste link + click Analyze
    UI->>S: POST /api/analyze { url }
    S->>S: isSupportedUrl(url)
    S->>Y: yt-dlp -j --no-playlist url (30 s timeout)
    Y-->>S: metadata JSON
    S-->>UI: { title, duration, thumbnail, source, video[], audio[] }
    User->>UI: Choose MP4 / MP3 + quality
    UI->>S: POST /api/download { url, type, quality }
    S->>S: mkdtemp → dl-xxxxxx/
    S->>Y: yt-dlp -f … or -x --audio-format mp3 (120 s timeout)
    Y-->>S: file written to temp dir
    S-->>UI: res.download(file)
    S->>S: delete temp dir
    UI-->>User: 💾 File saved
```

<details>
<summary><b>🔍 Step-by-step breakdown</b> (click to expand)</summary>

<br/>

1. **Validate** — the server checks that the URL looks like a YouTube / Instagram link.
2. **Analyze** — `yt-dlp -j --no-warnings --no-playlist <url>` returns metadata as JSON; the server formats the duration (`m:ss` or `h:mm:ss`) and replies with title, thumbnail, source and the list of qualities the UI offers.
3. **Pick** — the user selects **MP4** (360p/480p/720p/1080p) or **MP3** (128/320 kbps).
4. **Download** — the server creates a random temp directory, runs `yt-dlp` with the matching arguments (`-f best[height<=N] --merge-output-format mp4` for video, `-x --audio-format mp3 --audio-quality …` for audio) and waits up to 120 seconds.
5. **Stream & clean up** — the produced file is sent with `res.download()`, and the temp directory is removed whether the transfer succeeds or fails.

</details>

<img src="docs/assets/divider.svg" width="100%" alt="divider" />

## 🔌 API Reference

Base URL: `http://localhost:3000`

### `POST /api/analyze`

Reads a link and returns what the UI needs to render the result card.

```bash
curl -X POST http://localhost:3000/api/analyze \
  -H "Content-Type: application/json" \
  -d '{"url":"https://www.youtube.com/watch?v=VIDEO_ID"}'
```

<details>
<summary><b>📤 Example response</b></summary>

```json
{
  "title": "Video title",
  "duration": "4:32",
  "thumbnail": "https://…/thumbnail.jpg",
  "source": "YouTube",
  "video": [
    { "quality": "360p" },
    { "quality": "480p" },
    { "quality": "720p" },
    { "quality": "1080p" }
  ],
  "audio": [
    { "quality": "128kbps" },
    { "quality": "320kbps" }
  ]
}
```

</details>

### `POST /api/download`

Downloads the requested format server-side, then streams the file back as an attachment.

```bash
curl -X POST http://localhost:3000/api/download \
  -H "Content-Type: application/json" \
  -d '{"url":"https://www.youtube.com/watch?v=VIDEO_ID","type":"video","quality":"720p"}' \
  -OJ
```

| Field | Type | Values |
|---|---|---|
| `url` | string | YouTube or Instagram link |
| `type` | string | `video` &#124; `audio` |
| `quality` | string | video: `360p` `480p` `720p` `1080p` · audio: `128kbps` `320kbps` |

### ⚠️ Error responses

| Status | When | Message |
|:-:|---|---|
| `400` | Missing / unsupported URL | `Enter a valid YouTube or Instagram link.` |
| `400` | `type` is not `video` or `audio` | `Unknown download type.` |
| `502` | `yt-dlp` could not read the link | `Could not read that link. It may be private, deleted, or unsupported.` |
| `502` | Metadata was not valid JSON | `Unexpected response while analyzing this link.` |
| `502` | Download failed | `Download failed. Try a different format or link.` |
| `502` | No output file produced | `No file was produced for that format.` |

<img src="docs/assets/divider.svg" width="100%" alt="divider" />

## 🎚️ Quality Map

How the UI labels translate into `yt-dlp` arguments:

| Type | UI label | `yt-dlp` argument |
|:-:|:-:|---|
| 🎬 Video | `360p` | `-f "best[height<=360]"` |
| 🎬 Video | `480p` | `-f "best[height<=480]"` |
| 🎬 Video | `720p` | `-f "best[height<=720]"` |
| 🎬 Video | `1080p` | `-f "best[height<=1080]"` |
| 🎧 Audio | `128kbps` | `-x --audio-format mp3 --audio-quality 128K` |
| 🎧 Audio | `320kbps` | `-x --audio-format mp3 --audio-quality 320K` |

All video downloads also pass `--merge-output-format mp4 --no-warnings --no-playlist`.

> ℹ️ The video quality is a **ceiling**, not a guarantee — see the [FAQ](#-faq).

<img src="docs/assets/divider.svg" width="100%" alt="divider" />

## 📁 Project Structure

```bash
📦 yt-downloader
├── 📂 .github
│   ├── 📂 ISSUE_TEMPLATE
│   │   ├── 🐛 bug_report.md
│   │   ├── ✨ feature_request.md
│   │   └── ⚙️ config.yml
│   ├── 📂 workflows
│   │   └── 🤖 ci.yml                 # Node 18/20/22 syntax check + Docker build
│   ├── 💖 FUNDING.yml
│   └── 📝 PULL_REQUEST_TEMPLATE.md
├── 📂 docs
│   └── 📂 assets                     # README graphics
│       ├── 🎨 banner.svg
│       ├── 🎨 divider.svg
│       ├── 🎨 footer.svg
│       ├── 🎨 pipeline.svg
│       ├── 🖼️ preview-dark.svg
│       └── 🖼️ preview-light.svg
├── 📂 public                         # Static frontend served by Express
│   ├── 🌐 index.html                 # UI: Tailwind CDN + vanilla JS
│   ├── 🖼️ qr.jpg                     # Support QR card image
│   └── 🖼️ qr.png.jpeg
├── 🟩 server.js                      # Express API: /api/analyze, /api/download
├── 📦 package.json                   # Single dependency: express
├── 🐳 Dockerfile                     # Node 20 + python3 + ffmpeg + yt-dlp
├── 🐳 docker-compose.yml
├── ☁️ render.yaml                    # Render Blueprint
├── 🔑 .env.example
├── 🚫 .gitignore
├── 🚫 .dockerignore
├── 🧹 .editorconfig
├── 🤝 CONTRIBUTING.md
├── 📜 CODE_OF_CONDUCT.md
├── 🔒 SECURITY.md
├── ⚖️ LICENSE
└── 📖 README.md
```

<img src="docs/assets/divider.svg" width="100%" alt="divider" />

## 🚀 Getting Started

### ✅ Prerequisites

| Tool | Version | Needed for |
|---|---|---|
| [Node.js](https://nodejs.org) | 18 or newer (LTS recommended) | Running the server |
| [yt-dlp](https://github.com/yt-dlp/yt-dlp) | latest | Reading and downloading media |
| [ffmpeg](https://ffmpeg.org) | any recent | Merging and MP3 conversion |

> 🐳 Don't want to install anything? Skip to **[Docker](#-option-b--docker)**.

### 💻 Option A — Run locally

**1. Clone the repository**

```bash
git clone https://github.com/Syed-Muhammad-Tayyab/yt-downloader.git
cd yt-downloader
```

**2. Install `yt-dlp` and `ffmpeg`**

<details>
<summary><b>🍎 macOS</b></summary>

```bash
brew install yt-dlp ffmpeg
```

</details>

<details>
<summary><b>🪟 Windows</b></summary>

```powershell
winget install yt-dlp
winget install ffmpeg
```

</details>

<details>
<summary><b>🐧 Linux</b></summary>

```bash
sudo apt install ffmpeg
pip install yt-dlp
```

</details>

**3. Install dependencies and start**

```bash
npm install
npm start
```

**4. Open the app** → **http://localhost:3000** 🎉

### 🐳 Option B — Docker

```bash
docker build -t media-downloader .
docker run -p 3000:3000 media-downloader
```

### 🐙 Option C — Docker Compose

```bash
docker compose up --build
```

<img src="docs/assets/divider.svg" width="100%" alt="divider" />

## ⚙️ Configuration

| Variable | Default | Description |
|---|---|---|
| `PORT` | `3000` | Port the Express server listens on |
| `YTDLP_PATH` | `yt-dlp` | Path to the `yt-dlp` binary if it is not on your `PATH` |

Copy `.env.example` to `.env` for reference. The server reads these from the process environment, so set them in your shell, Docker run command or hosting dashboard.

<img src="docs/assets/divider.svg" width="100%" alt="divider" />

## ☁️ Deployment

The included `Dockerfile` installs everything the app needs, so any host that supports **"Deploy from Dockerfile"** works.

<details open>
<summary><b>🟣 Render (recommended, GitHub → Render)</b></summary>

<br/>

1. Push this repository to your GitHub account.
2. On [render.com](https://render.com) choose **New → Web Service** and connect the repository.
3. Set **Runtime** to **Docker** (Render detects the `Dockerfile`), or use **New → Blueprint** to apply `render.yaml`.
4. Click **Create Web Service** and wait for the build to finish.
5. Open the generated `*.onrender.com` URL.

</details>

<details>
<summary><b>🚆 Railway</b></summary>

<br/>

1. **New Project → Deploy from GitHub repo** and pick this repository.
2. Railway builds from the `Dockerfile` automatically.
3. Under **Settings → Networking**, generate a public domain.

</details>

<details>
<summary><b>🪁 Fly.io</b></summary>

<br/>

```bash
fly launch      # detects the Dockerfile
fly deploy
```

</details>

> ⚠️ Free tiers may sleep when idle, limit CPU/time per request, or restrict this kind of workload. Large downloads can hit the 120-second server timeout on slow hosts.

<img src="docs/assets/divider.svg" width="100%" alt="divider" />

## 🎨 Design System

The UI uses a violet → teal palette on a deep-ink dark theme (values taken from the Tailwind config in `public/index.html`).

| Swatch | Token | Hex | Usage |
|:-:|---|---|---|
| ![](https://img.shields.io/badge/%20%20%20%20-6D5DFC?style=flat-square) | `reel.violet` | `#6D5DFC` | Primary accent, gradient start, focus ring |
| ![](https://img.shields.io/badge/%20%20%20%20-22D3B8?style=flat-square) | `reel.teal` | `#22D3B8` | Secondary accent, gradient end |
| ![](https://img.shields.io/badge/%20%20%20%20-0B0F19?style=flat-square) | `reel.ink` | `#0B0F19` | Dark background |
| ![](https://img.shields.io/badge/%20%20%20%20-131826?style=flat-square) | `reel.card` | `#131826` | Dark cards |
| ![](https://img.shields.io/badge/%20%20%20%20-232A3D?style=flat-square) | `reel.line` | `#232A3D` | Dark borders |

**Typography:** `Inter` (UI) · `JetBrains Mono` (labels & code) &nbsp;|&nbsp; **Motion:** rise / pop / scan-line / pulse-glow, all disabled under `prefers-reduced-motion`.

<img src="docs/assets/divider.svg" width="100%" alt="divider" />

## 🔐 Security & Privacy

| ✅ What the app does | |
|---|---|
| No accounts, database or analytics | Nothing about users or links is stored |
| Temp files only | Each download is written to a random `dl-xxxxxx` folder in the OS temp directory and deleted when the response ends (or fails) |
| No shell | `yt-dlp` is launched with `execFile` and an argument array, not through a shell string |
| Timeouts | 30 s for analysis, 120 s for downloads |

> ⚠️ **If you host this publicly**, treat it as an internet-facing service that runs a powerful downloader on your machine: add **rate limiting**, request-size and concurrency limits, and consider a stricter URL allow-list (see the [Roadmap](#️-roadmap)). Keep `yt-dlp` updated — sites change often and old versions stop working.

<img src="docs/assets/divider.svg" width="100%" alt="divider" />

## 🗺️ Roadmap

- [x] Analyze YouTube & Instagram links (title, thumbnail, duration)
- [x] MP4 download at 360p / 480p / 720p / 1080p
- [x] MP3 download at 128 / 320 kbps
- [x] Light / dark theme
- [x] Docker image with all system dependencies
- [x] Automatic temp-file cleanup
- [ ] Stricter URL validation (parse with `new URL()`, allow-list hostnames, pass `--` before the URL)
- [ ] Per-IP rate limiting and a concurrency cap
- [ ] Better 1080p support via `bestvideo+bestaudio` merging
- [ ] Show only the qualities a video really offers
- [ ] Run the Docker container as a non-root user
- [ ] Download progress bar
- [ ] Health-check endpoint (`/healthz`)
- [ ] Automated tests

Have an idea? [Open a feature request](https://github.com/Syed-Muhammad-Tayyab/yt-downloader/issues/new?template=feature_request.md).

<img src="docs/assets/divider.svg" width="100%" alt="divider" />

## ❓ FAQ

<details>
<summary><b>Why is my 1080p download lower quality?</b></summary>

<br/>

The video selector is `best[height<=1080]`, which picks the best **single-file** format at or below that height. Many platforms only provide higher resolutions as separate video and audio streams, so the result can be lower than requested. Switching to `bestvideo[height<=N]+bestaudio` (merged by `ffmpeg`) is on the roadmap.

</details>

<details>
<summary><b>Does it support playlists?</b></summary>

<br/>

No. `--no-playlist` is always passed, so only the single item is processed.

</details>

<details>
<summary><b>Why does it say "Could not read that link"?</b></summary>

<br/>

The media may be private, age-restricted, deleted, region-locked, or the platform changed something. Update `yt-dlp` (or rebuild the Docker image) and try again.

</details>

<details>
<summary><b>Where are downloaded files stored?</b></summary>

<br/>

Only temporarily, in the server's OS temp directory, and they are deleted right after being sent to your browser.

</details>

<details>
<summary><b>How do I change the support QR code?</b></summary>

<br/>

Replace `public/qr.jpg` with your own image (keep the same file name).

</details>

<details>
<summary><b>Can I use another yt-dlp location?</b></summary>

<br/>

Yes — set the `YTDLP_PATH` environment variable to the binary's full path.

</details>

<img src="docs/assets/divider.svg" width="100%" alt="divider" />

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

1. 🍴 **Fork** the project
2. 🌱 Create a branch: `git checkout -b feat/amazing-feature`
3. ✅ Run `node --check server.js`
4. 💾 Commit: `git commit -m "feat: add amazing feature"`
5. 📤 Push: `git push origin feat/amazing-feature`
6. 🔁 Open a **Pull Request**

Please read [CONTRIBUTING.md](CONTRIBUTING.md) and the [Code of Conduct](CODE_OF_CONDUCT.md) first. Security problems? See [SECURITY.md](SECURITY.md).

<img src="docs/assets/divider.svg" width="100%" alt="divider" />

## ⚖️ Legal Notice

Downloading from YouTube or Instagram this way can conflict with their **Terms of Service**, and downloading copyrighted content without permission may be illegal in your country. This project is provided for **educational purposes and for downloading content you own or have permission to save**. You are responsible for how you use it — review the rules that apply to you before making a deployment public.

<img src="docs/assets/divider.svg" width="100%" alt="divider" />

## 📜 License & Credits

Distributed under the **MIT License** — see [`LICENSE`](LICENSE) for details.

**Built with**

- [yt-dlp](https://github.com/yt-dlp/yt-dlp) — the downloader doing the heavy lifting
- [FFmpeg](https://ffmpeg.org) — merging and audio conversion
- [Express](https://expressjs.com) — the web server
- [Tailwind CSS](https://tailwindcss.com) — styling
- [Shields.io](https://shields.io), [Capsule Render](https://github.com/kyechan99/capsule-render) & [readme-typing-svg](https://github.com/DenverCoder1/readme-typing-svg) — README decoration

<img src="docs/assets/divider.svg" width="100%" alt="divider" />

## 👨‍💻 Developer

<div align="center">

### **Syed Muhammad Tayyab**

*BSCS student · Information Security · Full-stack web developer*

[![GitHub](https://img.shields.io/badge/GitHub-Syed--Muhammad--Tayyab-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/Syed-Muhammad-Tayyab)

<br/>

⭐ **If you found this project useful, please give it a star!** ⭐

<br/>

<img src="docs/assets/footer.svg" width="100%" alt="Developed by Syed Muhammad Tayyab" />

<img src="https://capsule-render.vercel.app/api?type=waving&color=22D3B8&height=140&section=footer&text=Developed%20by%20Syed%20Muhammad%20Tayyab&fontSize=26&fontColor=ffffff&animation=twinkling&fontAlignY=65" width="100%" alt="footer wave" />

</div>
