function countUpAndDown(n) {
    console.log("going up");
    for (var i = 0; i < n; i++) {
        console.log(i);
    }
    console.log("going down");
    for (let j = n - 1; j <= 0; j--) {
        console.log(j);
    }
}

countUpAndDown(10); // Big 0 -> O(n)
