FROM python:3.11-slim

ARG ENV=local
ENV ENV=${ENV}

WORKDIR /app

COPY requirements.txt .
RUN pip install --upgrade pip && pip install -r requirements.txt

COPY . .

RUN mkdir -p /app/static
RUN chmod +x wait-for-it.sh
RUN chmod +x entrypoint.sh

ENTRYPOINT ["./entrypoint.sh"]
