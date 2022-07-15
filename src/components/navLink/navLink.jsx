import styles from './navLink.module.css'

export const NavLink = ({text, children}) => {
  return (
    <a href = '/' className={styles.link}>
      {/* <span className={styles.text}>
       
      </span> */}
      <p>{text}</p>
    </a>  
  )
}