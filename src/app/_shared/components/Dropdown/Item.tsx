import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { ReactNode } from "react";
import { cn } from "../../utils";

interface RadixMenuItem {
  label: string;
  icon?: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
}

export const DropdownItem = ({ label, icon, type, onClick }: RadixMenuItem) => {
  return (
    <DropdownMenuItem asChild key={`region-tool-menu-item-${label}`}>
      <button
        onClick={onClick && onClick}
        type={type}
        className={cn(
          "flex cursor-pointer select-none items-center justify-start text-left rounded-md px-2 py-2 text-xs outline-none gap-2 w-full",
          "text-gray-950 focus:bg-gray-50 dark:text-gray-300 dark:focus:bg-gray-800"
        )}
      >
        {icon}
        <span className="flex-grow text-gray-950 dark:text-gray-300">
          {label}
        </span>
      </button>
    </DropdownMenuItem>
  );
};
