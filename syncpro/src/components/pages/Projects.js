import { useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

import Message from '../layout/Message'
import Loading from '../layout/Loading'
import ProjectCard from '../project/ProjectCard'
import LinkButton from '../layout/LinkButton'

import styles from './Projects.module.css'

export default function Project() {
   const [ projects, setProjects ] = useState([])
   const [ removeLoading, setRemoveLoading ] = useState(false)
   const [ projectMessage, setProjectMessage ] = useState('')
   const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);
   const [ btnText, setBtnText ] = useState('')

   const location = useLocation()
   let message = ''
   if(location.state) {
      message = location.state.message
   }

   useEffect(() => {
      window.addEventListener("resize", () => {
         setWindowWidth(window.innerWidth);
      })

      windowWidth > 500 ? (
         setBtnText('Novo Projeto')
      ):(
         setBtnText('+')
      )
   }, [windowWidth]);

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

   function removeProject(id) {
      fetch(`http://localhost:5000/projects/${id}`, {
         method: 'DELETE',
         headers: {
            'Content-Type' : 'application/json'
         }
      })
         .then((resp) => resp.json())
         .then((data) => {
            setProjects(projects.filter((project) => project.id !== id))
            setProjectMessage('Projeto removido com sucesso')
         })
         .catch((err) => console.log(err))
   }

   return (
      <div className={ styles.projects_container }>
         {message && <Message msg={ message } type='sucess' />}
         {projectMessage && <Message msg={ projectMessage } type='sucess' />}
         <div className={ styles.projects_title_container }>
            <h1>Projetos</h1>
            <LinkButton to='/newproject' txtBtn={ btnText }/>
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
                   handleRemove={ removeProject }
                  />
               ))
            }
            {!removeLoading && <Loading />}
            {removeLoading && projects.length === 0 && (
               <p>Não há projetos cadastrados</p>
            )}
         </div>
      </div>
   )
}