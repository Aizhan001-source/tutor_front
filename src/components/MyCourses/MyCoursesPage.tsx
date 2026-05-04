import { StatsCards } from "../MyCourses/ui/StatsCards";
import { ActiveSessions } from "../MyCourses/ui/ActiveSessions";
import { CompletedSessions } from "../MyCourses/ui/CompletedSessions";
import { Navbar } from "../NavBar/NavBar";

export const MyCoursesPage = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Navbar */}
      <Navbar />

      {/* Page content */}
      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
            My Courses
          </h1>
          <p className="text-gray-600 text-lg">
            Track your learning progress and upcoming sessions
          </p>
        </div>

        <StatsCards />

        <ActiveSessions />

        <CompletedSessions />
      </main>
    </div>
  );
};