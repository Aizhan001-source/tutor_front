import type { User } from "../../types/user";
import { create } from "zustand";
import { authApi } from "../../api/auth/authApi";

interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;

  login: (email: string, password: string) => Promise<boolean>; 
  fetchMe: () => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  token: localStorage.getItem("token"),
  isLoading: false,
  error: null,

  login: async (email, password) => {
    try {
      set({ isLoading: true, error: null });

      const data = await authApi.login({ email, password });

      localStorage.setItem("token", data.access_token);

      set({
        token: data.access_token,
        isLoading: false,
      });

      await get().fetchMe();

      return true; 
    } catch (err: any) {
      set({
        error: err?.response?.data?.detail || "Login failed",
        isLoading: false,
      });

      return false; 
    }
  },

  fetchMe: async () => {
    try {
      const user = await authApi.me();
      set({ user });
    } catch {
      set({ user: null, token: null });
      localStorage.removeItem("token");
    }
  },

  logout: () => {
    localStorage.removeItem("token");
    set({ user: null, token: null });
  },
}));