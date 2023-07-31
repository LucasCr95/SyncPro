import savings from '../../img/savings.svg'

import LinkButton from '../layout/LinkButton'

import styles from './Home.module.css'

export default function Home() {
    return (
        <section className={ styles.home_container }>
            <div className={ styles.home_div_container }>
                <h1>Bem-vindo ao <span>SyncPro</span></h1>
                <p>Gerenciamento eficiente em sincronia perfeita</p>
                <LinkButton txtBtn='Novo Projeto' to='/newproject' />
            </div>

            <div className={ styles.home_div_container_img } >
                <img src={ savings } alt='Foto da empresa'/>
            </div>
        </section>
    )
}