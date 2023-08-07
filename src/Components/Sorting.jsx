import React, { useState, useEffect } from 'react';
import styles from './Sorting.module.css';
import quickSort from  '../Sortings/quickSort'
import bubbleSort from  '../Sortings/bubbleSort'
import bogoSort from '../Sortings/bogoSort';

function Sorting() {
    const [elements, setElements] = useState([]);
    const [isSorting, setIsSorting] = useState(false);
    const [sortingType, setSortingType] = useState('bubbleSort');

    function sortingChangeHandler(event) {
        const value = event.target.value;
        setSortingType(value);
        console.log(value);
    }

    useEffect(() => {
        shuffle();
    }, []);

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function shuffle() {
    const arr = [];
    let height = 5;
    for (let i = 0; i < 50; i++) {
        arr[i] = height;
        height = height + 1;
    }
    arr.sort((a, b) => 0.5 - Math.random());
    setElements(arr);
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
            case 'bogoSort':
                arr = await bogoSort(arr, setElements, sleep);
                break;
            default:
                break;
        }
        setIsSorting(false);
    }
}

return (
    <div>
        <div className={styles.container}>
            {elements.map((item) =>
                <div key={item} className={styles.element} style={{ height: `${item}rem` }}></div>
            )}
        </div>
        <div>
            <select onChange={sortingChangeHandler}>
                <option value="bubbleSort">Bubble Sort</option>
                <option value="quickSort">Quick Sort</option>
                <option value="bogoSort">Bogo Sort</option>
            </select>
            <button onClick={clickHandle} disabled={isSorting}>
                {isSorting ? 'Sorting...' : 'Sort'}
            </button>
            <button onClick={shuffle}>Shuffle</button>
        </div>
    </div>
)}

export default Sorting;
