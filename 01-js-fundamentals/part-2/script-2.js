'use strict';
/*
function juicerMachine(fruit1, fruit2) {
    const juice = `Fresh juice made of ${fruit1} and ${fruit2}`;
    return juice; 
}

const functionCall = juicerMachine(2, 1);
console.log(functionCall);
*/

// Function declaration
function calcAge1 (birthAge) {
    return 2022 - birthAge;
}
const age1 = calcAge1(2003);
//Function expression
const calcAge2 = function (birthAge) {
    return 2022 - birthAge;
}
const age2 = calcAge2(2003);
// Arrow function
const calcAge3 = birthAge => 2022 - birthAge;
const age3 = calcAge3(2002);

console.log(age1, age2, age3);

