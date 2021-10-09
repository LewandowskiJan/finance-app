# Stage 1
FROM node:14-alpine as build-step

RUN mkdir -p /home/node/app
WORKDIR /home/node/app

# Stage 2 copy library
COPY dist/util /home/node/app/dist/util

# Stage 3 install deps
COPY package.json /home/node/app
RUN npm install

# Stage 4 copy app
COPY . /home/node/app
WORKDIR /home/node/app

# Stage 5 npm ci is solution for https://github.com/uuidjs/uuid/issues/238
RUN npm ci
RUN npm run build --prod

# Stage 6
FROM nginx:1.17.1-alpine

COPY --from=build-step /home/node/app/dist/apps /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
