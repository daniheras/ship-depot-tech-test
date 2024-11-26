import { ActiveCases } from "./_components/charts/ActiveCases";
import { CasesWrapper } from "./cases/components/CasesWrapper";

export default function Dashboard() {
  return (
    <>
      {/* <div className="h-full grid grid-cols-1 lg:grid-cols-2 grid-rows-3 lg:grid-rows-2 gap-4">
        <div className="col-start-1 col-end-2 row-start-1 row-end-2 rounded-lg p-4 flex flex-col bg-walnut_brown-900 dark:bg-walnut_brown-400">
          <h2 className="dark:text-white text-taupe-200 text-2xl font-semibold">Active Cases</h2>
          <div className="flex-grow">
          <ActiveCases />
          </div>
        </div>
        <div className="col-start-1 col-end-2 row-start-3 row-end-4 lg:row-start-2 lg:row-end-3 rounded-lg p-4 flex flex-col bg-walnut_brown-900 dark:bg-walnut_brown-400">
        <h2 className="dark:text-white text-taupe-200 text-2xl font-semibold">Active Cases</h2>
          <div className="flex-grow">
          <ActiveCases />
          </div>
        </div>
        <CasesWrapper />
      </div> */}
    </>
  );
}
