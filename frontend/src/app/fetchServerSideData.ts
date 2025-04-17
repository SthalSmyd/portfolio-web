export const fetchUserInfo = async () => {
    const res = await fetch(`${process.env.INTERNAL_API_URL}/user_info/`, {
      cache: "no-store",
    });
    return await res.json();
  };
  