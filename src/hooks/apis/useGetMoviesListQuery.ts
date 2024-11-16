import { useQuery, keepPreviousData } from "@tanstack/react-query";
import axiosInstance from "../../services/AxiosService";
import { AxiosResponse } from "axios";
import TheMovieDBPaginatedResponse from "../../types/TheMovieDBPaginatedResponse";
import MovieSummary from "../../types/MovieSummary";

type MovieListResponse = Promise<
  AxiosResponse<TheMovieDBPaginatedResponse<MovieSummary>>
>;

function getMoviesList({
  queryKey,
}: {
  queryKey: (string | number)[];
}): MovieListResponse {
  // themoviedb search endpoint does not support empty queries
  // and the discover endpoint does not support queries
  // so we need to determine which endpoint to use based on the query
  const endpoint = queryKey[2] ? "/search/movie" : "/discover/movie";
  return axiosInstance.get(endpoint, {
    params: {
      page: queryKey[1],
      query: queryKey[2],
    },
  });
}

export default function useGetMoviesListQuery(page: number, movieName: string) {
  return useQuery({
    queryKey: ["movies-list", page, movieName],
    queryFn: getMoviesList,
    select: (data) => data.data,
    staleTime: 60 * 1000, // make the movies list stale for 60 seconds
    placeholderData: (previousData) => keepPreviousData(previousData),
  });
}
