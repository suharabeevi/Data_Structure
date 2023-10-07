// arrayToLinkedList(array){
//     if(array.length===0){
//         return "No values"
//     }

//     const newNode=new Node(array[0]);
//     let currentNode=newNode;
//     this.head=currentNode;

//     for(let i=1;i<array.length;i++){
//         currentNode.next=new Node(array[i])
//         this.tail=currentNode.next
//         currentNode=currentNode.next
//         this.length++
//     }
//     return this;
// }

// }
// }
// class Node{
//     constructor(value){
//         this.value=value;
//         this.next=null;
//     }
// }
//     class linkedList{
// constructor(){
//     this.head=null
//     this.size=0
// }


// isempty(){
//     return this.size===0
// }
// getsize(){
//     return this.size
// }
// append(value){
//     const node=new Node(value)
// if(this.isempty()){
// this.head=node
// }
// else{
//     let prev=this.head
//     while(prev.next){
// prev=prev.next
//     }
// prev.next=node
// }
// this.size++
// }
// print(){
//     if(this.isempty()){
//         console.log('list is empty');
//     }
//     else{
//         let curr = this.head
//          let listvalues=``
//          while(curr){
//             listvalues +=`${curr.value}`+' '
//             curr=curr.next
//          }
//          console.log(listvalues);
//     }
// }

// }
// let array=[12,45,67,23,78]
// const list=new linkedList()
// for(i=0;i<array.length;i++){
// list.append(array[i]);
// }
// list.print()
//array to list//

// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head=null
//         this.size=0
//     }

// empty(){
//     return this.size===0
// }
// getsize(){
//     return this.size
// }



// append(value){
//     const node= new Node(value)
//     if(this.empty()){
//         this.head=node
//     }
//     else{
      
//         let prev=this.head
//     while(prev.next){
//     prev=prev.next
// }
// prev.next=node;
//     }
//     this.size++
// }
// prepend(value){
//     const node=new Node(value)
//     if(this.empty()){
//         this.head=node
//     }
//     else{
//         node.next=this.head
//         this.head=node
//     }
// this.size++
// }
// insert(value,index){
//     if(index<0||index>this.size){
// return 
//     }
//     if(index===0){
//         this.prepend(value)
//     }
//     else{
//         const node=new Node()
//         let prev= this.head
//         for(i=0;i<index-1;i++){
//             prev=prev.next
//         }
//         node.next=prev.next
//         prev.next=node
//         this.size++
//     }
// }
// print(){
//     if(this.empty()){
//       console.log('null');
//     }
//     else{
//         let curr=this.head
//         let listvalues=[]
//         while(curr){
//       listvalues.push(curr.value)
//         curr=curr.next
//         }
//         console.log(listvalues);
//     }
// }
// }

// const list=new LinkedList()
// list.print();
// list.prepend(23)
// list.prepend(34)
// list.prepend(56)
// list.append(34)
// list.insert(55,0)
// list.append(78,2)
// list.print()

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
    getsize(){
        return this.size
    }

    append(value){
        const node=new Node(value)
        if(this.empty()){
            this.head=node
        }
        else{
            let prev=this.head
            while(prev.next){
        prev=prev.next
            }
            prev.next=node
        }
        this.size++
    }
    print(){
        if(this.empty()){
          console.log(("null"));
        }
        else{
let curr=this.head
let listvalues=``
while(curr){
    listvalues+=`${curr.value}`+" "
    curr=curr.next;
}
console.log(listvalues);
        }
    }
    deleteduplicate(){
        let curr=this.head;
        while(curr&&curr.next){
            if(curr.value===curr.next.value){
                curr.next=curr.next.next;
                continue;
            }
            curr=curr.next
            
        }
    }
    }
    let array1=[34,78,12]
const list=new LinkedList()
for(i=0;i<array1.length;i++){
    list.append(array1[i])
}
   list.print()
