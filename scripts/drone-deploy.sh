#!/usr/bin/env bash
set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/../config/vps-deploy-policy.sh"
cd "$WEB_APPS_APP_ROOT"
export NX_DAEMON=false NUXT_TELEMETRY_DISABLED=1 NODE_ENV=production NO_COLOR=1
run_build_container() {
  docker run --rm \
    --user "$(id -u):$(id -g)" \
    -v "$PWD:/workspace" \
    -w /workspace \
    -e NX_DAEMON=false \
    -e NUXT_TELEMETRY_DISABLED=1 \
    -e NODE_ENV=production \
    -e NO_COLOR=1 \
    -e CI=1 \
    -e HOME=/tmp \
    -e WEB_APPS_ALL_SERVICES="$WEB_APPS_ALL_SERVICES" \
    node:26-bookworm \
    "$@"
}

run_build_container sh -c 'npx --yes pnpm@10.30.3 install --frozen-lockfile --prod=false'
run_build_container sh -c '
  for service in $WEB_APPS_ALL_SERVICES; do
    ./node_modules/.bin/nx run "$service:build" --output-style=stream
  done
'
for service in $WEB_APPS_ALL_SERVICES; do
  docker compose build "$service"
  docker compose up -d --no-build --force-recreate "$service"
done
docker compose ps
