FROM python:3.7-buster

ARG username="testusername"

ARG password="testpassword"

COPY ./backend /MLPDA/src/backend

COPY ./Frontend/build /MLPDA/src/Frontend/build

COPY ./MachineLearning /MLPDA/src/MachineLearning

COPY ./requirements.txt /MLPDA/src

RUN pip install -r /MLPDA/src/requirements.txt

RUN apt-get update && apt-get install -y nginx

COPY ./nginx.conf /etc/nginx/sites-available/default

RUN ln -sf /dev/stdout /var/log/nginx/access.log \
    && ln -sf /dev/stderr /var/log/nginx/error.log

RUN chown -R www-data:www-data /MLPDA

WORKDIR /MLPDA/src/backend/mlpda_backend/

RUN chmod +x launch_server.sh

RUN python3 manage.py makemigrations

RUN python3 manage.py migrate

RUN python3 manage.py sampleuser -u ${username} -p ${password}

EXPOSE 8000
STOPSIGNAL SIGTERM

CMD ["./launch_server.sh"]