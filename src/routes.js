import React from "react";
import Home from "./pages/home/Home";
import Error from "./pages/not-found/NotFound";
import { useRoutes } from "react-router-dom";
import Header from './pages/header/Header';

export const Routes = () => {
  const PublicRoute = [
    {
      children: [
        { path: "/", element: <Home /> },
        { path: "/header", element: <Header /> },
        { path: "*", element: <Error /> },
      ],
    },
  ];

  return useRoutes(PublicRoute);
};
