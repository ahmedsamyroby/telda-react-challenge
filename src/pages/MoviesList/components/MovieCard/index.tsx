import { Info } from "lucide-react";

type MovieCardProps = {
  id: number;
  image: string;
  title: string;
  releaseDate: string;
};

export default function MovieCard({
  id,
  image,
  title,
  releaseDate,
}: MovieCardProps) {
  return (
    <article className="bg-secondary shadow rounded-md overflow-hidden">
      <div className="aspect-[27/40]">
        <img src={image} alt="title" className="w-full h-full object-cover" />
      </div>
      <div className="py-2 px-4 flex justify-between items-center">
        <div>
          <span className="font-semibold text-xs sm:text-sm text-secondary-typography">
            {releaseDate}
          </span>
          <h3
            className="text-md lg:text-lg text-primary-typography max-w-48 truncate"
            title={title}
          >
            {title}
          </h3>
        </div>
        <button className="bg-accent border-2 border-accent p-1 rounded-md text-sm text-primary-typography hover:bg-transparent hover:border-accent hover:text-accent transition-colors">
          <Info />
        </button>
      </div>
    </article>
  );
}

export function MovieCardSkeleton() {
  return (
    <article className="bg-secondary shadow rounded-md overflow-hidden animate-pulse">
      <div className="aspect-[27/40] bg-gray-300">
        <div className="w-full h-full object-cover bg-gray-300" />
      </div>
      <div className="py-2 px-4 flex justify-between items-center">
        <div>
          <div className="h-4 w-16 bg-gray-300 rounded-sm mb-3" />
          <div className="h-6 w-36 bg-gray-300 rounded-sm" />
        </div>
        <div className="w-9 h-9 bg-gray-300 rounded-md" />
      </div>
    </article>
  );
}
