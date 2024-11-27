import { ProfileMenuButton } from "./ProfileMenuButton";
import { MenuIcon } from "@/app/_shared/icons/Menu";
import { Avatar } from "@/app/_shared/components/Avatar/Avatar";
import { User } from "next-auth";
import { DropdownItem, DropdownRoot } from "@/app/_shared/components/Dropdown";
import { LogOutIcon, UserIcon } from "lucide-react";
import { SetThemeButton } from "./SetThemeButton";
import { signOut } from "@/app/(auth)";

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
            <Avatar size="large" className="bg-center" img={userData.image!} />
          </ProfileMenuButton>
        }
      >
        <DropdownItem label="Profile" icon={<UserIcon width={14} />} />
        <DropdownItem
          label="Sign out"
          icon={<LogOutIcon width={14} />}
          onClick={async () => {
            "use server";
            await signOut();
          }}
        />
      </DropdownRoot>
    </div>
  );
};
