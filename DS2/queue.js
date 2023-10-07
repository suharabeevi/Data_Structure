// class Node {
//     constructor(data){
//         this.data = data;
//         this.next = null;
//     }
// }

// class Queue{
//     constructor(){
//         this.front = null;
//         this.rear = null;
//         this.size = 0;
//     }
//     // Insertin value to the rear end side
//     enqueue(data){
//         let newNode = new Node(data);
//         if(this.rear === null){
//             this.front = newNode;
//             this.rear = newNode;
//             this.size++;
//             return true;
//         }
//         this.rear.next = newNode;
//         this.rear = newNode;
//        return true;
//     }
//     // removing values from the front end side
//     dequeue(){
//         if(this.front === null){
//             console.log('there is no element in the queue');
//             return false;
//         }
//         if(this.rear === this.front){
//             this.front = null;
//             return true;
//         }
//         // let unwanted = this.front;
//         // this.front = unwanted.next;
//         // unwanted.next = null;
//         // return unwanted.data;
//        //console.log(this.front.data)
//         this.front=this.front.next;

//     }
//     // displaying the front end value;
//     peek(){
//         console.log(this.front.data);
//         //return this.front.data;
//     }
//     // displaying all the items in the queue
//     display(){
//         let current = this.front;
//         while(current !== null){
//             console.log(current.data);
//             current = current.next;
//         } 
//     }
// }
// let arr = [1,2,3,4];
// let queue = new Queue();

// for(let i=0; i<arr.length; i++){
//     queue.enqueue(arr[i]);
// }
// ;
// queue.enqueue(10)
// //queue.display()
// queue.dequeue()
// queue.display()
// queue.peek()
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
class Queue {
    constructor() {
        this.front = null
        this.rear = null
        this.size = 0
    }
    enqueue(value) {
        const node = new Node(value)
        if (this.front === null) {
            this.front = node
            this.rear = node
            this.size++
            return true
        }
         this.rear.next=node
        this.rear = node
        this.size++
    }
    dequeue() {
        if (this.front === null) {
            console.log("there is no element");
            return false
        }
        if (this.front === this.rear) {
            this.front === null
            return true
        }
        this.front = this.front.next
        this.size--

    }
    peek(){
        console.log(this.front.value);
    }
    display(){
        let curr=this.front
        while(curr!=null){
            console.log(curr.value);
            curr=curr.next
        }
    }
}
let array=[1,90,34]
const ss=new Queue()
for(let i=0;i<array.length;i++){
ss.enqueue(array[i])
}
ss.dequeue()
ss.display()
ss.peek()