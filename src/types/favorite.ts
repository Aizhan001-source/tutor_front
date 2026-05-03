import type { Education } from "./education";

export interface Favorite {
  id: string;

  course_id?: string;

  tutor: {
    id: string;

    user: {
      first_name: string;
      last_name: string;
      avatar_url: string;
    };

    education?: Education;

    average_rating?: number;
    experience_years?: number;
    price_per_hour?: number;
  };
}