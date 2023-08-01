import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

import styles from './ProjectCard.module.css'

export default function ProjectCard({ id, name, budget, category, handleRemove }) {
   return(
      <div className={ styles.project_card }>
         <h2>{ name }</h2>
         <p><span>Orçamento:</span> { budget }</p>
         <p><span></span>{ category }</p>

         <div className={ styles.actions_container }>
            <p><BsPencil /> Editar</p>
            <p><BsFillTrashFill /> Excluir </p>
         </div>
      </div>
   )
}