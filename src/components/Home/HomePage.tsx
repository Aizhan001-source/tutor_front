import {NavBar} from './ui/NavBar.tsx';
import {SearchBar} from './ui/SearchBar.tsx';
import {TutorCard} from './ui/TutorCard.tsx';

export const HomePage = () => {
  return (
    <div className="bg-blue-50 min-h-screen">
        <div>
            <NavBar />
        </div>
        <div>
            <SearchBar />
        </div>
        <div>
            <TutorCard tutor={{
                name: "John Doe",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
                rating: 4.8,
                subject: "Mathematics",
                tags: ["Algebra", "Calculus"],
                moreCount: 2,
                experience: 5,
                location: "New York, NY",
                availability: "Today",
                price: 45,
                reviewsCount: 120
            }
            } />
        </div>
    </div>
    );
}; 