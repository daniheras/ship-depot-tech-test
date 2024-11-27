import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/app/_shared/utils";

const badgeClasses = cva(
  "inline-flex items-center font-semibold", // Clases base
  {
    variants: {
      variant: {
        default: "bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200",
        success: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
        error: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200",
        warning: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200",
      },
      size: {
        small: "text-xs px-2 py-0.5 rounded",
        medium: "text-sm px-3 py-1 rounded-md",
        large: "text-base px-4 py-1.5 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "medium",
    },
  }
);

interface BadgeProps extends VariantProps<typeof badgeClasses> {
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant,
  size,
  className,
}) => {
  return (
    <span className={cn(badgeClasses({ variant, size }), className)}>
      {children}
    </span>
  );
};
