import Person from "../../../assets/person2.svg"
import Hat from "../../../assets/hat2.svg"
import Book from "../../../assets/book2.svg"
import Dollar from "../../../assets/dollar.svg"
import Tabs from "./ButtonBar"

export const MainBar = () => {
    return (
        <main className="flex-1" >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="mb-8 flex flex-col gap-1">
                    <span className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
                        Admin Dashboard
                    </span>
                    <p className="text-gray-600 text-lg">
                        Manage users, courses, and platform operations
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white rounded-xl shadow-md p-6">
                        <div className="flex items-center gap-4">
                            <div className="bg-[#DBEAFE] p-3 rounded-lg">
                                <img src={Person} 
                                alt="Person Icon" 
                                className="w-12 h-12"/>
                            </div>
                            <div>
                                <span>
                                    Total Students
                                </span>
                                <p className="text-2xl font-bold text-gray-900">
                                    1,234
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-md p-6">
                        <div className="flex items-center gap-4">
                            <div className="bg-[#F3E8FF] p-3 rounded-lg">
                                <img src={Hat} 
                                alt="Person Icon" 
                                className="w-12 h-12"/>
                            </div>
                            <div>
                                <span>
                                    Total Tutors
                                </span>
                                <p className="text-2xl font-bold text-gray-900">
                                    156
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-md p-6">
                        <div className="flex items-center gap-4">
                            <div className="bg-[#DCFCE7] p-3 rounded-lg">
                                <img src={Book} 
                                alt="Person Icon" 
                                className="w-12 h-12"/>
                            </div>
                            <div>
                                <span>
                                    Active Sessions
                                </span>
                                <p className="text-2xl font-bold text-gray-900">
                                    487
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-md p-6">
                        <div className="flex items-center gap-4">
                            <div className="bg-[#FEF3C6] p-3 rounded-lg">
                                <img src={Dollar} 
                                alt="Person Icon" 
                                className="w-12 h-12"/>
                            </div>
                            <div>
                                <span>
                                    Revenue (MTD)
                                </span>
                                <p className="text-2xl font-bold text-gray-900">
                                    $48,560 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <Tabs />
            </div>
        </main>   
    )
}