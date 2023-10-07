class Node{
    constructor(value){
        this.value=value;
        this.next=null;
    }
}
class LinkedList{
    constructor(){
        this.head=null
        this.size=0;

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
            let prev= this.head
            while(prev.next){
              prev=prev.next
            }
            prev.next=node
        }
        this.size++
    }
    deleteduplicate(){
        let curr=this.head
        while(curr&&curr.next){
            if(curr.value===curr.next.value){
                curr.next=curr.next.next
                continue
            }
            curr=curr.next
        }
    }
    print(){
        if(this.empty()){
            console.log('empty');
        }
        else{
            let curr=this.head
            let listvalues=[]
            while(curr){
            listvalues.push(curr.value)
            curr=curr.next
            }
            console.log(listvalues);
           
        }
    }
}
let list=new LinkedList()
list.print()
list.append(34)
list.append(38)
list.append(40)
list.append(42)
list.append(42)
list.append(42)
list.print()
list.deleteduplicate()
list.print()