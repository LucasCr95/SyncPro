import styles from "./SubmitButton.module.css"

export default function SubmitButton({ textBtn }) {
    return(
        <div>
            <button className={ styles.btn }>
                { textBtn } 
            </button>
        </div>
    )
}