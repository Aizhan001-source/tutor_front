import Shield  from "../../../assets/shield.svg"
import Logout from "../../../assets/logout.svg"

export const NavBar = () => {
    return (
            <header className="bg-white shadow-lg sticky top-0 z-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between">
                        <a className="flex items-center gap-3">
                            <div className="bg-red-600 p-2 rounded-lg">
                                <img src={Shield} 
                                alt="Shield Icon"
                                className="w-10 h-10"/>
                            </div>
                            <span className="text-xl font-bold text-white hidden sm:block">
                                CramMaster Admin
                            </span>
                        </a>
                        <nav className="hidden md:flex items-center gap-6">
                            <a className="text-gray-300 hover:text-white font-medium transition">
                                Dashboard
                            </a>
                        </nav>
                        <div className="flex items-center gap-3">
                            <button className="hidden md:flex items-center gap-2 px-4 py-2 text-gray-300 hover:text-white font-medium transition">
                                <img 
                                src={Logout} 
                                alt="Logout Icon" 
                                className="w-10 h-10"/>
                                Logout
                            </button>
                        </div>
                    </div>
                </div>
            </header>
    )
}