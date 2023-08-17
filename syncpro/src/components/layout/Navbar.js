import { Link } from "react-router-dom";

import Container from './Container'

import logoname from '../../img/logo-name.png'
import logo from '../../img/logo.png'
import styles from './Navbar.module.css'

export default function Navbar() {
    return(
        <nav className={ styles.navbar }>
            <Container >
                <div className={ styles.logo_container}>
                     <picture>
                        <source src={ logo } media="(max-width: 400px)" alt='logotipo' />
                        <img src={ logoname } alt="Logotipo SyncPro" />
                     </picture>
                </div>

                <ul className={ styles.navbar_list }>
                    <li className={ styles.navbar_list_item }>
                        <Link to="/">Home</Link>
                    </li>
                    <li className={ styles.navbar_list_item }>
                        <Link to="/projects">Projetos</Link>
                    </li>
                    <li className={ styles.navbar_list_item }>
                        <Link to="/company">Sobre</Link>
                    </li>
                    <li className={ styles.navbar_list_item }>
                        <Link to="/contact">Contato</Link>
                    </li>
                </ul>
            </Container>
        </nav>
    )
}