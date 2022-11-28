'use strict';
/*
function juicerMachine(fruit1, fruit2) {
    const juice = `Fresh juice made of ${fruit1} and ${fruit2}`;
    return juice; 
}

const functionCall = juicerMachine(2, 1);
console.log(functionCall);
*/
/*
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
*/
/*
function yearsUntilRetirement(birthYear, firstName) {
    const ageCurrent = calcAge(birthYear);
    const ageRetirement = 65 - ageCurrent;
    const yearOfRetirement = birthYear + 65;
    if(ageRetirement > 0) {
        return `${firstName} will retire in ${ageRetirement} years in year ${yearOfRetirement}`
    } else {
        return `${firstName}`
    }
}

console.log(yearsUntilRetirement(2003, 'Petr'));
console.log(yearsUntilRetirement(1981, 'Olga'));


function calcAge(birthYear) {
    return 2022 - birthYear;
}
*/

const friends = ['Danil', 'Nastya', 'Anton'];
// Add elements
const newLength = friends.push('Kristina');
console.log(friends, newLength);
const arrayStart = friends.unshift('Alla');
console.log(friends, arrayStart);

// Remove elements
const popped = friends.pop();
console.log(friends);
const shifted = friends.shift();
console.log(friends);

// Check elements
console.log(friends.includes('Danil'));
