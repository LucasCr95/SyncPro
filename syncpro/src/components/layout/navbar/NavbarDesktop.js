import { Link } from "react-router-dom"

import Container from "../Container"

import logoFull from '../../../img/logo-name.png'
import styles from './NavbarDesktop.module.css'

export default function NavbarDesktop() {
   return (
      <nav className={ styles.navbar }>
         <Container>
            <div className={ styles.logo_container}>
               <img src={ logoFull } alt="Logotipo SyncPro" />
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

