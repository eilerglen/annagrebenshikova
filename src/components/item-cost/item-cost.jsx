import styles from './item-cost.module.css'
import { Button } from '../button/button'

export const CostItem= ({price, description}) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.price}> {price}
        <span className={styles.span}> руб.</span>
      </h3>
      <p className={styles.description}> {description}</p>
      <Button text ="Записаться" ></Button>
    </div>
  )
}