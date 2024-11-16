import { Link } from "react-router-dom";
import { transformDateFormat } from "../../../../utils";
import Avatar from "../../../../components/Avatar";

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
    <Link to={"/" + id}>
      <article className="bg-secondary shadow rounded-md ring-2 ring-transparent overflow-hidden group hover:ring-accent">
        <Avatar
          className="aspect-[27/40] overflow-hidden"
          image={{
            src: image,
            alt: title,
            className: "group-hover:scale-105 transition-transform",
          }}
          fallback={{
            content: title,
            className: "text-3xl bg-secondary text-center text-accent",
          }}
        />
        <div className="py-2 px-4">
          <span className="font-semibold text-md md:text-sm lg:text-md text-secondary-typography">
            {transformDateFormat(releaseDate) || "TBD"}
          </span>
          <h3
            className="text-lg md:text-md lg:text-lg text-primary-typography truncate"
            title={title}
          >
            {title}
          </h3>
        </div>
      </article>
    </Link>
  );
}

export function MovieCardSkeleton() {
  return (
    <article className="bg-secondary shadow rounded-md overflow-hidden animate-pulse">
      <div className="aspect-[27/40] bg-white/10">
        <div className="w-full h-full object-cover bg-white/10" />
      </div>
      <div className="py-2 px-4">
        <div className="h-4 w-20 bg-white/10 rounded-sm mb-3" />
        <div className="h-6 w-36 bg-white/10 rounded-sm" />
      </div>
    </article>
  );
}
