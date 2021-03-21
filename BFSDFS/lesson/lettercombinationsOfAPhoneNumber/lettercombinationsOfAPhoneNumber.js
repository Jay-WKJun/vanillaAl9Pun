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

/*
stack을 이용한 DFS풀이법

stack에 node를 넣어가면서 깊게 계속 들어감, child가 없으면
reduce로 stack안의 value값을 모두 합쳐주고 마지막것은 pop()
나머지는 아무 작용도 없이 작업이 끝나면 pop()을 하면
가장 마지막 child만 글자를 만들어 push함 = 내것과 같음

const digitToLetter = {
    1: [""],
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
};
class Node {
	constructor(value) {
		this.value = value;
		this.children = [];
        this.isVisited= false;
	};
	addToLast(...childs) {
		if (this.children.length < 1) {
            this.children = [...childs.map(each => new Node(each))];
            return;
        }
        this.children.forEach(each => {
            each.addToLast(...childs);
        });
	};
};
var letterCombinations = function(digits) {
    const length = digits.length;
    if (!digits) {
        return [];
    }
    if (digits.length === 1) {
        return digitToLetter[digits];
    }
    let root = new Node("");
    for (let i = 0; i < digits.length; i++) {
        let letters = digitToLetter[digits[i]];
        root.addToLast(...letters);
    }
    const stack = [root];
    const result = [];
    let eachResult = "";
    while (stack.length) {
        const lastNode = stack[stack.length - 1];
        const nextNode = lastNode.children.find(node => !node.isVisited);
        if (nextNode) {
            nextNode.isVisited = true
            stack.push(nextNode);
            continue;
        }
        stack.forEach(each => eachResult += each.value);
        result.push(eachResult);
        eachResult = "";
        stack.pop();
  }
    return result.filter(each => each.length === length);
};
*/
