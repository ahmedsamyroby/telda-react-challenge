import { useEffect, useState } from "react";
import Pagination from "../../components/Pagination";
import { IMAGE_BASE_URL } from "../../constants";
import useGetMoviesListQuery from "../../hooks/apis/useGetMoviesListQuery";
import MovieCard, { MovieCardSkeleton } from "./components/MovieCard";
import { CircleAlert } from "lucide-react";
import SearchBar from "./components/SearchBar";

const PAGE_SIZE = 20;
const MAX_PAGES = 500; // TheMovieDB API only allows up to 500 pages

export default function MoviesList() {
  const [movieName, setMovieName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const {
    data: moviesList,
    isLoading,
    isError,
    error,
  } = useGetMoviesListQuery(currentPage, movieName);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [movieName]);

  if (isError)
    return (
      <div className="text-red-600 font-bold text-2xl flex flex-col justify-center items-center gap-2">
        <CircleAlert size={48} />
        {error ? error.message : "Something Went Wrong"}
      </div>
    );

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="w-full flex justify-center items-center py-3 bg-secondary">
        <SearchBar setMovieName={setMovieName} />
      </div>
      <div className="max-w-[100rem] w-full">
        <h1 className="text-5xl text-accent font-bold text-center mt-8">
          {movieName ? `Search Results for "${movieName}"` : "Movies"}
        </h1>
        <div className="flex flex-col gap-12 w-full p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {isLoading
              ? Array.from({ length: PAGE_SIZE }).map((_, idx) => (
                  <MovieCardSkeleton key={idx} />
                ))
              : (moviesList?.results ?? []).map((movie) => (
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
              currentPage={currentPage}
              totalPages={Math.min(moviesList?.total_pages || 0, MAX_PAGES)}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
