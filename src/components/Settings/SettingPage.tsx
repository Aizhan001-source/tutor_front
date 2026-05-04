import { useState } from "react";
import { Navbar } from "../Main/ui/Navbar";
import { useAuthStore } from "../../store/users/authStore";
import { ProfileSection } from "./ui/ProfileSection";
import { PasswordSection } from "./ui/PasswordSection";
import { NotifSection } from "./ui/NotifSection";
import { LangSection } from "./ui/LangSection";
import { SecuritySection } from "./ui/SecuritySection";

export const SettingsPage = () => {
  const { user } = useAuthStore();

  const [fullName, setFullName] = useState(
    user ? `${user.first_name} ${user.last_name}` : ""
  );
  const [email, setEmail] = useState(user?.email || "");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [emailNotif, setEmailNotif] = useState(true);
  const [platformNotif, setPlatformNotif] = useState(true);
  const [language, setLanguage] = useState("en");
  const [theme, setTheme] = useState("light");
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess("Changes saved successfully!");
    setTimeout(() => setSuccess(null), 3000);
  };

  return (
    <div className="min-h-screen bg-slate-100">
      <Navbar />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">Settings</h1>
          <p className="text-gray-600 text-lg">Manage your account preferences and security</p>
        </div>

        {success && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 text-green-700 rounded-xl font-medium">
            {success}
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <ProfileSection
            fullName={fullName}
            email={email}
            setFullName={setFullName}
            setEmail={setEmail}
          />
          <PasswordSection
            currentPassword={currentPassword}
            newPassword={newPassword}
            confirmPassword={confirmPassword}
            setCurrentPassword={setCurrentPassword}
            setNewPassword={setNewPassword}
            setConfirmPassword={setConfirmPassword}
          />
          <NotifSection
            emailNotif={emailNotif}
            platformNotif={platformNotif}
            setEmailNotif={setEmailNotif}
            setPlatformNotif={setPlatformNotif}
          />
          <LangSection
            language={language}
            theme={theme}
            setLanguage={setLanguage}
            setTheme={setTheme}
          />
          <SecuritySection />

          <div className="flex gap-4">
            <button
              type="submit"
              className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition shadow-lg hover:shadow-xl"
            >
              Save Changes
            </button>
            <button
              type="button"
              className="px-8 py-3 border border-gray-300 hover:bg-gray-50 text-gray-700 rounded-lg font-semibold transition"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};