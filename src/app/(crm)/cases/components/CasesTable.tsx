"use client";

import { Avatar } from "@/app/_shared/components/Avatar/Avatar";
import { Button } from "@/app/_shared/components/Button/Button";
import { useState, useEffect, PropsWithChildren, ReactNode } from "react";
import { RepairCase } from "../../types";
import clsx from "clsx/lite";
import { Badge } from "@/app/_shared/components/Badge/Badge";

const TableHeader = ({ children }: PropsWithChildren) => (
  <th className="text-sm text-timberwolf-800 font-bold text-center py-2">
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
  <td className={clsx("text-timberwolf-600 text-sm text-center", className)}>
    {children}
  </td>
);

export const CasesTable = () => {
  const [cases, setCases] = useState<RepairCase[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const fetchCases = async (page: number) => {
    const res = await fetch(`/api/cases?page=${page}`);
    const data = await res.json();
    setCases(data.data);
    setTotalPages(data.totalPages);
  };

  useEffect(() => {
    fetchCases(currentPage);
  }, [currentPage]);

  return (
    <div className="flex flex-col h-full">
      <table className="flex-grow min-w-full">
        <thead>
          <tr>
            <TableHeader>Case ID</TableHeader>
            <TableHeader>Status</TableHeader>
            <TableHeader>Ship</TableHeader>
            <th className="text-sm font-semibold text-timberwolf-600 text-right w-auto">
              Mechanic
            </th>
          </tr>
        </thead>
        <tbody>
          {cases.map((c, index) => (
            <tr
              key={c.id}
              className={clsx(
                index % 2 === 0 && "bg-walnut_brown-400",
                "hover:bg-walnut_brown-200 transition-colors"
              )}
            >
              <TableCell className="rounded-l-lg w-20">{c.id}</TableCell>
              <TableCell>
                <Badge
                  className={clsx(
                    c.status === "PENDING"
                      ? "dark:bg-vista_blue-300"
                      : "dark:bg-green-700"
                  )}
                >
                  {c.status}
                </Badge>
              </TableCell>
              <TableCell>{c.ship?.model}</TableCell>
              <td className="text-gray-800 text-sm w-14 relative rounded-r-lg">
                <Avatar className="left-0 right-0 m-auto" />
              </td>
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
        <div className="text-sm font-medium text-white ">
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
