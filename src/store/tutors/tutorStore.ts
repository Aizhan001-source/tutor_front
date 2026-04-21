import { create } from "zustand";
import { tutorApi, type Tutor } from "../../api/tutors/tutorApi";

interface TutorState {
  tutors: Tutor[];
  tutor: Tutor | null;
  isLoading: boolean;
  error: string | null;

  fetchTutors: () => Promise<void>;
  fetchTutorById: (id: string) => Promise<void>;
}

export const useTutorStore = create<TutorState>((set) => ({
  tutors: [],
  tutor: null,
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

  fetchTutorById: async (tutorId: string) => {
    try {
      set({isLoading: true});

    const data = await tutorApi.getById(tutorId);

    set({
      tutor: data,
      isLoading: false
    })
    } catch (e: any) {
      set({
        error: e.message || "Error fetching tutor",
        isLoading: false,
      });
    }
  }
}));
