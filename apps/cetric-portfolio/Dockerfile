FROM node:22-alpine AS build
RUN corepack enable && corepack prepare pnpm@10.30.3 --activate
WORKDIR /workspace
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml nx.json ./
COPY apps ./apps
RUN pnpm install --frozen-lockfile --prod=false
RUN pnpm exec nx build cetric-portfolio

FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=production
ENV NITRO_HOST=0.0.0.0
ENV NITRO_PORT=4310
COPY --from=build /workspace/apps/cetric-portfolio/.output ./.output
EXPOSE 4310
CMD ["node", ".output/server/index.mjs"]
