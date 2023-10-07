let array=[1,1,2,3,4]
 function Bsearch(array,value){
    let first=0
    let last= array.length-1

    while(first<=last){
        let middle=Math.floor((first+last)/2)
        if(array[middle]===value){
            return value
        }
     if(array[middle]<value){
        first=middle+1
     }
     else{
        last=middle-1
     }
    }

 }
 console.log(Bsearch(array,1 ));

 class Node{
    constructor(value){
this.value=value
this.prev=null
this.next=null
    }
 }
 class LinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this.size=0
    }
empty(){
    return this.size===0
}

append(value){
    const node=new Node(value)
    if(this.empty()){
        this.head=node
        this.tail=node
    }
    else{
        node.prev=this.tail.next
        this.tail=node
    }
}
print(){
    if(this.empty()){
        console.log("empty");
    }
else{
    let prev=this.head
    let list=[]
    while(prev){
       list+=list.push(prev.value)
    }

}

}

 }
