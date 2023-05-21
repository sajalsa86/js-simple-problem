//Calculate the total cost of the products in a shopping cart

const shopingItem = [
    { name: 'Shirt', price: 2200, quantity: 3 },
    { name: 'Pant', price: 1600, quantity: 2 },
    { name: 'Belt', price: 600, quantity: 3 },
    { name: 'Tai', price: 300, quantity: 4 },
];

function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        sum = sum + product.price;
    };
    return sum;
};

const totalExpense = totalCost(shopingItem);
console.log('Total Expense is: ', totalExpense);