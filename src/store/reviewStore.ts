import { create } from "zustand";
import { reviewApi } from "../api/reviewApi";
import type { Review, ReviewCreate } from "../types/review";

interface ReviewState {
  loading: boolean;
  error: string | null;
  reviews: Review[];

  getByTutor: (tutorId: string) => Promise<void>;
  createReview: (data: ReviewCreate) => Promise<void>;
  deleteReview: (id: string) => Promise<void>;
}

export const useReviewStore = create<ReviewState>((set, get) => ({
  loading: false,
  error: null,
  reviews: [],

  getByTutor: async (tutorId) => {
    set({ loading: true, error: null });

    try {
      const data = await reviewApi.getByTutor(tutorId);
      set({ reviews: data });
    } catch (e: any) {
      set({ error: e?.response?.data?.detail || "Error loading reviews" });
    } finally {
      set({ loading: false });
    }
  },

  createReview: async (data) => {
    set({ loading: true, error: null });

    try {
      const newReview = await reviewApi.create(data);
      set({ reviews: [...get().reviews, newReview] });
    } catch (e: any) {
      set({ error: e?.response?.data?.detail || "Error creating review" });
    } finally {
      set({ loading: false });
    }
  },

  deleteReview: async (id) => {
    set({ loading: true, error: null });

    try {
      await reviewApi.remove(id);

      set({
        reviews: get().reviews.filter(r => r.id !== id),
      });
    } catch (e: any) {
      set({ error: e?.response?.data?.detail || "Error deleting review" });
    } finally {
      set({ loading: false });
    }
  },
}));