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
        <button
          disabled={currentPage === 1}
          onClick={() => onChange(currentPage - 1)}
          className="p-2 bg-transparent border-2 border-accent text-accent hover:bg-accent/5 rounded-md disabled:grayscale disabled:hover:bg-transparent disabled:cursor-not-allowed"
        >
          <ChevronLeft />
        </button>
      </li>
      {getPages(totalPages).map((_, idx) => (
        <li key={idx}>
          {idx === 4 ? (
            <div className="px-2 h-full border-2 border-transparent font-bold text-accent flex items-end">
              <span>. . .</span>
            </div>
          ) : (
            <button
              disabled={currentPage === idx + 1}
              onClick={() => onChange(idx + 1)}
              className={clsx("px-4 py-2 border-2 rounded-md", {
                "bg-accent border-accent text-white hover:bg-accent/90":
                  currentPage === idx + 1,
                "bg-transparent border-accent text-accent hover:bg-accent/5":
                  currentPage !== idx + 1,
              })}
            >
              {idx + 1}
            </button>
          )}
        </li>
      ))}
      <li>
        <button
          disabled={currentPage === totalPages}
          onClick={() => onChange(currentPage + 1)}
          className="p-2 bg-transparent border-2 border-accent text-accent hover:bg-accent/5 rounded-md disabled:grayscale disabled:hover:bg-transparent disabled:cursor-not-allowed"
        >
          <ChevronRight />
        </button>
      </li>
    </ul>
  );
}
