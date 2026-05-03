import {
  ArrowLongRightIcon,
  BookOpenIcon,
  CalendarIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import { ChatBubbleLeftIcon, ClockIcon } from "@heroicons/react/24/solid";

interface TimeProps {
  date: string | null;
  setDate: (date: string) => void;

  time: string | null;
  setTime: (time: string) => void;

  duration: number;
  setDuration: (duration: number) => void;

  onProceed: () => void;
}

export const Time = ({
  date,
  setDate,
  time,
  setTime,
  duration,
  setDuration,
  onProceed,
}: TimeProps) => {
  const times = ["09:00 AM", "10:00 AM", "12:00 PM", "14:00 PM", "16:00 PM"];
  const durations = [
    { value: 30, label: "30 min", price: 23 },
    { value: 60, label: "1 hour", price: 45 },
    { value: 90, label: "1.5 hours", price: 68 },
    { value: 120, label: "2 hours", price: 90 },
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/20">
        <div className="p-8 sm:p-10">

          {/* TIME */}
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <ClockIcon className="w-6 h-6" />
            Select Time
          </h3>

          <div className="grid grid-cols-3 sm:grid-cols-5 gap-3 mb-8">
            {times.map((t) => (
              <button
                key={t}
                onClick={() => setTime(t)}
                className={`p-3 rounded-lg transition ${
                  time === t
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          {/* DURATION */}
          <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
            <BookOpenIcon className="w-6 h-6" />
            Session Duration
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
            {durations.map((d) => (
              <button
                key={d.value}
                onClick={() => setDuration(d.value)}
                className={`p-4 rounded-xl transition ${
                  duration === d.value
                    ? "bg-indigo-600 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                <div className="font-bold">{d.label}</div>
                <div className="text-sm opacity-70">${d.price}</div>
              </button>
            ))}
          </div>

          {/* SUMMARY */}
          <div className="bg-indigo-50 rounded-2xl p-4 mb-6">
            <div className="flex justify-between">
              <span>Time</span>
              <span>{time || "Not selected"}</span>
            </div>
            <div className="flex justify-between">
              <span>Duration</span>
              <span>{duration} min</span>
            </div>
          </div>

          {/* BUTTON */}
          <button
            onClick={onProceed}
            className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-xl font-semibold"
          >
            Proceed to Payment
            <ArrowLongRightIcon className="w-6 h-6" />
          </button>

        </div>
      </div>
    </div>
  );
};