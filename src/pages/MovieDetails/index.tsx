import { useParams } from "react-router-dom";
import useGetMovieDetailsQuery from "../../hooks/apis/useGetMovieDetailsQuery";
import {
  BACKDROP_BASE_URL,
  GENRE_DEFINITION_MAP,
  POSTER_BASE_URL,
} from "../../constants";
import Tag from "../../components/Tag";
import { useEffect } from "react";
import CastCard from "./components/CastCard";
import { transformMinutesToHours } from "../../utils";

export default function MovieDetails() {
  const { id } = useParams<{ id: string }>();

  const { data: movieDetails, isLoading } = useGetMovieDetailsQuery(Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.title = movieDetails?.title ?? "Movie Details";
  }, [movieDetails]);

  if (isLoading) return <div>Loading...</div>;

  return (
    <div className="bg-secondary">
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

      <div className="relative z-20 px-16 xl:px-24 flex flex-col xl:flex-row items-center xl:items-end gap-4 pt-32 pb-4">
        <div className="aspect-[27/40] overflow-hidden h-max max-w-80 min-w-40 sm:min-w-60 lg:min-w-80 rounded-md shadow-lg">
          <img
            alt={movieDetails?.title}
            src={POSTER_BASE_URL + (movieDetails?.poster_path ?? "")}
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-3xl md:text-5xl xl:text-7xl font-semibold text-primary-typography text-center xl:text-start">
          {movieDetails?.title}
        </h1>
      </div>

      <div className="relative bg-secondary w-full z-20 p-4 md:p-7 lg:py-9 lg:px-24 grid grid-cols-1 xl:grid-cols-5 gap-8 md:gap-12">
        <div className="xl:col-span-4 flex flex-col gap-8 md:gap-16">
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-accent mb-4">
              Overview
            </h2>
            <p className="text-base sm:text-lg text-secondary-typography">
              {movieDetails?.overview}
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-accent mb-4">
              Casts
            </h2>
            <div className="flex gap-4 mt-4 overflow-x-auto snap-x md:snap-none">
              {movieDetails?.credits.cast.map((cast) => (
                <CastCard
                  key={cast.cast_id}
                  image={cast.profile_path}
                  name={cast.name}
                  character={cast.character}
                />
              ))}
            </div>
          </section>
        </div>

        <div className="flex flex-col items-center xl:items-start text-center xl:text-start gap-4">
          <section>
            <h3 className="text-lg sm:text-xl font-semibold text-accent mb-1">
              Genres
            </h3>
            <div className="flex gap-2 items-center justify-center xl:justify-start flex-wrap">
              {movieDetails?.genres.map((genre) => (
                <Tag
                  key={genre.id}
                  color={GENRE_DEFINITION_MAP[genre.id]?.color ?? undefined} // handle unknown genre
                >
                  {genre.name}
                </Tag>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-lg sm:text-xl font-semibold text-accent">
              Release Date
            </h3>
            <p className="text-base sm:text-lg text-secondary-typography">
              {movieDetails?.release_date?.split("-").reverse().join("-") || // display it in DD-MM-YYYY format as it's the superior date format
                "TBD"}
            </p>
          </section>

          <section>
            <h3 className="text-lg sm:text-xl font-semibold text-accent">
              Duration
            </h3>
            <p className="text-base sm:text-lg text-secondary-typography">
              {transformMinutesToHours(movieDetails?.runtime)}
            </p>
          </section>

          <section>
            <h3 className="text-lg sm:text-xl font-semibold text-accent">
              Rating
            </h3>
            <p className="text-base sm:text-lg text-secondary-typography">
              {movieDetails?.vote_average || 0} / 10
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
