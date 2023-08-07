async function selectionSort(arr, setElements, sleep) {
    let sortedArr = arr.slice();

    for (let i = 0; i < sortedArr.length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < sortedArr.length; j++) {
            if (sortedArr[j] < sortedArr[minIndex]) {
                minIndex = j;
            }
        }

        if (minIndex !== i) {
            let temp = sortedArr[i];
            sortedArr[i] = sortedArr[minIndex];
            sortedArr[minIndex] = temp;
            await sleep(100);
            setElements([...sortedArr]);
        }
    }
}

export default selectionSort;