import { createBrowserRouter } from 'react-router-dom';
import { HomePage } from '../components/Home/HomePage';
import { RoleSelectionPage} from '../components/RoleSelection/RoleSelectionPage'
import { AdminDashboard } from '../components/AdminDashboard/AdminDashboard';
import { StudentPage } from '../components/Students/StudentsPage';
import { MyCoursesPage } from '../components/MyCourses/MyCoursesPage';
import { MainPage } from '../components/Main/Main';
import { StudentLoginPage } from "../components/Login/StudentLoginPage";
import { TutorLoginPage } from "../components/Login/TutorLoginPage";
import { AdminLoginPage } from "../components/Login/AdminLoginPage";
import StudentRegisterPage from "../components/Login/StudentRegisterPage";
import TutorRegisterPage from "../components/Login/TutorRegisterPage";
import { TutorProfil } from "../components/TutorProfil/TutorProfil"


export const router = createBrowserRouter([
  { path: '/', element: <RoleSelectionPage /> },
  { path: '/admin', element: <AdminDashboard /> },
  { path: '/students', element: <StudentPage /> },
  { path: '/my-courses', element: <MyCoursesPage /> },
  { path: '/home', element: <HomePage /> },
  { path: '/login/student', element: <StudentLoginPage /> },
  { path: '/main', element: <MainPage /> },
  { path: '/login/tutor', element: <TutorLoginPage /> },
  {
    path: "/login/admin",
    element: (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center p-4">
        <AdminLoginPage />
      </div>
    ),
  },
  { path: '/register/student', element: <StudentRegisterPage /> },
  { path: '/register/tutor', element: <TutorRegisterPage /> },
  { path: '/tutor_profil', element: <TutorProfil /> },
  // { path: '/register', element: <RegisterPage /> },
]);