import { create } from "zustand";
import { tutorApi } from "../../api/tutors/tutorApi";
import { reviewApi } from "../../api/reviews/reviewApi";
import { courseApi } from "../../api/courses/courseApi";

import type {
  TutorByIdResponse,
  ReviewByIdResponse,
  CourseByIdResponse,
} from "../../types/tutor";

interface TutorState {
  tutors: TutorByIdResponse[];
  tutor: TutorByIdResponse | null;

  reviews: ReviewByIdResponse[];
  courses: CourseByIdResponse[];

  isLoading: boolean;
  error: string | null;

  fetchTutors: () => Promise<void>;
  fetchTutorById: (id: string) => Promise<void>;
  fetchReviews: () => Promise<void>;
  fetchCourses: () => Promise<void>;
}

export const useTutorStore = create<TutorState>((set) => ({
  tutors: [],
  tutor: null,
  reviews: [],
  courses: [],

  isLoading: false,
  error: null,

  fetchTutors: async () => {
    try {
      set({ isLoading: true, error: null });

      const tutors = await tutorApi.getAll();

      set({ tutors, isLoading: false });
    } catch (e: any) {
      set({
        error: e?.message || "Error fetching tutors",
        isLoading: false,
      });
    }
  },

  fetchTutorById: async (id: string) => {
    try {
      set({ isLoading: true, error: null });

      const tutor = await tutorApi.getById(id);

      set({ tutor, isLoading: false });
    } catch (e: any) {
      set({
        error: e?.message || "Error fetching tutor",
        isLoading: false,
      });
    }
  },

  fetchReviews: async () => {
    try {
      const reviews = await reviewApi.getAll();
      set({ reviews });
    } catch (e: any) {
      set({ error: e?.message || "Error fetching reviews" });
    }
  },

  fetchCourses: async () => {
    try {
      const courses = await courseApi.getAll();
      set({ courses });
    } catch (e: any) {
      set({ error: e?.message || "Error fetching courses" });
    }
  },
}));