//Swap variable, swap without temp, destructing
let first = 10;
let secound = 25;
console.log(first, secound);
//first approach
// let temp = first;
// first = secound;
// secound = temp;
// console.log(first, secound);

//destructing
[first, secound] = [secound, first];
console.log(first, secound);



