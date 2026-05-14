import { createRoot } from "react-dom/client";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./Topic 14 React Routing/Home";
import Profile from "./Topic 14 React Routing/Profile";
import Shop from "./Topic 14 React Routing/Shop";
import ProtectedRoute from "./Topic 14 React Routing/routes/ProtectedRoute";
import Order from "./Topic 14 React Routing/Order";
import ProductPage from "./Topic 14 React Routing/ProductPage";
import NotFound from "./Topic 14 React Routing/NotFound";
import Login from "./Topic 14 React Routing/Login";

// Routing configuration
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
          {
            path: "shop",
            element: <Shop />,
          },
          {
            path: "order",
            element: <Order />,
          },
        ],
      },
      {
        path: "products/:productId",
        element: <ProductPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />,
);
