FROM caddy:alpine

COPY ./_site /usr/share/caddy

EXPOSE 80