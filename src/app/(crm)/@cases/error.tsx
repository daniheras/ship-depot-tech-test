'use client'

import { FrownIcon } from "lucide-react";

export default function CasesError() {
  return (
    <div className="text-gray-500 dark:text-gray-400 flex flex-col gap-2 items-center justify-center flex-grow">
      <FrownIcon />
      <span className="text-sm">There was an error loading cases data</span>
    </div>
  );
}