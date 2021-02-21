// leet code
// https://leetcode.com/problems/maximum-depth-of-n-ary-tree/

const testCase = {
  val: 1,
  children: [
    {
      val: 3,
      children: [
        {
          val: 5,
          children: [],
        },
        {
          val: 6,
          children: [],
        },
      ],
    },
    { val: 2, children: [] },
    { val: 4, children: [] },
  ],
};

var maxDepth = function (root) {
  if (!root || !root.children) {
    return 0;
  } else if (!root.children.length) {
    return 1;
  }

  let depth = 2;

  findChildren(root, depth);

  function findChildren(obj, currentDepth) {
    if (obj.children.length === 0) {
      return;
    }

    const children = obj.children;

    for (const item of children) {
      if (item.children.length) {
        if (depth === currentDepth) {
          depth++;
          findChildren(item, depth);
        } else {
          let temp = currentDepth + 1;
          findChildren(item, temp);
        }
      }
    }
  }

  return depth;
};
