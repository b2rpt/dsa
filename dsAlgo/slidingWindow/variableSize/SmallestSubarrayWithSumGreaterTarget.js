/*
Given an array of positive integers nums and an integer target, return the minimal length of a contiguous subarray of which the sum is greater than or equal to target.
If there is no such subarray, return 0.

ex:
Input: target = 7, nums = [2,3,1,2,4,3]
Output: 2
Explanation: The subarray [4,3] has a sum of 7 and is the smallest with required condition.
*/

const nums = [2, 3, 1, 2, 4, 3];
const target = 7;

// const nums = [1, 2, 3, 4, 5];
// const target = 15;

//-------------------------------------------------------------------------/
// Brute Force Approach

// let minLength = Infinity;
// let winsum = 0;

// for (let i = 0; i < nums.length; i++) {
//   winsum = 0;
//   for (j = i; j < nums.length; j++) {
//     winsum = winsum + nums[j];
//     if (winsum >= target) {
//       minLength = Math.min(minLength, j - i + 1);
//       break;
//     }
//   }
// }
// console.log(minLength === Infinity ? 0 : minLength);
//---------------------------------------------------------------------------/

//variable size sliding window approach

let left = 0;
let winsum = 0;
let minLength = Infinity;
for (let right = 0; right < nums.length; right++) {
  winsum += nums[right];
  while (winsum >= target) {
    winsum -= nums[left];
    minLength = Math.min(minLength, right - left + 1);
    left++;
  }
}
console.log(minLength);
