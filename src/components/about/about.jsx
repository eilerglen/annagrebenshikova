import styles from "./about.module.css";
import anna from '../../images/anna.jpg'

export const About = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}> Обо мне</h2>
      <article className={styles.grid}>
        <div className={styles.grid__container}>
        <h3 className={styles.subtitle}> Основные направления моей работы</h3>
        <ul className={styles.container}>
          <li>Российский университет Дружбы Народов</li>
          
          <li>Курсы повышения квалификации</li>
        </ul>
        <p className={styles.subtitle}> Образование</p>
        <ul className={styles.container}>
          <li>Российский университет Дружбы Народов</li>
          <li>Московский психолого-педагогический Университет</li>
        </ul>
        <p className={styles.subtitle}> Повышение квалификации</p>
        <ul className={styles.container}>
          <li>Российский университет Дружбы Народов</li>
          <li>Служба помощи подросткам. Клинический психолог</li>
          <li>Курсы повышения квалификации</li>
        </ul>

        </div>
      
        <div style = {{
          backgroundImage: `url(${anna})`
          
          }}  className={styles.grid__image}>
          
        </div>
      </article>
      <div></div>
    </section>
  );
};
// style = {{background: `url(${anna})`}}