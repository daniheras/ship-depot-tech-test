"use client";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import React, { ReactNode } from "react";
import { cn } from "../../utils";

const DropdownRoot = ({
  trigger,
  children,
}: {
  trigger: ReactNode;
  children: ReactNode;
}) => {
  return (
    <div className="relative inline-block text-left">
      <DropdownMenuPrimitive.Root>
        <DropdownMenuPrimitive.DropdownMenuTrigger asChild>
          {trigger}
        </DropdownMenuPrimitive.DropdownMenuTrigger>
        <DropdownMenuPrimitive.Portal>
          <DropdownMenuPrimitive.Content
            align="end"
            sideOffset={5}
            className={cn(
              "radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down z-40",
              "w-48 rounded-lg px-1.5 py-1 shadow-md md:w-56",
              "bg-white dark:bg-taupe-100"
            )}
          >
            {children}
          </DropdownMenuPrimitive.Content>
        </DropdownMenuPrimitive.Portal>
      </DropdownMenuPrimitive.Root>
    </div>
  );
};

export { DropdownRoot };
