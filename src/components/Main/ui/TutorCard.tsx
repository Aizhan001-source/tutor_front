import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";
import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";
import type { Education } from "../../../types/education";

interface TutorCardProps {
  id: string;
  bio: string;
  experience_years: number;
  education: Education;
  price_per_hour: number;
  currency: string;
  average_rating: number;
  total_reviews: number;
  first_name: string;
  last_name: string;

  // ⭐ FAVORITE
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
}

export const TutorCard = ({
  id,
  experience_years,
  price_per_hour,
  average_rating,
  total_reviews,
  first_name,
  last_name,
  isFavorite = false,
  onToggleFavorite,
}: TutorCardProps) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden">

      {/* IMAGE + HEART */}
      <div className="h-48 relative bg-gray-200">

        <button
          onClick={onToggleFavorite}
          className="absolute top-3 right-3 bg-white/80 p-2 rounded-full shadow"
        >
          {isFavorite ? (
            <HeartSolid className="w-5 h-5 text-red-500" />
          ) : (
            <HeartOutline className="w-5 h-5 text-gray-600" />
          )}
        </button>

      </div>

      {/* CONTENT */}
      <div className="p-5">

        <Link to={`/tutors/${id}`} className="font-semibold text-lg">
          {first_name} {last_name}
        </Link>

        <p className="text-sm text-gray-500 mt-1">
          {experience_years} years experience
        </p>

        <div className="mt-2 text-yellow-500">
          ⭐ {average_rating}
        </div>

        <div className="flex justify-between mt-4 border-t pt-3">

          <div>
            ₸ {price_per_hour}/h
          </div>

          <button
            onClick={() => navigate("/book-session")}
            className="bg-indigo-600 text-white px-3 py-1 rounded"
          >
            Book
          </button>

        </div>

        <div className="text-xs text-gray-500 mt-2">
          {total_reviews} reviews
        </div>

      </div>
    </div>
  );
};