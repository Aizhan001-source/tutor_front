import { Navbar } from "./ui/Navbar.tsx"
import { Filter } from "./ui/Filter.tsx"
import { Text } from "./ui/Text.tsx"
import { TutorCard } from "./ui/TutorCard.tsx"

export const MainPage = () => {
    return (
        <div className="min-h-screen bg-cyan-200">
            
            <Navbar />
            <Text/>
            <Filter/>
            
            <div className="px-5 mt-6">
                <div className="grid grid-cols-3 gap-4">
                    <TutorCard
                        name="Sarah Johnson"
                        mainSubject="Mathematics"
                        rating="4.9"
                        otherSubjects={["Calculus", "Algebra", "+1 more"]}
                        experience="8 years"
                        online={true}
                        available="Available today"
                        price="$45/hour"
                        reviews="127 student reviews"
                        photo="tutor1.jpeg"
                    />
                    <TutorCard
                        name="Michael Chen"
                        mainSubject="Physics"
                        rating="4.7"
                        otherSubjects={["Mechanics", "Thermodynamics"]}
                        experience="5 years"
                        online={false}
                        available="Unavailable today"
                        price="$50/hour"
                        reviews="98 student reviews"
                        photo="tutor2.jpeg"
                    />
                    <TutorCard
                        name="Emily Rodriguez"
                        mainSubject="Chemistry"
                        rating="5"
                        otherSubjects={["Organic Chemistry", "MCAT Prep"]}
                        experience="12 years experience"
                        online={false}
                        available="Unavailable today"
                        price="$50/hour"
                        reviews="98 student reviews"
                        photo="tutor3.jpeg"
                    />
                    <TutorCard
                        name="John Doe"
                        mainSubject="Physics"
                        rating="4.7"
                        otherSubjects={["Mechanics", "Thermodynamics"]}
                        experience="5 years"
                        online={false}
                        available="Unavailable today"
                        price="$50/hour"
                        reviews="98 student reviews"
                        photo="tutor2.jpeg"
                    />
                    <TutorCard
                        name="John Doe"
                        mainSubject="Physics"
                        rating="4.7"
                        otherSubjects={["Mechanics", "Thermodynamics"]}
                        experience="5 years"
                        online={false}
                        available="Unavailable today"
                        price="$50/hour"
                        reviews="98 student reviews"
                        photo="tutor2.jpeg"
                    />
                    <TutorCard
                        name="John Doe"
                        mainSubject="Physics"
                        rating="4.7"
                        otherSubjects={["Mechanics", "Thermodynamics"]}
                        experience="5 years"
                        online={false}
                        available="Unavailable today"
                        price="$50/hour"
                        reviews="98 student reviews"
                        photo="tutor2.jpeg"
                    />
                    {/* и так далее для других учителей */}
                </div>
            </div>

        </div>
    )
}
