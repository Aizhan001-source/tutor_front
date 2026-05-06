export const SessionCard = ({
  title,
  status,
  teacher,
  date,
  time,
  duration,
  mode,
  image,
  actionLabel,
}: any) => {
  return (
    <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition">
      <div className="p-6 flex flex-col md:flex-row justify-between gap-4">

        <div className="flex gap-4">
          <img src={image} className="w-16 h-16 rounded-full object-cover" />

          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-lg">{title}</h3>
              <span className="text-xs px-2 py-1 bg-blue-100 text-blue-700 rounded">
                {status}
              </span>
            </div>

            <p className="text-gray-600">{teacher}</p>

            <div className="text-sm text-gray-500">
              {date} • {time} • {duration} min • {mode}
            </div>
          </div>
        </div>

        <button className="px-6 py-2 bg-indigo-600 text-white rounded-lg">
          {actionLabel}
        </button>
      </div>
    </div>
  );
};