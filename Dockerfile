FROM nginx:1.21.6
WORKDIR /app/dist
COPY dist .
COPY nginx.conf /etc/nginx/nginx.conf
