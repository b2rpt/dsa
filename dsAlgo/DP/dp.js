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
// console.log(climbStairsBF);

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
// console.log(climbStairsDP(5));

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

//DP (Bottom up approach)
function minCostClimbingStairs(cost = []) {
  let n = cost.length;
  let dp = new Array(n);
  dp[0] = cost[0];
  dp[1] = cost[1];

  for (let i = 2; i < n; i++) {
    dp[i] = cost[i] + Math.min(dp[i - 1], dp[i - 2]);
  }
  return Math.min(dp[n - 1], dp[n - 2]);
}
// console.log(minCostClimbingStairs([10, 15, 20]));

// DP with space and time O(n)
function minCostClimbingStairs(cost = []) {
  let prev = cost[0];
  let curr = cost[1];

  for (let i = 2; i < cost.length; i++) {
    const next = cost[i] + Math.min(prev, curr);
    prev = curr;
    curr = next;
  }
  return Math.min(prev, curr);
}
// console.log(minCostClimbingStairs([10, 15, 25]));

//--------------------------------------------------------------------------------------------------
// HOUSE ROBBER — Problem
/*
There are houses in a row.
Each house has some money.
But you cannot rob two adjacent houses,
because doing so will trigger the alarm.
❓ Goal:
Find the maximum amount of money you can rob without robbing adjacent houses.
*/

//Brute force
function rob(nums = []) {
  function solve(i) {
    if (i === 0) return nums[0];
    if (i === 1) return Math.max(nums[0], nums[1]);

    const robThis = nums[i] + solve(i - 2);
    const skipThis = solve(i - 1);

    return Math.max(robThis, skipThis);
  }

  return solve(nums.length - 1);
}
// console.log(rob([4, 1, 2, 7, 5, 3, 1]));

//DP with memo
function rob(nums = []) {
  const memo = {};
  function solve(i) {
    if (i === 0) return nums[0];
    if (i === 1) return Math.max(nums[0], nums[1]);

    if (memo[i] !== undefined) return memo[i];
    const robThis = nums[i] + solve(i - 2);
    const skipThis = solve(i - 1);

    memo[i] = Math.max(robThis, skipThis);
    return memo[i];
  }

  return solve(nums.length - 1);
}
// console.log(rob([4, 1, 2, 7, 5, 3, 1]));

//DP - Bottom Up Approach
function rob(nums = []) {
  const n = nums.length;
  if (n === 0) return 0;
  if (n === 1) return nums[0];

  let dp = new Array(n);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < n; i++) {
    const rob = nums[i] + dp[i - 2];
    const skip = dp[i - 1];
    dp[i] = Math.max(rob, skip);
  }
  return dp[n - 1];
}
// console.log(rob([4, 1, 2, 7, 5, 3, 1]));

//DP by tabular
function rob(nums = []) {
  const n = nums.length;
  if (n === 0) return 0;
  if (n === 1) return nums[0];

  let prev = nums[0];
  let curr = Math.max(nums[0], nums[1]);

  for (let i = 2; i < n; i++) {
    const rob = nums[i] + prev;
    const skip = curr;
    const next = Math.max(rob, skip);

    prev = curr;
    curr = next;
  }
  return curr;
}
// console.log(rob([4, 1, 2, 7, 5, 3, 1]));

//------------------------------------------------------------------------------------------
/*
213. House Robber II
You are a professional robber planning to rob houses along a street. 
Each house has a certain amount of money stashed. 
All houses at this place are arranged in a circle. 
That means the first house is the neighbor of the last one. 
Meanwhile, adjacent houses have a security system connected, 
and it will automatically contact the police if two adjacent houses were broken into on the same night.
*/

function rob2(nums = []) {
  const n = nums.length;
  if (n === 0) return 0;
  if (n === 1) return nums[0];
  function robLinear(nums) {
    let n = nums.length;
    if (n === 0) return 0;
    if (n === 1) return nums[0];
    let prev = nums[0];
    let curr = Math.max(nums[0], nums[1]);

    for (let i = 2; i < n; i++) {
      const rob = nums[i] + prev;
      const skip = curr;
      const next = Math.max(rob, skip);

      prev = curr;
      curr = next;
    }
    return curr;
  }
  const case1 = robLinear(nums.slice(0, n - 1));
  const case2 = robLinear(nums.slice(1));

  return Math.max(case1, case2);
}
// console.log(rob2([0, 0]));

//----------------------------------------------------------------------------------------
/* unique path 
2D Grid DP
leet code #62
*/

//Brute force approach 
uniquePaths = function (m, n) {
  function solve(i, j) {
    if (i >= m || j >= n) return 0;
    if (i === m - 1 && j === n - 1) return 1;
    return solve(i, j + 1) + solve(i + 1, j);
  }
  return solve(0, 0);
};
console.log(uniquePaths(30, 70));

//Memo DP approach 
uniquePaths = function (m, n) {
  function solve(i, j) {
    if (i >= m || j >= n) return 0;
    if (i === m - 1 && j === n - 1) return 1;
    memo[] = solve(i, j + 1) + solve(i + 1, j);
    return memo;
  }
  return solve(0, 0);
};
console.log(uniquePaths(30, 70));