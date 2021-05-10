FROM node:latest

RUN npm install -g mongoose

RUN npm install -g nodemon

RUN mkdir -p /home/node/api/node_modules && chown -R node:node /home/node/api

WORKDIR /home/node/api

COPY package*.json ./

RUN npm install

COPY . .

COPY --chown=node:node . .

USER node

EXPOSE 8081

CMD [ "nodemon", "start" ]
