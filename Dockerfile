FROM node:20-alpine as build

WORKDIR /website

COPY ./ /website/

RUN npm install

ENV NEXT_PUBLIC_CONTENTFUL_SPACE_ID=ssmj7cph8322
ENV NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=FwTu54gbsW1aagce6gfcahZJQQuTv7RmeQOo9Wp9B_E
ENV EMAIL_USERNAME=diogaodieger@gmail.com
ENV EMAIL_PASSWORD=svou opvz yayj bnow

RUN npm run build

EXPOSE 3000

CMD [ "npm", "start"]