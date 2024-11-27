import Link from "next/link";
import { ChevronRight } from "../../icons/ChevronRight";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  searchParams: Promise<{ page?: string; mechanic?: string }>;
}

const chevronSize = {
  width: 16,
  height: 16,
};

export const Pagination = async ({
  currentPage,
  totalPages,
  searchParams,
}: PaginationProps) => {
  const params = await searchParams;
  const prevPage = currentPage > 1 ? currentPage - 1 : null;
  const nextPage = currentPage < totalPages ? currentPage + 1 : null;

  const createUrl = (page: number | null) => {
    if (!page) return "#";

    const urlParams = new URLSearchParams(params);
    urlParams.set("page", page.toString());
    return `?${urlParams.toString()}`;
  };

  return (
    <div className="flex items-center gap-4">
      {prevPage && (
        <Link
          href={createUrl(prevPage)}
          className="text-gray-700 dark:text-gray-400 transform rotate-180"
          aria-label={`Go previous page: ${prevPage}`}
        >
          <ChevronRight {...chevronSize} />
        </Link>
      )}
      <span className="text-gray-700 dark:text-gray-400 text-xs cursor-default">
        Page {currentPage} of {totalPages}
      </span>
      {nextPage && (
        <Link
          href={createUrl(nextPage)}
          className="text-gray-700 dark:text-gray-400"
          aria-label={`Go next page: ${nextPage}`}
        >
          <ChevronRight {...chevronSize} />
        </Link>
      )}
    </div>
  );
};
