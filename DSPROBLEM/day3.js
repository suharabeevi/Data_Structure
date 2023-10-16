//leetcode question no:283

// let array1=[0,1,0,0,0,3,0,12];
// let j=0;
// function input(array1){
//     for(let i=0;i<array1.length;i++){
//         if(array1[i]!==0){
//             [array1[j],array1[i]]=[array1[i],array1[j]]
//             j++
//         }
//     }
//     console.log(array1);
// }
// input(array1)

// day 3 merge two sorted array


// let array1=[11,14,15,24]
// let array2=[22,23,34,53]
// function twoArrray(array1,array2){
//     for(let i=0;i<array1.length;i++){
//         array2.push(array1[i])
//     }
//     //console.log(array2);
//     for(let k=0;k<array2.length;k++){
//         for( let j=0;j<array2.length;j++){
//             if(array2[k]<array2[j]){
//                 temp=array2[j]
//                 array2[j]=array2[k]
//                 array2[k]=temp
//             }
//         }
//     }
//     console.log(array2);
// }
// twoArrray(array1,array2)

//given number  is palidrome or not
// function isPalindrome(num) {
//     // Convert number to string
//     var str = num.toString();
  
//     // Initialize indices
//     var i = 0;
//     var j = str.length - 1;
  
//     // Loop through string
//     while (i < j) {
//       // Check if characters at indices i and j are equal
//       if (str.charAt(i) !== str.charAt(j)) {
//         return false; // Not a palindrome
//       }
//       // Move to next pair of characters
//       i++;
//       j--;
//     }
//     // If loop completes, number is a palindrome
//     return true;
//   }
  
//   // Example usage
//   console.log(isPalindrome(121)); // true
//   console.log(isPalindrome(12321)); // true
//   console.log(isPalindrome(123)); // false

// const nums=[5,1,5,2,5,3,5,4]
// console.log(repeatedNTimes(nums));
//    function  commonChars(words) {
//     for(let i=0;i<words.length;i++){
//         let word1=words[i]
//         // console.log(words[i]);
//     }


// };
// commonChars(words)
// function commonChars (words, result = []) {
//     // we just need to take the first element from the array for comparison
//     for (const letter of words[0]) {
//         // check letter in word
//         if (words.every(w => w.includes(letter))) {
//             result.push(letter)
//              console.log(result);
//             // remove letter from word
//             words = words.map(w => w.replace(letter, ''))
// // console.log(words,"result");
//         }
//     }
//     // the duplicate letter
//     return result
// };
// let words=["bella","label","roller"]
//  console.log(commonChars(words));
// question:989
// function addToArrayForm (num, k) {
//     let number1=''
//     let result
//     for(let i=0;i<num.length;i++){
//      number1+=num[i]
//     }
//     number1=parseInt(number1)+k
//     console.log(number1);
//     result = [...number1.toString()].map(Number);
//     return result
// };
// let num=[1,2,6,3,0,7,1,7,1,9,7,5,6,6,4,4,0,0,6,3]
// let k= 516
// console.log(addToArrayForm(num,k));
// question no 1051
// function heightChecker(heights) {
//     let height1;
//     let count=0
//     height1= heights.slice().sort((a, b) => a - b);
//     for(let i=0;i<heights.length;i++){
//        if(heights[i]===height1[i])
//        continue;
//    else{
//        count++
//    }
//     }
//     return count
//    };
//    let heights=[1,1,4,2,1,3]
//    console.log(heightChecker(heights));
//question no 1071

// function lengthOfLastWord (s) {
//     let result = s.trim().split(' ');
//     return result[result.length-1].length
// };
// let s = "   fly me   to   the moon  "
// console.log(lengthOfLastWord(s));

// function countValidWords (sentence) {
//    let sets= sentence.split(' ')
// let words=sets.filter(s=>{
//     if (/\d/.test(s) || s === '') return false   
//     if (/^[!,.]$/.test(s)) return true          
//     if (/^\w+[!,.]?$/.test(s)) return true     
//     if (/^\w+[-]?\w+[!,.]?$/.test(s)) return true
//     return false
// })
//  return words.length
//  }
// let sentence = "cat and  dog"
// console.log(countValidWords(sentence));
// function reverse(num){
// let number=[]
//  let num1=num.toString().split('')
//  for(let i=num1.length-1;i>=0;i--){
//    number.push(num[i])
//  }
//  let reversenum=number=parseInt(number.join())
//  if(num<0){
//     return -reversenum
//  }else{
//     reversenum
//  }
// }
// let num=-123;
// console.log(reverse(num));
// function reverse(num) {
//     let number = [];
//     let num1 = num.toString().split('');
  
//     for (let i = num1.length - 1; i >= 0; i--) {
//       number.push(num1[i]);
//     }
//     let reversedNum = parseInt(number.join(''));
  
//     if (num < 0) {
//       return -reversedNum;
//     } else {
//       return reversedNum;
//     }
//   }
//   let num = -123;
//   console.log(reverse(num));
// function tribonacci(n){
//     let result = [0,1,1]
    
//     for(let i = 3; i<=n; i++) {
//         result[i] = result[i-1] + result[i-2] + result[i-3]
//         // console.log(result[i]);
//     }
//     return result[8]
// }
// let n=25
// console.log(tribonacci(n));
// function isHappy(n){
// }
// let n=19;
// isHappy(n)
// var shuffle = function(nums, n) {
//     let array1 = [];
//     for (let i = 0; i < n; i++) {
//         array1.push(nums[i], nums[n + i]);
//     }
//     return array1;
// };
// let nums = [1, 2, 3, 4, 4, 3, 2, 1]; 
// let n = 4;
// console.log(shuffle(nums, n));
// question 1502
// function canMakeArithmeticProgression (arr) {
//     arr.sort((a,b)=>a-b)
//     let diff=arr[1]-arr[0]
//     for(let i=1;i<arr.length;i++){
//         if(arr[i]-arr[i-1]!=diff){
//             return false
//         }
//     }
//     return true
// };
// let arr = [1,2,4]
// console.log(canMakeArithmeticProgression(arr));
// function finalPrices(prices) {
    // let n = prices.length;
    // let discountedPrices = new Array(n).fill(0);

    // for (let i = 0; i < n; i++) {
    //     let discount = 0;
    //     for (let j = i + 1; j < n; j++) {
    //         if (prices[j] <= prices[i]) {
    //             discount = prices[j];
    //             break;
    //         }
    //     }
    //     discountedPrices[i] = prices[i] - discount;
    // }

    // return discountedPrices;
// }
// let  prices = [8,4,6,2,3];
// console.log(finalPrices(prices));

// convert string in to date format

// var reformatDate = function(date) {
//     const m = {
//         Jan: "01",
//         Feb: "02",
//         Mar: "03",
//         Apr: "04",
//         May: "05",
//         Jun: "06",
//         Jul: "07",
//         Aug: "08",
//         Sep: "09",
//         Oct: "10",
//         Nov: "11",
//         Dec: "12",
//       };
//       const [day, month, year] = date.split(" ");
//       console.log(parseInt(day));
//      return year + "-" + m[month] + "-" + (parseInt(day)<10 ? '0' + parseInt(day) : parseInt(day))
//     }
// let  date = "6th Jun 1933"
// console.log(reformatDate(date));
 // count numbers
 
 // 1523
//  var countOdds = function(low, high) {
//     let arr=[]
//     for(let i=low;i<=high;i++){
//         if(i%2!==0){
//             arr.push(i)
//         }
//     }
//     return arr
// };
// let low = 3;

// let high = 7
// console.log(countOdds(low,high));

// var thousandSeparator = function(n) {
//     const numArr = String(n).split('');
//     let len = numArr.length;
//     if(len > 3){
//         for(let i = len,k=0; i>0;i--,k++){
            
//             if( k % 3 === 0 && k !== 0){
               
//                 numArr.splice(i,0,".");
//             }
//         }
//     }
//     return numArr.join("")
    
// };
// let n = 398788888888888;
// console.log(thousandSeparator(n));

// var sumOddLengthSubarrays = function(arr) {
//     let array=[]
//       if(arr.length>1){
//            array=[...arr]
//   };
// }
// let arr=[1,4,2,5,3]

// var sumOddLengthSubarrays = function(arr) {
//     let output = 0;

//     for (let i = 1; i <= arr.length; i += 2) {
//         for (let j = 0; j <= arr.length - i; j++) {
//             for (let k = 0; k < i; k++) {
//               output += arr[j + k];
//             }
//         }
//     }

//     return output;
// };
// let arr =[1,4,2,5,3]
// console.log(sumOddLengthSubarrays(arr));

var reorderSpaces = function(text) {
    let count=0
   for(let i=0;i<text.length;i++){
    if(text[i]===' '){
        count++
    }
    
   }
   return count
};
let text = "  this   is  a sentence "
console.log(reorderSpaces(text));