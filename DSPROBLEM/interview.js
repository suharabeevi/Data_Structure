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

var intersection = function(nums1, nums2) {
let Array1=[]
    let newSet1= new Set(nums1)
    let newSet2= new Set(nums2)
    // if(newSet1.has(newSet2)){
        for( item of newSet1){
            if(newSet2.has(item)){
                Array1.push(item)
            }
        }
        return Array1

    }


let nums1 = [1,2,2,1];
 let nums2 = [2,2];

console.log(intersection(nums1,nums2));