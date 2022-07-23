import { SideMenu } from "../../components/side-menu/side-menu";
import styles from "./about-page.module.css";
import { Link } from "react-router-dom";
import { Article } from "../../components/article/article";
import anna from "../../images/anna.jpg";

export const AboutPage = () => {
  return (
    <main className={styles.wrapper}>
      <p className={styles.header}>
        <Link className={styles.link} to={{ pathname: "/" }}>
          <code> На главную</code>
        </Link>
      </p>
      <section className={styles.section}>
        <h1>Я психолог</h1>
        <img src={anna} alt="фото профиля" className={styles.img} />
        <p>
          Я решила, что я хочу стать психологом в 6 классе. Почему не знаю,
          просто в голове сформировалась эта мысль и все.
        </p>
      </section>
    </main>
  );
};
