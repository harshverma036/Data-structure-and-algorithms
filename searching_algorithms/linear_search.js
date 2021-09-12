/*
    Q. Write a function which accepts two arrguments, 1st array and 2nd is the value.
       Search for that value into array, if it exists then return it's index and if not then return -1.
*/

function linearSearchNewbie(arr, val) {
    if (arr.length === 0) return;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === val) {
            return i;
        }
    }
    return -1;
}

console.log(linearSearchNewbie([1,2,3,4,5], 3));