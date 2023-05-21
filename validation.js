function add(num1, num2) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        return 'Please Enter a number';
    }

    return num1 + num2;

}
const result = add('12', 45);
console.log(result);

function multiply(name1, name2) {
    if (typeof name1 !== 'string' || typeof name2 !== 'string') {
        return 'Please Enter a name';
    }
    return name1 + name2;
}

const output = multiply('Sajal +', ' Akashi');
console.log(output);