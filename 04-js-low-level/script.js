'use strict';

function calcAge(birthYear) {
  const age = 2023 - birthYear;
  function printAge() {
    const str = `${firstName} is ${age} years old born in ${birthYear}`;
    console.log(str);
    if (birthYear >= 2000 && birthYear <= 2012) {
      const generation = `You are a gen Z kid, ${firstName}`;
      console.log(generation);
      function sumNumbers(num1, num2) {
        return num1 + num2;
      }
    }
    // console.log(sumNumbers(1, 2)); works without strict mode
  }
  //   console.log(sumNumbers(1, 2));

  printAge();
  return age;
}

const firstName = 'Petr';
calcAge(2003);
