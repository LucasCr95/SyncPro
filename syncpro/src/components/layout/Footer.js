import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa'

import styles from './Footer.module.css'

export default function Footer() {
    return(
        <footer className={ styles.footer }>
            <ul className={ styles.social_list }>
                <li className={ styles.social_list_item }>
                    <FaFacebook />
                </li>
                <li className={ styles.social_list_item }>
                    <FaInstagram />
                </li>
                <li className={ styles.social_list_item }>
                    <FaLinkedin />
                </li>
            </ul>

            <p className={ styles.copy_right }><span>SyncPro</span> &copy; - Todos os direitos reservados</p>
            
        </footer>
    )
}