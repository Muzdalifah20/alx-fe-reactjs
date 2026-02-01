import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com",
  timeout: 5000,
});

export const fetchUserData = async (username) => {
  try {
    const response = await api.get(`/users/${username}`);
    return response.data;
  } catch {
    throw new Error("User not found");
  }
};
