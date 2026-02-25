import { HeartIcon as HeartSolid } from "@heroicons/react/24/solid"
import { HeartIcon as HeartOutline } from "@heroicons/react/24/outline"
import { useNavigate } from "react-router-dom"

interface TutorCardProps {
    image: string
    name: string
    subject: string
    rating: number
    subjects: string[]
    experience: string
    format: string
    availability: string
    price: number
    reviewsCount: number
    isFavorite?: boolean
  onToggleFavorite?: () => void
}

export const TutorCard = ({ 
    image,
    name,
    subject,
    rating,
    subjects,
    experience,
    format,
    availability,
    price,
    reviewsCount,
    isFavorite = false,
  onToggleFavorite,
}: TutorCardProps) => {

    const navigate = useNavigate()

    return(
        <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow overflow-hidden">

      {/* Image */}
      <div className="h-48 relative overflow-hidden">
        <img
          src={image}
          alt={name}
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
            <h3 className="text-lg font-semibold text-gray-900">
              {name}
            </h3>
            <p className="text-sm text-gray-500">{subject}</p>
          </div>

          <div className="text-sm font-medium text-yellow-500">
            ⭐ {rating}
          </div>
        </div>

        {/* Subjects */}
        <div className="flex flex-wrap gap-2 text-xs">
          {subjects.slice(0, 2).map((subj, index) => (
            <span
              key={index}
              className="bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full"
            >
              {subj}
            </span>
          ))}

          {subjects.length > 2 && (
            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full">
              +{subjects.length - 2} more
            </span>
          )}
        </div>

        {/* Info */}
        <div className="text-sm text-gray-600 space-y-1">
          <p>{experience}</p>
          <p>{format}</p>
          <p className="text-green-600 font-medium">{availability}</p>
        </div>

        {/* Price */}
          <div className="flex items-center justify-between pt-4 border-t border-gray-200">
            <div className="flex items-center gap-1">
                <span>₸</span>
                <span className="font-semibold text-gray-900">
                {price}
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
        {reviewsCount} student reviews
        </div>

      </div>
    </div>
    )
}