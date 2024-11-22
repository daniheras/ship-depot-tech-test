"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    __theme?: string;
    __setPreferredTheme?: (theme: string) => void;
    __onThemeChange?: (theme: string) => void;
  }
}

function useTheme() {
  const [theme, setTheme] = useState(global.window?.__theme || 'light');

  const isDark = theme === 'dark';

  const toggleTheme = () => {
    global.window?.__setPreferredTheme!(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    global.window.__onThemeChange = setTheme;
  }, []);

  return { isDark, toggleTheme };
}

export { useTheme };
