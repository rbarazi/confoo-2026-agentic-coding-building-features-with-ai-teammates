# node:22-slim — smallest official Node.js image (~200 MB), multi-arch
FROM node:22-slim

# Install Playwright system dependencies (Chromium dynamically links against these)
RUN apt-get update && apt-get install -y --no-install-recommends \
    libnspr4 \
    libnss3 \
    libatk1.0-0 \
    libatk-bridge2.0-0 \
    libdbus-1-3 \
    libcups2 \
    libxkbcommon0 \
    libatspi2.0-0 \
    libxcomposite1 \
    libxdamage1 \
    libxfixes3 \
    libxrandr2 \
    libgbm1 \
    libasound2 \
    libpango-1.0-0 \
    libcairo2 \
    fonts-noto-color-emoji \
    && rm -rf /var/lib/apt/lists/*
