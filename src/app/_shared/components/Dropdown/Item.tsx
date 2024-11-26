import { DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { ReactNode } from "react";
import { cn } from "../../utils";

interface RadixMenuItem {
  label: string;
  icon?: ReactNode;
}

export const DropdownItem = ({ label, icon }: RadixMenuItem) => {
  return (
    <DropdownMenuItem
      key={`region-tool-menu-item-${label}`}
      className={cn(
        "flex cursor-pointer select-none items-center rounded-md px-2 py-2 text-xs outline-none gap-2",
        "text-gray-950 focus:bg-gray-50 dark:text-gray-300 dark:focus:bg-gray-800",
      )}
    >
      {icon}
      <span className="flex-grow text-gray-950 dark:text-gray-300">
        {label}
      </span>
    </DropdownMenuItem>
  );
};
