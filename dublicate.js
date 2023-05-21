//Remove duplicate items from an array

const myFamilyNames = ['Sajal', 'Akashi', 'Shihab', 'Suchi', 'Sajal', 'Chumki', 'Akashi', 'Redone', 'Sajal', 'Chumki', 'Safaet', 'Suchi', 'Akashi', 'Sajid', 'Safone', 'Samiha'];

/* function removeDublicate(names) {
    let unique = [];
    for (let i = 0; i < names.length; i++) {
        const element = names[i];
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}

const uniqueNames = removeDublicate(myFamilyNames);
console.log(uniqueNames); */

function removeDublicate(names) {
    let unique = [];
    for (const element of names) {
        if (unique.indexOf(element) == -1) {
            unique.push(element);
        }
    }
    return unique;
}

const uniqueNames = removeDublicate(myFamilyNames);
console.log(uniqueNames);

const userNumber = [10, 20, 10, 20, 30, 30, 40, 50, 60, 50, 100, 70, 80, 70, 90, 100];

function removeDublicateNum(numbers) {
    let uniqueNum = [];
    for (const numElement of numbers) {
        if (uniqueNum.indexOf(numElement) == -1)
            uniqueNum.push(numElement);
    }
    return uniqueNum;
}

const uniqueNumbers = removeDublicateNum(userNumber);
console.log(uniqueNumbers);