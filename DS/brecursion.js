

//binary search

// function bsearch(array,value){
// let left=0;
// let right=array.length-1
// while(left<right){
//     let middle=Math.floor((left+right)/2)
//     if(value===array[middle]){
//         return middle
//     }
//     if(value>array[middle]){
//         left=middle+1
//     }
//     else{
//         right=middle-1
//     }
// }
// return -1
// }
// let array=[11,12,13,14,15,20,25,45]
// console.log(bsearch(array,14))


// binary search recursion

function bsearch(array,value,left,right){
    if(left>right){
        return null
    }
    let middle=Math.floor((left+right)/2)
    if(value===array[middle]){
        return middle
    }
    if(value>array[middle]){
        return bsearch(array,value,middle+1,right)
    }
    else{
        return bsearch(array,value,left,middle-1)
    }
}
let array=[12,13,13,14,14,15]
console.log(bsearch(array,15,0,array.length-1));