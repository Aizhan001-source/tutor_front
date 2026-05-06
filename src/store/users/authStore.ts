import { create } from "zustand";
import { authApi } from "../../api/auth/authApi";

export type User = {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  role_id: string;
};

interface AuthState {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  error: string | null;

  login: (email: string, password: string) => Promise<boolean>;
  fetchMe: () => Promise<void>;
  logout: () => void;
  init: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  token: localStorage.getItem("access_token"),
  isLoading: false,
  error: null,

  init: async () => {
    const token = localStorage.getItem("access_token");

    if (!token) return;

    set({ token });

    await get().fetchMe();
  },

  login: async (email, password) => {
    try {
      set({ isLoading: true, error: null });

      const res = await authApi.login({ email, password });

      const token = res.access_token;

      console.log("LOGIN RESPONSE:", res);

      if (!token) {
        throw new Error("access_token not found in response");
      }

      localStorage.setItem("access_token", token);

      set({
        token,
        isLoading: false,
      });

      await get().fetchMe();

      return true;
    } catch (e: any) {
      console.log("LOGIN ERROR:", e?.response?.data || e.message);

      set({
        error: e?.response?.data?.detail || "Login error",
        isLoading: false,
      });

      return false;
    }
  },

  fetchMe: async () => {
    try {
      const res = await authApi.me();

      set({ user: res });
    } catch (e) {
      console.log("FETCH ME ERROR:", e);

      set({ user: null });
    }
  },

  logout: () => {
    localStorage.removeItem("access_token");

    set({
      user: null,
      token: null,
    });
  },
}));