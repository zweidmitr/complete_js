'use strict'
/*
let hasDriversLicense = false
const passTest = true

if (passTest) hasDriversLicense = true
if (hasDriversLicense) console.log('I can drive')

// const interface = 'Audio'
// const private 534

function logger() {
  console.log('My name Dmitrii')
}
// calling / running / invoking function
logger()
// logger()
// logger()

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`
  return juice
}

let appleJuice = fruitProcessor(5, 0)
console.log(appleJuice)

const appleOrangeJuice = fruitProcessor(2, 4)
console.log(appleOrangeJuice)


//function declaration
function calcAge1(birthYear) {
  return 2037 - birthYear
}
const age1 = calcAge1(1991)

// function expression
const calcAge2 = function (birthYear) {
  return 2037 - birthYear
}
const age2 = calcAge2(1991)

console.log(age1, age2)
*/

// arrow function
const calcAge3 = (birthYear) => 2037 - birthYear
console.log(calcAge3(1991))

const yearsUntilRetirement = (birthYear, firstName) => {
  const age = 2022 - birthYear
  const retirement = 65 - age
  // return retirement
  return `${firstName} retires in ${retirement} years`
}

console.log(yearsUntilRetirement(1991, 'd'))
console.log(yearsUntilRetirement(2003, 'v'))
