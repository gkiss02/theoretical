import styles from './Search.module.css'
import Button from '../Components/Button';
import ButtonContainer from '../UI/ControlContainer';
import sleep from '../HelperFunctions/sleep';
import { useState } from 'react';
import linearSearch from '../Searches/linearSearch';

async function binarySearch(array, target, setLeft, setRight, setFind, sleep) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (array[mid] === target) {
            return mid;
        } else if (array[mid] < target) {
            await sleep(1000);

            left = mid + 1;
        } else {
            await sleep(1000);

            right = mid - 1;
        }
    }
    return -1;
}

function Search () {
    const [activeIndex, setActiveIndex] = useState(null);
    const [find, setFind] = useState(null);
    const [searchedNumber, setSearchedNumber] = useState(null);
    const [left, setLeft] = useState(null);
    const [right, setRight] = useState(null);

    const elements = []
    for (let i = 1; i <= 50; i++) {
        elements.push(i)
    }

    function linearSearchHandler (event) {
        event.preventDefault();
        linearSearch(elements, searchedNumber, setActiveIndex, setFind, sleep)
    }

    function binarySearchHandler (event) {
        event.preventDefault();
        binarySearch(elements, searchedNumber, setActiveIndex, setFind, sleep)
    }

    function searchHandler (event) {
        setSearchedNumber(event.target.value)
    }

    function resetHandler (event) {
        event.preventDefault();
        setActiveIndex(null);
        setFind(null);
        setSearchedNumber(null);
    }

    return (
        <div>
            <div className={styles['elements-container']}>
                {elements.map((item) =>
                <div key={item}
                    className={`${styles.element} ${activeIndex === item ? styles.active : ''} ${find === item ? styles.find : ''}`}>
                    <p>{item}</p>
                </div> 
                )}
            </div>
            <ButtonContainer>
                <label className={styles.label}>Enter the number to search for:</label>
                <input type="number" className={styles['number-input']} onChange={searchHandler}></input>
            </ButtonContainer>
            <ButtonContainer>
                <Button onClick={linearSearchHandler}>Linear Search</Button>
                <Button onClick={binarySearchHandler}>Binary Search</Button>
                <Button onClick={resetHandler}>Reset</Button>
            </ButtonContainer>
        </div>
    )
}

export default Search;