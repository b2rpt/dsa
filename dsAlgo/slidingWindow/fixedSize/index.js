// const arr = [1, 2, 3, 4, 5, 6];
// const k = 3;

// let max = 0;
// let temp = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (j = i; j < i + k; j++) {
//     temp = temp + arr[j];
//   }
//   if (temp > max) {
//     max = temp;
//     temp = 0;
//   }
// }
// console.log('max', max);

// const arr = [2,1,5,1,3,2];
// const k = 3;
// let max = 0;
// let windowSum=0
// for (let i = 0; i < k; i++) {
//  windowSum = windowSum + arr[i]
// }
// max = windowSum;
// for (let i = k; i < arr.length; i++) {
//  windowSum = windowSum+arr[i]-arr[i-k];
//  max = Math.max(max, windowSum)
// }

// console.log('max', max);

//--------------------------------------------------------------------------------------------
// const str = "pwwkewabcdefgh";

// let op = "";
// let temp = "";

// for (let i = 0; i < str.length; i++) {
//   for (let j = i + 1; j <= str.length; j++) {
//     if (str[i] !== str[j] && !temp.includes(str[i])) {
//       temp = temp + str[i];
//       if (temp.length > op.length) {
//         op = temp;
//       }

//       break;
//     } else {
//       op = temp;
//       temp = "";
//     }
//   }
// }
// console.log("t", op);

//sliding window of variable length

// const str = "pwwkew"; //longest unique substring - wke
// let max = 0;
// let left = 0;
// let seen = new Set();

// for (let right = 0; right < str.length; right++) {
//   while (seen.has(str[right])) {
//     console.log(
//       "in",
//       { max },
//       { right },
//       str[right],
//       { left },
//       str[left],
//       seen
//     );
//     seen.delete(str[left]);
//     left++;
//   }

//   console.log(
//     "out1",
//     { max },
//     { right },
//     str[right],
//     { left },
//     str[left],
//     seen
//   );
//   seen.add(str[right]);
//   max = Math.max(max, right - left + 1);
//   console.log(
//     "out2",
//     { max },
//     { right },
//     str[right],
//     { left },
//     str[left],
//     seen
//   );
//   console.log("-----------------------------------------");
// }
// console.log(max, [...seen].join(""));

//--------------------------------------------------------------
// longest substring with at most 2 distinct char

let str = "eceba"; //op is ece
let left = 0;
let max = 0;
let res = "";
let seen = new Map();

for (let right = 0; right < str.length; right++) {
  let char = str[right];

  seen.set(char, (seen.get(char) || 0) + 1);
  console.log(char, seen.get(char), seen.size);
  console.log("--------------------------------");

  while (seen.size > 2) {
    const leftChar = str[left];

    console.log("--->", left, leftChar);

    seen.set(leftChar, seen.get(leftChar) - 1);

    if (seen.get(leftChar) === 0) {
      console.log("<---d", leftChar, seen);
      seen.delete(leftChar);
    }

    left++;
    console.log("===========================");
  }

//   max = Math.max(max, right - left + 1);
//   res= str.slice(left,right+1)
  if (right - left + 1 > max) {
    max = right - left + 1;
    res = str.slice(left, right + 1);
  }
  
  console.log(max)
}

console.log(max, [...seen.keys()], res);
