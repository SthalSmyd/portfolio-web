
#  Next.js × Django × TypeScript - フルスタックポートフォリオデモ

このリポジトリは、**Next.js (TypeScript)** をフロントエンドに、**Django REST Framework (DRF)** をバックエンドに採用した、**モダンな分離型構成のフルスタックアプリケーションのテンプレート**です。

フロントエンドとバックエンドは**別プロセス・別Dockerサービスとして独立**して動作し、**API通信を介して非同期連携**する構成となっています。  
これにより、開発・保守性に優れたモジュール構成が実現できます。

---

## 特徴

- ✅ SSR（サーバーサイドレンダリング）と CSR（クライアントサイドレンダリング）の組み合わせ
- ✅ TypeScript による型安全なフロント実装
- ✅ APIとの非同期通信（Django DRF）
- ✅ Docker による簡単なローカル環境構築
- ✅ 1台の開発サーバー上で **frontend / backend / db** をコンテナ単位で完全分離運用

---

##  開発用セットアップ手順

### 1. `.env.local` を作成（ルートディレクトリ）
例：
```env
# Django
DJANGO_SECRET_KEY=your_secret_key
DJANGO_DEBUG=True
DJANGO_ALLOWED_HOSTS=localhost,127.0.0.1,backend

# DB
POSTGRES_DB=mydb
POSTGRES_USER=user
POSTGRES_PASSWORD=pass

# Next.js API URL
NEXT_PUBLIC_API_URL=http://localhost:8000/api      # CSR用（ブラウザから直接叩く）
INTERNAL_API_URL=http://backend:8000/api           # SSR用（Next.jsサーバーから叩く）
```
> ⚠️ `DJANGO_SECRET_KEY` に関しては、サンプル用の値を仮で記載しています。  
> ご自身のプロジェクトで使用する際は、必ず `.env.local` にて適切なキーを設定してください。

#### 環境変数について

本プロジェクトには `.env.local` および `.env.dev` が含まれていますが、  
記載されている値はすべて **開発用のダミー値またはサンプルドメイン** です。

セキュリティ上のリスクはありませんが、本番運用時には `.env.prod` 等で適切な値を設定してください。

---

### 2.Docker Compose で起動（ローカル環境）

```bash
docker compose -f docker-compose.local.yml build
```
```bash
docker compose -f docker-compose.local.yml up -d
```

- `frontend` は Next.js（3000番ポート）
- `backend` は Django + DRF（8000番ポート）
- `db` は PostgreSQL（5432番ポート）
- `nginx`（必要に応じて）でリバースプロキシも可能
起動したのち、30秒程度時間をおいてからアクセスください。

> ✅ 起動完了後、少し待ってから`localhost:3000`(http://localhost:3000)  にアクセスしてください。

---

### 3.停止時
```bash
docker compose -f docker-compose.local.yml down
```

---

## 🔒 技術構成

| Layer | Tech |
|-------|------|
| Frontend | Next.js + React + TypeScript |
| Backend | Django + Django REST Framework |
| インフラ構成 | Docker + Docker Compose |
| DB | PostgreSQL |
| Web Server | Nginx + SSL (optional) |

ローカル環境では DB も Docker 内で起動していますが、
本番環境では RDS や Cloud SQL などのマネージドDBサービスに分離することで、
よりセキュアでスケーラブルな運用が可能です。

---

## 📁 フォルダ構成例

```
.
├── frontend/        # Next.js フロントエンド
├── backend/         # Django バックエンド
├── nginx/           # Nginx 設定 & SSL
├── .env.local       # ローカル用 環境変数
├── docker-compose.local.yml
└── README.md
```

---

##  備考・セキュリティについて
> 本プロジェクトには、Nginx のリバースプロキシ設定やSSL構成ファイルも含まれています。  
> domain-example.com などのドメイン名はすべてサンプルであり、実際の運用ドメインや証明書は含まれていません。




