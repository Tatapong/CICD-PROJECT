FROM ubuntu:latest
RUN apt-get update && apt-get install -y python3 python3-pip
COPY index.html /var/www/
COPY script.js /var/www/
COPY styles.css /var/www/
WORKDIR /var/www/
EXPOSE 80
CMD ["python3", "-m", "http.server", "80"]