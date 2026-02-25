import { Star, Award, MapPin, Clock } from "lucide-react";

type Tutor = {
  name: string;
  image: string;
  rating: number;
  subject: string;
  tags: string[];
  moreCount: number;
  experience: number;
  location: string;
  availability: string;
  price: number;
  reviewsCount: number;
};

type TutorCardProps = {
  tutor: Tutor;
};

export const TutorCard = ({ tutor }: TutorCardProps) => {
  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
      {/* Image */}
      <div className="h-48 overflow-hidden">
        <img
          src={tutor.image}
          alt={tutor.name}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="p-5">
        {/* Header */}
        <div className="flex justify-between items-start mb-1">
          <h3 className="text-lg font-bold text-slate-900">{tutor.name}</h3>
          <div className="flex items-center gap-1 bg-amber-50 px-2 py-1 rounded-lg">
            <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
            <span className="text-sm font-bold text-slate-700">
              {tutor.rating}
            </span>
          </div>
        </div>

        <p className="text-indigo-600 font-medium mb-3">
          {tutor.subject}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {tutor.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-slate-50 text-slate-500 text-xs font-medium rounded-full border border-slate-100"
            >
              {tag}
            </span>
          ))}
          <span className="px-3 py-1 bg-slate-50 text-slate-400 text-xs font-medium rounded-full">
            +{tutor.moreCount} more
          </span>
        </div>

        {/* Info */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <Award className="w-4 h-4" />
            <span>{tutor.experience} years experience</span>
          </div>

          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <MapPin className="w-4 h-4" />
            <span>{tutor.location}</span>
          </div>

          <div className="flex items-center gap-2 text-emerald-500 text-sm font-medium">
            <Clock className="w-4 h-4" />
            <span>Available {tutor.availability}</span>
          </div>
        </div>

        <hr className="border-slate-100 mb-5" />

        {/* Footer */}
        <div className="flex items-center justify-between">
          <div className="flex items-baseline gap-1">
            <span className="text-xl font-bold text-slate-900">
              ${tutor.price}
            </span>
            <span className="text-slate-400 text-sm">/hour</span>
          </div>

          <button className="bg-[#4f46e5] hover:bg-[#4338ca] text-white px-5 py-2.5 rounded-xl font-bold text-sm transition-colors">
            Book Session
          </button>
        </div>

        <p className="text-center text-slate-400 text-xs mt-4">
          {tutor.reviewsCount} student reviews
        </p>
      </div>
    </div>
  );
};
