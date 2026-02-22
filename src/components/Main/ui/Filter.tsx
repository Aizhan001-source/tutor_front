import { FunnelIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline"

export const Filter =() => {
    return(
         <div className="max-w-7xl mx-auto">
            <div className="mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                Find Your Perfect Tutor
                </h1>
                <p className="text-gray-600 text-lg">
                    Connect with expert tutors for personalized exam preparation
                </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 mb-8">
                <div className="flex flex-col lg:flex-row gap-4">
                    <div className="flex-1 relative">
                        <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />

                        <input
                            type="text"
                            placeholder="Search by subject, tutor name, or specialty..."
                            className="w-full border p-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>

                    <button className="lg:hidden flex items-center justify-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 font-medium">
                        <FunnelIcon className="w-5 h-5" />
                        Filters
                    </button>
                    <div className="hidden lg:block">
                        <select className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none min-w-[200px]">
                            <option value="all"> All Subjects </option>
                            <option value="Mathematics">Mathematics</option>
                            <option value="Physics">Physics</option>
                            <option value="Chemistry">Chemistry</option>
                            <option value="Computer Scince">Computer Scince</option>
                            <option value="English">English</option>
                            <option value="Biology">Biology</option>
                        </select>
                    </div>
                    <div className="lg:hidden mt-4 pt-4 border-grey-200">
                        <select className="w-full px-4 py-3 border border-grey-300 rounded-lg focus:ring-2 focus: ring-indigo-500 focus:border-transparent outline-none">
                            <option value="all"> All Subjects </option>
                            <option value="Mathematics">Mathematics</option>
                            <option value="Physics">Physics</option>
                            <option value="Chemistry">Chemistry</option>
                            <option value="Computer Scince">Computer Scince</option>
                            <option value="English">English</option>
                            <option value="Biology">Biology</option>
                        </select>
                    </div>
                </div>
            </div>
        </div>

    )
}