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

function cutFruitPieces(fruit) {
  return fruit * 4
}

function fruitProcessor(apples, oranges) {
  const applePieces = cutFruitPieces(apples)
  const orangePieces = cutFruitPieces(oranges)

  const juice = `Juice with ${applePieces} pieces of apple and ${orangePieces} pieces of orange.`
  return juice
}

console.log(fruitProcessor(2, 3))

const calcAge = function (birthYear) {
  return 2037 - birthYear
}

const yearsUntilRetirement = function (birthYear, firstName) {
  const age = calcAge(birthYear)
  const retirement = 65 - age

  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`)
    return retirement
  } else {
    console.log(`${firstName} has already retired`)
    return -1
  }
}

console.log(yearsUntilRetirement(1991, 'dmitrii'))
console.log(yearsUntilRetirement(1950, 'mike'))


const calcAverage = (a, b, c) => (a + b + c) / 3

let scoreDolphins = calcAverage(44, 23, 71)
let scoreKoalas = calcAverage(65, 54, 49)

console.log(scoreDolphins)
console.log(scoreKoalas)

function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`)
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`)
  } else {
    console.log(`no team wins...`)
  }
}
checkWinner(scoreDolphins, scoreKoalas)

scoreDolphins = calcAverage(85, 54, 41)
scoreKoalas = calcAverage(23, 34, 27)

console.log(scoreDolphins)
console.log(scoreKoalas)
checkWinner(scoreDolphins, scoreKoalas)

const friend1 = 'Michael'
const friend2 = 'Steven'
const friend3 = 'Peter'

const friends = ['Michael', 'Steven', 'Peter']
console.log(friends)

// const years = new Array(1991, 1984, 2008, 2020)

console.log(friends[0])
console.log(friends[2])

console.log(friends.length)
console.log(friends[friends.length - 1])

friends[2] = 'Jay'
console.log(friends)

const firstName = 'Jonas'
const jonas = [firstName, 'Schmedtmann', 2037 - 1991, 'teacher', friends]
console.log(jonas)
console.log(jonas.length)

// Exercise
function calcAge(birthYear) {
  return 2037 - birthYear
}
const years = [1990, 1967, 2002, 2010, 2018]

const age1 = calcAge(years[0])
const age2 = calcAge(years[1])
const age3 = calcAge(years[2])
console.log(age1, age2, age3)

const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[2])]
console.log(ages)

const friends = ['Michael', 'Steven', 'Peter']

//Add elements
const newLength = friends.push('Jay')
console.log(friends)
console.log(newLength)

friends.unshift('John')
console.log(friends)

//Remove elements
friends.pop() // last
const popped = friends.pop() // last
console.log(popped)
console.log(friends)

friends.shift()
console.log(friends)

console.log(friends.indexOf('Steven'))
console.log(friends.indexOf('Bob'))

friends.push(23)
friends.push('Peter')
console.log(friends.includes('Steven'))
console.log(friends.includes(23))

if (friends.includes('Peter')) {
  console.log('you have a friend called Peter')
}

function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill
}

const bills = [125, 555, 44]
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])]
console.log(bills, tips)

const total = []
total.push(bills[0] + tips[0])
total.push(bills[1] + tips[1])
total.push(bills[2] + tips[2])
console.log(total)


const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  age: 2037 - 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
}

console.log(jonas)

console.log(jonas.lastName)
console.log(jonas['lastName'])

const nameKey = 'Name'
console.log(jonas['first' + nameKey])
console.log(jonas['last' + nameKey])

const inerestedIn = prompt(
  'What do you want to know about Jonas? Choose between firstName, lastName, age, job, and friends'
)

if (jonas[inerestedIn]) {
  console.log(jonas[inerestedIn])
} else {
  console.log(
    'Wrong request! Choose between firstName, lastName, age, job, and friends'
  )
}

jonas.location = 'Portugal'
jonas['teitter'] = '@jonasschmedtman'
console.log(jonas)

// Challenge
// "Jonas has 3 friends, and his best friend is called Michael"
console.log(
  `${jonas.firstName} has ${jonas.friends.length} friends, and his best friend is called ${jonas.friends[0]}`
)


const jonas = {
  firstName: 'Jonas',
  lastName: 'Schmedtmann',
  birthYear: 1991,
  job: 'teacher',
  friends: ['Michael', 'Peter', 'Steven'],
  hasDriversLicense: false,

  // calcAge: function (birthYear) {
  //   return 2037 - birthYear
  // },

  // calcAge: function () {
  //   // console.log(this)
  //   return 2037 - this.birthYear
  // },

  calcAge: function () {
    this.age = 2037 - this.birthYear
    return this.age
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${
      this.job
    }, and he has ${this.hasDriversLicense ? 'a' : 'no'} driver's license`
  },
}

console.log(jonas.calcAge())

console.log(jonas.age)
console.log(jonas.age)
console.log(jonas.age)

console.log(jonas.getSummary())

const mark = {
  fullName: 'Mark Miller',
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2
    return this.bmi
  },
}
const john = {
  fullName: 'John Smith',
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2
    return this.bmi
  },
}

mark.calcBMI()
john.calcBMI()

if (john.bmi > mark.bmi) {
  console.log(
    `${john.fullName}'s BMI(${john.bmi} is higer than ${mark.fullName}'s (${mark.bmi})!)`
  )
} else if (mark.bmi > john.bmi) {
  console.log(
    `${mark.fullName}'s BMI(${mark.bmi} is higer than ${john.fullName}'s (${john.bmi})!)`
  )
}

// console.log('Lifting weghts reperirion 0 (⌐■_■)')
// console.log('Lifting weghts reperirion 1 (⌐■_■)')
// console.log('Lifting weghts reperirion 2 (⌐■_■)')
// console.log('Lifting weghts reperirion 3 (⌐■_■)')
// console.log('Lifting weghts reperirion 4 (⌐■_■)')
// console.log('Lifting weghts reperirion 5 (⌐■_■)')
// console.log('Lifting weghts reperirion 6 (⌐■_■)')
// console.log('Lifting weghts reperirion 7 (⌐■_■)')
// console.log('Lifting weghts reperirion 8 (⌐■_■)')
// console.log('Lifting weghts reperirion 9 (⌐■_■)')

// for loop keeps running while condition is TRUE
for (let rep = 0; rep < 10; rep++) {
  console.log(`Lifting weghts reperirion ${rep} (⌐■_■)`)
}

const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Steven', 'Peter'],
  true,
]

const types = []

for (let i = 0; i < jonas.length; i++) {
  // reading from jonas array
  console.log(jonas[i])

  // filling types array
  // types[i] = typeof jonas[i]
  types.push(typeof jonas[i])
}

console.log(types)

const years = [1991, 2007, 1969, 2020]
const ages = []

for (let i = 0; i < years.length; i++) {
  ages.push(2037 - years[i])
}
console.log(ages)

// continue and break
console.log('--- ONLY STRINGS ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] !== 'string') continue
  console.log(jonas[i])
}

console.log('--- BREAK WITH NUMBER ---')
for (let i = 0; i < jonas.length; i++) {
  if (typeof jonas[i] === 'number') break
  console.log(jonas[i])
}


const jonas = [
  'Jonas',
  'Schmedtmann',
  2037 - 1991,
  'teacher',
  ['Michael', 'Steven', 'Peter'],
]

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(jonas[i])
}

for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`-- Starting exercise ${exercise}`)
  for (let rep = 1; rep < 6; rep++) {
    console.log(`Exercise ${exercise}: Lifting weight repetition ${rep} ^_^`)
  }
}


for (let rep = 1; rep < 10; rep++) {
  // console.log(`Lifting weghts reperirion ${rep} (⌐■_■)`)
}

let rep = 1
while (rep <= 10) {
  // console.log(`Lifting weghts reperirion ${rep} (⌐■_■)`)
  rep++
}

let dice = Math.trunc(Math.random() * 6) + 1
// console.log(dice)

while (dice !== 6) {
  console.log(`You rolled a ${dice}`)
  dice = Math.trunc(Math.random() * 6) + 1
  if (dice === 6) console.log('Loop is about to end...')
}

*/
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
const tips = []
const totals = []
function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? 0.15 * bill : 0.2 * bill
}
for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]))
  totals.push(tips[i] + bills[i])
}

console.log(bills)
console.log(tips)
console.log(totals)

function calcAverage(arr) {
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i]
  }
  return sum / arr.length
}
let a = calcAverage(bills)
let b = calcAverage(tips)
let c = calcAverage(totals)

console.log(a, b, c, a + b - c)
