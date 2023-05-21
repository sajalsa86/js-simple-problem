
//fibonacci
//[0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89]

/* 5th = 4th + 3th
6th = 5th + 4th
7th = 6th + 5th
10th = 9th + 8th
22th = 21th + 20th 
nth = (n-1) + (n-2)
ith = (i-1) + (i-2)

*/

/* let fibo = [0, 1];
for (let i = 2; i <= 12; i++) {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
}
console.log('Fibonacci: ', fibo); */

// with fanction

/* function getFibonacci(inputNum) {
    let fibo = [0, 1];
    for (let i = 2; i <= inputNum; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;
}
let inputNumber = 12;
const fibonacci = getFibonacci(inputNumber);
console.log(fibonacci); */

// Handle unexpected input using simple return
function getFibonacci(inputNum) {
    if (typeof inputNum != 'number') {
        return "Please input number ";

    }
    else if (inputNum < 2) {
        return "Please Enter a positive number grather than 1";
    }
    let fibo = [0, 1];
    for (let i = 2; i <= inputNum; i++) {
        fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    return fibo;

}

let inputNumber = -2;
const fibonacci = getFibonacci(inputNumber);
console.log(fibonacci);


