import axios from "axios";

export const api = axios.create({
  baseURL: "http://localhost:8000",
});

// Отправляем токен в каждом запросе
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Если 401 — чистим всё и редиректим на логин
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("user_id");
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);