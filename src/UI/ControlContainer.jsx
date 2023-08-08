import styles from './ControlContainer.module.css';

function ControlContainer (props) {
    return (
        <div className={styles.container}>
            {props.children}
        </div>
    )
}

export default ControlContainer;