FROM node

WORKDIR /opt/blog-ui

COPY . .

EXPOSE 4200

ENTRYPOINT [ "ng", "serve" ]