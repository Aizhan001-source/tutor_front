import { useEffect } from "react";
import { useTutorStore } from "../../store/tutorStore";
import { useFavoriteStore } from "../../store/favoriteStore";
import { Navbar } from "./ui/Navbar";
import { Filter } from "./ui/Filter";
import { TutorCard } from "./ui/TutorCard";

export const MainPage = () => {
  const tutors = useTutorStore((state) => state.tutors);
  const fetchTutors = useTutorStore((state) => state.fetchTutors);
  const isLoading = useTutorStore((state) => state.isLoading);

  // ⭐ ВОТ ТУТ правильно
  const addFavorite = useFavoriteStore((state) => state.addFavorite);

  useEffect(() => {
    fetchTutors();
  }, [fetchTutors]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-6 py-8">
      <Navbar />
      <Filter />

      <div className="max-w-7xl mx-auto mt-6">
        <div className="mb-4 text-gray-600">
          Showing <b>{tutors.length}</b> tutors
        </div>

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutors.map((tutor: any) => (
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

                {/* ⭐ кнопка избранного */}
                <button
                  onClick={() => addFavorite(tutor)}
                  className="absolute top-2 right-2 bg-white shadow px-3 py-1 rounded-full text-red-500"
                >
                  ❤️
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};