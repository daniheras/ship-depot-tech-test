import { ActiveCases } from "./_components/charts/ActiveCases";
import { CasesWrapper } from "./cases/components/CasesWrapper";

export default function Dashboard() {
  return (
    <>
      <div className="h-full grid grid-cols-1 lg:grid-cols-2 grid-rows-3 lg:grid-rows-2 gap-4">
        <div className="col-start-1 col-end-2 row-start-1 row-end-2 ">
          <ActiveCases/>
        </div>
        <div className="col-start-1 col-end-2 row-start-3 row-end-4 lg:row-start-2 lg:row-end-3 ">
          Bottom Left
        </div>
        <CasesWrapper />
      </div>
    </>
  );
}
