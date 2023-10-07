let arr = [7,8, 3,1,2];

for(let i=0; i<arr.length-1; i++){
    for(let j=0; j<arr.length-i-1; j++){
        if(arr[j] > arr[j+1]){
            let temp = arr[j];
            arr[j] = arr[j+1];
            arr[j+1] = temp;
        }
    }
}

console.log(arr);

function binarySearch(arr, target){
    let low=0;
    let high = arr.length-1;
    let mid;
   while((high-low)>1){
    mid = Math.floor((high + low)/2);
    if(arr[mid] < target){
        low = mid +1;
    }
    else {
        high = mid;
    }
   }
   
   if(arr[low] === target) return low;
   else if(arr[high] === target) return high;
   else return false;
}

let arr1 = [1,2,3,4,5,6,7];

console.log(binarySearch(arr1, 2));