import styles from "./side-menu.module.css";
import { Link } from "react-scroll";
import {Link as DS} from 'react-router-dom'


export const SideMenu = (props) => {
  const {isActive} = props
   return (
    
    <nav> 
      <ul 
      style ={{transform:`translate${0}px`}}
      className={styles.menu}
      >
        <li>
          <Link
            className={styles.link}
            activeClass="active"
            to="about"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
          >
            Обо мне
          </Link>
        </li>
        <li>
          <Link
            className={styles.link}
            activeClass="active"
            to=""
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
          >
            С чем я работаю
          </Link>
        </li>
        <li>
          <Link
            className={styles.link}
            activeClass="active"
            to={"costs"}
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
          >
            Стоимость услуг
          </Link>
        </li>

        <li>
          <Link
            className={styles.link}
            activeClass="active"
            to="contacts"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
          >
            {" "}
            Контакты
          </Link>
        </li>

        <li>
          <Link
            className={styles.link}
            activeClass="active"
            to="contacts"
            spy={true}
            smooth={true}
            offset={0}
            duration={1000}
          >
            {" "}
            Контакты
          </Link>
        </li>
        <li>
          <DS className={styles.link} to={"/blog"}>
            Мой блог
          </DS>
        </li>
      </ul>
    </nav>
  )
};
