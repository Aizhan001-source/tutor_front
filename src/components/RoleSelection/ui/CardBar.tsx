import Hat from "../../../assets/hat.svg"
import Person from "../../../assets/person.svg"

export const CardBar = () => {
    return (
        <div className="mb-8">
            <div className="flex items-center justify-center">
                <span className="text-2xl font-semibold text-gray-900 text-center mb-8">
                    How would you like to continue?
                </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <button className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-indigo-100 p-6 rounded-full mb-6 group-hover:bg-indigo-200 transition">
                            <img src={Hat} 
                            alt="Student Icon" 
                            className="w-12 h-12" />
                        </div>
                        <span className="text-2xl font-bold text-gray-900 mb-3">
                            I'm a Student
                        </span>
                        <p className="text-gray-600 mb-6">
                            Find expert tutors and book personalized exam prep sessions
                        </p>
                        <div className="space-y-2 text-sm text-gray-500">
                        <p> ✓ Search qualified tutors</p>
                        <p> ✓ Book sessions instantly</p>
                        <p> ✓ Track your progress</p>
                        </div>
                    </div>
                </button>
                <button className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 transform hover:scale-105 group">
                    <div className="flex flex-col items-center text-center">
                        <div className="bg-purple-100 p-6 rounded-full mb-6 group-hover:bg-purple-200 transition">
                            <img src={Person} 
                            alt="Tutor Icon" 
                            className="w-12 h-12" />
                        </div>
                        <span className="text-2xl font-bold text-gray-900 mb-3">
                            I'm a Tutor
                        </span>
                        <p className="text-gray-600 mb-6">
                            Share your expertise and help students achieve their goals
                        </p>
                        <div className="space-y-2 text-sm text-gray-500">
                            <p>✓ Set your own rates</p>
                            <p>✓ Manage your schedule</p>
                            <p>✓ Grow your student base</p>
                        </div>
                    </div>
                </button>
            </div>
        </div>
    )
}