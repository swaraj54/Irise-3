var number1 = 23;
var number2 = 98;
var addition = number1 + number2;
console.log(addition, "- addition")
var subtraction = number1 - number2;
console.log(subtraction)
var multi = number1 * number2;
console.log(multi)
var divid = number1 / number2;
console.log(divid)


// Conditional Statement 

// if else 


// if (condition) {
//     statement - true
// } else {
//     statement - false
// }

console.log(1 > 2)
if(2 < 1){
    console.log("2 is greter than 1.")
} else {
    console.log("1 is greter than 2")
}

// =   -> use to assign a value 
// ==  -> use to compare values 
// === -> use to compare values with datatypes

console.log(2 == "2")
console.log(2 === "2")




var num = 73;

if (num == 23) {
    console.log("Value matched.")
} else {
    console.log("Value did't matched.")
}

// && || operators

// && -> all conditions must be true  then ill return true
// || => one condition true then ill return true
console.log(1 == 1 && 2 == 2)
console.log(1 == 13 && 2 == 2)
console.log(1 == 23 && 2 == 34)

console.log(1 == 1 || 2 == 2)
console.log(1 == 1 || 2 == 23)


var age = 100;
if (age == 19) {
    console.log("You are eligible for Learning License.")
} else if (age > 19 && age < 80) {
    console.log("You are eligible for Driving License.")
} else if (age < 0 || age == 0) {
    console.log("You are not even born.")
} else {
    console.log("You are over age, you are not allowed.")
}


