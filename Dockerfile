FROM nginx:alpine

ADD ./hybrid-app /usr/share/nginx/html
RUN rm -rf /usr/share/nginx/html/.git
CMD ["nginx"]
