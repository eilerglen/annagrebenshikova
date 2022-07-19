import styles from "./header.module.css";
import { Link, animateScroll as scroll } from "react-scroll";
export const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}></div>
        <nav>
          
          <ul className={styles.navlist}>
            <li>
            <Link 
                className={styles.link}
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={0}
                duration={1000}
              >Обо мне</Link>
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
              >С чем я работаю</Link>
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
              >Стоимость услуг</Link>
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
              > Контакты</Link>
            </li>
           
          </ul>
        </nav>
      </div>
    </header>
  );
};
