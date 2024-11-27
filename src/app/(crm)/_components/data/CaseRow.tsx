import { Avatar } from "@/app/_shared/components/Avatar/Avatar";
import { Badge } from "@/app/_shared/components/Badge/Badge";
import { Card } from "@/app/_shared/components/Card/Card";
import { ExpandIcon } from "@/app/_shared/icons/Expand";
import { Case } from "../../_server/schema";
import { MechanicRowData } from "./MechanicRowData";
import { Credits } from "@/app/_shared/icons/Credits";

const STATUS_VARIANT_MAPPER = {
  'finished': 'success',
  'pending': 'default',
  'active': 'warning',
} as const;

export const CaseRow = (data: Case) => {
  return (
    <Card className="flex-grow text-sm relative flex gap-10 max-h-24 items-center">
      <Avatar
        size="large"
        shape="rounded"
        img={data.shipImage}
      />
      <div className="flex flex-col gap-1 max-w-44 min-w-44">
        <span className="truncate text-ellipsis">{data.shipModel}</span>
        <div className="text-xs flex-grow items-center flex">
          <MechanicRowData mechanicId={data?.mechanicId} />
        </div>
      </div>
      <div className="text-xs items-center flex max-w-32 flex-grow">
        <div className="flex gap-2">
          <Badge variant={STATUS_VARIANT_MAPPER[data.status]}>{data.status}</Badge>
        </div>
      </div>
      <div className="hidden xl:flex flex-col justify-center text-sm flex-grow max-w-[200]">
        <span className="text-xs dark:text-gray-400 text-gray-500">
          Created at
        </span>
        <span className="text-xs font-normal">
          {new Date(data.createdAt).toDateString()}
        </span>
      </div>
      <div className="hidden md:flex flex-col justify-center text-sm">
        <span className="text-xs dark:text-gray-400 text-gray-500">
          Repair estimate
        </span>
        <span className="text-md dark:text-gray-200 text-gray-950 font-bold flex items-center gap-1">
          {data.budget ? (
            <>
              <span>{data.budget}</span>
              <Credits width={15} />
            </>
          ) : (
            "-"
          )}
        </span>
      </div>
      <div className="hidden md:flex flex-col justify-center text-sm">
        <span className="text-xs dark:text-gray-400 text-gray-500">
          Closed at
        </span>
        <span className="text-xs font-normal">
          {data.closedAt ? new Date(data.closedAt).toDateString() : "-"}
        </span>
      </div>
      <div className="flex-grow flex items-center justify-end">
        <button aria-label="Expand item" disabled className="cursor-not-allowed">
          <ExpandIcon width={20} height={20} />
        </button>
      </div>
    </Card>
  );
};
