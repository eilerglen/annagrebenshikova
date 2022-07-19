import styles from "./costs.module.css";
import { CostItem } from "../item-cost/item-cost";


const desc = {
  one: "Разовая консультация",
  two: "Абонемент на 3 посещения",
  three: "Абонемент на 5 посещений",
};

export const Costs = ({name}) => {


  return (
 
    
    <section className={styles.costs} name={name} id={name}>
      <h3 className={styles.title}> Стоимость услуг</h3>
      <ul className={styles.container}>
        <li>
         
          <CostItem price={4500} description={desc.one}></CostItem>
        </li>
        <li>
         
          <CostItem price={4000} description={desc.two}></CostItem>
        </li>
        <li>
         
          <CostItem price={3700} description={desc.three}></CostItem>
        </li>
      </ul>
     
    </section>
      

  );
};
