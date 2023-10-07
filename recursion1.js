//recursion 
//  function sum(n){
// if(n===1) return 1
// return n+sum(n-1)
//  }
//  console.log(sum(8));

//binary search recursion

function binaryrecursion(array,value,left,right){
   if(left>right){
    return null
   }
   else{
    let middle=Math.floor((left+right)/2)
    if(array[middle]===value){
        return middle
    }
    if(value>array[middle]){
       return binaryrecursion(array,value,middle+1,right)
    }
       else{
        return binaryrecursion(array,value,left,middle-1)
       }
   }
}
let array=[11,22,22,33,44,55,66,90]
console.log(binaryrecursion(array,66,0,array.length-1));