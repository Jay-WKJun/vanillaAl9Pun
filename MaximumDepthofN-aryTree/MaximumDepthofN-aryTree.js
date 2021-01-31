/*
    21.1.31(sun)

    Maximum Depth of N-ary Tree
    Given a n-ary tree, find its maximum depth.
    The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.
    Nary-Tree input serialization is represented in their level order traversal, each group of children is separated by the null value (See examples).
*/

const test1 = {
    val: 1,
    children: [
      { val: 3, children: [{
          val: 5,
          children: []
      },
        {
            val: 6,
            children: []
    }]},
      { val: 2, children: [] },
      { val: 4, children: [] }
    ]
};

console.log(maxDepth(test1));

function maxDepth (root) {
    if (!root) return 0;
    let depth = dfs(root, 1);
    return depth;
};

function dfs (node, depth) {
    if (!node.children) {
        return depth;
    }
    
    let maxDepth = depth;
    for (let i = 0; i < node.children.length; i++) {
        maxDepth = Math.max(maxDepth, dfs(node.children[i], depth + 1));
    }
    
    return maxDepth;
}