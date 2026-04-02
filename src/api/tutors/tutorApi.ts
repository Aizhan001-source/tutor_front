import { api } from "../api";

export interface Tutor {
  id: string;
  bio: string;
  experience_years: number;
  education: string;
  price_per_hour: number;
  currency: string;
  format: string;
  city: string;
  average_rating: number;
  total_reviews: number;

  user: {
    first_name: string;
    last_name: string;
    email: string;
    avatar_url: string;
  };
}

export const tutorApi = {
  getAll: async (): Promise<Tutor[]> => {
    const res = await api.get("/tutors/all");
    return res.data;
  },
};
