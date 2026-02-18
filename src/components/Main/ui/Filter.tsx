import { useState } from "react"

export const Filter = () => {
    const subjects = ["Math", "Physics", "Chemistry", "Biology", "English", "History"]

    // Для выделения выбранного предмета (мок)
    const [selected, setSelected] = useState<string | null>(null)

    return (
        <div className="flex flex-col items-start px-5 mt-4">
            
            {/* Поиск */}
            <input
                type="text"
                placeholder="Search for tutors..."
                className="w-full max-w-xl p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />

            {/* Фильтры предметов */}
            <div className="flex flex-wrap gap-3 mt-4">
                {subjects.map(subject => (
                    <button
                        key={subject}
                        onClick={() => setSelected(subject)}
                        className={`px-4 py-2 rounded-full transition-colors ${
                            selected === subject 
                            ? "bg-cyan-600 text-white" 
                            : "bg-cyan-100 text-cyan-800 hover:bg-cyan-200"
                        }`}
                    >
                        {subject}
                    </button>
                ))}
            </div>
        </div>
    )
}