// import { createBrowserRouter } from 'react-router-dom';
// import { LoginPage } from '../components/Login/LoginPage';
// import { MainPage } from '../components/Main/Main';
// import { BookSession } from '../components/BookSessions/BookSes';


// export const router = createBrowserRouter([
//   { path: '/login', element: <LoginPage /> },
//   { path: '/', element: <MainPage /> },
//   { path: '/book-session', element: < BookSession/> },
// ]);

import { createBrowserRouter } from "react-router-dom";
import MessagesPage from "../components/Message/Message";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MessagesPage />,
  },
  {
    path: "/messages",
    element: <MessagesPage />,
  },
]);