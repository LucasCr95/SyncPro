import { BsEnvelope, BsPhone, BsMap } from 'react-icons/bs'

import styles from './Contact.module.css'

export default function Contact() {
    return (
      <div className={ styles.contact_container }>
         <div className={ styles.title_container }>
            <h1>Fale conosco</h1>
         </div>
         <div className={ styles.info_container}>
            <address>
               <h4>Contatos</h4>
               <ul className={ styles.address_list }>
                  <li className={ styles.address_item }>
                     <BsEnvelope />
                     <p>
                        <a href='mailto:contact@syncpro.com'>
                           contact@syncpro.com
                        </a>
                     </p>
                  </li>
                  <li className={ styles.address_item }>
                     <BsPhone />
                     <p>+55 11 97070-7070</p>
                  </li>
                  <li className={ styles.address_item }>
                     <BsMap />
                     <p>Alameda Santos, 1468 - Andar 13, 08814-125</p>
                  </li>
               </ul>
            </address>
         </div>
      </div>    
    )
}