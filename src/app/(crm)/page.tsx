import { FrownIcon } from "lucide-react";
import { Pagination } from "../_shared/components/Pagination/Pagination";
import { DashboardAside } from "./_components/aside/DashboardAside";
import { CaseRow } from "./_components/data/CaseRow";
import { getCases } from "./_server/cases";

export default async function Dashboard() {
  const cases = await getCases();

  return (
    <>
      <div className="flex flex-grow gap-2">
        <DashboardAside />
        <section className="flex-grow flex flex-col">
          <h3 className="dark:text-gray-400 text-gray-700 font-semibold text-xl mb-4">
            Repair Cases
          </h3>
          <div className="flex flex-col gap-2 flex-grow">
            {cases.map((item,i) => (
              <CaseRow {...item} key={i} />
            ))}
            {
              cases.length === 0 && (
                <div className="text-gray-500 dark:text-gray-400 flex flex-col gap-2 items-center justify-center flex-grow">
                  <FrownIcon/>
                  <span className="text-sm">No cases found</span>
                </div>
              )
            }
          </div>
          <div className="p-4 flex items-center justify-end gap-2">
            <Pagination />
          </div>
        </section>
      </div>
    </>
  );
}
