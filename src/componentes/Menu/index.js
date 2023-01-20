import { Link, useLocation } from 'react-router-dom';
import MenuLink from '../MenuLink';
import styles from './Menu.module.css';

export default function Menu () {

    return (
        <header>
            <nav className={styles.navegacao}>
                <MenuLink>
                    Início
                </MenuLink>
                <Link className={styles.link} to="/sobremim">
                    Sobre Mim
                </Link>
            </nav>
        </header>
    )
}