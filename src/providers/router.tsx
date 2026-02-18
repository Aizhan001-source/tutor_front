import { createBrowserRouter } from 'react-router-dom';
import { LoginPage } from '../components/Login/LoginPage';
import { MainPage } from '../components/Main/Main';


export const router = createBrowserRouter([
  { path: '/login', element: <LoginPage /> },
  { path: '/', element: <MainPage /> },
]);