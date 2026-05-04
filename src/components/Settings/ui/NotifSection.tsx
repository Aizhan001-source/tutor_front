interface Props {
  emailNotif: boolean;
  platformNotif: boolean;
  setEmailNotif: (v: boolean) => void;
  setPlatformNotif: (v: boolean) => void;
}

export const NotifSection = ({ emailNotif, platformNotif, setEmailNotif, setPlatformNotif }: Props) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <div className="flex items-center gap-3 mb-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600">
          <path d="M10.268 21a2 2 0 0 0 3.464 0"/><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"/>
        </svg>
        <h2 className="text-xl font-semibold text-gray-900">Notification Preferences</h2>
      </div>

      <div className="space-y-4">
        <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
          <div>
            <p className="font-medium text-gray-900">Email Notifications</p>
            <p className="text-sm text-gray-600">Receive updates via email</p>
          </div>
          <input
            type="checkbox"
            checked={emailNotif}
            onChange={(e) => setEmailNotif(e.target.checked)}
            className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 w-5 h-5"
          />
        </label>
        <label className="flex items-center justify-between p-4 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
          <div>
            <p className="font-medium text-gray-900">Platform Messages</p>
            <p className="text-sm text-gray-600">Receive messages from tutors/students</p>
          </div>
          <input
            type="checkbox"
            checked={platformNotif}
            onChange={(e) => setPlatformNotif(e.target.checked)}
            className="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 w-5 h-5"
          />
        </label>
      </div>
    </div>
  );
};