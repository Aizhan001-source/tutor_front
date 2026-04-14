import { create } from "zustand";
import { subjectApi } from "../api/subjectApi";
import type { Subject } from "../types/subject";

interface SubjectState {
  loading: boolean;
  error: string | null;
  subjects: Subject[];

  getAll: () => Promise<void>;
  create: (name: string) => Promise<void>;
}

export const useSubjectStore = create<SubjectState>((set, get) => ({
  loading: false,
  error: null,
  subjects: [],

  getAll: async () => {
    set({ loading: true, error: null });

    try {
      const res = await subjectApi.getAll();
      set({ subjects: res });
    } catch (e: any) {
      set({ error: e?.response?.data?.detail });
    } finally {
      set({ loading: false });
    }
  },

  create: async (name) => {
    set({ loading: true, error: null });

    try {
      const res = await subjectApi.create(name);
      set({ subjects: [...get().subjects, res] });
    } catch (e: any) {
      set({ error: e?.response?.data?.detail });
    } finally {
      set({ loading: false });
    }
  },
}));