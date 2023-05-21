//Sum of all numbers in an array

const arrayNumber = [22, 32, 38, 45, 48, 55, 58, 65, 70];
let sum = 0;
for (let i = 0; i < arrayNumber.length; i++) {
    const element = arrayNumber[i];
    sum = sum + element;

}
console.log(sum);


function getSum(arrayValue) {
    let addition = 0;
    for (let i = 0; i < arrayValue.length; i++) {
        const totalElement = arrayValue[i];
        addition = addition + totalElement;
    }
    return addition;
}

const myArray = [32, 38, 45, 50, 55, 63, 87, 95, 99];
const resultSum = getSum(myArray);
console.log("it's my result: ", resultSum);
