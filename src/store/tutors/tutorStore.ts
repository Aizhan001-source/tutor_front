import { create } from "zustand";
import { tutorApi, type Tutor } from "../../api/tutors/tutorApi";

interface TutorState {
  tutors: Tutor[];
  isLoading: boolean;
  error: string | null;

  fetchTutors: () => Promise<void>;
}

export const useTutorStore = create<TutorState>((set) => ({
  tutors: [],
  isLoading: false,
  error: null,

  fetchTutors: async () => {
    try {
      set({ isLoading: true, error: null });

      const data = await tutorApi.getAll();

      set({
        tutors: data,
        isLoading: false,
      });
    } catch (e: any) {
      set({
        error: e.message || "Error fetching tutors",
        isLoading: false,
      });
    }
  },
}));
