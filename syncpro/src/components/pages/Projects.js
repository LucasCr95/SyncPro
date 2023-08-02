import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Message from '../layout/Message'
import LinkButton from '../layout/LinkButton'
import Loading from '../layout/Loading'
import ProjectCard from '../project/ProjectCard'

import styles from './Projects.module.css'

export default function Project() {
   const [ projects, setProjects ] = useState([])
   const [ removeLoading, setRemoveLoading ] = useState(false)

   const location = useLocation()
   let message = ''
   if(location.state) {
      message = location.state.message
   }

   useEffect(() => {
      setTimeout(() => {
         fetch('http://localhost:5000/projects', {
            method: 'GET',
            headers: {
               'Content-Type' : 'application/json'
            }
         })
         .then(resp => resp.json())
         .then((data) => {
            setProjects(data)
            setRemoveLoading(true)
         })
         .catch((err) => console.log(err))
      }, 2000)
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
                   key={ project.id }
                  />
               ))
            }
            {!removeLoading && <Loading />}

         </div>
      </div>
    )
}