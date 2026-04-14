import { Navbar } from "../Main/ui/Navbar";

export const SettingsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <Navbar />

      <div className="max-w-4xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          Settings
        </h1>

        {/* PROFILE SECTION */}
        <div className="bg-white p-6 rounded-2xl shadow mb-6">
          <h2 className="text-lg font-semibold mb-4">Profile</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              className="border p-3 rounded-lg"
              placeholder="First name"
            />
            <input
              className="border p-3 rounded-lg"
              placeholder="Last name"
            />
            <input
              className="border p-3 rounded-lg md:col-span-2"
              placeholder="Email"
            />
          </div>
        </div>

        {/* PASSWORD */}
        <div className="bg-white p-6 rounded-2xl shadow mb-6">
          <h2 className="text-lg font-semibold mb-4">Password</h2>

          <div className="grid gap-4">
            <input
              type="password"
              className="border p-3 rounded-lg"
              placeholder="Current password"
            />
            <input
              type="password"
              className="border p-3 rounded-lg"
              placeholder="New password"
            />
          </div>
        </div>

        {/* NOTIFICATIONS */}
        <div className="bg-white p-6 rounded-2xl shadow mb-6">
          <h2 className="text-lg font-semibold mb-4">Notifications</h2>

          <label className="flex items-center gap-2">
            <input type="checkbox" />
            Email notifications
          </label>

          <label className="flex items-center gap-2 mt-2">
            <input type="checkbox" />
            Messages notifications
          </label>
        </div>

        {/* SAVE BUTTON */}
        <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition">
          Save changes
        </button>
      </div>
    </div>
  );
};