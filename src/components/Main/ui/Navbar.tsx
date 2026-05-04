import logo2Image from "../../../assets/logo2.svg"
import { ArrowRightOnRectangleIcon } from "@heroicons/react/24/solid"
import { useAuthStore } from "../../../store/users/authStore";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
    const { logout, token } = useAuthStore();
    const navigate = useNavigate();

    const onLogoutClick = () => {
        logout();
        navigate("/login");
    }

    return (
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 py-10">
                    <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate("/")}>
                        <div className="bg-indigo-600 p-2 rounded-lg">
                            <img src={logo2Image} alt="logo" />
                        </div>
                        <span className="text-xl font-bold text-gray-900 hidden sm:block">
                            CramMaster
                        </span>
                    </div>

                    <nav className="hidden md:flex items-center gap-6">
                        <span
                            onClick={() => navigate("/")}
                            className="text-gray-700 hover:text-indigo-600 font-medium cursor-pointer"
                        >
                            Find Tutors
                        </span>
                        <span className="text-gray-700 hover:text-indigo-600 font-medium cursor-pointer">
                            My Courses
                        </span>
                        <span
                            onClick={() => navigate("/messages")}
                            className="text-indigo-600 font-medium cursor-pointer"
                        >
                            Messages
                        </span>
                        <span className="text-gray-700 hover:text-indigo-600 font-medium cursor-pointer">
                            Favorites
                        </span>
                        <span
                            onClick={() => navigate("/settings")}
                            className="text-gray-700 hover:text-indigo-600 font-medium cursor-pointer"
                            >
                            Settings
                            </span>
                    </nav>

                    <div className="flex items-center gap-3">
                        {token ? (
                            <button
                                type="button"
                                onClick={onLogoutClick}
                                className="hidden md:flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium transition"
                            >
                                <ArrowRightOnRectangleIcon className="w-6 h-6" />
                                Logout
                            </button>
                        ) : (
                            <button
                                type="button"
                                onClick={() => navigate("/login")}
                                className="hidden md:flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium transition"
                            >
                                Login
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </header>
    )
}