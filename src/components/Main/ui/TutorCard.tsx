

interface TutorCardProps {
    name: string
    mainSubject: string
    rating: string
    otherSubjects: string[] // ["Calculus", "Algebra", "+1 more"]
    experience: string // "8 years"
    online: boolean
    available: string // "Available today"
    price: string // "45 /hour"
    reviews: string // "127 student reviews"
    photo: string
}

export const TutorCard = ({
    name,
    mainSubject,
    rating,
    otherSubjects,
    experience,
    online,
    available,
    price,
    reviews,
    photo
}: TutorCardProps) => {
    return (
        <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow overflow-hidden">
            
            {/* Фото */}
            <div className="h-48 bg-gradient-to-br from-indigo-400 to-purple-500 relative overflow-hidden">
                <img src={photo} alt={name} className="w-full h-full object-cover" />
            </div>

            {/* Информация о преподавателе */}
            <div className="p-4 flex flex-col gap-1">
                <h3 className="text-lg font-bold">{name}</h3>
                <p className="text-blue-600">{mainSubject}</p>
                <p className="text-yellow-500 justify-end">{rating}</p>

                {/* Другие предметы */}
                <div className="flex flex-wrap gap-2 mt-1">
                    {otherSubjects.map((subj, idx) => (
                        <span
                            key={idx}
                            className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                        >
                            {subj}
                        </span>
                    ))}
                </div>

                <p className="text-gray-500 mt-1">{experience} experience</p>
                <p className="text-gray-500">{online ? "Online" : "Offline"}</p>
                <p className="text-green-500">{available}</p>
                
                <div className="flex justify-between items-center mt-2">
                    <span className="font-semibold">{price}</span>
                    <button className="bg-cyan-600 text-white px-3 py-1 rounded hover:bg-cyan-700 transition-colors">
                        Book Session
                    </button>
                </div>

                <p className="text-gray-500 text-sm mt-1 text-center">{reviews}</p>
            </div>
        </div>
    )
}