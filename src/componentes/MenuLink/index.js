import styles from './MenuLink.module.css'
import { Link, useLocation } from 'react-router-dom'

export default function MenuLink() {

    const localizacao = useLocation();

    return (
        <Link className={`
        ${styles.link} 
        ${localizacao.pathname === '/' ? styles.linkDestacado : ""}
        `} to="/">
            Inicio
        </Link>
        
    )
}