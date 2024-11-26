"use client";

import dynamic from "next/dynamic";
import { ProfileMenuButton } from "./ProfileMenuButton";

export const SetThemeButton = dynamic(
  () => import("./DarkModeButton").then((mod) => mod.DarkModeButton),
  {
    ssr: false,
    loading: () => (
      <ProfileMenuButton ariaLabel="Placholder button while loading" />
    ),
  }
);