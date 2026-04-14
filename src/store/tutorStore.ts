import { create } from "zustand";
import { api } from "../api/api";

interface Tutor {
  id: string;
  user: {
    first_name: string;
    last_name: string;
    avatar_url: string;
  };
  education: string;
  average_rating: number;
  experience_years: number;
  format: string;
  price_per_hour: number;
  total_reviews: number;
}

interface TutorState {
  tutors: Tutor[];
  isLoading: boolean;
  fetchTutors: () => Promise<void>;
}

export const useTutorStore = create<TutorState>((set) => ({
  tutors: [],
  isLoading: false,

  fetchTutors: async () => {
    set({ isLoading: true });

    try {
      const res = await api.get("/tutors");
      set({ tutors: res.data, isLoading: false });
    } catch (error) {
      set({ isLoading: false });
    }
  },
}));