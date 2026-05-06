import type { TutorByIdResponse, TutorCardModel } from "../types/tutor";

interface Rating {
  average_rating: number;
  total_reviews: number;
}

export const mapTutorToCard = (
  tutor: TutorByIdResponse,
  rating: Rating
): TutorCardModel => {
  return {
    id: tutor.id,
    bio: tutor.bio,
    experience_years: tutor.experience_years,
    education: tutor.education,

    price_per_hour: Number(tutor.price_per_hour ?? 0),
    currency: tutor.currency,

    first_name: tutor.user?.first_name ?? "",
    last_name: tutor.user?.last_name ?? "",

    average_rating: Number(
      tutor.average_rating ?? rating.average_rating ?? 0
    ),

    total_reviews: rating.total_reviews ?? 0,
  };
};