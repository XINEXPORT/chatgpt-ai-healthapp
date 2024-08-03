import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Form from "./screens/Form/Form.jsx";
import ErrorPage from "./screens/ErrorPage.jsx";
import Conversation from "./screens/Conversation.jsx";
import Welcome from "./screens/Welcome.jsx";
import Tutorial from "./screens/Tutorial.jsx";
import Form2 from "./screens/Form2/Form2.jsx";
import Home from "./screens/Home/Home.jsx";
import Favorites from "./screens/Favorites/Favorites.jsx";

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
        element={<Conversation />}
      />
      <Route path="/chatgpt-ai-healthapp/form" element={<Form />} />
      <Route path="/chatgpt-ai-healthapp/form2" element={<Form2 />} />
      <Route path="/chatgpt-ai-healthapp/favorites" element={<Favorites />} />

    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
