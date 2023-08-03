import { Link } from "react-router-dom";

import { BsPencil, BsFillTrashFill } from 'react-icons/bs'

import styles from './ProjectCard.module.css'

export default function ProjectCard({ id, name, budget, category, handleRemove }) {
   const remove = (e) => {
      e.preventDefault()
      handleRemove(id)
   }

   return(
      <div className={ styles.project_card }>
         <h2>{ name }</h2>
         <p><span className={ styles.span_budget}>Orçamento:</span> { budget }</p>
         <p><span className={`${ styles.text_category } ${ styles[ category.toLowerCase() ]}` }></span>{ category }</p>

         <div className={ styles.project_card_actions }>
            <Link to='/' className={ styles.btn_actions }>
               <BsPencil />Editar
            </Link>
            <button onClick={ remove } className={ styles.btn_actions }>
               <BsFillTrashFill /> Excluir
            </button>
         </div>
      </div>
   )
}