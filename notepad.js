// /**
//  * @param {number[]} nums1
//  * @param {number} m
//  * @param {number[]} nums2
//  * @param {number} n
//  * @return {void} Do not return anything, modify nums1 in-place instead.
//  */
// var merge = function (nums1, m, nums2, n) {
//   if (m === 0) return (nums1 = nums2);
//   if (n === 0) return nums1;

//   return mergeRecursion(nums1, nums2);
// };

// function mergeRecursion(a1, a2) {
//   let i = 0;
//   let j = 0;
//   let result = [];
//   while (i < a1.length && j < a2.length) {
//     if (a1[i] === 0) {
//       i++;
//     } else if (a1[i] < a2[j]) {
//       result.push(a1[i]);
//       i++;
//     } else if (a1[i] >= a2[j]) {
//       result.push(a2[j]);
//       j++;
//     }
//   }

//   //     push rest elements
//   while (i < a1.length) {
//     a1[i] === 0 ? null : aresult.push(a1[i]);
//     i++;
//   }

//   while (j < a2.length) {
//     result.push(a2[j]);
//     j++;
//   }
//   a1 = result;
//   return a1;
// }

// var merge = function (nums1, m, nums2, n) {
//   m--;
//   n--;
//   let i = nums1.length - 1;
//   while (i >= 0) {
//     if (n >= 0 && m >= 0 && nums1[m] >= nums2[n]) {
//       nums1[i] = nums1[m];
//       //   nums1[m] = nums2[n];
//       m--;
//     } else if (n >= 0) {
//       nums1[i] = nums2[n];
//       n--;
//     }
//     i--;
//   }
// };
// merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3);

var maximumUnits = function (boxTypes, truckSize) {
  let currentSize = 0;
  let total = 0;
  let sortedData = boxTypes.sort((a, b) => b[1] - a[1]);
  console.log(sortedData);
  if (sortedData[0][0] >= truckSize) {
    return truckSize * sortedData[0][1];
  }
  for (let i = 0; i < boxTypes.length; i++) {
    if (currentSize < truckSize) {
      currentSize += sortedData[i][0];
      console.log(currentSize);
      total += sortedData[i][0] * sortedData[i][1];

      if (currentSize >= truckSize) {
        total = total - (currentSize - truckSize) * sortedData[i][1];
        console.log(total);
        return total;
      }
    }
  }
};

maximumUnits(
  [
    [1, 3],
    [2, 2],
    [3, 1],
  ],
  4
);
