import styles from "./contactItem.module.css";

export const ContactItem = ({ src, href, value, alt }) => {
  return (
    <div className={styles.contactItem}>
      <img src={src} alt={alt} className={styles.img} />
      <a href={href} className={styles.value}>
        {value}
      </a>
    </div>
  );
};
