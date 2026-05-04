import { ChatBubbleLeftIcon, ClockIcon, HeartIcon, MapPinIcon } from "@heroicons/react/24/outline"
import { Navbar } from "../Main/ui/Navbar"
import { Footer } from "../Main/ui/Footer"
import { FiAward } from "react-icons/fi";
import { StarIcon } from "@heroicons/react/24/solid";
// import TokayevImage from "../../assets/president.jpg"
import { useTutorStore } from "../../store/tutorStore";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useFavoriteStore } from "../../store/favoriteStore";

export const TutorIndex = () => {
    const { tutor, isLoading, fetchTutorById } = useTutorStore();
    const { addFavorite, fetchFavorites } = useFavoriteStore();

    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        if (id) {
            fetchTutorById(id);
        }
    }, [id, fetchTutorById]);

    useEffect(() => {
        fetchFavorites();
    }, [fetchFavorites]);

    if (isLoading) {
        return <div>LOADING...</div>;
    }

    const onMessageClick = () => {
        navigate("/messages");
    };

    const onBookingClick = () => {
        if (id) {
            navigate(`/booking/${id}`);
        }
    };

    const onFavoriteClick = async () => {
        try {
            await addFavorite(id!);
            await fetchFavorites();
        } catch (e) {
            console.error(e);
        }
    };


    return (
        <div className="min-h-screen bg-blue-50">
            <Navbar />

            <div className="flex justify-between p-8">
                <div className="flex bg-white rounded-xl shadow-xl p-8 gap-3">

                    <div>
                        <img
                            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
                            className="w-40 h-40 rounded-full"
                        />
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
                                <div className="bg-blue-100 px-2 rounded-full py-1">Calculus</div>
                                <div className="bg-blue-100 px-2 rounded-full py-1">Algebra</div>
                                <div className="bg-blue-100 px-2 rounded-full py-1">SAT Math</div>
                            </div>

                            <div className="flex justify-between text-gray-500">
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
                                    Available today
                                </div>

                                <div className="flex items-center gap-1">
                                    <ChatBubbleLeftIcon className="w-5 h-5" />
                                    {tutor?.total_reviews} reviews
                                </div>
                            </div>

                            <div className="flex gap-3">
                                <button
                                    onClick={onBookingClick}
                                    className="bg-indigo-600 text-white py-3 px-5 rounded-xl"
                                >
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

                        <div className="flex flex-col justify-center items-center">
                            <div className="flex gap-2 items-center">
                                <StarIcon className="w-6 h-6 text-yellow-400" />
                                <span className="font-bold">{tutor?.total_reviews}</span>
                                <span className="text-gray-600">(127)</span>
                            </div>

                            <div className="font-bold">
                                ₸{tutor?.price_per_hour}/hour
                            </div>
                        </div>
                    </div>

                    {/* FAVORITE */}
                    <div onClick={onFavoriteClick} className="cursor-pointer">
                        <HeartIcon className="w-6 h-6 text-red-400 hover:text-red-600" />
                    </div>

                </div>
            </div>

            <div className="p-8 bg-white rounded-xl shadow-xl mx-8">
                <div className="text-3xl font-bold">About</div>
                <div className="text-gray-600 mt-2">
                    Passionate mathematics educator...
                </div>
            </div>

            <Footer />
        </div>
    );
};