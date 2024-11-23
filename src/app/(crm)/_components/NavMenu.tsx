import { Url } from "@/app/_shared/types/Url";
import clsx from "clsx/lite";
import Link from "next/link";
import { PropsWithChildren } from "react";

interface NavMenuItemProps extends PropsWithChildren {
  href: Url;
  isActive?: boolean;
}

const NavMenuItem = ({ children, href, isActive }: NavMenuItemProps) => {
  return (
    <li
      className={clsx(
        "text-sm",
        isActive &&
          "dark:bg-timberwolf dark:text-black bg-taupe-300 text-timberwolf px-6 py-4 rounded-full font-semibold"
      )}
    >
      <Link href={href}>{children}</Link>
    </li>
  );
};

export const NavMenu = () => {
  return (
    <nav className="md:flex flex-grow hidden absolute w-full h-full inset-0 z-0">
      <ul className="flex flex-grow justify-center gap-5 text-taupe-200 dark:text-timberwolf text-sm items-center">
        <NavMenuItem isActive href="dashboard">
          Dashboard
        </NavMenuItem>
        <NavMenuItem href="dashboard">Cases</NavMenuItem>
        <NavMenuItem href="dashboard">Mechanics</NavMenuItem>
        <NavMenuItem href="dashboard">Ship Parts</NavMenuItem>
      </ul>
    </nav>
  );
};