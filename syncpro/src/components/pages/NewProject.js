import { useNavigate } from "react-router-dom"

import ProjectForm from '../project/ProjectForm'

import styles from './NewProject.module.css'

export default function NewProject() {
   const history = useNavigate()

   function createPost(project) {
      project.cost = 0
      project.services = []

      fetch('http://localhost:5000/projects', {
         method: 'POST',
         headers: {
            'Content-Type' : 'application/json'
         },
         //enviando os dados do projeto ->
         body: JSON.stringify(project)
      })
         .then((resp) => resp.json())
         .then((data) => {
            // redirect
            history('/projects', { state: { message: 'Projeto criado com sucesso!' }})
         })
         .catch((err) => console.log(err))
   }

   return (
      <div className={ styles.newproject_container }>
         <div className={ styles.newproject_tile_container }>
            <h1>Novo Projeto</h1>
            <p>Crie seus projetos</p>
         </div>

         <div className={ styles.newproject_form_container }>
            <ProjectForm 
             txtBtn="Criar Projeto" 
             handleSubmit={ createPost }
            />
         </div>
      </div>
   )
}