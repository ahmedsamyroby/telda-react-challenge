import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MoviesList from "../pages/MoviesList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <MoviesList />,
      },
    ],
  },
]);

export default router;
