import { useState, useEffect } from 'react';
import styles from './Sorting.module.css';
import quickSort from  '../Sortings/quickSort'
import bubbleSort from  '../Sortings/bubbleSort'
import insertionSort from  '../Sortings/insertionSort'
import selectionSort from  '../Sortings/selectionSort'
import mergeSort from '../Sortings/mergeSort'
import Button from '../Components/Button'
import ButtonContainer from '../UI/ControlContainer';
import sleep from '../HelperFunctions/sleep';

function Sorting() {
    const [elements, setElements] = useState([]);
    const [isSorting, setIsSorting] = useState(false);
    const [sortingType, setSortingType] = useState('bubbleSort');
    const [sorted, setSorted] = useState(false);
    const [warningText, setWarningText] = useState(false);

    function sortingChangeHandler(event) {
        const value = event.target.value;
        setSortingType(value);
    }

    useEffect(() => {
        shuffle();
    }, []);

function shuffle() {
    const arr = [];
    let height = 5;
    for (let i = 0; i < 50; i++) {
        arr[i] = height;
        height = height + 1;
    }
    arr.sort((a, b) => 0.5 - Math.random());
    setElements(arr);
    setSorted(false);
    setWarningText(false);
}

function warningTextHandle() {
    setWarningText(true);
}

async function clickHandle(event) {
    event.preventDefault();
    if (!isSorting) {
        setIsSorting(true);
        let arr = [...elements];
        switch (sortingType) {
            case 'bubbleSort':
                arr = await bubbleSort(arr, setElements, sleep);
                break;
            case 'quickSort':
                arr = await quickSort(arr, 0, arr.length -1, setElements, sleep);
                break;
            case 'insertionSort':
                arr = await insertionSort(arr, setElements, sleep);
                break;
            case 'selectionSort':
                arr = await selectionSort(arr, setElements, sleep);
                break;  
            case 'mergeSort':
                arr = await mergeSort(arr, setElements, sleep);
                break;          
            default:
                break;
        }
        setIsSorting(false);
        setSorted(true);
    }
}

return (
    <div>
        <div className={styles.container}>
            {elements.map((item) =>
                <div key={item} className={styles.element} style={{ height: `${item}rem` }}></div>
            )}
        </div>
        <ButtonContainer>
            <select onChange={sortingChangeHandler} className={styles.select} disabled={isSorting}>
                <option value="bubbleSort">Bubble Sort</option>
                <option value="quickSort">Quick Sort</option>
                <option value="insertionSort">Insertion Sort</option>
                <option value="selectionSort">Selection Sort</option>
                <option value="mergeSort">Merge Sort</option>
            </select>
            <Button onClick={!sorted ? clickHandle : warningTextHandle} disabled={isSorting}>{isSorting ? 'Sorting...' : 'Sort'}</Button>
            <Button onClick={shuffle} disabled={isSorting}>Shuffle</Button>
        </ButtonContainer>
        {warningText && <p className={styles.text}>Please shuffle first!</p>}
    </div>
)}

export default Sorting;
