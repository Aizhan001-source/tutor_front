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

// Загружаем user из localStorage при старте
const storedUser = localStorage.getItem("user");
const parsedUser: User | null = storedUser ? JSON.parse(storedUser) : null;

export const useAuthStore = create<AuthState>((set) => ({
  user: parsedUser,
  token: localStorage.getItem("token"),
  isLoading: false,
  error: null,

  login: async (email, password) => {
    try {
      set({ isLoading: true, error: null });

      const data = await authApi.login({ email, password });

      localStorage.setItem("token", data.access_token);
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("user_id", data.user.id);

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
    localStorage.removeItem("user");
    localStorage.removeItem("user_id");
    set({ user: null, token: null });
  },
}));