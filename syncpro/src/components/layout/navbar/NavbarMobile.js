import { Link } from 'react-router-dom'
import { useState } from 'react'

import { AiOutlineMenu } from 'react-icons/ai'
import logo from '../../../img/logo.png'

import styles from './NavbarMobile.module.css'

export default function NavbarMobile() {
   const [isToggled, setIsToggled] = useState(false);
   const [ mode, setMode ] = useState('')

   const handleClick = () => {
      setIsToggled(!isToggled);
      (isToggled ? (
         setMode('enable')
      ) : (
         setMode('disable')
      ))
   };

   return(
      <nav className={ styles.navbar }>
         <div className={ styles.logo_container }>
            <img src={ logo } alt="Logotipo SyncPro" />
         </div>
         <div 
          onClick={ handleClick  }
          className={ styles.menu_container }
         >
            <AiOutlineMenu />
         </div>

         <ul className={`${ styles.navbar_list } ${ styles[ mode ]}`}>
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
      </nav>
   )
}