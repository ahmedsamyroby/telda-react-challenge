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
  const totalPages = 500;

  const getPages = (totalPages: number) => {
    const pages = Array.from({ length: totalPages }).map((_, idx) => idx + 1);

    if (totalPages <= 5) {
      return pages;
    }

    if (currentPage <= 3) {
      return [...pages.slice(0, 4), "ellipsis", totalPages];
    }

    if (currentPage >= totalPages - 2) {
      return [1, "ellipsis", ...pages.slice(totalPages - 4)];
    }

    return [
      1,
      "ellipsis",
      ...pages.slice(currentPage - 2, currentPage + 1),
      "ellipsis",
      totalPages,
    ];
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
      {getPages(totalPages).map((page, idx) => {
        if (page === "ellipsis") {
          return <PaginationEllipsis key={idx} />;
        }
        return (
          <li key={idx}>
            <PaginationItem
              active={currentPage === page}
              onClick={() => typeof page === "number" && onChange(page)}
            >
              {page}
            </PaginationItem>
          </li>
        );
      })}
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
    <div className="px-2 border-2 border-transparent font-bold text-accent flex items-end">
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
