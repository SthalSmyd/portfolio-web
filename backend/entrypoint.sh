#!/bin/sh

echo "🔧 ENV=${ENV}"

if [ "$ENV" = "local" ]; then
  ./wait-for-it.sh db:5432 -- python manage.py runserver 0.0.0.0:8000
else
  ./wait-for-it.sh db:5432 -- \
    python manage.py migrate && \
    python manage.py collectstatic --noinput && \
    exec gunicorn backend.wsgi:application \
      --bind 0.0.0.0:8000 \
      --workers 3 \
      --threads 2 \
      --timeout 60
fi
