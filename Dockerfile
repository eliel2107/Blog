FROM node:20-alpine AS production
ENV TZ=America/Sao_Paulo

ARG NEXT_PUBLIC_CONTENTFUL_SPACE_ID
ARG NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

USER node

WORKDIR /home/node/website

COPY --chown=node:node ./package*.json .
RUN npm install

COPY --chown=node:node . .
RUN npm run build

EXPOSE 3000

CMD [ "npm", "start"]