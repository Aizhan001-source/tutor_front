import { create } from "zustand";
import { educationApi } from "../../api/educations/educationApi";
import type { Education } from "../../types/education";

interface EducationState {
  educations: Education[];
  loading: boolean;
  error: string | null;

  fetchEducations: () => Promise<void>;
}

export const useEducationStore = create<EducationState>((set) => ({
  educations: [],
  loading: false,
  error: null,

  fetchEducations: async () => {
    try {
      set({ loading: true, error: null });

      const data = await educationApi.getAll();

      set({ educations: data, loading: false });
    } catch (err) {
      set({
        error: err instanceof Error ? err.message : "Failed to load",
        loading: false,
      });
    }
  },
}));