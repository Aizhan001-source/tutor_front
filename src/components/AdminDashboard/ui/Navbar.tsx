

export const Navbar = () => {
    return(
        <nav className="bg-gray-900 text-white px-8 py-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="bg-red-500 w-10 h-10 rounded-lg flex items-center justify-center">
                    
                </div>
                <span className="font-semibold text-lg">CramMaster Admin</span>
            </div>

            <div>
                <span className="border-b-2 border-red-500 pb-1">
                Dashboard
                </span>
            </div>

            <button className="flex items-center gap-2 hover:text-red-400 transition">
                Logout →
            </button>
        </nav>
    )
}