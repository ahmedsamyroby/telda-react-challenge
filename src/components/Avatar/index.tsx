import clsx from "clsx";
import { getInitials } from "../../utils";

type AvatarProps = React.AllHTMLAttributes<HTMLDivElement> & {
  name: string;
};

export default function Avatar({ name, className }: AvatarProps) {
  return (
    <div
      className={clsx(
        "w-full h-full font-bold text-5xl flex items-center justify-center",
        className
      )}
    >
      {getInitials(name)}
    </div>
  );
}
