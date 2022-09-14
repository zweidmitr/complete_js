'use strict'

// Data needed for a later exercise
// const flights =
//   '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

/*
// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
}

const arr = [2, 3, 4]
const a = arr[0]
const b = arr[1]
const c = arr[2]

const [x, y, z] = arr
console.log(x, y, z)
console.log(arr)

const [main, , secondary] = restaurant.categories

console.log(main, secondary)

// Switching variables
// const temp = main
// main = secondary
// secondary = temp
// console.log(main, secondary)
// ;[main, secondary] = [secondary, main]
// console.log(main, secondary)

// Receive 2 return values from a function
let [starter, mainCourse] = restaurant.order(2, 0)
console.log(starter, mainCourse)

// Nested destructuring
const nested = [2, 4, [5, 6]]
// const [i, , j] = nested
const [i, , [j, k]] = nested
console.log(i, j, k)

// Default values
const [p = 1, q = 1, r = 1] = [8, 9]
console.log(p, q, r)
*/

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
const openingHours = {
  [weekdays[3]]: { open: 12, close: 22 },
  [weekdays[4]]: { open: 11, close: 23 },
  [weekdays[5]]: { open: 0, close: 24 },
}

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // ES6 enchanced object literals
  openingHours,

  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },

  orderDelivery({ starterIndex = 1, mainIndex = 0, time = '20:00', address }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    )
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious paste eith ${ing1},${ing2} and ${ing3}`
    )
  },
  orderPizza(mainIngredient, ...otherIngredients) {
    console.log(mainIngredient)
    console.log(otherIngredients)
  },
}

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
])

// 1.
const events = [...new Set(gameEvents.values())]
console.log(events)

// 2.
gameEvents.delete(64)

// 3.
console.log(
  `An event happened, on average, every ${90 / gameEvents.size} minutes`
)
const time = [...gameEvents.keys()].pop()
console.log(time)
console.log(
  `An event happened, on average, every ${time / gameEvents.size} minutes`
)

// 4.
for (const [key, value] of gameEvents) {
  const half = key <= 45 ? 'FIRST' : 'SECOND'
  console.log(`[${half} HALF] ${key} : ${value}`)
}

/*
const question = new Map([
  ['question', 'what is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🧡'],
  [false, 'try again'],
])

// console.log(question)

// Convert object to map
// console.log(Object.entries(openingHours))
const hoursMap = new Map(Object.entries(openingHours))
// console.log(hoursMap)

// Quiz app
console.log(question.get('question'))
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`this is map: ${key} : ${value}`)
}
// const answer = Number(prompt('Your answer'))
const answer = 3

console.log(question.get(answer === question.get('correct')))

// Convert map to array
console.log([...question])
// console.log(question.entries)
console.log([...question.keys()])
console.log([...question.values()])


////////////////////////////////////////////////////
// Maps: Fundamentals
const rest = new Map()
rest.set('name', 'Classico Italiano')
rest.set(1, 'Firenze, Italy')
console.log(rest.set(2, 'Lisbon, Portugal'))
rest
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(')

console.log(rest.get('name'))
console.log(rest.get(true))
console.log(rest.get(1))

const time = 10
console.log(rest.get(time > rest.get('open') && time < rest.get('close')))

console.log(rest.has('categories'))
rest.delete(2)
console.log(rest.size)
// rest.clear()

const arr = [1, 2]
rest.set(arr, 'Test')
rest.set(document.querySelector('h1'), 'Heading')
console.log(rest)

console.log(rest.get(arr))


// Sets
const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Rizotto',
  'Pasta',
  'Pizza',
])
console.log(ordersSet)

console.log(new Set('Jonas'))
console.log(ordersSet.size)
console.log(ordersSet.has('Pizza'))
console.log(ordersSet.has('Bread'))
ordersSet.add('Garlic Bread')
ordersSet.add('Garlic Bread')
ordersSet.delete('Rizotto')
// ordersSet.clear()
console.log(ordersSet)

for (const order of ordersSet) console.log(order)

// Example
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']
const staffUnique = [...new Set(staff)]
console.log(staffUnique)

console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
)

console.log(new Set('jonasschmedtmann').size)


// propery NAMES
const properties = Object.keys(openingHours)
// console.log(properties)

let openStr = `We are open on ${properties.length} days: `

for (const day of properties) {
  openStr += `${day} `
}
// console.log(openStr)

// property VALUES
const values = Object.values(openingHours)
// console.log(values)

// Entire object
const entries = Object.entries(openingHours)
// console.log(entries)

// [key, value]
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`)
}

if (restaurant.openingHours && restaurant.openingHours.mon)
  console.log(restaurant.openingHours.mon.open)

// console.log(restaurant.openingHours.mon.open)

// WIRH optional chaining
console.log(restaurant.openingHours.mon?.open)
console.log(restaurant.openingHours?.mon?.open)

// Example
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun']
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed'
  console.log(`On ${day}, we open at ${open}`)
}

// Methods
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist')
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist')

// Arrays
const users = [{ name: 'Jonas', email: 'hello@Jonas.io' }]
const usersTest = []
console.log(usersTest[0]?.name ?? 'User array empty')

if (usersTest.length > 0) console.log(usersTest[0]?.name)
else console.log('user array is empty')


restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del Sole, 21',
  mainIndex: 2,
  starterIndex: 2,
})

restaurant.orderDelivery({
  address: 'Via del Sole, 21',
  starterIndex: 1,
})

const { name, openingHours, categories } = restaurant
console.log(name, openingHours, categories)
console.log('----------------------------------')

const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant

console.log(restaurantName, hours, tags)
console.log('----------------------------------')

// Default values
const { menu = [], starterMenu: starters = [] } = restaurant
console.log(menu, starters)

// Mutating variables
let a = 111
let b = 999
const obj = { a: 15, d: 7, b: 9 }
;({ a, b } = obj)
console.log(a, b)

// nested objects
const {
  fri: { open, close },
} = openingHours
console.log(open, close)

const arr = [7, 8, 9]
const badNewArr = [1, 2, arr[0], arr[1], arr[2]]
console.log(badNewArr)

const newArr = [1, 2, ...arr, 10]
console.log(newArr)

console.log(...newArr)
console.log(1, 2, 7, 8, 9, 10)

const newMenu = [...restaurant.mainMenu, 'Gnocci']
console.log(newMenu)

// Copy array
const mainMenuCopy = [...restaurant.mainMenu]
console.log(mainMenuCopy)

// join two arrays
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]
console.log(menu)

// Iterables: arrays, strings, maps, sets, NOT objects
const str = 'Jonas'
const letters = [...str, ' ', 'S.']
console.log(letters)

console.log(...str)
// console.log(`${...str} Schmedtmann`)

const ingredients = [
  // prompt("Let's make pasta! Ingredoemts 1?"),
  // prompt("Let's make pasta! Ingredoemts 2?"),
  // prompt("Let's make pasta! Ingredoemts 3?"),
]
console.log(ingredients)

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2])
restaurant.orderPasta(...ingredients)

// Objects
const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Duiseppe' }
console.log(newRestaurant)

const restaurantCopy = { ...restaurant }
restaurantCopy.name = 'Risorante Roma'
console.log(restaurantCopy.name)
console.log(restaurant.name)

// SPREAD, beacause on RIGHT side of =
const arr = [1, 2, ...[3, 4]]
console.log(arr)

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5]
console.log(a, b, others)

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
]
console.log(pizza, risotto, otherFood)

// Objects
const { sat, ...weekdays } = restaurant.openingHours
console.log(sat, weekdays)

// 2) Functions
const add = function (...numbers) {
  let sum = 0
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
  }
  console.log(sum)
}
add(2, 3)
add(5, 3, 7, 2)
add(8, 2, 5, 3, 2, 1, 4)

const x = [23, 5, 7]
console.log(...x)
add(...x)

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach')
restaurant.orderPizza('mushrooms')


console.log('---- OR ----')
// use ANY date type, return ANY data type, short-circuiting
console.log(3 || 'jonas') // 3
console.log('' || 'jonas') // 'jonas'
console.log(true || 0) // true
console.log(undefined || null) // null

console.log(undefined || 0 || '' || 'hello' || 23 || null) // 'hello'

restaurant.numGuests = 0
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10
console.log(guests1)

const guests2 = restaurant.numGuests || 10
console.log(guests2)

console.log('---- AND ----')
console.log(0 && 'jonas')
console.log(7 && 'jonas' && 55)

console.log('Hello' && 23 && 0 && null && 'jonas')

// example
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach')
}

restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach', 'peper')

restaurant.numGuest = 0
const guests = restaurant.numGuest || 10
console.log(guests)

// NullishL bykk abd ybdefubed (NOR 0 or '')
const guestCorrect = restaurant.numGuest ?? 10
console.log(guestCorrect)


const rest1 = {
  name: 'Capri',
  // numGuest: 20,
  numGuest: 0,
}

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
}

// OR assignment operator
// rest1.numGuest = rest1.numGuest || 10
// rest2.numGuest = rest2.numGuest || 10
// rest1.numGuest ||= 10
// rest2.numGuest ||= 10

// nullish assignment operator (null or undefined)
rest1.numGuest ??= 10
rest2.numGuest ??= 10

// AND assignment operator
// rest1.owner = rest1.owner && '<ANONYMOUS>'
// rest2.owner = rest2.owner && '<ANONYMOUS>'
rest1.owner &&= '<ANONYMOUS>'
rest2.owner &&= '<ANONYMOUS>'

console.log(rest1)
console.log(rest2)

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
}

// 1.
for (const [index, players] of game.scored.entries())
  console.log(`Goal ${index + 1} : ${players}`)

// 2.
const odds = Object.values(game.odds)
let average = 0
for (const odd of odds) average += odd

average /= odds.length
console.log(Math.trunc(average))

// 3.
for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`
  console.log(`Odd of ${teamStr} ${odd}`)
}


// 1.
const [players1, players2] = game.players
console.log(players1, players2)

// 2.
const [gk, ...fieldPlayers] = players1
console.log(gk, fieldPlayers)

// 3.
const allPlayers = [...players1, ...players2]
console.log(allPlayers)

// 4.
const players1Final = [...players1, 'Tiago', 'Coutinho', 'Perscic']
console.log(players1Final)

// 5.
const {
  odds: { team1, x: draw, team2 },
} = game
console.log(team1, draw, team2)

// 6.
const printGoals = function (...players) {
  console.log(players)
  console.log(`${players.length} goals were scored`)
}
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich')
// printGoals('Davies', 'Muller')
console.log(...game.scored)

// 7.
team1 < team2 && console.log('Team 1 is more likely to win')
team1 > team2 && console.log('Team 2 is more likely to win')


const menu = [...restaurant.starterMenu, ...restaurant.mainMenu]

for (const item of menu) console.log(item)

for (const [i, el] of menu.entries()) {
  console.log(`${i + 1} : ${el}`)
}

// console.log([...menu.entries()])
*/
