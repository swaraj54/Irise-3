
// Q Find the numbers who odd and even.
var numbers = [23, 15, 81, 74, 57, 88, 53, 49, 36, 61]
// console.log(numbers)

function findSumAndEven(array) {
    // console.log(array)

    for (var i = 0; i < array.length; i++) {
        // console.log(array[i], i)
        if (array[i] % 2 == 0) {
            console.log(`${array[i]} this number is even.`)
        } else {
            console.log(`${array[i]} this number is odd.`)
        }
    }
}
findSumAndEven(numbers)


// Q Find the count of numbers who odd and even.
var numbers = [23, 15, 81, 74, 57, 88, 53, 49, 36, 61, 22, 77]
// console.log(numbers)

function findSumAndEven(array) {
    // console.log(array)
    var oddCount = 0;
    var evenCount = 0;

    for (var i = 0; i < array.length; i++) {
        // console.log(array[i], i)
        if (array[i] % 2 == 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }
    console.log(oddCount, "-oddcount")
    console.log(evenCount, "-evenCount")
}
findSumAndEven(numbers)

// Nested for loops

// for (var i = 0; i < Array.length; i++) {
//     for (var j = 0; j < Array.length; j++) {

//     }
// }

// Q. given an array and target,
//     find out two numbers whos addition is target.

// 23, 3
// 23, 4
// 23, 8
// 23, 4
// 23, 3
// 23, 58

// 3 4
// 3 8 
// 3 4
// 3 2
// 3 58

// 4 8
// 4 4
// 4 2
// 4 58

var array = [23, 3, 4, 8, 4, 2, 58, 9, 6, 4, 24, 6, 7, 65, 4, 5]
var target = 8;

var totalRun = 0;
for (var i = 0; i < array.length - 1; i++) {
    // console.log(array[i], "i")
    for (var j = i + 1; j < array.length; j++) {
        // console.log(array[j], "j", array[i], "i")
        if (array[i] + array[j] == target) {
            console.log(`${array[i]} + ${array[j]} = ${target}`)
        }
        // totalRun++;
    }
    // i++
}

// var name = 'irise'
// console.log(`{name} here`)
// console.log(`${name} here`)

// console.log(totalRun,"totalRun")