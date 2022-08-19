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

// Input: s = "abbaca"
// Output: "ca"
// Explanation:
// For example, in "abbaca" we could remove "bb" since the letters are adjacent and equal, and this is the only possible move.  The result of this move is that the string is "aaca", of which only "aa" is possible, so the final string is "ca".

/**
//  * @param {string} s
//  * @return {string}
 */
// var removeDuplicates = function(s) {
//    let temp = '';
//     let j = 0;
//     for(let i=0; i< s.length-1; i++) {
//         if(s[i] === s[i+1]){
//             res = s.slice(0,i)
//             s = res+ s.slice(i+2)
//             console.log(s)
//             i=i-2
//         }
//     }
//     return s
// };

// 1047

var removeDuplicates = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== stack[stack.length - 1]) {
      stack.push(s[i]);
    } else {
      stack.pop();
    }
  }

  return stack.join("");
};

//   Input
// ["MovingAverage", "next", "next", "next", "next"]
// [[3], [1], [10], [3], [5]]
// Output
// [null, 1.0, 5.5, 4.66667, 6.0]

// Explanation
// MovingAverage movingAverage = new MovingAverage(3);
// movingAverage.next(1); // return 1.0 = 1 / 1
// movingAverage.next(10); // return 5.5 = (1 + 10) / 2
// movingAverage.next(3); // return 4.66667 = (1 + 10 + 3) / 3
// movingAverage.next(5); // return 6.0 = (10 + 3 + 5) / 3

/**
//  * @param {number} size
 */

// 346

var MovingAverage = function (size) {
  this.size = size;
  this.arr = [];
};

/**
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function (val) {
  let sum = 0;
  this.arr.push(val);
  for (
    let i = this.arr.length - 1;
    i >= this.arr.length - this.size && i >= 0;
    i--
  ) {
    sum += this.arr[i];
  }

  if (this.size > this.arr.length) return sum / this.arr.length;
  if (this.size <= this.arr.length) return sum / this.size;
};

/**
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */
