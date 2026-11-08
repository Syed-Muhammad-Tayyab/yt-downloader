FROM node:20-slim

# System deps: python3 (yt-dlp needs it), ffmpeg (merging/audio extraction), curl (fetch yt-dlp)
RUN apt-get update && \
    apt-get install -y --no-install-recommends python3 ffmpeg curl ca-certificates && \
    curl --fail --location \
         --retry 5 --retry-all-errors --retry-delay 2 \
         --connect-timeout 20 \
         https://github.com/yt-dlp/yt-dlp/releases/latest/download/yt-dlp \
         --output /usr/local/bin/yt-dlp && \
    chmod a+rx /usr/local/bin/yt-dlp && \
    rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY package*.json ./
RUN npm install --omit=dev

COPY . .

ENV PORT=3000
EXPOSE 3000

CMD ["npm", "start"]
