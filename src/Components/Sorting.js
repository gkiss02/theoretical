import styles from './Sorting.module.css'

function Sorting () {
    const elements = []

    let height = 5;
    for (let i = 0; i < 50; i++) {
        elements[i] = height;
        height = height + 1;
    }
    
    elements.sort((a, b) => 0.5 - Math.random());

    function clickHandle(event) {
        event.preventDefault()
    }

    return (
        <div>
            <div className={styles.container}>
                {elements.map((item) =>
                    <div key={item} className={styles.element}  style={{height: `${item}rem`}}></div>
                )}
            </div>
            <button onClick={clickHandle}>Sort</button>
        </div>
    )
}

export default Sorting;