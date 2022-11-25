// ASSINGNMENT 1
console.log('ASSINGNMENT 1');
const country = 'Russia';
const continent = 'Eurasia';
let population = 117;

console.log(country)
console.log(continent)
console.log(population)

// ASSINGNMENT 2
console.log('\n' + 'ASSINGNMENT 2');
let isIsland = false;
let language;
console.log(typeof isIsland);
console.log(typeof population);
console.log(typeof country);
console.log(typeof language);

// ASSINGNMENT 3
console.log('\n' + 'ASSINGNMENT 3');
language = 'russian';


// ASSINGNMENT 4
console.log('\n' + 'ASSINGNMENT 4');
const halfPopulation = population / 2;
const populationIncrease = population + 1;
console.log(halfPopulation);
console.log(populationIncrease);
let populationFinland = 60;
const populationAverage = 33;
console.log(population > populationFinland);
console.log(population > populationAverage);
console.log(country + ' is in ' + continent + ', and its ' + population + ' million people speak ' + language);

// ASSINGNMENT 5
console.log('\n' + 'ASSINGNMENT 5');
const countryDescription = `${country} is in ${continent} and it's ${population} million people speak ${language}`
console.log(countryDescription);

// ASSINGNMENT 6
console.log('\n' + 'ASSINGNMENT 6');
if (population > populationAverage) {
    console.log(`${country}'s population is above average`);
} else {
    console.log(`${country}'s population is ${populationAverage - population} million below average`)
}

