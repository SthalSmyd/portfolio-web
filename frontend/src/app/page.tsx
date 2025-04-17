import Home from "./Home"; // クライアントコンポーネント
import { fetchUserInfo } from "./fetchServerSideData"; // SSRデータ取得関数

export default async function Page() {
  const user = await fetchUserInfo();

  return <Home user={user} />;
}
