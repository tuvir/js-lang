'use strict';

// Primitive types
let lastName = 'Nikolaev';
const oldLastName = lastName;
lastName = 'Kulikov';
console.log(lastName, oldLastName);

const person = {
  firstName: 'Polina',
  lastName: 'Rozygraeva',
  age: 21,
};

// Reference types
const marriedPerson = person;
marriedPerson.lastName = 'Nikitina';
console.log('Before marriage: ', person);
console.log('After marriage: ', marriedPerson);

// Copying an object

/*
PRIMITIVES VS OBJECTS
let age = 19;
let oldAge = age;
age = 20;
console.log(age, oldAge);

const me = {
  firstName: 'Petr',
  age: 19,
};

const friend = me;
friend.age = 25;
console.log('Me', me, 'Friend', friend);
/*
ARROW VS REGULAR FUNCITONS
const person = {
  age: 2006,
  firstName: 'Petr',
  calcAge: function () {
    // using arrow function instead
    const generationArr = () => {
      console.log(this.age >= 2000 && this.age <= 2012);
    };
    generationArr();
    // making a 'that' or 'self' variable
    const that = this;
    const generation = function () {
      console.log(that.age >= 2000 && that.age <= 2012);
    };
    generation();
  },
  greet: () => console.log(`Hey, ${this.firstName}`),
};

person.greet();
person.calcAge();

// 'ARGUMENTS' KEYWORD
function sumNumbers(a, b) {
  console.log(arguments);
  return a + b;
}

sumNumbers(1, 2, 3, 4);
sumNumbers(10, 20);

// const sumNumbersArr = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// sumNumbersArr(1, 2);
/*

THIS KEYWORD IN DIFFERENT CALLS

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

const petr = {
  age: 2003,
};

petr.calcAge = person.calcAge;

petr.calcAge();

const f = person.calcAge;

f();
*/
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
