#!/bin/bash
# Cloud sessions only: install the site's dependencies (Astro and Lenis) so
# `npm run build` works straight away. npm install, not npm ci, so the
# container cache keeps node_modules between sessions.
set -euo pipefail

if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

cd "${CLAUDE_PROJECT_DIR:-$(pwd)}"
npm install --no-audit --no-fund
