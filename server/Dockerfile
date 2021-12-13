FROM node:alpine

RUN mkdir -p /usr/src/node-app && chown -R node:node /usr/src/node-app

WORKDIR /usr/src/node-app
COPY --chown=node:node . .

USER node
RUN npm set-script prepare ""
RUN npm install

EXPOSE 3000
