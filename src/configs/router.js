import Giphy from '../pages/Giphy';
import Welcome from '../pages/Welcome';
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
]);

