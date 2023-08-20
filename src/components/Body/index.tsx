import classNames from "classnames/bind";
import styles from "./style.module.css";

const cx = classNames.bind(styles);

const Body = () => {
  return (
    <main id="main" className={cx("wrapper", "main")}>
      <p className={cx("text")}>
        Marcos is an Engineering Manager with a background in frontend, user
        experience, accessibility and web animation.
      </p>
      <p className={cx("text")}>
        He has handled management roles as Technical Delivery Manager and
        Interim Tech Director at AKQA, dealing with both local and remote
        development teams as well as technical client managent duties.
      </p>
      <p className={cx("text")}>
        Before that he built development experience as a UI Engineer at
        LinkedIn, where he contributed to several projects including the
        Homepage stream, Onboarding experience, Global header, the
        company&apos;s internal design system and Accessibility. He also worked
        at Google as a Lead Engineer in the Google Fiber team.
      </p>
      <p className={cx("text")}>
        He has a Bachelor&apos;s degree in Computer Science from Tecnológico de
        Monterrey.
      </p>
      <p>&copy; {new Date().getFullYear()}, @mmellado</p>
    </main>
  );
};

export default Body;
