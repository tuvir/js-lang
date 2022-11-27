/*
let javscriptIsFun = true;
console.log (javscriptIsFun);
console.log(typeof javscriptIsFun);
console.log(typeof 23);
console.log(typeof 'Petr');
javscriptIsFun = 'yes!';
console.log(typeof javscriptIsFun);
let emptyVariable;
console.log(emptyVariable); 
*/

/*
let js = "amazing";

let firstName = 'Petr';
console.log(firstName);
console.log(firstName);
*/
/*
const currentYear = 2022;
const agePetr = currentYear - 2003;
const ageDanil = currentYear - 1995;
console.log(agePetr, ageDanil);
console.log(agePetr / 2, ageDanil * 7, 2 ** 5);

const firstName = 'Petr';
const lastName = 'Kulikov';
console.log(firstName + ' ' + lastName);

console.log(agePetr > ageDanil);
console.log(agePetr >= 17);
*/
/*
let x, y;
x = y = 25 - 15 - 1;
console.log(x, y);
*/
/*
const firstName = 'Petr';
const currentAge = 2022;
const birthAge = 2003;
const myJob = 'pastry chef'
const petr = `I'm ${firstName}, a ${currentAge - birthAge} year old ${myJob}`
console.log(petr);
*/
/*
const age = 10;
const drivingAge = 18
if (age >= drivingAge) {
    console.log(`You are old enough to get drivers licence!`)
} else {
    const yearsLeft = drivingAge - age;
    console.log(`You are too young to drive, wait ${yearsLeft} years more :)`)
}

const birthYear = 1999;
let century;
if (birthYear >= 2000) {
    century = 21;
} else {
    century = 20;
}
console.log(century);
*/
/*
const bool = false;
const str = 'string';
const num = 10;
console.log (str + bool);
console.log (num - bool);
console.log(Number(bool));
console.log (str + bool - num);
console.log (bool - num);
*/
/*
const age = 18;
if(age === 18) {
    console.log('Age is strict!');

}
if(age == 18) {
    console.log('Age is loose!');
}

const favNumber = Number(prompt(`What is your favourite number?`));
if(favNumber === 23) {
    console.log(`Cool! 23 is a cool number!`);
} else if(favNumber === 7) {
    console.log(`7 is also a cool number`);
} else {
    console.log(`You did not find it`);
}
*/
/*
let hasDriversLicence = true;
let hasGoodEyesight = false;
console.log(hasDriversLicence || hasGoodEyesight);
console.log(hasDriversLicence && hasGoodEyesight);
if (hasDriversLicence && hasGoodEyesight) {
    console.log(`Sarah can drive!`);
} else {
    console.log(`Someone else should drive`);
}
let isTired = true;
if (hasDriversLicence && hasGoodEyesight && !isTrue) {
    console.log(`Sarah can drive!`);
} else {
    console.log(`Someone else should drive`);
}
*/

const day = 'mo';
/*
switch(day) {
    case 'monday':
        console.log(`Do javascript`);
    break;
    case 'tuesday':
        console.log(`Cook a dinner`);
    break
    case 'wednesday':
        console.log(`Cook a dinner`);
    break
    case 'thursday':
        console.log(`Cook a dinner`);
    break
    case 'friday':
        console.log(`Cook a dinner`);
    break
    case 'saturday':
        console.log(`Cook a dinner`);
    break
    case 'sunday':
        console.log(`Cook a dinner`);
    break
}
*/
if(day === 'monday') {
    console.log('1');
} else if (day === 'tuesday') {
    console.log('2');
} else if (day === 'wednesday') {
    console.log('3');
} else if (day === 'thursday') {
    console.log('4');
} else if (day === 'friday') {
    console.log('5');
} else if (day === 'saturday') {
    console.log('6');
} else if (day === 'sunday') {
    console.log('7');
} else {
    console.log('Not a valid day');
}