/*
  1743. Restore the Array From Adjacent Pairs
  https://leetcode.com/problems/restore-the-array-from-adjacent-pairs/

  There is an integer array nums that consists of n unique elements, but you have forgotten it. However, you do remember every pair of adjacent elements in nums.

  You are given a 2D integer array adjacentPairs of size n - 1 where each adjacentPairs[i] = [ui, vi] indicates that the elements ui and vi are adjacent in nums.

  It is guaranteed that every adjacent pair of elements nums[i] and nums[i+1] will exist in adjacentPairs, either as [nums[i], nums[i+1]] or [nums[i+1], nums[i]]. The pairs can appear in any order.

  Return the original array nums. If there are multiple solutions, return any of them.

  TODO: 복습
*/

class Node {
  constructor(value) {
    this.value = value;
    this.adjacent = [];
    this.isVisited = false;
  }

  addAdjacent(adjacent) {
    this.adjacent.push(adjacent);
  }
}

/**
 * @param {number[][]} adjacentPairs
 * @return {number[]}
 */
 var restoreArray = function(adjacentPairs) {
  const map = new Map();

  for (let [a, b] of adjacentPairs) {
    map.has(a) || map.set(a, new Node(a));
    map.has(b) || map.set(b, new Node(b));

    map.get(a).addAdjacent(b);
    map.get(b).addAdjacent(a);
  }

  let currentNode;
  for (let [_, value] of map) {
    if (value.adjacent.length === 1) {
      currentNode = value;
      break;
    }
  }

  const result = [];
  result.push(currentNode.value);
  currentNode.isVisited = true;
  let prevNode = currentNode.value;
  currentNode = map.get(currentNode.adjacent[0]);
  while (result.length !== adjacentPairs.length + 1) {
    result.push(currentNode.value);
    const nextNode = currentNode.adjacent.find(el => prevNode !== el);
    prevNode = currentNode.value;
    currentNode = map.get(nextNode);
  }

  return result;
};

const test1 = [[2,1],[3,4],[3,2]]
console.log(restoreArray(test1));
