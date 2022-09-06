// Remember ue strict mode in all scripts now!
'use strinct'
/*
// PROBLEM 1 "Given an array of temperatures of one day, calculate the temperature amplotude. Keep in min that sometimes there might be a sensor error
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5]

// 1) Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temp?
// - What's a sensor error? and what do do?

// 2) Braking up into sub-problems
// - How to ignore errors?
// - Find max valuer in temp array
// - Find min valuer in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  let max = temps[0]
  let min = temps[0]
  for (let i = 1; i < temps.length; i++) {
    const curTemp = temps[i]
    if (typeof curTemp !== 'number') continue
    if (curTemp > max) max = curTemp
    if (curTemp < min) min = curTemp
  }
  console.log(max, min)
  return max - min
}
const amplitude = calcTempAmplitude(temperatures)
console.log(amplitude)

// PROBPEM 2:
// Function should now receive 2 arrays of temps
// 1) Understanding the problem
// - With 2 arrays, should we implements functionality twice? NO! Just merge two arrays

// 2) Braking up into sub-problems
// - Merge 2 arrays?

const calsTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2)
  console.log(temps)

  let max = temps[0]
  let min = temps[0]
  for (let i = 1; i < temps.length; i++) {
    const curTemp = temps[i]
    if (typeof curTemp !== 'number') continue
    if (curTemp > max) max = curTemp
    if (curTemp < min) min = curTemp
  }
  console.log(max, min)
  return max - min
}
const amplitudeNew = calsTempAmplitudeNew([3, 5, 1], [9, 0, 5])
console.log(amplitudeNew)


const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'cels',

    // C) FIX
    // value: Number(prompt('Degrees celsius:'))
    value: 10,
  }

  // B) FIND
  // console.table(measurement)
  // console.log(measurement.value)
  // console.warn(measurement.value)
  // console.error(measurement.value)

  // const kelvin = Number(measurement.value) + 273
  const kelvin = measurement.value + 273
  return kelvin
}
// A) IDENTIFY
console.log(measureKelvin())

// Using a debugger
const calsTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2)
  console.log(temps)

  let max = 0
  let min = 0
  for (let i = 1; i < temps.length; i++) {
    const curTemp = temps[i]
    if (typeof curTemp !== 'number') continue
    if (curTemp > max) max = curTemp
    if (curTemp < min) min = curTemp
  }
  console.log(max, min)
  return max - min
}
const amplitudeNew = calsTempAmplitudeBug([3, 5, 1], [9, 0, 5])

// A) IDENTIFY
console.log(amplitudeNew)

*/

function printForecasat(arr) {
  let temp = '...'
  for (let i = 0; i < arr.length; i++) {
    temp += ` ${arr[i]}℃ in ${i + 1} days ...`
  }
  console.log(temp)
}
const date1 = [17, 21, 23]
const date2 = [12, 5, -5, 0, 4]

printForecasat(date1)
printForecasat(date2)
