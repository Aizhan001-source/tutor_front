export const CompletedCard = ({
  subject,
  topic,
  teacher,
  date,
  time,
}: any) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="font-semibold">{subject}</h3>
      <p className="text-gray-600 text-sm">{topic}</p>
      <p className="text-xs text-gray-500">{teacher}</p>

      <div className="flex justify-between mt-4 pt-4 border-t">
        <div className="text-sm text-gray-600">
          <p>{date}</p>
          <p>{time}</p>
        </div>

        <button className="text-indigo-600 text-sm">
          Leave Review
        </button>
      </div>
    </div>
  );
};