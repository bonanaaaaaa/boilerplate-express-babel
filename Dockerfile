FROM node
WORKDIR /app
COPY package.json .
RUN npm install --production
COPY config/docker.json .
COPY build .
RUN node -v && npm -v
RUN ls -la

