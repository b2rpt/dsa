// pop() and push() is the 2 array methods wich can be used to make stack, next ill not use even array to make stack ds.

// class Stack {
//   constructor() {
//     this.items = [];
//   }

//   push(element) {
//     this.items.push(element);
//   }

//   pop() {
//     if (this.isEmpty()) {
//       return "Stack is empty!";
//     }
//     return this.items.pop();
//   }

//   peek() {
//     return this.items[this.items.length - 1];
//   }

//   isEmpty() {
//     return this.items.length === 0;
//   }

//   size() {
//     return this.items.length;
//   }

//   print() {
//     console.log(this.items.join(" "));
//   }
// }

// Example usage:
// let stack = new Stack();
// stack.push(10);
// stack.push(20);
// stack.push(30);
// stack.print(); // 10 20 30
// console.log("Top:", stack.peek()); // 30
// stack.pop();
// stack.print(); // 10 20

//without an array , implenting stack

class Stack {
  constructor() {
    this.items = {};
    this.count = 0;
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  pop() {
    if (!this.count) return console.log("stack is alredy empty");
    let item = this.items[this.count];
    delete this.items[this.count];
    this.count--;
    return item;
  }

  peek() {
    if (!this.count) return console.log("stack is alredy empty");
    return this.items[this.count - 1];
  }

  size() {
    return this.count;
  }

  clear() {
    this.items = {};
    this.count = 0;
  }
}

const stack = new Stack();
stack.push(100);
stack.push(200);

console.log(stack.peek());
