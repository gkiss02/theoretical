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
    const [isEmpty, setIsEmpty] = useState(false);
    const [isSearching, setIsSearching] = useState(false);
    const [isFound, setIsFound] = useState(true);

    const elements = []
    for (let i = 1; i <= 50; i++) {
        elements.push(i)
    }

    function linearSearchHandler (event) {
        event.preventDefault();
        reset();
        if (searchedNumber == null || searchedNumber == '')  setIsEmpty(true);
        else {
            linearSearch(elements, searchedNumber, setActiveIndex, setFind, sleep, setIsSearching, setIsFound)
        }
    }

    async function binarySearchHandler (event) {
        event.preventDefault();
        reset();
        if (searchedNumber == null || searchedNumber == '')  setIsEmpty(true);
        else {
            binarySearch(elements, searchedNumber, setLeft, setRight, setMid, setActualArr, setFind, sleep, setIsSearching, setIsFound)
        }
    }

    function searchHandler (event) {
        if (event.target.value != '') setIsEmpty(false);
        setSearchedNumber(event.target.value)
    }

    function reset () {
        setActiveIndex(null);
        setFind(null);
        setLeft(null);
        setRight(null);
        setMid(null);
        setIsEmpty(false);
        setActualArr([]);
        setIsFound(true);
    }

    function resetHandler (event) {
        event.preventDefault();
        reset();
        setSearchedNumber(''); 
    }

    return (
        <div>
            <div className={styles['elements-container']}>
                {elements.map((item) =>
                <div key={item}
                    className={`${styles.element} 
                    ${activeIndex === item ? styles.active : ''} 
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
                <input type="number" 
                    className={styles['number-input']} 
                    onChange={searchHandler} 
                    style={{border: isEmpty && '1.5px red solid'}}
                    value={searchedNumber} >
                </input>
            </ButtonContainer>
            <ButtonContainer>
                <Button onClick={linearSearchHandler} disabled={isSearching}>Linear Search</Button>
                <Button onClick={binarySearchHandler} disabled={isSearching}>Binary Search</Button>
                <Button onClick={resetHandler} disabled={isSearching}>Reset</Button>
            </ButtonContainer>
            <p className={styles.text} style={{display: isEmpty ? 'block' : 'none'}}>Please enter a number first!</p>
            <p className={styles.text} style={{display: !isFound ? 'block' : 'none'}}>Element is not in the array!</p>
        </div>
    )
}

export default Search;