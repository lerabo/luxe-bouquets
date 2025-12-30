FROM node:20.17.0-alpine AS base
  
  # Встановлюємо базові залежності
RUN apk add --no-cache libc6-compat
WORKDIR /app
  
  # Етап встановлення залежностей
FROM base AS deps
COPY package.json yarn.lock ./
RUN yarn install --frozen-lockfile
  
  # Етап білду
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

ENV NEXT_TELEMETRY_DISABLED=1
RUN yarn build
  # Додаємо користувача
RUN addgroup --system --gid 1001 nodejs && \
adduser --system --uid 1001 nextjs
  # Запуск Next.js
ENV HOSTNAME="0.0.0.0"
CMD ["yarn", "start"]

