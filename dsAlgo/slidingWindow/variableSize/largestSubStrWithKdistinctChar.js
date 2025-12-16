let str = "eceba";
let k = 2;
//op 3 -> ece

// leetCode premium question

let left = 0;
let maxLength = 0;
let seen = new Map();

for (let right = 0; right < str.length; right++) {
  let char = str[right];
  seen.set(char, seen.get(char) ? seen.get(char) + 1 : 1);
  while (seen.size > k) {
    seen.set(str[left], seen.get(str[left]) - 1);
    if (seen.get(str[left]) === 0) {
      seen.delete(str[left]);
    }
    left++;
  }
  maxLength = Math.max(maxLength, right - left + 1);
}
console.log(maxLength);
