import { api } from "../api";

export const favoriteApi = {
  getFavorites: async () => {
    const res = await api.get("/favorites/");
    return res.data;
  },

  addFavorite: async (tutorId: string) => {
    const res = await api.post(`/favorites/${tutorId}`);
    return res.data;
  },

  removeFavorite: async (tutorId: string) => {
    const res = await api.delete(`/favorites/${tutorId}`);
    return res.data;
  },
};