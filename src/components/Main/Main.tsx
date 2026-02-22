import { Navbar } from "../Main/ui/Navbar"
import { Filter } from "../Main/ui/Filter"
import { TutorCard } from "../Main/ui/TutorCard"

import tutor1 from "../../assets/tutor1.jpeg"
import { FaInstagram } from "react-icons/fa"

const tutors = [
  {
    id: 1,
    image: tutor1,
    name: "Sarah Johnson",
    subject: "Mathematics",
    rating: 4.9,
    subjects: ["Calculus", "Algebra", "Geometry"],
    experience: "8 years experience",
    format: "Online",
    availability: "Available today",
    price: 45,
    reviewsCount: 127,
  },
  {
    id: 2,
    image: tutor1,
    name: "Michael Chen",
    subject: "Physics",
    rating: 4.7,
    subjects: ["Mechanics", "Thermodynamics"],
    experience: "5 years experience",
    format: "Offline",
    availability: "Unavailable today",
    price: 50,
    reviewsCount: 98,
  },
  {
    id: 3,
    image: tutor1,
    name: "Sarah Johnson",
    subject: "Mathematics",
    rating: 4.9,
    subjects: ["Calculus", "Algebra", "Geometry"],
    experience: "8 years experience",
    format: "Online",
    availability: "Available today",
    price: 45,
    reviewsCount: 127,
  },
  {
    id: 4,
    image: tutor1,
    name: "Michael Chen",
    subject: "Physics",
    rating: 4.7,
    subjects: ["Mechanics", "Thermodynamics"],
    experience: "5 years experience",
    format: "Offline",
    availability: "Unavailable today",
    price: 50,
    reviewsCount: 98,
  },
  {
    id: 5,
    image: tutor1,
    name: "Sarah Johnson",
    subject: "Mathematics",
    rating: 4.9,
    subjects: ["Calculus", "Algebra", "Geometry"],
    experience: "8 years experience",
    format: "Online",
    availability: "Available today",
    price: 45,
    reviewsCount: 127,
  },
  {
    id: 6,
    image: tutor1,
    name: "Michael Chen",
    subject: "Physics",
    rating: 4.7,
    subjects: ["Mechanics", "Thermodynamics"],
    experience: "5 years experience",
    format: "Offline",
    availability: "Unavailable today",
    price: 50,
    reviewsCount: 98,
  },
]

export const MainPage=() => {
    return(
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 px-4 sm:px-6 lg:px-8 py-8">
            <Navbar/>
            <Filter/>
            <div className="max-w-7xl mx-auto">
                <div className="mb-6 ">
                    <span className="flex gap-1 text-gray-600">
                        Showing
                        <span className="font-semibold">
                            6
                        </span>
                        tutors <FaInstagram className="w-5 h-5 text-pink-700" />
                    </span>
                </div>
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 cols-2 cols-1 gap-6">
                    {
                        tutors.map((tutor) => (
                            <TutorCard key={tutor.id} {...tutor} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}






















// import { Navbar } from "./ui/Navbar.tsx"
// import { Filter } from "./ui/Filter.tsx"
// import { Text } from "./ui/Text.tsx"
// import { TutorCard } from "./ui/TutorCard.tsx"

// export const MainPage = () => {
//     return (
//         <div className="min-h-screen bg-cyan-200">
            
//             <Navbar />
//             <Text/>
//             <Filter/>
            
//             <div className="px-5 mt-6">
//                 <div className="grid grid-cols-3 gap-4">
//                     <TutorCard
//                         name="Sarah Johnson"
//                         mainSubject="Mathematics"
//                         rating="4.9"
//                         otherSubjects={["Calculus", "Algebra", "+1 more"]}
//                         experience="8 years"
//                         online={true}
//                         available="Available today"
//                         price="$45/hour"
//                         reviews="127 student reviews"
//                         photo="tutor1.jpeg"
//                     />
//                     <TutorCard
//                         name="Michael Chen"
//                         mainSubject="Physics"
//                         rating="4.7"
//                         otherSubjects={["Mechanics", "Thermodynamics"]}
//                         experience="5 years"
//                         online={false}
//                         available="Unavailable today"
//                         price="$50/hour"
//                         reviews="98 student reviews"
//                         photo="tutor2.jpeg"
//                     />
//                     <TutorCard
//                         name="Emily Rodriguez"
//                         mainSubject="Chemistry"
//                         rating="5"
//                         otherSubjects={["Organic Chemistry", "MCAT Prep"]}
//                         experience="12 years experience"
//                         online={false}
//                         available="Unavailable today"
//                         price="$50/hour"
//                         reviews="98 student reviews"
//                         photo="tutor3.jpeg"
//                     />
//                     <TutorCard
//                         name="John Doe"
//                         mainSubject="Physics"
//                         rating="4.7"
//                         otherSubjects={["Mechanics", "Thermodynamics"]}
//                         experience="5 years"
//                         online={false}
//                         available="Unavailable today"
//                         price="$50/hour"
//                         reviews="98 student reviews"
//                         photo="tutor2.jpeg"
//                     />
//                     <TutorCard
//                         name="John Doe"
//                         mainSubject="Physics"
//                         rating="4.7"
//                         otherSubjects={["Mechanics", "Thermodynamics"]}
//                         experience="5 years"
//                         online={false}
//                         available="Unavailable today"
//                         price="$50/hour"
//                         reviews="98 student reviews"
//                         photo="tutor2.jpeg"
//                     />
//                     <TutorCard
//                         name="John Doe"
//                         mainSubject="Physics"
//                         rating="4.7"
//                         otherSubjects={["Mechanics", "Thermodynamics"]}
//                         experience="5 years"
//                         online={false}
//                         available="Unavailable today"
//                         price="$50/hour"
//                         reviews="98 student reviews"
//                         photo="tutor2.jpeg"
//                     />
//                     {/* и так далее для других учителей */}
//                 </div>
//             </div>

//         </div>
//     )
// }
