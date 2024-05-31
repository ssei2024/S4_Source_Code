FROM docker.arvancloud.ir/node:22-alpine

WORKDIR /app

COPY . .

RUN npm install

ENV VITE_HOST=0.0.0.0
ENV VITE_BASE_URL=https://s4-backend.sse.institute

EXPOSE 4173
CMD ["npm","run","prod"]
