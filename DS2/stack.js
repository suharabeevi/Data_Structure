class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}
class Stack {
    constructor() {
        this.top = null
        this.size = 0
    }
    getsize() {
        return this.size
    }
    push(value) {
        const node = new Node(value)
        if (this.top === null) {
            this.top = node
            this.size++
            return true

        } else {
            node.next = this.top
            this.top = node
            this.size++
            return true
        }


    }
    pop() {
        let unwanted = this.top
        this.top = unwanted.next
        unwanted.next = null
        this.size--
        return unwanted.value 
       // console.log(this.top.value);
        // this.peek();
        // this.top=this.top.next
        // this.size--
    }
    peek() {
        console.log(this.top.value);
        return this.top.value
    }

   

        // removemiddle(){
        //     let slow=this.top
        //     let fast=this.top
        //     while(fast&&fast.next){
        //         slow=slow.next
        //         fast=fast.next.next
        //     }

        // }
        
        removemiddle() {
            let slow = this.top;
            let fast = this.top;
            let prev = null;
          
            while (fast && fast.next) {
              prev = slow;
              slow = slow.next;
              fast = fast.next.next;
            }
           if (prev === null) {
    
            this.top = this.top.next;
          } else {
           
            prev.next = slow.next;
          }
          
          }
          

        display() {
            let curr = this.top
            while (curr) {
                // if(curr===slow){
                //     curr=curr.next
                // }
                    console.log(curr.value);
                
                    curr=curr.next
                }
            }
    // middle(){
    //     if(!this.top){
    //        return null
    //     }
    //     let slow=this.top
    //     let fast=this.top
    //     while(fast&&fast.next){
    //         slow=slow.next
    //         fast=fast.next.next
    //     }
    //   console.log(slow.value);
    // }
    }

const st = new Stack()
st.push(12)
st.push(13)
st.push(18)
st.push(56)
// st.pop()
st.push(67)
// st.push(34)
// st.push(89)
// st.push(15)
// st.push(99)
st.pop()
// st.removemiddle()
st.display()
// st.pop()
// st.push(66)
// st.push(17)
// st.push(34)
// st.display()
//st.middle()

