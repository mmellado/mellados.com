import classNames from "classnames/bind";
import styles from "./style.module.css";

const cx = classNames.bind(styles);

const Body = () => {
  return (
    <main id="main" className={cx("wrapper", "main")}>
      <p className={cx("text")}>
        Marcos is a Software Engineering Leader with a background in frontend 
        architecture, interactive web applications, design systems and accessibility.
      </p>
      <p className={cx("text")}>
        He currently works as Director of Engineering at Fanatics Live, 
        where he oversees the development of their Instant Rips product.
        In the past, he&apos;s worked as Engineering Manager for
        Adyen&apos;s Design Systems team and as Technical Director for
        Resn, overseeing all technical delivery and frontend architecture.
        He also worked at AKQA as Technical Delivery manager, where he built 
        the frontend team for their Amsterdam studio.
      </p>
      <p className={cx("text")}>
        Before being a manager, Marcos worked as a Frontend Engineer at
        LinkedIn and Google, not only contributing to projects but also 
        initiatives like their design systems and accessibility task forces. 
        He then workedas the main maintainer for Airtame&apos;s design system, 
        and as one of Booking.com&apos;s company wide accessibility drivers.
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
