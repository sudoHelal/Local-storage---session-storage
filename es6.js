const numbers = [89, 35, 98, 12];
const student = {
    name: 'sakib khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
};

const about = `My name is ${student.name} age of ${numbers[1]} has number
${numbers[2]} also liked movies ${student.movies[1]}`;
console.log(about);

// 2. arrow function

// 3. speard operator  
const newNumbers = [...numbers];
numbers.push(100);
numbers.push(33)

// create new array form an older array and add an element 
const currentANumber = [...numbers, 34];
console.log(numbers)
console.log(newNumbers);
console.log(currentANumber);
