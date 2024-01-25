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

var getCommon = function(nums1, nums2) {
    const set = new Set(nums1);
    console.log(set);
  for (const n of nums2) {
    if (set.has(n)) return n;
  }
  return -1;
}
let  nums1 = [1,3,2,6,1,3]
let nums2 = [3,4,2]
console.log(getCommon(nums1,nums2));