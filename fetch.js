// 1.   JSON => stringify, parse

const student = {
    name: "Helal Uddin",
    age: 30,
    movies : ['king khan', 'Dhakar Mastan'],
}
const studentJSON = JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);
const studentObj = JSON.parse(studentJSON);
// console.log(studentObj);

// 2.fetch
// const categories = async() ={
//     const response = await fetch('url')
//     const data = await response.JSON();
//     console.log(data);
// }
// keys, values
const keys = Object.keys(student);
const values = Object.values(student);
console.log(keys, values);

// for
const numbers = [23, 54, 67, 87, 23, 78];
numbers.forEach(numb => console.log(numb));

const eachNumberMultiplyByTwo = numbers.map(number => number * 2);
console.log(eachNumberMultiplyByTwo);
// for of on array like object
// loop on an object using for in 


// add or remove form an array
const products = [
    {name: 'camera', price: 9000, brand: 'canon', color: 'gray'},
    {name: 'iphone', price: 100000, brand: 'Iphone', color: 'sliver'},
    {name: 'Watch', price: 10000, brand: 'casio', color: 'black'},
    {name: 'healmate', price: 5000, brand: 'rock', color: 'sky-blue'},
];

const newProduct = {name: 'webcam', price: 700, brand: 'red'};

const newProducts = [...products, newProduct];
console.log(newProducts);
// create a new array without one specific item
// remove phone means create a new array without the phone item
const remaining = products.filter(product => product.name !== 'iphone');
console.log(remaining);