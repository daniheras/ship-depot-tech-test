import { Header } from "./_components/Header";
import { MechanicsGap } from "./_components/MechanicsGap";
import { auth } from "@/app/(auth)";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode
  analytics: React.ReactNode
  team: React.ReactNode
}) {
  const session = await auth();
  if (!session || !session.user) {
    redirect("/login");
  }

  const { data: mechanics } = await import("@/mock/mechanics.json");

  return (
    <div className="h-screen flex flex-col md:pb-5 md:gap-5">
      <Header />
      <div className="md:px-5 flex flex-col flex-grow">
        <div className="bg-timberwolf-800 dark:bg-walnut_brown-500 md:rounded-3xl flex-grow relative flex flex-col">
          <div className="w-full lg:h-20 h-0">
            <MechanicsGap data={mechanics} />
          </div>
          <main className="p-4 flex flex-col flex-grow">
          {children}
          </main>
        </div>
      </div>
    </div>
  );
}
