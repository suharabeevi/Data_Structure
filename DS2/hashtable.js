// class Hashtable{
//     constructor(size){
//         this.table=new Array(size)
//         this.size=size
//     }
//     hash(key){
//         let total=0
//         for(let i=0;i<key.length;i++){
//             total+=key.charCodeAt(i)
//         }
//        return total%this.size
//     }
//     set(key,value){
//         const index=this.hash(key);
//         this.table[index]=value
//     }
//     get(key){
//         const index=this.hash(key)
//         return this.table[index]
//     }
//     remove(key){
//         const index=this.hash(key)
//         this.table[index]=undefined
//     }
//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i]);
//             }
//         }
//     }
// }
// const table1=new Hashtable(50)
// table1.set("name","suhara")
// table1.set("age",20)
// table1.display()


// let array = [2, 2, 1, 1, 1, 2, 2];

// function find(array) {
//   let count = {};
//   for (let i = 0; i < array.length; i++) {
//     let currentElement = array[i];
//     if (count[currentElement]) {
//       count[currentElement]++;
//     } else {
//       count[currentElement] = 1;
//     }
//   }
//   return count
// }

// console.log(find(array));
class HashTable {
    constructor(size) {
        this.table = new Array(size)
        this.size = size
    }
    hash(key) {
        let total = 0
        for (let i = 0; i < key.length; i++) {
            total += key.charCodeAt(i)
        }
        return total % this.size
    }
    set(key, value) {
        const index = this.hash(key);
        console.log(`Setting ${key} at index ${index}`);
        this.table[index] = value;
    }
    
    get(key) {
        const index = this.hash(key)
        return this.table[index]
    }
    remove(key) {
        const index = this.hash(key)
        this.table[index] = undefined
    }
    display() {
        for (let i = 0; i < this.table.length; i++) {
            if (this.table[i]) {
                console.log(i, this.table[i]);
            }
        }
    }
}
const table = new HashTable(50)
table.set("age",25)
table.set("place","Malapuram")
table.set("uihjhn","yes")
table.display()
