function binarySearch(arr, search) {
    var start = 0;
    var end = arr.length - 1;
    var middle = Math.floor((start + end) / 2)
    console.log(start, end, middle)
    while(arr[middle] !== search && start <= end) {
        if (search < arr[middle]) {
            end = middle - 1;
        } else {
            start = middle + 1;
        }
        middle = Math.floor((start + end) / 2)
    }

    if (arr[middle] === search) {
        return middle;
    } else {
        return -1;
    }
}

console.log(binarySearch([5,7,9,10,33,88,90], 90))