/*
 Q. Collect all odd values from an array using recursion
*/

function collectiveOddValues(arr) {
    
    let result = []

    function helper(input) {
        if (input.length === 0) {
            return;
        }

        if (input[0] % 2 !== 0) {
            result.push(input[0]);
        }

        helper(input.slice(1));
    }

    helper(arr);

    return result;
}

console.log(collectiveOddValues([1,2,3,4,5,6]));

// Pure recursive way...
function rCollectiveOddValues(arr) {

    let newArr = [];

    if (arr.length === 0) {
        return;
    }

    if (arr[0] % 2 !== 0) {
        newArr.push(arr[0])
    }

    newArr = newArr.concat(rCollectiveOddValues(arr.slice(1)));

    return newArr;
}

console.log(rCollectiveOddValues([1,2,3,4,5,6]));