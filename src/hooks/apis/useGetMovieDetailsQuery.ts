import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../services/AxiosService";
import { AxiosError, AxiosResponse } from "axios";
import MovieDetails from "../../types/MovieDetails";

export default function useGetMovieDetailsQuery(id: number) {
  return useQuery<AxiosResponse<MovieDetails>, AxiosError, MovieDetails>({
    queryKey: ["movie", id],
    queryFn: () => {
      return axiosInstance.get(`/movie/${id}`, {
        params: {
          append_to_response: "credits",
        },
      });
    },
    select: (data) => data.data,
    staleTime: 5 * 60 * 1000, // make the data stale after 5 minutes
  });
}
