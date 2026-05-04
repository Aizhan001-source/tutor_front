import { createBrowserRouter } from "react-router-dom";
import { LoginPage } from "../components/Login/LoginPage";
import { FavoritesPage } from "../components/Favorites/FavoritePage";
import { Payment } from "../components/Payments/Pay";
import { TutorIndex } from "../components/Tutor/Index";
import { Booking } from "../components/Booking/Book";
import { MainPage } from "../components/Main/Main";
import { ProtectedRoute } from "../components/protected/ProtectedRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <MainPage />
      </ProtectedRoute>
    ),
  },
  {
    path: "/booking/:id",
    element: <Booking />,
  },
  {
    path: "/payment",
    element: <Payment />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/favorites",
    element: <FavoritesPage />,
  },
  {
    path: "/tutors/:id",
    element: <TutorIndex />,
  },
]);