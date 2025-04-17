#!/bin/sh

# ホスト名が解決されるまで待つ
echo "⏳ Waiting for backend DNS to be available..."
until getent hosts backend; do
  echo "❌ Host 'backend' not found. Retrying..."
  sleep 1
done

# ポートに接続できるまで待つ
echo "✅ Host 'backend' resolved! Waiting for port 8000..."
until nc -z backend 8000; do
  echo "❌ backend:8000 not ready yet. Retrying..."
  sleep 1
done

echo "🚀 Backend is ready. Starting Nginx!"
nginx -g 'daemon off;'
