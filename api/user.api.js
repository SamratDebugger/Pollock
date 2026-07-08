export const createUser = async (username, email) => {
  const userData = {
    username,
    email,
  };
  const res = await fetch(`${import.meta.env.VITE_API_BASE}/users/createUser`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(userData),
  });
  const data = await res.json();
  return data;
};
