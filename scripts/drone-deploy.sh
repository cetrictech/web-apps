#!/usr/bin/env bash
set -euo pipefail
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
source "$SCRIPT_DIR/../config/vps-deploy-policy.sh"
cd "$WEB_APPS_APP_ROOT"
export NX_DAEMON=false NUXT_TELEMETRY_DISABLED=1 NODE_ENV=production NO_COLOR=1
test -n "${DOCKER_IMAGE_NAMESPACE:-}" || { echo "docker_image_namespace secret is required"; exit 1; }
case "$DOCKER_IMAGE_NAMESPACE" in
  *'[secret:'*|*']'*) echo "docker_image_namespace contains an unresolved secret placeholder" >&2; exit 1 ;;
esac
test -n "${DOCKER_REGISTRY:-}" || { echo "docker_registry secret is required"; exit 1; }
test -n "${DOCKER_USERNAME:-}" || { echo "docker_username secret is required"; exit 1; }
test -n "${DOCKER_PASSWORD:-}" || { echo "docker_password secret is required"; exit 1; }
export DOCKER_IMAGE_TAG="$(git rev-parse HEAD | cut -c1-12)"
printf '%s' "$DOCKER_PASSWORD" | docker login "$DOCKER_REGISTRY" --username "$DOCKER_USERNAME" --password-stdin >/dev/null

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
  docker tag "$DOCKER_IMAGE_NAMESPACE/$service:$DOCKER_IMAGE_TAG" "$DOCKER_IMAGE_NAMESPACE/$service:develop" 2>/dev/null || true
  docker push "$DOCKER_IMAGE_NAMESPACE/$service:$DOCKER_IMAGE_TAG"
  docker push "$DOCKER_IMAGE_NAMESPACE/$service:develop"
  docker compose up -d --no-build --force-recreate "$service"
done
docker compose ps
docker logout "$DOCKER_REGISTRY" >/dev/null
