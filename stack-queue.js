// 70,20,42,346,1047

// You are climbing a staircase. It takes n steps to reach the top.

// Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

/**
 * @param {number} n
 * @return {number}
 */
// var climbStairs = function(n) {
// //     fibonacci!!!

//         if(n===1) return 1;
//         if(n===2) return 2;

//         return climbStairs(n-1)+climbStairs(n-2)

// };

var climbStairs = function (n) {
  //     fibonacci!!!

  let prev = 2;
  let prevPrev = 1;
  let result = 0;

  if (n === 1) return 1;
  if (n === 2) return 2;
  for (let i = 3; i <= n; i++) {
    result = prev + prevPrev;
    prevPrev = prev;
    prev = result;
  }
  return result;
};

//     Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let stack = [];
  if (s.length % 2 === 1) return false;

  for (let i = 0; i < s.length; i++) {
    switch (s[i]) {
      case "{":
        stack.push("}");
        break;
      case "[":
        stack.push("]");
        break;
      case "(":
        stack.push(")");
        break;
      default:
        if (s[i] !== stack.pop()) return false;
    }
  }

  return stack.length === 0;
};
