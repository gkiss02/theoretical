import styles from './Search.module.css'
import Button from '../Components/Button';
import ButtonContainer from '../UI/ControlContainer';
import sleep from '../HelperFunctions/sleep';
import { useState } from 'react';
import linearSearch from '../Searches/linearSearch';
import binarySearch from '../Searches/binarySearch';

function Search () {
    const [activeIndex, setActiveIndex] = useState(null);
    const [find, setFind] = useState(null);
    const [searchedNumber, setSearchedNumber] = useState(null);
    const [left, setLeft] = useState(null);
    const [right, setRight] = useState(null);
    const [mid, setMid] = useState(null);
    const [actualArr, setActualArr] = useState([]);

    const elements = []
    for (let i = 1; i <= 50; i++) {
        elements.push(i)
    }

    function linearSearchHandler (event) {
        event.preventDefault();
        reset();
        linearSearch(elements, searchedNumber, setActiveIndex, setFind, sleep)
    }

    async function binarySearchHandler (event) {
        event.preventDefault();
        reset();
        binarySearch(elements, searchedNumber, setLeft, setRight, setMid, setActualArr, setFind, sleep)
    }

    function searchHandler (event) {
        setSearchedNumber(event.target.value)
    }

    function reset () {
        setActiveIndex(null);
        setFind(null);
        setLeft(null);
        setRight(null);
        setMid(null);
        setActualArr([]);
    }

    function resetHandler (event) {
        event.preventDefault();
        reset();
    }

    return (
        <div>
            <div className={styles['elements-container']}>
                {elements.map((item) =>
                <div key={item}
                    className={`${styles.element} ${activeIndex === item ? styles.active : ''} 
                    ${actualArr.includes(item) ? styles.includes : ''} 
                    ${mid === item && (left != item && right != item) ? styles.mid : ''} 
                    ${left == item || right == item ? styles.active : ''} 
                    ${find === item ? styles.find : ''} 
                    `}>
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