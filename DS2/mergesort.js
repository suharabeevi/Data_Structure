// 
// //Quick sort

// function quicksort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let pivot=arr[arr.length-1]
//     let left=[]
//     let right=[]
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
//             left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quicksort(left),pivot,...quicksort(right)]
// }
// const arr=[8,20,-2,4,-6 ]
//  console.log(quicksort(arr));

// function quicksort(arr){
//     if(arr.length<2){
//         return arr
//     }

//     let pivot=arr[arr.length-1]
//     let left=[]
//     let right=[]
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<pivot){
// left.push(arr[i])
//         }else{
//             right.push(arr[i])
//         }
//     }
//     return [...quicksort(left),pivot,...quicksort(right)]
// }
// const arr=[8,20,-2,4,-6]
// // console.log(quicksort(arr));
// function quicksort(arr){

//     if(arr.length <2){
//       return arr
//     }

//     let pivot = arr[arr.length-1]
//     let left = []
//     let right = []


//       for(let i=0; i<arr.length-1;i++){

//           if(arr[i] < pivot){
//               left.push(arr[i])
//           }else{
//               right.push(arr[i])
//           }
//       }

//       return[...quicksort(left),pivot,...quicksort(right)]

//   }


//   const arr =[8,20,-2,4,-6]

//   console.log(quicksort(arr));
//
//merge sort
// function mergeSort(array) {
//     if (array.length < 2) {
//         return array
//     }
//     let middle = Math.floor(array.length / 2)
//     let left = [];
//     let right = [];
//     for (let i = 0; i < middle; i++) {
//         left.push(array[i])
//     }
// for(let i=middle;i<array.length;i++){
//     right.push(array[i])
// }
// }
function mergeSort(arr) {
            if (arr.length < 2) {
                return arr;
            }
    
            let middle = Math.floor(arr.length / 2);
            let left = [];
            let right = [];
    
            for (let i = 0; i < middle; i++) {
                left.push(arr[i]);
            }
            for (let i = middle; i < arr.length; i++) {
                right.push(arr[i]);
            }
    
            return merge(mergeSort(left), mergeSort(right));
        }
    
        function merge(left, right) {
            let result = [];
            let leftIndex = 0;
            let rightIndex = 0;
    
            while (leftIndex < left.length && rightIndex < right.length) {
                if (left[leftIndex] < right[rightIndex]) {
                    result.push(left[leftIndex]);
                    leftIndex++;
                } else {
                    result.push(right[rightIndex]);
                    rightIndex++;
                }
            }
    
            while (leftIndex < left.length) {
                result.push(left[leftIndex]);
                leftIndex++;
            }
    
            while (rightIndex < right.length) {
                result.push(right[rightIndex]);
                rightIndex++;
            }
    
            return result;
    
        }
        const arr=[-8,9,7,6,3,0]
        console.log(mergeSort(arr))
    
    