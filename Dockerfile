FROM nginx:alpine

RUN chmod +x /usr/share/nginx/html
RUN chmod +x /etc/nginx/conf.d
ADD ./hybrid-app /usr/share/nginx/html
RUN rm -rf /usr/share/nginx/html/.git
CMD ["nginx", "-g", "daemon off;"]
