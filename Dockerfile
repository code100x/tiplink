FROM node:20-alpine AS base

ARG DATABASE_URL
ENV DATABASE_URL=$DATABASE_URL

WORKDIR /app
COPY package*.json ./
COPY ./prisma ./prisma
RUN apk add --no-cache python3 make g++ libusb-dev linux-headers eudev-dev \
    && npm install --only=production \
    && npx prisma generate \
    && npm rebuild

FROM node:20-alpine AS development
ENV DATABASE_URL=$DATABASE_URL

WORKDIR /app
COPY --from=base /app/package*.json ./
COPY --from=base /app/prisma ./prisma
COPY --from=base /app/node_modules ./node_modules
COPY . .
RUN npm install --only=development
CMD ["npm","run", "dev:docker"]


FROM node:20-alpine AS build
ENV DATABASE_URL=$DATABASE_URL
COPY . .
COPY --from=base /app/node_modules ./node_modules
RUN npm run build


FROM node:20-alpine AS production
ENV DATABASE_URL=$DATABASE_URL
COPY package* .
COPY --from=build /app/next.config.mjs ./
COPY --from=build /app/public ./public
COPY --from=build /app/prisma ./prisma
COPY --from=build /app/node_modules ./node_modules
COPY --from=build /app/.next ./.next

CMD ["npm","run", "start"]


EXPOSE 3000