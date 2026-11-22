# syntax=docker/dockerfile:1
FROM node:26-alpine AS build
ENV HUSKY=0
ENV COREPACK_HOME=/opt/corepack COREPACK_ENABLE_DOWNLOAD_PROMPT=0
RUN npm install -g corepack && corepack enable
WORKDIR /app
COPY . .
RUN pnpm install --frozen-lockfile
RUN pnpm run build

FROM node:26-alpine AS runtime
ENV NODE_ENV=production HOST=0.0.0.0 PORT=3000
ENV COREPACK_HOME=/opt/corepack COREPACK_ENABLE_DOWNLOAD_PROMPT=0
RUN npm install -g corepack && corepack enable
WORKDIR /app
COPY --from=build --chown=node:node /app ./
USER node
EXPOSE 3000
HEALTHCHECK --interval=10s --timeout=3s --start-period=20s --retries=3 \
  CMD test ! -f /tmp/draining && wget -qO- http://127.0.0.1:3000/ >/dev/null || exit 1
CMD ["pnpm","start"]
