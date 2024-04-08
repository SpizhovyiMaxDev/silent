import styles from './Button.module.css'
import { Link } from 'react-router-dom'

function Button({link, type, handleClick = null, children}){
    return (
        <Link className={styles[type]} to = {link} onClick={handleClick&&handleClick} >{children}</Link>
    )
}

export default Button;