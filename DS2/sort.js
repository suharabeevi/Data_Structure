//Bubble sort
// function sort(str) {
//     for (let i = 0; i < str.length - 1; i++) {
//         for (let j = 0; j < str.length - i - 1; j++) {
//             if (str[j] < str[j + 1]) {
//                 let temp = str[j]
//                 str[j] = str[j + 1]
//                 str[j + 1] = temp;
//             }

//         }
//     }
//     return str
// }
// let str = [12, 2, 34, 55, 71, 10, 1]
// console.log(sort(str))




//insertion sort
// function insertionsort(array){
// for(let i=1;i<array.length;i++){
//     let numberToinsert=array[i]
//     let j=i-1
//     while(j>=0&& array[j]>numberToinsert){
//         array[j+1]= array[j]
//         j=j-1
//     }
//     array[j+1] = numberToinsert
// }
// return array
// }
// const array=[-3,9,12,65,90,1,-15]
// console.log(insertionsort(array))
// function insertionsort(array){
//     for(let i=1;i<array.length;i++){
//         let numtoinsert=array[i]
//         let j=i-1;
//         while(j>=0&&array[j]>numtoinsert){
//             array[j+1]=array[j]
//             j=j-1
//         }
//         array[j+1]=numtoinsert
//     }
// }
// const array=[12,1,15,10,78,38]
// insertionsort(array)
// console.log(array);
//selection sort
// 
// function insertionsort(array){
// for(i=1;i<array.length;i++){
//     let number=array[i]
//     let j= i-1

//     while(j>=0&&array[j]>number){
//         array[j+1]=array[j]
//         j=j-1
// }
// array[j+1]=number
// }

// }
// const array=[11,56,1,10,7]
// insertionsort(array)
// console.log(array);
function selectionsort(arr){
        for(let i=0;i<arr.length;i++){
            for(let j=i+1;j<arr.length;j++){
                if(arr[i]>arr[j]){
                    let temp=arr[i]
                    arr[i]=arr[j]
                    arr[j]=temp
                }
              
            }
        }
        return arr
    }
    const arr=[3,5,12,14,6]
    console.log(selectionsort(arr));