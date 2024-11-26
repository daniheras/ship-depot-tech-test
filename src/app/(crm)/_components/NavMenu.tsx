import { CasesIcon } from "@/app/_shared/icons/Cases";
import { DashboardIcon } from "@/app/_shared/icons/Dashboard";
import { MechanicsIcon } from "@/app/_shared/icons/Mechanics";
import { ShipPartsIcon } from "@/app/_shared/icons/ShipParts";
import { Url } from "@/app/_shared/types/Url";
import { cn } from "@/app/_shared/utils";
import Link from "next/link";
import { PropsWithChildren } from "react";

interface NavMenuItemProps extends PropsWithChildren {
  href: Url;
  isActive?: boolean;
  iconSlot?: React.ReactNode;
  disabled?: boolean;
}

const NavMenuItem = ({ children, href, isActive, iconSlot, disabled }: NavMenuItemProps) => {
  return (
    <Link href={href} className={cn(
      "text-sm flex items-center h-12 gap-1",
      disabled && "cursor-not-allowed text-gray-500 dark:text-gray-600",
      isActive &&
        "dark:bg-gray-300 dark:text-black bg-gray-950 text-gray-300 px-6 py-4 rounded-full font-semibold"
    )}>
      {
        iconSlot && (
          <>
            {iconSlot}
          </>
        )
      }
      {children}
    </Link>
  );
};

export const NavMenu = () => {
  return (
    <nav className="md:flex flex-grow hidden absolute w-full h-full inset-0 z-0">
      <div className="flex flex-grow justify-center gap-5 text-gray-950 dark:text-gray-200 text-sm items-center">
        <NavMenuItem isActive href="/" iconSlot={<DashboardIcon height={15} width={15} />}>
          Dashboard
        </NavMenuItem>
        <NavMenuItem disabled href="cases" iconSlot={<CasesIcon height={15} width={15} />}>Cases</NavMenuItem>
        <NavMenuItem disabled href="cases" iconSlot={<MechanicsIcon height={15} width={15} />}>Mechanics</NavMenuItem>
        <NavMenuItem disabled href="cases" iconSlot={<ShipPartsIcon height={15} width={15} />}>Ship Parts</NavMenuItem>
      </div>
    </nav>
  );
};