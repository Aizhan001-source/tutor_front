import { CalendarIcon, CurrencyDollarIcon } from "@heroicons/react/24/outline";
import tutor1Image from "../../../assets/tutor1.jpeg";

export const Session = ({ setDate }: { setDate: (date: string) => void }) => {
  return (
    <div className="max-w-5xl mx-auto">
      <div className="mb-8 text-center">
        <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-3">
          Book Your Session
        </h1>
        <p className="text-gray-600 text-lg">
          Choose your preferred date and time
        </p>
      </div>

      <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-white/20">
        <div className="p-8 sm:p-10">
          
          {/* Tutor */}
          <div className="flex items-center gap-6 mb-8 pb-8 border-b border-gray-200">
            <img
              src={tutor1Image}
              className="w-24 h-24 rounded-2xl object-cover shadow-lg ring-4 ring-indigo-100"
            />

            <div className="flex-1">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Sarah Johnson
              </h2>

              <p className="text-indigo-600 font-medium text-lg mb-2">
                Mathematics
              </p>

              <div className="flex items-center gap-2 text-gray-700">
                <CurrencyDollarIcon className="w-6 h-6" />
                <span className="text-xl font-semibold">45</span>
                <span className="text-gray-500">/hour</span>
              </div>
            </div>
          </div>

          {/* Dates */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
              <CalendarIcon className="w-8 h-8" />
              Select Date
            </h3>

            <div className="grid grid-cols-7 gap-3">

              {[
                { day: "Thu", date: "2026-02-23", num: 23 },
                { day: "Fri", date: "2026-02-24", num: 24 },
                { day: "Sat", date: "2026-02-25", num: 25 },
                { day: "Sun", date: "2026-02-26", num: 26 },
                { day: "Mon", date: "2026-02-27", num: 27 },
                { day: "Tue", date: "2026-02-28", num: 28 },
                { day: "Wed", date: "2026-03-01", num: 1 }, // фикс
              ].map((d, i) => (
                <button
                  key={i}
                  onClick={() => setDate(d.date)}
                  className="p-4 rounded-xl text-center transition-all duration-200 bg-gray-50 hover:bg-gray-100 text-gray-700"
                >
                  <div className="text-xs font-medium mb-1 opacity-80">{d.day}</div>
                  <div className="text-xl font-bold">{d.num}</div>
                </button>
              ))}

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};