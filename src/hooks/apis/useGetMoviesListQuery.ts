import { useQuery, keepPreviousData } from "@tanstack/react-query";
import axiosInstance from "../../services/AxiosService";
import { AxiosResponse } from "axios";
import TheMovieDBPaginatedResponse from "../../types/TheMovieDBPaginatedResponse";
import MovieSummary from "../../types/MovieSummary";

type MovieListResponse = Promise<
  AxiosResponse<TheMovieDBPaginatedResponse<MovieSummary>>
>;

export default function useGetMoviesListQuery(page: number) {
  return useQuery({
    queryKey: ["movies-list", page],
    queryFn: (): MovieListResponse => {
      return axiosInstance.get("/discover/movie", {
        params: {
          page,
        },
      });
    },
    select: (data) => data.data,
    staleTime: 60 * 1000, // make the movies list stale for 60 seconds
    placeholderData: (previousData) => keepPreviousData(previousData),
  });
}
