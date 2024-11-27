"use client";

import * as DropdownMenuPrimitive from "@radix-ui/react-dropdown-menu";
import React, { ReactNode, useState } from "react";
import { cn } from "../../utils";

const DropdownRoot = ({
  trigger,
  children,
  testMode = false,
  open: controlledOpen,
  onOpenChange,
}: {
  trigger: ReactNode;
  children: ReactNode;
  testMode?: boolean;
  open?: boolean;
  onOpenChange?: (isOpen: boolean) => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    onOpenChange?.(open);
  };

  return (
    <div className="relative inline-block text-left">
      <DropdownMenuPrimitive.Root
        open={testMode ? controlledOpen : isOpen}
        onOpenChange={handleOpenChange}
      >
        <DropdownMenuPrimitive.DropdownMenuTrigger asChild>
          {trigger}
        </DropdownMenuPrimitive.DropdownMenuTrigger>
        {testMode ? (
          <DropdownMenuPrimitive.Content
            align="end"
            sideOffset={5}
            className={cn(
              "radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down z-40",
              "w-48 rounded-lg px-1.5 py-1 shadow-md md:w-56",
              "bg-white dark:bg-gray-950"
            )}
          >
            {children}
          </DropdownMenuPrimitive.Content>
        ) : (
          <DropdownMenuPrimitive.Portal>
            <DropdownMenuPrimitive.Content
              align="end"
              sideOffset={5}
              className={cn(
                "radix-side-top:animate-slide-up radix-side-bottom:animate-slide-down z-40",
                "w-48 rounded-lg px-1.5 py-1 shadow-md md:w-56",
                "bg-white dark:bg-gray-950"
              )}
            >
              {children}
            </DropdownMenuPrimitive.Content>
          </DropdownMenuPrimitive.Portal>
        )}
      </DropdownMenuPrimitive.Root>
    </div>
  );
};

export { DropdownRoot };
