import { api } from "./api";

export const favoriteApi = {
  getFavorites: async () => {
    const res = await api.get("/favorites"); // ❗ без /api
    return res.data;
  },

  addFavorite: async (tutorId: string) => {
    const res = await api.post(`/favorites/${tutorId}`); // ❗ без /api
    return res.data;
  },

  removeFavorite: async (tutorId: string) => {
    const res = await api.delete(`/favorites/${tutorId}`);
    return res.data;
  },
};