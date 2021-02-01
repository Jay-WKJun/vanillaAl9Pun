/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 *
 */
var root = {
  val: 1,
  children: [
    { val: 2, children: [] },
    { val: 3, children: [
        { val: 6, children: [] },
        { val: 7, children: [
            { val: 11, children: [
                { val: 14, children: []}
            ] }
        ] }
    ] },
    { val: 4, children: [
        { val: 8, children: [
            { val: 12, children: [] }
        ] }
    ] },
    { val: 5, children: [
        { val: 9, children: [
            { val: 13, children: [] }
        ] },
        { val: 10, children: [] }
    ] }
  ]
}

// recurse + Math.max 로 리팩토링 해야함
var maxDepth = function(root) {
  var max = 1;

  recurse(root, 0);

  function recurse(parent, n) {
    if (max < n) max = n;

    if (parent.children.length > 0) {
      for (let i = 0; i < parent.children.length; i++) {
        recurse(parent.children[i], n + 1);
      }
    }
  }

  return max;
};

maxDepth(root);
