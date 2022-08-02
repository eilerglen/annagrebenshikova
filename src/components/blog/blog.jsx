import styles from "./blog.module.css";
import { ArticlePreview } from "../article-preview/article-preview";
import { data } from "../../utils/data";
import anna from "../../images/anna.jpg";
import { useState } from "react";

export const Blog = ({name}) => {

  return (
    <section name={name}>
      <h3 className={styles.title}> Мои статьи и не только</h3>
      <div className={styles.wrapper}>
        <ul className={styles.container}>
          {data.map((item) => (
            <li key={item.id}>
              <ArticlePreview
                title={item.title}
                text={item.text}
                avatar={anna}
                id={item.id}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
