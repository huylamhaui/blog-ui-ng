FROM nginx

WORKDIR /opt/blog-ui

COPY . .
COPY ./nginx.conf /etc/nginx/conf.d/blog.conf

RUN curl -sL https://rpm.nodesource.com/setup_10.x | sudo bash -
RUN apt install nodejs
RUN npm install

RUN node_modules/.bin/ng build --prod

COPY ./dist/blog-fe ./public

EXPOSE 80

