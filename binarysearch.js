// function bsearch(array,value,left,right){
//    console.log(array,value,left,right);
//    console.log('==');
//     if(left>right){
//         return null
//     }
//     let middle=Math.floor((left+right)/2)
//     //console.log(middle);
//     if(array[middle]===value){
//         return 'value is exit'
//         // console.log('value is exist')
//     }
//     }
//     if(value>array[middle]){
//         //console.log();
//       return  bsearch(array,value,middle+1,right)
//     }else{
//       return  bsearch(array,value,left,middle-1)
//     }

// let array=[12,13,14,15,17]
// console.log(bsearch(array,17,0,array.length-1));

// function pallindrome(str){
//     let len=str.length
// for(let i=0;i<str.length;i++){
//     if(str[i]===str[len]){
//         len--
//     }
// //console.log(str);
// }

// }
// let str='malayalam'
// console.log(pallindrome(str));