import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Form from "./screens/Form.jsx";
import ErrorPage from "./screens/ErrorPage.jsx";
import Conversation from "./screens/Conversation.jsx";
import Welcome from "./screens/Welcome.jsx";
import Tutorial from "./screens/Tutorial.jsx";
import Form2 from "./screens/Form2.jsx";
import Home from "./screens/Home.jsx";
import ConversationTest from "./screens/ConversationTest.jsx";
import { CSSTransition, TransitionGroup } from "react-transition-group";

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

      <Route path="/chatgpt-ai-healthapp/conversation" element={<ConversationTest />} />
      
      <Route path="/chatgpt-ai-healthapp/form" element={<Form />} />

      <Route path="/chatgpt-ai-healthapp/form2" element={<Form2 />} />
    </Route>,
  ),
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
