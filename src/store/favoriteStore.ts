import { create } from "zustand";
import { favoriteApi } from "../api/favoriteApi";
import type { Favorite } from "../types/favorite";

interface FavoriteState {
  favorites: Favorite[];
  loading: boolean;
  error: string | null;

  fetchFavorites: () => Promise<void>;
  addFavorite: (tutorId: string) => Promise<void>;
  removeFavorite: (tutorId: string) => Promise<void>;
}

export const useFavoriteStore = create<FavoriteState>((set) => ({
  favorites: [],
  loading: false,
  error: null,

  fetchFavorites: async () => {
    set({ loading: true });

    try {
      const data = await favoriteApi.getFavorites();
      set({ favorites: data });
    } catch (err: any) {
      set({ error: err?.response?.data?.detail });
    } finally {
      set({ loading: false });
    }
  },

  addFavorite: async (tutorId: string) => {
    set({ loading: true });

    try {
      await favoriteApi.addFavorite(tutorId);

      const updated = await favoriteApi.getFavorites();

      set({ favorites: updated });
    } finally {
      set({ loading: false });
    }
  },

  removeFavorite: async (tutorId: string) => {
    set({ loading: true });

    try {
      await favoriteApi.removeFavorite(tutorId);

      const updated = await favoriteApi.getFavorites();

      set({ favorites: updated });
    } finally {
      set({ loading: false });
    }
  },
}));