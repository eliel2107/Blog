FROM node:20-alpine as production
ENV TZ=America/Sao_Paulo
USER node

WORKDIR /home/node/website

COPY --chown=node:node ./package*.json .
RUN npm install

COPY --chown=node:node . .
RUN npm run build

EXPOSE 3000

CMD [ "npm", "start"]