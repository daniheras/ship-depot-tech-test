import { Card } from "../_shared/components/Card/Card";
import { DashboardAside } from "./_components/aside/DashboardAside";

export default function Dashboard() {
  return (
    <>
      <div className="flex flex-grow gap-2">
        <DashboardAside/>
        <section className="flex-grow flex flex-col">
          <h3 className="dark:text-gray-400 text-gray-700 font-semibold text-xl mb-4">
            Repair Cases
          </h3>
          <Card className="flex-grow">Content placeholder</Card>
        </section>
      </div>
    </>
  );
}
