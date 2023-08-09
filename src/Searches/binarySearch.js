async function binarySearch(elements, target, setLeft, setRight, setMid, setActualArr, setFind, sleep) {
    let left = 0;
    let right = elements.length - 1;
    while (left <= right) {
        await sleep(1000);
        let mid = Math.floor((left + right) / 2);
        setRight(elements[right]);
        setLeft(elements[left]);
        setMid(elements[mid]);
        console.log('left: ' + left);
        console.log('right: ' + right);
        const actualArr = [];
        for (let i = left + 1; i <= right - 1; i++) {
            actualArr.push(elements[i])
        }
        console.log('actual array: ' + actualArr);
        setActualArr(actualArr);
        if (elements[mid] == target) {
            setLeft(null);
            setRight(null);
            setMid(null);
            setActualArr([]);
            setFind(elements[mid]);
            return mid
        } else if (elements[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
}

export default binarySearch;