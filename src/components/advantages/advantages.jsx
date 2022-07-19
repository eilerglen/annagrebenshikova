import styles from "./advantages.module.css";
import done from "../../images/icons/done_black.svg";

export const Advantages = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}> Преимущества для Вас</h2>
      <ul className={styles.list}>
        <li className={styles.listitem}>
          <img src={done} alt="" className={styles.img} />
          <p className={styles.subtitle}>
            Продолжительность консультации 60 минут
          </p>
        </li>
        <li className={styles.listitem}>
          <img src={done} alt="" className={styles.img} />
          <p className={styles.subtitle}>Абонемент со скидкой</p>
        </li>
        <li className={styles.listitem}>
          <img src={done} alt="" className={styles.img} />
          <p className={styles.subtitle}>Резюме после консультации</p>
        </li>
        <li className={styles.listitem}>
          <img src={done} alt="" className={styles.img} />
          <p className={styles.subtitle}>
            Персональные методы и подходы для Вас
          </p>
        </li>
      </ul>
    </section>
  );
};
