// src/index.js or src/index.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import PatientForm from "./screens/PatientForm.jsx";
import ErrorPage from "./screens/ErrorPage.jsx";
import Conversation from "./screens/Conversation.jsx";
import Welcome from "./screens/Welcome.jsx";
import Tutorial from "./screens/Tutorial.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/chatgpt-ai-healthapp/"
      element={<App />}
      errorElement={<ErrorPage />}
    >
      <Route index element={<Welcome />} />

      <Route path="/chatgpt-ai-healthapp/tutorial" element={<Tutorial/>} />

      <Route
        path="/chatgpt-ai-healthapp/conversation"
        element={<Conversation />}
      />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
