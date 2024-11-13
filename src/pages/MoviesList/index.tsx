import { useEffect } from "react";
import Pagination from "../../components/Pagination";
import { IMAGE_BASE_URL } from "../../constants";
import useGetMoviesListQuery from "../../hooks/apis/useGetMoviesListQuery";
import MovieCard, { MovieCardSkeleton } from "./components/MovieCard";
import { CircleAlert } from "lucide-react";
import { useSearchParams } from "react-router-dom";

const PAGE_SIZE = 20;

export default function MoviesList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentPage = Number(searchParams.get("page"));

  const {
    data: moviesList,
    isLoading,
    isError,
    error,
  } = useGetMoviesListQuery(currentPage);

  const handlePageChange = (page: number) => {
    setSearchParams({ page: page.toString() });
  };

  useEffect(() => {
    if (!searchParams.get("page")) setSearchParams({ page: "1" });
  }, [searchParams, setSearchParams]);

  if (isError)
    return (
      <div className="text-red-600 font-bold text-2xl flex flex-col justify-center items-center gap-2 h-screen">
        <CircleAlert size={48} />
        {error ? error.message : "Something Went Wrong"}
      </div>
    );

  return (
    <div className="flex flex-col gap-12 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {isLoading
          ? Array.from({ length: PAGE_SIZE }).map((_, idx) => (
              <MovieCardSkeleton key={idx} />
            ))
          : moviesList?.results.map((movie) => (
              <MovieCard
                key={movie.id}
                id={movie.id}
                image={IMAGE_BASE_URL + movie.poster_path}
                title={movie.title}
                releaseDate={movie.release_date}
              />
            ))}
      </div>
      <div className="flex items-center justify-center">
        <Pagination
          pageSize={PAGE_SIZE}
          currentPage={currentPage}
          totalItems={moviesList?.total_results ?? 0}
          onChange={handlePageChange}
        />
      </div>
    </div>
  );
}
