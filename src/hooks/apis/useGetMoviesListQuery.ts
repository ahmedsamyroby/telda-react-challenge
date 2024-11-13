import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../services/AxiosService";
import { AxiosResponse } from "axios";
import TheMovieDBResponse from "../../types/TheMovieDBResponse";
import MovieSummary from "../../types/MovieSummary";

type MovieListResponse = Promise<
  AxiosResponse<TheMovieDBResponse<MovieSummary>>
>;

export default function useGetMoviesListQuery() {
  return useQuery({
    queryKey: ["movies-list"],
    queryFn: (): MovieListResponse => {
      return axiosInstance.get("/discover/movie");
    },
    select: (data) => data.data,
    staleTime: 60 * 1000, // make the movies list stale for 60 seconds
  });
}
