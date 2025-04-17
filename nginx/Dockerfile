# ===========================
# 📄 Dockerfile (Nginx with ENV support)
# ===========================

FROM nginx:1.25.2-alpine
RUN apk update && apk add netcat-openbsd

ARG ENV=prod
ENV ENV=${ENV}

# 各設定ファイルの共通部分を配置
ADD ./proxy.conf /etc/nginx/proxy.conf
ADD ./ssl.conf /etc/nginx/ssl.conf

# dev or prod によって default.conf を切り替え
ADD ./default_front.${ENV}.conf /etc/nginx/conf.d/default_front.conf
ADD ./default_api.${ENV}.conf /etc/nginx/conf.d/default_api.conf

RUN mkdir -p /var/letsencrypt /etc/letsencrypt /var/static /var/media

COPY wait-for-backend.sh /wait-for-backend.sh
RUN chmod +x /wait-for-backend.sh

CMD ["/wait-for-backend.sh"]