// 1710
// var maximumUnits = function(boxTypes, truckSize) {
//     boxTypes.sort((a, b) => b[1] - a[1]);
//     let result = 0;
//     for (const [ boxes, units ] of boxTypes) {
//       const takeBoxes = Math.min(boxes, truckSize);
//       result += units * takeBoxes;
//       truckSize -= takeBoxes;
//       if (!truckSize) break;
//     }
//     return result;
//   };
// var  boxTypes = [[5,10],[2,5],[4,7],[3,9]]
// var truckSize = 10
// console.log(maximumUnits(boxTypes,truckSize));

//1716 leetcode 

// function countIncrements(n) {
//     let day =0;
//     let lBank=0
//   for(let i =0 ; i <n ; i ++ ){
//       for (let j =1 ; j  <= 7 ; j++){
//           lBank += i + j;
//           day++
//           if ( day === n ){
//               return lBank;
//           }
//       }
//   }
// }
// // Example usage:
// let n = 10; // Replace this with the desired value of n
// let result = countIncrements(n);
// console.log(result);
function abc(){
    
}