

import { PropsWithChildren } from "react";
import { Header } from "./_components/Header";
import { MechanicsGap } from "./_components/MechanicsGap";

export default function DashboardLayout({ children }: PropsWithChildren) {
  return (
    <div className="h-screen flex flex-col md:pb-5 md:gap-5">
      <Header />
      <div className="md:px-5 flex flex-col flex-grow">
        <main className="bg-timberwolf-800 dark:bg-walnut_brown-500 md:rounded-3xl flex-grow relative">
          <MechanicsGap />
          {children}
        </main>
      </div>
    </div>
  );
}
