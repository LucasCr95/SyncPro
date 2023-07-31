import ProjectForm from '../project/ProjectForm'
import styles from './NewProject.module.css'

export default function NewProject() {
    return (
        <div className={ styles.newproject_container }>
            <div className={ styles.newproject_tile_container }>
                <h1>Novo Projeto</h1>
                <p>Crie seus projetos</p>
            </div>

            <div className={ styles.newproject_form_container }>
                <ProjectForm txtBtn="Criar Projeto" />
            </div>
        </div>
    )
}