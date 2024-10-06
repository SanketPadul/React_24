import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "../Route/App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Bag from "../Route/bag.jsx";
import Home from "../Route/home.jsx";
import { Provider } from "react-redux";
import myntraStore from "../Store/index.js";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/bag", element: <Bag /> },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={myntraStore}>
      <RouterProvider router={router} />
    </Provider>
  </StrictMode>
);
