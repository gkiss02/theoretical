async function quickSort(arr, low, high, setElements, sleep) {
    if (low < high) {
        const pivotIndex = await partition(arr, low, high, setElements, sleep);
        await quickSort(arr, low, pivotIndex - 1, setElements, sleep);
        await quickSort(arr, pivotIndex + 1, high, setElements, sleep);
    }
}
async function partition(arr, low, high, setElements, sleep) {
    const pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
        if (arr[j] < pivot) {
            i++;
            await sleep(50);
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
            setElements([...arr]);
        }
    }

    await sleep(50);
    let temp = arr[i + 1];
    arr[i + 1] = arr[high];
    arr[high] = temp;
    setElements([...arr]);

    return i + 1;
}

export default quickSort;