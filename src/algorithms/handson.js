const chalk = require('chalk');

/**
 * Fibonacci series - DP (Dynamic Programming algorithm)
 * Find the value of nth element in Fibonacci sequence
 */
function fibonacciByDP(n) { // T: O(n); S: O(n)
  const seq = [1, 1];
  for(let i = 2; i<n; i++){
    seq[i] = seq[i-1] + seq[i-2];
  }
  return seq[n-1];
}
function fibonacciByRec(n) { // T: O(2^n); S: O(1)
  function rec(n) {
    if(n<2) {
      return 1;
    }
    return rec(n-1) + rec(n-2);
  }
  return rec(n-1);
}
const n = 8;
console.log(`Fibonacci of ${chalk.bold(n)}th element - DP (Dynamic Programming):`, fibonacciByDP(n));
console.log(`Fibonacci of ${chalk.bold(n)}th element - Recursive:`, fibonacciByRec(n));