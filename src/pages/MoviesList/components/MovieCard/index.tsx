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
          <h3 className="text-md lg:text-lg text-primary-typography">
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
