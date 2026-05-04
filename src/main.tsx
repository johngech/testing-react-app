import axios from "axios";
import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import routes from "./routes";

axios.defaults.baseURL = "http://localhost:3000";

const router = createBrowserRouter(routes);

const rootElement = document.getElementById("root");

if (!rootElement) throw new Error("Root element not found!!");

createRoot(rootElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
