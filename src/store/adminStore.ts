import { create } from "zustand";
import { adminApi } from "../api/adminApi";
import type { User } from "../types/user";

interface AdminState {
  loading: boolean;
  error: string | null;
  users: User[];

  fetchUsers: () => Promise<void>;
}

export const useAdminStore = create<AdminState>((set) => ({
  loading: false,
  error: null,
  users: [],

  fetchUsers: async () => {
    set({ loading: true, error: null });

    try {
      const data = await adminApi.getAllUsers();
      set({ users: data });
    } catch (e: any) {
      set({ error: e?.response?.data?.detail });
    } finally {
      set({ loading: false });
    }
  },
}));