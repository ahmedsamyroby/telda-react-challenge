import clsx from "clsx";
import { useState } from "react";

type AvatarProps = React.AllHTMLAttributes<HTMLDivElement> & {
  image: AvatarImageProps;
  fallback: AvatarFallbackProps;
};

export default function Avatar({ image, fallback, ...props }: AvatarProps) {
  const [isError, setIsError] = useState(false);
  return (
    <div {...props}>
      {!isError ? (
        <AvatarImage onError={() => setIsError(true)} {...image} />
      ) : (
        <AvatarFallback {...fallback} />
      )}
    </div>
  );
}

type AvatarImageProps = React.AllHTMLAttributes<HTMLImageElement>;

function AvatarImage({
  src,
  alt = "Avatar",
  className,
  ...props
}: AvatarImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={clsx("w-full h-full object-cover", className)}
      {...props}
    />
  );
}

type AvatarFallbackProps = {
  content: React.ReactNode;
  className?: string;
};

function AvatarFallback({ content = "NA", className }: AvatarFallbackProps) {
  return (
    <div
      className={clsx(
        "font-bold flex items-center justify-center h-full w-full",
        className
      )}
    >
      {content}
    </div>
  );
}
