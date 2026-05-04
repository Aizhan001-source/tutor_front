import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid";
import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";

import type { TutorCardModel } from "../../../types/tutor";

interface TutorCardProps extends TutorCardModel {
  isFavorite?: boolean;
  onToggleFavorite?: () => void;
}

export const TutorCard = ({
  id,
  experience_years,
  education,
  price_per_hour,
  currency,
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

      <div className="h-48 relative overflow-hidden">
        <img
          src="/default-avatar.png"
          alt={`${first_name} ${last_name}`}
          className="w-full h-full object-cover"
        />

        <button
          onClick={onToggleFavorite}
          className="absolute top-3 right-3 bg-white/80 backdrop-blur p-2 rounded-full shadow hover:scale-110 transition"
        >
          {isFavorite ? (
            <HeartSolid className="w-5 h-5 text-red-500" />
          ) : (
            <HeartOutline className="w-5 h-5 text-gray-600" />
          )}
        </button>
      </div>

      <div className="p-5 space-y-3">

        <div className="flex justify-between items-center">
          <div>
            <Link
              to={`/tutors/${id}`}
              className="text-lg font-semibold text-gray-900"
            >
              {first_name} {last_name}
            </Link>

            <p className="text-sm text-gray-500">
              {education?.name ?? "No education info"}
            </p>
          </div>

          <div className="text-sm font-medium text-yellow-500">
            ⭐ {average_rating?.toFixed(1) ?? "0.0"}
          </div>
        </div>

        <div className="text-sm text-gray-600 space-y-1">
          <p>{experience_years} years experience</p>
          <p className="text-green-600 font-medium">
            {total_reviews} reviews
          </p>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-200">
          <div className="flex items-center gap-1">
            <span className="font-semibold text-gray-900">
              {Math.round(price_per_hour)}
            </span>
            <span className="text-gray-600 text-sm">
              {currency}/hour
            </span>
          </div>

          <button
            onClick={() => navigate(`/book-session/${id}`)}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition"
          >
            Book Session
          </button>
        </div>

      </div>
    </div>
  );
};