// function meanAfterRemovingPercentiles(arr) {
//     arr.sort((a, b) => b - a);

//     const numElementsToRemove = Math.ceil(arr.length * 0.05);

//     arr = arr.slice(numElementsToRemove, -numElementsToRemove);

//     let sumOfRemaining = 0;
//     for (let i = 0; i < arr.length; i++) {
//       sumOfRemaining += arr[i];
//     }
//     const mean = sumOfRemaining / arr.length;
//     return mean;
//   }
//   const arr = [6,0,7,0,7,5,7,8,3,4,0,7,8,1,6,8,1,1,2,4,8,1,9,5,4,3,8,5,10,8,6,6,1,0,6,10,8,2,3,4];
//   const result = meanAfterRemovingPercentiles(arr);
//   console.log(result);

// 1979 question in leetcode

// var findGCD = function (nums) {
//     nums.sort((a, b) => a - b);
//     let min = nums[0];
//     let max = nums[nums.length - 1];
//     let divisor = 0;
//     for (let i = 1; i <= min && i <= max; i++) {
//       if (min % i == 0 && max % i == 0) {
//         divisor = i;
//       }
//     }
//     return divisor;
//   };
//
//   console.log(findGCD(nums))

//   function greatestcommondiviser(nums){
// nums.sort((a,b)=>a - b )
// return nums
//   }

//   let nums=[7,5,6,8,3]
//  console.log(greatestcommondiviser(nums));

// var countMatches = function (items, ruleKey, ruleValue) {
//   var ruleKeys = ["type", "color", "name"];
//   var keyIndex = ruleKeys.indexOf(ruleKey);
//   var count = 0;
//   for (var i = 0; i < items.length; i++) {
//     if (items[i][keyIndex] === ruleValue) count++;
//   }
//   return count;
// };

// items = [
//   ["phone", "blue", "pixel"],
//   ["computer", "silver", "lenovo"],
//   ["phone", "gold", "iphone"],
// ];
// (ruleKey = "color"), (ruleValue = "silver");
// console.log(countMatches(items, ruleKey, ruleValue));
// let abc=[];
// console.log(Array.isArray(abc));