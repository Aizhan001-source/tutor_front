import { TutorLayout } from "../layout/TutorLayout";
import { StatCard } from "./ui/StatCard";
import { SessionCard } from "./ui/SessionCard";
import { CompletedCard } from "./ui/CompletedCard";

export const TutorProfil = () => {
  return (
    <TutorLayout>

      {/* Header */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold">My Courses</h1>
        <p className="text-gray-600">
          Track your learning progress and upcoming sessions
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-3 gap-6 mb-8">

        <StatCard
          title="Total Courses"
          value={4}
          color="bg-indigo-100 text-indigo-600"
          icon="📘"
        />

        <StatCard
          title="Upcoming Sessions"
          value={2}
          color="bg-green-100 text-green-600"
          icon="📅"
        />

        <StatCard
          title="Hours Completed"
          value={15}
          color="bg-purple-100 text-purple-600"
          icon="⏱"
        />

      </div>

      <h2 className="text-2xl font-semibold mb-4">
        Active Sessions
      </h2>

      <div className="space-y-4">
        <SessionCard
          title="Mathematics"
          status="Upcoming"
          teacher="Sarah Johnson"
          date="Feb 25, 2026"
          time="2:00 PM"
          duration={60}
          mode="online"
          image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
          actionLabel="View Details"
        />

        <SessionCard
          title="Physics"
          status="In Progress"
          teacher="Michael Chen"
          date="Feb 24, 2026"
          time="4:30 PM"
          duration={90}
          mode="online"
          image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
          actionLabel="Join Session"
        />
      </div>

      {/* Completed */}
      <h2 className="text-2xl font-semibold mt-10 mb-4">
        Completed Sessions
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        <CompletedCard
          subject="Chemistry"
          topic="Organic Chemistry - Reactions"
          teacher="Emily Rodriguez"
          date="Feb 20, 2026"
          time="10:00 AM"
        />

        <CompletedCard
          subject="Computer Science"
          topic="Python - Data Structures"
          teacher="David Kumar"
          date="Feb 18, 2026"
          time="3:00 PM"
        />
      </div>

    </TutorLayout>
  );
};