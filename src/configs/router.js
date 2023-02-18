import Giphy from '../pages/Giphy';
import Welcome from '../pages/Welcome';
import NotFound from '../pages/NotFound';
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Welcome />,
  },
  {
    path: "/giphy",
    element: <Giphy />,
  },
  {
    path: "/*",
    element: <NotFound />,
  },
]);

