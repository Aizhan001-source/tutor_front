import { useEffect } from "react"
import { useTutorStore } from "../../store/tutorStore"
import { TutorCard } from "../Main/ui/TutorCard"

export const List = () => {
    const { tutors, isLoading, error, fetchTutors } = useTutorStore()

    useEffect(() => {
        fetchTutors()
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (error) return <p>Error...</p>

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6">
            {tutors.map((tutor) => (
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
                    isFavorite={false}
                />
            ))}
        </div>
    )
}