import MovieCard from "./components/MovieCard";

export default function MoviesList() {
  return (
    <div className="flex flex-col gap-12 w-full">
      <h1 className="text-4xl font-semibold text-primary-typography">
        Discover
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {Array.from({
          length: 20,
        }).map((_, idx) => (
          <MovieCard
            key={idx}
            id={idx}
            image="https://via.placeholder.com/200x300"
            title="Movie Title"
            releaseDate="15/3/2003"
          />
        ))}
      </div>
    </div>
  );
}
