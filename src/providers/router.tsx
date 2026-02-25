import { createBrowserRouter } from 'react-router-dom';
import { LoginPage } from '../components/Login/LoginPage';
import { MainPage } from '../components/Main/Main';
import { BookSession } from '../components/BookSessions/BookSes';


export const router = createBrowserRouter([
  { path: '/login', element: <LoginPage /> },
  { path: '/', element: <MainPage /> },
  { path: '/book-session', element: < BookSession/> },
]);