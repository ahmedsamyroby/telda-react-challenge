import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import MoviesList from "../pages/MoviesList";
import MovieDetails from "../pages/MovieDetails";
import MovieListLayout from "../pages/MoviesList/layout";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <MovieListLayout />,
        children: [
          {
            index: true,
            element: <MoviesList />,
          },
        ],
      },
      {
        path: "/:id",
        element: <MovieDetails />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  }
]);

export default router;
