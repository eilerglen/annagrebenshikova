import styles from "./button-close.module.css";
import close from '../../images/icons/cancel.svg'

export const CloseButton = ({ handleClick }) => {
  return (
    <>
    <button onClick ={ handleClick } className={styles.button}>
      <img src={close} alt="" className={styles.img} />
    </button>
    
    </>
  );
};


