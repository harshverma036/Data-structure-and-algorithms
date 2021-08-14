function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}

console.log(sum([1, 2]));

/* 
    space complexity: O(1) because we are not creating new variables here. we are only changing the value of the existing variables. and space for number datatype is constant. 
    time complexity: O(n) because it depends upon the number of elements in the array.
*/

function double(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(arr[i] * 2);
    }
    return newArr;
}

console.log(double([1,2,3,4,5]));

/*
    space complexity: O(n) because we are pushing new item to newArr so the space will increase as length of array increase;.
    time complexity: O(n) because it depends upon the number of elements in the array.
*/