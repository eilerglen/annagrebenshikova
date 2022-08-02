import styles from "./article-preview.module.css";
import { Link } from "react-router-dom";

export const ArticlePreview = ({title, text, avatar, id}) => {
  console.log(id)
  return (
   
    <article className={styles.wrapper}>
      <div>
      <img src = {avatar} alt="avatar" className={styles.avatar}/>
      <p>09.18.25</p>
      </div>
      <h2 className={styles.title}>{title}</h2>
     
      <div className={styles.text}>
        <p className={styles.paragraph}>
            {text} 
        </p>
       
      </div>
      <Link className={styles.link} to={{
              pathname: `/article/${id}`,
             
          }}>
          Читать далее <code>&#8594;</code>
          
        </Link>
    </article>
  );
};
