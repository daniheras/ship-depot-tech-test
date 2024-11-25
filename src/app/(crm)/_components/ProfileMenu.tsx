
import { ProfileMenuButton } from "./ProfileMenuButton";
import { MenuIcon } from "@/app/_shared/icons/Menu";
import { DarkModeButton } from "./DarkModeButton";
import { Avatar } from "@/app/_shared/components/Avatar/Avatar";

export const ProfileMenu = () => {
  return (
    <div className="flex gap-3 flex-grow md:flex-grow-0 justify-end z-10">
      <DarkModeButton/>
      <ProfileMenuButton ariaLabel="Main menu" className="md:hidden">
        <MenuIcon />
      </ProfileMenuButton>
      <ProfileMenuButton ariaLabel="Profile menu" className="hidden md:block">
        <Avatar img="https://i.pravatar.cc/300" />
      </ProfileMenuButton>
    </div>
  );
};