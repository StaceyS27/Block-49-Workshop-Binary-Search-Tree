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
