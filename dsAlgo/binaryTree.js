class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

const node = new TreeNode(1);

node.left = new TreeNode(2);
node.right = new TreeNode(3);

node.left.left = new TreeNode(4);
node.left.right = new TreeNode(5);

// node.right.right = new TreeNode(6);

// console.log(node);

/*----------------------DFS-depth first approach--------------
1. preOder - Root->Left->Right
2.inOrder  - Left->Root->Right
3.postOrder- Left->Right->Root
*/

function preOrder(node) {
  if (!node) return;
  console.log(node.value); //visit root
  preOrder(node.left);
  preOrder(node.right);
}

function inOrder(node) {
  if (!node) return;
  inOrder(node.left);
  console.log(node.value);
  inOrder(node.right);
}

function postOrder(node) {
  if (!node) return;
  postOrder(node.left);
  postOrder(node.right);
  console.log(node.value);
}

// console.log("Preorder:");
// preOrder(node);

// console.log("Inorder:");
// inOrder(node);

// console.log("Postorder:");
// postOrder(node);

/*
🟢 Basic Binary Tree Problem #1
Find the Height (or Maximum Depth) of a Binary Tree
👉 Height / Depth = number of edges (or nodes) in the longest path from root → leaf.
*/

//1. Brute Force (Recursive DFS)

const height = (node) => {
  if (!node) return 0;
  let leftHeight = height(node.left);
  let rightHeight = height(node.right);

  return 1 + Math.max(leftHeight, rightHeight);
};
// console.log(height(node));/

//-------------------------------------------------------------
/*
🌳 Problem: Count total nodes
👉 Given the root of a binary tree, return the total number of nodes present in the tree.
*/

function countNodes(node) {
  if (node == null) return 0;

  let leftNodeCount = countNodes(node.left);
  let rightNodeCount = countNodes(node.right);
  return 1 + leftNodeCount + rightNodeCount;
}

// console.log(countNodes(node))

/*
------------------------------------------------------------------------
Problem: Find sum of all nodes in a Binary Tree
*/

function sumOfNodes(node) {
  if (node == null) return 0;
  let leftNodeSum = sumOfNodes(node.left);
  let rightNodeSum = sumOfNodes(node.right);
  return node.value + leftNodeSum + rightNodeSum;
}
// console.log(sumOfNodes(node));/

/*
Problem: Find the maximum node value in a binary tree
*/

function getMaxNodeValue(node) {
  if (node == null) return -Infinity;
  let leftMaxNodeValue = getMaxNodeValue(node.left);
  let rightMaxNodeValue = getMaxNodeValue(node.right);
  return Math.max(node.value, leftMaxNodeValue, rightMaxNodeValue);
}
// console.log(getMaxNodeValue(node));/

/*
--------------------------------------------------------------
Find Minimum Node Value in a Binary Tree
*/
