import { BsFillTrashFill } from 'react-icons/bs'

import styles from './ServiceCard.module.css'

export default function ServiceCard({ id, name, cost, description, handleRemove }) {
   
  /*  const remove = (e) => {
      e.preventDefault()
      handleRemove(id)
   } */

   return(
      <div className={ styles.service_card }>
         <div>
            <p><span>Serviço</span>: { name }</p>
            <p><span>Custo</span>: { cost }</p>
            <p><span>Descrição</span>: { description }</p>
         </div>
         <div 
         //  onClick={ remove } 
          className={ styles.service_card_action }
         >
            <BsFillTrashFill />
         </div>
      </div>
   )
}