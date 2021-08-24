/*
    Example: 5
    Q. Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array.
    Like:
        maxSubarraySum([1,2,5,2,8,1,5], 2); //10
        maxSubarraySum([1,2,5,2,8,1,5], 4); //17
        maxSubarraySum([4,2,1,6], 1); //6
        maxSubarraySum([], 2); // null
*/

// Solution 1 (noob)
function maxSubarraySumNoob(arr, num) {
    if (num > arr.length) return null;
    var max = 0;
    for (let i = 0; i < arr.length; i++) {
        temp = 0;
        for (let j = 0; j < num; j++) {
            temp += arr[i+j]
            console.log(arr[i+j])
        }
        if (temp > max) {
            max = temp;
        }
    }
    return max;
} 
// Time Complexity - O(n)

console.log(maxSubarraySumNoob([1,2,5,2,8,1,5], 4));

// Solution 2 (Pro) sliding window approch
function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;
    if (num > arr.length) return null;
    for (let i = 0; i < num; i++) {
        tempSum += arr[i];
    }
    maxSum = tempSum
    console.log(maxSum);
    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        if (tempSum > maxSum) maxSum = tempSum;
    }
    return maxSum;
}
// Time Complexity - O(n)

console.log(maxSubarraySum([1,2,5,2,8,1,5], 4));