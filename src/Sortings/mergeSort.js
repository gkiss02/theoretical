async function mergeSort(arr, setElements, sleep) {
    const n = arr.length;

    for (let currentSize = 1; currentSize < n; currentSize *= 2) {
        for (let leftStart = 0; leftStart < n - 1; leftStart += 2 * currentSize) {
            const mid = Math.min(leftStart + currentSize - 1, n - 1);
            const rightEnd = Math.min(leftStart + 2 * currentSize - 1, n - 1);

            const sortedLeft = arr.slice(leftStart, mid + 1);
            const sortedRight = arr.slice(mid + 1, rightEnd + 1);

            const mergedArray = merge(sortedLeft, sortedRight);

            for (let i = 0; i < mergedArray.length; i++) {
                arr[leftStart + i] = mergedArray[i];
            }

            setElements([...arr]);
            await sleep(75);
        }
    }
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }
    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

export default mergeSort;
