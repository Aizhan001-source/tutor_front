
export const OverviewContent = () => {
  return (
    <div className="p-6 space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-trending-up size-6 text-blue-600"
            >
              <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
              <polyline points="16 7 22 7 22 13" />
            </svg>
            <h3 className="font-semibold text-gray-900">Platform Growth</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-2">+24%</p>
          <p className="text-sm text-gray-600">New users this month</p>
        </div>

        <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-circle-alert size-6 text-amber-600"
            >
              <circle cx="12" cy="12" r="10" />
              <line x1="12" x2="12" y1="8" y2="12" />
              <line x1="12" x2="12.01" y1="16" y2="16" />
            </svg>
            <h3 className="font-semibold text-gray-900">Pending Actions</h3>
          </div>
          <p className="text-3xl font-bold text-gray-900 mb-2">7</p>
          <p className="text-sm text-gray-600">Tutor applications to review</p>
        </div>
      </div>

      <div className="bg-gray-50 rounded-lg p-6">
        <h3 className="font-semibold text-gray-900 mb-4">Recent Activity</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between py-2">
            <span className="text-gray-600">New student registered: Emma Wilson</span>
            <span className="text-sm text-gray-500">2 hours ago</span>
          </div>
          <div className="flex items-center justify-between py-2 border-t border-gray-200">
            <span className="text-gray-600">Payment received: $45.00</span>
            <span className="text-sm text-gray-500">5 hours ago</span>
          </div>
          <div className="flex items-center justify-between py-2 border-t border-gray-200">
            <span className="text-gray-600">New tutor application: David Kumar</span>
            <span className="text-sm text-gray-500">1 day ago</span>
          </div>
        </div>
      </div>
    </div>
  );
};