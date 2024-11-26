import clsx from "clsx/lite";
import { CasesTable } from "./CasesTable";

export const CasesWrapper = () => {
  return (
    <div
      className={clsx(
        "col-start-1 col-end-2  row-start-2 row-end-4 h-full",
        "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3",
      )}
    >
      <CasesTable />
    </div>
  );
};