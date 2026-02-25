import { createBrowserRouter } from 'react-router-dom';
// import { HomePage } from '../components/Home/HomePage';
// import { LoginPage } from '../components/Login/LoginPage.tsx';
import { WelcomePage } from '../components/Welcome/WelcomePage.tsx';


export const router = createBrowserRouter([
  { path: '/', element: <WelcomePage /> },
  // { path: '/login', element: <LoginPage /> },
  // { path: '/home', element: <HomePage /> },
//   { path: '/register', element: <RegisterPage /> },

//   { path: '/bikehome', element: <BikeHomePage /> },
]);