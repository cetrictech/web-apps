FROM node:22-alpine AS build
RUN corepack enable && corepack prepare pnpm@10.30.3 --activate
WORKDIR /workspace
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml nx.json ./
COPY apps ./apps
RUN pnpm install --frozen-lockfile --prod=false
RUN pnpm exec nx build lixphotography-website

FROM node:22-alpine
WORKDIR /app
ENV NODE_ENV=production
ENV NITRO_HOST=0.0.0.0
ENV NITRO_PORT=4210
COPY --from=build /workspace/apps/lixphotography-website/.output ./.output
EXPOSE 4210
CMD ["node", ".output/server/index.mjs"]
