async function linearSearch (elements, target, setActiveIndex, setFind, sleep) {
    for (let i = 0; i < elements.length; i++) {
        setActiveIndex(elements[i]);
        await sleep(125);
        if (elements[i] == target) {
            setActiveIndex(null);
            setFind(elements[i]);
            return i;
        }
    }
    setActiveIndex(null);
    return -1;
};

export default linearSearch;