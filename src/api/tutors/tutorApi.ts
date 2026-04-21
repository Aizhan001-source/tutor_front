import type { Education } from "../../types/education";
import type { User } from "../../types/user";
import { api } from "../api";

export interface Tutor {
  id: string;
  bio: string;
  experience_years: number;
  education: Education;
  price_per_hour: number;
  currency: string;
  format: string;
  city: string;
  average_rating: number;
  total_reviews: number;
  user: User
}

export const tutorApi = {
  getAll: async (): Promise<Tutor[]> => {
    const res = await api.get("/tutors/all");

    return res.data;
  },

  getById: async (tutorId: string): Promise<Tutor> => {
    const res = await api.get(`/tutors/by_id/${tutorId}`)

    return res.data;
  }
};
