'use strict'

//ASSINGNMENT 1
console.log(`ASSIGNMENT 1`);
function describeCountry(country, capitalCity, population) {
    return `${country} has ${population} million people and it's capital city is ${capitalCity}`;
}

const countryDescription = describeCountry('Japan', 'Tokyo', '98');
const countryDescription1 = describeCountry('USA', 'Washington', '320');
const countryDescription2 = describeCountry('France', 'Paris', '24');
console.log(countryDescription, countryDescription1, countryDescription2);

//ASSINGNMENT 2
console.log(`\nASSIGNMENT 2`);
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}
const percentageOfWorld2 = function(population) {
    return (population / 7900) * 100;
}

console.log(percentageOfWorld1(90), percentageOfWorld1(1441), percentageOfWorld1(117));
console.log(percentageOfWorld2(12), percentageOfWorld2(1241), percentageOfWorld2(127));

//ASSINGNMENT 3
console.log(`\nASSIGNMENT 3`);
const percentageOfWorld3 = population => (population / 7900) * 100;

console.log(percentageOfWorld3(12), percentageOfWorld3(1241), percentageOfWorld3(127));

//ASSINGNMENT 4
console.log(`\nASSIGNMENT 4`);
function describePopulation(country, population) {
    const percentageOfWorld = percentageOfWorld1(population);
    return `${country} has ${population} million people which is about ${percentageOfWorld}% of the world population!`;
}
console.log(describePopulation('Japan', 121));

//ASSINGNMENT 5
console.log(`\nASSIGNMENT 5`);
const populations = [171, 223, 12, 82];
console.log(populations.length === 4);
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages[0]);

