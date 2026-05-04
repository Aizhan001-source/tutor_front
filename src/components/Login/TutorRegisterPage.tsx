import { useState } from "react";
import {
  ArrowLeftIcon,
  BookOpenIcon,
  UserIcon,
  EnvelopeIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import { useNavigate } from "react-router-dom";
import { authApi } from "../../api/auth/authApi";

const TUTOR_ROLE_ID = "e27a6c3c-5147-4d4c-8b9f-b8b07fc244ee";

const TutorRegisterPage = () => {
  const navigate = useNavigate();

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    const parts = fullName.trim().split(" ");
    const first_name = parts[0] || "";
    const last_name = parts.slice(1).join(" ").trim() || "Unknown";

    try {
      await authApi.register({
        first_name,
        last_name,
        email,
        password,
        role_id: TUTOR_ROLE_ID,
      });

      setSuccess("Registration successful!");
      setTimeout(() => navigate("/login/tutor"), 1500);
    } catch (err: any) {
      setError(err?.response?.data?.detail || "Registration failed");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6 py-10 bg-gradient-to-br from-purple-50 to-purple-100">
      <div className="w-full max-w-xl">

        <button
          onClick={() => navigate("/login")}
          className="flex items-center gap-2 text-gray-600 hover:text-gray-900 mb-6 font-medium"
        >
          <ArrowLeftIcon className="w-5 h-5" />
          Back to role selection
        </button>

        <div className="text-center mb-8">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-purple-600 p-3 rounded-2xl">
              <BookOpenIcon className="w-8 h-8 text-white" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Tutor Registration
          </h1>
          <p className="text-gray-600">
            Create an account to start teaching
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-10">
          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <div className="relative">
                <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="John Doe"
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <EnvelopeIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <LockClosedIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                  required
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <LockClosedIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none"
                  required
                />
              </div>
            </div>

            {/* Terms */}
            <div className="flex items-start">
              <input type="checkbox" required className="mt-1" />
              <span className="ml-2 text-sm text-gray-600">
                I agree to Terms of Service
              </span>
            </div>

            {error && (
              <div className="text-red-500 text-sm bg-red-50 p-3 rounded-lg">
                {error}
              </div>
            )}

            {success && (
              <div className="text-green-600 text-sm bg-green-50 p-3 rounded-lg">
                {success}
              </div>
            )}

            <button
              type="submit"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-semibold"
            >
              Create Account
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{" "}
              <button
                onClick={() => navigate("/login/tutor")}
                className="text-purple-600 font-semibold"
              >
                Sign in
              </button>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default TutorRegisterPage;