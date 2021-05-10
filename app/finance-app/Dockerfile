# Stage 1
FROM node:16-alpine as build-step

RUN mkdir -p /home/node/app
WORKDIR /home/node/app
COPY package.json /home/node/app
RUN npm install
COPY . /home/node/app
RUN npm run build --prod

# Stage 2
FROM nginx:1.17.1-alpine

COPY --from=build-step /home/node/app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
