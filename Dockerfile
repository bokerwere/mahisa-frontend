FROM node:19.5.0-alpine

WORKDIR /usr/app

COPY package.json ./

COPY package-lock.json ./

COPY . .

RUN npm install --legacy-peer-deps

RUN npm run build

CMD [ "npm", "start" ]