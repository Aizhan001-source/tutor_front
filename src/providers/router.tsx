import { createBrowserRouter } from "react-router-dom";
import MessagesPage from "../components/Message/Message";
import { LoginPage } from "../components/Login/LoginPage";
import { MainPage } from "../components/Main/Main";
import { TutorIndex } from "../components/Tutor/Index";

export const router = createBrowserRouter([
  {
    path: "/chat",
    element: <MessagesPage />,
  },
  {
    path: "/messages",
    element: <MessagesPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/tutors/:id",
    element: <TutorIndex />,
  }
]);