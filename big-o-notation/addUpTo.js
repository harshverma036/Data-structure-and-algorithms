// Solution 1
function addUpToSolOne(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

console.log(addUpToSolOne(10));

// Solution 2
function addUpToSolTwo(n) {
    return n * (n + 1) / 2;
}

console.log(addUpToSolTwo(10));

/*
    there are two soltions for this problem.
    1. addUpToSolOne(n)
    2. addUpToSolTwo(n)
    but the question is which one is better?
    - so to get the answer of this question let's compare the number of operations in both the solutions.
      The number of oprations in 1 is depend upon n. As n grows the number of operations increases.
      but in 2 soltion it does'nt matter what is the value of n. the number of operations is constant. i.e: 2
    
      so The Big O notation for problem 1 is O(n)
      and the Big O notation for problem 2 is O(1)


      hence 2 is better than 1 for now.!!
*/