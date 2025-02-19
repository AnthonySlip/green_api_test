import { createBrowserRouter, Navigate } from "react-router-dom";
import { AUTH_URL, CHAT_URL } from "../../shared/consts/paths.ts";
import { AuthPage } from "../../pages/auth/AuthPage.tsx";
import { Chat } from "../../pages/chat/Chat.tsx";
import { Layout } from "../layout/Layout.tsx";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: AUTH_URL,
        element: <AuthPage />,
      },
      {
        path: CHAT_URL,
        element: <Chat />,
      },
      {
        path: "*",
        element: <Navigate to={`/${AUTH_URL}`} />,
      },
    ],
  },
]);
