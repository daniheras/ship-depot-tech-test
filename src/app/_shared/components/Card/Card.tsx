import { cn } from "../../utils";

export const Card = ({
  children,
  className,
}: { children?: React.ReactNode; className?: string }) => {
  return (
    <div
      className={cn(
        "bg-gray-200/60 dark:bg-gray-950 shadow-md rounded-xl p-4 dark:text-gray-300 text-gray-900",
        className,
      )}
    >
      {children}
    </div>
  );
}