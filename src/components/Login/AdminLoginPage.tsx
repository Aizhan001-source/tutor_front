import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../../store/users/authStore";

const ADMIN_ROLE_ID = "596c4de3-eebc-46fd-833e-b5d4ba7ef796";

export const AdminLoginPage = () => {
  const navigate = useNavigate();

  const { login, isLoading, error } = useAuthStore(); 

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await login(email, password);

    const currentUser = useAuthStore.getState().user;

    if (currentUser?.role_id === ADMIN_ROLE_ID) {
      navigate("/admin");
    } else {
      navigate("/unauthorized"); // или "/" если хочешь
    }
  };

  return (
    <div className="w-full max-w-md">

      {/* Back */}
      <button
        onClick={() => navigate("/")}
        className="flex items-center gap-2 text-gray-300 hover:text-white mb-6 font-medium"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
          viewBox="0 0 24 24" fill="none" stroke="currentColor"
          strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m12 19-7-7 7-7" />
          <path d="M19 12H5" />
        </svg>
        Back to role selection
      </button>

      {/* Header */}
      <div className="text-center mb-8">
        <div className="flex items-center justify-center mb-4">
          <div className="bg-red-600 p-3 rounded-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
              viewBox="0 0 24 24" fill="none" stroke="white"
              strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" />
            </svg>
          </div>
        </div>

        <h1 className="text-3xl font-bold text-white mb-2">
          Admin Login
        </h1>
        <p className="text-gray-300">
          Secure access to admin panel
        </p>
      </div>

      {/* Form */}
      <div className="bg-white rounded-2xl shadow-xl p-8">
        <form onSubmit={onSubmit} className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              placeholder="admin@crammaster.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 outline-none"
              required
            />
          </div>

          {/* Error */}
          {error && (
            <div className="text-red-500 text-sm bg-red-50 p-3 rounded-lg">
              {error}
            </div>
          )}

          {/* Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-lg font-semibold transition disabled:opacity-50"
          >
            {isLoading ? "Loading..." : "Sign In"}
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          Admin access is restricted. Contact system administrator.
        </div>
      </div>
    </div>
  );
};