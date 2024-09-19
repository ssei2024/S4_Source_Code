FROM node:22-alpine

WORKDIR /app

COPY package*.json .
RUN npm installl

COPY . .

EXPOSE 3000

CMD ["node", "index.js"]
