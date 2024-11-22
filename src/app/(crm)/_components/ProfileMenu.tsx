
import { ProfileMenuButton } from "./ProfileMenuButton";
import { MenuIcon } from "@/app/_shared/icons/Menu";
import { DarkModeButton } from "./DarkModeButton";



export const ProfileMenu = () => {
  return (
    <div className="flex gap-3 flex-grow md:flex-grow-0 justify-end z-10">
      <DarkModeButton/>
      <ProfileMenuButton className="md:hidden">
        <MenuIcon />
      </ProfileMenuButton>
    </div>
  );
};