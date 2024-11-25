import clsx from "clsx/lite";
import { PropsWithChildren } from "react";

interface ProfileMenuButtonProps extends PropsWithChildren {
  className?: string;
  onClick?: () => void;
  ariaLabel?: string;
}

export const ProfileMenuButton = ({
  children,
  className,
  onClick,
  ariaLabel = "",
  ...props
}: ProfileMenuButtonProps) => {
  return (
    <button
      {...props}
      aria-label={ariaLabel}
      onClick={onClick}
      className={clsx(
        "bg-timberwolf h-12 w-12 flex items-center justify-center rounded-full cursor-pointer",
        className
      )}
    >
      {children}
    </button>
  );
};
