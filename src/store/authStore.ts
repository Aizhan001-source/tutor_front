import { create } from "zustand";
import { authApi } from "../api/authApi";

interface AuthState {
  token: string | null;
  isLoading: boolean;
  error: string | null;

  login: (email: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem("token"),
  isLoading: false,
  error: null,

  login: async (email, password) => {
    try {
      set({ isLoading: true, error: null });

      const res = await authApi.loginApi({ email, password });

      localStorage.setItem("token", res.access_token);

      set({
        token: res.access_token,
        isLoading: false,
      });

      return true;
    } catch (e: any) {
      set({
        error: e.response?.data?.detail || "Login error",
        isLoading: false,
      });

      return false;
    }
  },

  logout: () => {
    localStorage.removeItem("token");
    set({ token: null });
  },
}));