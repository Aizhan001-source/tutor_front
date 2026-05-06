import { create } from "zustand";
import { favoriteApi } from "../../api/favorites/favoriteApi";
import type { Favorite } from "../../types/favorite";
import toast from "react-hot-toast";

interface FavoriteState {
  favorites: Favorite[];
  loading: boolean;

  fetchFavorites: () => Promise<void>;
  addFavorite: (tutorId: string) => Promise<void>;
  removeFavorite: (tutorId: string) => Promise<void>;

  isFavorite: (tutorId: string) => boolean;
}

export const useFavoriteStore = create<FavoriteState>((set, get) => ({
  favorites: [],
  loading: false,

  /* ===== FETCH ===== */
  fetchFavorites: async () => {
    set({ loading: true });
    try {
      const res = await favoriteApi.getFavorites();

      // ✅ НОРМАЛИЗАЦИЯ (ключевой фикс)
      const normalized = res.map((fav: any) => ({
        ...fav,
        tutor: fav.user, // 👈 связываем
      }));

      set({ favorites: normalized });
    } finally {
      set({ loading: false });
    }
  },

  /* ===== ADD ===== */
  addFavorite: async (tutorId: string) => {
    try {
      const res = await favoriteApi.addFavorite(tutorId);
      toast.success(res.message);

      await get().fetchFavorites();
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Error");
    }
  },

  /* ===== REMOVE ===== */
  removeFavorite: async (tutorId: string) => {
    try {
      await favoriteApi.removeFavorite(tutorId);

      toast.success("🗑 Removed from favorites");

      set((state) => ({
        favorites: state.favorites.filter(
          (f) => f.tutor?.id !== tutorId // ✅ теперь работает
        ),
      }));
    } catch (e) {
      toast.error("Failed to remove");
      console.error(e);
    }
  },

  /* ===== CHECK ===== */
  isFavorite: (tutorId: string) => {
    return get().favorites.some(
      (f) => f.tutor?.id === tutorId // ✅ теперь корректно
    );
  },
}));