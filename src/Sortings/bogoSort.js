async function bogoSort(arr, setElements, sleep) {
    while (!isSorted(arr)) {
        arr.sort((a, b) => 0.5 - Math.random());
        setElements([...arr]);
        await sleep(1000);
        console.log(arr);
    }
}

function isSorted (arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i + 1] < arr[i]) return false;
    }
    return true;
}

export default bogoSort;