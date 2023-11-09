FROM node:20-alpine AS development

WORKDIR /usr/src/app

COPY ../../package*.json ./

RUN npm install --force

COPY ../.. .

RUN npm run build appointments

FROM node:20-alpine As production

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /usr/src/app

COPY ../../package*.json ./

RUN npm install --prod

COPY --from=development /usr/src/app/dist ./dist

CMD ["node", "dist/apps/appointments/main"]