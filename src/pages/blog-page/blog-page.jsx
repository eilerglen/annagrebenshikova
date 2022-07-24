import { SideMenu } from "../../components/side-menu/side-menu";
import { Article } from "../../components/article/article";
import { data } from "../../utils/data";
import styles from "./blog-page.module.css";
import { Link } from "react-router-dom";

export const BlogPage = () => {
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
        <h1 className={styles.title}>Мой блог</h1>
        <Article title={data.title} />
      </main>
    </>
  );
};
