import { Pagination } from "../_shared/components/Pagination/Pagination";
import { DashboardAside } from "./_components/aside/DashboardAside";
import { CaseRow } from "./_components/CaseRow";

export default async function Dashboard() {
  return (
    <>
      <div className="flex flex-grow gap-2">
        <DashboardAside />
        <section className="flex-grow flex flex-col">
          <h3 className="dark:text-gray-400 text-gray-700 font-semibold text-xl mb-4">
            Repair Cases
          </h3>
          <div className="flex flex-col gap-2 flex-grow">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
              <CaseRow key={i} />
            ))}
          </div>
          <div className="p-4 flex items-center justify-end gap-2">
            <Pagination />
          </div>
        </section>
      </div>
    </>
  );
}
