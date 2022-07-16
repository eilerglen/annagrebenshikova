import background from "../../images/fon.jpg"
import styles from './services.module.css'
import { Card } from "../card/card"
import child from "../../images/cards/child.jpg"
import profi from "../../images/cards/prof.jpg"
import family from "../../images/cards/family.jpg"
import emotion from "../../images/cards/emotion.jpg"


export const Services = () => {
  return (
    <section className={styles.services}>
      <div className={styles.prev}>
        <h2 className={styles.title}> С чем я работаю</h2>
        <p className={styles.subtitle}> Знание разных методик и подходов дает мне возможность работать с широким спектром проблем</p>
        <ul className={styles.container}>
          <li><Card title = "Семейные трудности" src={family}></Card></li>
          <li><Card title = "Трудности с ребенком" src={child}></Card></li>
          <li><Card title = "Профессиональное самоопределение" src={profi}></Card></li>
          <li><Card title = "Эмоциональные проблемы" src={emotion}></Card></li>

        </ul>
      </div>

    </section>
  )
}