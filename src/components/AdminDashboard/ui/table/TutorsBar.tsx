import React, { useState } from "react";

type Tutor = {
    name: string;
    email: string;
    status: string;
    joinDate: string;
};

export const TutorsBar = () => {
    const [addOpen, setAddOpen] = useState(false);
    const [editOpen, setEditOpen] = useState(false);
    const [deleteOpen, setDeleteOpen] = useState(false);

    const [selectedTutor, setSelectedTutor] = useState<Tutor | null>(null);

    const tutors: Tutor[] = [
        {
            name: "Sarah Johnson",
            email: "sarah@example.com",
            status: "active",
            joinDate: "Dec 10, 2025",
        },
        {
            name: "Michael Chen",
            email: "mchen@example.com",
            status: "active",
            joinDate: "Dec 15, 2025",
        },
        {
            name: "Emily Rodriguez",
            email: "emily@example.com",
            status: "active",
            joinDate: "Jan 5, 2026",
        },
    ];

    const handleDelete = () => {
        setDeleteOpen(false);
        setSelectedTutor(null);
    };

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">
                    Manage Tutors
                </h3>

                <button
                    onClick={() => setAddOpen(true)}
                    className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition"
                >
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
                        {tutors.map((tutor, idx) => (
                            <tr key={idx}>
                                <td className="px-4 py-4 text-sm text-gray-900">{tutor.name}</td>
                                <td className="px-4 py-4 text-sm text-gray-600">{tutor.email}</td>
                                <td className="px-4 py-4">
                                    <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-700">
                                        {tutor.status}
                                    </span>
                                </td>
                                <td className="px-4 py-4 text-sm text-gray-600">{tutor.joinDate}</td>
                                <td className="px-4 py-4">
                                    <div className="flex gap-2">
                                        <button
                                            onClick={() => {
                                                setSelectedTutor(tutor);
                                                setEditOpen(true);
                                            }}
                                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg"
                                        >
                                            Edit
                                        </button>

                                        <button
                                            onClick={() => {
                                                setSelectedTutor(tutor);
                                                setDeleteOpen(true);
                                            }}
                                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg"
                                        >
                                            Delete
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* ADD MODAL */}
            {addOpen && (
                <Modal onClose={() => setAddOpen(false)}>
                    <h2 className="text-xl font-bold mb-4">Add New Tutor</h2>

                    <input className="w-full border p-2 mb-2" placeholder="Name" />
                    <input className="w-full border p-2 mb-2" placeholder="Email" />

                    <div className="flex justify-end gap-2">
                        <button onClick={() => setAddOpen(false)}>Cancel</button>
                        <button className="bg-green-600 text-white px-4 py-2">
                            Save
                        </button>
                    </div>
                </Modal>
            )}

            {/* EDIT MODAL */}
            {editOpen && selectedTutor && (
                <Modal onClose={() => setEditOpen(false)}>
                    <h2 className="text-xl font-bold mb-4">
                        Edit Tutor: {selectedTutor.name}
                    </h2>

                    <input
                        className="w-full border p-2 mb-2"
                        defaultValue={selectedTutor.name}
                    />
                    <input
                        className="w-full border p-2 mb-2"
                        defaultValue={selectedTutor.email}
                    />

                    <div className="flex justify-end gap-2">
                        <button onClick={() => setEditOpen(false)}>Cancel</button>
                        <button className="bg-blue-600 text-white px-4 py-2">
                            Update
                        </button>
                    </div>
                </Modal>
            )}

            {/* DELETE MODAL */}
            {deleteOpen && selectedTutor && (
                <Modal onClose={() => setDeleteOpen(false)} width="400px">
                    <h2 className="text-lg font-bold mb-3">Delete Tutor</h2>

                    <p>
                        Are you sure you want to delete{" "}
                        <b>{selectedTutor.name}</b>?
                    </p>

                    <div className="flex justify-end gap-2 mt-4">
                        <button onClick={() => setDeleteOpen(false)}>Cancel</button>
                        <button
                            onClick={handleDelete}
                            className="bg-red-600 text-white px-4 py-2"
                        >
                            Delete
                        </button>
                    </div>
                </Modal>
            )}
        </div>
    );
};

/* ================= MODAL COMPONENT ================= */

function Modal({
    children,
    onClose,
    width = "500px",
}: {
    children: React.ReactNode;
    onClose: () => void;
    width?: string;
}) {
    return (
        <div className="fixed inset-0 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/50" onClick={onClose} />

            <div
                className="relative bg-white p-6 rounded-xl shadow-xl"
                style={{ width }}
            >
                {children}
            </div>
        </div>
    );
}