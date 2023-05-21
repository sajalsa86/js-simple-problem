
// add and multiplication to calculate wood requirements


function woodCalculate(chairQuantity, tableQuantity, bedQuantity) {

    let perChairWood = 3;
    let perTableWood = 5;
    let perBedWood = 4;
    const chairWoodQuanty = chairQuantity * perChairWood;
    const tableWoodQuantity = tableQuantity * perTableWood;
    const bedWoodQuantity = bedQuantity * perBedWood;
    const totalWood = chairWoodQuanty + tableWoodQuantity + bedWoodQuantity;
    return totalWood;
}
const resultTotalWood = woodCalculate(2, 2, 3);
console.log(resultTotalWood);



//example 2
function getProduct(eggQuantity, dalQuantity, onionQuantity) {
    let eggPrice = 10;
    let dalPrice = 80;
    let onionPrice = 40;
    const totalEggPrice = eggQuantity * eggPrice;
    const totalDalPrice = dalQuantity * dalPrice;
    const totalOnionPrice = onionQuantity * onionPrice;
    const allProductPrice = totalEggPrice + totalDalPrice + totalOnionPrice;
    return allProductPrice;
}

const getProductPrice = getProduct(5, 2, 50);
console.log(getProductPrice);

const sum = (5 * 10) + (80 * 2) + (40 * 50);
console.log(sum);