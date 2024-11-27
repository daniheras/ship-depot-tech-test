import { PropsWithChildren } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utils";

const buttonClasses = cva(
  "w-full rounded-md py-2 px-4 text-center text-sm transition-all shadow-md hover:shadow-lg focus:shadow-none active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none", // Clases base
  {
    variants: {
      variant: {
        primary:
          "bg-gray-800 hover:bg-gray-700 text-white dark:bg-gray-300 dark:hover:bg-gray-200 dark:text-gray-800 active:bg-gray-600 dark:active:bg-gray-100 focus:bg-gray-700 dark:focus:bg-gray-300",
        secondary:
          "bg-white text-gray-900 hover:bg-gray-100 active:bg-gray-200 focus:ring-2 focus:ring-gray-400",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

interface ButtonProps
  extends PropsWithChildren,
    VariantProps<typeof buttonClasses> {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

export const Button = ({
  children,
  onClick,
  type = "button",
  className = "",
  variant,
  disabled = false,
  ...props
}: ButtonProps) => {
  return (
    <button
      {...props}
      disabled={disabled}
      type={type}
      onClick={onClick}
      className={cn(buttonClasses({ variant }), className)}
    >
      {children}
    </button>
  );
};
