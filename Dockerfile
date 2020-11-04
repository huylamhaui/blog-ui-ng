FROM nginx

WORKDIR /opt/blog-ui

COPY . .
COPY ./nginx.conf /etc/nginx/conf.d/blog.conf

RUN ls

RUN node_modules/.bin/ng build --prod

COPY ./dist/blog-fe ./public

EXPOSE 80

