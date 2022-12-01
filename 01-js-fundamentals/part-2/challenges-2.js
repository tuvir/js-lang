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
console.log(`\nCHALLENGE 2`);
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

//CHALLENGE 3
console.log(`\nCHALLENGE 3`);
const bmiMark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.valueBMI = this.mass / this.height ** 2;
        return this.valueBMI;
    }
};
const bmiJohn = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.valueBMI = this.mass / this.height ** 2;
        return this.valueBMI;
    }
};

// Calling the method directly
console.log(bmiJohn.calcBMI(), bmiMark.calcBMI());
if(bmiJohn.calcBMI() > bmiMark.calcBMI()) {
    console.log(`${bmiJohn.fullName} BMI (${bmiJohn.calcBMI()}) is higher than ${bmiMark.fullName} (${bmiMark.calcBMI()})`);
} else {
    console.log(`${bmiMark.fullName} BMI (${bmiMark.calcBMI()}) is higher than ${bmiJohn.fullName} (${bmiJohn.calcBMI()})`);
}

// Calling the method first and then calling the property
bmiJohn.calcBMI();
bmiMark.calcBMI();
if(bmiJohn.valueBMI > bmiMark.valueBMI) {
    console.log(`${bmiJohn.fullName} BMI (${bmiJohn.valueBMI}) is higher than ${bmiMark.fullName} (${bmiMark.valueBMI})`);
} else {
    console.log(`${bmiMark.fullName} BMI (${bmiMark.valueBMI}) is higher than ${bmiJohn.fullName} (${bmiJohn.valueBMI})`);
}

//CHALLENGE 4
console.log(`\nCHALLENGE 4`);
const billsNew = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tipsNew = [];
const totalsNew = [];
for(let i = 0; i < billsNew.length; i++) {
    tipsNew.push(calcTip(billsNew[i]));
    totalsNew.push(tipsNew[i] + billsNew[i]);
}
console.log(billsNew);
console.log(tipsNew);
console.log(totalsNew);
console.log(calcAverageNew(totalsNew));

function calcAverageNew(arr) {
    let totalsSum = 0;
    for(let i = 0; i < arr.length; i++) {
        totalsSum += arr[i];
    }
    console.log(totalsSum);
    return totalsSum / arr.length;
}