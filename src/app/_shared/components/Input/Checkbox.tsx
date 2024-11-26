import { InputProps } from "./types";
import { cn } from "../../utils";

export const Checkbox = ({ label, name, className }: InputProps) => {
  return (
    <div className="inline-flex items-center mt-2">
      <label
        className="flex items-center cursor-pointer relative"
        htmlFor="check-2"
      >
        <input
          name={name}
          type="checkbox"
          className={cn(
            "peer h-5 w-5 cursor-pointer transition-all appearance-none rounded-full shadow hover:shadow-md border",
            "border-slate-300 checked:bg-gray-800 checked:border-gray-800 dark:border-white dark:border-2 dark:checked:bg-white dark:checked:border-white",
            className
          )}
          id="check-2"
        />
        <span className="absolute flex text-white dark:text-gray-800 opacity-0 pointer-events-none peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-3.5 w-3.5"
            viewBox="0 0 20 20"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </span>
      </label>
      <label
        className="cursor-pointer ml-2 text-gray-800 dark:text-white text-sm"
        htmlFor="check-2"
      >
        {label}
      </label>
    </div>
  );
};
