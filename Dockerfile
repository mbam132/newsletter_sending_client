FROM node:13.12.0-alpine

# Create app directory
WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . ./

RUN npm run webpack:build

CMD npm run serve

# EXPOSE 3000