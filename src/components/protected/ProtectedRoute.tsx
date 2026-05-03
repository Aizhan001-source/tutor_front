import { Navigate } from "react-router-dom";
import { useAuthStore } from "../../store/authStore";

export const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const token = useAuthStore((state) => state.token);

  // 🔥 localStorage fallback (маңызды fix)
  const savedToken = localStorage.getItem("token");

  if (!token && !savedToken) {
    return <Navigate to="/login" replace />;
  }

  return children;
};