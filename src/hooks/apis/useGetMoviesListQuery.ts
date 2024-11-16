import { useQuery, keepPreviousData } from "@tanstack/react-query";
import axiosInstance from "../../services/AxiosService";
import { AxiosError, AxiosResponse } from "axios";
import TheMovieDBPaginatedResponse from "../../types/TheMovieDBPaginatedResponse";
import MovieSummary from "../../types/MovieSummary";

type MovieListResponse = Promise<
  AxiosResponse<TheMovieDBPaginatedResponse<MovieSummary>>
>;

function getMoviesList(page: number, movieName?: string): MovieListResponse {
  // themoviedb search endpoint does not support empty queries
  // and the discover endpoint does not support queries
  // so we need to determine which endpoint to use based on the query
  const endpoint = movieName ? "/search/movie" : "/discover/movie";
  return axiosInstance.get(endpoint, {
    params: {
      page,
      query: movieName,
    },
  });
}

export default function useGetMoviesListQuery(page: number, movieName: string) {
  return useQuery<
    AxiosResponse<TheMovieDBPaginatedResponse<MovieSummary>>,
    AxiosError,
    TheMovieDBPaginatedResponse<MovieSummary>
  >({
    queryKey: ["movies-list", page, movieName],
    queryFn: () => getMoviesList(page, movieName),
    select: (data) => data.data,
    staleTime: 60 * 1000, // make the movies list stale for 60 seconds
    placeholderData: (previousData) => keepPreviousData(previousData),
  });
}
