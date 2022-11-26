FROM node:16.15.5-alpine3.10

WORKDIR /app

COPY --from=builder /app/dist /app/dist
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/package.json /app/package.json

RUN chmod +x entrypoint.sh

EXPOSE 3000

CMD ["node", "dist/server.js"]
