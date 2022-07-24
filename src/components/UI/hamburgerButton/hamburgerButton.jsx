import styles from "./hamburgerButton.module.css";

export const MenuButton = ({onclick}) => {
  return (
    <>
    <button onClick ={onclick} className={styles.button}>
      <span className={styles.span}></span>
      <span className={styles.span}></span>
      <span className={styles.span}></span>
    </button>
    
    </>
  );
};

