import savings from '../../img/savings.svg'

import styles from './Home.module.css'

export default function Home() {
    return (
        <section className={ styles.home_container }>
            <div className={ styles.home_div_container }>
                <h1>Bem-vindo ao SyncPro</h1>
                <p> Unindo ideias, realizando projetos</p>
            </div>

            <div className={ styles.home_div_container } >
                <img src={ savings } alt='Foto da empresa'/>
            </div>
        </section>
    )
}