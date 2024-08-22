// ternary Operator

const money = 80;
let food;
if(money > 100){
    food = 'biryani';
}else{
    food = 'cha biscuit';
}
// ternary
let food1 = money > 100 ? 'biryani' : 'cha biscuit';
// console.log(food1);

let drink = (money > 100 && myVar > 100) ? 'coke' : 'filter water';
// console.log(drink);

// Number to string conversion
const num1 = 32;
// console.log(num1);
const num1String = num1 + "";
// console.log(num1String);

// String to Number conversion
const input = '43';
// console.log(input);
const stringToNumber = +input;
// console.log(stringToNumber);

// 
let isActive = true;
const showUser = () => console.log('display User');
const hideUser = () => console.log("Hide User");
// isActive ? showUser() : hideUser();
// use && operator if the left side is true then right side will be executed 
isActive && showUser();
// use || if the left side is false then right side will be executed
isActive || hideUser();
// toggle bolean
isActive = !isActive;