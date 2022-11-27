//CHALLENGE 1
console.log(`CHALLENGE 1 \n`);
const heightMark = 1.69;
const weightMark = 78;
const heightJohn = 1.95;
const weightJohn = 92;
const BMIMark = weightMark / (heightMark ** 2);
const BMIJohn = weightJohn / (heightJohn ** 2);

const markHigherBMI = BMIMark > BMIJohn;

// CHALLENGE 2
console.log(`CHALLENGE 2 \n`);
if (markHigherBMI) {
    console.log(`Mark's BMI (${BMIMark}) is higher than John's! (${BMIJohn})`);
} else {
    console.log(`John's BMI (${BMIJohn}) is higher than Mark's! (${BMIMark})`);
}

// CHALLENGE 3
console.log(`CHALLENGE 3 \n`);
const coalasScore = (88 + 91 + 110) / 3;
const dolphinsScore = (96 + 108 + 89) / 3;
console.log(dolphinsScore, coalasScore);
if((coalasScore === dolphinsScore) && (dolphinsScore >= 100) && 
(coalasScore >= 100)) {
    console.log(`It's a draw!`);
} else if((coalasScore > dolphinsScore) && (coalasScore >= 100)) {
    console.log(`Coalas won!`);
} else if((dolphinsScore > coalasScore) && (dolphinsScore >= 100)) {
    console.log(`Dolphins won!`);
} else {
    console.log(`No one won!`);
}