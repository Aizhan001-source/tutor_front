import { api } from "./api";
import type { Favorite } from "../types/favorite";

export const favoriteApi = {
  // получить избранное
  getFavorites: async (): Promise<Favorite[]> => {
    const res = await api.get("/favorites");
    return res.data;
  },

  // добавить в избранное
  addFavorite: async (tutorId: number): Promise<Favorite> => {
    const res = await api.post("/favorites", {
      tutor_id: tutorId,
    });
    return res.data;
  },

  // удалить из избранного
  removeFavorite: async (id: number): Promise<void> => {
    await api.delete(`/favorites/${id}`);
  },
};