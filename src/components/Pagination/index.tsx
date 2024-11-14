import clsx from "clsx";
import { ChevronLeft, ChevronRight } from "lucide-react";

type PaginationProps = {
  pageSize: number;
  currentPage: number;
  totalItems: number;
  onChange: (page: number) => void;
};

export default function Pagination({
  pageSize,
  currentPage,
  totalItems,
  onChange,
}: PaginationProps) {
  const totalPages = 9;

  const getPages = (totalPages: number) => {
    return Array.from({ length: totalPages });
  };

  return (
    <ul className="flex gap-3">
      <li>
        <PaginationControl
          disabled={currentPage === 1}
          onClick={() => onChange(currentPage - 1)}
        >
          <ChevronLeft />
        </PaginationControl>
      </li>
      {getPages(totalPages).map((_, idx) => (
        <li key={idx}>
          {idx === 4 ? (
            <PaginationEllipsis />
          ) : (
            <PaginationItem
              disabled={currentPage === idx + 1}
              onClick={() => onChange(idx + 1)}
              active={currentPage === idx + 1}
            >
              {idx + 1}
            </PaginationItem>
          )}
        </li>
      ))}
      <li>
        <PaginationControl
          disabled={currentPage === totalPages}
          onClick={() => onChange(currentPage + 1)}
        >
          <ChevronRight />
        </PaginationControl>
      </li>
    </ul>
  );
}

function PaginationEllipsis() {
  return (
    <div className="px-2 h-full border-2 border-transparent font-bold text-accent flex items-end">
      <span>. . .</span>
    </div>
  );
}

type PaginationControlProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  onClick: React.MouseEventHandler<HTMLButtonElement>;
  disabled: boolean;
};

function PaginationControl({
  className,
  children,
  ...props
}: PaginationControlProps) {
  return (
    <button
      className={clsx(
        "p-2 bg-transparent border-2 border-accent text-accent hover:bg-accent/5 rounded-md disabled:grayscale disabled:hover:bg-transparent disabled:cursor-not-allowed",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}

type PaginationItemProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  active: boolean;
};

function PaginationItem({
  active,
  className,
  children,
  ...props
}: PaginationItemProps) {
  return (
    <button
      className={clsx(
        "px-4 py-2 border-2 rounded-md",
        {
          "bg-accent border-accent text-white hover:bg-accent/90": active,
          "bg-transparent border-accent text-accent hover:bg-accent/5": !active,
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
