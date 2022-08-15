function insertionSort(arr) {
  console.log(arr);
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    for (var j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      // console.log(j, arr[j], currentVal, arr[j+1])
      console.log(arr, "before");
      arr[j + 1] = arr[j];
      console.log(arr, "after");
    }
    arr[j + 1] = currentVal;
    console.log(arr, "final");
  }
  return arr;
}

console.log(insertionSort([8, 1, 43, 2]));
