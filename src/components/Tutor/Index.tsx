import { ChatBubbleLeftIcon, ClockIcon, HeartIcon, MapPinIcon } from "@heroicons/react/24/outline"
import { Navbar } from "../Main/ui/Navbar"
import { Soon } from "../Main/ui/Soon"
import { FiAward } from "react-icons/fi";
import { StarIcon } from "@heroicons/react/24/solid";
import TokayevImage from "../../assets/president.jpg"
import { useTutorStore } from "../../store/tutors/tutorStore";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const TutorIndex = () => {
    const { tutor, isLoading, fetchTutorById } = useTutorStore();

    const navigate = useNavigate();

    const { id } = useParams();

    useEffect(() => {
        if (id) {
            fetchTutorById(id);
        }
    }, [id])


    if (isLoading) {
        return (
            <div className="">
                LOADING...
            </div>
        )
    }

    const onMessageClick = () => {
        navigate("/messages")
    }

    return (
        <div className="min-h-screen bg-blue-50">
            <Navbar />
            <div className="flex justify-between p-8">
                <div className="flex bg-white rounded rounded-xl shadow shadow-xl p-8 gap-3">
                    <div className="">
                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400" className="w-40 h-40 rounded rounded-full" />
                    </div>
                    <div className="grid grid-cols-2">
                        <div className="flex flex-col gap-3">
                            <span className="font-bold text-3xl">
                                {tutor?.user.first_name} {tutor?.user.last_name}
                            </span>
                            <span className="font-semibold text-2xl text-blue-700">
                                Mathematics
                            </span>
                            <div className="font-semibold text-blue-700 flex gap-3">
                                <div className="rounded bg-blue-100 px-2 rounded-full py-1">
                                    Calculus
                                </div>
                                <div className="rounded bg-blue-100 px-2 rounded-full py-1">
                                    Algebra
                                </div>
                                <div className="rounded bg-blue-100 px-2 rounded-full py-1">
                                    SAT Math
                                </div>
                            </div>
                            <div className="font-semibold text-blue-700 flex justify-between items-center gap-3">
                                <div className="text-gray-500 flex items-center">
                                    <FiAward className="w-5 h-5" />
                                    {tutor?.experience_years} years
                                </div>
                                <div className="text-gray-500 flex items-center">
                                    <MapPinIcon className="w-5 h-5" />
                                    Online
                                </div>
                                <div className="text-gray-500 flex items-center">
                                    <ClockIcon className="w-5 h-5" />
                                    Available today
                                </div>
                                <div className="text-gray-500 flex items-center">
                                    <ChatBubbleLeftIcon className="w-5 h-5" />
                                    {tutor?.total_reviews} reviews
                                </div>
                            </div>
                            <div className="font-semibold text-blue-700 flex items-center gap-3">
                                <button className="bg-indigo-600 text-white py-3 px-5 rounded rounded-xl" type="button">Book Session</button>
                                <button onClick={onMessageClick} className="border border-2 border-indigo-600 py-3 px-5 rounded rounded-xl" type="button">Message</button>
                            </div>
                        </div>

                        <div className="flex flex-col justify-center items-center">
                            <div className="flex gap-3">
                                <StarIcon className="w-6 h-6 text-yellow-400" />
                                <span className="font-bold">{tutor?.total_reviews}</span>
                                <span className="text-gray-600">(127)</span>
                            </div>
                            <div className="flex">
                                <span className="font-bold">₸{tutor?.price_per_hour}</span>
                                <span className="text-gray-600">/hour</span>
                            </div>
                        </div>
                    </div>

                    <div className="">
                        <HeartIcon className="w-6 h-6 text-red-400" />
                    </div>
                </div>
            </div>

            <div className="p-8">
                <div className="flex flex-col bg-white rounded rounded-xl shadow shadow-xl p-8 gap-3">
                    <div className="font-bold text-3xl">
                        About
                    </div>
                    <div className="text-gray-600">
                        Passionate mathematics educator with over 8 years of experience helping students achieve their academic goals. Specialized in breaking down complex concepts into easy-to-understand lessons. My teaching approach is student-centered, focusing on building confidence and understanding rather than memorization.
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="">
                            <FiAward className="w-6 h-6" />
                        </div>
                        <div className="">
                            <div className="text-gray-600">Education</div>
                            <div className="font-bold">Master's in Mathematics Education, Stanford University</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="">
                            <ChatBubbleLeftIcon className="w-6 h-6" />
                        </div>
                        <div className="">
                            <div className="text-gray-600">Languages</div>
                            <div className="font-bold">English, Spanish</div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-8">
                <div className="flex flex-col bg-white rounded rounded-xl shadow shadow-xl p-8 gap-3">
                    <div className="flex justify-between font-bold">
                        <div className="text-3xl">Reviews(3)</div>
                        <div className="">
                            <button type="button" className="bg-indigo-600 text-white rounded rounded-xl py-3 px-6">
                                Add Review
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col gap-7">
                        <div className="flex items-center gap-2 border-b border-gray-200 pb-4">
                            <div className="">
                                <img src={TokayevImage} className="w-15 h-15 rounded rounded-full" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="font-bold text-lg">Kassym-Jomart Tokayev</span>
                                <div className="flex gap-2 items-center">
                                    <div className="flex">
                                        <StarIcon className="w-4 h-4 text-yellow-500" />
                                        <StarIcon className="w-4 h-4 text-yellow-500" />
                                        <StarIcon className="w-4 h-4 text-yellow-500" />
                                        <StarIcon className="w-4 h-4 text-yellow-500" />
                                        <StarIcon className="w-4 h-4 text-yellow-500" />
                                    </div>
                                    <div className="text-gray-600">
                                        Feb 20, 2026
                                    </div>
                                </div>

                                <div className="text-gray-600">
                                    Excellent tutor! Sarah helped me understand calculus concepts that I struggled with for months. Her teaching style is clear and patient.
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 border-b border-gray-200 pb-4">
                            <div className="">
                                <img src="https://th.bing.com/th/id/ODL.f234381f10434eec8e2705f85190ec8d?w=155&h=199&c=12&rs=1&pcl=faf9f7&o=6&dpr=1.3&pid=AlgoBlockDebug" className="w-15 h-15 rounded rounded-full" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="font-bold text-lg">Emmanuel Macron</span>
                                <div className="flex gap-2 items-center">
                                    <div className="flex">
                                        <StarIcon className="w-4 h-4 text-yellow-500" />
                                        <StarIcon className="w-4 h-4 text-yellow-500" />
                                        <StarIcon className="w-4 h-4 text-yellow-500" />
                                        <StarIcon className="w-4 h-4 text-yellow-500" />
                                        <StarIcon className="w-4 h-4 text-yellow-500" />
                                    </div>
                                    <div className="text-gray-600">
                                        Feb 20, 2026
                                    </div>
                                </div>

                                <div className="text-gray-600">
                                    Excellent tutor! Sarah helped me understand calculus concepts that I struggled with for months. Her teaching style is clear and patient.
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 border-b border-gray-200 pb-4">
                            <div className="">
                                <img src="https://th.bing.com/th?id=ONUT.9KUfiGJwTYF9ADPcLEvOiw&pid=News&w=316&h=200&c=14&rs=2&qlt=90&dpr=1.3" className="w-15 h-15 rounded rounded-full" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="font-bold text-lg">Donald Trump</span>
                                <div className="flex gap-2 items-center">
                                    <div className="flex">
                                        <StarIcon className="w-4 h-4 text-yellow-500" />
                                        <StarIcon className="w-4 h-4 text-yellow-500" />
                                        <StarIcon className="w-4 h-4 text-yellow-500" />
                                        <StarIcon className="w-4 h-4 text-yellow-500" />
                                        <StarIcon className="w-4 h-4 text-yellow-500" />
                                    </div>
                                    <div className="text-gray-600">
                                        Feb 20, 2026
                                    </div>
                                </div>

                                <div className="text-gray-600">
                                    Excellent tutor! Sarah helped me understand calculus concepts that I struggled with for months. Her teaching style is clear and patient.
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 border-b border-gray-200 pb-4">
                            <div className="">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/1/15/Kim_Jong-un_%282025%29_%28cropped%29.jpg" className="w-15 h-15 rounded rounded-full" />
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="font-bold text-lg">Kim Chen Yn</span>
                                <div className="flex gap-2 items-center">
                                    <div className="flex">
                                        <StarIcon className="w-4 h-4 text-yellow-500" />
                                        <StarIcon className="w-4 h-4 text-yellow-500" />
                                        <StarIcon className="w-4 h-4 text-yellow-500" />
                                        <StarIcon className="w-4 h-4 text-yellow-500" />
                                        <StarIcon className="w-4 h-4 text-yellow-500" />
                                    </div>
                                    <div className="text-gray-600">
                                        Feb 20, 2026
                                    </div>
                                </div>

                                <div className="text-gray-600">
                                    Excellent tutor! Sarah helped me understand calculus concepts that I struggled with for months. Her teaching style is clear and patient.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <Soon />
        </div>
    )
}