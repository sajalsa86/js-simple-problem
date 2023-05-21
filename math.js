//Math and Random number
//Returns the absolute value of a number(the value without regard to
// whether it is positive or negative).For example,
// the absolute value of - 5 is the same as the absolute value of 5.
let number = -5.55;
const output = Math.abs(number);
console.log(output);

//Returns the smallest integer greater than or equal to its numeric argument.
let number2 = 21.2549;
const output2 = Math.ceil(number2);
console.log(output2);

//Returns the greatest integer less than or equal to its numeric argument.
let number3 = 21.2549;
const output3 = Math.floor(number3);
console.log(output3);

//Returns a supplied numeric expression rounded to the nearest integer.
let number4 = 21.51000;
const output4 = Math.round(number4);
console.log(output4);

//Returns a pseudorandom number between 0 and 1.

// const myOutput = Math.random() * 7;
// const rounded = Math.ceil(myOutput);

// console.log(rounded);


for (let i = 0; i <= 6; i++) {
    const myOutput = Math.random() * 6;
    const rounded = Math.round(myOutput);

    console.log(rounded);

}