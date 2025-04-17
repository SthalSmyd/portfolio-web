"use client";
import { useEffect, useState } from "react";

type Props = {
  user: {
    username: string;
    email: string;
  };
};

type HealthResponse = {
  status: string;
};

export default function Home({ user }: Props) {
  const [health, setHealth] = useState<HealthResponse | null>(null);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/health/`)
      .then((res) => res.json())
      .then((data) => setHealth(data))
      .catch(() => setHealth({ status: "❌ 接続失敗" }));
  }, []);

  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-gray-100 to-blue-100 flex flex-col items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-6">
          ポートフォリオデモ ✨
        </h1>
        <p className="text-lg text-gray-700 mb-4">
          <span className="text-blue-500">Next.js</span> +{" "}
          <span className="text-pink-500">Django</span> +{" "}
          <span className="text-purple-500">TypeScript</span> で構築されたフルスタックアプリです。
        </p>

        <div className="grid gap-6 md:grid-cols-2 mt-8 text-left">
          <div className="bg-white border shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">SSR：サーバーで取得したユーザー情報</h2>
            <p><strong>ユーザー名：</strong> {user.username}</p>
            <p><strong>Email：</strong> {user.email}</p>
          </div>

          <div className="bg-white border shadow-md rounded-lg p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">CSR：クライアントで取得したヘルス情報</h2>
            <p>
              <strong>APIステータス：</strong>{" "}
              {health ? health.status : "取得中..."}
            </p>
          </div>
        </div>

        <footer className="mt-12 text-sm text-gray-400">
          © 2025 Masashi - Portfolio Demo
        </footer>
      </div>
    </main>
  );
}
