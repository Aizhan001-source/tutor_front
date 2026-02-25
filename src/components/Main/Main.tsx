import { Navbar } from "../Main/ui/Navbar"
import { Filter } from "../Main/ui/Filter"
import { TutorCard } from "../Main/ui/TutorCard"

import tutor1 from "../../assets/tutor1.jpeg"
import { FaInstagram } from "react-icons/fa"
import { Soon } from "./ui/Soon"

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
                    <Soon/>
        </div>
    )
}
