FROM node:20-alpine as build

WORKDIR /website

COPY ./ /website/

RUN npm install

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start"]