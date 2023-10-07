// function rotateString(str, places) {
//    places = places % str.length;
//     let result = " ";
//     for (let i = str.length - places; i < str.length; i++) {
//         result += str[i];
//     }
//     for (let i = 0; i < str.length - places; i++) {
//         result += str[i];
//     }
//     return result;
// }

// let str= "Hello";
// //
// console.log(rotateString(str,2));

// let str="heloo, world";
// console.log(str.length);

// sum of alternative numbers
// function alternative(num){
//     let sum=0;
// for(let i=0;i<num;i+2){
// sum=sum+i
// return sum
// }
// }
// console.log(alternative(100));
// let sum=0;
// for(let i=0;i<=10;i+2){
//      sum=sum+i
// }
// console.log(sum);
// console.log(sum);
// function sumOfAlternateNumbers(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i += 2) {
//         sum += arr[i];
//     }
//     return sum;
// }

// let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
// let result = sumOfAlternateNumbers(numbers);
// console.log(result);

// function sumOfAlternateNumbers(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i += 2) {
//         sum += arr[i];
//     }
//     return sum;
// }

// let numbers = [1, 2, 3, 4, 5, ...,100];
// let result = sumOfAlternateNumbers(numbers);
// console.log(result);

// function sumOfAlternateNumbers(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i += 2) {
//         sum += arr[i];
//     }
//     return sum;
// }

// let numbers = [];
// for (let i = 2; i <= 15; i++) {
//     numbers.push(i);
// }

// let result = sumOfAlternateNumbers(numbers);
// console.log(result);

//sum of alternative numbers
// function sumof(array){
//     let sum=0;
//     for(let i=0;i<array.length;i+=2){
//         sum=sum+array[i]
//     }
//     return sum
// }
// let array=[]
// for(let i=1;i<=15;i++){
//     array.push(i)
// }
// console.log(array);
// console.log(sumof(array))

// string rotation

// function stringrotatioin(str,value){
//     result=' '
// for(let i=str.length-value;i<str.length;i++){
//     result+=str[i]
// }
// for(i=0;i<str.length-value;i++){
//     result+=str[i]
// }
// return result
// }
// console.log(stringrotatioin("hello",2))

//array reversing
// function reverse(str){
//     let result=''
//     for(let i=str.length-1;i>=0;i--){
// result+=str[i]
//     }
//     return result
// }
// let str='suhara'
// console.log(reverse(str));
// // function reverseString(str) {
//     let reversed = "";
//     for (let i = str.length - 1; i >= 0; i--) {
//       reversed += str[i];
//     }
//     return reversed;
//   }
  
//   let inputString = "hello world";
//   let reversedString = reverseString(inputString);
//   console.log(reversedString) // Output: "dlrow olleh"



// question palidorme or not

function palindrome(string) {
    for (let i = 0, j = string.length - 1; i < j; i++, j--) {
        if (string[i] !== string[j]) {
            return false; 
        }
    }
    return true; 
}

let string = "yes";
console.log(palindrome(string));
