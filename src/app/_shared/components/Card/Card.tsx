import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utils";

const cardClasses = cva(
  "bg-gray-200/60 dark:bg-gray-950 dark:text-gray-300 text-gray-900 p-4", // Clases base
  {
    variants: {
      elevation: {
        none: "shadow-none",
        low: "shadow-sm",
        medium: "shadow-md",
        high: "shadow-lg",
      },
      rounded: {
        none: "rounded-none",
        small: "rounded-md",
        medium: "rounded-xl",
        large: "rounded-2xl",
      },
    },
    defaultVariants: {
      elevation: "medium",
      rounded: "medium",
    },
  }
);

interface CardProps extends VariantProps<typeof cardClasses> {
  children?: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, elevation, rounded, className }) => {
  return (
    <div className={cn(cardClasses({ elevation, rounded }), className)}>
      {children}
    </div>
  );
};
