import { useLocation } from 'react-router-dom'

import Message from '../layout/Message'
import LinkButton from '../layout/LinkButton'

import styles from './Projects.module.css'

export default function Project() {
   const location = useLocation()
   let message = ''
   if(location.state) {
      message = location.state.message
   }

    return (
      <div className={ styles.projects_container }>
         {message && <Message msg={ message } type='sucess' />}
         <div className={ styles.projects_title_container }>
            <h1>Projetos</h1>
            <LinkButton txtBtn='Novo Projeto' to='/newproject'/>
         </div>
         <div className={ styles.projects_cards_container }>
            
         </div>
      </div>
    )
}