FROM node:alpine

COPY index.js /dist/index.js
COPY package.json /dist/package.json
COPY package-lock.json /dist/package-lock.json

WORKDIR /dist

RUN npm install

EXPOSE 4500

CMD ["npm","start"]