var names = ["rahul", "aakash",  "abc", "suraj", "kaveri"];
names.sort();
console.log(names)

var numbers = [23, 34, 56, 76, 98, 12, 43, 100000]
numbers.sort();
console.log(numbers)

var numbers2 = [23, 34, 56, 76, 98, 12, 43, 100000];

numbers2.sort((a, b) => b - a);
console.log(numbers2)
numbers2.sort((a, b) => a - b);
console.log(numbers2)

// function myFunction() { }
//   () => 

// JSON.stringify - convert JS data into JSON 
// JSON.parse     - convert JSON data into JS

var myObject = { studentsNumber: "one hundred" }

var result = JSON.stringify(myObject)

console.log(result)
console.log(result.studentsNumber)

result = JSON.parse(result)
console.log(result)
console.log(result.studentsNumber)