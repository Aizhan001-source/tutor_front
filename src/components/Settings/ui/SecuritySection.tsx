export const SecuritySection = () => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center gap-3 mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600">
          <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/>
        </svg>
        <h2 className="text-xl font-semibold text-gray-900">Account Security</h2>
      </div>

      <div className="space-y-3">
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <p className="font-medium text-gray-900">Two-Factor Authentication</p>
            <p className="text-sm text-gray-600">Add an extra layer of security</p>
          </div>
          <button type="button" className="px-4 py-2 text-indigo-600 hover:bg-indigo-50 rounded-lg font-medium transition">
            Enable
          </button>
        </div>
        <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
          <div>
            <p className="font-medium text-gray-900">Active Sessions</p>
            <p className="text-sm text-gray-600">Manage your logged-in devices</p>
          </div>
          <button type="button" className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg font-medium transition">
            View
          </button>
        </div>
        <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg border border-red-200">
          <div>
            <p className="font-medium text-red-900">Delete Account</p>
            <p className="text-sm text-red-700">Permanently delete your account and all data</p>
          </div>
          <button type="button" className="px-4 py-2 text-red-600 hover:bg-red-100 rounded-lg font-medium transition">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};