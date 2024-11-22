import { ProfileMenu } from "./ProfileMenu";
import { NavMenu } from "./NavMenu";

export const Header = () => {
  return (
    <header className="h-24 flex items-center px-5 gap-3 justify-between relative">
      <div className="text-taupe-300 dark:text-vanilla-500 text-2xl z-10">
        <span className="font-black">ship</span>
        <span className="font-light">depot</span>
      </div>
      <NavMenu />
      <ProfileMenu />
    </header>
  );
};
