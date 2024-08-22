const products = [
    {name: 'camera', price: 9000, brand: 'canon', color: 'gray'},
    {name: 'iphone', price: 100000, brand: 'Iphone', color: 'sliver'},
    {name: 'Watch', price: 10000, brand: 'casio', color: 'black'},
    {name: 'healmate', price: 5000, brand: 'rock', color: 'sky-blue'},
];
const brands = products.map(product => product.brand);
// console.log(brands);
const prices = products.map(product => product.price);
// console.log(prices);
// const productName = products.map(product => product.name);
// console.log(productName);
// const colors = products.map(product => product.color);
// console.log(colors);


// products.forEach((product) => console.log(product));
// products.forEach(product => console.log(product.color));

products.forEach((product) =>{

});

// 3.filtter
// const cheap = products.filter(product => product.price <=10000);
// console.log(cheap);
const specificName = products.filter(product => product.name.includes('c'));
// console.log(specificName);

const special =products.find(product => product.name.includes('c'));
console.log(special);