// Remember, we're gonna use strict mode in all scripts now!
'use strict';
/*
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [6, 7, 8, 9, 10];
const arr3 = arr1.concat(arr1);
console.log(arr3);
*/

function convertKelvin() {
  const measurement = {
    type: 'temp',
    unit: 'celcius',
    // value: Number(prompt('Degrees celsius:')),
    value: 10,
  };
  const kelvinToCelsius = measurement.value + 273;
  return kelvinToCelsius;
}
// 1) IDENTIFY THE BUG
console.log(convertKelvin());

function calcAmplitude(arr1, arr2) {
  const temps = arr1.concat(arr2);
  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const currentValue = temps[i];
    if (currentValue > max) max = currentValue;
    if (currentValue < min) min = currentValue;
  }
  return max - min;
}
