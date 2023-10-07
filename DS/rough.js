
// function reverse(str){
//     for(let i=str.length-1;i>=0;i--){
// str1+=str[i]
//     }
//     return str1
// }
// let str='suhara'
// let str1=''
// console.log(reverse(str));

// binary search
// function binarySearch(array,value){
//     let left=0
//     let right=array.length-1
//     while(left<right){
//         let middle=Math.floor((left+right)/2)
//         if(value===array[middle]){
//             return middle
//         }
//         if(value>array[middle]){
//             left=middle+1
//         }
//         else{
//             right=middle-1
//         }
//     }
//     return -1
// }
// let array=[1,2,2,3,4,5,7,8,9,11]
// console.log(binarySearch(array,2));

//singly linked list
// class Node {
//     constructor(value) {
//         this.value = value;
//         this.next = null
//     }
// }
// class LinkedList {
//     constructor() {
//         this.head = null
//         this.tail=null;
//         this.size = 0
//     }
//     empty() {
//         return this.size === 0
//     }
//     getsize() {
//         return this.size
//     }
//     append(value) {
//         const node = new Node(value)
//         if (this.empty()) {
//             this.head = node
//             this.tail=node
//         }
//         else {
// this.tail.next=node
// this.tail=node

//             // let prev = this.node
//             // while (prev.next !== null) {
//             //     prev = prev.next
//             // }
//             // prev.next = node
//         }
//         this.size++
//     }
//     print() {
//         if (this.empty()) {
//             console.log('list is empty');
//         }
//         else {
//             let curr = this.head
//             let list = '';
//             while (curr) {
//                 list += `${curr.value}-`
//                 curr = curr.next
//             }
//             console.log(list);
//         }
//     }
//     reverse(){
       
//             let prev=null
//             let curr=this.head
//             while(curr){
//                 let next=curr.next
//                 curr.next=prev
//                 prev=curr
//                 curr=next
//             }
//             this.head=prev
//         }

//     prepend(value){
//         const node=new Node(value)
//        if(this.empty()){
//         this.head=node
//        }
//        else{
//             node.next=this.head
//             this.head=node
//        }
//        this.size++
//         }
//         insertvalue(index,value){
//       if(index<0||index>this.size){
//        return null
//       }
//       if(index===0){
//        this.prepend(value)
//       }
//       else{
//         const node=new Node(value)
//     let prev=this.head
//     for(i=0;i<index-1;i++){
//     prev=prev.next
//     }
//     node.next=prev.next
//     prev.next=node
//     this.size++
//       }
//         }
//      removevalue(value){
//      if(this.empty()){
//        return null
//        }
//        if(this.head.value===value){
//         this.head=this.head.next
//        }
//        else{
//         let prev=this.head
//         while(prev.next&&prev.next.value!==value){
//             prev=prev.next
//         }
//         let remove=prev.next
//         prev.next=remove.next
//         this.size--
//         return value
//        }
//        return null
//     }
//     }

// let list1 = new LinkedList
// list1.append(12)
// list1.append(23)
// list1.prepend(11)
// list1.prepend(44)
// list1.insertvalue(0,22)
// list1.print()
// list1.reverse()
// list1.print()
// list1.removevalue(12)
// list1.print()

// sum of alternative numbers
// let array=[];
// for(i=1;i<=10;i++){
//     array.push(i);
// }
// console.log(array);
// let sum=0;
// for(let i=0;i<array.length;i+=2){
//     sum+=array[i]
// }
// console.log(sum);

// let array=[9,2,3,4,5,6,7,8]
// let array1=[];
// largest=0
// for(i=0;i<array.length;i++){
//     if(array[largest]<array[i]){
//         largest=i
//     }
// }
// largest=array[largest]
// for(let i=0;i<array.length;i++){
//     array1.push(array[i]+3)
//     if(array1[i]>largest){
//         array1[i]=true;
//     }
//     else{
//         array1[i]=false;
//     }
// }
// console.log(array)
// console.log(array1)

//fibonacci

// function fibno(n){
//     if(n<2){
//         return n
//     }
//     return fibno(n-1)+fibno(n-2)
// }
// console.log(fibno(9));

// function calculatesum(n){
//     result=0;
//     for(let i=0;i<n;i++){
//         for(let j=0;j<n;j++){
//             for(let k=0;k<n;k++){
//                 result++
//             }
//         }
//     }
//     return result
// }
// console.log(calculatesum(5));

// array=[1,2,3,4,5,6,7,8,9]
// array1=[];
// array2=[];
// for(let i=0;i<array.length;i++){
//     for(let j=0; j<array.length; j++){
//         array1.push(array[j])
//         for(let k=0; k<array.length; k++){
//             array2.push(array[k]);
//         }
//     }
// }
// console.log(array);
// console.log(array1)
// console.log(array2)
//string rotation 
function rotation(str,value){
result='';
for(i=str.length-value;i<str.length;i++){
    result+=str[i]
}
for(i=0;i<str.length-value;i++){
    result+=str[i]
}
return result
}
console.log(rotation('hello',3));