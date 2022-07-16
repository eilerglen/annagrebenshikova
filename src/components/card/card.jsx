import styles from './card.module.css'

export const Card = ({src, title}) => {
  return (
    <div className={styles.container}>
      <img src={src} alt="" className={styles.img}/>
      <p className={styles.description}> {title}</p>
    </div>
  )
}