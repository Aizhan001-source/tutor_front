import { create } from "zustand";
import { roleApi } from "../api/roleApi";
import type { Role } from "../types/role";

interface RoleState {
  loading: boolean;
  error: string | null;
  roles: Role[];

  getAll: () => Promise<void>;
}

export const useRoleStore = create<RoleState>((set) => ({
  loading: false,
  error: null,
  roles: [],

  getAll: async () => {
    set({ loading: true, error: null });

    try {
      const data = await roleApi.getAll();
      set({ roles: data });
    } catch (e: any) {
      set({ error: e?.response?.data?.detail });
    } finally {
      set({ loading: false });
    }
  },
}));