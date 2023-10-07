let counter =1 
let copycounter=counter

copycounter =3
console.log(copycounter)
console.log(counter)


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
//  let person1=JSON.parse(JSON.stringify(person))

// person1.firstName='raju',
// person1.lastName='ddd'
// person1.address.street='aluva'
// console.log(person);
// console.log(person1);