//Question 1
class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function inorderTraversal(root) {
    if (root) {
        inorderTraversal(root.left);
        console.log(root.value);
        inorderTraversal(root.right);
    }
}


const root = new Node(1);
root.left = new Node(2);
root.right = new Node(3);
root.left.left = new Node(4);
root.left.right = new Node(5);

console.log("In-order traversal:");
inorderTraversal(root);

//Question 2
class TreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function isSameTree(p, q) {
    if (p === null && q === null) {
        return true;
    }
    
    if (p === null || q === null || p.value !== q.value) {
        return false;
    }

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
}

//same trees
const tree1 = new TreeNode(1);
tree1.left = new TreeNode(2);
tree1.right = new TreeNode(3);

const tree2 = new TreeNode(1);
tree2.left = new TreeNode(2);
tree2.right = new TreeNode(3);

console.log("Example 1: isSameTree(tree1, tree2) =", isSameTree(tree1, tree2)); 

//different treees
const tree3 = new TreeNode(1);
tree3.left = new TreeNode(2);

const tree4 = new TreeNode(1);
tree4.right = new TreeNode(2);

console.log("Example 2: isSameTree(tree3, tree4) =", isSameTree(tree3, tree4)); 

//Question 3 
class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function countNodes(binaryTreeRoot) {
    if (binaryTreeRoot === null) {
        return 0;
    }

    let leftHeight = 0;
    let rightHeight = 0;
    let left = binaryTreeRoot.left;
    let right = binaryTreeRoot.right;

    while (left !== null) {
        left = left.left;
        leftHeight++;
    }

    while (right !== null) {
        right = right.right;
        rightHeight++;
    }

    if (leftHeight === rightHeight) {
        return Math.pow(2, leftHeight + 1) - 1;
    }

    return 1 + countNodes(binaryTreeRoot.left) + countNodes(binaryTreeRoot.right);
}

//examples
const rootNode = new BinaryTreeNode(10);
rootNode.left = new BinaryTreeNode(11);
rootNode.right = new BinaryTreeNode(12);
rootNode.left.left = new BinaryTreeNode(13);
rootNode.left.right = new BinaryTreeNode(14);
rootNode.right.left = new BinaryTreeNode(15);
rootNode.right.right = new BinaryTreeNode(16);

const nodeCount = countNodes(rootNode);
console.log("Number of nodes in the binary tree:", nodeCount); 


//Question 4 
class TreeNode2 {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function findBottomRightValue(root) {
    let result = null;
    const queue = [];

    if (root) {
        queue.push(root);

        while (queue.length > 0) {
            const node = queue.shift();
            result = node.value;  

            if (node.left) {
                queue.push(node.left);
            }

            if (node.right) {
                queue.push(node.right);
            }
        }
    }

    return result;
}

// Example usage
const treeRoot = new TreeNode2(2);
treeRoot.left = new TreeNode(21);
treeRoot.right = new TreeNode2(3);
treeRoot.left.left = new TreeNode2(4);
treeRoot.left.right = new TreeNode2(5);
treeRoot.right.right = new TreeNode2(6);

const bottomRightValue = findBottomRightValue(treeRoot);
console.log("Bottom rightmost value:", bottomRightValue); 