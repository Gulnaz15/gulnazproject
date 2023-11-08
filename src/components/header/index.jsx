import { Link } from "react-router-dom";
import styles from './style.module.css'

const Header = () => {
    return(
        <div className={styles.container}>
            <nav className={styles.navbar}>
                <Link to='/home'>Вход</Link>
                <Link to='/'>Главная</Link>
                <Link to='/chat'>Отзывы</Link>
                <Link to='/test'>Test API</Link>
            </nav>
        </div>
    )
}

export default Header