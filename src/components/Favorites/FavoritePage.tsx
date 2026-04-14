import { useFavoriteStore } from "../../store/favoriteStore";
import { TutorCard } from "../Main/ui/TutorCard";

export const FavoritesPage = () => {
  const favorites = useFavoriteStore((state) => state.favorites);
  const removeFavorite = useFavoriteStore((state) => state.removeFavorite);

  return (
    <div className="min-h-screen p-6 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">❤️ Favorites</h1>

      {favorites.length === 0 ? (
        <p className="text-gray-500">No favorites yet</p>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {favorites.map((tutor: any) => (
            <div key={tutor.id} className="relative">
              <TutorCard
                image={tutor.user?.avatar_url}
                name={`${tutor.user?.first_name} ${tutor.user?.last_name}`}
                subject={tutor.education}
                rating={Number(tutor.average_rating)}
                subjects={[tutor.education]}
                experience={`${tutor.experience_years} years`}
                format={tutor.format}
                availability="Available"
                price={Number(tutor.price_per_hour)}
                reviewsCount={tutor.total_reviews}
              />

              <button
                onClick={() => removeFavorite(tutor.id)}
                className="absolute top-2 right-2 bg-white px-2 py-1 text-red-500"
              >
                ✖
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};