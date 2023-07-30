import { Link } from "react-router-dom";

import Container from './Container'

import logo from '../../img/logo-name.png'
import styles from './Navbar.module.css'

export default function Navbar() {
    return(
        <nav className={ styles.navbar }>
            <Container >
                <div className={ styles.logo_container}>
                    <img src={ logo } alt="Logotipo SyncPro" />
                </div>

                <ul className={ styles.navbar_list }>
                    <li className={ styles.navbar_list_item }>
                        <Link exact to="/">Home</Link>
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