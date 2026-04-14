import { createBrowserRouter } from "react-router-dom";
import MessagesPage from "../components/Message/Message";
import { LoginPage } from "../components/Login/LoginPage";
import { MainPage } from "../components/Main/Main";
import { FavoritesPage } from "../components/Favorites/FavoritePage";
import { BookSession } from "../components/BookSessions/BookSes";
import { SettingsPage } from "../components/Settings/SettingPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/messages",
    element: <MessagesPage />,
  },
  {
    path: "/chat",
    element: <MessagesPage />,
  },
  {
    path: "/favorites",
    element: <FavoritesPage />,
  },
  {
    path: "/book_session",
    element: <BookSession />,
  },

  {
    path: "/settings",
    element: <SettingsPage />,
  }
]);