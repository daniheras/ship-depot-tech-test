import { ProfileMenu } from "./ProfileMenu";
import { NavMenu } from "./NavMenu";
import { auth } from "@/app/(auth)";

export const Header = async () => {
  const session = await auth();

  if (!session || !session.user) {
    return null;
  }

  return (
    <header className="h-24 min-h-24 sticky top-0 flex items-center px-5 gap-3 justify-between md:relative">
      <div className="dark:text-gray-100 text-black text-2xl z-10">
        <span className="font-black">ship</span>
        <span className="font-light">depot</span>
      </div>
      <NavMenu />
      <ProfileMenu userData={session.user} />
    </header>
  );
};
