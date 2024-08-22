// 1.   Array destructuring
const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];
// const [x, y] = [42, 65];

const [x, y] = numbers;
console.log(x, y);

function boxify(x, y){
    const nums = [x, y];
    return nums;   
}
// const [first, second] = [90, 34];
const [first, second] = boxify(90, 34);

console.log(boxify(90,34));

// object destructuring
// const {name, age } = { name: 'alu', age: 14};
const {name, ...rest} = {name: 'alu', salary: 3400, age: 35};

const employee = {
    ide : 'VS Code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: "water",
    }
}
const {machine, ide} = employee;
const {drink, address} = employee?.specification;
const {firstLan, secondLan} = employee?.languages;