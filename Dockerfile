FROM node
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
USER node
CMD [ "node", "server.js" ]