FROM node:13.12.0-alpine

# Create app directory
WORKDIR /app

COPY package.json ./
COPY package-lock.json ./
RUN npm install

COPY . ./

CMD ["npm", "start"]

# EXPOSE 3000