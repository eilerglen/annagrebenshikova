import styles from "./hamburgerButton.module.css";

export const MenuButton = ({onclick}) => {
  return (
    <>
    <button onClick ={onclick} className={styles.button}>
      <span></span>
    </button>
    
    </>
  );
};

