FROM node AS builder

WORKDIR /usr/app
COPY . .

RUN npm install
RUN node_modules/.bin/ng build --prod


FROM nginx

WORKDIR /opt/blog-ui

COPY --from=builder /usr/app/nginx.conf /etc/nginx/conf.d/blog.conf

COPY --from=builder /usr/app/dist/blog-fe ./public

EXPOSE 80

