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
// console.log(fibM(60));

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
// console.log(fibT(60));

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
// console.log(`optimized ${fibOpt(60)}`);

//----------------------------------------------------------------------------------------------
/*
Climbing Stairs:
You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
*/

//brute force approach

function climbStairsBF(n) {
  if (n <= 1) return n;
  return climbStairsBF(n - 1) + climbStairsBF(n - 2);
}
console.log(climbStairsBF);

//optimized way DP
function climbStairsDP(n) {
  if (n <= 1) return n;
  let prev = 1;
  let curr = 2;

  for (let i = 2; i < n; i++) {
    const next = prev + curr;
    prev = curr;
    curr = next;
  }
  return curr;
}
console.log(climbStairsDP(5));

//-----------------------------------------------------------------------------------------------------------------
// 746. Min Cost Climbing Stairs
/*
You are given an integer array cost where cost[i] is the cost of ith step on a staircase. Once you pay the cost, you can either climb one or two steps.
You can either start from the step with index 0, or the step with index 1.
Return the minimum cost to reach the top of the floor.
*/

//brute f0rce approach
function minCostClimbingStairs(cost = []) {
  const n = cost.length;
  function solve(i) {
    if (i === 0 || i === 1) return cost[i];
    return cost[i] + Math.min(solve(i - 1), solve(i - 2));
  }

  return Math.min(solve(n - 1), solve(n - 2));
}
// console.log(minCostClimbingStairs([10, 15, 20]));

//By DP approach (MEMO)
function minCostClimbingStairs(cost = []) {
  const n = cost.length;
  let memo = {};
  function solve(i) {
    if (i === 0 || i === 1) return cost[i];
    if (memo[i] !== undefined) return memo[i];
    memo[i] = cost[i] + Math.min(solve(i - 1), solve(i - 2));
    return memo[i];
  }

  return Math.min(solve(n - 1), solve(n - 2));
}
// console.log(minCostClimbingStairs([10, 15, 20]));
