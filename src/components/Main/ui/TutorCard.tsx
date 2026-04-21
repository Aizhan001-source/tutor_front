import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid"
import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline"
import { Link, useNavigate } from "react-router-dom"
import type { Education } from "../../../types/education"
import type { User } from "../../../types/user"
import { useEffect } from "react"

interface TutorCardProps {
  id:string
  bio:string
  experience_years:number
  education:Education
  price_per_hour:number
  currency:string
  average_rating:number
  total_reviews:number
  // user:User
  first_name: string
  last_name: string
  isFavorite?: boolean
  onToggleFavorite?: () => void
}

export const TutorCard = ({ 
  id,
  bio,
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
    const navigate = useNavigate()

    return(
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden">

      {/* Image */}
      <div className="h-48 relative overflow-hidden">
        <img
          src={""}
          alt={""}
          className="w-full h-full object-cover"
        />
        <button
        onClick={onToggleFavorite}
        className="absolute top-3 right-3 bg-white/80 backdrop-blur p-2 rounded-full shadow hover:scale-110 transition">
            {isFavorite ? (
              <HeartSolid className="w-5 h-5 text-red-500" />
            ) : (
              <HeartOutline className="w-5 h-5 text-gray-600" />
            )}
        </button>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">

        {/* Name + Rating */}
        <div className="flex justify-between items-center">
          <div>
            <Link to={`/tutors/${id}`} className="text-lg font-semibold text-gray-900">
              {first_name} {last_name}
            </Link>
            <p className="text-sm text-gray-500">{""}</p>
          </div>

          <div className="text-sm font-medium text-yellow-500">
            ⭐ {average_rating}
          </div>
        </div>


        {/* Info */}
        <div className="text-sm text-gray-600 space-y-1">
          <p>{experience_years}</p>
          <p className="text-green-600 font-medium">{total_reviews}</p>
        </div>

        {/* Price */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <div className="flex items-center gap-1">
                <span>₸</span>
                <span className="font-semibold text-gray-900">
                {currency}
                </span>
                <span className="text-gray-600 text-sm">/hour</span>
            </div>
            <button
            onClick={() => navigate("/book-session")}
            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg font-medium transition"
          >
            Book Session
          </button>
          </div>

        <div className="flex items-center justify-center text-sm text-gray-500">
        {total_reviews} student reviews
        </div>

      </div>
    </div>
    )
}