import { MenuIcon } from "@/app/_shared/icons/Menu";
import { SunIcon } from "@/app/_shared/icons/Sun";
import { Url } from "@/app/_shared/types/Url";
import clsx from "clsx/lite";
import Link from "next/link";
import { PropsWithChildren } from "react";

const ProfileMenuButton = ({
  children,
  className,
}: PropsWithChildren & { className?: string }) => {
  return (
    <button
      aria-label="Profile Menu"
      className={clsx(
        "bg-timberwolf h-12 w-12 flex items-center justify-center rounded-full",
        className
      )}
    >
      {children}
    </button>
  );
};

const ProfileMenu = () => {
  return (
    <div className="flex gap-3 flex-grow md:flex-grow-0 justify-end">
      <ProfileMenuButton className="hidden md:flex">
        <SunIcon />
      </ProfileMenuButton>
      <ProfileMenuButton className="md:hidden">
        <MenuIcon />
      </ProfileMenuButton>
    </div>
  );
};

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

const NavMenu = () => {
  return (
    <nav className="md:flex flex-grow hidden absolute w-full h-full inset-0">
      <ul className="flex flex-grow justify-center gap-5 text-taupe-200 dark:text-timberwolf text-sm items-center">
        <NavMenuItem href="dashboard">Link 1</NavMenuItem>
        <NavMenuItem isActive href="dashboard">
          Link 2
        </NavMenuItem>
        <NavMenuItem href="dashboard">Link 3</NavMenuItem>
        <NavMenuItem href="dashboard">Link 4</NavMenuItem>
        <NavMenuItem href="dashboard">Link 5</NavMenuItem>
      </ul>
    </nav>
  );
};

export const Header = () => {
  return (
    <header className="h-24 flex items-center px-5 gap-3 justify-between relative">
      <div className="text-taupe-300 dark:text-vanilla-500 text-2xl">
        <span className="font-black">ship</span>
        <span className="font-light">depot</span>
      </div>
      {/* MENU TODO: Move to its own component */}
      <NavMenu />
      {/* END MENU */}
      {/* PROFILE MENU TODO: Move to its own component */}
      <ProfileMenu />
      {/* END PROFILE MENU */}
    </header>
  );
};
