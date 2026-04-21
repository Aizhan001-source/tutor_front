import { useEffect } from "react"
import { useTutorStore } from "../../store/tutors/tutorStore"
import { TutorCard } from "../Main/ui/TutorCard"

export const List = () => {
    const {
        tutors,
        isLoading,
        error,
        fetchTutors,
    } = useTutorStore()

    useEffect(() => {
        fetchTutors()
    }, tutors)
    return (
        <div className="grid grid-cols-4 md:grid-cols-3 sm:grid-cols-1">
            <div className="">
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
        </div>
    )
}