import { create } from "zustand";
import { authApi } from "../../api/users/authApi";
import type { User } from "../../types/user";

interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;

  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
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
        user: data.user,
        token: data.access_token,
        isLoading: false,
      });
    } catch (err: any) {
      set({
        error: err?.response?.data?.detail || "Login failed",
        isLoading: false,
      });
    }
  },

  logout: () => {
    localStorage.removeItem("token");
    set({ user: null, token: null });
  },
}));