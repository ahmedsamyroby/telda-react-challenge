import Avatar from "../../../../components/Avatar";
import { POSTER_BASE_URL } from "../../../../constants";
import { getInitials } from "../../../../utils";

type CastCardProps = {
  image?: string | null;
  name: string;
  character: string;
};

export default function CastCard({ image, name, character }: CastCardProps) {
  return (
    <div className="flex flex-col items-center w-40 min-w-40 text-center snap-start">
      <Avatar
        className="w-36 h-36 rounded-md mb-4 overflow-hidden"
        image={{
          src: POSTER_BASE_URL + (image ?? ""),
          alt: name,
        }}
        fallback={{
          content: getInitials(name),
          className: "text-5xl bg-primary text-accent",
        }}
      />
      <p className="text-lg leading-5 text-primary-typography mb-2">{name}</p>
      <p className="text-sm text-secondary-typography font-semibold">
        {character}
      </p>
    </div>
  );
}
