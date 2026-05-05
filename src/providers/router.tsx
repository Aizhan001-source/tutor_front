import { createBrowserRouter } from "react-router-dom";
import MessagesPage from "../components/Message/Message";
import { LoginPage } from "../components/Login/LoginPage";
import { MainPage } from "../components/Main/Main";
import { TutorIndex } from "../components/Tutor/Index";
import { StudentLoginPage } from "../components/Login/StudentLoginPage";
import { TutorLoginPage } from "../components/Login/TutorLoginPage";
import { AdminLoginPage } from "../components/Login/AdminLoginPage";
import StudentRegisterPage from "../components/Login/StudentRegisterPage";
import TutorRegisterPage from "../components/Login/TutorRegisterPage";
import { SettingsPage } from "../components/Settings/SettingPage";
import { ScheduleIndex } from "../components/Schedule/ScheduleIndex";

export const router = createBrowserRouter([
  { path: "/", element: <MainPage /> },
  { path: "/chat", element: <MessagesPage /> },
  { path: "/messages", element: <MessagesPage /> },
  { path: "/login", element: <LoginPage /> },
  {
    path: "/login/student",
    element: (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
        <StudentLoginPage />
      </div>
    ),
  },
  {
    path: "/login/tutor",
    element: (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center p-4">
        <TutorLoginPage />
      </div>
    ),
  },
  {
    path: "/login/admin",
    element: (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <AdminLoginPage />
      </div>
    ),
  },
  { path: "/register/student", element: <StudentRegisterPage /> },
  { path: "/register/tutor", element: <TutorRegisterPage /> },
  { path: "/tutors/:id", element: <TutorIndex /> },
  { path: "/settings", element: <SettingsPage /> },
  { path: "/schedule", element: <ScheduleIndex /> },
]);