// Find the cheapest phone from an array of phone objects
//normal
const phoneGallary = [
    { phoneName: 'RealMe', price: 18000, camera: 16, strorage: '32Gb' },
    { phoneName: 'Redmi', price: 35000, camera: 48, strorage: '48Gb' },
    { phoneName: 'nokia', price: 12000, camera: 8, strorage: '16Gb' },
    { phoneName: 'Oppo', price: 25000, camera: 32, strorage: '32Gb' },
    { phoneName: 'apple', price: 90000, camera: 48, strorage: '164Gb' }
];

let cheapest = phoneGallary[0];
for (const phone of phoneGallary) {
    //console.log(phone); to test
    //compare with price
    if (phone.price < cheapest.price) {
        cheapest = phone;
    }
}
console.log(cheapest);


//with a function

function getCheapest(array) {
    let cheapest = array[0];
    for (const phone of array) {
        //compare with price
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest;
}

/* function getCheapestPhone(array) {
    let cheapest = [];
    for (phone of array)
} */

const viewCheapestPhone = getCheapest(phoneGallary);
console.log("It's my Cheapest Phone: ", viewCheapestPhone);