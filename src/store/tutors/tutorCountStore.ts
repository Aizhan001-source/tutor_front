import { create } from "zustand";
import { tutorApi } from "../../api/tutors/tutorApi";

interface TutorCountState {
  count: number;
  isLoading: boolean;

  fetchTutorsCount: () => Promise<void>;
}

export const useTutorCountStore = create<TutorCountState>((set) => ({
  count: 0,
  isLoading: false,

  fetchTutorsCount: async () => {
    set({ isLoading: true });

    try {
      const data = await tutorApi.getCount();

      set({
        count: data,
        isLoading: false,
      });
    } catch {
      set({
        count: 0,
        isLoading: false,
      });
    }
  },
}));