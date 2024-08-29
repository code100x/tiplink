FROM node:20-alpine AS base
COPY package* .
COPY ./prisma ./prisma
RUN npm install && \
    npx prisma generate && \
    npx prisma db push

FROM node:20-alpine AS development
WORKDIR /app
COPY . .
COPY --from=base package* .
COPY --from=base ./prisma ./prisma
COPY --from=base ./node_modules ./node_modules

CMD ["npm","run", "dev"]


FROM node:20-alpine AS build
COPY . .
COPY --from=base /node_modules ./node_modules
RUN npm run build


FROM node:20-alpine AS production
COPY package* .
COPY --from=build /next.config.mjs ./
COPY --from=build /public ./public
COPY --from=build /prisma ./prisma
COPY --from=build /node_modules ./node_modules
COPY --from=build /.next ./.next

CMD ["npm","run", "start"]


EXPOSE 3000