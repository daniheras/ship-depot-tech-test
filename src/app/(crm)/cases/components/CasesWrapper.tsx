import clsx from "clsx/lite";
import { CasesTable } from "./CasesTable";

export const CasesWrapper = ({ full }: { full?: boolean }) => {
  return (
    <div
      className={clsx(
        "col-start-1 col-end-2  row-start-2 row-end-4",
        "lg:col-start-2 lg:col-end-3 lg:row-start-1 lg:row-end-3",
        full && "lg:col-start-1"
      )}
    >
      <CasesTable />
    </div>
  );
};
