//Find Middle of Array (Slow & Fast)
let arr = [10, 20, 30, 40, 50];

function getMiddle(arr) {
  let slow = 0;
  let fast = 0;

  while (fast < arr.length - 1 && fast + 1 < arr.length) {
    slow = slow + 1;
    fast = fast + 2;
  }
  return arr[slow];
}

//Check if an array is a palindrome using slow/fast.

let arrPlindrom = [1, 2, 3, 2, 1];

function isPalindrome(arr) {
  let slow = 0;
  let fast = 0;

  // Step 1: Find the middle using slow & fast
  while (fast < arr.length - 1 && fast + 1 < arr.length) {
    slow++;
    fast += 2;
  }

  // Step 2: Reverse the second half in-place
  let start = arr.length % 2 === 0 ? slow : slow + 1;
  let left = start;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  // Step 3: Compare first half and reversed second half
  let i = 0, j = arr.length - 1;
  while (i < slow) {
    if (arr[i] !== arr[j]) return false;
    i++;
    j--;
  }

  return true;
}

