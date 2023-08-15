import React from "react";
import ReactDOM from "react-dom/client";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/appartements",
    element: <h1>Appartemment test</h1>,
  },
  {
    path: "/about",
    element: <h1>A Propos test</h1>,
  },
  {
    path: "/404",
    element: <h1>404 ERREUR test</h1>,
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);