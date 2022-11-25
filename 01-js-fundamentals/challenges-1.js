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
