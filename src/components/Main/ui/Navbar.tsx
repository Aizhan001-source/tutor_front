import { 
    Bars3Icon, 
    MagnifyingGlassCircleIcon,
    ArrowRightOnRectangleIcon
} from "@heroicons/react/24/solid"
import { Link } from "react-router-dom"


export const Navbar = () => {
    return (
        <div className="flex justify-between items-center p-4">
            {/* Левый блок */}
            <div className="flex items-center gap-2">
                <MagnifyingGlassCircleIcon className="h-8 w-8" />
                
                <div className="text-base font-bold ">CramMaster</div>
                
            </div>
            
            {/* Центр: ссылки */}
            <nav className="flex justify-end items-center gap-6">
                <Link to="/" className="font-semibold hover:text-cyan-600 transition-colors">
                    Find Tutors
                </Link>

                <Link to="/" className="font-semibold hover:text-cyan-600 transition-colors">
                    My Courses
                </Link>

                <Link to="/" className="font-semibold hover:text-cyan-600 transition-colors">
                    Messages
                </Link>
            </nav>
            
            {/* Правый блок */}
            <div className="flex items-center gap-2">
                <ArrowRightOnRectangleIcon className="w-6 h-6" />
                <Link to="/" className="font-semibold hover:text-cyan-600 transition-colors">
                    Logout
                </Link>
           
                <Bars3Icon className="h-8 w-8 ml-4" />
            </div>
        </div>
    )
}