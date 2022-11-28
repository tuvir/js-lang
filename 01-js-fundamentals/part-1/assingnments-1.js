// ASSINGNMENT 1
console.log('ASSINGNMENT 1');
const country = 'Japan';
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
language = 'mandarin';


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

// ASSINGNMENT 7
console.log('\n' + 'ASSINGNMENT 7');
console.log('9' - '5');
console.log('19' - '13' + '17');
console.log('19' - '13' + 17);
console.log('123' > 57);
console.log(5 + 6 + '4' + 9 - 4 - 2);


// ASSINGNMENT 8
console.log('\n' + 'ASSINGNMENT 8');
/*
const numNeighbours = Number(prompt(`How many neighbour countries does your country 
have?'`))
if(numNeighbours === 1) {
    console.log(`Only 1 border`);
} else if(numNeighbours > 1) {
    console.log(`More than 1 border`);
} else {
    console.log(`No borders`);
}
*/

// ASSINGNMENT 9
console.log('\n' + 'ASSINGNMENT 9');
if(population < 50 && isIsland === false && language === 'english') {
    console.log(`You should live here!`);
} else {
    console.log(`This country doesn't suit you!`);
}

// ASSINGNMENT 10
console.log('\n' + 'ASSINGNMENT 10');
switch(language) {
    case 'chinese':
    case 'mandarin':
        console.log(`MOST number of native speakers!`);
    break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
    break;
    case 'english':
        console.log(`3rd place`);
    break;
    case 'hindi':
        console.log(`4th place`);
    break;
    case 'arabic':
        console.log(`5th place`);
    break;
    default:
        console.log(`Great language too!`);
    break;
}