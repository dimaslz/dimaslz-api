# syntax=docker/dockerfile:1
ARG NODE_VERSION=26

FROM node:${NODE_VERSION}-alpine AS build
WORKDIR /app
RUN npm install -g pnpm@11.24.0
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./
RUN --mount=type=cache,target=/root/.local/share/pnpm/store pnpm install --frozen-lockfile
COPY tsconfig*.json ./
COPY src ./src
RUN pnpm build
RUN pnpm prune --prod

FROM node:${NODE_VERSION}-alpine
ENV NODE_ENV=production
WORKDIR /app
COPY --from=build --chown=node:node /app/dist ./dist
COPY --from=build --chown=node:node /app/node_modules ./node_modules
COPY --from=build --chown=node:node /app/package.json ./package.json
USER node
EXPOSE 3000
CMD ["node", "dist/start.js"]
