export const StudentsBar = () => {
    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">
                    Manage Students
                </h3>

                <button className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition">
                    + Add Student
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
                            <td className="px-4 py-4 text-sm text-gray-900">John Anderson</td>
                            <td className="px-4 py-4 text-sm text-gray-600">john@example.com</td>
                            <td className="px-4 py-4">
                                <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                                    active
                                </span>
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-600">Jan 15, 2026</td>
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
                            <td className="px-4 py-4 text-sm text-gray-900">Emma Wilson</td>
                            <td className="px-4 py-4 text-sm text-gray-600">emma@example.com</td>
                            <td className="px-4 py-4">
                                <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                                    active
                                </span>
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-600">Jan 20, 2026</td>
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
                            <td className="px-4 py-4 text-sm text-gray-900">Michael Brown</td>
                            <td className="px-4 py-4 text-sm text-gray-600">michael@example.com</td>
                            <td className="px-4 py-4">
                                <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-700">
                                    inactive
                                </span>
                            </td>
                            <td className="px-4 py-4 text-sm text-gray-600">Feb 1, 2026</td>
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