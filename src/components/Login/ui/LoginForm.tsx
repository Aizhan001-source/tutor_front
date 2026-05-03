import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/outline";
import { useAuthStore } from "../../../store/authStore";

export const LoginForm = () => {
  const navigate = useNavigate();
  const { login, isLoading, error } = useAuthStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const success = await login(email, password);

    if (success) {
      setTimeout(() => {
        navigate("/");
      }, 50);
    }
  };

  return (
    <form onSubmit={onSubmit} className="flex flex-col mt-3 bg-white rounded-2xl shadow-xl p-8 gap-3">
      <h2 className="text-2xl font-semibold">Welcome Back</h2>

      <div className="relative">
        <EnvelopeIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-3 pl-10 w-full rounded-lg"
          placeholder="email"
        />
      </div>

      <div className="relative">
        <LockClosedIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2" />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-3 pl-10 w-full rounded-lg"
          placeholder="password"
        />
      </div>

      {error && <p className="text-red-500">{error}</p>}

      <button
        type="submit"
        className="bg-indigo-600 text-white p-3 rounded-lg"
      >
        {isLoading ? "Loading..." : "Login"}
      </button>
    </form>
  );
};