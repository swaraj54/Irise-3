

// console.log(87 / 2)  // quo
// console.log(87 % 2) // rem
// console.log(86 / 2)  // quo
// console.log(86 % 2) // rem
// console.log(85 % 2) // rem
// console.log(84 % 2) // rem
// console.log(83 % 2) // rem

// console.log( 56 % 2 == 0 )
// console.log( 57 % 2 == 0 )

//  / %

//    ____   48 - Quo
// 2 / 97
//     96
//      1 - Rem


// var number = 4567;
// if (number % 2 == 0) {
//     console.log(`The ${number} is even `)
// } else {
//     console.log(`The ${number} is Odd `)
// }

// Datatypes

// var myNumber
// console.log(typeof(myNumber))

// Q.Given an a number find out is number even or odd,
//  if number is even then check number2 is even or odd
// and if number is odd check number3 is even or odd

var number = 22;
var number2 = 78;
var number3 = 67;
if (number % 2 == 0) {
    if (number2 % 2 == 0) {
        console.log(`${number} and ${number2} are even numbers.`)
    } else {
        console.log(`${number} is even but ${number2} is odd.`)
    }
} else {
    if (number3 % 2 == 0) {
        console.log(`${number3} is even and ${number} is odd.`)
    } else {
        console.log(`${number3} and ${number} both are odd.`)
    }
}
