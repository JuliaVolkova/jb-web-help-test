FROM node:lts as builder
WORKDIR /app
COPY . .
RUN npm install webpack -g && npm install && npm run build

FROM nginx:stable-alpine
ENV WORKDIR="/usr/share/nginx/html"

WORKDIR ${WORKDIR}
COPY --from=builder /app/dist/ .
COPY ./docker/files/ /
