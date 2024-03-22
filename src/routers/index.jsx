import { createBrowserRouter } from "react-router-dom";
import RouteLayout from "../layouts/RouteLayout";
import HomePage from "../views/HomePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RouteLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
    ],
  },
]);

export default router;
