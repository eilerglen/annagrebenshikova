import { SideMenu } from "../../components/side-menu/side-menu"
import { Article } from "../../components/article/article"
import { data } from "../../utils/data"
import styles from './blog-page.module.css'

export const BlogPage = () => {

  return (
    <main className={styles.wrapper}>
    <h1 className={styles.title}>Мой блог</h1>
    <Article title ={data.title}/>
    </main>
    
  )
}