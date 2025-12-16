/*
Problem: Longest Subarray with Sum ≤ K
Input: nums = [1, 2, 1, 0, 1, 1, 0], k = 4
Output: 5
*/

const nums = [5, 1, 1, 1, 1]; //[3, 1, 2, 1] //[2,2,2]
const k = 2;
x = Infinity
let left = 0;
let sum = 0;
let maxLength = 0;

for (let right = 0; right < nums.length; right++) {
  sum += nums[right];
  if (sum > k) {
    console.log(sum, right, left);
    sum -= nums[left];
    left++;
  }
  maxLength = Math.max(maxLength, right - left + 1);
}

console.log(maxLength);
