import { useEffect } from "react";
import { useTutorStore } from "../../store/tutorStore";
import { useFavoriteStore } from "../../store/favoriteStore";
import { Navbar } from "./ui/Navbar";
import { Filter } from "./ui/Filter";
import { TutorCard } from "./ui/TutorCard";
import { Footer } from "../Main/ui/Footer";

export const MainPage = () => {
  const { tutors, fetchTutors, isLoading } = useTutorStore();

  const {
    favorites,
    fetchFavorites,
    addFavorite,
    removeFavorite,
  } = useFavoriteStore();

  useEffect(() => {
    fetchTutors();
    fetchFavorites();
  }, []);

  // ✅ ONLY ONE FUNCTION (OUTSIDE MAP)
  const toggleFavorite = async (tutorId: string) => {
    const isFav = favorites?.some(
      (f) => f.course_id === tutorId
    );

    if (isFav) {
      await removeFavorite(tutorId);
    } else {
      await addFavorite(tutorId);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 py-8">

      <Navbar />
      <Filter />

      <div className="max-w-7xl mx-auto">

        <div className="mb-6 text-gray-600">
          Showing <span className="font-semibold">{tutors.length}</span> tutors
        </div>

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {tutors.map((tutor) => {

              // ✅ FAVORITE CHECK (FIXED)
              const isFavorite = favorites?.some(
                (f) => f.course_id === tutor.id
              );

              return (
                <TutorCard
                  key={tutor.id}
                  id={tutor.id}
                  bio={tutor.bio}
                  experience_years={tutor.experience_years}
                  education={tutor.education}
                  price_per_hour={tutor.price_per_hour}
                  currency={tutor.currency}
                  average_rating={tutor.average_rating}
                  total_reviews={tutor.total_reviews}
                  first_name={tutor.user.first_name}
                  last_name={tutor.user.last_name}
                  isFavorite={isFavorite}
                  onToggleFavorite={() => toggleFavorite(tutor.id)} // 🔥 ВАЖНО
                />
              );
            })}

          </div>
        )}

      </div>

      <Footer />
    </div>
  );
};