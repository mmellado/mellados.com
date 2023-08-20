import { useState } from "react";

type Themes = "light" | "dark";

type UseTheme = {
  theme: Themes;
  loadTheme: () => void;
  toggleTheme: () => void;
};

const useTheme = (): UseTheme => {
  const [theme, setTheme] = useState<Themes>("light");

  const loadTheme = () => {
    if (window) {
      const prefersDarkScheme = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );
      if (prefersDarkScheme.matches) {
        updateTheme("dark");
        return;
      } else {
        const t =
          window.localStorage.getItem("theme") == null
            ? "dark"
            : window.localStorage.getItem("theme");
        updateTheme(t as Themes);
      }
    }
  };

  const updateTheme = (theme: Themes) => {
    setTheme(theme);
    if (window && document) {
      window.localStorage.setItem("theme", theme);
      document.documentElement.setAttribute("data-theme", theme);
    }
  };

  const toggleTheme = () => {
    if (theme === "light") {
      updateTheme("dark");
    } else {
      updateTheme("light");
    }
  };

  return {
    theme,
    loadTheme,
    toggleTheme,
  };
};

export default useTheme;
