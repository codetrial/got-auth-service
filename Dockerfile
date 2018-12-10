FROM node:8

WORKDIR /usr/src/app

COPY package*.json ./
RUN yarn
COPY . .

EXPOSE 7001

CMD [ "yarn", "start:docker" ]
