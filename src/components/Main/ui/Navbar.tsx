import logo2Image from "../../../assets/logo2.svg"
import { ArrowRightOnRectangleIcon} from "@heroicons/react/24/solid"


export const Navbar=() => {
    return(
        <header className="bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">    
                <div className="flex items-center justify-between h-16 py-10">
                    <div className="flex items-center gap-2">
                        <div className="bg-indigo-600 p-2 rounded-lg ">
                            <img 
                            src={logo2Image}
                            alt="logo">
                            </img>
                        </div>
                        <span className="text-xl font-bold text-gray-900 hidden sm:block">
                            CramMaster
                        </span>
                    </div>
                    <nav className="hidden md:flex items-center gap-6">
                        <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">Find Tutors</a>
                        <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">My Courses</a>
                        <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium">Messages</a>
                    </nav>
                    <div className="flex items-center gap-3">
                        <button className="hidden md:flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-indigo-600 font-medium transition">
                            <ArrowRightOnRectangleIcon className="w-6 h-6" />
                            Logout
                        </button>
                    </div>
                </div>

            </div>
        </header>
    )
}
