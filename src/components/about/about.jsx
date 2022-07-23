import styles from "./about.module.css";
import anna from '../../images/anna.jpg'
import { Link } from "react-router-dom";

export const About = ({name}) => {
  return (
    <section className={styles.section} name={name} id={name}>
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
        <Link className = {styles.link} to = {'/about'}>
          Узнать подробнее<code>&#8594;</code>
          
        </Link>
    </section>
  );
};
