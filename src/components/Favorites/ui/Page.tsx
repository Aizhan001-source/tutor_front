import { useEffect, useRef } from "react";
import { useFavoriteStore } from "../../../store/favoriteStore";
import { useNavigate } from "react-router-dom";
import {
  AcademicCapIcon,
  CurrencyDollarIcon,
  StarIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import { MapIcon } from "@heroicons/react/24/solid";
import { useAuthStore } from "../../../store/authStore";
import { connectNotifications } from "../../../services/notificationWS";

export const Page = () => {
  const { favorites, fetchFavorites, removeFavorite, loading } =
    useFavoriteStore();

  const userId = useAuthStore((state) => state.user?.id);
  const wsRef = useRef<WebSocket | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetchFavorites();
  }, [fetchFavorites]);

  useEffect(() => {
    if (!userId) {
      console.log("❌ NO USER ID");
      return;
    }

    console.log("🚀 WS CONNECT FOR FAVORITES PAGE:", userId);

    wsRef.current?.close();
    wsRef.current = connectNotifications(userId);

    return () => {
      wsRef.current?.close();
    };
  }, [userId]);

  console.log("FAVORITES:", favorites);

  if (loading) return <p>Loading...</p>;

  if (!favorites?.length) {
    return <p className="text-center">No favorites yet</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {favorites.map((fav) => (
        <div
          key={fav.id}
          className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all overflow-hidden relative"
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              console.log("CLICKED");
              removeFavorite(fav.tutor?.id ?? fav.id);
            }}
            className="absolute top-4 right-4 z-10 p-2 bg-white rounded-full shadow hover:bg-red-50"
          >
            <TrashIcon className="w-5 h-5" />
          </button>

          <div className="h-40 bg-gradient-to-br from-indigo-400 to-purple-500" />

          <div className="p-5">
            <div className="flex justify-between mb-2">
              <h3 className="font-semibold text-lg">
                {fav.user.first_name} {fav.user.last_name}
              </h3>

              <span className="text-indigo-600 text-sm">
                {fav.education?.name}
              </span>
            </div>

            <div className="flex items-center gap-1 mb-3">
              <StarIcon className="w-5 h-5" />
              {fav.average_rating ?? 0}
            </div>

            <div className="flex justify-between text-sm border-t pt-3">
              <div className="flex items-center gap-1">
                <AcademicCapIcon className="w-5 h-5" />
                {fav.experience_years ?? 0}y
              </div>

              <div className="flex items-center gap-1">
                <MapIcon className="w-5 h-5" />
                Online
              </div>
            </div>

            <div className="flex justify-between items-center mt-4 border-t pt-3">
              <div className="flex items-center gap-1">
                <CurrencyDollarIcon className="w-5 h-5" />
                {fav.price_per_hour ?? 0}/h
              </div>

              <button
                onClick={() => navigate(`/booking/${fav.id}`)}
                className="px-3 py-1 bg-indigo-600 text-white rounded"
              >
                Book Session
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};