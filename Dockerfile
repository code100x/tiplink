FROM node:20-alpine

WORKDIR /app

COPY package* .
COPY ./prisma .
COPY next.config.mjs .
COPY postcss.config.mjs .
COPY tailwind.config.ts .
COPY components.json .

RUN npm install -g pnpm

RUN pnpm install

RUN npx prisma generate

COPY . .

EXPOSE 3000

CMD ["npm","run", "docker-dev"]