// let text="suhara beevi va"
// function reverse(text){
// let str=''
// for(let i=text.length-1;i>=0;i--){
//     str+=text[i];
// }
// console.log(str);
// }
// reverse(text)


//linked list 

class Node{
    constructor(value){
        this.value=value
        this.next=null
    }

}
class linkedList{
    constructor(){
        this.head=null
        this.size=0;
    }

    Empty(){
        return this.size===0
    }

    getsize(){
        return this.size
    }
prepend(value){
const node = new Node(value)
if(this.Empty()){
    this.head=node
}
else{
node.next=this.head
this.head=node
}
this.size++
}
append(value){
    const node = new Node(value)
    if(this.Empty()){
        this.head=node
    }
    else{
        let prev=this.head
        while(prev.next){
            prev=prev.next
        }
        prev.next=node;
    }
    this.size++
}
insert(value, index){
    if(index < 0|| index > this.size){
        return
    }
    if (index===0){
        this.prepend(value)
    }
    else{
        const node= new Node(value)
        let prev= this.head
        for(let i=0; i<index-1; i++){
            prev =prev.next
        }
        node.next=prev.next
        prev.next=node;
        this.size++
    }
}
removeNode(index){
if(index>0||index>this.size){
    return null
}
let remove;
if(index===0){
    remove=this.head;
    this.head=this.head.next;
}
 else{
    let prev=this.head
    for(let i=0;i<index-1;i++){
        prev=prev.next
    }
    remove=prev.next
    prev.next=remove.next;
 }
 this.size--
 return remove.value
}
removeValue(value){
    if(this.Empty()){
        return null
    }
    if(this.head.value===value){
        this.head=this.head.next
    }
    else{
        let prev=this.head
        while(prev.next&&prev.next.value!==value){
            prev=prev.next
        }
         let remove=prev.next
        prev.next=remove.next
        this.size--
        return value
    }
    return null
}
searchNode(value){
    if(this.Empty()){
        return -1
    }
    let i=0
    let curr=this.head
    while(curr){
        if(curr.value===value){
            console.log(i);
        }
        curr=curr.next
        i++
    }
  return -1
}
Reverse(){
    let prev= null
    let curr= this.head
   
    while(curr){
        let next=curr.next
        curr.next=prev
        prev=curr
        curr=next
    }
    this.head=prev;
}
print(){
    if(this.Empty()){
        console.log('list is empty');
    }
    else{
        let curr = this.head
         let listvalues=``
         while(curr){
            listvalues +=`${curr.value}`+' '
            curr=curr.next
         }
         console.log(listvalues);
    }
}


}
let array=[23,12,34,34];
const list1=new linkedList()
for(let i=0;i<array.length;i++){
    list1.append(array[i])
}



 const list= new linkedList()
 console.log('list is empty?', list.Empty());

 list.insert(56,0)
 list.prepend(12)
 list.prepend(8)
 list.append(51)
 list.print()
 list.Reverse();
 list.print()
 list.removeNode(1)
 //list.print()
 list.searchNode(45)
 
 //console.log('list size', list.getsize());
 




