import Avatar from "../../../../components/Avatar";
import { IMAGE_BASE_URL } from "../../../../constants";
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
          src: IMAGE_BASE_URL + (image ?? ""),
          alt: name,
        }}
        fallback={{
          content: getInitials(name || "N A"),
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

export function CastCardSkeleton() {
  return (
    <div className="flex flex-col items-center w-40 min-w-40 text-center snap-start">
      <div className="w-36 h-36 rounded-md mb-4 bg-neutral-700 animate-pulse" />
      <div className="w-32 h-6 rounded bg-neutral-700 animate-pulse mb-2" />
      <div className="w-20 h-4 rounded bg-neutral-700 animate-pulse" />
    </div>
  );
}
