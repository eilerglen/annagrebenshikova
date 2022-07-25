import styles from "./header.module.css";
import { Link, animateScroll as scroll } from "react-scroll";
import {Link as DS} from 'react-router-dom'
import { SideMenu } from "../side-menu/side-menu";
import { MenuButton } from "../UI/hamburgerButton/hamburgerButton";
import { useEffect, useState } from "react";

export const Header = () => {

   const [isActive, setIsActive] = useState(false)

   const handleClick = () => {
    setIsActive(!isActive)
    console.log(isActive)
   }

   useEffect(() => {
    console.log(isActive)
   },[isActive])

  return (
    <header className={styles.header}>
     
      <div className={styles.wrapper}>
      <MenuButton onclick = {handleClick}/>
        <p className={styles.logo}> Анна Гребенщикова</p>
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

            <li>
            <DS
               className = {styles.link} to = {'/blog'}>
             Мой блог
            </DS>
            </li>


           
          </ul>
        </nav>
      </div>
      <SideMenu isActive = {isActive}/>
    </header>
  );
};
