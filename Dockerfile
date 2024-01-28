FROM node:21-alpine3.19

WORKDIR /app

COPY package*.json ./

COPY . .

RUN npm install

CMD [ "npm","run","preview-build"]

EXPOSE 8080