import clsx from "clsx/lite";
import { ReactNode } from "react";

export const Badge = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={clsx(
        "whitespace-nowrap rounded-full bg-taupe-500 px-2.5 py-0.5 text-sm font-semibold text-timberwolf dark:bg-purple-700 dark:text-purple-100",
        className
      )}
    >
      {children}
    </span>
  );
};
