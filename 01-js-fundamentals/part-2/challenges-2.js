'use strict'
//CHALLENGE 1
console.log(`CHALLENGE 1`);

const calcAverage = (score1, score2, score3) => (score1 + score2 + score3) / 3;

function checkWinner(averageDolphins, averageKoalas) {
    if (averageKoalas >= (averageDolphins * 2)) {
        return `Koalas win (${averageKoalas} to ${averageDolphins})`
    } else if (averageDolphins >= (averageKoalas * 2)) {
        return `Dolphins win (${averageDolphins} to ${averageKoalas})`
    } else {
        return `No one won!`
    }
}

const averageDolphins = calcAverage(85, 54, 41);
const averageKoalas = calcAverage(23, 34, 27);
const winner = checkWinner(averageDolphins, averageKoalas);
console.log(winner);
console.log(averageDolphins, averageKoalas);

//CHALLENGE 2
console.log(`CHALLENGE 2`);
function calcTip(billValue) {
    if(billValue >= 50 && billValue <= 300) {
       return billValue * 0.15; 
    } else {
        return billValue * 0.2;
    }
}
const bills = [125, 555, 44];
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
const total = [(bills[0] + tips[0]), (bills[1] + tips[1]), (bills[2] + tips[2])]
console.log(tips, total);