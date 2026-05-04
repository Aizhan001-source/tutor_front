import { SessionCard } from "./SessionCard";

export const ActiveSessions = () => {
  return (
    <div className="mb-8">
      <h2 className="text-2xl font-semibold mb-4">Active Sessions</h2>

      <div className="space-y-4">
        <SessionCard
          title="Mathematics"
          subject="Calculus - Integration Techniques"
          status="Upcoming"
          teacher="Sarah Johnson"
          date="Feb 25, 2026"
          time="2:00 PM"
          duration="60 min"
          mode="online"
          image="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400"
          actionText="View Details"
        />

        <SessionCard
          title="Physics"
          subject="Mechanics - Newton's Laws"
          status="In Progress"
          teacher="Michael Chen"
          date="Feb 24, 2026"
          time="4:30 PM"
          duration="90 min"
          mode="online"
          image="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400"
          actionText="Join Session"
        />
      </div>
    </div>
  );
};