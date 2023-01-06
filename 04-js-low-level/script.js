'use strict';

function calcAge(birthYear) {
  const age = 2023 - birthYear;
  function printAge() {
    const str = `${firstName} is ${age} years old born in ${birthYear}`;
    console.log(str);
  }
  printAge();
  return age;
}

const firstName = 'Petr';
calcAge(2003);
