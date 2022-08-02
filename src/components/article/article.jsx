import styles from "./article.module.css";

export const Article = ({title, text}) => {
  return (
    <article className={styles.article}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.text}>
        {text}
      </div>
    </article>
  );
};

