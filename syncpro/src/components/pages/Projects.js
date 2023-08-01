import { useLocation } from 'react-router-dom'

import Message from '../layout/Message'

import styles from './Projects.module.css'

export default function Project() {
   const location = useLocation()
   let message = ''
   if(location.state) {
      message = location.state.message
   }

    return (
      <div className={ styles.projects_container }>
         <Message msg={ message } type='sucess' />
         <div className={ styles.title_container }>
            <h1>Projetos</h1>
         </div>
         <div className={ styles.container_projects_cards }>

         </div>
      </div>
    )
}