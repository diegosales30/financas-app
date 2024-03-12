import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { LandingPage } from "./routes/LandingPage";
import { InputDataProvider } from "./context/InputContext";



const router = createBrowserRouter([
  { path: "/", element: <LandingPage /> },
  { path: "/home", element: <App /> },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <InputDataProvider>
      <RouterProvider router={router} />
    </InputDataProvider>
  </React.StrictMode>
);
