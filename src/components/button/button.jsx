import styles from './button.module.css'

export const Button = ({text, type = 'submit', handleClick}) => {
  return (
    <button onClick = {handleClick} type={type} className = {styles.button}> {text}</button>
  )
}