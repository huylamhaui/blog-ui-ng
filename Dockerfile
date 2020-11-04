FROM nginx

WORKDIR /opt/blog-ui

COPY ./nginx.conf /etc/nginx/conf.d/blog.conf
COPY ./dist/blog-fe .

RUN ls

EXPOSE 80

