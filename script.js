/*
true
let javascriptIsFun = true
console.log(javascriptIsFun)

console.log(typeof true)
console.log(typeof 'str')
console.log(typeof 31)

let year
console.log(year)
console.log(typeof year)

year = 1991
console.log(year)
console.log(typeof year)

console.log(null)
let age = 30
age = 31

const birhYear = 1991
// birhYear = 1990
// const job;

var job = 'programmer'
job = 'teacher'

lastName = 'Schmedtmann'
console.log(lastName)

const now = 2037
const ageJonas = now - 1991
const ageSarah = now - 2018
console.log(ageJonas, ageSarah)

console.log(ageJonas * 2, ageJonas / 10, 2 ** 4)
//  2 ** 4 means 2 to the power of 4 = 2 * 2 * 2 * 2

const firstName = 'Jonas'
const lastName = 'Schmedtmann'
console.log(firstName + ' ' + lastName)

// Assignment operators
let x = 10 + 5
x += 10 // x = x + 10
x *= 4 // x = x * 4
x++
x--
x--
console.log(x)

// Comparison operators
console.log(ageJonas > ageSarah) // >, <, >=, >=
console.log(ageSarah >= 18)

const isFullAge = ageSarah >= 18

console.log(now - 1991 > now - 2018)

const now = 2037
const ageJonas = now - 1991
const ageSarah = now - 2018

console.log(now - 1991 > now - 2018)

let x, y
x = y = 25 - 10 - 5
console.log(x, y)

const averageAge = ageJonas + ageSarah / 2
console.log(ageJonas, ageSarah, averageAge)
*/

/*
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is 
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg 
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both 
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about 
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 
m tall.
GOOD LUCK �

let massM = 78
let heightM = 1.69

let massJ = 92
let heightJ = 1.95

let marksBMI = massM / heightM ** 2
let johnBMI = massJ / (heightJ * heightJ)
let markHigherBMI = marksBMI > johnBMI
console.log(marksBMI, johnBMI, markHigherBMI)


const firstName = 'Dmitry'
const job = 'programmer'
const birthDay = 1991
const year = 2037

const dmitry =
  "I'm " + firstName + ', a ' + (year - birthDay) + ' years old ' + job + '!'
console.log(dmitry)
const dmitryNew = `I'm ${firstName}, a ${year - birthDay}  years old ${job}!`
console.log(dmitryNew)
console.log(`Just a regular string...`)
console.log('String with \n\
multiple \n\
lines')

console.log(`String 
multiple
lines`)


const age = 15
const isOldEnough = age >= 18

if (isOldEnough) {
  console.log('Sarah can start driving license(⌐■_■)')
} else {
  const yearsLeft = 18 - age
  console.log(`ups Sarah is to young (⌐■_■). Wait another ${yearsLeft} years`)
}

const birhYear = 1991
let centure
if (birhYear <= 2000) {
  centure = 20
} else {
  centure = 21
}

console.log(centure)

Coding Challenge #2
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement �
GOOD LUCK � 



let massM = 78
let heightM = 1.69

let massJ = 92
let heightJ = 1.95

let marksBMI = massM / heightM ** 2
let johnBMI = massJ / (heightJ * heightJ)

if (marksBMI > johnBMI) {
  console.log(`Mark's BMI (${marksBMI}) is higher than John's!`)
} else {
  console.log(`John's BMI (${johnBMI}) is higher than Mark's!`)
}

*/

// type conversion
const inputYear = '1991'
console.log(Number(inputYear), inputYear)
console.log(inputYear + 18)

console.log(Number('Jonas '))
console.log(typeof NaN)
console.log(String(23), 23)

// type coercion
console.log('I am ' + 23 + ' years old')
console.log('23' - '10')
console.log('23' * '2')
console.log('23' / '2')

let n = '1' + 1
n = n - 1
console.log(n) //10