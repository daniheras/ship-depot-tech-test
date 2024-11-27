import { Header } from "./_components/Header";
import { MechanicsGap } from "./_components/MechanicsGap";
import { auth } from "@/app/(auth)";
import { redirect } from "next/navigation";
import { MechanicsProvider } from "./_context/mechanics/MechanicsProvider";
import { getMechanics } from "./_server/mechanics";

export default async function DashboardLayout({
  children,
  cases,
}: {
  children: React.ReactNode;
  cases: React.ReactNode;
}) {
  const session = await auth();
  if (!session || !session.user) {
    redirect("/login");
  }

  const mechanics = await getMechanics();

  return (
    <div className="h-screen flex flex-col md:pb-5 md:gap-5 flex-grow max-w-[1600px]">
      <Header />
      <MechanicsProvider mechanics={mechanics}>
        <div className="md:px-5 flex flex-col flex-grow">
          <div className="bg-gray-300 dark:bg-slate-900 shadow-xl md:rounded-md flex-grow relative flex flex-col">
            <div className="w-full lg:h-20 h-0">
              <MechanicsGap />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <div className="flex flex-grow gap-2">
                {children}
                {cases}
              </div>
            </div>
          </div>
        </div>
      </MechanicsProvider>
    </div>
  );
}
