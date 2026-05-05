import {
    ChatBubbleLeftIcon,
    ClockIcon,
    HeartIcon,
    MapPinIcon
} from "@heroicons/react/24/outline"
import { Navbar } from "../Main/ui/Navbar"
import { Soon } from "../Main/ui/Soon"
import { FiAward } from "react-icons/fi"
import { StarIcon } from "@heroicons/react/24/solid"

import { useTutorStore } from "../../store/tutors/tutorStore"
import { useMessageStore } from "../../store/messages/messageStore"
import { useReviewStore } from "../../store/reviews/reviewStore"

import { ReviewsList } from "./ui/ReviewsList"

import { useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

export const TutorIndex = () => {
    const { tutor, isLoading, fetchTutorById } = useTutorStore()
    const { setActiveUser } = useMessageStore()

    const {
        reviews,
        isLoading: reviewsLoading,
        fetchReviewsByTutor
    } = useReviewStore()

    const navigate = useNavigate()
    const { id } = useParams()

    useEffect(() => {
        if (id) {
            fetchTutorById(id)
            fetchReviewsByTutor(id)
        }
    }, [id])

    if (isLoading) {
        return <div>LOADING...</div>
    }

    const onMessageClick = () => {
        if (tutor?.user?.id) {
            setActiveUser(tutor.user.id)
        }
        navigate("/messages")
    }

    return (
        <div className="min-h-screen bg-blue-50">
            <Navbar />

            {/* HEADER */}
            <div className="flex justify-between p-8">
                <div className="flex bg-white rounded-xl shadow-xl p-8 gap-6 w-full">

                    {/* AVATAR */}
                    <img
                        src={tutor?.user?.avatar_url || "https://ui-avatars.com/api/?name=Tutor&background=random"}
                        className="w-40 h-40 rounded-full object-cover"
                    />

                    {/* INFO */}
                    <div className="grid grid-cols-2 w-full">
                        <div className="flex flex-col gap-3">

                            <span className="font-bold text-3xl">
                                {tutor?.user?.first_name} {tutor?.user?.last_name}
                            </span>

                            <div className="flex gap-2 flex-wrap">
                                {tutor?.subjects?.map((subject: any, i: number) => (
                                    <div
                                        key={i}
                                        className="bg-blue-100 px-2 py-1 rounded-full text-blue-700 text-sm"
                                    >
                                        {subject.name}
                                    </div>
                                ))}
                            </div>

                            <div className="flex gap-4 flex-wrap text-gray-500">
                                <div className="flex items-center gap-1">
                                    <FiAward className="w-5 h-5" />
                                    {tutor?.experience_years} years
                                </div>
                                <div className="flex items-center gap-1">
                                    <MapPinIcon className="w-5 h-5" />
                                    Online
                                </div>
                                <div className="flex items-center gap-1">
                                    <ClockIcon className="w-5 h-5" />
                                    Available
                                </div>
                                <div className="flex items-center gap-1">
                                    <ChatBubbleLeftIcon className="w-5 h-5" />
                                    {tutor?.total_reviews || 0} reviews
                                </div>
                            </div>

                            <div className="flex gap-3 mt-2">
                                <button className="bg-indigo-600 text-white py-3 px-5 rounded-xl">
                                    Book Session
                                </button>
                                <button
                                    onClick={onMessageClick}
                                    className="border border-indigo-600 py-3 px-5 rounded-xl"
                                >
                                    Message
                                </button>
                            </div>
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="flex flex-col justify-center items-center gap-2">
                            <div className="flex items-center gap-2">
                                <StarIcon className="w-6 h-6 text-yellow-400" />
                                <span className="font-bold text-lg">
                                    {tutor?.average_rating || 0}
                                </span>
                            </div>
                            <div>
                                <span className="font-bold text-xl">
                                    ₸{tutor?.price_per_hour}
                                </span>
                                <span className="text-gray-500"> /hour</span>
                            </div>
                        </div>
                    </div>

                    <HeartIcon className="w-6 h-6 text-red-400 cursor-pointer" />
                </div>
            </div>

        {/* ABOUT */}
        <div className="p-8">
            <div className="bg-white rounded-xl shadow-xl p-8 flex flex-col gap-4">
                <h2 className="text-3xl font-bold">About</h2>
                <p className="text-gray-600">
                    {tutor?.bio || "No bio available"}
                </p>
                <div className="flex items-center gap-3">
                    <FiAward className="w-6 h-6" />
                    <div>
                        <div className="text-gray-500">Experience</div>
                        <div className="font-bold">
                            {tutor?.experience_years} years
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <StarIcon className="w-6 h-6 text-yellow-400" />
                    <div>
                        <div className="text-gray-500">Rating</div>
                        <div className="font-bold">
                            {tutor?.average_rating} ({tutor?.total_reviews} reviews)
                        </div>
                    </div>
                </div>
            </div>
        </div>

            {/* REVIEWS */}
            <div className="p-8">
                <ReviewsList
                    reviews={reviews}
                    isLoading={reviewsLoading}
                />
            </div>

            <Soon />
        </div>
    )
}