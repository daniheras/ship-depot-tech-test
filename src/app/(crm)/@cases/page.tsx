import { CaseRow } from "../_components/data/CaseRow";
import { Pagination } from "@/app/_shared/components/Pagination/Pagination";
import { getCases, getTotalCases } from "../_server/cases";

export default async function CasesPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string; mechanic?: string }>;
}) {
  const params = await searchParams;
  const currentPage = parseInt(params.page || "1", 10);
  const mechanicId = params.mechanic
    ? parseInt(params.mechanic, 10)
    : undefined;
  const limit = 10;

  const cases = await getCases({ page: currentPage, limit, mechanicId });
  const totalCases = await getTotalCases(mechanicId);
  const totalPages = Math.ceil(totalCases / limit);

  return (
    <>
      <div className="flex flex-col gap-2 flex-grow">
        {cases.map((item) => (
          <CaseRow {...item} key={item.id} />
        ))}
        {cases.length === 0 && (
          <div className="text-gray-500 dark:text-gray-400 flex flex-col gap-2 items-center justify-center flex-grow">
            <span className="text-sm">No cases found</span>
          </div>
        )}
      </div>
      <div className="p-4 flex items-center justify-end gap-2">
        <Pagination searchParams={searchParams} currentPage={currentPage} totalPages={totalPages} />
      </div>
    </>
  );
}
