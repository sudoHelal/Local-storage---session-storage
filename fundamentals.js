// 1. How to declare a variable using let and const
const fatherName = 'Arnold';
let season = 'rainy';
season = 'winter';
// 2. Conditions 

// 6 basic conditions: >,<, ===, !==, <=, >=
// multiple conditions: &&, ||
if(fatherName === 'arnold' || season === 'rainy'){

}
else if(fatherName === 'Arnold'){

}
else{

}
// 3. array declare
// index. length, push
const numbers = [89, 35, 98, 12];
numbers[2] = 56;

// 4. for loop
for(let i = 0; i < numbers.length;i++){
    const number = number[i];
    console.log(number);
}
// 5.   function
function multiply(num1, num2){
    const result = num1 * num2;
    return result;
}
const output = multiply(5,4);