import styles from './footer.module.css'

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.wrapper}>
      <p className={styles.title}>Анна Гребенщикова</p>

      <p className={styles.subtitle}>@2022 </p>
      <p className={styles.subtitle}>Копирование запрещено</p>
      </div>
      
    </footer>
  );
};
