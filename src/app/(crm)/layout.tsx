import { Header } from "./_components/Header";
import { MechanicsGap } from "./_components/MechanicsGap";
import { auth } from "@/app/(auth)";
import { redirect } from "next/navigation";
import { MechanicsProvider } from "./_context/mechanics/MechanicsProvider";

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
      <MechanicsProvider mechanics={mechanics}>
        <div className="md:px-5 flex flex-col flex-grow">
          <div className="bg-gray-300 dark:bg-slate-800 md:rounded-md flex-grow relative flex flex-col">
            <div className="w-full lg:h-20 h-0">
              <MechanicsGap />
            </div>
            <main className="p-4 flex flex-col flex-grow">
              {children}
            </main>
          </div>
        </div>  
      </MechanicsProvider>
    </div>
  );
}
