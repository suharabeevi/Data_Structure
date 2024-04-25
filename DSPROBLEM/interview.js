// console.log("hey we can start interview preparation");

// function maxNumOfPairs(words) {
//     const reversedWords = {};
//     let pairsCount = 0;

//     for (const word of words) {
//         const reversedWord = word.split('').reverse().join('');
//           console.log(reversedWord,"hiii");
//           console.log(reversedWords,"elooo");
//         if (reversedWord in reversedWords && reversedWords[reversedWord] > 0) {
//             console.log(pairsCount,'pairsCount1111');
//             pairsCount += 1;
//             console.log(pairsCount,'pairsCount');
//             reversedWords[reversedWord] -= 1;
//         } else {
//             reversedWords[word] = (reversedWords[word] || 0) + 1;
//         }
//     }
// console.log(reversedWords);
//     return pairsCount;
// }

// // Example usage:
// const words = ["abcd", "dcba", "lls", "s", "sssll"];
// const result = maxNumOfPairs(words);
// console.log(result);
// var minimizedStringLength = function(s) {
//     const uniqueChars = new Set([...s]);
//     return uniqueChars.size;
// };
// let s="idi"
// console.log(minimizedStringLength(s));

// var getCommon = function(nums1, nums2) {
//     const set = new Set(nums1);
//     console.log(set);
//   for (const n of nums2) {
//     if (set.has(n)) return n;
//   }
//   return -1;
// }
// let  nums1 = [1,3,2,6,1,3]
// let nums2 = [3,4,2]
// console.log(getCommon(nums1,nums2));


// divide the array

// function dividearray(nums,k){

// nums.sort((a,b)=>
// //     a-b
// // )
// // let array =[]
// // for(let i=2;i<nums.length;i=i+3){
// //     // if((nums[i]-nums[i-1]>k) ||(nums[i]-nums[i-2]>k) ||(nums[i-1]-nums[i-2]>k)){
// //         if ((nums[i - 1] - nums[i - 2] > k) || (nums[i] - nums[i - 1] > k) || ((nums[i] - nums[i - 2] > k))) {

// //         return []
// //     }else{
// //         array.push(nums[i-2],nums[i-1],nums[i])
// //     }
// // }
// // return array
// // }
// function dividearray(nums, k) {
//     nums.sort((a, b) => a - b);

//     let array = [];

//     for (let i = 2; i < nums.length; i += 3) {
//         if (
//             nums[i] - nums[i - 1] > k ||
//             nums[i] - nums[i - 2] > k ||
//             nums[i - 1] - nums[i - 2] > k
//         ) {
//             return [];
//         } else {
//             array.push(nums[i - 2], nums[i - 1], nums[i]);
//         }
//     }

//     return array;
// }

// // let nums = [1, 3, 4, 8, 7, 9, 3, 5, 1];
// // let k = 2;
// // console.log(dividearray(nums, k));

// let nums = [1,3,4,8,7,9,3,5,1];
// let  k = 2
// console.log(dividearray(nums,k));

// function divideArray (nums, k) {
//     nums.sort((a, b) => a - b)
//     const res = []
//     for (i = 2; i < nums.length; i = i + 3) {
//         if ((nums[i - 1] - nums[i - 2] > k) || (nums[i] - nums[i - 1] > k) || ((nums[i] - nums[i - 2] > k))) {
//             return []
//         } else {
//             res.push([nums[i - 2], nums[i - 1], nums[i]])
//         }
//     }
//     return res
// };
// let nums = [1,3,4,8,7,9,3,5,1];
//  let  k = 2
//  console.log(divideArray(nums,k));

// var intersection = function(nums1, nums2) {
// let Array1=[]
//     let newSet1= new Set(nums1)
//     let newSet2= new Set(nums2)
//     // if(newSet1.has(newSet2)){
//         for( item of newSet1){
//             if(newSet2.has(item)){
//                 Array1.push(item)
//             }
//         }
//         return Array1
//     }
// let nums1 = [1,2,2,1];
//  let nums2 = [2,2];

// console.log(intersection(nums1,nums2));
// function firstUniqChar(s) {
//     // Create a map to store character counts
//     let charCount = {};

//     // Iterate through the string and count each character
//     for (let char of s) {
//         charCount[char] = (charCount[char] || 0) + 1;
//     }
// console.log(charCount);
//     // Iterate through the string again to find the index of the first non-repeating character
//     for (let i = 0; i < s.length; i++) {
        
//         if (charCount[s[i]] === 1) {
//             console.log(charCount[s[i]]);
//             return i;
//         }
//     }

//     // If no non-repeating character is found, return -1
//     return -1;
// }
// // Test the function
// let s = "leetcode";
// console.log(firstUniqChar(s)); // Output: 0

//question no 389
// var findTheDifference = function(s, t) {
//     let array = [...t, ...s];
//     let map1 = new Map();
//     for (item of array) {
//         if (map1.has(item)) {
//             map1.set(item, map1.get(item) + 1); 
//         } else {
//             map1.set(item, 1);
//         }
//     }
//     for (let [key, value] of map1) {
//         if (value === 1) {
//             return key;
//         }
//     }
// };

// let s = "abcd";
// let t = "abcde";
// console.log(findTheDifference(s, t)); // Output: e

// var findTheDifference = function(s, t) {
//     let charCount = new Map();
//         for (let char of s) {
//         charCount.set(char, (charCount.get(char)|| 0) + 1);
//     }
//     console.log(charCount,"cahaa");
//     for (let char of t) {
//         if (charCount.has(char)) {
//             console.log(charCount);
//             charCount.set(char, charCount.get(char) - 1);
//         } else {
//             console.log(char);
//             return char;
//         }
//     }
//     for (let [char, count] of charCount) {
//             console.log([char, count]);
//             if (count < 0) {
//                 return char;
//             }
//         }
// };
// // Test cases
// let s1 = "abcd", t1 = "abcde";
// console.log(findTheDifference(s1, t1)); // Output: "e"

// find the biggest product in 3 numbers

// function maximumproduct(x,y,z){

// let array =[x,y,z]    
// array.sort((b,a)=>a-b)
//  return x*y*z
// }
// console.log(maximumproduct(2,3,4));

// function maximumProduct(x, y, z) {
//     // Find maximum product of three numbers
//     const product1 = x * y * z; // Product of all three numbers

//     // Product of two largest numbers and the smallest number
//     const product2 = Math.max(x, y) * Math.max(y, z) * Math.min(x, y, z);

//     return Math.max(product1, product2);
// }

// console.log(maximumProduct(2, 3, 4));
