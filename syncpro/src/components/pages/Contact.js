import { BsEnvelope, BsPhone, BsMap } from 'react-icons/bs'

import styles from './Contact.module.css'

export default function Contact() {
    return (
      <div className={ styles.contact_container }>
         <div>
            <h1>Fale conosco</h1>
         </div>
         <div className={ styles.info_contact_container}>
            <address>
               <h4>Contatos</h4>
                  <div>
                     <a href='mailto:contact@syncpro.com'>
                        <BsEnvelope />
                        <p>contact@syncpro.com</p>
                     </a>
                  </div>
                  <div>
                     <BsPhone />
                     <p>+55 11 97070-7070</p>
                  </div>
               <h5>Endereço</h5>
               <div>
                  <BsMap />
                  <p>Alameda Santos, 1468 - Andar 13</p>
                  <p>08814-125</p>
               </div>
            </address>
         </div>
      </div>    
    )
}