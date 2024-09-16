FROM node:20-alpine as production
ENV TZ=America/Sao_Paulo

# Variáveis de ambiente definidas na pipeline
ENV NEXT_PUBLIC_CONTENTFUL_SPACE_ID=$NEXT_PUBLIC_CONTENTFUL_SPACE_ID
ENV NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=$NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

USER node

WORKDIR /home/node/website

COPY --chown=node:node ./package*.json .
RUN npm install

COPY --chown=node:node . .
RUN npm run build

EXPOSE 3000

CMD [ "npm", "start"]