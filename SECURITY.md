# Security Policy

## Supported versions
Only the latest commit on `main` is supported.

## Reporting a vulnerability
Please **do not** open a public issue for security problems. Contact the maintainer privately through <https://github.com/Syed-Muhammad-Tayyab> (use GitHub's *Report a vulnerability* button under the **Security** tab if enabled).

## Hardening notes for self-hosters
- Put the app behind a reverse proxy with rate limiting.
- Run the container as a non-root user where your host allows it.
- Keep `yt-dlp` up to date — rebuild the Docker image regularly.

---
<sub>Developed by Syed Muhammad Tayyab</sub>
