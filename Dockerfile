FROM caddy:alpine

COPY ./_site /usr/share/caddy

EXPOSE 80

CMD ["caddy", "file-server", "--root", "/usr/share/caddy", "--listen", ":80"]