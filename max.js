let sajal = 900;
let akashi = 1000;
let chumki = 700;

/* if (sajal > akashi) {
    console.log('Sajal is bigger');
}
else {
    console.log('akashi is bigger');
} */
//compare way
if (sajal > akashi && sajal > chumki) {
    console.log('Sajal is bigger');
}
else if (akashi > sajal && akashi > chumki) {
    console.log('akashi is bigger');
}
else {
    console.log('chumki is bigger');
}
//

var max = Math.max(sajal, akashi, chumki);
console.log('The Bigger value is: ', max);

var min = Math.min(sajal, akashi, chumki);
console.log('The smallest value is: ', min);


/////////////////////////////////////////////////////

function findLergest(buss, mini, arm) {
    if (buss > mini && buss > arm) {
        return buss;
    }
    else if (mini > buss && mini > arm) {
        return mini;
    }
    else {
        return arm;
    }
}


let busnessman = 800;
let minister = 700;
let army = 900;

const viewLergest = findLergest(busnessman, minister, army);
console.log('The Bigger value is: ', viewLergest);

////////////////////////////////////////////////////////////////////////////
//write a function find the smallest of three number

function findSmallest(sa, ak, ch) {
    const container = Math.min(sa, ak, ch);
    return container;
}

const resultSmallest = findSmallest(sajal, akashi, chumki);
console.log('The smallest value is: ', resultSmallest);
