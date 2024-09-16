FROM node:20-alpine as build
ENV TZ=America/Sao_Paulo

WORKDIR /home/node/website

USER node

COPY --chown=node:node ./yarn.lock /home/node/app/yarn.lock
COPY --chown=node:node ./package.json /home/node/app/package.json

RUN npm install

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start"]