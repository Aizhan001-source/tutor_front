// src/api/tutors/tutorApi.ts
import { apiClient } from "./axios";

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
}

export const tutorApi = {
  getAll: (): Promise<Tutor[]> =>
    apiClient.get("/tutors/all").then(r => r.data),
};