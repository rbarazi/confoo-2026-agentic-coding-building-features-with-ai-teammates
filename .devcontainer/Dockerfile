# Debian Bookworm base — multi-arch (amd64 + arm64)
FROM mcr.microsoft.com/devcontainers/base:bookworm

# Install Playwright system dependencies (browsers need these)
RUN apt-get update && apt-get install -y --no-install-recommends \
    libnspr4 \
    libnss3 \
    libnssutil3 \
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
