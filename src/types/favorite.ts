export interface Favorite {
  id: number;

  tutor: {
    id: number;

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
  };
}