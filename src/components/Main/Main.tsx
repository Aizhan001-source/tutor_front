import { useEffect, type Key } from "react";
import { useTutorStore } from "../../store/tutors/tutorStore";
import { Navbar } from "./ui/Navbar";
import { Filter } from "./ui/Filter";
import { TutorCard } from "./ui/TutorCard";
import { Soon } from "./ui/Soon";

export const MainPage = () => {
  const { tutors, fetchTutors, isLoading } = useTutorStore();

  useEffect(() => {
    fetchTutors();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 sm:px-6 lg:px-8 py-8">
      <Navbar />
      <Filter />

      <div className="max-w-7xl mx-auto">
        <div className="mb-6 ">
          <span className="flex gap-1 text-gray-600">
            Showing
            <span className="font-semibold">
              {tutors.length}
            </span>
            tutors
          </span>
        </div>

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutors.map((tutor) => (
              <TutorCard
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
                isFavorite={false}
              />
            ))}
          </div>
        )}
      </div>
      <Soon />
    </div>
  );
};