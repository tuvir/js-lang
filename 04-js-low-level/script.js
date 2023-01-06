'use strict';
console.log(this);

function calcAge(birthYear) {
  console.log(2023 - birthYear);
  console.log(this);
}
calcAge(2003);

const calcAgeArr = (birthYear) => {
  console.log(2023 - birthYear);
  console.log(this);
};
calcAgeArr(2012);

const person = {
  age: 2006,
  calcAge: function () {
    console.log(2023 - this.age);
  },
};

person.calcAge();
/*

HOISTING AND TDZ PRACTICE

console.log(firstName);
// console.log(x);
// console.log(job);
// console.log(age);

var firstName = 'Petr';
let job = 'Developer';
const age = '18';

console.log(addDec(2, 3));
function addDec(a, b) {
  return a + b;
}

// console.log(addExp);
// var addExp = function (a, b) {
//   return a + b;
// };

// console.log(addArr(2, 3));
// const addArr = (a, b) => a + b;

// ! Bad hoisting example

if (!productCount) deleteProducts();

var productCount = 10;

function deleteProducts() {
  console.log('Products deleted!');
}
*/

/*

SCOPING IN PRACTICE

function calcAge(birthYear) {
  const age = 2023 - birthYear;
  //   const firstName = 'Petr2';
  function printAge() {
    // const firstName = 'Petr3';
    let str = `${firstName} is ${age} years old born in ${birthYear}`;
    console.log(str);
    if (birthYear >= 2000 && birthYear <= 2012) {
      //   const firstName = 'Petr4';
      const generation = `You are a gen Z kid, ${firstName}`;
      console.log(generation);
      function sumNumbers(num1, num2) {
        return num1 + num2;
      }
      //   str = `New str is here!`;
    }
    // console.log(str);

    // console.log(sumNumbers(1, 2)); works without strict mode
  }
  //   console.log(sumNumbers(1, 2));

  printAge();
  return age;
}

const firstName = 'Petr';
calcAge(2003);
*/
