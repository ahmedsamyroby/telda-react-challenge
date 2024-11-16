import { useParams } from "react-router-dom";
import useGetMovieDetailsQuery from "../../hooks/apis/useGetMovieDetailsQuery";
import {
  BACKDROP_BASE_URL,
  GENRE_DEFINITION_MAP,
  IMAGE_BASE_URL,
} from "../../constants";
import Tag, { TagSkeleton } from "../../components/Tag";
import { useEffect } from "react";
import CastCard, { CastCardSkeleton } from "./components/CastCard";
import { transformDateFormat, transformMinutesToHours } from "../../utils";

export default function MovieDetails() {
  const { id } = useParams<{ id: string }>();

  const { data: movieDetails, isLoading } = useGetMovieDetailsQuery(Number(id));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    document.title = movieDetails?.title ?? "Movie Details";
  }, [movieDetails]);

  if (isLoading) return <MovieDetailsSkeleton />;

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
            src={IMAGE_BASE_URL + (movieDetails?.poster_path ?? "")}
            className="w-full h-full object-cover"
          />
        </div>
        <h1 className="text-3xl md:text-5xl xl:text-7xl font-semibold text-primary-typography text-center xl:text-start">
          {movieDetails?.title}
        </h1>
      </div>

      <div className="relative bg-secondary w-full z-20 p-4 md:p-7 lg:py-9 lg:px-24 grid grid-cols-1 xl:grid-cols-5 gap-8 md:gap-12">
        <div className="xl:col-span-4 flex flex-col gap-8 md:gap-16 order-2 xl:order-1">
          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-accent mb-4">
              Overview
            </h2>
            <p className="text-base sm:text-lg text-secondary-typography">
              {movieDetails?.overview || "Overview not available."}
            </p>
          </section>

          <section>
            <h2 className="text-2xl sm:text-3xl font-semibold text-accent mb-4">
              Casts
            </h2>
            {!!movieDetails?.credits.cast.length ? (
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
            ) : (
              <p className="text-base sm:text-lg text-secondary-typography">
                Cast information not available.
              </p>
            )}
          </section>
        </div>

        <div className="flex flex-col items-center xl:items-start text-center xl:text-start gap-4 order-1 xl:order-2">
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
                  {genre.name || "Unknown Genre"}
                </Tag>
              ))}
            </div>
          </section>

          <section>
            <h3 className="text-lg sm:text-xl font-semibold text-accent">
              Release Date
            </h3>
            <p className="text-base sm:text-lg text-secondary-typography">
              {transformDateFormat(movieDetails?.release_date) || // display it in DD-MM-YYYY format as it's the superior date format
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

function MovieDetailsSkeleton() {
  return (
    <div className="bg-secondary">
      <div className="w-full overflow-hidden fixed top-0 z-0 h-full">
        <div className="w-full h-full" />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent" />
      </div>

      <div className="relative z-20 px-16 xl:px-24 flex flex-col xl:flex-row items-center xl:items-end gap-4 pt-32 pb-4">
        <div className="aspect-[27/40] overflow-hidden h-max max-w-80 min-w-60 xs:min-w-72 md:min-w-80 rounded-md shadow-lg bg-neutral-700 animate-pulse mb-4 lg:mb-0" />
        <div className="h-8 md:h-12 xl:h-20 w-40 md:w-72 xl:w-96 bg-neutral-700 animate-pulse rounded" />
      </div>

      <div className="relative bg-secondary w-full z-20 p-4 md:p-7 lg:py-9 lg:px-24 grid grid-cols-1 xl:grid-cols-5 gap-8 md:gap-12">
        <div className="xl:col-span-4 flex flex-col gap-8 md:gap-16 order-2 xl:order-1">
          <section>
            <div className="h-8 w-32 bg-neutral-700 animate-pulse rounded mb-4" />
            <div className="space-y-2">
              <div className="h-4 bg-neutral-700 animate-pulse rounded w-full" />
              <div className="h-4 bg-neutral-700 animate-pulse rounded w-full" />
              <div className="h-4 bg-neutral-700 animate-pulse rounded w-3/4" />
            </div>
          </section>

          <section>
            <div className="h-8 w-32 bg-neutral-700 animate-pulse rounded mb-4" />
            <div className="flex gap-4 mt-4 overflow-x-auto snap-x md:snap-none">
              {Array(5)
                .fill(null)
                .map((_, index) => (
                  <CastCardSkeleton key={index} />
                ))}
            </div>
          </section>
        </div>

        <div className="flex flex-col items-center xl:items-start text-center xl:text-start gap-4 order-1 xl:order-2">
          <section className="flex flex-col items-center justify-center xl:items-start">
            <div className="h-7 w-24 bg-neutral-700 animate-pulse rounded mb-2" />
            <div className="flex gap-2 items-center justify-center xl:justify-start flex-wrap">
              {Array(3)
                .fill(null)
                .map((_, index) => (
                  <TagSkeleton key={index} />
                ))}
            </div>
          </section>

          <section className="flex flex-col items-center justify-center xl:items-start">
            <div className="h-7 w-24 bg-neutral-700 animate-pulse rounded mb-2" />
            <div className="h-5 w-24 bg-neutral-700 animate-pulse rounded" />
          </section>

          <section className="flex flex-col items-center justify-center xl:items-start">
            <div className="h-7 w-24 bg-neutral-700 animate-pulse rounded mb-2" />
            <div className="h-5 w-20 bg-neutral-700 animate-pulse rounded" />
          </section>

          <section className="flex flex-col items-center justify-center xl:items-start">
            <div className="h-7 w-24 bg-neutral-700 animate-pulse rounded mb-2" />
            <div className="h-5 w-16 bg-neutral-700 animate-pulse rounded" />
          </section>
        </div>
      </div>
    </div>
  );
}
