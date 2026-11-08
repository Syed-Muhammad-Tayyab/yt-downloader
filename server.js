const express = require('express');
const path = require('path');
const fs = require('fs');
const os = require('os');
const crypto = require('crypto');
const { execFile } = require('child_process');

const app = express();
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// Path to the yt-dlp binary. On most hosts (see Dockerfile) it's just "yt-dlp".
const YTDLP = process.env.YTDLP_PATH || 'yt-dlp';

function isSupportedUrl(url) {
  return /youtu\.?be|youtube\.com|instagram\.com/i.test(url || '');
}

function formatDuration(seconds) {
  if (!seconds && seconds !== 0) return 'Unknown';
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  const s = Math.floor(seconds % 60);
  const pad = (n) => String(n).padStart(2, '0');
  return h > 0 ? `${h}:${pad(m)}:${pad(s)}` : `${m}:${pad(s)}`;
}

// ---------------------------------------------------------------------------
// POST /api/analyze  { url }
// Returns title, thumbnail, duration, source, and the formats the UI offers.
// ---------------------------------------------------------------------------
app.post('/api/analyze', (req, res) => {
  const { url } = req.body || {};

  if (!isSupportedUrl(url)) {
    return res.status(400).json({ error: 'Enter a valid YouTube or Instagram link.' });
  }

  execFile(
    YTDLP,
    ['-j', '--no-warnings', '--no-playlist', url],
    { maxBuffer: 1024 * 1024 * 20, timeout: 30000 },
    (err, stdout) => {
      if (err) {
        console.error('[analyze]', err.message);
        return res.status(502).json({ error: 'Could not read that link. It may be private, deleted, or unsupported.' });
      }

      let info;
      try {
        info = JSON.parse(stdout);
      } catch {
        return res.status(502).json({ error: 'Unexpected response while analyzing this link.' });
      }

      res.json({
        title: info.title || 'Untitled',
        duration: formatDuration(info.duration),
        thumbnail: info.thumbnail || '',
        source: /instagram/i.test(url) ? 'Instagram' : 'YouTube',
        video: [
          { quality: '360p' },
          { quality: '480p' },
          { quality: '720p' },
          { quality: '1080p' },
        ],
        audio: [
          { quality: '128kbps' },
          { quality: '320kbps' },
        ],
      });
    }
  );
});

// Map the UI's quality labels to yt-dlp format selectors.
const VIDEO_FORMAT = {
  '360p': 'best[height<=360]',
  '480p': 'best[height<=480]',
  '720p': 'best[height<=720]',
  '1080p': 'best[height<=1080]',
};
const AUDIO_BITRATE = {
  '128kbps': '128K',
  '320kbps': '320K',
};

// ---------------------------------------------------------------------------
// POST /api/download  { url, type: 'video' | 'audio', quality }
// Downloads the requested format server-side, then streams the file back.
// ---------------------------------------------------------------------------
app.post('/api/download', (req, res) => {
  const { url, type, quality } = req.body || {};

  if (!isSupportedUrl(url)) {
    return res.status(400).json({ error: 'Enter a valid YouTube or Instagram link.' });
  }
  if (!['video', 'audio'].includes(type)) {
    return res.status(400).json({ error: 'Unknown download type.' });
  }

  const id = crypto.randomBytes(6).toString('hex');
  const outDir = fs.mkdtempSync(path.join(os.tmpdir(), 'dl-'));
  const outTemplate = path.join(outDir, `${id}.%(ext)s`);

  const cleanup = () => fs.rm(outDir, { recursive: true, force: true }, () => {});

  let args;
  if (type === 'video') {
    const fmt = VIDEO_FORMAT[quality] || 'best';
    args = ['-f', fmt, '--merge-output-format', 'mp4', '--no-warnings', '--no-playlist', '-o', outTemplate, url];
  } else {
    const bitrate = AUDIO_BITRATE[quality] || '192K';
    args = ['-x', '--audio-format', 'mp3', '--audio-quality', bitrate, '--no-warnings', '--no-playlist', '-o', outTemplate, url];
  }

  execFile(YTDLP, args, { maxBuffer: 1024 * 1024 * 50, timeout: 120000 }, (err) => {
    if (err) {
      console.error('[download]', err.message);
      cleanup();
      return res.status(502).json({ error: 'Download failed. Try a different format or link.' });
    }

    const files = fs.readdirSync(outDir);
    if (!files.length) {
      cleanup();
      return res.status(502).json({ error: 'No file was produced for that format.' });
    }

    const filePath = path.join(outDir, files[0]);
    res.download(filePath, files[0], (sendErr) => {
      if (sendErr) console.error('[send]', sendErr.message);
      cleanup();
    });
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Media Downloader running on port ${PORT}`));
