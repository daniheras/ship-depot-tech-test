import { CasesIcon } from "@/app/_shared/icons/Cases";
import { DashboardIcon } from "@/app/_shared/icons/Dashboard";
import { Url } from "@/app/_shared/types/Url";
import clsx from "clsx/lite";
import Link from "next/link";
import { PropsWithChildren } from "react";

interface NavMenuItemProps extends PropsWithChildren {
  href: Url;
  isActive?: boolean;
  iconSlot?: React.ReactNode;
}

const NavMenuItem = ({ children, href, isActive, iconSlot }: NavMenuItemProps) => {
  return (
    <li
      className={clsx(
        "text-sm flex items-center h-12 gap-1",
        isActive &&
          "dark:bg-timberwolf dark:text-black bg-taupe-300 text-timberwolf px-6 py-4 rounded-full font-semibold"
      )}
    >
      {
        iconSlot && (
          <>
            {iconSlot}
          </>
        )
      }
      <Link href={href}>{children}</Link>
    </li>
  );
};

export const NavMenu = () => {
  return (
    <nav className="md:flex flex-grow hidden absolute w-full h-full inset-0 z-0">
      <ul className="flex flex-grow justify-center gap-5 text-taupe-200 dark:text-timberwolf text-sm items-center">
        <NavMenuItem isActive href="/" iconSlot={<DashboardIcon height={15} width={15} />}>
          Dashboard
        </NavMenuItem>
        <NavMenuItem href="cases" iconSlot={<CasesIcon height={15} width={15} />}>Cases</NavMenuItem>
      </ul>
    </nav>
  );
};