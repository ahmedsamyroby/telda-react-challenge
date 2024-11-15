import { useParams } from "react-router-dom";
import useGetMovieDetailsQuery from "../../hooks/apis/useGetMovieDetailsQuery";
import {
  BACKDROP_BASE_URL,
  GENRE_DEFINITION_MAP,
  POSTER_BASE_URL,
} from "../../constants";
import Tag from "../../components/Tag";
import { useEffect } from "react";

export default function MovieDetails() {
  const { id } = useParams<{ id: string }>();

  const { data: movieDetails, isLoading } = useGetMovieDetailsQuery(Number(id));

  useEffect(() => {
    // scroll to the top because the backdrop image is fixed
    // because when navigating to a new movie details page
    // and the backdrop image is still loading
    // the page is scrolled to the bottom
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.title = movieDetails?.title ?? "Movie Details";
  }, [movieDetails]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className=" bg-secondary">
      <div className="w-full overflow-hidden fixed top-0 z-0 h-full">
        {movieDetails?.backdrop_path && (
          <img
            alt={movieDetails?.title}
            src={BACKDROP_BASE_URL + movieDetails.backdrop_path}
            className="w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent" />
      </div>
      <div className="relative z-20 px-24 flex items-end gap-4 pt-32 pb-4">
        <div className="aspect-[27/40] overflow-hidden h-max max-w-96 rounded-md shadow-lg">
          <img
            alt={movieDetails?.title + " poster"}
            src={POSTER_BASE_URL + (movieDetails?.poster_path ?? "")}
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-7xl font-semibold text-primary-typography">
          {movieDetails?.title}
        </h1>
      </div>
      <div className="relative bg-secondary w-full z-20 p-4 px-24 grid grid-cols-5 gap-12">
        <div className="col-span-4">
          <h2 className="text-3xl font-semibold text-accent">Overview</h2>
          <p className="mt-4 text-lg text-secondary-typography">
            {movieDetails?.overview}
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div>
            <h3 className="text-xl font-semibold text-accent mb-1">Genres</h3>
            <div className="flex gap-2 items-center justify-start flex-wrap">
              {movieDetails?.genres.map((genre) => (
                <Tag
                  key={genre.id}
                  color={GENRE_DEFINITION_MAP[genre.id]?.color ?? undefined} // handle unknown genre
                >
                  {genre.name}
                </Tag>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-accent">Release Date</h3>
            <p className="text-lg text-secondary-typography">
              {movieDetails?.release_date}
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-accent">Duration</h3>
            <p className="text-lg text-secondary-typography">
              {movieDetails?.runtime} minutes
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold text-accent">Rating</h3>
            <p className="text-lg text-secondary-typography">
              {movieDetails?.vote_average} / 10
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
