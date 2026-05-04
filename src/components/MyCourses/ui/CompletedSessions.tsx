export const CompletedSessions = () => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Completed Sessions</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="font-semibold">Chemistry</h3>
          <p className="text-sm text-gray-600">
            Organic Chemistry - Reactions
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md">
          <h3 className="font-semibold">Computer Science</h3>
          <p className="text-sm text-gray-600">
            Python - Data Structures
          </p>
        </div>
      </div>
    </div>
  );
};