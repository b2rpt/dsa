//Problem: Middle of Linked List (LC 876)

//1. (Brute Force Way)

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LL {
  constructor() {
    this.head = null;
  }

  getMiddle() {
    let length = 0;
    if (!this.head) return null;

    let current = this.head;
    while (current) {
      length++;
      current = current.next;
    }
    current = this.head;
    let mid = Math.floor(length / 2);
    while (mid > 0) {
      current = current.next;
      mid--;
    }

    return current;
  }
}

//2. slow and fast pointer approch

function getMiddleUsingSlowFastPointer(head) {
  let slow = head;
  let fast = head;

  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow;
}
