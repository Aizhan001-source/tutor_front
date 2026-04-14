import { apiClientWithAuth } from "./axios";
import type { Review } from "../types/review";

export const reviewApi = {
  getByTutor: async (tutorId: string): Promise<Review[]> =>
    apiClientWithAuth.get(`/reviews/tutor/${tutorId}`).then(r => r.data),

  create: async (data: {
    tutor_id: string;
    rating: number;
    comment: string;
  }): Promise<Review> =>
    apiClientWithAuth.post("/reviews", data).then(r => r.data),

  remove: async (id: string): Promise<void> =>
    apiClientWithAuth.delete(`/reviews/${id}`).then(r => r.data),
};