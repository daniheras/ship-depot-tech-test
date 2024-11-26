"use client";

import { Avatar } from "@/app/_shared/components/Avatar/Avatar";
import { Button } from "@/app/_shared/components/Button/Button";
import { useState, useEffect, ReactNode } from "react";
import { RepairCase } from "../../types";
import { Badge } from "@/app/_shared/components/Badge/Badge";
import { useMechanicsContext } from "../../_context/mechanics/useMechanicsContext";
import { cn } from "@/app/_shared/utils";

const TableHeader = ({
  children,
  className,
}: {
  children?: ReactNode;
  className?: string;
}) => (
  <th className={cn("text-sm dark:text-timberwolf-800 font-bold text-center py-2", className)}>
    {children}
  </th>
);

const TableCell = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => (
  <td className={cn("dark:text-timberwolf-600 text-sm text-center", className)}>
    {children}
  </td>
);

export const CasesTable = () => {
  const [cases, setCases] = useState<RepairCase[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const { mechanics, selectedMechanic } = useMechanicsContext();

  const fetchCases = async (page: number) => {
    const mechanicQuery = selectedMechanic ? `&mechanic_id=${selectedMechanic}` : "";
    const res = await fetch(`/api/cases?page=${page}${mechanicQuery}`);
    const data = await res.json();
    setCases(data.data);
    setTotalPages(data.totalPages);
  };

  useEffect(() => {
    fetchCases(currentPage);
  }, [currentPage, selectedMechanic]);

  const filteredCases = selectedMechanic
    ? cases.filter((c) => c.mechanic_id === selectedMechanic)
    : cases;

  const minRows = 10; // Minimum number of rows to display
  const emptyRows = Math.max(minRows - filteredCases.length, 0);

  return (
    <div className="flex flex-col h-full">
      <table className="flex-grow min-w-full dark:bg-walnut_brown-400 rounded-lg bg-walnut_brown-900">
        <thead>
          <tr>
            <TableHeader className="hidden md:block"></TableHeader>
            <TableHeader>Case ID</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Ship</TableHeader>
            <th className="text-sm font-semibold dark:text-timberwolf-600 text-right w-auto pr-8">
              Mechanic
            </th>
          </tr>
        </thead>
        <tbody className="min-h-[200px]">
          {filteredCases.map((c) => (
            <tr
              key={c.id}
              className={cn(  
                "dark:hover:bg-walnut_brown-200 hover:bg-walnut_brown-700 transition-colors h-16",
                c.status === "ACTIVE" && "border-2 border-dashed border-purple-500 dark:border-purple-500"
              )}
            >
              <td className="dark:text-gray-800 text-sm w-14 relative rounded-l-lg pl-8 hidden md:inline">
                <Avatar img={c.ship.image} className="left-0 right-0 m-auto bg-center rounded-md" />
              </td>
              <TableCell className="w-20">{c.id}</TableCell>
              <TableCell className="py-8 md:py-0">
                <Badge
                  className={cn(
                    c.status === "PENDING" && "dark:bg-blue-600 bg-blue-600 text-white",
                    c.status === "REPAIRED" && "dark:bg-green-700 bg-green-700 text-white",
                    c.status === "ACTIVE" && "dark:bg-purple-700 bg-purple-700 text-white",
                  )}
                >
                  <span className="hidden md:inline">{c.status}</span>
                </Badge>
              </TableCell>
              <TableCell>{c.ship?.model}</TableCell>
              <td className="dark:text-gray-800 text-sm w-14 relative rounded-r-lg pr-8">
                <Avatar img={mechanics.find(mechanic => mechanic.id === c.mechanic_id)?.image} className="left-0 right-0 m-auto cursor-default" />
              </td>
            </tr>
          ))}
          {Array.from({ length: emptyRows }).map((_, index) => (
            <tr key={`empty-${index}`} className="h-16">
              <td colSpan={5} className="border-0"></td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Controles de paginación */}
      <div className="flex items-center justify-center mt-4 relative gap-5">
        <div>
          <Button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Previous
          </Button>
        </div>
        <div className="text-sm font-medium dark:text-white ">
          Page {currentPage} of {totalPages}
        </div>
        <div>
          <Button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};
