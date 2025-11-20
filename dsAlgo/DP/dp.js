// Recursive Fibonacci : Exponential O(2ⁿ)
function fibR(n) {
  if (n <= 1) return n;
  return fibR(n - 1) + fibR(n - 2);
}
// console.log(fibR(45));

//MEMOIZATION (Top-Down DP) :O(n)
function fibM(n, memo = {}) {
  if (n <= 1) return n;

  if (memo[n] !== undefined) return memo[n];

  memo[n] = fibM(n - 1, memo) + fibM(n - 2, memo);

  return memo[n];
}
console.log(fibM(60));

//TABULATION (Bottom-Up DP) : O(n)
function fibT(n) {
  if (n <= 1) return n;
  const dp = new Array(n + 1);
  dp[0] = 0;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
console.log(fibT(60));

// SPACE OPTIMIZED DP (BEST): O(n) ans O(1)

function fibOpt(n) {
  if (n <= 1) return 1;
  let prev = 0;
  let curr = 1;

  for (i = 2; i <= n; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }
  return curr;
}
console.log(`optimized ${fibOpt(60)}`);

//-----------------------------------------------------------------------------------------------------------------
