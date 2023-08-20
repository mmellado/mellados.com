import { useEffect } from "react";
import useTheme from "@/hooks/useTheme";

import styles from "./style.module.css";

import { BiSun, BiMoon } from "react-icons/bi";

const ThemeToggler = () => {
  const { loadTheme, toggleTheme, theme } = useTheme();

  useEffect(() => {
    loadTheme();
  });

  return (
    <button onClick={toggleTheme} className={styles.button}>
      <span className="sr-only">
        Switch to {theme === "dark" ? "Light" : "Dark"} mode
      </span>
      {theme === "dark" ? <BiMoon /> : <BiSun />}
    </button>
  );
};

export default ThemeToggler;
