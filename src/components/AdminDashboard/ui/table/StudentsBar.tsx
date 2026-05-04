import { useState } from "react";

type Student = {
    id: number;
    name: string;
    email: string;
    status: "active" | "inactive";
    joinDate: string;
};

export const StudentsBar = () => {
    const [students, setStudents] = useState<Student[]>([
        {
            id: 1,
            name: "John Anderson",
            email: "john@example.com",
            status: "active",
            joinDate: "Jan 15, 2026",
        },
        {
            id: 2,
            name: "Emma Wilson",
            email: "emma@example.com",
            status: "active",
            joinDate: "Jan 20, 2026",
        },
        {
            id: 3,
            name: "Michael Brown",
            email: "michael@example.com",
            status: "inactive",
            joinDate: "Feb 1, 2026",
        },
    ]);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [editingStudent, setEditingStudent] = useState<Student | null>(null);

    const [form, setForm] = useState({
        name: "",
        email: "",
        status: "active" as "active" | "inactive",
    });

    const openAddModal = () => {
        setEditingStudent(null);
        setForm({ name: "", email: "", status: "active" });
        setIsModalOpen(true);
    };

    const openEditModal = (student: Student) => {
        setEditingStudent(student);
        setForm({
            name: student.name,
            email: student.email,
            status: student.status,
        });
        setIsModalOpen(true);
    };

    const saveStudent = () => {
        if (editingStudent) {
            // EDIT
            setStudents((prev) =>
                prev.map((s) =>
                    s.id === editingStudent.id ? { ...s, ...form } : s
                )
            );
        } else {
            // ADD
            const newStudent: Student = {
                id: Date.now(),
                name: form.name,
                email: form.email,
                status: form.status,
                joinDate: new Date().toLocaleDateString(),
            };
            setStudents((prev) => [...prev, newStudent]);
        }

        setIsModalOpen(false);
    };

    const deleteStudent = (id: number) => {
        setStudents((prev) => prev.filter((s) => s.id !== id));
    };

    return (
        <div>
            {/* HEADER */}
            <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-semibold text-gray-900">
                    Manage Students
                </h3>

                <button
                    onClick={openAddModal}
                    className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg"
                >
                    + Add Student
                </button>
            </div>

            {/* TABLE */}
            <div className="overflow-x-auto">
                <table className="w-full">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-4 py-3 text-left">Name</th>
                            <th className="px-4 py-3 text-left">Email</th>
                            <th className="px-4 py-3 text-left">Status</th>
                            <th className="px-4 py-3 text-left">Join Date</th>
                            <th className="px-4 py-3 text-left">Actions</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-gray-200">
                        {students.map((s) => (
                            <tr key={s.id}>
                                <td className="px-4 py-4">{s.name}</td>
                                <td className="px-4 py-4">{s.email}</td>
                                <td className="px-4 py-4">{s.status}</td>
                                <td className="px-4 py-4">{s.joinDate}</td>
                                <td className="px-4 py-4 flex gap-2">
                                    <button
                                        onClick={() => openEditModal(s)}
                                        className="text-blue-600"
                                    >
                                        Edit
                                    </button>

                                    <button
                                        onClick={() => deleteStudent(s.id)}
                                        className="text-red-600"
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* MODAL */}
            {isModalOpen && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
                    <div className="bg-white p-6 rounded-lg w-[400]">
                        <h2 className="text-lg font-semibold mb-4">
                            {editingStudent ? "Edit Student" : "Add Student"}
                        </h2>

                        <input
                            className="w-full border p-2 mb-3"
                            placeholder="Name"
                            value={form.name}
                            onChange={(e) =>
                                setForm({ ...form, name: e.target.value })
                            }
                        />

                        <input
                            className="w-full border p-2 mb-3"
                            placeholder="Email"
                            value={form.email}
                            onChange={(e) =>
                                setForm({ ...form, email: e.target.value })
                            }
                        />

                        <select
                            className="w-full border p-2 mb-4"
                            value={form.status}
                            onChange={(e) =>
                                setForm({
                                    ...form,
                                    status: e.target.value as any,
                                })
                            }
                        >
                            <option value="active">Active</option>
                            <option value="inactive">Inactive</option>
                        </select>

                        <div className="flex justify-end gap-2">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-3 py-2 bg-gray-200"
                            >
                                Cancel
                            </button>

                            <button
                                onClick={saveStudent}
                                className="px-3 py-2 bg-red-600 text-white"
                            >
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};