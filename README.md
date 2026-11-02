# web-apps

Nx monorepo for Cetric Tech websites, using pnpm, Nuxt 4, Vue 3, Nuxt UI 4, and Tailwind CSS 4.

## Getting started

Use Node.js 22.12+ (Node 22 LTS recommended) and pnpm 10.30.3.

```sh
pnpm install
pnpm dev
```

The photography website runs at http://localhost:4210.

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

The deployment follows Darena's exec-runner pipeline, build containers and Compose recreation. It deploys pushes to `develop` using Drone runner labels `environment: uat` and `location: darena-vps`.

The VPS checkout must be at `/opt/apps/web-apps/web-apps` (the scripts accept an `APP_ROOT` override). Install Docker with Compose and Git, grant the runner Docker access, and ensure it can write to the checkout. The committed `.env` contains local defaults; `.env.production` contains the production runtime values loaded by Compose. Both use port 4210.

Application images are built and used locally on the VPS. No container registry credentials, login, or image pushes are required. Public Node base images are still downloaded when needed. The app is published on host port 4210 and listens on container port 4210.

For a local container build and run:

```sh
docker compose build
docker compose up -d
```

The container uses Nuxt's standalone production output. Development dependencies are installed only in the build stage. The Drone build container uses pnpm 10.30.3 to match this workspace.

## Search, AI discovery, and cookies

The canonical domain is `https://lixphotography.com`, defined in `app/data/site.ts`. The site serves `/robots.txt`, `/sitemap.xml`, and `/llms.txt` from this same business content. Home page JSON-LD describes the business, its services, and the visible FAQs; each public page has a canonical URL and social preview metadata. The AI-readable summary is supplementary and does not guarantee search or AI answer placement.

The cookie banner stores the visitor's choice in the `lix-cookie-consent` cookie for 180 days. Optional theme persistence is off until accepted. Revoking preferences removes `lix-photography-theme` from local storage. Cookie settings can be reopened from the footer or `/privacy`. There are no analytics or advertising trackers. Google Fonts remains an external stylesheet, disclosed on the privacy page.
