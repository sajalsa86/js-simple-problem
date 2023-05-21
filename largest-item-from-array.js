
//Find the largest element of an array

function getLargestItem(fromArray) {
    let lergestItem = fromArray[0];
    for (let i = 0; i < fromArray.length; i++) {
        const element = fromArray[i];
        if (element > lergestItem) {
            lergestItem = element;
        }
    }
    return lergestItem;
}

const number = [24, 30, 15, 35, 95, 80, 45, 70];
const viewLargestItem = getLargestItem(number);
console.log('Largest: ', viewLargestItem);
// ////////////////////////////////////////////////
const number2 = [-27, -32, -16, -36, -97, -80, -46, -71];
const viewLargestItem2 = getLargestItem(number2);
console.log('Largest: ', viewLargestItem2);

//find the lowest element of an array

function findLowestElement(ofAnArray) {
    let lowestElement = ofAnArray[0]; //for - vlaue
    for (let i = 0; i < ofAnArray.length; i++) {
        const findElement = ofAnArray[i];
        if (findElement < lowestElement) {
            lowestElement = findElement;
        }
    }
    return lowestElement;
}

const arrayNumber = [24, 30, 15, 35, 95, 80, 45, 70];
const viewLowestElement = findLowestElement(arrayNumber);
console.log('Lowest :', viewLowestElement);
///////////////////////////////////////////////////////////
const arrayNumber2 = [-24, -30, -15, -35, -95, -80, -45, -70];
const viewLowestElement2 = findLowestElement(arrayNumber2);
console.log('Lowest :', viewLowestElement2);