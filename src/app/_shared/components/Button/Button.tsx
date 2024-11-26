import { PropsWithChildren } from "react";
import { cn } from "../../utils";

interface ButtonProps extends PropsWithChildren {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  variant?: "primary" | "secondary";
  className?: string;
  disabled?: boolean;
}

export const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
  variant = "primary",
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <button
    {...props}
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={cn(
        "w-full rounded-heavy py-2 px-4 border border-transparent text-center text-sm transition-all shadow-md hover:shadow-lg focus:shadow-none active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none",
        className,
        variant === "primary" &&
          "bg-taupe-300 hover:bg-taupe-400 text-white dark:bg-taupe-700 dark:hover:bg-taupe-600 active:bg-taupe-300 dark:active:bg-taupe-600 focus:bg-taupe-300 dark:focus:bg-taupe-600",
        variant === "secondary" && "bg-white text-taupe-300",
        disabled && "bg-taupe-300 text-white dark:bg-taupe-700 dark:text-white"
      )}
    >
      {children}
    </button>
  );
};
