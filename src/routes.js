import React from "react";
import Home from "./pages/home/Home";
import Error from "./pages/not-found/NotFound";
import { useRoutes } from "react-router-dom";

export const Routes = () => {
  const PublicRoute = [
    {
      children: [
        { path: "/", element: <Home /> },
        { path: "*", element: <Error /> },
      ],
    },
  ];

  return useRoutes(PublicRoute);
};
