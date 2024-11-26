import { Avatar } from "@/app/_shared/components/Avatar/Avatar";
import { Badge } from "@/app/_shared/components/Badge/Badge";
import { Card } from "@/app/_shared/components/Card/Card";
import { ExpandIcon } from "@/app/_shared/icons/Expand";

export const CaseRow = () => {
  return (
    <Card className="flex-grow text-sm relative flex gap-10">
      <Avatar className="rounded-md" />
      <div className="flex flex-col">
        <span>Ship Name</span>
        <div className="text-xs flex-grow items-center flex">
          <div className="flex gap-2">
            <Avatar className="w-4 h-4" />
            <span>Mechanic Name</span>
          </div>
        </div>
      </div>
      <div className="text-xs items-center flex">
        <div className="flex gap-2">
          <Badge>active</Badge>
        </div>
      </div>
      <div className="hidden md:flex flex-col justify-center text-sm">
        <span className="text-xs dark:text-gray-400 text-gray-500">Created at</span>
        <span className="text-xs font-normal">12/05/2024</span> 
      </div>
      <div className="hidden md:flex flex-col justify-center text-sm">
        <span className="text-xs dark:text-gray-400 text-gray-500">Repair estimate</span>
        <span className="text-md dark:text-gray-200 text-gray-950 font-bold">24545$</span>
      </div>
      <div className="hidden md:flex flex-col justify-center text-sm">
        <span className="text-xs dark:text-gray-400 text-gray-500">Closed at</span>
        <span className="text-xs font-normal">12/05/2024</span>
      </div>
      <div className="flex-grow flex items-center justify-end">
        <button disabled className="cursor-not-allowed">
          <ExpandIcon width={20} height={20} />
        </button>
      </div>
    </Card>
  );
};
