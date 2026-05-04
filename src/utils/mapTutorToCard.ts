import type { TutorByIdResponse, TutorCardModel } from "../types/tutor";

export const mapTutorToCard = (
  tutor: TutorByIdResponse,
  rating: { average_rating: number; total_reviews: number }
): TutorCardModel => {
  return {
    id: tutor.id,
    bio: tutor.bio,
    experience_years: tutor.experience_years,

    education: {
      id: tutor.education.id,
      name: tutor.education?.name ?? "Unknown",
    },

    price_per_hour: Number(tutor.price_per_hour),
    currency: tutor.currency,

    first_name: tutor.user.first_name,
    last_name: tutor.user.last_name,

    average_rating: rating.average_rating,
    total_reviews: rating.total_reviews,
  };
};