import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Loading from '../layout/Loading'

import styles from './Project.module.css'

export default function Project() {
   const { id } = useParams()
   const [ project, setProject ] = useState([])

   useEffect(() => {
      setTimeout(() => {
         fetch(`http://localhost:5000/projects/${ id }`, {
         method: 'GET',
         headers: {
            'Content-Type' : 'application/json'
            }
         })
         .then(resp => resp.json())
         .then((data) => {
            setProject(data)
         })
         .catch(err => console.log(err))
      }, 2000)
   }, [ id ])

   return (
      <>
         {project.name ? (
            <div className={ styles.project_container }>
               <div className={ styles.title_container }>
                  <h1>{ project.name }</h1>
                  <p><span>Orçamento</span>: { project.budget }</p>
                  <p><span></span> {project.category.name }</p>
               </div>
               <div className={ styles.content_container }>
                  <div className={ styles.btn_container }>
                     <button>Editar</button>
                     <button>Adicionar Serviços</button>
                  </div>
               </div>
            </div>
         ) : (
            <Loading />
         )}
      </> 
   )
}