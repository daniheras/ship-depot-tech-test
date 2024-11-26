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
        "w-full rounded-md py-2 px-4 border border-transparent text-center text-sm transition-all shadow-md hover:shadow-lg focus:shadow-none active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none",
        className,
        variant === "primary" &&
          "bg-gray-800 hover:bg-gray-700 text-white dark:bg-gray-300 dark:hover:bg-gray-200 dark:text-gray-800 active:bg-gray-600 dark:active:bg-gray-100 focus:bg-gray-700 dark:focus:bg-gray-300",
        variant === "secondary" && "bg-white text-gray-900",
        disabled && "bg-gray-900 cursor-not-allowed"
      )}
    >
      {children}
    </button>
  );
};
