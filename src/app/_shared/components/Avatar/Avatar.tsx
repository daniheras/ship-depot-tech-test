import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "../../utils";

const avatarClasses = cva(
  "bg-gray-800 border-2 dark:border-gray-800 dark:shadow-sm shadow-white rounded-full relative z-30 bg-cover bg-no-repeat",
  {
    variants: {
      size: {
        small: "w-4 h-4",
        medium: "w-8 h-8",
        large: "w-12 h-12",
      },
      shape: {
        circle: "rounded-full",
        rounded: "rounded-md",
      },
    },
    defaultVariants: {
      size: "medium",
      shape: "circle",
    },
  }
);

interface AvatarProps extends VariantProps<typeof avatarClasses> {
  img?: string;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ img, size = "medium", shape = "circle", className }) => {
  return (
    <div
      style={{ backgroundImage: `url('${img}')` }}
      role="avatar"
      className={cn(avatarClasses({ size, shape }), className)}
    />
  );
};
