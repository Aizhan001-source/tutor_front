import { Calendar, Clock, Video, User } from "lucide-react";

type Props = {
  title: string;
  subject: string;
  status: "Upcoming" | "In Progress" | "Completed";
  teacher: string;
  date: string;
  time: string;
  duration: string;
  mode: "online" | "offline";
  image: string;
  actionText: string;
};

export const SessionCard = ({
  title,
  subject,
  status,
  teacher,
  date,
  time,
  duration,
  mode,
  image,
  actionText,
}: Props) => {
  const statusColor =
    status === "Upcoming"
      ? "bg-blue-100 text-blue-700"
      : status === "In Progress"
      ? "bg-green-100 text-green-700"
      : "bg-gray-100 text-gray-700";

  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden p-6">
      <div className="flex flex-col md:flex-row md:justify-between gap-4">
        <div className="flex gap-4 flex-1">
          <img src={image} className="w-16 h-16 rounded-full object-cover" />

          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-lg">{title}</h3>
              <span className={`px-2 py-1 text-xs rounded-full ${statusColor}`}>
                {status}
              </span>
            </div>

            <p className="text-gray-600">{subject}</p>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <User className="w-4 h-4" />
              {teacher}
            </div>
          </div>
        </div>

        <div className="text-sm text-gray-600 space-y-1">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {date}
          </div>

          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            {time} • {duration}
          </div>

          <div className="flex items-center gap-2">
            <Video className="w-4 h-4" />
            {mode}
          </div>
        </div>

        <button className="px-5 py-2 bg-indigo-600 text-white rounded-lg">
          {actionText}
        </button>
      </div>
    </div>
  );
};