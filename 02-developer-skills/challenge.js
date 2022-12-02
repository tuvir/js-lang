// CHALLENGE 1
console.log(`CHALLENGE 1`);
const forecastTemp = [12, 5, -5, 0, 4];
function printForecast(arr) {
  let forecastString = '';
  for (let i = 0; i < arr.length; i++) {
    forecastString += `${arr[i]}C in ${i + 1} days...`;
  }
  return forecastString;
}
console.log(printForecast(forecastTemp));
// 1) SInce we work with array the for loop is probably needed
// 2) Make a funtion take an array; Make the for loop to go through array; Make a template literal tha we will be logging.
// 3)
