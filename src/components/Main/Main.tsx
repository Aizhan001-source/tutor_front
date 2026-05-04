import { useEffect, useMemo } from "react";
import { useTutorStore } from "../../store/tutors/tutorStore";
import { Navbar } from "../NavBar/NavBar";
import { Filter } from "./ui/Filter";
import { TutorCard } from "./ui/TutorCard";
import { Soon } from "./ui/Soon";
import { mapTutorToCard } from "../../utils/mapTutorToCard";

export const MainPage = () => {
  const {
    tutors,
    reviews,
    courses,
    fetchTutors,
    fetchReviews,
    fetchCourses,
    isLoading,
  } = useTutorStore();

  useEffect(() => {
    fetchTutors();
    fetchReviews();
    fetchCourses();
  }, []);

  const calculateRating = (tutorId: string) => {
    const tutorCourses = Array.isArray(courses)
      ? courses.filter((c) => c.tutor_id === tutorId)
      : [];

    const courseIds = tutorCourses.map((c) => c.id);

    const tutorReviews = Array.isArray(reviews)
      ? reviews.filter((r) => courseIds.includes(r.course_id))
      : [];

    if (!tutorReviews.length) {
      return {
        average_rating: 0,
        total_reviews: 0,
      };
    }

    const sum = tutorReviews.reduce((acc, r) => acc + r.rating, 0);

    return {
      average_rating: sum / tutorReviews.length,
      total_reviews: tutorReviews.length,
    };
  };

  const mappedTutors = useMemo(() => {
    if (!Array.isArray(tutors)) return [];

    return tutors.map((tutor) =>
      mapTutorToCard(tutor, calculateRating(tutor.id))
    );
  }, [tutors, reviews, courses]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 sm:px-6 lg:px-8 py-8">
      <Navbar />
      <Filter />

      <div className="max-w-7xl mx-auto">
        <div className="mb-6">
          <span className="flex gap-1 text-gray-600">
            Showing
            <span className="font-semibold">{mappedTutors.length}</span>
            tutors
          </span>
        </div>

        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mappedTutors.map((tutor) => (
              <TutorCard
                key={tutor.id}
                {...tutor}
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