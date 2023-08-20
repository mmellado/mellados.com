import Link from "next/link";
import classNames from "classnames/bind";
import ThemeToggler from "../ThemeToggler";

import styles from "./style.module.css";

const cx = classNames.bind(styles);

const Navigation = () => {
  return (
    <header className={cx("wrapper", "header")}>
      <h1>
        <Link href="/">Marcos Mellado</Link>
      </h1>
      <nav>
        <ul>
          <li>
            <a href="https://github.com/mmellado" target="_blank">
              GithHub
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/mellado"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </li>
        </ul>
        <ThemeToggler />
      </nav>
    </header>
  );
};

export default Navigation;
