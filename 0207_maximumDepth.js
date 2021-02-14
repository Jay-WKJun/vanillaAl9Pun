const root = [1,null,3,2,4,null,5,6];

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

function maxDepth(root) {
  var max = 0;

  recurse(root, 1);

  function recurse(parent, n) {
    if (!parent) return n;

    if (max < n) max = n;

    if (parent.children.length > 0) {
      for (let i = 0; i < parent.children.length; i++) {
        recurse(parent.children[i], n + 1);
      }
    }
  }

  return max;
}

console.log(maxDepth(test1));
