"use client";

import { useTheme } from "@/app/_shared/hooks/useTheme";
import { ProfileMenuButton } from "./ProfileMenuButton";
import { SunIcon } from "@/app/_shared/icons/Sun";

export const DarkModeButton = () => {
  const { toggleTheme } = useTheme();

  return (
    <ProfileMenuButton onClick={toggleTheme}>
      <SunIcon />
    </ProfileMenuButton>
  );
};
