import { Link } from 'react-router-dom'
import styles from './Button.module.css'

function Button({link, type, children}){
    return (
        <Link className={styles[type]} to = {link}>{children}</Link>
    )
}

export default Button;