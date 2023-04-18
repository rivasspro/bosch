FROM php:7.4-apache

# COPY /src /var/www/html
COPY . /var/www/html

WORKDIR /var/www/html

EXPOSE 80





