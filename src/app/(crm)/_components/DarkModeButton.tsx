"use client";

import { useTheme } from "@/app/_shared/hooks/useTheme";
import { ProfileMenuButton } from "./ProfileMenuButton";
import { SunIcon } from "@/app/_shared/icons/Sun";
import { MoonIcon } from "@/app/_shared/icons/Moon";
import { AnimatePresence, motion } from "framer-motion";

export const DarkModeButton = () => {
  const { toggleTheme, isDark } = useTheme();

  return (
      <ProfileMenuButton 
        ariaLabel="Toggle dark mode"
        onClick={toggleTheme}
        className="hidden md:flex"
      >
        <AnimatePresence mode="wait">
          {isDark ? (
            <motion.div
              key="dark"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <SunIcon />
            </motion.div>
          ) : (
            <motion.div
              key="light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <MoonIcon />
            </motion.div>
          )}
        </AnimatePresence>
      </ProfileMenuButton>
  );
};
