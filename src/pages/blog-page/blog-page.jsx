import { SideMenu } from "../../components/side-menu/side-menu";
import { Article } from "../../components/article/article";
import { data } from "../../utils/data";
import styles from "./blog-page.module.css";
import { Link } from "react-router-dom";
import { useParams } from "react-router";

export const BlogPage = () => {
  const {id} = useParams()

  const article = data.find((article) => {
    if(article.id == id) {
      return article
    }
  })
  console.log(id)
  console.log(article)
  return (
    <>
      <header className={styles.header}>
        <p className={styles.wraplink}>
          <Link className={styles.link} to={{ pathname: "/" }}>
            <code> На главную</code>
          </Link>
        </p>
      </header>
      <main className={styles.wrapper}>
        <Article title={article.title} text={article.text} />
      </main>
    </>
  );
};
