import company from '../../img/company.svg'

import styles from './Company.module.css'

export default function Company() {
    return (
      <div className = { styles.company_container }>
         <div className={ styles.title_container }>
            <h1>Syncpro</h1>  
         
            <p>Em 2005, John Smith e Jane Doe fundaram a SyncPro, uma empresa de desenvolvimento de software que cria sistemas de gerenciamento de projetos. O sistema da SyncPro é usado por empresas de todos os tamanhos para gerenciar seus projetos de forma mais eficaz. O sistema ajuda as empresas a reduzir os atrasos, os orçamentos estourados e a melhorar a comunicação entre os membros da equipe.</p>
         </div>

         <div className={ styles.img_container }>
            <img src={ company } alt='Imagem da empresa'/>
         </div>
      </div>
    )
}