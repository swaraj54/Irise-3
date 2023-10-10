
// Q Print numbers from 0 - 1000.

// consoole.log("0")
// console.log("1")
// consoole.log("2")
// console.log("3")
// consoole.log("4")
// console.log("5")

// loops 
// for 

// for (starting; ending; sequence) {

// }

// Q Print numbers from 0 - 1000.

var number = 1;
number++;
number = number + 1;
number++;
number++;
number--;
number = number - 1;
console.log(number)


for (var i = 0; i < 10; i++) {
    console.log(i)
}
// 1st iteration :
// var i = 0, 0 < 10 = true /false = true,  log(0), i++ i = 1
// 2nd Iteration
// i = 1; 1 < 10; true ; log("1"); i++ , i = 2
// 3rd Iteration
// i = 2; 2 < 10; true; log("i=2"); i++; i = 3

// Xth Iteration

// i = 9; 9 < 10; true; log("9"); i++; i = 10

// 11 Iteration
// i = 10; 10 < 10: false
// loop stop

for (var i = 10; i <= 20; i++) {
    console.log(i)
}

for (var i = 500; i <= 1000; i++) {
    console.log(i)
}



for (var i = 10 ; i > 1; i--) {
    console.log(i)
}
// 1st Iteration
// i = 10; 10 > 1; true; log("10"); i--; i = 9;
// 2nd Iteration
// i = 9; 9 > 1; true; log("9"); i--; i = 8;

// 9th Iteration
// i = 2; 2 > 1; true; log("2"); i--; i = 1

// 10 iteration
// i = 1; 1 > 1; false , 
// stopped.


for (var i = 1000; i >= 500; i--) {
    console.log(i)
}


// function  - set of code

function anyName() {
    console.log("hii")
}
anyName();

function doubleIt(irise) {
    console.log(irise * irise)
}
doubleIt(2);

function Arthmetic(number1, number2) {
    console.log(number1 + number2, "-addition")
    console.log(number1 - number2, "-subt")
    console.log(number1 * number2, "-multi")
    console.log(number1 / number2, "-divid")
}
Arthmetic(3,3);


function divid(num1, num2) {
    var dividation = num1 / num2;
    console.log(dividation)
    console.log(Math.floor(dividation))
    console.log(Math.ceil(dividation))
}

divid(1232, 1543)