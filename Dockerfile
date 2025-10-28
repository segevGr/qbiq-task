FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build

################################

FROM alpine:3.20 AS exporter
WORKDIR /export
COPY --from=builder /app/dist ./dist


################################

FROM node:20-alpine AS runner

WORKDIR /app

RUN npm install -g serve@14

COPY --from=builder /app/dist ./dist

EXPOSE 4173

ENTRYPOINT ["serve", "-s", "dist", "-l", "4173"]
