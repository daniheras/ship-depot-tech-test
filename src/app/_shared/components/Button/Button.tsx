import clsx from "clsx/lite";
import { PropsWithChildren } from "react";

interface ButtonProps extends PropsWithChildren {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  className?: string;
}

export const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
  variant = "primary",
  ...props
}: ButtonProps) => {
  return (
    <button
    {...props}
      type={type}
      onClick={onClick}
      className={clsx(
        "w-full rounded-heavy py-2 px-4 border border-transparent text-center text-sm transition-all shadow-md hover:shadow-lg focus:shadow-none active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none",
        className,
        variant === "primary" &&
          "bg-taupe-300 hover:bg-taupe-400 text-white dark:bg-taupe-700 dark:hover:bg-taupe-600 active:bg-taupe-300 dark:active:bg-taupe-600 focus:bg-taupe-300 dark:focus:bg-taupe-600",
        variant === "secondary" && "bg-white text-taupe-300"
      )}
    >
      {children}
    </button>
  );
};
