FROM nginx:1.22.1-alpine

COPY build/ /usr/share/nginx/html
COPY conf/default.conf /etc/nginx/conf.d/default.conf
