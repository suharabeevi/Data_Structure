// let counter =1 
// let copycounter=counter

// copycounter =3
// console.log(copycounter)
// console.log(counter)


// let person ={
//    name:'suhara',
//    lastname:'beevi'
// }
// let person1=person;
// person1.name='jjjjj'
// console.log(person);
// console.log(person1);


//shallow copy

// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     address: {
//         street: 'North 1st street',
//         city: 'San Jose',
//         state: 'CA',
//         country: 'USA'
//     }
// };
//  shallow copy method
// let person1 ={...person}
// let person1=Object.assign({},person)
//deep copy method
// //  let person1=JSON.parse(JSON.stringify(person))
// // person1.firstName='raju',
// // person1.lastName='ddd'
// // person1.address.street='aluva'
// // console.log(person);
// // console.log(person1);

// function countSqaure(n){
//     let count =0;
//     for(let i=1;i<=n;i++){
//         for(let k=1;k<=n;k++){
//             let square = Math.sqrt(i*i+k*k)
//             if(Number.isInteger(square)&&square<=10){
//                 count++
//             }
//         }
//     }
//     return count
// }
// let n=10;
// console.log(countSqaure(n));
// console.log([3]!=['3']);
function abc(array){
    let map=new Map
    for(let i=0;i<array.length;i++){
        if(map.has(array[i])){
            map.set(array[i],1)
        }
        return map
    }
}
let array=[1,2,3,2]
console.log(abc(array));