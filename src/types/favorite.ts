import type { Education } from "./education";
import type { User } from "./user";

export interface Favorite {
  id: string;

  bio: string;
  experience_years: number;
  price_per_hour: number | string;
  currency: string;
  average_rating: number | string;
  total_reviews: number;

  created_at: string;
  updated_at: string;

  user: User;

  // ✅ ДОБАВИТЬ ЭТО
  tutor?: User;

  education: Education;
}