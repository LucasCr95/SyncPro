import { Link } from "react-router-dom";

import styles from './LinkButton.module.css'

export default function LinkButton({ txtBtn, to }) {
    return(
        <Link to={ to } className={ styles.btn }>
            { txtBtn }
        </Link>
    )
}