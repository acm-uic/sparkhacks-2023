FROM nginx:1.22.1-alpine

COPY build/ /usr/share/nginx/html
