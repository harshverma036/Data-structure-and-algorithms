/*
    Example: 3.
    => Creating pointer or values that corresponds to an index or position and move towards the begnning, end or middle based on a certain condition.

    Q. Write a function called sumZero which accepts a sorted array of intergers. The function should find the first pair where the sum is zero(0). Return an array that includes both values that sum to zero or undefined if a pair does not exists.
    Like:
        sumZero([-3, -2, -1, 0, 1,2,3]); // [-3, 3]
        sumZero([-2, 0, 1, 3]); // undefined
*/

// Solution one(Noob)
function sumZeroNoob(arr) {
    for (let i =0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] + arr[j] === 0){
                return [arr[i], arr[j]];
            }
        }
    }
}

console.log(sumZeroNoob([-3, -2, -1, 0, 1, 2, 3, 4]));
console.log(sumZeroNoob([-2, 0, 1, 3]));

// Solution two(Pro)
function sumZero(arr) {
    let left = 0;
    let right = arr.length - 1;
    while (left < right) {
        let sum = arr[left] + arr[right];
        console.log(left)
        console.log(right)
        console.log(sum)
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right --;
        } else {
            left ++;
        }
    }
}

console.log(sumZero([-2,-1, 0, 2, 1]))