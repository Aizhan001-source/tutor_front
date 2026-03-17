import { createBrowserRouter } from 'react-router-dom';
// import { HomePage } from '../components/Home/HomePage';
// import { LoginPage } from '../components/Login/LoginPage.tsx';
import { RoleSelectionPage} from '../components/RoleSelection/RoleSelectionPage'
import { AdminlogPage } from '../components/AdminLogin/AdminlogPage';
import { AdminDashboard } from '../components/AdminDashboard/AdminDashboard';
import { StudentPage } from '../components/Students/StudentsPage';

export const router = createBrowserRouter([
  { path: '/', element: <RoleSelectionPage /> },
  { path: '/adminlogin', element: <AdminlogPage /> },
  { path: '/admin', element: <AdminDashboard /> },
  { path: '/students', element: <StudentPage /> },
  // { path: '/login', element: <LoginPage /> },
  // { path: '/home', element: <HomePage /> },
//   { path: '/register', element: <RegisterPage /> },

//   { path: '/bikehome', element: <BikeHomePage /> },
]);