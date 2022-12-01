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
/*
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
*/
/*
const person = {
    firstName:'Petr',
    lastName: 'Kulikov',
    age: 18,
    job: 'developer',
person.friends = ['Danil', 'Nastya', 'Alla'];

}

// Dot notation
console.log(person.firstName);

// Bracket notation
const jobKey = 'ob';
console.log(person['j' + jobKey]);

// const intestedIn = prompt('Select one topic: firstName, lastName, job, age');
// console.log(person[intestedIn]);

console.log(person);
console.log(`${person.firstName} is ${person.age} and has ${person.friends.length} friends. His best friend's name is ${person.friends[0]}`)
*/
/*
const person = {
    firstName:'Petr',
    lastName: 'Kulikov',
    birthYear: 2003,
    job: 'developer',
    friends: ['Danil', 'Nastya', 'Alla'],
    hasDriversLicence: true,
    // calcAge: function(birthYear) {
    //     return 2022 - birthYear;
    // }
    calcAge: function() {
        this.age = 2022 - this.birthYear;
        return this.age;
    },
    getSummary: function() {
        return `${this.firstName} is a ${this.calcAge()}-years old ${this.job}, and he ${this.hasDriversLicence ? 'has' : `doesn't have`} drivers licence`   
    }
};

console.log(person.calcAge());
console.log(person.age);
console.log(person.age);
console.log(person.age);
console.log(person.getSummary());
*/

for(let i = 1; i <= 10; i++ ) {
    console.log(`I got ${i} friends`);
}

const person = [
    'Petr',
    'Kulikov',
    18,
    'developer',
    true,
    [1, 2, 3],
]
const types = [];
for(let i = 0; i < person.length; i++) {
    console.log(person[i]);
    types[i] = typeof person[i];
}
console.log(types);

const years = [2003, 1981, 1999, 2012];
const ages = [];

for(let i = 0; i < years.length; i++) {
    ages.push(2022 - years[i]);
}