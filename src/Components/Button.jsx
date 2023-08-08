import styles from './Button.module.css';

function Button (props) {
    return (
        <button onClick={props.onClick} disabled={props.disabled} className={styles.button}>
            {props.children}
        </button>
    )
}

export default Button;