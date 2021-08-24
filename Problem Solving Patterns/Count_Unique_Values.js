/*
    Example: 4
    Q. Implement a function called countUniqueValues which accepts a sorted array and counts the unique values in the array. There can be -ve numbers in the array but it will always be shorted.
    Like:
        countUniqueValues([1,1,1,2,4]); // 2
        countUniqueValues([-2, -1, -1, 0, 1]); // 4
        countUniqueValues([]); // 0
*/

// First solution (Noob)
function countUniqueValuesNoob(arr) {
    if (arr.length === 0) return 0;
    let i = 0;
    for (let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
            console.log(arr[i] = arr[j]);
        }
    }
    return i + 1;
}

console.log(countUniqueValuesNoob([11,2,3,4,5,6,6]));