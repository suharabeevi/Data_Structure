


// console.log(bsearch([8,8,9,23,89,90],12));

// console.log('hey');
// let array=[12,12,34,45,67,89]
// function Bsearch(array, value){
//     let left=0;
//     let right=array.length-1
//     while(left<=right){
//         let middle=Math.floor((left+right)/2)
//         if(value===array[middle]){
//             return middle
//         }
//         if(value<array[middle]){
//             right=middle-1
//         }
//         else{
//             left=middle+1
//         }
//     }
//     return -1
// }
// console.log(Bsearch(array,12));




//doubly linked list
// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//         this.prev = null
//     }
// }
// class Linkedlist {
//     constructor() {
//         this.head = null;
//         this.tail = null
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
//             this.tail = node
//         }
//         else {
//             this.tail.next = node
//             node.prev = this.tail
//             this.tail = node
//         }
//         this.size++
//     }
//     prepend(){
//         const node=new Node(value)
//         if(this.empty()){
//             this.head=node
//             this.tail=node
//         }
//         else{
//             node.next=this.head
//             this.head.prev=node
//             this.head=node
//         }
//     }
//     print() {
//         if (this.empty()) {
//             console.log("list is empty");
//         }
//         else {
//             let curr = this.head
//             let listvalues = ` `
//             while (curr) {
//                 listvalues += `${curr.value}-`
//                 curr = curr.next
//             }
//             console.log(listvalues);
//         }
//     }
// }
// const list = new Linkedlist()
// // list.print()
// // list.append(12)
// // list.append(23)
// // list.append(45)
// // list.append(67)
// // list.print()

// //workout
// class Node{
//     constructor(value){
//         this.value=value;
//         this.prev=null
//         this.next=null
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head=null
//         this.tail=null
//         this.size=0
//     }
//     empty(){
//         return this.size===0
//     }
//     getsize(){
//         return this.size
//     }
//     append(value){
//         const node=new Node(value)
//         if(this.empty()){
//             this.head=node
//             this.tail=node
//         }
//         else{
//             this.tail.next=node
//             node.prev=this.tail
//             this.tail=node
//         }
//         this.size++
//     }
//     print(){
//         if(this.empty()){
//             console.log('list is empty')
//         }
//         else{
//            let  curr=this.head
//             let listvalues=``
//             while(curr){
//                 listvalues+=`${curr.value}`+`-`
//                 curr=curr.next;
//             }
//             console.log(listvalues);
//         }
//     }
// }
// let array=[12,34,56,67,78]
// let list= new LinkedList()
// for(i=0;i<array.length;i++){
//     list.append(array[i])
// }
// list.print()

// // binary search
//  function bsearch(array,value){
//     let left=0
//     let right=array.length-1
//     while(left<=right){
//         let middle=Math.floor((left+right)/2)
//         if(value===array[middle]){
//             return middle
//         }
//         if(value<array[middle]){
//             right=middle-1
//         }
//         else{
//             left=middle+1
//         }
//     }
//     return -1
//  }
//  console.log(bsearch([12,23,34,45,56,56],56));

// binary search recursion


// function rbsearch(array,value,leftpointer,rightpointer){
//     if(leftpointer>rightpointer){
//         return -1
//     }
//     let middle=Math.floor((leftpointer+rightpointer)/2)
//     if(array[middle]===value){
//         return middle
//     }
//   if(value<array[middle]){
//     return rbsearch(array,value,leftpointer,middle-1)
//   }
//   else{
//     return rbsearch(array,value,middle+1,rightpointer)
//   }
// }
// let array=[12,13,13,14,14,16,17,18]
// console.log(rbsearch(array,18,0,array.length-1));


//sum of alternative numbers
// function array(num){
// var sum=0;
// for(i=0;i<num;i++){

//   sum=sum+i
// }
// console.log(sum);
// }
// console.log(array(9));


//singly linked list

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null
        this.size = 0;
    }
    empty() {
        return this.size === 0
    }
    getsize() {
        return this.size
    }
    append(value) {
        const node = new Node(value)
        if (this.empty()) {
            this.head = node
        }
        else {
            let prev = this.head
            while (curr.next) {
                curr = curr.next
            }
            prev.next = node
        }
        this.size++
    }
    prepend(value){
        const node=new Node(value)
        if(this.empty()){
            this.node=node
        }
        else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }
    print() {
        if (this.empty()) {
            console.log('list is empty')
        }
        else {
            let curr = this.head
            let listvalues = ``
            while (curr) {
                listvalues += `${curr.value}`
                curr = curr.next;
            }
            console.log(listvalues);
        }
    }
}

const list = new LinkedList()

list.prepend(56)
list.append(23)
list.print()


