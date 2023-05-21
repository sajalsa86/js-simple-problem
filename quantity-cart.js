//Calculate the total cost of the products in a shopping cart

const shopingItem = [
    { item: 'shoes', price: 1200, quantity: 2 },
    { item: 'shirt', price: 2200, quantity: 3 },
    { item: 'pant', price: 1600, quantity: 5 },
    { item: 'belt', price: 800, quantity: 4 },

];


function shopingCart(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        sum = sum + product.price * product.quantity;

    }
    return sum;
}

const expense = shopingCart(shopingItem);
console.log(expense);