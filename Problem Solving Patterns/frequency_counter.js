/*
  Example: 1
  Q. write a function called same which accepts two arrays. The function should return true if every value in an array has its corresponding value squared in the second array. The frequency of the values must be the sam.
      Like: same([1,2,3], [4,1,9]); //true
            same([1,2,3], [1,9]); //false
*/
// First Solution (Noob)
function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        let correctIndex = arr2.indexOf(arr1[i] ** 2);
        if (correctIndex === -1) return false;
    }
    return true;
}

console.log(same([1,2,3,5], [25, 9,1,4])); // this has time complexity O(n2);

// Second Solution (Pro)
function sameNew(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};

    for (let i = 0; i < arr1.length; i++) {
        frequencyCounter1[arr1[i]] = frequencyCounter1[arr1[i]] ? frequencyCounter1[arr1[i]] + 1 : 1;
    }

    for (let i = 0; i < arr2.length; i++) {
        frequencyCounter2[arr2[i]] = frequencyCounter2[arr2[i]] ? frequencyCounter2[arr2[i]] + 1 : 1;
    }
    console.log(frequencyCounter1);
    console.log(frequencyCounter2);

    for (let val of arr2) {
        console.log(val);
    }
    for (let key in frequencyCounter1) {
        console.log(key)
        if (!(key ** 2 in frequencyCounter2)) {
            return false;
        }
        if (frequencyCounter2[key**2] !== frequencyCounter1[key]) {
            return false;
        }
    }
    return true;
}

console.log(sameNew([1,2,3,5,3,5], [25, 9,1,4,9,25])); // this is time complexity of O(n)