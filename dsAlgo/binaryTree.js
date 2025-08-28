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
Basic Binary Tree Problem #1
Find the Height (or Maximum Depth) of a Binary Tree
Height / Depth = number of edges (or nodes) in the longest path from root → leaf.
*/

//1. Brute Force (Recursive DFS)
const height = (node) => {
  if (!node) return 0;
  let leftHeight = height(node.left);
  let rightHeight = height(node.right);

  return 1 + Math.max(leftHeight, rightHeight);
};
// console.log(height(node));

//-------------------------------------------------------------
/*
Problem: Count total nodes
Given the root of a binary tree, return the total number of nodes present in the tree.
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
// console.log(getMaxNodeValue(node));

/*
--------------------------------------------------------------
Find Minimum Node Value in a Binary Tree
*/
function getMinNodeValue(node) {
  if (node == null) return Infinity;
  let leftMinNodeValue = getMinNodeValue(node.left);
  let rightMinNodeValue = getMinNodeValue(node.right);
  return Math.min(node.value, leftMinNodeValue, rightMinNodeValue);
}
// console.log(getMinNodeValue(node));

/*
------------------------------------------------------
Count the number of leaf nodes
*/
function getTotalLeafNodes(node) {
  if (node === null) return 0;
  if (node.left == null && node.right == null) return 1;
  let leftLeafNode = getTotalLeafNodes(node.left);
  let rightLeafNode = getTotalLeafNodes(node.right);
  return leftLeafNode + rightLeafNode;
}
// console.log(getTotalLeafNodes(node));

/*
-------------------------------------------------------
Count internal (non-leaf) nodes
*/
function getTotalNonLeafNodes(node) {
  if (node == null) return 0;
  if (node.left == null && node.right == null) return 0;
  return 1 + getTotalNonLeafNodes(node.left) + getTotalNonLeafNodes(node.right);
}
// console.log(getTotalNonLeafNodes(node));

/*
-------------------------------------------------------------
Find the Diameter of a Binary Tree (longest path between any two nodes).
*/
function diameterOfTree(node) {
  if (node == null) return { height: 0, diameter: 0 };

  let left = diameterOfTree(node.left);
  let right = diameterOfTree(node.right);

  let pathThroughNode = left.height + right.height;

  let currentDiameter = Math.max(
    left.diameter,
    right.diameter,
    pathThroughNode
  );

  let currentHeight = 1 + Math.max(left.height, right.height);

  return { height: currentHeight, diameter: currentDiameter };
}
// console.log(diameterOfTree(node))

/*
-----------------------------------------------------------------
Check if Two Trees are Identical
*/
function isIdentical(p, q) {
  if (p == null && q == null) return true;
  if (p == null || q == null) return false;

  return (
    p.value == q.value &&
    isIdentical(p.left, q.left) &&
    isIdentical(p.right, q.right)
  );
}
// console.log(isIdentical(node, node));

/*
--------------------------------------------------------------------
Mirror of a Tree (Invert a Binary Tree)
*/
function mirrorTree(node) {
  if (node == null) return;
  [node.left, node.right] = [node.right, node.left];
  mirrorTree(node.left);
  mirrorTree(node.right);
  return node;
}
// console.log(mirrorTree(node));

/*
----------------------------------------------------------------------
Check if the Tree is Balanced
*/
//brute force approach
function isTreeBalanced(node) {
  if (node == null) return true;

  const height = (node) => {
    if (node == null) return 0;
    return 1 + Math.max(height(node.left), height(node.right));
  };

  const leftHeight = height(node.left);
  const rightHeight = height(node.right);

  if (Math.abs(leftHeight - rightHeight) <= 1) {
    return isTreeBalanced(node.left) && isTreeBalanced(node.right);
  } else {
    return false;
  }
}
// console.log(isTreeBalanced(node));

/*
-----------------------------------------------------------------------
Step-by-Step Hints for LCA
*/
// node.right.right = new TreeNode(6);
function getLCA(node, p, q) {
  if (node == null || node.value == p || node.value == q) {
    // console.log({ node });
    return node;
  }

  let left = getLCA(node.left, p, q);
  let right = getLCA(node.right, p, q);

  if (left && right) return node;
  return left ? left : right;
}
console.log(getLCA(node, 4, 5)?.value);
