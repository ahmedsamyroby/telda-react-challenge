import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../../services/AxiosService";
import { AxiosResponse } from "axios";
import MovieDetails from "../../types/MovieDetails";

type MovieDetailsResponse = Promise<AxiosResponse<MovieDetails>>;

export default function useGetMovieDetailsQuery(id: number) {
  return useQuery({
    queryKey: ["movie", id],
    queryFn: (): MovieDetailsResponse => {
      return axiosInstance.get(`/movie/${id}`, {
        params: {
          append_to_response: "videos,credits",
        },
      });
    },
    select: (data) => data.data,
    staleTime: 5 * 60 * 1000, // make the data stale after 5 minutes
  });
}
