// src/store/userStore.ts
import { create } from "zustand";
import { userApi } from "../api/userApi";
import type { User } from "../types/user";
import type { UserProfile } from "../types/userProfile";

interface UserState {
  user: User | null;
  isLoading: boolean;
  error: string | null;

  getProfile: () => Promise<void>;
  updateProfile: (data: UserProfile) => Promise<void>;
  clearUser: () => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  isLoading: false,
  error: null,

  getProfile: async () => {
    set({ isLoading: true, error: null });

    try {
      const res = await userApi.getProfile();
      set({ user: res });
    } catch (e: any) {
      set({ error: e?.response?.data?.detail });
    } finally {
      set({ isLoading: false });
    }
  },

  updateProfile: async (data) => {
    set({ isLoading: true, error: null });

    try {
      const res = await userApi.updateProfile(data);
      set({ user: res });
    } catch (e: any) {
      set({ error: e?.response?.data?.detail });
    } finally {
      set({ isLoading: false });
    }
  },

  clearUser: () => {
    set({ user: null, error: null });
  },
}));