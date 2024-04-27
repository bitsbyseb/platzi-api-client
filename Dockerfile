FROM node:latest
FROM nginx:latest
WORKDIR /app

COPY . /app/

RUN npm install

CMD [ "npm","run","build"]

COPY /app/dist/ /usr/share/nginx/html