const filterAnagram = wordsArray => {
    let hash = {};

    wordsArray.map(value => {
        let alphabeticallyOrder = value.split("").sort().join("");
        hash[alphabeticallyOrder] = !hash[alphabeticallyOrder] ? [value] : hash[alphabeticallyOrder].concat(value);
    });

    return Object.keys(hash).reduce((arr, idx) => {
        if (
            Object.values(hash)
            .filter(v => v.length > 1)
            .includes(hash[idx])
        ) {
            arr[idx] = hash[idx]
        } else {
            arr[idx] = hash[idx]
        }

        return Object.values(arr);
    }, {});
}

module.exports = {
    filterAnagram
}