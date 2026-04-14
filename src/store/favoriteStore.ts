import { create } from "zustand";

interface FavoriteState {
  favorites: any[];
  addFavorite: (tutor: any) => void;
  removeFavorite: (id: number) => void;
  clearFavorites: () => void;
}

export const useFavoriteStore = create<FavoriteState>((set, get) => ({
  favorites: [],

  addFavorite: (tutor) => {
    const exists = get().favorites.find((t) => t.id === tutor.id);
    if (exists) return;

    set({ favorites: [...get().favorites, tutor] });
  },

  removeFavorite: (id) => {
    set({
      favorites: get().favorites.filter((t) => t.id !== id),
    });
  },

  clearFavorites: () => set({ favorites: [] }),
}));