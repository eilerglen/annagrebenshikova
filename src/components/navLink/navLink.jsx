import styles from './navLink.module.css'

export const NavLink = ({text}) => {

  const handleScroll= (e) => {
    e.preventDefault()
  }

  return (
    <a href = '/' className={styles.link} onClick={handleScroll}>
      {/* <span className={styles.text}>
       
      </span> */}
      <p>{text}</p>
    </a>  
  )
}