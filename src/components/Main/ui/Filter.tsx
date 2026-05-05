import { MagnifyingGlassIcon } from "@heroicons/react/24/outline"

interface FilterProps {
    search: string
    onSearchChange: (value: string) => void
}

export const Filter = ({ search, onSearchChange }: FilterProps) => {
    return (
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
                <div className="relative">
                    <MagnifyingGlassIcon className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                    <input
                        type="text"
                        value={search}
                        onChange={(e) => onSearchChange(e.target.value)}
                        placeholder="Search by tutor name..."
                        className="w-full border border-gray-300 p-3 pl-10 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                    />
                </div>
            </div>
        </div>
    )
}