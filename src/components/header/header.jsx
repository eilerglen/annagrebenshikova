import { NavLink } from "../navLink/navLink";
import styles from "./header.module.css";

export const Header = () => {


  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}></div>
        <nav>
          <ul className={styles.navlist}>
            <li>
              <NavLink text="Обо мне" />
            </li>
            <li>
              <NavLink text="С чем я работаю" />
            </li>
            <li>
              <NavLink text="СТоимость услуг" />
            </li>
            <li>
              <NavLink text="Контакты" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
