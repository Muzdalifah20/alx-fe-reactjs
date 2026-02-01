import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
  timeout: 10000,
});

// export const fetchUserData = async (username) => {
//   try {
//     const response = await api.get(`/users/${username}`);
//     return response.data;
//   } catch {
//     throw new Error("User not found");
//   }
// };

export const searchUsers = async ({
  query = "",
  location = "",
  minRepos = "",
}) => {
  let searchQuery = query.trim();

  if (location) searchQuery += ` location:${location}`;
  if (minRepos) searchQuery += ` repos:>=${minRepos}`;

  const response = await api.get(
    `/search/users?q=${encodeURIComponent(searchQuery)}&per_page=12`,
  );
  return response.data.items;
};
