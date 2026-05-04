import { BookOpen, Calendar, Clock } from "lucide-react";

export const StatsCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center gap-4">
          <div className="bg-indigo-100 p-3 rounded-lg">
            <BookOpen className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <p className="text-gray-600 text-sm">Total Courses</p>
            <p className="text-2xl font-bold">4</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center gap-4">
          <div className="bg-green-100 p-3 rounded-lg">
            <Calendar className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <p className="text-gray-600 text-sm">Upcoming Sessions</p>
            <p className="text-2xl font-bold">2</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md p-6">
        <div className="flex items-center gap-4">
          <div className="bg-purple-100 p-3 rounded-lg">
            <Clock className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <p className="text-gray-600 text-sm">Hours Completed</p>
            <p className="text-2xl font-bold">15</p>
          </div>
        </div>
      </div>
    </div>
  );
};