import clsx from "clsx";

type TagProps = {
  children: React.ReactNode;
  color?: string;
};

export default function Tag({ children, color }: TagProps) {
  return (
    <span
      className={clsx(
        "text-xs font-semibold uppercase rounded px-2 py-1 border-2",
        {
          "bg-primary-typography/20 border-primary-typography text-primary-typography":
            !color,
        }
      )}
      style={
        color
          ? { backgroundColor: `${color}1A`, borderColor: color, color: color } // Added opacity to background color
          : undefined
      }
    >
      {children}
    </span>
  );
}
