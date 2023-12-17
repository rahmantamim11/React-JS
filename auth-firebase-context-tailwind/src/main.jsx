import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./layout/Main";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import AuthProviders from "./components/providers/AuthProviders";
import Profile from "./components/Profile";
import Orders from "./components/Orders";
import PrivateRoutes from "./Routes/PrivateRoutes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: '/orders',
        element: <PrivateRoutes><Orders></Orders></PrivateRoutes>
      },
      {
        path: '/profile',
        element: <PrivateRoutes> <Profile></Profile> </PrivateRoutes>
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);
