// source: https://leetcode.com/problems/maximum-depth-of-n-ary-tree/submissions/
// leetcode 의 559번문제 미스타 김민우의 솔루션
// 거의 비슷한 로직이었으나 처음엔 time-limit-exeeded 때문에 안되었는데 
// 왜 있었는지 모르는 push과정을 빼면서 속도가 88ms로 내려갔다. 
// 리트코드의 이상한 점은... 똑같은 코드를 여러번 돌려보니 속도가 다 다르다는 것 ^__^!

var maxDepth = function(root) {
  if (!root) { return 0; }
  if (!root.children.length) { return 1; }
  
  root.level = 1;
  let maxLevel;
  let queue = [];
  
  function doBFS(child) {
    if (child.children) {
      child.children.forEach(e => {
      e.level = child.level+1;
      maxLevel = e.level;
      });
          
      queue.push(...child.children);
      
      while (queue.length) {
          let first = queue.shift();
          doBFS(first);
      }  
    }
  };

  doBFS(root);
  
  return maxLevel;
};
