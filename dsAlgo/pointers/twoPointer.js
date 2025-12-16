//344. Reverse String
var reverseString = function (s) {
  let l = 0;
  let r = s.length - 1;

  while (l < r) {
    let temp = s[l];
    s[l] = s[r];
    s[r] = temp;
    l++;
    r--;
    console.log(l, r);
  }

  return s;
};

// console.log(reverseString(["h", "i"]));

//125. Valid Palindrome
var isPalindrome = function (s) {
  s = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    if (s[l] === s[r]) {
      l++;
      r--;
    } else return false;
  }
  return true;
};
// console.log(isPalindrome("A man, a plan, a canal: Panama"));

/*
680. Valid Palindrome II
Given a string s, return true if the s can be palindrome after deleting at most one character from it.
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  let l = 0;
  let r = s.length - 1;
  while (l < r) {
    if (s[l] === s[r]) {
      l++;
      r--;
    } else return false;
  }
  return true;
};
// console.log(validPalindrome("abaaaaa"))

//1768. Merge Strings Alternately
var mergeAlternately = function (word1, word2) {
  let p1 = 0;
  let p2 = 0;
  let res = "";

  while (p1 < word1.length || p2 < word2.length) {
    if (p1 < word1.length) res += word1[p1++];
    if (p2 < word2.length) res += word2[p2++];
  }
  return res;
};
console.log(mergeAlternately("ab", "pqrs"));
