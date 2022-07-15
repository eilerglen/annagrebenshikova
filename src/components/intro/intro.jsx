import styles from './intro.module.css'
import background from "../../images/fon.jpg"

export const Intro = () => {
  return (
    <section className={styles.intro}>
      <img src={background} alt="" className={styles.img}/>
      <div className={styles.prev}>
        <h1 className={styles.title}> Анна Гребенщикова</h1>
        <p className={styles.subtitle}> Я готова быть рядом с вами</p>
        <p className={styles.subtitle}> В непростой период жизни</p>
      </div>

    </section>
  )
}