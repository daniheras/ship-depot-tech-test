"use client";

import { ProfileMenuButton } from "./ProfileMenuButton";
import { MenuIcon } from "@/app/_shared/icons/Menu";
import { Avatar } from "@/app/_shared/components/Avatar/Avatar";
import dynamic from "next/dynamic";
import { User } from "next-auth";
import { DropdownItem, DropdownRoot } from "@/app/_shared/components/Dropdown";
import { LogOut, UserIcon } from "lucide-react";

const SetThemeButton = dynamic(
  () => import("./DarkModeButton").then((mod) => mod.DarkModeButton),
  {
    ssr: false,
    loading: () => <ProfileMenuButton ariaLabel="Placholder button while loading" />,
  }
);

export const ProfileMenu = ({ userData }: { userData: User }) => {
  return (
    <div className="flex gap-3 flex-grow md:flex-grow-0 justify-end z-10">
      <SetThemeButton />
      <ProfileMenuButton ariaLabel="Main menu" className="md:hidden">
        <MenuIcon />
      </ProfileMenuButton>
      <DropdownRoot
        trigger={
          <ProfileMenuButton
            ariaLabel="Profile menu"
            className="hidden md:block"
          >
            <Avatar img={userData.image!} />
          </ProfileMenuButton>
        }
      >
        <DropdownItem label="Profile" icon={<UserIcon width={14} />} />
        <DropdownItem label="Log out" icon={<LogOut width={14} />} />
      </DropdownRoot>
    </div>
  );
};
