import { ProfileMenu } from "./ProfileMenu";
import { NavMenu } from "./NavMenu";
import { auth } from "@/app/(auth)";

export const Header = async () => {
  const session = await auth();

  if (!session || !session.user) {
    return null;
  }

  return (
    <header className="h-24 flex items-center px-5 gap-3 justify-between relative">
      <div className="text-taupe-300 dark:text-vanilla-500 text-2xl z-10">
        <span className="font-black">ship</span>
        <span className="font-light">depot</span>
      </div>
      <NavMenu />
      <ProfileMenu userData={session.user} />
    </header>
  );
};
