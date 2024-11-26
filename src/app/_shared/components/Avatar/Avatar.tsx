import { cn } from "../../utils";

export const Avatar = ({ img, className }: { img?: string, className?: string }) => {
  return (
    <div
      style={{ backgroundImage: `url('${img}')` }}
      className={
        cn("w-12 h-12 bg-gray-800 border-2 dark:border-gray-800 dark:shadow-sm shadow-white rounded-full relative z-30 cursor-pointer bg-cover bg-no-repeat", className)
      }
    />
  );
};
