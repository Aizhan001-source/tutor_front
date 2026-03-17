export const TutorsBar = () => {
    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">
                    Manage Tutors
                </h3>

                <button className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition">
                    + Add Tutor
                </button>
            </div>

            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Name</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Email</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Status</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Join Date</th>
                            <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        <tr>
                            <td className="px-4 py-4 text-sm text-gray-900">Sarah Johnson</td>
                            <td className="px-4 py-4 text-sm text-gray-600">sarah@example.com</td>
                            <td className="px-4 py-4">
                                <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                                    active
                                </span>
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-600">Dec 10, 2025</td>
                            <td className="px-4 py-4">
                                <div className="flex gap-2">
                                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                                        Edit
                                    </button>
                                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition">
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td className="px-4 py-4 text-sm text-gray-900">Michael Chen</td>
                            <td className="px-4 py-4 text-sm text-gray-600">mchen@example.com</td>
                            <td className="px-4 py-4">
                                <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                                    active
                                </span>
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-600">Dec 15, 2025</td>
                            <td className="px-4 py-4">
                                <div className="flex gap-2">
                                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                                        Edit
                                    </button>
                                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition">
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <tr>
                            <td className="px-4 py-4 text-sm text-gray-900">Emily Rodriguez</td>
                            <td className="px-4 py-4 text-sm text-gray-600">emily@example.com</td>
                            <td className="px-4 py-4">
                                <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                                    active
                                </span>
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-600">Jan 5, 2026</td>
                            <td className="px-4 py-4">
                                <div className="flex gap-2">
                                    <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition">
                                        Edit
                                    </button>
                                    <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition">
                                        Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
};