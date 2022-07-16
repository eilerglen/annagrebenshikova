import styles from './button.module.css'

export const Button = ({text, type = 'submit', onClick}) => {
  return (
    <button type={type} className = {styles.button}> {text}</button>
  )
}