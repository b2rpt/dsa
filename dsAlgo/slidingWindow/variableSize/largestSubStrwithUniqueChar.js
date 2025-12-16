let str = 'pwwkew';

let left =0
let seen = new Set();
let maxLength=0;

for (let r=0;r<str.length; r++){
    let char = str[r]
    while(seen.has(char)){
        seen.delete(str[left]);
        left++
    }
    seen.add(char);
    maxLength= Math.max(maxLength, r-left+1)
}

console.log(maxLength)