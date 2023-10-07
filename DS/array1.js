// let array=[12,9,5,3,7,34,87,8]
//  let array1=[];
//  let max=0;
//  for(i=0;i<array.length;i++){
//     if(array[max]<array[i]){
//         max=i
//     }
//  }
//  console.log(array[max]);
//  let large=array[max]
//  for(i=0;i<array.length;i++){
//     array1.push(array[i]+3)
//     if(large>array1[i]){
//          array1[i]=true
//     }
//     else{
//         array1[i]=false
//     }
//  }


//  console.log(array);
//  console.log(array1);

//array problems
// let array=[1,2,3,4,5,6,7,8,9]

//  function reverse(array){
//     let start=0
//     let end=array.length-1
//     let temp;
//     for(let i=0;i<array.length/2;i++){
// temp=array[i]
// array[i]=array[array.length-1]
// array[array.length-1]=temp
// console.log(array[i])
//     }

//     }
//     console.log(reverse(array));

// let array=[1,2,3,4,5,6,7,8,9]
// for(let i=1;i<=array.length;i++){
//     if(i%3){
//      let   start=start+0


//     }
// }
// for(let i=1;i<array.length;i++){
//     if(i)
// }



// function reverseArray(array) {
//     let start = 0;
//     let end = array[i+1]

//     while (start < end) {
//       [array[start], array[end]] = [array[end], array[start]];
//       start++;
//       end--;
//     }

//    //reverse();
// return array;


//   }
//   function reverse(){
//     let array=[1,2,3,4,5,6,7,8,9]
//     for(i=0;i<array.length;i++){
//         if(i+1%3==0){
//     //start=0;
//        // end=array[i]
//        return reverseArray(array);

//         //start=start+2;
//     }
//     }  
//  }


//   console.log(reverse());

// function reverseArray(array) {
//     for (let i = 0; i < array.length; i++) {
//       if (i % 3===0) {
//         let start = i;
//         let end = i + 2;
//         while (start < end) {
//           [array[start], array[end]] = [array[end], array[start]];
//           start++;
//           end--;
//         }
//       }
//     }
//     return array;
//   }
//  
// console.log(reverseArray(array)); 


// array reversing when index is multiplication of 3
// function reverse(array){
//     for(i=0;i<array.length-2;i+= 3){    
//         [arr[i+2], arr[i]] = [arr[i], arr[i+2]]
//     }
// }
// let arr=[1,2,3,4,5,6,7,8,9]
// reverse(arr);
// console.log(arr);

// array reversing when index is multiplication of 3
// another method

// function reverse(array){
//     for(let i=0;i<array.length;i++){
//         if(i%3===0){
//           let start=i
//           let   end=i+2
//             while(start<end){
//                 [array[start],array[end]]= [array[end],array[start]]
//                 start++
//                 end--;
//             }
//         }
//     }
//     return array
// }
// let array=[1,2,3,4,5,6,7,8,9]
// console.log(reverse(array));

//array insertion in a specific position
//  function insertvalue(array,value,position){
//     for(let i=array.length-1;i>=position;i--){
//         array[i+1]=array[i]
//     }
//     array[position]=value;
//     return array
//  }
//  let array=[11,12,13,14,16,17]
//  console.log(insertvalue(array,15,4));

// frequency of a string

//  function frequency(str){
//     let freq=1;
//       for(let i=0;i<str.length;i++){
//         for(let j=i+1;j<str.length;j++){
//             if(str[i]===str[j]){
//                 freq++
//             }
//         }
//       }
//       return freq;
//  }
// console.log(frequency('suhara'));

function string(str) {
    let map = new Map();
    for (let i = 0; i < str.length; i++) {
        if (!map.has(str[i])) {
            map.set(str[i], 1);
        }
        else {
            let count = map.get(str[i]) + 1;
            map.set(str[i], count);
        }
    }

    return map;

}
let str = 'suhara';
console.log(string(str))