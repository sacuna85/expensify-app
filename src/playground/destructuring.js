// const person = {
//     name: 'Andrew',
//     age: 27,
//     location: {
//         city: 'Philadelphia',
//         temp: 92
//     }
// };

// const { name = 'Anonymous', age } = person;
// console.log(`${name} is ${age}.`)

// const { temp: temperature, city } = person.location;
// if (temperature && city) {
//     console.log(`It's ${temperature} in ${city}.`)
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penquin'
//     }
// };
// const { name: publisherName = 'Self-published' } = book.publisher;

// console.log(publisherName); 

//ARRAY DESTRUCTING*********************

const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];
const [, city, state] = address;
console.log(`You are in ${city}, ${state}.`);

const item = ['Coffee (hot)', '$2.00', '$2.25', '$2.75'];
const [hotCoffee, , mediumCost] = item;
console.log(`A medium ${hotCoffee} costs ${mediumCost}.`)