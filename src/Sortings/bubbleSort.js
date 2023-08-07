async function bubbleSort(arr, setElements, sleep) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length - i; j++) {
            if (arr[j - 1] > arr[j]) {
                await sleep(7.5);
                let temp = arr[j - 1];
                arr[j - 1] = arr[j];
                arr[j] = temp;
                setElements([...arr]);
            }
        }
    }
}

export default bubbleSort;