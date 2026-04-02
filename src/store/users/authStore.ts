import { create } from "zustand";
import { authApi } from "../../api/users/authApi";

interface AuthState {
  token: string | null;
  isLoading: boolean;
  error: string | null;

  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  token: localStorage.getItem("token"),
  isLoading: false,
  error: null,

  login: async (email, password) => {
    try {
      set({ isLoading: true, error: null });

      const res = await authApi.login({ email, password });

      localStorage.setItem("token", res.access_token);

      set({
        token: res.access_token,
        isLoading: false,
      });
    } catch (e: any) {
      set({
        error: e.response?.data?.message || "Login error",
        isLoading: false,
      });
    }
  },

  logout: () => {
    localStorage.removeItem("token");
    set({ token: null });
  },
}));
