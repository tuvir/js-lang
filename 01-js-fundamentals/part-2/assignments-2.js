'use strict'

//ASSIGNMENT 1
console.log(`ASSIGNMENT 1`);
function describeCountry(country, capitalCity, population) {
    return `${country} has ${population} million people and it's capital city is ${capitalCity}`;
}

const countryDescription = describeCountry('Japan', 'Tokyo', '98');
const countryDescription1 = describeCountry('USA', 'Washington', '320');
const countryDescription2 = describeCountry('France', 'Paris', '24');
console.log(countryDescription, countryDescription1, countryDescription2);

//ASSIGNMENT 2
console.log(`\nASSIGNMENT 2`);
function percentageOfWorld1(population) {
    return (population / 7900) * 100;
}
const percentageOfWorld2 = function(population) {
    return (population / 7900) * 100;
}

console.log(percentageOfWorld1(90), percentageOfWorld1(1441), percentageOfWorld1(117));
console.log(percentageOfWorld2(12), percentageOfWorld2(1241), percentageOfWorld2(127));

//ASSIGNMENT 3
console.log(`\nASSIGNMENT 3`);
const percentageOfWorld3 = population => (population / 7900) * 100;

console.log(percentageOfWorld3(12), percentageOfWorld3(1241), percentageOfWorld3(127));

//ASSIGNMENT 4
console.log(`\nASSIGNMENT 4`);
function describePopulation(country, population) {
    const percentageOfWorld = percentageOfWorld1(population);
    return `${country} has ${population} million people which is about ${percentageOfWorld}% of the world population!`;
}
console.log(describePopulation('Japan', 121));

//ASSIGNMENT 5
console.log(`\nASSIGNMENT 5`);
const populations = [171, 223, 12, 82];
console.log(populations.length === 4);
const percentages = [percentageOfWorld1(populations[0]), percentageOfWorld1(populations[1]), percentageOfWorld1(populations[2]), percentageOfWorld1(populations[3])];
console.log(percentages[0]);

//ASSIGNMENT 6
console.log(`\nASSIGNMENT 6`);
const country = {
    country: 'Norway',
    capital: 'Oslo',
    language: 'norway',
    population: 5,
    neighbours: ['Sweden', 'Finland', 'Russia'],
};

//ASSIGNMENT 7
console.log(`\nASSIGNMENT 7`);
console.log(`${country.country} has ${country.population} million ${country.language}-speaking, ${country.neighbours.length} neighbors and a capital called ${country.capital}`);

//ASSIGNMENT 8
console.log(`\nASSIGNMENT 8`);
country.describe = function() {
    return `${this.country} has ${this.population} million ${this.language}-speaking, ${this.neighbours.length} neighbors and a capital called ${this.capital}`;
}
console.log(country.describe());

country.checkIsIsland = function() { 
    this.isIsland = this.neighbours.length === 0 ? true : false;
    return this.isIsland;
}
console.log(country.checkIsIsland());
console.log(country);

//ASSIGNMENT 9
console.log(`\nASSIGNMENT 9`);
for(let i = 1; i <= 50; i++) {
    console.log(`Voter number ${i} is currently voting`);
}

//ASSIGNMENT 10
console.log(`\nASSIGNMENT 10`);
const percentages2 = [];
const checkIfSame = [];
for(let i = 0; i < populations.length; i++) {
    percentages2.push(percentageOfWorld1(populations[i]));
    if(percentages2[i] === percentages[i]) {
        checkIfSame.push(Boolean(1));
    }
}
console.log(percentages2);
console.log(checkIfSame);