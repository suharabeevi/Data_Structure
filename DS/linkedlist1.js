// single single list

// class Node {
//     constructor(value) {
//         this.value = value
//         this.next = null
//     }
// }
// class Linkedlist {
//     constructor() {
//         this.head = null
//         this.size = 0
//     }

//     empty() {
//         return this.size === 0
//     }
//     append(value) {
//         const node = new Node(value)
//         if (this.empty()) {
//             this.head = node
//         }
//         else{
//             let curr=this.head
//             while(curr.next){
//                 curr=curr.next
//             }
//             curr.next=node
//         }
//         this.size++
//     }
//     prepend(){
//         const node=new Node(value)
//     }
//     print(){
//         if(this.empty()){
//            console.log('list is empty');
//         }
//         else{
//             let curr=this.head
//             let listvalues= ``
//             while(curr){
//                 listvalues+=`${curr.value} `
//                 curr=curr.next
//             }
//             console.log(listvalues);
//         }
//     }
// }
// const list=new Linkedlist()
// list.print()
// list.append(12)
// list.append(13)
// list.print()

//linked list
class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }

    empty(){
        return this.size===0
    }

    append(value){
        const node=new Node(value)
        if(this.empty()){
            this.head=node
        }
        else{
            
        }
    }
}