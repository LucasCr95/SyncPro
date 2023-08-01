import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Message from '../layout/Message'
import LinkButton from '../layout/LinkButton'
import ProjectCard from '../project/ProjectCard'

import styles from './Projects.module.css'

export default function Project() {
   const [projects, setProjects] = useState([])

   const location = useLocation()
   let message = ''
   if(location.state) {
      message = location.state.message
   }

   useEffect(() => {
      fetch('http://localhost:5000/projects', {
         method: 'GET',
         headers: {
            'Content-Type' : 'application/json'
         }
      })
      .then(resp => resp.json())
      .then((data) => {
         console.log(data)
         setProjects(data)
      })
      .catch((err) => console.log(err))
   }, [])


    return (
      <div className={ styles.projects_container }>
         {message && <Message msg={ message } type='sucess' />}
         <div className={ styles.projects_title_container }>
            <h1>Projetos</h1>
            <LinkButton txtBtn='Novo Projeto' to='/newproject'/>
         </div>
         <div className={ styles.projects_cards_container }>
            {projects.length > 0 && 
               projects.map((project) => (
                  <ProjectCard 
                   name={ project.name }
                   id={ project.id }
                   budget={ project.budget }
                   category={ project.category.name }
                  />
               ))}
         </div>
      </div>
    )
}