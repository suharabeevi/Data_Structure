// function maxProfit(prices) {
//     let left = 0; // Buy
//     let right = 1; // sell
//     let max_profit = 0;
//     while (right < prices.length) {
//       if (prices[left] < prices[right]) {
//         let profit = prices[right] - prices[left]; // our current profit
  
//         max_profit = Math.max(max_profit, profit);
//       } else {
//         left = right;
//       }
//       right++;
//     }
//     console.log(max_profit);;
//   };

//   let prices=[7,1,8,9,10]
//   maxProfit(prices);
 // console.log(prices);


//  let array1=[1,2,3,4]
//  let array2=[]
//  s=0;
//  function sum(array1){
//   for(let i=0;i<array1.length;i++){
//     s=s+array1[i];
//     array2.push(s)
//   }
//   console.log(array2);
//  }
// sum(array1); 

//leet code 2535

 // leet code  231

// let num=1
//  function ispoweroftwo(num){
//     if(num<1 && n!=0){
//         return false
//     }
//    while
//  }
//  console.log(ispoweroftwo(num));

//2427

// function commoninteger(num,num1){
// let x= (num<num1) ? num:num1
// let y=0;
// for(let i=1;i<=x;i++){
//   if(num%i===0&&num1%i===0){
//     y++
//   }
// }
// return y
// }
    
// let num=12;
// let num1=6;
// console.log(commoninteger(num,num1));

// leet code 2413


// function smallestEvenMultiple(num){
// if(num>1){
//    return num%2===0?num:num*2;
// }
// }
// let nums=6;
// console.log(smallestEvenMultiple(nums));

// leet code question 35

// var searchInsert = function(nums, target) {
//     let start = 0;
//     let end = nums.length - 1;
//     while(start<=end) {
//         const mid = Math.floor((start + end)/2);
//         if(nums[mid] < target) {
//             start = mid + 1;
//         } else {
//             end = mid -1;
//         }   
//     }
//     return start;
// };
// let nums=[2,4,5,6,7,67,90]
// console.log(searchInsert(nums,100));

//leet code 136
// function singleNumber(nums){
//     for(let i=0;i<nums.length;i++){
//         for(let j=i+1;j<nums.length;j++){
//             if(nums[i]!==nums[j]){
//               return nums[i]
//             }else{
//                 j++
//             }
           
//         }
//        return nums[j]
//     }
   
// }
// let nums=[2,2,1]
// console.log(singleNumber(nums));

//question 217

// function find(nums){
//     for(let i=0;i<nums.length;i++){
//         for(let j=i+1;j<nums.length;j++){
//            if(nums[i]===nums[j]){
//             return true
//            }else{
//             continue;
//            }
//           }
//         }
//         return false
//     }
//     let nums=[1,2,3,9,9]
// console.log(find(nums));

// var containsDuplicate = function(nums) {
//     var obj = {};
    
//     for(var i = 0; i < nums.length; i++){
//         obj[nums[i]] = obj[nums[i]] + 1 || 1;
        
//         if(obj[nums[i]] > 1) return true;
//     }
    
//     return false;
// }
// leet code 26

// function duplicates(num) {
//     let i = 0;
//     let result = [num[0]];
  
//     for (let j = 1; j < num.length; j++) {
//       if (num[j] != num[i]) {
//         result.push(num[j]);
//         i++;
//       }
//     }
//     return result;
//   }
//   let num = [1, 2, 2, 5,5];
//   console.log(duplicates(num)); // Output: [1, 2, 5]




// let str=['A','A','C']
// function duplicates(){
//   for(let i=0;i<str.length;i++){
//     for(let j=0;j<str.length;j++){
//       if(str[i]===str[j]){
//         j++
//       }else{
//         return str
//       }
//     }
//   }
// }
//      console.log(duplicates(str));

// function findUniqueElements(str) {
//   let uniqueChars = [];
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     let isUnique = true;
//     for (let j = 0; j < uniqueChars.length; j++) {
//       if (char === uniqueChars[j]) {
//         isUnique = false;
//         break;
//       }
//     }
//     if (isUnique) {
//       uniqueChars.push(char);
//     }
//   }
//   return uniqueChars;
// }

// // Example usage
// let str = ['a','c','u','a'];
// let uniqueChars = findUniqueElements(str);
// console.log(uniqueChars); // [ 'h', 'e', 'l', 'o', ' ', 'w', 'r', 'd' ]
  //leet code no 202
//   function ishappy(num){
//     for()
//   }

//leet code 484

// let findDisappearedNumbers = function(nums1) {
//   let ans=[];
//   let diff=0;
//   let start=0;
//   nums1.sort(function(a,b){
//       return (a-b)
//   });
//   for (let i=1;i<=nums1.length;i++){
//       if(!nums1.includes(i)){
//           ans.push(i);
//       }
//   }
//   return ans;

//       };


// var mostFrequentEven = function(nums) {
//     let mapObj = {};
//     let maxVal = 0;
//     let result = -1;
  
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] % 2 === 0) {
//             if (!mapObj[nums[i]]) {
//                 mapObj[nums[i]] = 1;
//             } else {
//                 mapObj[nums[i]]++;
//             }

//             if (mapObj[nums[i]] > maxVal || (mapObj[nums[i]] === maxVal && nums[i] < result)) {
//                 maxVal = mapObj[nums[i]];
//                 result = nums[i];
//             }
//         }
//     }

//     return result;
// };
//  const num=[0,1,2,2,4,4,1]
//  console.log(mostFrequentEven(num));
// let count=0;
//  function concequenceoddnum(array){
//     for(i=0;i<array.length;i++){
//         if(array[i]%2!==0){
//             count++
//         }  else if(count>3){
//             return true
//         }
//         else{
//             count=0;
//         }
        
//     }
//     if (count>3){
//         return true
//                 }else{
//                     return false
//                 }
    
//     }
//     let array=[12,1,3,5,7,8]
//  console.log(concequenceoddnum(array));

// function hasThreeConsecutiveOdds(arr) {
//     let count = 0;  // Counter for consecutive odd numbers
    
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 !== 0) {  // Check if the number is odd
//         count++;
//         if (count === 3) {
//           return true;
//         }
//       } else {
//         count = 0;  // Reset the counter if the number is even
//       }
//     }
    
//     return false;
//   }
  
//   // Example usage:
//   const arr = [1, 3, 5, 6, 7];
//   const result = hasThreeConsecutiveOdds(arr);
//   console.log(result);  // Output: true
  

// let s= 'ab';
// let goal = 'ba'

// function swapstring(s,goal){
//   let m='';
// for(let i=s.length;i>0;i--){
//  m+=s[i];
// }
// console.log(m);
// if(m===goal){
//   return true
// }else{
//   return false
// }
// }
// console.log(swapstring(s,goal));
// let s = 'abcdabcd';
// let goal = 'bb';

// function swapstring(s, goal) {
//   let m = '';
//   for (let i = s.length - 1; i >= 0; i--) {
//     m += s[i];
//   }
//   console.log(m);
//   if (m === goal) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(swapstring(s, goal));

// Write a function to find the longest common prefix string amongst an array of strings.

// function longestCommonPrefix(strs) {
//   if(!strs.length) return '';
//   for(let i = 0; i < strs[0].length; i++) {
//     console.log(strs[0].length);
//       for(let s of strs) {
//           if(s[i] !== strs[0][i]) return s.slice(0, i);
         
//       }
//   }
//   return strs[0];  
// };
// let str=["flower","flow","flight"]
// console.log(longestCommonPrefix(str));

// function containsNearbyDuplicate(nums, k) {
//   // Create an empty object to store the last index of each number in nums
//   let map = {};
//   console.log(map,"hi");
//   // Iterate through each number in nums
//   for (let i = 0; i < nums.length; i++) {
//       // If the current number is already in map and its last index is within k distance from current index, return true
//       if (map[nums[i]] !== undefined && i - map[nums[i]] <= k) {
//         console.log(map,"iiiiii");
//           return true;
//       }
//       // Update the last index of the current number to its current index
//       map[nums[i]] = i;
//       console.log(map[nums[i]],"yes")
      
//   }
//   // Return false if no such pair exists
//   return false;
// }
// let nums=[1,2,3,1]
// let k=3;
// console.log(containsNearbyDuplicate(nums,k));

//question no 605

// function canPlaceFlowers (flowerbed, n) {
//   for (let i = 0; i < flowerbed.length; i++) {

//   console.log(flowerbed[i-1]);
//     if (flowerbed[i] === 1) continue;

//     if (
//       (i === 0 || flowerbed[i - 1] === 0) &&
//       (i === flowerbed.length - 1 || flowerbed[i + 1] === 0)
//     ) {
//       flowerbed[i] = 1;
//       n--; 
//     }
//   }

//   return n <= 0;
// };
// let flowerbed=[1,0,0,0,1]
// let n=2;
// console.log(canPlaceFlowers(flowerbed,n));

// function removeDuplicates(s) {
//   const stack = [];
//   for (let i = 0; i < s.length; i++) {
//     const letter = s[i];
//     console.log(s[i]);
//     console.log(stack,"stack");
//     console.log(stack[stack.length-1],"length");
//     if (stack.length && stack[stack.length - 1] === letter) {
//       console.log(stack,"kk");
//       stack.pop();
//     } else {
//       // console.log( stack.push(letter),"uuuu");
//       stack.push(letter);
    
//     }
//   }
//   return stack.join('');
// }
// const s = "abbaca";
// console.log(removeDuplicates(s));

// question number 1464

// function maxnumber(nums){
//   const [max1, max2] = nums.sort((a, b) => b - a).slice(0, 2);
//     return (max1 - 1) * (max2 - 1);
// }
// const nums=[1,5,4,5]
// console.log(maxnumber(nums));

// question no 1122

// function relativeSortArray(arr1, arr2) {
//   const sortedArr1 = [];
//   let arr1Remaining = [...arr1];
//   //console.log(arr1Remaining);
//   for (let i = 0; i < arr2.length; i++) {
//       const removedNums = arr1Remaining.filter(num => num === arr2[i]);
//       // console.log(removedNums,"iii");
//       arr1Remaining = arr1Remaining.filter(num => num !== arr2[i]);
//       // console.log(arr1Remaining,"uuu");
//       sortedArr1.push(...removedNums);
//       console.log(sortedArr1,"helooo");
//   }

//   sortedArr1.push(...arr1Remaining.sort((a, b) => a - b));
//   return sortedArr1;
// };

// let array=[2,3,1,3,2,4,6,7,9,2,19]
// let array1= [2,1,4,3,9,6]
// console.log(relativeSortArray(array,array1))

//question no 2706

// function buychoco(prices,money){
// let sortprizes = prices.sort((a,b)=>a-b)
// console.log(sortprizes);
// let sum=sortprizes[0]+sortprizes[1]
// if(sum<=money){
//  return money-sum
// }else{
//   return money
// }
// }
// let prices=[1,3,2,2]
// let money=3;
// console.log(buychoco(prices,money));

// question no 1909
// function canBeIncreasing(nums) {
//   let removedCount = 0;
//   let prev = nums[0];

//   for (let i = 1; i < nums.length; i++) {
//       if (nums[i] <= prev) {
//           removedCount++;

//           if (removedCount > 1) {
//               return false;
//           }

//           if (i === 1 || nums[i] > nums[i - 2]) {
//               prev = nums[i];
//           }
//       } else {
//           prev = nums[i];
//       }
//   }

//   return true;
// }

// // Example usage
// const nums = [1,1,1];
// console.log(canBeIncreasing(nums));  // Output: true
// question no 2520
// function  countDigis(num) {
//   let count=0;
//   let array=num.toString().split('')
//   for(let i=0;i<array.length;i++){
//     if(num%parseInt(array[i])===0){
//       count++
//     }
//   }
//   return count
// };

// let num=1248
// console.log(countDigis(num));
// 3rd largest value

// let array=[6,48,13,34]
// let max;
// let count=0;
// function THIRDLARGE(array){
//   for(let i=0;i<array.length;i++){
//     if(array[i]>max){
//      max=array[i]
//     }
//  }
//  return max
// }
 

// console.log(THIRDLARGE(array),"hhhhhhh");
// max=null
// console.log(array);

//question 844

// function ismonolethic(nums){
//   let increase =true;
//   let decrease = true;
// for(let i=0;i<nums.length;i++){
//   if(nums[i]>nums[i-1]){
//     increase=false;
//   }if(nums[i]<nums[i-1]){
//     decrease=false
//   }
// }
// return increase||decrease
// }
// let nums=[8,2,2,3]
// console.log(ismonolethic(nums));

//question 917

// function reverseOnlyletters(s){
// let splitletter=s.split('')
// let start=0
// let end=splitletter.length-1
// const regex=  /[a-zA-Z]/g; 
// while(start<end){
//   if(splitletter[start].match(regex)===null){
//     start++
//     continue;
//   }
//   if(splitletter[end].match(regex)===null){
//     end--
//     continue;
//   }
//   let temp=splitletter[start]
//   splitletter[start]=splitletter[end]
//   splitletter[end]=temp
//   start++
//   end--
// }
// return splitletter.join('')
// }

// let letter="Test1ng-Leet=code-Q!";
// console.log(reverseOnlyletters(letter));

// leetcode 925

//   function isLongPressedName(name, typed) {
//    for(let i=0;i<=typed.length;i++){
//         for(j=0;j<=name.length;j++){

//         }
//    }
  
// };
// let names="alex"
// let typed = "aaleex"
// console.log(isLongPressedName(names,typed));

// function isPossibleName(typed, name) {
//   let i = 0; 
//   for (let j = 0; j < typed.length; j++) {
//     if (i < name.length && typed[j] === name[i]) {
//       i++; 
//     } else if (j === 0 || typed[j] !== typed[j - 1]) {
//       return false; 
//     }
//   }
//   return i === name.length; 
// }
// const typed = "ssaaedd"
// const name =  "saeed"
// console.log(isPossibleName(typed, name)); 

// question no 28

// function strStr (haystack, needle) {
//     for(let i=0;i<haystack.length;i++){
//       if(haystack.includes(needle)){
//         return
//       }
//     }
// };

// question no:1437

// var kLengthApart = function(nums, k) {
//   var s = [];
  
//   for (let i = 0; i < nums.length; i++) {
//       if (nums[i] === 1) {
//           s.push(i);
//       }
//   }

//   for (let m = 0; m < s.length - 1; m++) {
//       if (s[m + 1] - s[m] <= k) {
//           return false;
//       }
//   }
  
//   return true;
// };

// let nums =  [1,0,0,1,0,1]
// let k = 2;
// console.log(kLengthApart(nums, k));

//  q=1446
// var maxPower = function(s) {
//   let max = 1
//   let count = 1
  
//   for(let i=0; i<s.length - 1; i++) {
//       if(s[i] === s[i+1]) {
//           count++
//           max = Math.max(count, max)
          
//       } else {
//           count = 1
//       }
//   }
  
//   return max
// };
// let s ="leetcode"
// console.log(maxPower(s));

// /**
//  * @param {string} s
//  * @return {string}
//  */
// var sortString = function(s) {
//   let res = '';
//   let ss = s.split('');
//   console.log(ss);
//   let unique = [...new Set(ss)].sort();
//   console.log(unique);
//   while (ss.length > 0) {
//       for (let i = 0; i < unique.length; i++) {
//           const index = ss.indexOf(unique[i]);
//           if (index !== -1) {
//               res += unique[i];
//               ss.splice(index, 1);
//           }
//       }
//       unique = unique.reverse();
//   }
//   return res;
// };
// let s = "aaaabbbbcccc"
// console.log(sortString(s));

// frequency of numbers

// function arrayfreq(){
//  let map =new Map
//  for(let i=0;i<arr1.length;i++){
//  if(map.has(arr1[i])){
//   map.set(arr1[i],map.get(arr1[i])+ 1)
//  }else{
//   map.set(arr1[i],1)
//  }
//  }
//  return map
// }
// let arr1=[1,1,2,3,1,5,6,6,5]
// console.log(arrayfreq(arr1));
// 1608

// var getRow = function(rowIndex)  {
//   if (rowIndex < 0) {
//     return [];
// }
// let row = [1];
// for (let i = 1; i <= rowIndex; i++) {
//     let nextRow = [1];
//     for (let j = 1; j < row.length; j++) {
//       console.log(row[j - 1] + row[j]);
//         nextRow.push(row[j - 1] + row[j]);
//     }
//     nextRow.push(1);
//     row = nextRow;
// }
// return row;
// };
// let rowIndex = 2
// console.log(getRow(rowIndex));
// var reorderSpaces = function(text) {
//   let words = text.trim().split(/\s+/);
//   console.log(words);
//   let cntWords = words.length;
//   let spaces = text.split("").filter(word => word == " ");
//   let countSpaces = spaces.length;
//   let gap = Math.floor(countSpaces / (cntWords - 1));
//   if(cntWords > 1){
//       return words.join(" ".repeat(gap)) + ' '.repeat(countSpaces - ((cntWords-1) * gap));
//   }else{
//       return words.join(" ")+' '.repeat(countSpaces);
//   }
// };
// let text = "  this   is  a sentence "
// console.log(reorderSpaces(text));