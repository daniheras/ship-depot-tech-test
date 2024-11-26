import { ChevronRight } from "../../icons/ChevronRight";

const chevronSize = {
  width: 16,
  height: 16,
}

export const Pagination = () => {
  return (
    <>
      <div className="text-gray-700 dark:text-gray-400 transform rotate-180">
        <ChevronRight {...chevronSize} />
      </div>
      <div className="text-gray-700 dark:text-gray-400 text-xs cursor-default">Page 1 of 100</div>
      <div className="text-gray-700 dark:text-gray-400">
        <ChevronRight {...chevronSize} />
      </div>
    </>
  );
};
