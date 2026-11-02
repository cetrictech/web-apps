# web-apps

Nx monorepo for Cetric Tech websites, using pnpm, Nuxt 4, Vue 3, Nuxt UI 4, and Tailwind CSS 4.

## Getting started

Use Node.js 22.12+ (Node 22 LTS recommended) and pnpm 10.30.3.

```sh
pnpm install
pnpm dev
```

The photography website runs at http://localhost:3000.

## Commands

```sh
pnpm build                                # Build all apps
pnpm typecheck                            # Check all app types
pnpm nx show projects                     # List workspace projects
pnpm nx serve lixphotography-website       # Start the photography app
pnpm nx build lixphotography-website       # Build the photography app
pnpm --filter lixphotography-website exec nuxt preview # Preview its production build
```

The production server entry point is `apps/lixphotography-website/.output/server/index.mjs`.

## Layout

- `apps/lixphotography-website`: migrated photography website, including its components, theme, and public images.
- `libs/`: reserved for future shared packages; pnpm already includes `libs/*` in the workspace.

Nx discovers Nuxt tasks through `@nx/nuxt/plugin`. App dependencies belong in the app's `package.json`; workspace tools belong in the root manifest. Place additional Nuxt apps under `apps/`, give each a unique package name and a `nuxt.config.ts`, then run `pnpm install`.

## Migration

The photography app was copied from `Cetride/cetride-web/apps/lixphotography-website`. Its source was left intact. Cetride-specific configuration and theme imports were replaced with local Nuxt configuration and CSS tokens. The shared connection status component was copied into the app. Generated build output, deployment metadata, and installed dependencies were excluded.

Google Fonts remains an external stylesheet, as in the original app. Nuxt UI automatic font downloading is disabled so production builds do not require font provider access.

## Docker and Drone deployment

The deployment follows Darena's exec-runner pipeline, build containers, registry pushes, and Compose recreation. It deploys pushes to `develop` using Drone runner labels `environment: uat` and `location: darena-vps`.

The VPS checkout must be at `/opt/apps/web-apps/web-apps` (the scripts accept an `APP_ROOT` override). Install Docker with Compose and Git, grant the runner Docker access, and ensure it can write to the checkout. The pipeline creates `.env.production` from `.env` when available, otherwise an empty file.

Configure these Drone secrets, using the same names as Darena:

- `docker_image_namespace`: full registry namespace, e.g. `registry.example.com/cetrictech`.
- `docker_registry`: registry hostname for Docker login.
- `docker_username`: registry login username.
- `docker_password`: registry password or access token.

Images are tagged with the first 12 characters of the Git commit and `develop`. The app is published on host port 3000 and listens on container port 3000.

For a local container build and run:

```sh
touch .env.production
docker compose build
docker compose up -d
```

The container uses Nuxt's standalone production output. Development dependencies are installed only in the build stage. The Drone build container uses pnpm 10.30.3 to match this workspace.
