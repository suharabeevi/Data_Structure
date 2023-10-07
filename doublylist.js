class Node{
    constructor(value){
        this.value=value
        this.prev=null
        this.next=null
    }
}
class Doublylinkedlist{
constructor(){
    this.head=null
    this.tail=null
    this.size=0
}
isempty(){
    return this.size===0
}
getsize(){
    return this.size
}
append(value){
    const node=new Node(value)
    if(this.isempty()){
        this.head=node
        this.tail=node
    }
    else{
        
    }
}
}