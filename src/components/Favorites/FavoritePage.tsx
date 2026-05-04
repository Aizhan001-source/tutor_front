import { Navbar } from "../Main/ui/Navbar"
import { Footer } from "../Main/ui/Footer"
import { Page } from "../Favorites/ui/Page"
import { HeartIcon } from "@heroicons/react/16/solid"

export const FavoritesPage=() => {
    
    return(
        <main className="flex-1">
            <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-indigo-100">
                <Navbar/>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="mb-8">
                        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                            Favorite Tutors
                        </h1>
                        <p className="text-gray-600 text-lg">
                            Quick access to your saved tutors
                        </p>
                    </div>

                    <div className="mb-6">
                        <div className="inline-flex items-center gap-2 bg-white rounded-lg shadow-md px-4 py-3">
                            <HeartIcon className=" text-red-600 w-6 h-6"/>
                            {/* <span className="font-semibold text-gray-900"></span> */}
                            <span className="text-gray-600">Favorites</span>
                        </div>
                    </div>
                </div>

                <Page/>
                <Footer/>
            </div>
        </main>
    )
}