import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Loading from '../layout/Loading'
import ProjectForm from '../project/ProjectForm'
import Message from '../layout/Message'

import styles from './Project.module.css'

export default function Project() {
   const { id } = useParams()
   const [ project, setProject ] = useState([])
   const [ showProjectForm, setShowProjectForm ] = useState(false)
   const [ showServiceForm, setShowServiceForm ] = useState(false)
   const [ message, setMessage ] = useState()
   const [ type, setType ] = useState()

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

   function editPost(project) {
      // budget validation
      if(project.budget < project.cost){
         setMessage('Não há orçamento para esse serviço!')
         setType('error')
         return
      }

      fetch(`http://localhost:5000/projects/${ project.id }`, {
         // altera apenas o que foi editado
         method: 'PATCH',
         headers: {
            'Content-Type' : 'application/json'
         },
         body: JSON.stringify(project)
      })
      .then(resp => resp.json())
      .then((data) => {
         setProject(data)
         setShowProjectForm(!showProjectForm)
         setMessage('Projeto alterado!')
         setType('sucess')
      })
      .catch(err => console.log(err))
   }

   function toggleProjectForm() {
      setShowProjectForm(!showProjectForm)
   }

   function toggleServiceForm() {
      setShowServiceForm(!showServiceForm)
   }

   return (
      <>
         {project.name ? (
            <div className={ styles.project_container }>
               {message && <Message type={ type } msg={ message }/>}
               <div className={ styles.info_container }>
                  <div className={ styles.details_container }>
                     <h1>{ project.name }</h1>
                     <p><span>Orçamento</span>: { project.budget }</p>
                     <p><span>Categoria</span>: { project.category.name }</p>
                     <p><span>Total utilizado</span>: { project.cost }</p>
                  </div>
                  <div className={ styles.form_container }>
                     <button onClick={ toggleProjectForm } className={ styles.btn }>
                        {!showProjectForm ? 'Editar' : 'Fechar'}
                     </button>
                     {showProjectForm && (
                        <div className={ styles.form_edit }>
                           <ProjectForm 
                            handleSubmit={ editPost }
                            txtBtn='Salvar'
                            projectData={ project }
                           />
                        </div>
                     )}
                  </div>
               </div>
               <div className={ styles.services_container }>
                  <div className={ styles.details_services }>
                     <h2>Serviços</h2>
                     <p>Serviços</p>
                     <p>Serviços</p>
                     <p>Serviços</p>
                     <p>Serviços</p>
                     <p>Serviços</p>
                  </div>
                  <div className={ styles.form_services}>
                     <button onClick={ toggleServiceForm } className={ styles.btn }>
                        {!showServiceForm ? 'Adicionar' : 'Fechar'}
                     </button>
                     {showServiceForm && (
                        <div className={ styles.service_edit }>
                        Formulario de Serviços
                        </div>
                     )}
                  </div>
               </div>
            </div>
         ) : (
            <Loading />
         )}
      </> 
   )
}