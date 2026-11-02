#!/usr/bin/env bash
set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/../config/vps-deploy-policy.sh"
mkdir -p "$WEB_APPS_STATE_DIR"
docker version >/dev/null
docker compose version >/dev/null
git --version >/dev/null
test -d "$WEB_APPS_APP_ROOT"
echo "Web apps VPS deploy prerequisites OK."
