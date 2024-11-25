
"use client"

import { ProfileMenuButton } from "./ProfileMenuButton";
import { MenuIcon } from "@/app/_shared/icons/Menu";
import { Avatar } from "@/app/_shared/components/Avatar/Avatar";
import dynamic from "next/dynamic";
import { User } from "next-auth";

const SetThemeButton = dynamic(() => import("./DarkModeButton").then(mod => mod.DarkModeButton), {
  ssr: false,
  loading: () => <ProfileMenuButton/>,
})

export const ProfileMenu = ({ userData }: { userData: User }) => {
  return (
    <div className="flex gap-3 flex-grow md:flex-grow-0 justify-end z-10">
      <SetThemeButton/>
      <ProfileMenuButton ariaLabel="Main menu" className="md:hidden">
        <MenuIcon />
      </ProfileMenuButton>
      <ProfileMenuButton ariaLabel="Profile menu" className="hidden md:block">
        <Avatar img={userData.image!} />
      </ProfileMenuButton>
    </div>
  );
};