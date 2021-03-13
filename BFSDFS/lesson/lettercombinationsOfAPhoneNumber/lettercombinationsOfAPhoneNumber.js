/*
  https://leetcode.com/problems/letter-combinations-of-a-phone-number/
  Letter Combinations of a Phone Number

  Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent. Return the answer in any order.

  A mapping of digit to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

  ###success!!!!!!!
  문제를 보고 어떤 방식으로 풀어야할지가 가장 중요!!
*/

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits) return [];
  const digitsList = digits.split('');
  const rootNode = new Node(numberTree[digitsList[0]]);
  let node = rootNode;
  for (let i = 1; i < digitsList.length; i++) {
     do {
      if (!node.children) {
        node.children = new Node(numberTree[digitsList[i]]);
        break;
      } 

      node = node.children;
    } while(node !== null);
  };
  
  return DFS(rootNode, '');
  
};

function DFS(node, word) {
  if (node.children) {
    const resultArray = [];
    for (let letter of node.value) {
      DFS(node.children, word + letter).forEach(el => {
        resultArray.push(el);
      });
    }

    return resultArray;
  }

  return node.value.map(el => {
    return word + el;
  });
}

class Node {
  constructor(value) {
    this.value = value;
    this.children = null;
  }
}

const numberTree = {
  '1': null,
  '2': ["a", "b", "c"],
  '3': ["d", "e", "f"],
  '4': ["g", "h", "i"],
  '5': ["j", "k", "l"],
  '6': ["m", 'n', 'o'],
  '7': ['p', 'q', 'r', 's'],
  '8': ['t', 'u', 'v'],
  '9': ['w', 'x', 'y', 'z'],
  '*': ['+'],
  '0': [' '],
  '#': ['up']
}

const testDigit1 = "234";
console.log(letterCombinations(testDigit1));
