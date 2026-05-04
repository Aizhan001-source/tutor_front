import { useState } from "react";
import {
  ArrowLeftIcon,
  BookOpenIcon,
  UserIcon,
  EnvelopeIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import { authApi } from "../../../api/users/authApi";

interface Props {
  onBack: () => void;
}

const RegisterForm = ({ onBack }: Props) => {
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

    const [first_name, ...rest] = fullName.split(" ");
    const last_name = rest.join(" ") || " ";

    try {
      await authApi.register({ first_name, last_name, email, password });
      setSuccess("Registration successful! You can sign in now.");
      setFullName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");

      // через 1.5 сек переключаемся на логин
      setTimeout(() => onBack(), 1500);
    } catch (err: any) {
      setError(err?.response?.data?.detail || "Registration failed");
    }
  };

  return (
    <div className="flex flex-col mt-3 bg-white rounded-2xl shadow-xl p-8 gap-3">

      {/* HEADER */}
      <div className="flex items-center gap-3 mb-2">
        <div className="bg-indigo-600 p-2 rounded-xl">
          <BookOpenIcon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-gray-900">Create Account</h2>
          <p className="text-sm text-gray-500">Start your learning journey</p>
        </div>
      </div>

      <form className="flex flex-col gap-4" onSubmit={handleSubmit}>

        {/* FULL NAME */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <div className="relative">
            <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              type="text"
              placeholder="John Doe"
              className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            />
          </div>
        </div>

        {/* EMAIL */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <div className="relative">
            <EnvelopeIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="you@example.com"
              className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            />
          </div>
        </div>

        {/* PASSWORD */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <div className="relative">
            <LockClosedIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="••••••••"
              className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            />
          </div>
        </div>

        {/* CONFIRM PASSWORD */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Confirm Password
          </label>
          <div className="relative">
            <LockClosedIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              placeholder="••••••••"
              className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 outline-none"
              required
            />
          </div>
        </div>

        {/* ERROR / SUCCESS */}
        {error && (
          <div className="text-red-500 text-sm bg-red-50 p-2 rounded">{error}</div>
        )}
        {success && (
          <div className="text-green-600 text-sm bg-green-50 p-2 rounded">{success}</div>
        )}

        {/* SUBMIT */}
        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-lg font-semibold transition"
        >
          Create Account
        </button>
      </form>

      {/* FOOTER */}
      <div className="mt-2 text-center">
        <p className="text-gray-600">
          Already have an account?{" "}
          <button
            type="button"
            onClick={onBack}
            className="text-indigo-600 hover:text-indigo-700 font-semibold"
          >
            Sign In
          </button>
        </p>
      </div>

      {/* BACK */}
      <button
        type="button"
        onClick={onBack}
        className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 mx-auto mt-1"
      >
        <ArrowLeftIcon className="w-4 h-4" />
        Back to login
      </button>
    </div>
  );
};

export default RegisterForm;