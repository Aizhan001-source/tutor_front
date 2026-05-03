import { useEffect } from "react";
import { useFavoriteStore } from "../../../store/favoriteStore";

import {
  AcademicCapIcon,
  CurrencyDollarIcon,
  StarIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { MapIcon } from "@heroicons/react/24/solid";

export const Page = () => {
  const { favorites, fetchFavorites, removeFavorite, loading } =
    useFavoriteStore();

  useEffect(() => {
    fetchFavorites();
  }, []);

  if (loading) return <p>Loading...</p>;

  if (!favorites?.length) {
    return <p className="text-center">No favorites yet</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

      {favorites.map((fav) => {
        const tutor = fav?.tutor;   // 🔥 IMPORTANT
        const user = tutor?.user;

        if (!tutor || !user) return null;

        return (
          <div
            key={fav.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden relative"
          >

            {/* DELETE */}
            <button
              onClick={() => removeFavorite(tutor.id)}
              className="absolute top-4 right-4 p-2 bg-white rounded-full shadow hover:bg-red-50"
            >
              <TrashIcon className="w-5 h-5" />
            </button>

            {/* HEADER */}
            <div className="h-40 bg-gradient-to-br from-indigo-400 to-purple-500" />

            {/* CONTENT */}
            <div className="p-5">

              {/* NAME */}
              <div className="flex justify-between mb-2">
                <h3 className="font-semibold text-lg">
                  {user.first_name} {user.last_name}
                </h3>

                {/* ⚠️ education егер object болса, string емес екенін тексер */}
                <span className="text-indigo-600 text-sm">
                  {typeof tutor.education === "object"
                    ? tutor.education?.name
                    : tutor.education}
                </span>
              </div>

              {/* RATING */}
              <div className="flex items-center gap-1 mb-3">
                <StarIcon className="w-5 h-5" />
                {tutor.average_rating ?? 0}
              </div>

              {/* INFO */}
              <div className="flex justify-between text-sm border-t pt-3">

                <div className="flex items-center gap-1">
                  <AcademicCapIcon className="w-5 h-5" />
                  {tutor.experience_years ?? 0}y
                </div>

                <div className="flex items-center gap-1">
                  <MapIcon className="w-5 h-5" />
                  Online
                </div>

              </div>

              {/* PRICE */}
              <div className="flex justify-between items-center mt-4 border-t pt-3">

                <div className="flex items-center gap-1">
                  <CurrencyDollarIcon className="w-5 h-5" />
                  {tutor.price_per_hour ?? 0}/h
                </div>

                <button className="px-3 py-1 bg-indigo-600 text-white rounded">
                  Book
                </button>

              </div>

            </div>
          </div>
        );
      })}

    </div>
  );
};