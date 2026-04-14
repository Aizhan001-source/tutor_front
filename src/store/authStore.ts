import { create } from "zustand";
import { authApi } from "../api/authApi";

interface User {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
}

interface AuthState {
  user: User | null;
  token: string | null;

  isLoading: boolean;
  error: string | null;

  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: JSON.parse(localStorage.getItem("user") || "null"),
  token: localStorage.getItem("token"),

  isLoading: false,
  error: null,

  login: async (email, password) => {
    try {
      set({ isLoading: true, error: null });

      const { access_token, user } = await authApi.login({
        email,
        password,
      });

      localStorage.setItem("token", access_token);
      localStorage.setItem("user", JSON.stringify(user));

      set({
        token: access_token,
        user,
        isLoading: false,
      });
    } catch (error: any) {
      set({
        error: error.response?.data?.detail || "Ошибка входа",
        isLoading: false,
      });

      throw error;
    }
  },

  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    set({
      token: null,
      user: null,
      error: null,
      isLoading: false,
    });
  },
}));