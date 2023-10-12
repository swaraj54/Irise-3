
//push 

// var result = [2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// for (var i = 1; i < 11; i++) {
//     // console.log(i)
//     result.push(i)
// }
// console.log(result)
// console.log(result.join(" "))

const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
// Expected output: 4
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows"]

animals.push('chickens', 'cats', 'dogs');
console.log(animals);
// Expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]

// pop

const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// Expected output: "tomato"

console.log(plants);
// // Expected output: Array ["broccoli", "cauliflower", "cabbage", "kale"]

plants.pop();
plants.pop();

console.log(plants);
// Expected output: Array ["broccoli", "cauliflower", "cabbage"]


//shift 
const array1 = [1, 2, 3];
array1.shift()
array1.shift()
array1.shift()
console.log(array1)

const firstElement = array1.shift();

console.log(array1);
// Expected output: Array [2, 3]

console.log(firstElement);
// Expected output: 1


// unshift 


var array3 = [1,2,3,4]
array3.unshift(5)
array3.unshift(6)
array3.unshift(7,8)
console.log(array3)


// map()

var numbers = [1, 2, 3, 4]

// function myFunc (){}
// const myFunction = () => { }
//   () => 

// for (var i = 0; i < numbers.length; i++) { }

var multiByTwo = numbers.map((i) => i * 2)
var additionByTwo = numbers.map((i) => i + 2)
console.log(multiByTwo, "multiByTwo")
console.log(additionByTwo, "additionByTwo")




