'use strict'
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear

  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`
    console.log(output)

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true
      // create new variable with same name as outher scope's variable
      const firstName = 'Steven'
      // reassigning outer sxope's variable
      output = 'NEW OUTPUT!'

      const str = `Oh, and you're a millenial, ${firstName}`
      console.log(str)

      function add(a, b) {
        return a + b
      }
    }
    // console.log(str)
    console.log(millenial)
    // console.log(add(2, 3))
    console.log(output)
  }
  printAge()

  return age
}

const firstName = 'Jonas'
calcAge(1991)
// console.log(age)
// printAge()


// Variables
// console.log(me)
// console.log(year)
// console.log(job)

var me = 'Jonas'
let job = 'teacher'
const year = 1991

// Function
// console.log(addDecl(2, 3))
// console.log(addExpr(5, 5))
// console.log(addArrow)
// console.log(addArrow(5, 5))

function addDecl(a, b) {
  return a + b
}

const addExpr = function (a, b) {
  return a + b
}

var addArrow = (a, b) => a + b

// Example

console.log(!numProducts)
if (!numProducts) deleteShoppingCart()

var numProducts = 10

function deleteShoppingCart() {
  console.log('All products deleted!')
}

var x = 1
let y = 2
const z = 3

console.log(x === window.x)
console.log(y === window.y)
console.log(z === window.xz)


console.log(this)

const calcAge = function (birthYear) {
  console.log(2037 - birthYear)
  console.log(this)
}
calcAge(1991)

function calc(birthYear) {
  console.log(2037 - birthYear)
  console.log(this)
}
calc(2000)

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear)
  console.log(this)
}
calcAgeArrow(1980)

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this)
    console.log(2037 - this.year)
  },
}

jonas.calcAge()

const matilda = {
  year: 2017,
}

matilda.calcAge = jonas.calcAge

// console.log(matilda)
matilda.calcAge()

const f = jonas.calcAge

f(2000)


// var firstName = 'Matilda'

const jonas = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this)
    console.log(2037 - this.year)

    // Solution 1
    // const self = this // self or that
    // const isMillenial = function () {
    //   console.log(self)
    //   console.log(self.year >= 1981 && self.year <= 1996)
    // }
    // isMillenial()

    // Solution 2
    const isMillenial = () => {
      console.log(this)
      console.log(this.year >= 1981 && this.year <= 1996)
    }
    isMillenial()
  },
  greet: function () {
    console.log(this)
    console.log(`Hey ${this.firstName}`)
  },
}

jonas.greet()
jonas.calcAge()


// Arguments keyword
const addExpr = function (a, b) {
  console.log(arguments)
  return a + b
}

addExpr(2, 5)
addExpr(2, 5, 8, 12)

var addArrow = (a, b) => {
  console.log(arguments)
  return a + b
}
addArrow(2, 5, 8)

*/
