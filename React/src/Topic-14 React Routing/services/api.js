export const getUserProfile = async () => {
  const response = await fetch(
    "https://api.github.com/users/AshwaniMaurya2002",
  );

  if (!response.ok) throw new Error("404 Something went wrong");

  const userdata = await response.json();
  return userdata;
};
