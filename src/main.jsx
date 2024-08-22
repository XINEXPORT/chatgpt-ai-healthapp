import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ErrorPage from "./screens/ErrorPage.jsx";
import Welcome from "./screens/Welcome.jsx";
import Tutorial from "./screens/Tutorial/Tutorial.jsx";
import Home from "./screens/Home/Home.jsx";
import Favorites from "./screens/Favorites/Favorites.jsx";
import ConversationTest from "./screens/ConversationTest.jsx";
import PatientInformation from "./screens/PatientInformation/PatientInformation.jsx";
import EditPatientInfo from "./screens/EditPatientInfo/EditPatientInfo.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/chatgpt-ai-healthapp/"
      element={<App />}
      errorElement={<ErrorPage />}
    >
      <Route index element={<Welcome />} />

      <Route path="/chatgpt-ai-healthapp/tutorial" element={<Tutorial />} />

      <Route path="/chatgpt-ai-healthapp/home" element={<Home />} />

      <Route
        path="/chatgpt-ai-healthapp/conversation"
        element={<ConversationTest />}
      />

      <Route
        path="/chatgpt-ai-healthapp/patient-info"
        element={<PatientInformation />}
      />

      <Route path="/chatgpt-ai-healthapp/favorites" element={<Favorites />} />

      <Route
        path="/chatgpt-ai-healthapp/edit-patient-info"
        element={<EditPatientInfo />}
      />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
