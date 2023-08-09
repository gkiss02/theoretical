async function linearSearch (elements, target, setActiveIndex, setFind, sleep, setIsSearching, setIsFound) {
    setIsSearching(true);
    for (let i = 0; i < elements.length; i++) {
        setActiveIndex(elements[i]);
        await sleep(125);
        if (elements[i] == target) {
            setActiveIndex(null);
            setIsSearching(false);
            setFind(elements[i]);
            return i;
        }
    }
    setIsSearching(false);
    setActiveIndex(null);
    setIsFound(false);
    return -1;
};

export default linearSearch;